"""FastAPI sub-app: GTM with AI-generated videos.

Mounted under /gtm-videos. Two capabilities:
  1. Plan  — given a product/audience/channel, produce a full GTM plan with
     paste-ready video prompts (OpenRouter LLM).
  2. Video — actually generate an ~8s clip from a prompt via Google Veo
     (Gemini API). Veo is a long-running job, so generation is async:
       POST /video/start   -> starts the job, returns an operation id
       GET  /video/status  -> polls the operation
       GET  /video/file    -> proxy-streams the finished MP4 (key stays server-side)

Veo costs real money per clip and needs GEMINI_API_KEY; if it's not set, the
video buttons are disabled and only the plan/prompts are produced.
"""
from __future__ import annotations

import base64
import json
import os
import re
from pathlib import Path

import httpx
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse, Response
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from ..providers import ProviderError, get_provider

BASE = Path(__file__).resolve().parent

app = FastAPI(title="GTM with AI Video")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

# ---- Plan (OpenRouter text) ----
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

# ---- Video (Google Veo via Gemini API) ----
GEMINI_KEY = os.environ.get("GEMINI_API_KEY", "")
VEO_MODEL = os.environ.get("GEMINI_VEO_MODEL", "veo-3.0-fast-generate-001")
GENAI = "https://generativelanguage.googleapis.com/v1beta"

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


def _extract_json(raw: str, open_ch: str, close_ch: str):
    text = raw.strip()
    if text.startswith("```"):
        text = re.sub(r"^```[a-zA-Z]*\n?", "", text)
        text = re.sub(r"\n?```$", "", text.strip())
    start = text.find(open_ch)
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
        elif ch == open_ch:
            depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0:
                try:
                    return json.loads(text[start : i + 1])
                except json.JSONDecodeError:
                    return None
    return None


def extract_json_object(raw):
    return _extract_json(raw, "{", "}")


def build_plan(product, audience, channel, angle):
    prompt = (
        f"PRODUCT / WHAT'S LAUNCHING:\n{product.strip()[:MAX_FIELD]}\n\n"
        f"TARGET AUDIENCE:\n{(audience.strip()[:MAX_FIELD] or 'not specified — infer a sharp one')}\n\n"
        f"CHANNEL: {channel}\n"
        f"EXTRA ANGLE / GOAL: {(angle.strip()[:MAX_FIELD] or 'none')}\n\n"
        "Design the full GTM plan now."
    )
    if not HAS_OPENROUTER:
        return None, "The strategist is unavailable right now (no model configured). Please try again shortly."
    for model in MODELS:
        try:
            text = get_provider("openrouter", model).generate(f"{SYSTEM}\n\n{prompt}")
            plan = extract_json_object(text)
            if plan:
                return plan, None
        except ProviderError:
            continue
    return None, "The AI strategist is busy right now. Please try again shortly."


# ---------- Veo helpers ----------
def _find_video(obj):
    """Walk the operation response and return (uri, base64_bytes) — whichever exists."""
    found = {"uri": None, "b64": None}

    def walk(o):
        if found["uri"] or found["b64"]:
            return
        if isinstance(o, dict):
            for k, v in o.items():
                kl = k.lower()
                if isinstance(v, str) and not found["uri"] and ("uri" in kl or "url" in kl) and "http" in v:
                    found["uri"] = v
                elif isinstance(v, str) and not found["b64"] and ("bytes" in kl or kl.endswith("base64") or "base64" in kl) and len(v) > 200:
                    found["b64"] = v
                else:
                    walk(v)
        elif isinstance(o, list):
            for x in o:
                walk(x)

    walk(obj)
    return found["uri"], found["b64"]


def _auth_uri(uri: str) -> str:
    if "generativelanguage.googleapis.com" in uri and "key=" not in uri:
        return uri + ("&" if "?" in uri else "?") + "key=" + GEMINI_KEY
    return uri


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request,
        "index.html",
        {"root_path": request.scope.get("root_path", ""), "veo_on": bool(GEMINI_KEY)},
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


@app.post("/video/start")
def video_start(prompt: str = Form(...), aspect: str = Form("9:16")):
    if not GEMINI_KEY:
        return JSONResponse({"ok": False, "error": "Video generation isn't configured. Add a GEMINI_API_KEY (with billing) to enable Veo."}, status_code=200)
    if len(prompt.strip()) < 8:
        return {"ok": False, "error": "Prompt too short."}
    body = {
        "instances": [{"prompt": prompt.strip()[:1500]}],
        "parameters": {"aspectRatio": aspect if aspect in ("9:16", "16:9", "1:1") else "9:16"},
    }
    url = f"{GENAI}/models/{VEO_MODEL}:predictLongRunning?key={GEMINI_KEY}"
    try:
        r = httpx.post(url, json=body, timeout=40)
    except httpx.HTTPError as exc:
        return {"ok": False, "error": f"Could not reach Veo: {exc}"}
    if r.status_code != 200:
        return {"ok": False, "error": f"Veo start failed ({r.status_code}): {r.text[:300]}"}
    op = r.json().get("name")
    if not op:
        return {"ok": False, "error": "Veo did not return an operation id."}
    return {"ok": True, "op": op}


@app.get("/video/status")
def video_status(op: str):
    if not GEMINI_KEY:
        return {"ok": False, "error": "Not configured."}
    try:
        r = httpx.get(f"{GENAI}/{op}?key={GEMINI_KEY}", timeout=40)
    except httpx.HTTPError as exc:
        return {"ok": False, "error": f"Poll failed: {exc}"}
    if r.status_code != 200:
        return {"ok": False, "error": f"Poll failed ({r.status_code}): {r.text[:200]}"}
    data = r.json()
    if not data.get("done"):
        return {"ok": True, "done": False}
    if data.get("error"):
        return {"ok": False, "done": True, "error": str(data["error"])[:300]}
    uri, b64 = _find_video(data.get("response", data))
    if not uri and not b64:
        return {"ok": False, "done": True, "error": "Finished but no video found in the response."}
    return {"ok": True, "done": True}


@app.get("/video/file")
def video_file(op: str):
    """Fetch the finished video server-side (key never touches the browser) and stream it."""
    if not GEMINI_KEY:
        return Response("Not configured", status_code=400)
    try:
        r = httpx.get(f"{GENAI}/{op}?key={GEMINI_KEY}", timeout=40)
        r.raise_for_status()
    except httpx.HTTPError as exc:
        return Response(f"Poll failed: {exc}", status_code=502)
    data = r.json()
    if not data.get("done"):
        return Response("Not ready", status_code=409)
    uri, b64 = _find_video(data.get("response", data))
    if b64:
        try:
            return Response(base64.b64decode(b64), media_type="video/mp4")
        except Exception:
            return Response("Bad video data", status_code=502)
    if uri:
        try:
            vr = httpx.get(_auth_uri(uri), timeout=90, follow_redirects=True)
            vr.raise_for_status()
        except httpx.HTTPError as exc:
            return Response(f"Download failed: {exc}", status_code=502)
        return Response(vr.content, media_type="video/mp4")
    return Response("No video", status_code=404)
