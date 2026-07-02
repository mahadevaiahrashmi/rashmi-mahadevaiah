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
# Ordered by observed reliability — used both as the dropdown allowlist and as
# the fallback order when a picked free model is rate-limited.
MODELS_ORDER = [
    "openai/gpt-oss-20b:free",
    "google/gemma-4-31b-it:free",
    "openai/gpt-oss-120b:free",
    "liquid/lfm-2.5-1.2b-instruct:free",
]
ALLOWED_MODELS = set(MODELS_ORDER)
DEFAULT_MODEL = "openai/gpt-oss-20b:free"

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

    # Free models share upstream rate limits and 429 intermittently. Try the
    # picked model (with a couple of quick retries), and if it stays busy, fall
    # back to the other free models so the learner still gets an answer ($0).
    # We report the model that actually replied so the inspector stays accurate.
    async def _try(client, cand, tries):
        r = None
        for attempt in range(tries):
            r = await client.post(
                "https://openrouter.ai/api/v1/chat/completions",
                headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
                json={"model": cand, "messages": messages, "max_tokens": MAX_TOKENS},
            )
            if r.status_code != 429:
                break
            if attempt < tries - 1:
                await asyncio.sleep(1.0 * (attempt + 1))
        return r

    order = [model] + [m for m in MODELS_ORDER if m != model]
    try:
        used, reply, usage = None, "", None
        async with httpx.AsyncClient(timeout=55) as client:
            for idx, cand in enumerate(order):
                r = await _try(client, cand, tries=(2 if idx == 0 else 1))
                if r.status_code != 200:
                    continue
                data = r.json()
                text = (data["choices"][0]["message"]["content"] or "").strip()
                if not text:
                    continue
                u = data.get("usage") or {}
                used, reply = cand, text
                usage = {
                    "prompt_tokens": int(u.get("prompt_tokens", 0)),
                    "completion_tokens": int(u.get("completion_tokens", 0)),
                    "total_tokens": int(u.get("total_tokens", 0)),
                }
                break
    except (httpx.HTTPError, KeyError, IndexError, ValueError, TypeError):
        return JSONResponse({"error": "Couldn't reach the model — please try again."}, status_code=502)

    if used is None:
        return JSONResponse(
            {"error": "All the free models are busy right now (rate-limited). Give it a moment and try again."},
            status_code=429,
        )
    return {"reply": reply, "usage": usage, "model": used, "fell_back": used != model}
