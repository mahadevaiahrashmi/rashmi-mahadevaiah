"""FastAPI sub-app: PM AI Agent — a conversational Product Manager co-pilot.

Mounted under /pm-agent. Multi-turn chat: the browser keeps the conversation
and sends it each turn; the server prepends a PM system prompt and calls
OpenRouter (deepseek/deepseek-chat primary, free fallback). No data is stored
server-side.
"""
from __future__ import annotations

import json
from pathlib import Path

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .. import llm
from . import skills as skill_lib

BASE = Path(__file__).resolve().parent

app = FastAPI(title="PM AI Agent")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

MAX_TURNS = 16          # cap history we forward
MAX_CONTENT = 6000      # cap each message's length
SYSTEM = (
    "You are a sharp, experienced Product Manager AI — a co-pilot for product "
    "work. You help draft PRDs, break features into user stories with acceptance "
    "criteria, prioritize backlogs (RICE / MoSCoW), build roadmaps, sharpen "
    "positioning, and pressure-test ideas.\n\n"
    "Style: concise, structured, and practical. Use markdown (headings, bold, "
    "bulleted/numbered lists, and tables) when it makes the answer clearer. When a "
    "request is ambiguous, ask ONE crisp clarifying question — but don't stall: "
    "make reasonable assumptions and state them. Never invent facts about the "
    "user's product, market, or metrics; if you're estimating, say so. End with a "
    "suggested next step.\n\n"
    "SKILLS — when the request matches one of these, follow its template exactly:\n\n"
    "• PRD → sections in this order: 1. Summary · 2. Problem & why-now · "
    "3. Goals & non-goals · 4. Target users (table) · 5. User stories · "
    "6. Functional requirements (FR1, FR2, …) · 7. UX flow · 8. Success metrics · "
    "9. Risks & mitigations (table) · 10. Open questions.\n\n"
    "• User stories → 3–7 stories, each 'As a <user>, I can <capability> so that "
    "<benefit>' with 2–4 acceptance criteria in Given/When/Then form.\n\n"
    "• Prioritize (RICE) → a markdown table with columns Item | Reach | Impact | "
    "Confidence | Effort | RICE score, where RICE = (Reach×Impact×Confidence)/Effort "
    "(Impact 3/2/1/0.5/0.25; Confidence 100/80/50%; Effort in person-weeks). State "
    "the assumption behind each number and sort by RICE descending. Offer MoSCoW if asked.\n\n"
    "• Roadmap → Now / Next / Later, organized by theme, each tied to an outcome or "
    "metric and a rough size (S/M/L). No invented dates.\n\n"
    "• Critique / pressure-test → the riskiest assumptions, what would make it fail, "
    "and the cheapest experiment to de-risk it before building.\n\n"
    "You are backed by the Pro-PM skill library (300+ PM skills). When relevant "
    "skill docs are supplied below under 'RELEVANT PRO-PM SKILLS', treat them as "
    "your playbook: follow their steps and structure, adapting to the user's "
    "request — don't just echo their headers."
)


def _clean_history(raw: str):
    try:
        msgs = json.loads(raw)
    except (json.JSONDecodeError, TypeError):
        return None
    if not isinstance(msgs, list):
        return None
    out = []
    for m in msgs[-MAX_TURNS:]:
        if not isinstance(m, dict):
            continue
        role = m.get("role")
        content = m.get("content")
        if role in ("user", "assistant") and isinstance(content, str) and content.strip():
            out.append({"role": role, "content": content.strip()[:MAX_CONTENT]})
    return out


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/chat")
def chat(messages: str = Form(...)):
    if not llm.available():
        return {"ok": False, "error": "The PM agent is unavailable right now (no model configured). Please try again shortly."}
    history = _clean_history(messages)
    if not history or history[-1]["role"] != "user":
        return {"ok": False, "error": "Say something to the PM agent to get started."}

    # Retrieve the most relevant Pro-PM skills for this turn and load them in.
    hits = skill_lib.retrieve(history[-1]["content"], k=3)
    system = SYSTEM
    if hits:
        blocks = [
            f"=== {h['title']} ({h['cat']}) ===\n{skill_lib.load(h['path'])}" for h in hits
        ]
        system = SYSTEM + "\n\nRELEVANT PRO-PM SKILLS:\n\n" + "\n\n".join(blocks)

    reply = llm.chat(history, system=system, max_tokens=1400)
    if reply is None:
        return {"ok": False, "error": "The PM agent is busy right now. Please try again in a moment."}
    return {"ok": True, "reply": reply, "skills_used": [h["title"] for h in hits]}
