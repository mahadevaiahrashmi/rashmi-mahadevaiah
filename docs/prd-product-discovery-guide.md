# PRD — Product Discovery Interactive Guide

| | |
|---|---|
| **Product** | Product Discovery Interactive Guide |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/product-discovery` (portfolio project #1) |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped (AI coach pending a valid OpenRouter key) |
| **Last updated** | 2026-07-01 |

---

## 1. Summary

An interactive, self-paced web guide that **teaches product discovery** — the practice of deciding what to build before building it. Learners step through six short modules; each pairs a concise lesson and a real example with a "Your turn" exercise. An AI coach reviews the learner's practice answer and gives specific, encouraging feedback. The goal is for a beginner to leave able to frame a problem, learn from real user behavior, isolate their riskiest assumption, test it cheaply, and decide on evidence.

## 2. Problem & background

Product discovery is one of the highest-leverage skills in product work, yet most learning material is either dense (books, long courses) or passive (blog posts) — readers finish without having *practiced*. New PMs, founders, engineers, and designers repeatedly make the same avoidable mistakes: building solution-first, trusting opinions over behavior, and testing the fun assumptions instead of the fatal ones.

There is a gap for a **short, active, feedback-driven** intro that can be completed in one sitting and immediately applied to a real idea.

## 3. Goals & non-goals

**Goals**
- Teach the core discovery loop in < 20 minutes of active learning.
- Make it *active*: every module ends in a practice exercise, not just reading.
- Give **personalized feedback** on practice answers via an AI coach.
- Work as a credible portfolio piece demonstrating applied product + AI skill.
- Degrade gracefully and cost almost nothing to run.

**Non-goals (v1)**
- Not a full certification or multi-hour course.
- Not a team/collaboration tool (single learner, single session).
- No accounts, logins, or server-side storage of learner data.
- Not a discovery *execution* tool (that overlaps with a separate "brief generator" concept).

## 4. Target users

| Persona | Need |
|---|---|
| **Aspiring / new PM** | A fast, practical grounding in discovery they can practice immediately. |
| **Founder / indie hacker** | Avoid building the wrong thing; sanity-check an idea's riskiest assumption. |
| **Engineer / designer** | Understand *why* discovery happens before delivery, to collaborate better. |
| **Recruiter / hiring manager (secondary)** | Evaluate the author's product thinking and AI craft via the portfolio. |

## 5. User stories

- As a learner, I can **step through modules** in order and jump to any module via a stepper.
- As a learner, I can **read a lesson and a concrete example** for each concept.
- As a learner, I can **write a practice answer** and get **AI feedback** on it.
- As a learner, I can **see my progress** (bar + completed steps) and **resume where I left off** on return.
- As a learner, I can **finish** and see a completion screen that pushes me to apply it for real.
- As a learner on a flaky network / when the AI is unavailable, I still get a **useful self-check** instead of an error.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Content (the six modules)

1. **Discovery vs Delivery** — build the right thing vs build the thing right; learn fast, be wrong cheaply.
2. **Frame the Problem** — problem-first, not solution-first; the "When [situation], [user] wants to [goal], but [obstacle]" shape.
3. **Know Your Users** — Jobs-to-Be-Done; ask about past behavior, not future intentions.
4. **Find the Riskiest Assumption** — most uncertain × most fatal; test that first.
5. **Test It Cheaply** — the experiment ladder (interviews → fake door → concierge → prototype) with a pre-set pass/fail bar.
6. **Decide with Evidence** — persevere / pivot / kill; leading vs lagging indicators.

Each module is authored as: `lesson` (HTML), `example` (concrete), `practice` (learner prompt), and `coach_focus` (hidden rubric that steers the AI's feedback). Content is original.

## 7. Functional requirements

- **FR1 — Stepper navigation.** Six modules, linear Next/Previous plus direct jump. Current step highlighted; completed steps marked.
- **FR2 — Lesson rendering.** Each module renders lesson, example, and practice prompt.
- **FR3 — Practice + AI coach.** Learner submits a free-text answer; system returns feedback (< ~130 words) that (a) affirms what's right, (b) names one specific improvement, (c) offers a better version/next step, guided by the module's `coach_focus`.
- **FR4 — Progress & persistence.** Progress bar reflects completed modules; current step and completions persist across visits (client-side `localStorage`). "Start over" resets.
- **FR5 — Completion state.** After the last module, show a summary + a call to action to run a real experiment.
- **FR6 — Graceful degradation.** If no AI engine is available, return an "offline tip" that surfaces the module's checkpoint instead of an error.
- **FR7 — Input safety.** Unknown module IDs and empty answers are rejected with a friendly message.
- **FR8 — Navigation out.** A visible "← Back to portfolio" link.

## 8. UX & flow

```
Portfolio card #1 ("Launch")
        │
        ▼
/product-discovery ──► Module 1 ─► [read] ─► [practice] ─► AI feedback
        ▲                   │  ▲                                │
        │                   ▼  └──────── Prev / Next ───────────┘
   Back to portfolio     Module 6 ─► Completion screen ─► "go run an experiment"
```

- Single responsive page, dark theme consistent with the portfolio (warm accent).
- Progress bar under the header; horizontally scrollable stepper of module pills.
- Practice box: textarea + "Get coach feedback"; feedback appears inline in an accented panel labeled "Coach feedback" (or "Coach (offline tip)" when degraded).

## 9. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered HTML template. Module data embedded as JSON for client-side stepping (no per-step round trip). Prefix-aware URLs via an injected `APP_ROOT` so it works mounted under a subpath.
- **Backend:** FastAPI sub-app (`app/discovery/`) mounted at `/product-discovery` on the site's single Vercel Python function; static + Jinja2 template served from the same package.
- **AI coach:** reuses the OpenRouter provider. Tries a reliable paid model first (`deepseek/deepseek-chat`), then free models, then the offline tip. Per-call timeout capped to fit the serverless function's duration limit.
- **Routing:** `vercel.json` rewrites `/product-discovery` and `/product-discovery/*` to the function; the SPA fallback covers the portfolio.
- **State:** none server-side; learner progress lives only in the browser.

## 10. Non-functional requirements

- **Privacy:** no accounts; practice answers are sent to the model only to produce feedback and are **not stored** by the app.
- **Reliability:** never hard-fail on AI errors — always return usable feedback (real or offline tip).
- **Performance:** page is static-fast; stepping is instant (no network); coach responses target a few seconds.
- **Cost:** ~a fraction of a cent per coach call on the paid model; free models cost $0.
- **Accessibility:** semantic headings, keyboard-usable controls, sufficient contrast; readable line length. *(Formal a11y audit is a v1.1 item.)*
- **Responsive:** works on mobile (stepper scrolls; layout stacks).

## 11. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Module-1 → completion rate** | Does the format hold attention? | ≥ 35% reach module 6 |
| **Practice submissions per session** | Is it actually *active*? | ≥ 2 practice answers median |
| **Coach usage rate** | Value of the AI layer | ≥ 50% of sessions request feedback |
| **Return visits (resume)** | Stickiness | measurable via `localStorage` resume |
| **Portfolio → guide click-through** | Draw as a portfolio piece | tracked at card #1 |

> **Note:** v1 ships **without analytics instrumentation** — these targets are aspirational until telemetry is added (see Roadmap). This is called out honestly rather than implied.

## 12. Risks & mitigations

| Risk | Mitigation |
|---|---|
| AI provider rate-limits / key invalid | Model fallback chain + offline-tip degradation; guide is fully usable without AI. |
| Free models unreliable | Paid model as primary; free models are backups only. |
| Serverless timeout on slow model | Per-call timeout capped under the function's max duration. |
| Content feels thin / preachy | Kept concise, example-led, and practice-driven; iterate from feedback. |
| Learner privacy concern | No storage; state stays in the browser; stated in this PRD. |

## 13. Dependencies

- OpenRouter account + API key with credit (for live AI coaching).
- Vercel project (hosting; Python 3.12 runtime pinned).
- Shared OpenRouter provider code from the Resume Tailor app.

## 14. Out of scope / future roadmap

- **v1.1:** analytics (completion funnel, coach usage), accessibility audit, share-your-progress.
- **v1.2:** downloadable "discovery worksheet" summarizing the learner's answers.
- **v1.3:** more tracks (opportunity solution trees, interview technique), quizzes with scored answers.
- **v2:** optional accounts to save work across devices; team mode.

## 15. Open questions

1. Should practice answers optionally seed a downloadable discovery brief (bridging to a sibling project)?
2. Add a lightweight quiz/checkpoint per module for retention?
3. Which analytics tool fits the "no accounts, privacy-first" stance (e.g., privacy-friendly, cookieless)?
