---
name: interview-prep-mapper
description: Map a job description's requirements to free courses to study for the interview, with an optional paced schedule.
metadata:
  type: reference
  surface: https://rashmi-mahadevaiah.vercel.app/interview-prep
  source: https://github.com/mahadevaiahrashmi/interview_prep
---

# Interview Prep Mapper

Turn a job description into a **free-course study plan** for the interview — one row per real requirement, mapped to genuinely free resources, optionally paced to a deadline.

## When to use
Use when the user has a target **job posting** and wants to know **what to study** (from free resources) to prepare — optionally within a set timeframe.

## Inputs
- A job description (paste the full posting).
- Optional: a prep timeframe (e.g. "1 week", "10 days").

## How it works
- `POST /generate` — the LLM returns `{role, guidance, rows:[{requirement, timebox, courses:[{title, platform, url}]}]}`.
- **Drops** pure degree / years-of-experience requirements; when a line mixes a qualification with a real skill, it keeps the skill only.
- **Free-only** courses with working links (freeCodeCamp, Kaggle Learn, MIT OCW, official docs, Hugging Face, fast.ai, cloud free hubs); rows with no free match are omitted.
- With a **timeframe**, each row gets a study window and a one-line pacing summary.
- Renders a table and exports **Markdown / CSV / HTML** (client-side). LLM calls go through the shared router (`app/llm.py`) → OpenRouter.

## Credit
Adapted from **interview_prep** by Rashmi Mahadevaiah — https://github.com/mahadevaiahrashmi/interview_prep (a re-spin of resume-tailor's FastAPI + multi-provider architecture) — rebuilt serverless with OpenRouter.

## Try it
Live: https://rashmi-mahadevaiah.vercel.app/interview-prep
