# agent-notes: { ctx: "FastAPI sub-app: GlassChat — see-through learning chat with token/cost inspector", deps: [OpenRouter API], state: active, last: "claude@2026-07-02" }
"""FastAPI sub-app: GlassChat — a see-through chat for learning how LLMs work.

Mounted under /glass-chat. A password gate (server-checked against APP_PASSWORD)
protects the API. Each turn is sent to OpenRouter with the model the user picked;
we return the reply plus the provider's real token usage so the UI can show the
👁 inspector: what's in the context, how many tokens, and the tentative cost.

Why OpenRouter: one key serves several models (OpenAI, Google, Anthropic) so the
learner can compare cost/quality side by side, and its response includes a usage
block with real token counts.
"""
from __future__ import annotations

import asyncio
import os
from pathlib import Path

import httpx
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE = Path(__file__).resolve().parent

app = FastAPI(title="GlassChat")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

# Models the learner may pick. Keys are OpenRouter model IDs (an allowlist so the
# endpoint can't be used to run arbitrary/expensive models). Prices are only used
# client-side to estimate cost; the allowlist is what matters here.
# All FREE on OpenRouter (Mistral publishes no free models there, so we show a
# curated set of free models from other makers — the demo costs $0).
ALLOWED_MODELS = {
    "openai/gpt-oss-120b:free",
    "openai/gpt-oss-20b:free",
    "google/gemma-4-31b-it:free",
    "liquid/lfm-2.5-1.2b-instruct:free",
}
DEFAULT_MODEL = "openai/gpt-oss-120b:free"

MAX_MESSAGES = 40
MAX_CONTENT = 8000
MAX_TOKENS = 1024


def _check_password(pw: str) -> bool:
    expected = os.environ.get("APP_PASSWORD", "")
    # If no password is configured, leave the gate open (useful for local dev).
    return not expected or pw == expected


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/chat")
async def chat(request: Request):
    try:
        body = await request.json()
    except (ValueError, TypeError):
        return JSONResponse({"error": "Bad request."}, status_code=400)

    if not _check_password(str(body.get("password", ""))):
        return JSONResponse({"error": "Wrong password."}, status_code=401)

    model = body.get("model") or DEFAULT_MODEL
    if model not in ALLOWED_MODELS:
        model = DEFAULT_MODEL

    raw = body.get("messages")
    if not isinstance(raw, list) or not raw:
        return JSONResponse({"error": "No messages to send."}, status_code=400)
    messages = [
        {"role": m["role"], "content": str(m["content"])[:MAX_CONTENT]}
        for m in raw[-MAX_MESSAGES:]
        if isinstance(m, dict) and m.get("role") in ("system", "user", "assistant") and m.get("content")
    ]
    if not messages:
        return JSONResponse({"error": "No messages to send."}, status_code=400)

    key = os.environ.get("OPENROUTER_API_KEY", "").strip()
    if not key:
        return JSONResponse(
            {"error": "The chat backend isn't configured (no OpenRouter key set)."},
            status_code=503,
        )

    try:
        # Free models share upstream rate limits and 429 intermittently; retry a
        # few times with a short backoff so transient limits self-heal.
        r = None
        async with httpx.AsyncClient(timeout=55) as client:
            for attempt in range(3):
                r = await client.post(
                    "https://openrouter.ai/api/v1/chat/completions",
                    headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
                    json={"model": model, "messages": messages, "max_tokens": MAX_TOKENS},
                )
                if r.status_code != 429:
                    break
                if attempt < 2:
                    await asyncio.sleep(1.2 * (attempt + 1))
        if r.status_code == 429:
            return JSONResponse(
                {"error": "This free model is busy right now (rate-limited). Try again in a moment, or pick another model."},
                status_code=429,
            )
        if r.status_code >= 400:
            return JSONResponse(
                {"error": f"The model provider returned an error (HTTP {r.status_code})."},
                status_code=502,
            )
        data = r.json()
        reply = (data["choices"][0]["message"]["content"] or "").strip()
        u = data.get("usage") or {}
        usage = {
            "prompt_tokens": int(u.get("prompt_tokens", 0)),
            "completion_tokens": int(u.get("completion_tokens", 0)),
            "total_tokens": int(u.get("total_tokens", 0)),
        }
        if not reply:
            return JSONResponse(
                {"error": "This model didn't return any text this time — try again or pick another model."},
                status_code=502,
            )
    except (httpx.HTTPError, KeyError, IndexError, ValueError, TypeError):
        return JSONResponse({"error": "Couldn't reach the model — please try again."}, status_code=502)

    return {"reply": reply, "usage": usage, "model": model}
