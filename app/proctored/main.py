# agent-notes: { ctx: "FastAPI sub-app: AI exam proctor — generate, grade, integrity, tutor", deps: [app/llm.py], state: active, last: "claude@2026-07-03" }
"""FastAPI sub-app: AI Exam Proctor.

Mounted under /proctored-ai. An AI-generated, AI-graded exam with privacy-first
proctoring and a post-exam AI tutor. A serverless (OpenRouter) reinterpretation
of ProctoredAI by Rashmi Mahadevaiah —
https://github.com/mahadevaiahrashmi/ProctoredAI (which is itself based on
abhinavrbharadwaj7/AI_test_propter). Credited in the UI.

Per that project's ADR-0009 (pluggable providers + camera opt-out): the camera is
optional and off by default, and features degrade gracefully on providers without
vision/TTS — here proctoring uses client-side integrity signals instead of a vision
model, and the tutor is text-only (OpenRouter free models have no TTS).

The AI (shared multi-provider router → OpenRouter) does four text jobs:
  POST /generate  -> build an exam (MCQ + short-answer) for a topic
  POST /grade     -> grade the short-answer questions and total the score
  POST /assess    -> write an integrity summary from client-detected events
  POST /tutor     -> answer a follow-up question grounded in the graded exam

Camera proctoring is OFF by default and opt-in; the actual camera + integrity
signals (tab switches, focus loss, copy, fullscreen exit) run client-side, so no
video ever leaves the browser.
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

app = FastAPI(title="AI Exam Proctor")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

MAX_TOPIC = 200
MIN_Q, MAX_Q = 3, 10

GEN_SYSTEM = (
    "You are an exam author. Given a TOPIC and a COUNT, write COUNT exam questions "
    "mixing multiple-choice and short-answer. Balanced difficulty, unambiguous, one "
    "clearly-correct answer each.\n\n"
    "Output ONLY a JSON array, no prose, no code fences. Each item:\n"
    '  {"type": "mcq", "text": str, "options": [str,str,str,str], "answer": str (must equal one option)}\n'
    '  or {"type": "text", "text": str, "answer": str (the model/reference answer, 1-3 sentences)}\n'
    "Aim for roughly 60% mcq, 40% text. Do not number the questions."
)
GRADE_SYSTEM = (
    "You grade short-answer exam responses. For each item you get the QUESTION, the "
    "REFERENCE answer, and the STUDENT answer. Score how well the student answer "
    "captures the reference: 1.0 = fully correct, 0.5 = partially, 0.0 = wrong/blank. "
    "Be fair but rigorous; ignore spelling.\n\n"
    "Output ONLY a JSON array, no prose, no code fences. Each item MUST echo the same "
    '"id" it was given so it can be matched back:\n'
    '  {"id": int (echo the given id), "score": 0.0|0.5|1.0, "feedback": str (one short sentence)}'
)
ASSESS_SYSTEM = (
    "You are an exam-integrity assistant. Given a list of proctoring EVENTS detected "
    "during an online exam (e.g. tab switches, focus loss, copy attempts, leaving "
    "fullscreen) and whether the camera was on, write a brief, neutral integrity "
    "summary: 2-4 sentences stating what was observed and an overall risk level "
    "(Low / Medium / High). Do not accuse; describe. Plain text, no markdown."
)
TUTOR_SYSTEM = (
    "You are a supportive post-exam tutor. You are given the exam TOPIC and, for each "
    "question, its text, the correct/reference answer, the student's answer, and their "
    "score. Answer the student's follow-up question clearly and encouragingly, grounded "
    "ONLY in THIS exam and its answers. If asked about something outside the exam, gently "
    "steer back. Be concise (<= 130 words), plain text, no markdown headers."
)


def _extract_json(raw: str, open_ch: str, close_ch: str):
    text = (raw or "").strip()
    if text.startswith("```"):
        text = re.sub(r"^```[a-zA-Z]*\n?", "", text)
        text = re.sub(r"\n?```$", "", text.strip())
    start = text.find(open_ch)
    if start == -1:
        return None
    depth = in_str = esc = 0
    for i in range(start, len(text)):
        ch = text[i]
        if in_str:
            if esc:
                esc = 0
            elif ch == "\\":
                esc = 1
            elif ch == '"':
                in_str = 0
            continue
        if ch == '"':
            in_str = 1
        elif ch == open_ch:
            depth += 1
        elif ch == close_ch:
            depth -= 1
            if depth == 0:
                try:
                    return json.loads(text[start:i + 1])
                except json.JSONDecodeError:
                    return None
    return None


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/generate")
def generate(topic: str = Form(...), count: int = Form(5)):
    if not llm.available():
        return {"ok": False, "error": "The exam engine is unavailable right now (no model configured)."}
    topic = topic.strip()[:MAX_TOPIC]
    if not topic:
        return {"ok": False, "error": "Enter a topic for the exam."}
    count = max(MIN_Q, min(MAX_Q, int(count or 5)))
    raw = llm.complete(f"TOPIC: {topic}\nCOUNT: {count}", system=GEN_SYSTEM, max_tokens=1800)
    items = _extract_json(raw, "[", "]")
    if not isinstance(items, list) or not items:
        return {"ok": False, "error": "Couldn't build an exam for that — try a clearer topic."}
    questions = []
    for it in items[:count]:
        if not isinstance(it, dict):
            continue
        typ = "mcq" if it.get("type") == "mcq" and isinstance(it.get("options"), list) else "text"
        q = {"type": typ, "text": str(it.get("text", "")).strip()[:600], "answer": str(it.get("answer", "")).strip()[:600]}
        if typ == "mcq":
            opts = [str(o).strip()[:200] for o in it.get("options", []) if str(o).strip()][:6]
            if len(opts) < 2 or q["answer"] not in opts:
                continue
            q["options"] = opts
        if q["text"]:
            questions.append(q)
    if not questions:
        return {"ok": False, "error": "Couldn't build a valid exam — please try again."}
    return {"ok": True, "topic": topic, "questions": questions}


@app.post("/grade")
def grade(payload: str = Form(...)):
    try:
        data = json.loads(payload)
        questions = data["questions"]
        answers = data["answers"]  # list aligned to questions
    except (ValueError, TypeError, KeyError):
        return {"ok": False, "error": "Bad submission."}

    results, to_grade, idx_map = [], [], []
    for i, q in enumerate(questions):
        ans = (answers[i] if i < len(answers) else "") or ""
        if q.get("type") == "mcq":
            correct = str(ans).strip() == str(q.get("answer", "")).strip()
            results.append({"score": 1.0 if correct else 0.0, "feedback": "Correct." if correct else f"Answer: {q.get('answer','')}"})
        elif not str(ans).strip():
            # A blank short-answer is always 0 — never ask the model to grade nothing.
            results.append({"score": 0.0, "feedback": "No answer given."})
        else:
            results.append(None)  # fill after AI grade
            idx_map.append(i)
            to_grade.append({"id": i, "question": q.get("text", ""), "reference": q.get("answer", ""), "student": str(ans)})

    if to_grade:
        raw = llm.complete(
            'Grade each item; echo its "id" in your output. Items:\n' + json.dumps(to_grade),
            system=GRADE_SYSTEM, max_tokens=1200)
        graded = _extract_json(raw, "[", "]")
        # Prefer matching by echoed id (robust to reordering); fall back to position.
        by_id = {g["id"]: g for g in graded if isinstance(g, dict) and isinstance(g.get("id"), int)} if isinstance(graded, list) else {}
        for k, i in enumerate(idx_map):
            g = by_id.get(i)
            if g is None and isinstance(graded, list) and k < len(graded) and isinstance(graded[k], dict):
                g = graded[k]
            g = g or {}
            try:
                sc = float(g.get("score", 0))
            except (ValueError, TypeError):
                sc = 0.0
            results[i] = {"score": max(0.0, min(1.0, sc)), "feedback": str(g.get("feedback", "Graded."))[:300]}

    earned = sum(r["score"] for r in results)
    total = len(results)
    return {"ok": True, "results": results, "earned": round(earned, 2), "total": total,
            "percent": round(100 * earned / total) if total else 0}


@app.post("/assess")
def assess(events: str = Form(...), camera: str = Form("off")):
    if not llm.available():
        return {"ok": True, "summary": ""}  # non-blocking; results still show
    try:
        ev = json.loads(events)
    except (ValueError, TypeError):
        ev = []
    prompt = f"CAMERA: {'on' if camera == 'on' else 'off'}\nEVENTS ({len(ev)}):\n" + "\n".join(f"- {str(e)[:120]}" for e in ev[:40])
    summary = llm.complete(prompt, system=ASSESS_SYSTEM, max_tokens=350) or ""
    return {"ok": True, "summary": summary.strip()}


@app.post("/tutor")
def tutor(context: str = Form(...), message: str = Form(...)):
    """Post-exam AI tutor: answers a follow-up grounded in the graded exam."""
    if not llm.available():
        return {"ok": False, "error": "The tutor is unavailable right now."}
    msg = message.strip()[:600]
    if not msg:
        return {"ok": False, "error": "Ask the tutor a question about your exam."}
    try:
        ctx = json.loads(context)
        topic = str(ctx.get("topic", ""))[:200]
        items = ctx.get("items", [])
    except (ValueError, TypeError):
        topic, items = "", []
    lines = [f"TOPIC: {topic}", ""]
    for n, it in enumerate(items[:12], 1):
        lines.append(
            f"Q{n}: {str(it.get('q',''))[:300]}\n"
            f"  correct: {str(it.get('correct',''))[:300]}\n"
            f"  your answer: {str(it.get('your',''))[:300]}\n"
            f"  score: {it.get('score','')}"
        )
    lines.append("")
    lines.append(f"STUDENT QUESTION: {msg}")
    reply = llm.complete("\n".join(lines), system=TUTOR_SYSTEM, max_tokens=500)
    if reply is None:
        return {"ok": False, "error": "The tutor is busy right now. Please try again."}
    return {"ok": True, "reply": reply.strip()}
