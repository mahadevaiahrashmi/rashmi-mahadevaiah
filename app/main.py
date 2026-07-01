"""FastAPI web app: form in, four tailored documents out.

Routes:
  GET  /                 the input form
  GET  /providers        provider availability (JSON)
  POST /generate         run the pipeline, render 4 files, return links + preview
  GET  /download/{job}/{filename}   serve a generated file
"""
from __future__ import annotations

import base64
import os
import re
import shutil
import time
import uuid
from pathlib import Path

from fastapi import FastAPI, Form, HTTPException, Request
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .generator import GenerationError, generate_documents
from .providers import list_providers
from .render_docx import render_cover_letter_docx, render_resume_docx
from .render_pdf import (
    cover_letter_fit_scale,
    render_cover_letter_pdf,
    render_resume_pdf,
    resume_fit_scale,
)

BASE = Path(__file__).resolve().parent

# On Vercel the app dir is read-only; only /tmp is writable. Fall back to /tmp
# there (and keep the local ./generated dir everywhere else). Override with
# GENERATED_DIR if needed.
ON_VERCEL = bool(os.environ.get("VERCEL"))
_default_gen = "/tmp/generated" if ON_VERCEL else str(BASE.parent / "generated")
GEN = Path(os.environ.get("GENERATED_DIR", _default_gen))
GEN.mkdir(parents=True, exist_ok=True)

# Serverless instances are ephemeral and not shared, so a later /download request
# may land on a different instance that never wrote the file. On Vercel we instead
# hand the browser inline base64 data: URLs so downloads need no second request.
INLINE_DOWNLOADS = ON_VERCEL

# The UI has no engine picker: the server decides. When an OpenRouter key is
# configured we try a list of $0 ("free") models in order — free models are
# shared and frequently rate-limited (HTTP 429), so we fail over to the next one
# and finally to the offline Mock preview, so the page never hard-fails.
HAS_OPENROUTER = bool(os.environ.get("OPENROUTER_API_KEY"))

FREE_MODELS = [
    m.strip()
    for m in os.environ.get(
        "OPENROUTER_MODELS",
        "meta-llama/llama-3.3-70b-instruct:free,"
        "qwen/qwen3-next-80b-a3b-instruct:free,"
        "openai/gpt-oss-120b:free,"
        "google/gemma-4-31b-it:free",
    ).split(",")
    if m.strip()
]


def tailor(jd: str, resume: str, instructions: str):
    """Return (docs, engine_label). Try free models in order, else Mock."""
    errors = []
    if HAS_OPENROUTER:
        for model in FREE_MODELS:
            try:
                return generate_documents(jd, resume, instructions, "openrouter", model), model
            except GenerationError as exc:
                errors.append(f"{model}: {exc}")
    # Offline fallback — always available, so the user still gets a document.
    return generate_documents(jd, resume, instructions, "mock", None), "mock (offline preview)"

# Generated output accumulates one dir per run; sweep dirs older than this on each
# request. Set GENERATED_TTL_HOURS=0 to disable cleanup and keep everything.
GENERATED_TTL_HOURS = float(os.environ.get("GENERATED_TTL_HOURS", "24"))

JOB_RE = re.compile(r"[0-9a-f]{32}")

DOCX_MIME = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"


def cleanup_generated(root: Path, ttl_hours: float) -> int:
    """Delete job dirs older than `ttl_hours`; return how many were removed.

    Only touches 32-hex dirs we created, never anything else dropped in
    `generated/`. A non-positive TTL disables cleanup.
    """
    if ttl_hours <= 0 or not root.exists():
        return 0
    cutoff = time.time() - ttl_hours * 3600
    removed = 0
    for child in root.iterdir():
        if not (child.is_dir() and JOB_RE.fullmatch(child.name)):
            continue
        try:
            if child.stat().st_mtime < cutoff:
                shutil.rmtree(child, ignore_errors=True)
                removed += 1
        except OSError:
            pass
    return removed

app = FastAPI(title="Resume Tailor")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))


def safe_slug(name: str) -> str:
    slug = re.sub(r"[^A-Za-z0-9]+", "_", name or "").strip("_")
    return slug[:40] or "candidate"


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    # root_path is the mount prefix (e.g. "/resume-tailor") so the template can
    # build correct absolute URLs for static assets and fetch() calls.
    return templates.TemplateResponse(
        request,
        "index.html",
        {"providers": list_providers(), "root_path": request.scope.get("root_path", "")},
    )


@app.get("/providers")
def providers():
    return list_providers(include_models=True)


@app.post("/generate")
def generate(
    jd: str = Form(...),
    resume: str = Form(...),
    instructions: str = Form(""),
):
    # No picker in the UI — the server picks the engine (free models, else Mock).
    cleanup_generated(GEN, GENERATED_TTL_HOURS)
    try:
        docs, engine = tailor(jd, resume, instructions)
    except GenerationError as exc:
        raise HTTPException(status_code=400, detail=str(exc))

    job = uuid.uuid4().hex
    job_dir = GEN / job
    job_dir.mkdir(parents=True, exist_ok=True)
    slug = safe_slug(docs.resume.contact.name)

    names = {
        "resume_pdf": f"{slug}_Resume.pdf",
        "resume_docx": f"{slug}_Resume.docx",
        "cover_pdf": f"{slug}_CoverLetter.pdf",
        "cover_docx": f"{slug}_CoverLetter.docx",
    }
    # Solve the one-page fit once on the PDF, then render both formats at that
    # scale so the Word file matches the PDF instead of spilling to a 2nd page.
    resume_scale = resume_fit_scale(docs.resume)
    cover_scale = cover_letter_fit_scale(docs.cover_letter, docs.resume.contact)
    render_resume_pdf(docs.resume, str(job_dir / names["resume_pdf"]), scale=resume_scale)
    render_resume_docx(docs.resume, str(job_dir / names["resume_docx"]), scale=resume_scale)
    render_cover_letter_pdf(docs.cover_letter, docs.resume.contact, str(job_dir / names["cover_pdf"]), scale=cover_scale)
    render_cover_letter_docx(docs.cover_letter, docs.resume.contact, str(job_dir / names["cover_docx"]), scale=cover_scale)

    def entry(label, key):
        name = names[key]
        if INLINE_DOWNLOADS:
            mime = DOCX_MIME if name.endswith(".docx") else "application/pdf"
            data = base64.b64encode((job_dir / name).read_bytes()).decode()
            href = f"data:{mime};base64,{data}"
        else:
            href = f"/download/{job}/{name}"
        return {"label": label, "url": href, "name": name}

    return {
        "job": job,
        "files": [
            entry("Resume — PDF", "resume_pdf"),
            entry("Resume — Word", "resume_docx"),
            entry("Cover Letter — PDF", "cover_pdf"),
            entry("Cover Letter — Word", "cover_docx"),
        ],
        "preview": docs.model_dump(),
        "engine": engine,
    }


@app.get("/download/{job}/{filename}")
def download(job: str, filename: str):
    if not JOB_RE.fullmatch(job):
        raise HTTPException(status_code=404, detail="Not found")
    path = (GEN / job / filename).resolve()
    if not str(path).startswith(str(GEN.resolve()) + "/") or not path.is_file():
        raise HTTPException(status_code=404, detail="Not found")
    media = DOCX_MIME if filename.endswith(".docx") else "application/pdf"
    return FileResponse(str(path), media_type=media, filename=filename)
