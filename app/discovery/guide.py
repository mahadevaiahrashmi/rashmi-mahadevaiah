"""FastAPI sub-app: the Product Discovery interactive guide.

Mounted under /product-discovery. Serves a stepper-based lesson page and a
/coach endpoint that gives AI feedback on the learner's practice answers,
reusing the OpenRouter provider (paid model first, free backups, graceful
fallback message if the model is unavailable).
"""
from __future__ import annotations

import json
from pathlib import Path

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .content import MODULES, MODULE_IDS
from .. import llm

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Product Discovery Guide")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

_MODULES_BY_ID = {m["id"]: m for m in MODULES}

SYSTEM = (
    "You are a warm, sharp product-discovery coach teaching a beginner. "
    "You give feedback on a short practice answer. Be encouraging but honest. "
    "Keep it under 130 words, plain text (no markdown headers). Structure: one "
    "line on what they got right, one specific improvement, and a better version "
    "or next step they can copy. Never invent facts about their idea."
)


def _coach(module: dict, answer: str) -> str | None:
    """Ask the model for feedback; return None if no engine is available."""
    prompt = (
        f"Lesson: {module['title']}\n"
        f"What to look for: {module['coach_focus']}\n"
        f"The learner's practice answer:\n\"\"\"\n{answer.strip()}\n\"\"\"\n\n"
        "Give your feedback now."
    )
    return llm.complete(prompt, system=SYSTEM, max_tokens=400)


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    root = request.scope.get("root_path", "")
    return templates.TemplateResponse(
        request,
        "index.html",
        {"modules_json": json.dumps(MODULES), "root_path": root},
    )


@app.post("/coach")
def coach(module_id: str = Form(...), answer: str = Form(...)):
    module = _MODULES_BY_ID.get(module_id)
    if module is None or module_id not in MODULE_IDS:
        return {"ok": False, "feedback": "Unknown lesson."}
    if not answer.strip():
        return {"ok": False, "feedback": "Write a short answer first, then ask for feedback."}
    feedback = _coach(module, answer)
    if feedback is None:
        # No AI available right now — still teach with a deterministic nudge.
        return {
            "ok": True,
            "ai": False,
            "feedback": (
                "The AI coach is busy right now, but here's the checkpoint for this "
                f"step: {module['coach_focus']} Re-read your answer against that and "
                "tighten it — then try again in a moment for live feedback."
            ),
        }
    return {"ok": True, "ai": True, "feedback": feedback}
