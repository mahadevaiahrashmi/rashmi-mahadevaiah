"""FastAPI sub-app: Funded Companies Agent.

Mounted under /funded-companies. The user gives an ideal-customer profile (sector,
stage, geography, what they sell); the agent searches the live web (via OpenRouter's
web plugin) for recently funded companies that fit, and returns an enriched,
sourced prospect list with an outreach angle for each.

Grounding matters here: an ungrounded LLM will happily invent plausible-but-fake
companies. So we prefer web-sourced results, flag when results are NOT from live
search, and always tell the user to verify before reaching out.
"""
from __future__ import annotations

import json
import os
import re
from pathlib import Path

import httpx
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Funded Companies Agent")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

API_URL = "https://openrouter.ai/api/v1/chat/completions"
API_KEY = os.environ.get("OPENROUTER_API_KEY", "")
MODEL = os.environ.get("FUNDED_MODEL", "deepseek/deepseek-chat")
MAX_FIELD = 600

SYSTEM = (
    "You are a B2B prospecting analyst. Using the web search results provided, "
    "identify RECENTLY funded startups that match the user's ideal-customer "
    "profile. Only include companies that actually appear in the search results — "
    "never invent companies, funding amounts, investors, or URLs. If the results "
    "are thin, return fewer rather than fabricating. For each company, write why "
    "it fits this specific user and a concrete, non-generic outreach angle.\n\n"
    "Respond with ONLY a JSON array (no prose, no code fences). Each item:\n"
    '{"company": str, "description": str (one line), "round": str (e.g. "Seed", '
    '"Series A"), "amount": str (e.g. "$8M" or "undisclosed"), "date": str '
    '(e.g. "2026-06" or "recent"), "investors": [str], "fit": str (why it fits '
    'THIS user), "angle": str (a specific opening line/angle), "source": str '
    "(a URL from the search results)}"
)


def extract_json_array(raw: str):
    """Pull the first JSON array out of the model output, tolerant of stray prose."""
    text = raw.strip()
    if text.startswith("```"):
        text = re.sub(r"^```[a-zA-Z]*\n?", "", text)
        text = re.sub(r"\n?```$", "", text.strip())
    start = text.find("[")
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
        elif ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                try:
                    return json.loads(text[start : i + 1])
                except json.JSONDecodeError:
                    return None
    return None


def _chat(prompt: str, use_web: bool):
    """One OpenRouter call. Returns (content, had_web_sources). Raises on HTTP error."""
    payload = {
        "model": MODEL,
        "messages": [{"role": "system", "content": SYSTEM}, {"role": "user", "content": prompt}],
        "max_tokens": 1600,
    }
    if use_web:
        # OpenRouter web plugin: injects live search results into context.
        payload["plugins"] = [{"id": "web", "max_results": 6}]
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "X-Title": "Funded Companies Agent",
    }
    resp = httpx.post(API_URL, headers=headers, json=payload, timeout=55)
    resp.raise_for_status()
    msg = resp.json()["choices"][0]["message"]
    had_sources = bool(msg.get("annotations"))
    return (msg.get("content") or "").strip(), had_sources


def find_prospects(profile: str):
    """Return (prospects, meta). meta.sourced True when grounded in live web search."""
    prompt = f"Ideal customer profile / what I'm selling:\n{profile}\n\nFind matching recently funded companies now."
    if not API_KEY:
        return None, {"error": "The agent is unavailable (no model configured). Add an OpenRouter API key to enable it."}

    # 1) Preferred: web-grounded search.
    try:
        content, had_sources = _chat(prompt, use_web=True)
        prospects = extract_json_array(content)
        if prospects:
            return prospects, {"sourced": True, "live": had_sources}
    except httpx.HTTPError:
        pass  # fall through to ungrounded attempt

    # 2) Fallback: model knowledge only — clearly flagged as not live.
    try:
        content, _ = _chat(prompt + "\n\n(Web search is unavailable; use only what you reliably know, and keep the list short.)", use_web=False)
        prospects = extract_json_array(content)
        if prospects:
            return prospects, {"sourced": False, "live": False}
        return None, {"error": "The agent couldn't produce a clean result this time. Try tightening your criteria and run it again."}
    except httpx.HTTPError:
        return None, {"error": "The AI agent is unavailable right now (model error). Please try again shortly."}


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/find")
def find(profile: str = Form(...)):
    profile = profile.strip()[: MAX_FIELD]
    if len(profile) < 12:
        return {"ok": False, "error": "Describe who you want to reach — sector, stage, geography, and what you sell (e.g. 'seed-stage US fintech startups; I sell fraud-detection APIs')."}
    prospects, meta = find_prospects(profile)
    if not prospects:
        return {"ok": False, "error": meta.get("error", "No results.")}
    # Keep the payload tidy and bounded.
    return {"ok": True, "prospects": prospects[:8], "sourced": meta.get("sourced", False)}
