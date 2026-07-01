# PRD — Personal Voice Skill

| | |
|---|---|
| **Product** | Personal Voice Skill |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/personal-voice` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

A tiny writing companion that **learns your voice from a few samples and drafts in it**. You paste a handful of things you've actually written; the app studies the tone, rhythm, and vocabulary, then drafts a reply, email, post, or message that sounds like *you* — not like generic AI. Every draft lands in an editable box with a Copy button and one-tap refinement buttons (Shorter, Warmer, More formal, More casual, Regenerate) that nudge the draft while holding your voice steady. The samples never leave the browser: they're saved on-device in `localStorage`.

## 2. Problem & background

AI writing tools are everywhere, but they all sound the same — polished, hedged, faintly corporate. The moment you paste their output into a real reply, people can tell. The friction isn't generating text; it's generating text that sounds like the person sending it.

Most people already have a voice — it lives in the emails and messages they've sent for years. What's missing is a lightweight way to *hand the model a sample of that voice* and get drafts that match it, without setting up accounts, training runs, or fine-tuning. There's a gap for a zero-setup tool that turns "here's how I write" plus "here's what I want to say" into a ready-to-send draft in your own register.

## 3. Goals & non-goals

**Goals**
- Produce drafts that recognizably match the user's supplied voice samples.
- Keep setup to near-zero: paste samples once, they persist on-device.
- Make refinement one tap (Shorter / Warmer / More formal / More casual / Regenerate).
- Never fabricate facts — the model rewrites intent in the user's voice, it doesn't invent claims.
- Be honest when the model is unavailable rather than emitting fake output.
- Keep user samples private — never stored server-side.

**Non-goals (v1)**
- Not a fine-tuning or model-training product (no persistent per-user model).
- No accounts, logins, or server-side profiles.
- Not a full email client or scheduler — it drafts; the user sends.
- Not a multi-voice team tool (single voice, single user, single browser).
- No offline/mock drafting — voice mimicry genuinely needs a live model.

## 4. Target users

| Persona | Need |
|---|---|
| **Busy professional** | Reply to email and messages fast without sounding like a robot. |
| **Founder / solo operator** | Post and DM at volume while keeping a consistent personal voice. |
| **Non-native English writer** | Draft confidently in a voice they've already validated as "theirs." |
| **Recruiter / hiring manager (secondary)** | Evaluate the author's applied product + AI craft via the portfolio. |

## 5. User stories

- As a user, I can **paste a few writing samples** once and have them **remembered** on my device.
- As a user, I can **pick the kind of thing** I'm writing (Reply / Email / Post / Message).
- As a user, I can **paste the message I'm replying to** as context.
- As a user, I can **say what the draft should communicate** and get it back in my voice.
- As a user, I can **edit the draft in place** and **Copy** it with one tap.
- As a user, I can **refine** the draft — Shorter, Warmer, More formal, More casual — without losing my voice.
- As a user, I can **Regenerate** for a fresh take on the same instructions.
- As a user, when the model is unavailable, I get an **honest message**, not fabricated text.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Voice capture.** A "Your voice" textarea accepts one or more writing samples; contents persist in `localStorage` on-device and pre-load on return.
- **FR2 — Kind selector.** User selects the output type: Reply, Email, Post, or Message. The selection shapes format and length expectations.
- **FR3 — Context input.** An optional "Context" field holds the message being replied to (or background), fed to the model but not treated as facts to assert.
- **FR4 — Intent input.** A "What it should say" field captures the core message the draft must convey.
- **FR5 — Draft generation.** On submit, the system returns a single draft in the user's voice, rendered in an **editable** box.
- **FR6 — Copy.** A Copy button copies the current (possibly edited) draft to the clipboard.
- **FR7 — One-tap tweaks.** Shorter, Warmer, More formal, More casual, and Regenerate each re-run the model on the *current* draft, preserving voice while applying the requested shift.
- **FR8 — No fabrication.** The system prompt forbids inventing facts, names, dates, or commitments not present in the inputs.
- **FR9 — Output-only.** The system prompt forces output-only text (no preamble like "Here's your draft:").
- **FR10 — Honest degradation.** If no model is available, show a clear message ("voice drafting needs a live model right now") — never fake output.
- **FR11 — Navigation out.** A visible "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/personal-voice
        │
   [Your voice] ──── saved to localStorage ────┐
        │                                        │ (persists)
        ▼                                        ▼
   [Kind] + [Context?] + [What it should say] ─► Draft
        │                                        │
        ▼                                        ▼
   editable draft box ──► Copy                 tweaks:
        │                                Shorter │ Warmer │
        └── Shorter/Warmer/Formal/Casual ──► refine (same voice)
                                            Regenerate
```

- Single responsive page, dark theme consistent with the portfolio (warm accent).
- Voice textarea sits at the top and stays out of the way once filled.
- Draft panel is the focal element: editable, with Copy and the tweak-button row directly beneath.
- Tweak buttons act on the live draft, so refinements stack naturally.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered HTML template; voice samples and last inputs persist in the browser via `localStorage`. Prefix-aware URLs via an injected `APP_ROOT` so it works mounted under a subpath.
- **Backend:** FastAPI sub-app mounted at `/personal-voice` on the site's single Vercel Python function; static assets + Jinja2 template served from the same package.
- **LLM:** calls OpenRouter with `deepseek/deepseek-chat` as primary and free models as fallback. Because voice mimicry needs a capable live model, there is **no** offline/mock path — if no model is reachable, the app says so honestly.
- **Prompting:** the system prompt (a) grounds the model in the user's voice samples, (b) forbids inventing facts, (c) forces output-only responses. Tweaks re-send the current draft plus the requested shift.
- **Routing:** `vercel.json` rewrites `/personal-voice` and `/personal-voice/*` to the function; the portfolio SPA is the fallback.
- **State:** none server-side — voice samples live only in the browser and are never persisted server-side.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** voice samples are stored **on-device only** (`localStorage`) and are sent to the model solely to produce a draft; never stored server-side.
- **Reliability:** graceful, honest failure when the model is unavailable — no fabricated output.
- **Performance:** page is static-fast; draft generation targets a few seconds; tweaks reuse the same fast path.
- **Cost:** a fraction of a cent per draft on the paid model; free fallback models cost $0.
- **Accessibility:** semantic headings, keyboard-usable controls, sufficient contrast, editable output region. *(Formal a11y audit is a v1.1 item.)*
- **Responsive:** works on mobile — layout stacks; tweak buttons wrap.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Voice-sample fill rate** | Do users teach it their voice? | ≥ 70% of sessions paste a sample |
| **Draft generation rate** | Core action taken | ≥ 80% of sessions generate ≥ 1 draft |
| **Tweaks per draft** | Is refinement useful? | ≥ 1 tweak median |
| **Copy rate** | Draft was good enough to use | ≥ 40% of drafts copied |
| **Return visits (persisted voice)** | Stickiness | measurable via `localStorage` |

> **Note:** This app ships **without analytics instrumentation** — these targets are aspirational. Across the portfolio, only **Learn-AI** has telemetry (PostHog); the other apps, including this one, have no event tracking. Called out honestly rather than implied.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Model unavailable / key invalid | Free-model fallback; honest "needs a live model" message rather than fake output. |
| Drafts don't sound like the user | Voice samples grounded in the system prompt; tweak buttons let the user steer quickly. |
| Model invents facts | System prompt explicitly forbids fabrication; context is treated as background, not claims. |
| Preamble leaks into output | Output-only instruction in the system prompt; editable box lets users trim if needed. |
| Privacy concern over samples | Stored on-device only; never persisted server-side; stated in this PRD. |

## 12. Roadmap

- **v1.1:** analytics (fill/generate/copy funnel), accessibility audit, multiple saved voice profiles.
- **v1.2:** per-kind length presets; tone sliders beyond the four preset tweaks.
- **v2:** optional accounts to sync voice profiles across devices; per-recipient voice tuning.

## 13. Open questions

1. Should the app auto-detect voice attributes (formality, length) and surface them to the user for confirmation?
2. Is a single voice profile enough, or do users want to switch between "work" and "personal" voices?
3. Which privacy-friendly analytics tool fits the on-device, no-accounts stance?
