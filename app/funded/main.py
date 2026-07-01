"""FastAPI sub-app: Funded Companies Agent (job-hunting mode).

Mounted under /funded-companies. A weekly agent: it searches the live web for
startups that raised funding in the last ~7 days, then for each proposes the
user's "way in" — a tailored application path for landing a job there, based on
the user's own background.

Grounding matters: an ungrounded LLM will invent plausible-but-fake companies
and rounds. So we prefer web-sourced results (OpenRouter's web plugin), flag when
results are NOT from live search, and tell the user to verify before applying.
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
MAX_BG = 2500
MAX_PREF = 400

SYSTEM = (
    "You are a sharp job-search agent for ONE candidate. Using the web search "
    "results provided, find startups that ANNOUNCED FUNDING IN THE LAST ~7 DAYS "
    "and would plausibly be hiring for the candidate's skills. Freshly funded "
    "startups hire fast — that is the candidate's opening.\n\n"
    "Rules: only include companies that actually appear in the search results — "
    "never invent companies, funding rounds, investors, or URLs. If results are "
    "thin, return fewer rather than fabricating. Tailor everything to THIS "
    "candidate's real background — the target role, why they fit, and the pitch "
    "must reference their actual experience, and must never claim experience they "
    "don't have.\n\n"
    "Respond with ONLY a JSON array (no prose, no code fences). Each item:\n"
    '{"company": str, "what": str (one line on what they do), "round": str '
    '(e.g. "Seed","Series A"), "amount": str (e.g. "$8M"), "date": str '
    '(e.g. "2026-06-30" or "this week"), "investors": [str], "role": str (the '
    "specific role at this company to target, given their stage and the "
    'candidate), "why_fit": str (why THIS candidate fits, citing their real '
    'experience), "who": str (who to contact — a title like "Founder/CTO" or a '
    'named person if in the results), "pitch": str (a 2-3 sentence tailored '
    'outreach message the candidate could send), "steps": [str] (2-3 concrete '
    'next actions), "source": str (a URL from the search results)}'
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
        "max_tokens": 2200,
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
    return (msg.get("content") or "").strip(), bool(msg.get("annotations"))


def find_openings(background: str, prefs: str):
    """Return (openings, meta). meta.sourced True when grounded in live web search."""
    prompt = (
        "CANDIDATE BACKGROUND:\n" + background.strip()[:MAX_BG] + "\n\n"
        "PREFERENCES (role type / location / sectors / stage): "
        + (prefs.strip()[:MAX_PREF] or "open") + "\n\n"
        "Find startups funded in the last ~7 days and propose this candidate's way in for each."
    )
    if not API_KEY:
        return None, {"error": "The agent is unavailable (no model configured). Add an OpenRouter API key to enable it."}

    # 1) Preferred: web-grounded search of last week's fundings.
    try:
        content, had_sources = _chat(prompt, use_web=True)
        openings = extract_json_array(content)
        if openings:
            return openings, {"sourced": True, "live": had_sources}
    except httpx.HTTPError:
        pass

    # 2) Fallback: model knowledge only — clearly flagged as not live.
    try:
        content, _ = _chat(
            prompt + "\n\n(Web search is unavailable; use only companies you reliably know raised funding recently, and keep the list short.)",
            use_web=False,
        )
        openings = extract_json_array(content)
        if openings:
            return openings, {"sourced": False, "live": False}
        return None, {"error": "The agent couldn't produce a clean result this time. Try again in a moment."}
    except httpx.HTTPError:
        return None, {"error": "The AI agent is unavailable right now (model error). Please try again shortly."}


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/scan")
def scan(background: str = Form(...), prefs: str = Form("")):
    background = background.strip()
    if len(background) < 40:
        return {"ok": False, "error": "Paste a bit more about your background — a short resume or a few lines on your experience and skills — so it can tailor your way in."}
    openings, meta = find_openings(background, prefs)
    if not openings:
        return {"ok": False, "error": meta.get("error", "No results.")}
    return {"ok": True, "openings": openings[:8], "sourced": meta.get("sourced", False)}
