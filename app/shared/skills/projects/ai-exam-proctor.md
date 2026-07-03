---
name: ai-exam-proctor
description: Generate an AI exam on any topic, grade it, and run privacy-first proctoring — camera off by default, opt-in only.
metadata:
  type: reference
  surface: https://rashmi-mahadevaiah.vercel.app/proctored-ai
  source: https://github.com/abhinavrbharadwaj7/AI_test_propter
---

# AI Exam Proctor

Generate an AI-written exam on any topic, take it against a timer, and get it graded — with **privacy-first, opt-in proctoring**.

## When to use
Use when the user wants a **gradable practice exam** on a topic, or wants to see **privacy-respecting AI proctoring** (no mandatory webcam upload).

## Inputs
- A topic (e.g. "Introduction to Quantum Physics").
- Number of questions (3–10).
- Optional: turn the camera on (off by default).

## How it works
- `POST /generate` — the AI writes a mixed exam (multiple-choice + short-answer) for the topic.
- `POST /grade` — MCQs are graded deterministically; short-answer responses are scored by the AI (0 / 0.5 / 1 + feedback).
- `POST /assess` — the AI writes a neutral integrity summary from client-detected events.
- **Proctoring:** the camera is **OFF by default**; opting in shows a webcam preview that **never leaves the browser**. Integrity signals (tab switch, focus loss, copy, leaving full-screen) are tracked locally either way.
- LLM calls go through the shared router (`app/llm.py`) → **OpenRouter** with the site's `OPENROUTER_MODELS` hierarchy. No video is sent to any model.

## Credit
Adapted from **ProctoredAI** by Abhinav R Bharadwaj — https://github.com/abhinavrbharadwaj7/AI_test_propter — rebuilt serverless and privacy-first (camera opt-in, local-only).

## Try it
Live: https://rashmi-mahadevaiah.vercel.app/proctored-ai
