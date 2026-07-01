"""FastAPI sub-app: PM AI Agent — a conversational Product Manager co-pilot.

Mounted under /pm-agent. Multi-turn chat: the browser keeps the conversation
and sends it each turn; the server prepends a PM system prompt and calls
OpenRouter (deepseek/deepseek-chat primary, free fallback). No data is stored
server-side.
"""
from __future__ import annotations

import json
import os
from pathlib import Path

import httpx
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE = Path(__file__).resolve().parent

app = FastAPI(title="PM AI Agent")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

API_URL = "https://openrouter.ai/api/v1/chat/completions"
API_KEY = os.environ.get("OPENROUTER_API_KEY", "")
MODELS = [
    m.strip()
    for m in os.environ.get(
        "OPENROUTER_MODELS",
        "deepseek/deepseek-chat,meta-llama/llama-3.3-70b-instruct:free",
    ).split(",")
    if m.strip()
]

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
    "user's product, market, or metrics; if you're estimating, say so."
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


def _chat(messages):
    payload = {"model": None, "messages": [{"role": "system", "content": SYSTEM}] + messages, "max_tokens": 1400}
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json", "X-Title": "PM AI Agent"}
    for model in MODELS:
        payload["model"] = model
        try:
            r = httpx.post(API_URL, headers=headers, json=payload, timeout=55)
        except httpx.HTTPError:
            continue
        if r.status_code != 200:
            continue
        try:
            content = r.json()["choices"][0]["message"]["content"]
        except (ValueError, KeyError, IndexError, TypeError):
            continue
        if content and content.strip():
            return content.strip()
    return None


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/chat")
def chat(messages: str = Form(...)):
    if not API_KEY:
        return {"ok": False, "error": "The PM agent is unavailable right now (no model configured). Please try again shortly."}
    history = _clean_history(messages)
    if not history or history[-1]["role"] != "user":
        return {"ok": False, "error": "Say something to the PM agent to get started."}
    reply = _chat(history)
    if reply is None:
        return {"ok": False, "error": "The PM agent is busy right now. Please try again in a moment."}
    return {"ok": True, "reply": reply}
