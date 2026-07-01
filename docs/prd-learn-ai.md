# PRD — Learn-AI (Duolingo-Style AI Course)

| | |
|---|---|
| **Product** | Learn-AI (Duolingo-style) |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/learn-ai` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

Learn AI concepts the **Duolingo way** — a gamified lesson path with XP, hearts, streaks, and a clickable stepper. The course spans **4 units, 8 lessons, and 32 curated questions** (multiple-choice / true-false) covering tokens, context windows, prompting, embeddings, next-token prediction, hallucinations, RAG, agents, fine-tuning, and more. Every answer gets **instant feedback with a one-line explanation**, and finishing a lesson shows a completion screen with XP, accuracy, and streak. The content is **fully client-side and curated — no LLM** — so it's fast, free, and reliable. Progress persists in `localStorage`. This is the **only app in the portfolio with analytics** (PostHog).

## 2. Problem & background

Most people encounter AI as buzzwords — "tokens," "context window," "RAG," "agents" — without a mental model for what they mean. The explainer content that exists is either too shallow (listicles) or too heavy (courses, papers). What's missing is the thing Duolingo nailed for languages: **short, gamified, active practice** that makes concepts stick through repetition and small wins.

There's a gap for a **fast, free, reliable** way to *practice* AI literacy — bite-sized questions, instant feedback, and just enough gamification to keep someone coming back — without depending on a live model (which would make it slow, costly, and occasionally wrong).

## 3. Goals & non-goals

**Goals**
- Teach core AI concepts through **active, gamified practice**, not passive reading.
- Make it **fast, free, and reliable** by keeping content curated and client-side (no LLM).
- Use proven gamification — XP, hearts, streaks, progress — to drive retention.
- Give **instant feedback with a one-line explanation** on every answer.
- Instrument the app (PostHog) to actually learn what works.

**Non-goals (v1)**
- No LLM-generated questions (curated content is the point — speed/cost/reliability).
- No accounts or server-side storage (progress lives in the browser).
- Not a certification or long-form course — bite-sized units.
- Not a content-authoring tool for others.

## 4. Target users

| Persona | Need |
|---|---|
| **AI-curious beginner** | A friendly, low-stakes way to build real AI literacy. |
| **Non-technical professional** | Understand the vocabulary their teams use daily. |
| **Student / early-career** | Practice concepts with instant feedback and momentum. |
| **Recruiter / hiring manager (secondary)** | Evaluate the author's applied product + AI craft via the portfolio. |

## 5. User stories

- As a learner, I can **follow a lesson path** with done/current/locked nodes.
- As a learner, I can **answer curated questions** (multiple-choice / true-false).
- As a learner, I get **instant correct/incorrect feedback with a one-line explanation**.
- As a learner, I **earn XP** per correct answer plus a completion bonus.
- As a learner, I have **hearts** (start 5, lose one per wrong answer, refill daily).
- As a learner, I build a **day streak** and watch a **progress bar** fill.
- As a learner, I see a **completion screen** (XP, accuracy, streak) at the end of a lesson.
- As a learner, my **progress persists** across visits.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Course structure.** 4 units (AI Foundations, Language Models, Inside an LLM, Using AI Well), 8 lessons, 32 curated questions.
- **FR2 — Question types.** Multiple-choice and true-false, covering tokens, context windows, prompting, embeddings, next-token prediction, hallucinations, RAG, agents, fine-tuning, etc.
- **FR3 — Lesson-path stepper.** A clickable stepper with **done / current / locked** nodes.
- **FR4 — Instant feedback.** After each answer, show correct/incorrect **plus a one-line explanation**.
- **FR5 — XP.** Award XP per correct answer and a completion bonus per lesson.
- **FR6 — Hearts.** Start at 5; lose one per wrong answer; refill daily.
- **FR7 — Streak.** Track a day streak; increment on qualifying activity.
- **FR8 — Progress bar.** Reflect progress through the current lesson/course.
- **FR9 — Completion screen.** On lesson completion, show XP earned, accuracy, and streak.
- **FR10 — Persistence.** Progress (XP, hearts, streak, completed lessons) persists in `localStorage`.
- **FR11 — Analytics.** PostHog captures `app_opened`, `lesson_started`, `question_answered` (with `concept` and `correct`), `lesson_completed`, `lesson_failed`, `streak_incremented`, plus pageviews. Env-driven `POSTHOG_KEY`; **disabled cleanly if unset**.
- **FR12 — Navigation out.** A visible "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/learn-ai ──► app_opened
        │
   Lesson path stepper:  ●done ─ ◉current ─ ○locked ...
        │
        ▼
   lesson_started ──► Question ─► answer
        │                          │
        │                          ▼
        │               question_answered (concept, correct)
        │               instant feedback + one-line explanation
        │                          │
        │             correct: +XP   wrong: -1 heart
        │                          │
        ▼                          ▼
   progress bar fills        hearts = 0 ─► lesson_failed
        │
        ▼
   lesson_completed ──► completion screen (XP, accuracy, streak)
        │
        ▼
   streak_incremented (daily)
```

- Single responsive page, dark theme consistent with the portfolio (warm accent).
- Duolingo-style: prominent hearts/XP/streak header, a lesson-path stepper, and a focused question card.
- Feedback is immediate and encouraging; explanations are one line.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered HTML template; **all content and logic are client-side** (curated question bank embedded as data — no LLM, no per-answer round trip). Progress persists in `localStorage`. Prefix-aware URLs via an injected `APP_ROOT` so it works mounted under a subpath.
- **Backend:** FastAPI sub-app mounted at `/learn-ai` on the site's single Vercel Python function; static + Jinja2 template from the same package. No model calls.
- **Analytics:** **PostHog** wired in, env-driven via `POSTHOG_KEY`; if unset it disables cleanly. Captures `app_opened`, `lesson_started`, `question_answered` (with `concept`, `correct`), `lesson_completed`, `lesson_failed`, `streak_incremented`, plus pageviews. This is the **only** app in the portfolio with analytics.
- **Routing:** `vercel.json` rewrites `/learn-ai` and `/learn-ai/*` to the function; the portfolio SPA is the fallback.
- **State:** none server-side; progress lives only in the browser.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** progress is **on-device** (`localStorage`); PostHog captures product events (env-gated, cleanly disabled if no key).
- **Reliability:** no LLM dependency — content is curated and client-side, so the app is always available and never errors on a model.
- **Performance:** static-fast; question stepping is instant (no network round trips).
- **Cost:** $0 to run per learner (no model calls); PostHog on a free/low tier.
- **Accessibility:** semantic headings, keyboard-usable controls, sufficient contrast; feedback is text, not color-only. *(Formal a11y audit is a v1.1 item.)*
- **Responsive:** works on mobile — stepper scrolls; question card stacks.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Lesson start → completion rate** | Does the format hold attention? | ≥ 50% of started lessons completed |
| **Accuracy by concept** | Which concepts are hard? | tracked via `question_answered.concept` |
| **Streak retention** | Do learners come back? | ≥ 20% reach a 3-day streak |
| **Questions per session** | Engagement depth | ≥ 8 answered median |
| **Lesson-failed rate** | Difficulty calibration | monitored via `lesson_failed` |

> **Note:** Learn-AI is the **only** app in the portfolio with analytics instrumentation (**PostHog**) — so for this app the targets above are actually **measurable**. The other five apps ship **without** telemetry, where equivalent targets are aspirational. Called out honestly rather than implied.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Content goes stale as AI evolves | Curated bank is small and easy to update; roadmap adds units. |
| Gamification feels gimmicky | Kept lightweight; core value is the explanations, not the points. |
| Analytics privacy concern | PostHog is env-gated and disabled cleanly if no key; no accounts. |
| Difficulty mis-calibrated | `lesson_failed` and per-concept accuracy inform tuning. |
| Progress loss (cleared storage) | Accepted trade-off for no-accounts simplicity; roadmap adds optional sync. |

## 12. Roadmap

- **v1.1:** more units/questions; accessibility audit; per-concept review mode.
- **v1.2:** daily challenge; spaced-repetition of missed concepts using captured `question_answered` data.
- **v2:** optional accounts to sync XP/streak across devices; leaderboards.

## 13. Open questions

1. Should missed concepts feed a personalized review queue (spaced repetition)?
2. How large should the question bank grow before curation becomes a maintenance burden?
3. Should any lightweight LLM feature (e.g., "explain more") be added, or does that break the fast/free/reliable promise?
