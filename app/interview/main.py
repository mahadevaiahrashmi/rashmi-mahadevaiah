# agent-notes: { ctx: "FastAPI sub-app: interview prep — JD -> free-course study plan", deps: [app/llm.py], state: active, last: "claude@2026-07-03" }
"""FastAPI sub-app: Interview Prep Mapper.

Mounted under /interview-prep. Paste a job description (and an optional prep
timeframe) and get a table mapping each real requirement to FREE courses to
study for the interview. A serverless (OpenRouter via app/llm.py) reinterpretation
of github.com/mahadevaiahrashmi/interview_prep (credited in the UI).

Degree / years-of-experience requirements are intentionally dropped — you can't
study those away. Only genuinely free resources are listed.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .. import llm

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Interview Prep Mapper")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

MAX_JD = 12000
MAX_ROWS = 30

SYSTEM = (
    "You build interview study plans. Given a JOB DESCRIPTION and an optional PREP "
    "TIMEFRAME, map each requirement in the posting to FREE courses a candidate should "
    "study to prepare. Follow these rules exactly:\n\n"
    "1. ONE ROW PER REQUIREMENT — a skill or responsibility sentence, in the order it "
    "appears. Keep the wording close to the original (lightly cleaned).\n"
    "2. DROP QUALIFICATIONS — omit sentences purely about academic degrees (bachelor's, "
    "master's, PhD, 'degree in ...') or years/length of experience ('5+ years', "
    "'minimum 3 years'). You cannot study those away. If a sentence MIXES a qualification "
    "with a real skill (e.g. '5+ years building REST APIs in Python'), keep the row but "
    "rewrite the requirement to the SKILL only ('Building REST APIs in Python').\n"
    "3. FREE ONLY — every course must be genuinely free (free tier, free audit, open "
    "courseware, official docs, or a full free video course). Never list paid courses, "
    "paywalled certificates, or 'free trials' that later charge. Prefer stable sources: "
    "freeCodeCamp, Kaggle Learn, MIT OpenCourseWare, Khan Academy, official docs, Hugging "
    "Face, fast.ai, and the Google/AWS/Microsoft free learning hubs.\n"
    "4. WORKING LINKS — a real https URL per course, 2-4 courses per row, most relevant "
    "first. If you can't find a free resource for a requirement, OMIT that row.\n"
    "5. TIMEFRAME — if a prep timeframe is given (e.g. '1 week', '10 days'), assign each "
    "row a study window ('timebox', e.g. 'Day 1', 'Days 3-4') that fits all rows in order "
    "into it, and write a one-line 'guidance' pacing summary. If no timeframe, set every "
    "timebox to \"\" and guidance to \"\".\n\n"
    "Output ONLY a JSON object, no prose, no code fences:\n"
    '{"role": str (inferred job title), "guidance": str, "rows": [ {"requirement": str, '
    '"timebox": str, "courses": [ {"title": str, "platform": str, "url": str} ]} ]}'
)


def _extract_json(raw: str):
    text = (raw or "").strip()
    if text.startswith("```"):
        text = re.sub(r"^```[a-zA-Z]*\n?", "", text)
        text = re.sub(r"\n?```$", "", text.strip())
    start = text.find("{")
    if start == -1:
        return None
    depth = 0
    in_str = esc = False
    for i in range(start, len(text)):
        ch = text[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
            continue
        if ch == '"':
            in_str = True
        elif ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                try:
                    return json.loads(text[start:i + 1])
                except json.JSONDecodeError:
                    return None
    return None


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/generate")
def generate(jd: str = Form(...), timeframe: str = Form("")):
    if not llm.available():
        return {"ok": False, "error": "The planner is unavailable right now (no model configured)."}
    jd = jd.strip()[:MAX_JD]
    timeframe = timeframe.strip()[:120]
    if len(jd) < 40:
        return {"ok": False, "error": "Paste a fuller job description to map its requirements."}

    prompt = f"JOB DESCRIPTION:\n{jd}\n\nPREP TIMEFRAME: {timeframe or '(none given)'}\n\nOutput the study-plan JSON now."
    # Free models 429 intermittently; retry the whole provider chain once.
    raw = llm.complete(prompt, system=SYSTEM, max_tokens=2600)
    if not (raw or "").strip():
        raw = llm.complete(prompt, system=SYSTEM, max_tokens=2600)
    if not (raw or "").strip():
        return {"ok": False, "error": "The planner is busy right now (free models rate-limited) — please try again in a moment."}
    data = _extract_json(raw)
    if not isinstance(data, dict) or not isinstance(data.get("rows"), list):
        return {"ok": False, "error": "The plan came back malformed — please try again."}

    rows = []
    for r in data["rows"][:MAX_ROWS]:
        if not isinstance(r, dict):
            continue
        req = str(r.get("requirement", "")).strip()[:400]
        if not req:
            continue
        courses = []
        for c in (r.get("courses") or [])[:5]:
            if not isinstance(c, dict):
                continue
            url = str(c.get("url", "")).strip()
            title = str(c.get("title", "")).strip()[:200]
            if title and url.startswith("http"):
                courses.append({"title": title, "platform": str(c.get("platform", "")).strip()[:80], "url": url[:600]})
        if courses:  # drop rows with no free resource
            rows.append({"requirement": req, "timebox": str(r.get("timebox", "")).strip()[:40], "courses": courses})

    if not rows:
        return {"ok": False, "error": "No free-course matches found — try a job description with clearer skills."}
    return {
        "ok": True,
        "role": str(data.get("role", "")).strip()[:160],
        "guidance": str(data.get("guidance", "")).strip()[:300],
        "rows": rows,
    }
