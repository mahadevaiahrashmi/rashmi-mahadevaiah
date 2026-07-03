# PRD — Interview Prep Mapper

| | |
|---|---|
| **Product** | Interview Prep Mapper |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/interview-prep` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-03 |
| **Source** | Adapted from [interview_prep](https://github.com/mahadevaiahrashmi/interview_prep) by Rashmi Mahadevaiah |

---

## 1. Summary

Paste a **job description** and get a **table** mapping each real requirement in the posting to the **free courses** you should study to prepare for the interview — with working links. An optional **prep timeframe** ("1 week", "10 days") adds a suggested day-by-day study window per requirement plus a pacing summary. Degree and years-of-experience requirements are intentionally **dropped** (you can't study those away); when a sentence mixes a qualification with a real skill, the qualification is stripped and the skill is kept. Results export as **Markdown, CSV, or HTML**.

## 2. Problem & background

Job seekers face postings full of requirements but rarely know *what to actually study* — and paid course platforms muddy the picture. There's a gap for a tool that turns a posting into a concrete, **free-only** study plan: one row per genuine skill, mapped to trustworthy free resources, optionally paced to a deadline. This is a re-spin of the resume-tailor architecture (same FastAPI + multi-provider LLM core, a different JD → study-plan transform).

## 3. Goals & non-goals

**Goals**
- Turn a JD into a **one-row-per-requirement** study table.
- Map each requirement to **2–4 genuinely free courses** with working links.
- **Drop** pure degree / years-of-experience requirements; keep the skill when mixed.
- Optionally **pace** the plan to a timeframe (study windows + summary).
- **Export** the plan as Markdown / CSV / HTML.

**Non-goals (v1)**
- No paid courses, paywalled certificates, or "free trials" that later charge.
- No account or server-side storage — everything is per-session.
- Not a job-search or application tracker — just the study plan.

## 4. Target users

| Persona | Need |
|---|---|
| **Job seeker** | A concrete, free study plan for a specific posting. |
| **Career switcher** | See which free resources cover an unfamiliar stack. |
| **Bootcamp / student** | Turn a target role into a paced learning path. |
| **Recruiter / hiring manager (secondary)** | See the author's applied LLM + product craft. |

## 5. User stories

- As a user, I paste a **job description** and get a table of requirements → **free courses**.
- As a user, **degree / experience** lines are dropped; mixed lines keep only the skill.
- As a user, I can add a **prep timeframe** and get a **study window** per row + a pacing summary.
- As a user, every course link is **free** and **clickable**.
- As a user, I can **download** the plan as Markdown, CSV, or HTML.
- As a visitor, I can **get back to the portfolio** and see the **source credited**.

## 6. Functional requirements

- **FR1 — Generate.** `POST /generate` (jd, timeframe) → validated JSON `{role, guidance, rows:[{requirement, timebox, courses:[{title, platform, url}]}]}`.
- **FR2 — Qualification drop.** Prompt drops pure degree/experience sentences; rewrites mixed sentences to the skill only.
- **FR3 — Free-only + working links.** Only free resources; each course has a real `https` URL; rows with no free match are omitted.
- **FR4 — Timeframe pacing.** With a timeframe, each row gets a `timebox` and a one-line `guidance`; otherwise both empty.
- **FR5 — Table render.** Client renders requirement · (study window) · free courses, links open in a new tab.
- **FR6 — Downloads.** Markdown, CSV, and standalone HTML exports, generated client-side.
- **FR7 — Validation & degradation.** Input caps, tolerant JSON extraction, and clear messages if the model is unavailable or returns nothing usable.
- **FR8 — Credit + navigation.** Credit the source; "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/interview-prep  ──  paste JD (+ optional timeframe) ──► POST /generate
                                                             │
                       {role, guidance, rows[requirement, timebox, courses]}
                                                             ▼
                      table: Requirement · Study window · Free courses
                                     + Markdown / CSV / HTML downloads
```

- Single responsive page, Airbnb light theme (coral accent) consistent with the site.
- Free-course links are the focal output; the study-window column appears only when a timeframe is given.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered template; renders the table and builds Markdown/CSV/HTML exports client-side via Blob downloads. Prefix-aware URLs via injected `APP_ROOT`.
- **Backend:** FastAPI sub-app mounted at `/interview-prep`; one `POST /generate` endpoint with tolerant JSON extraction and per-field caps.
- **LLM:** the shared multi-provider router (`app/llm.py`) → **OpenRouter** with the site's `OPENROUTER_MODELS` hierarchy and cross-provider fallback. The system prompt encodes the drop-qualification, free-only, working-links, and timeframe-pacing rules.
- **Routing:** `vercel.json` rewrites `/interview-prep` and `/interview-prep/*` to the function; SPA fallback otherwise.
- **State:** none server-side; the plan lives only in the browser.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** no server-side storage; the JD and plan stay in the browser (sent to the model only to produce the plan).
- **Reliability:** tolerant parsing; rows without a free course are dropped; provider fallback.
- **Performance:** static-fast page; generation targets a few seconds.
- **Cost:** free-first model hierarchy → typically $0; cheapest paid fallback ≤ $0.10/1M input.
- **Accuracy:** free-only guardrail in the prompt; still model-dependent — links should be sanity-checked by the user.
- **Accessibility:** semantic table, keyboard-usable inputs, sufficient contrast.
- **Responsive:** the table scrolls horizontally on small screens.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Sessions that generate a plan** | Core activation | ≥ 65% of sessions |
| **Timeframe used** | Depth of use | ≥ 30% add a timeframe |
| **Downloads per plan** | Real intent to study | tracked qualitatively |
| **Source click-through** | Portfolio → repo | tracked at the link |

> **Note:** ships **without analytics instrumentation**; targets are aspirational. Only **Learn-AI** has telemetry (PostHog) across the portfolio.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Model invents/dead links | Prompt requires real free landing pages; omit-if-none rule; user should verify links. |
| A "free" course isn't actually free | Explicit free-only rule + preference for stable free sources (freeCodeCamp, Kaggle, MIT OCW…). |
| Model returns malformed JSON | Tolerant JSON extraction + strict per-row validation. |
| Free models rate-limited (429) | `OPENROUTER_MODELS` hierarchy falls through to the next model. |
| Qualification lines wrongly kept/dropped | Prompt rules with the mixed-sentence rewrite; still model-dependent. |

## 12. Roadmap

- **v1.1:** analytics, per-source "free-forever" verification badges, copy-to-clipboard.
- **v1.2:** a resume-aware mode (skip requirements you already meet), saved plans.
- **v2:** calendar export (.ics) of the paced study windows.

## 13. Open questions

1. Should it de-duplicate courses that cover multiple requirements?
2. Is a resume-aware "skip what you already know" mode worth adding?
3. Should study windows export to a calendar (.ics)?
