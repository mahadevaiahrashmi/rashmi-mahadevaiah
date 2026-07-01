"""FastAPI sub-app: Personal Voice Skill.

Mounted under /personal-voice. The learner pastes samples of their own writing,
says what they want to write, and the model drafts it in their voice. Reuses the
OpenRouter provider (paid model first, free backups). Voice mimicry genuinely
needs a model, so when none is available we say so plainly rather than faking it.
"""
from __future__ import annotations

import os
from pathlib import Path

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from ..providers import ProviderError, get_provider

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Personal Voice Skill")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

HAS_OPENROUTER = bool(os.environ.get("OPENROUTER_API_KEY"))
MODELS = [
    m.strip()
    for m in os.environ.get(
        "OPENROUTER_MODELS",
        "deepseek/deepseek-chat,meta-llama/llama-3.3-70b-instruct:free",
    ).split(",")
    if m.strip()
]

KINDS = {
    "reply": "a reply",
    "email": "an email",
    "post": "a social/LinkedIn post",
    "message": "a short message",
}

SYSTEM = (
    "You are a ghostwriter who mimics one specific person's writing voice. "
    "Study the WRITING SAMPLES to learn their tone, vocabulary, sentence length, "
    "formality, punctuation habits, and quirks. Then write the requested piece so "
    "it reads as if THEY wrote it — not like a generic AI. Rules: match their voice "
    "closely; never invent facts, names, or commitments; no clichés or corporate "
    "filler unless they use them; output ONLY the finished text, with no preamble, "
    "notes, or quotation marks around it."
)

# Length limits keep prompts (and cost) bounded and avoid abuse.
MAX_SAMPLES = 8000
MAX_FIELD = 4000


def _draft(samples: str, kind: str, context: str, instruction: str, refine: str, previous: str) -> str | None:
    kind_label = KINDS.get(kind, "a piece of writing")
    parts = [
        SYSTEM,
        "\n\n=== WRITING SAMPLES (their voice) ===\n" + samples.strip()[:MAX_SAMPLES],
        f"\n\n=== TASK ===\nWrite {kind_label}.",
    ]
    if context.strip():
        parts.append("\n\nContext they are responding to:\n" + context.strip()[:MAX_FIELD])
    if instruction.strip():
        parts.append("\n\nWhat it should say / do:\n" + instruction.strip()[:MAX_FIELD])
    if refine.strip() and previous.strip():
        parts.append(
            "\n\nHere is a previous draft. Revise it as follows: "
            f"{refine.strip()[:200]}. Keep the same voice.\n\nPrevious draft:\n"
            + previous.strip()[:MAX_FIELD]
        )
    prompt = "".join(parts) + "\n\nWrite it now:"

    if HAS_OPENROUTER:
        for model in MODELS:
            try:
                text = get_provider("openrouter", model).generate(prompt)
                if text and text.strip():
                    return text.strip()
            except ProviderError:
                continue
    return None


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/draft")
def draft(
    samples: str = Form(...),
    instruction: str = Form(""),
    kind: str = Form("reply"),
    context: str = Form(""),
    refine: str = Form(""),
    previous: str = Form(""),
):
    if len(samples.strip()) < 40:
        return {"ok": False, "error": "Paste a bit more of your own writing first (a few sentences at least) so it can learn your voice."}
    if not instruction.strip() and not context.strip() and not (refine.strip() and previous.strip()):
        return {"ok": False, "error": "Tell it what you want to write — either what to say, or paste the message you're replying to."}

    text = _draft(samples, kind, context, instruction, refine, previous)
    if text is None:
        return {
            "ok": False,
            "error": "The AI writer is unavailable right now (no working model). Voice drafting needs a live model — please try again shortly.",
        }
    return {"ok": True, "draft": text}
