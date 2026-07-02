# agent-notes: { ctx: "FastAPI sub-app: explainer-video script + slide authoring studio", deps: [app/llm.py, prompts inline], state: active, last: "claude@2026-07-02" }
"""FastAPI sub-app: Narrated Explainer Video Bot — authoring studio.

Mounted under /explainer-bot. A serverless-friendly slice of the
explainer-bot project (github.com/mahadevaiahrashmi/explainer-bot): turn rough
points into a 3Blue1Brown-style script broken into slide segments, critique it,
and design one self-contained HTML slide per segment.

The final steps of the full pipeline — recording your own voice over each slide
and assembling the MP4 with ffmpeg — need a local machine (mic + ffmpeg), so
those stay in the repo. Here we do the parts a browser can: script + slides.

Two endpoints keep each request well under the serverless time limit:
  POST /script  -> aesthetic + segmented script + critic notes (3 LLM calls)
  POST /slide   -> one slide's HTML                             (1 LLM call)
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

app = FastAPI(title="Narrated Explainer Video Bot")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

MAX_FIELD = 4000
MAX_SEGMENTS = 8

# --- Prompts (adapted from explainer-bot/prompts.py, MIT) ---
AESTHETIC_PROMPT = (
    "Given a topic for an explainer video, pick ONE visual aesthetic that fits the "
    "subject and describe it so a slide designer can apply it consistently.\n\n"
    "Output a JSON object only, no prose, no code fences. Schema:\n"
    '{"name": str, "palette": [str hex, ...] (3-5, first is background), '
    '"font_family": str (CSS system fonts only), "description": str (2-3 sentences)}\n\n'
    "Math/CS/physics -> dark bg, light text, blue/teal accents. Humanities/biology -> "
    "warm off-white, dark serif. History -> sepia/parchment. Pick what serves the topic."
)
WRITER_PROMPT = (
    "You are writing a short narrated explainer video in the style of 3Blue1Brown, "
    "aimed at a first-year computer-science undergraduate. Turn the user's rough points "
    "into a script broken into 4 to 8 slide segments (pick what serves the topic).\n\n"
    "For each segment produce:\n"
    '  - "title": short slide title (<= 8 words)\n'
    '  - "key_visual": one sentence describing what the slide should show, drawable with '
    "shapes, text, or simple SVG (no photos).\n"
    '  - "narration": 2-5 sentences of SPOKEN narration — what the viewer HEARS. Sound '
    "like spoken language, not bullet points; use second person and concrete analogies.\n\n"
    "Narration rules: (1) a first-year CS undergrad understands every sentence on first "
    "listen — no undefined jargon; (2) at least one vivid everyday analogy; (3) convey "
    "genuine wonder through ideas landing, not hype words; (4) each segment flows into the next.\n\n"
    "Output ONLY a JSON array, no prose, no code fences. "
    'Schema: [{"title": str, "key_visual": str, "narration": str}, ...]'
)
CRITIC_PROMPT = (
    "Review this draft explainer-video script for a first-year CS undergrad on three "
    "criteria: A. UNDERSTANDABILITY (every sentence clear on first listen; flag jargon "
    "and logic leaps); B. ANALOGIES (vivid, accurate; flag missing or misleading ones); "
    "C. WONDER (curiosity and beauty, not textbook dryness).\n\n"
    "Output a JSON object only, no prose, no code fences. Schema:\n"
    '{"scores": {"understandability": 1-5, "analogies": 1-5, "wonder": 1-5}, '
    '"verdict": "approve" | "revise", "notes": [string, ...] (2-5 concrete, actionable)}\n\n'
    "Be honest. A 3 is mediocre. Approve only if all three scores are >= 4."
)
SLIDE_PROMPT = (
    "You are designing ONE slide for an explainer video as a standalone HTML file.\n"
    "The user message contains the video TOPIC, the CHOSEN AESTHETIC, and this slide's "
    "TITLE and KEY_VISUAL.\n\n"
    "Produce a single self-contained HTML document with inline CSS that:\n"
    "  - Is exactly 1920x1080 px. Use "
    '<body style="width:1920px;height:1080px;margin:0;overflow:hidden;position:relative"> '
    "and fit all content inside.\n"
    "  - Renders the title prominently and the key_visual using shapes, text, SVG, or "
    "simple CSS. Static is fine.\n"
    "  - Does NOT show the narration text on screen (audio is recorded separately).\n"
    "  - Uses NO external assets (no remote images, Google Fonts, or CDN scripts). System fonts only.\n"
    "  - High contrast, large type, readable at video resolution. Matches the aesthetic faithfully.\n\n"
    "LAYOUT: partition the frame into NON-OVERLAPPING regions with CSS grid/flex (avoid "
    "absolute positioning except decoration behind text). Keep an 80px margin from every "
    "edge and a 40px gap between distinct elements. Title in its own top row (180-220px); "
    "key_visual fills the rest. Place diagram labels OUTSIDE the shapes they label, never "
    "on top. Don't shrink text below 28px — shorten it instead.\n\n"
    "Output ONLY the HTML, starting with <!doctype html>, no code fences, no commentary."
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


def _strip_html_fences(raw: str) -> str:
    text = raw.strip()
    if "```" in text:
        # Drop any preamble up to and including the opening fence, and a trailing fence.
        text = re.sub(r"^.*?```[a-zA-Z]*\n", "", text, count=1, flags=re.S)
        text = re.sub(r"\n?```\s*$", "", text.strip())
    # Keep from the first tag onward in case the model added a preamble.
    m = re.search(r"<!doctype html|<html|<body", text, re.I)
    return text[m.start():] if m else text


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/script")
def script(topic: str = Form(...), points: str = Form("")):
    if not llm.available():
        return {"ok": False, "error": "The explainer bot is unavailable right now (no model configured). Please try again shortly."}
    topic = topic.strip()[:MAX_FIELD]
    points = points.strip()[:MAX_FIELD]
    if not topic:
        return {"ok": False, "error": "Tell me the topic you want to explain."}

    brief = f"TOPIC: {topic}"
    if points:
        brief += f"\n\nROUGH POINTS:\n{points}"

    aesthetic = _extract_json(llm.complete(brief, system=AESTHETIC_PROMPT, max_tokens=500) or "", "{", "}")
    if not isinstance(aesthetic, dict):
        aesthetic = {
            "name": "3Blue1Brown dark-math",
            "palette": ["#0e1116", "#e8edf4", "#5b8def", "#3ddc97"],
            "font_family": "'Segoe UI', system-ui, sans-serif",
            "description": "Dark background, light text, blue/teal accents, a calm math-y feel.",
        }

    raw = llm.complete(brief, system=WRITER_PROMPT, max_tokens=1800)
    if raw is None:
        return {"ok": False, "error": "The explainer bot is busy right now. Please try again in a moment."}
    segments = _extract_json(raw, "[", "]")
    if not isinstance(segments, list) or not segments:
        return {"ok": False, "error": "Couldn't draft a script from that — try adding a sentence or two of rough points."}
    segments = [
        {
            "title": str(s.get("title", "")).strip()[:120],
            "key_visual": str(s.get("key_visual", "")).strip()[:400],
            "narration": str(s.get("narration", "")).strip()[:1200],
        }
        for s in segments[:MAX_SEGMENTS]
        if isinstance(s, dict)
    ]

    critique = None
    critique_input = "\n\n".join(
        f"Slide {i + 1}: {s['title']}\n{s['narration']}" for i, s in enumerate(segments)
    )
    critique = _extract_json(
        llm.complete(critique_input, system=CRITIC_PROMPT, max_tokens=700) or "", "{", "}"
    )

    return {"ok": True, "topic": topic, "aesthetic": aesthetic, "segments": segments, "critique": critique}


@app.post("/slide")
def slide(topic: str = Form(...), aesthetic: str = Form(""), title: str = Form(...), key_visual: str = Form("")):
    if not llm.available():
        return {"ok": False, "error": "The explainer bot is unavailable right now."}
    aes = _extract_json(aesthetic, "{", "}") if aesthetic else None
    aes_text = json.dumps(aes) if aes else "dark background, light text, blue/teal accents"
    msg = (
        f"TOPIC: {topic.strip()[:MAX_FIELD]}\n\n"
        f"CHOSEN AESTHETIC: {aes_text}\n\n"
        f"SLIDE TITLE: {title.strip()[:120]}\n"
        f"KEY_VISUAL: {key_visual.strip()[:400]}"
    )
    raw = llm.complete(msg, system=SLIDE_PROMPT, max_tokens=2400)
    if raw is None:
        return {"ok": False, "error": "The explainer bot is busy right now. Please try again in a moment."}
    return {"ok": True, "html": _strip_html_fences(raw)}
