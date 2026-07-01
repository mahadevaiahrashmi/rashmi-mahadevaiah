"""FastAPI sub-app: GTM with AI-generated videos.

Mounted under /gtm-videos. Given a product, audience, and channel (Instagram or
LinkedIn), it produces a complete, executable go-to-market plan built around
short-form AI video — including ready-to-paste generation prompts for Higgsfield
and Google Veo — aimed at landing the first 10 users.

We generate the plan + assets (not the videos themselves); the user takes the
prompts to Higgsfield/Veo to render, then posts per the plan.
"""
from __future__ import annotations

import json
import os
import re
from pathlib import Path

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from ..providers import ProviderError, get_provider

BASE = Path(__file__).resolve().parent

app = FastAPI(title="GTM with AI Video")
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
MAX_FIELD = 1200

SYSTEM = (
    "You are a scrappy founder-mode go-to-market strategist who specializes in "
    "short-form AI-generated video. Given a product, its audience, and a channel "
    "(Instagram or LinkedIn), design a complete, executable GTM plan to land the "
    "FIRST 10 USERS in ~2 weeks. Be specific and practical — no vague platitudes.\n\n"
    "The video concepts must include ready-to-paste generation prompts for AI "
    "video tools (Higgsfield, Google Veo): short (~8 second) cinematic clips with "
    "clear subject, setting, camera motion, lighting, and mood. Tailor the format "
    "and tone to the chosen channel (Reels-style hooks for Instagram; "
    "insight/POV-style for LinkedIn).\n\n"
    "Respond with ONLY a JSON object (no prose, no code fences):\n"
    "{\n"
    '  "positioning": str (one crisp sentence — who it\'s for and the core promise),\n'
    '  "hook": str (the single sharpest hook/angle for this channel),\n'
    '  "videos": [ {"title": str, "gen_prompt": str (paste-ready Higgsfield/Veo '
    'prompt, ~8s), "script": str (on-screen text or voiceover), "caption": str, '
    '"hashtags": [str], "cta": str} ]  (give 3 to 5),\n'
    '  "posting_plan": [ {"day": str (e.g. "Day 1"), "action": str} ]  (a ~2-week cadence),\n'
    '  "channel_tactics": [str]  (channel-specific tips to maximize reach + replies),\n'
    '  "first10": [str]  (concrete steps to convert viewers into the first 10 users),\n'
    '  "metric": str  (the one number to watch)\n'
    "}"
)


def extract_json_object(raw: str):
    text = raw.strip()
    if text.startswith("```"):
        text = re.sub(r"^```[a-zA-Z]*\n?", "", text)
        text = re.sub(r"\n?```$", "", text.strip())
    start = text.find("{")
    if start == -1:
        return None
    depth = 0
    in_str = False
    esc = False
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
                    return json.loads(text[start : i + 1])
                except json.JSONDecodeError:
                    return None
    return None


def build_plan(product: str, audience: str, channel: str, angle: str):
    prompt = (
        f"PRODUCT / WHAT'S LAUNCHING:\n{product.strip()[:MAX_FIELD]}\n\n"
        f"TARGET AUDIENCE:\n{(audience.strip()[:MAX_FIELD] or 'not specified — infer a sharp one')}\n\n"
        f"CHANNEL: {channel}\n"
        f"EXTRA ANGLE / GOAL: {(angle.strip()[:MAX_FIELD] or 'none')}\n\n"
        "Design the full GTM plan now."
    )
    if not HAS_OPENROUTER:
        return None, "The strategist is unavailable right now (no model configured). Please try again shortly."
    last = None
    for model in MODELS:
        try:
            text = get_provider("openrouter", model).generate(f"{SYSTEM}\n\n{prompt}")
            plan = extract_json_object(text)
            if plan:
                return plan, None
        except ProviderError as exc:
            last = str(exc)
    return None, "The AI strategist couldn't produce a clean plan this time. Try again in a moment." if last is None else \
        "The AI strategist is busy right now. Please try again shortly."


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/plan")
def plan(product: str = Form(...), audience: str = Form(""), channel: str = Form("Instagram"), angle: str = Form("")):
    if len(product.strip()) < 12:
        return {"ok": False, "error": "Tell it what you're launching — a sentence or two about the product and what it does."}
    channel = channel if channel in ("Instagram", "LinkedIn") else "Instagram"
    result, err = build_plan(product, audience, channel, angle)
    if not result:
        return {"ok": False, "error": err}
    return {"ok": True, "plan": result, "channel": channel}
