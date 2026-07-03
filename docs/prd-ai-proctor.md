# PRD — AI Exam Proctor

| | |
|---|---|
| **Product** | AI Exam Proctor |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/proctored-ai` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-03 |
| **Source** | Adapted from [ProctoredAI](https://github.com/abhinavrbharadwaj7/AI_test_propter) by Abhinav R Bharadwaj |

---

## 1. Summary

An **AI-generated, AI-graded exam** with **privacy-first proctoring**. Enter a topic and the AI writes a mixed exam (multiple-choice + short-answer); you take it against a live timer, then the AI grades your written answers and reports a score. Proctoring is **opt-in**: the camera is **OFF by default** — you may turn it on for a small webcam preview that **stays entirely in the browser** (no video is uploaded) — while lightweight integrity signals (tab switches, focus loss, copy attempts, leaving full-screen) are always tracked locally and summarized by the AI at the end.

## 2. Problem & background

AI exam proctoring usually means **uploading your webcam** to a service that watches you — invasive, and impossible to do well on a stateless serverless site. But the useful parts — auto-generating a fair exam, grading open answers, and flagging obvious integrity issues — don't actually require sending video anywhere. This is a **privacy-respecting reinterpretation**: keep the AI exam + grading + integrity signals, make the camera an explicit, local-only opt-in rather than a mandatory upload.

## 3. Goals & non-goals

**Goals**
- Generate a fair mixed-format exam (MCQ + short-answer) on any topic.
- Grade short-answer responses with the AI; grade MCQ deterministically.
- **Camera OFF by default**, with a clear **opt-in** that keeps video in the browser.
- Always track client-side integrity signals and give an AI integrity summary.
- Show a clear results page: score, per-question feedback, proctoring report.

**Non-goals (v1)**
- No server-side video/audio, face recognition, or identity verification.
- No accounts or server-side storage — everything is per-session in the browser.
- Not a high-stakes certification tool — a demo of privacy-first proctoring.

## 4. Target users

| Persona | Need |
|---|---|
| **Student / self-learner** | A quick, gradable practice exam on any topic. |
| **Educator** | See a privacy-respecting alternative to invasive proctoring. |
| **Privacy-minded user** | Take a proctored exam without uploading their webcam. |
| **Recruiter / hiring manager (secondary)** | See applied AI + a thoughtful privacy stance. |

## 5. User stories

- As a user, I enter a **topic** and question count and get an AI-written exam.
- As a user, the **camera is off by default**; I can **opt in** and see a local webcam preview I can turn off anytime.
- As a user, I answer **multiple-choice and short-answer** questions with a timer and progress bar.
- As a user, my **written answers are graded by the AI** and MCQs deterministically.
- As a user, I see a **proctoring report** — the flags detected and an AI integrity summary — plus whether the camera was on.
- As a user, I get a **score, per-question feedback**, and can take another exam.
- As a visitor, I can **get back to the portfolio** and see the **source credited**.

## 6. Functional requirements

- **FR1 — Exam generation.** `POST /generate` (topic, count) → validated JSON questions (`mcq` with options + answer, or `text` with reference answer).
- **FR2 — Grading.** `POST /grade` (questions + answers) → MCQ graded deterministically; short-answer graded by the AI (0 / 0.5 / 1 + feedback); returns total + percent.
- **FR3 — Integrity summary.** `POST /assess` (client events + camera state) → a neutral AI integrity summary with a risk level.
- **FR4 — Camera opt-in (off by default).** A toggle, unchecked by default; enabling it calls `getUserMedia` and shows a floating preview; video **never leaves the browser**; user can turn it off anytime.
- **FR5 — Client-side integrity signals.** Track `visibilitychange` (tab switch), window blur, `copy`, and `fullscreenchange`; show a live "Clean / N flags" chip.
- **FR6 — Exam player.** Timer, progress bar, prev/next navigation, submit.
- **FR7 — Results.** Score ring, per-question correctness + feedback, proctoring report.
- **FR8 — Graceful degradation.** Clear messages if the model is unavailable; grading/assessment failures don't block showing results.
- **FR9 — Credit + navigation.** Credit the source in the footer; "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/proctored-ai
   Setup: topic · #questions · [ camera OFF by default → opt-in ]
        │  POST /generate
        ▼
   Exam: timer · progress · MCQ/short-answer · integrity chip
        │  (camera preview stays local; tab/focus/copy/fullscreen tracked)
        │  POST /grade   +   POST /assess
        ▼
   Results: score ring · per-question feedback · proctoring report
```

- Single responsive page, Airbnb light theme (coral accent) consistent with the site.
- Floating camera only appears if the user opts in; a close button turns it off.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered template; camera via `getUserMedia` (local only); integrity via standard browser events; prefix-aware URLs via injected `APP_ROOT`.
- **Backend:** FastAPI sub-app mounted at `/proctored-ai`. Three text endpoints (`/generate`, `/grade`, `/assess`) with tolerant JSON extraction and input caps.
- **LLM:** the shared multi-provider router (`app/llm.py`) → **OpenRouter** with the `OPENROUTER_MODELS` hierarchy (free-first, then cheapest paid) and cross-provider fallback. Text-only jobs; no video is sent to any model.
- **Privacy:** no server-side storage; no webcam/audio ever uploaded; only client-detected event *labels* (not media) are sent to `/assess`.
- **Routing:** `vercel.json` rewrites `/proctored-ai` and `/proctored-ai/*` to the function; SPA fallback otherwise.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** camera off by default, opt-in, local-only; no media leaves the browser; no server storage.
- **Reliability:** deterministic MCQ grading; AI failures degrade gracefully; input caps.
- **Performance:** static-fast page; generation/grading target a few seconds each.
- **Cost:** free-first model hierarchy → typically $0; cheapest paid fallback ≤ $0.10/1M input.
- **Accessibility:** keyboard-usable inputs, options, and navigation; sufficient contrast.
- **Responsive:** works on mobile — the camera preview and layout shrink gracefully.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Exams generated per session** | Core activation | ≥ 1 in ≥ 70% of sessions |
| **Exams completed (submitted)** | Depth of use | ≥ 50% of started exams |
| **Camera opt-in rate** | Is the privacy default respected/used? | tracked qualitatively |
| **Retake rate** | Engagement | ≥ 20% take a second exam |

> **Note:** ships **without analytics instrumentation**; targets are aspirational. Only **Learn-AI** has telemetry (PostHog) across the portfolio.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Model returns malformed exam JSON | Tolerant JSON extraction + strict per-item validation; retry-friendly errors. |
| Users expect real camera surveillance | Clear messaging: camera is opt-in and local-only; integrity is signal-based. |
| Free models rate-limited (429) | Multi-provider `OPENROUTER_MODELS` hierarchy falls through to the next model. |
| Short-answer grading is subjective | Rubric-based 0/0.5/1 scoring with one-line feedback; MCQ graded deterministically. |
| Integrity signals are evadable | Framed as signals, not proof; the AI summary describes rather than accuses. |

## 12. Roadmap

- **v1.1:** analytics, accessibility audit, per-question timer, export results.
- **v1.2:** optional **local** face-presence check via the browser `FaceDetector` API (still no upload); difficulty selector.
- **v2:** optional vision-model proctoring for users who explicitly opt in and configure a multimodal model.

## 13. Open questions

1. Should a difficulty selector return in v1.1, or keep setup minimal?
2. Is a local-only face-presence indicator worth adding, or does it over-promise?
3. Should results be locally saveable to track progress across topics?
