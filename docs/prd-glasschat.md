# PRD — GlassChat (See How an LLM Works)

| | |
|---|---|
| **Product** | GlassChat |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/glass-chat` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

A **see-through LLM chat built for learning**. It makes the invisible parts of a chat model visible: a per-window **memory on/off** toggle (ON re-sends the whole conversation each turn; OFF sends only the latest message), and a **👁 inspector** on every reply that shows exactly what was sent as context, the **real token counts** (from the provider), and the **tentative cost**. Users pick from **four models** and can open **up to four windows side by side** — one shared prompt fans out to all of them — to *feel* how price and quality differ. Access is **password-gated** (server-checked) so a public demo doesn't rack up API cost.

## 2. Problem & background

Newcomers to LLMs are confused by three things that are normally hidden: **tokens** (text is billed per token, not per word), the **context window** (why the model "remembers," and why long chats get expensive), and **model/cost trade-offs**. Standard chat UIs hide all of it. There's a gap for a deliberately transparent, visual chat that turns those concepts into something you can watch happen, live, without reading a tutorial.

## 3. Goals & non-goals

**Goals**
- Make **tokens, context, and cost** visible and intuitive.
- Show a **memory on/off** toggle and let users watch the context (and price) grow or shrink.
- Provide a **👁 inspector** per message: context breakdown, real token usage, and estimated cost.
- Let users **compare up to 4 models** side by side on one prompt.
- Keep it **simple, highly visual, and attractive**.
- **Gate access** with a password to control API cost on a public site.

**Non-goals (v1)**
- Not a general-purpose assistant or productivity tool — a learning toy.
- No accounts or server-side storage (conversations live in the browser).
- Not a streaming UI — replies are returned whole.
- Not a billing-accurate meter — cost is an **estimate** for learning (token totals are real).

## 4. Target users

| Persona | Need |
|---|---|
| **AI beginner / student** | See what tokens, context, and cost actually are. |
| **Educator** | A live demo to teach how chat models work. |
| **PM / builder new to LLMs** | Intuition for cost/quality trade-offs across models. |
| **Recruiter / hiring manager (secondary)** | See the author's ability to teach + build AI UX. |

## 5. User stories

- As a user, I **log in with a password** before I can chat.
- As a user, I can toggle **memory on/off per window** and watch the context change.
- As a user, I can click the **👁** on any reply to see the exact context sent, the **real token counts**, and the **estimated cost**.
- As a user, I can **pick from four models** per window.
- As a user, I can **＋ Add window** and compare **up to four models** on one shared prompt.
- As a user, I can **remove a window** and start a **New chat**.
- As a user, I see a **running tokens + cost meter** per window.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Password gate.** A login screen; the password is **verified server-side** against `APP_PASSWORD`. A wrong password returns 401 and bounces back to login.
- **FR2 — Chat proxy.** `POST /chat` (JSON: `password`, `model`, `messages`) forwards to OpenRouter and returns `{reply, usage, model}` with **real token usage**.
- **FR3 — Memory toggle.** Per window: ON sends system prompt + full history + new message; OFF sends system prompt + new message only.
- **FR4 — Token inspector.** Per message: a **context breakdown** (per-item token estimate with bars), the provider's **real** input/output/total tokens, and a **cost** line per the model's price.
- **FR5 — Model picker.** Four models spanning cheap→premium, each with list prices; selectable per window.
- **FR6 — Compare / Add window.** 1–4 windows; one prompt fans out to all; each has its own model, memory, history, and meter.
- **FR7 — Model allowlist.** The endpoint only accepts a fixed set of model IDs (cost control).
- **FR8 — Running meter.** Per-window cumulative tokens + cost.
- **FR9 — Graceful errors.** Clear messages for wrong password, provider errors, or unconfigured backend.
- **FR10 — No server storage.** Conversations live only in the browser.
- **FR11 — Navigation out.** A visible "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/glass-chat  ──►  password login  ──►  chat shell (1–4 windows)
                                            │
              one prompt ──► fans out to every window in parallel
                                            │
        each window: memory on/off · model picker · Σ tokens · $ cost
                                            │
                          reply ──► 👁 inspector:
                          [context sent] [real tokens] [est. cost]
```

- Glassy dark theme with an animated aurora background; a right-side inspector drawer.
- Windows sit side by side (horizontally scrollable); each is an independent column.

## 8. Technical design

- **Frontend:** single non-module `app.js` (inlined model catalog, token estimator, and fetch wrapper) + a copied glassy stylesheet; server-rendered template with an injected `APP_ROOT` for prefix-aware fetches. Context breakdown uses a ~4-chars/token **estimate**; authoritative totals come from the provider's `usage`.
- **Backend:** FastAPI sub-app mounted at `/glass-chat`. `POST /chat` checks the password, validates the model against an **allowlist**, and proxies **OpenRouter** (`max_tokens` capped), returning real usage. `GET /` serves the app shell.
- **Models (OpenRouter IDs):** `openai/gpt-4o-mini`, `google/gemini-2.5-flash`, `anthropic/claude-haiku-4.5`, `anthropic/claude-sonnet-4.6` — list prices baked into the client for cost math.
- **Auth:** password compared to `APP_PASSWORD`; if unset, the gate is open (local dev). The key never reaches the browser.
- **Routing:** `vercel.json` rewrites `/glass-chat` and `/glass-chat/*` to the function; SPA fallback otherwise.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Security/cost:** password verified server-side; model allowlist + `max_tokens` cap bound spend; API key server-only.
- **Privacy:** no server-side storage; conversations live in the browser.
- **Performance:** static-fast shell; parallel fan-out to windows; non-streaming replies in a few seconds.
- **Accuracy:** token **totals are real** (provider usage); per-item context tokens and cost are **estimates**, stated as such.
- **Accessibility:** keyboard-usable input, toggle, and model select; sufficient contrast. *(Formal audit is a v1.1 item.)*
- **Responsive:** windows scroll horizontally; brand label collapses on small screens.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Inspector opens per session** | Are users learning the token/cost story? | ≥ 1 open in ≥ 50% of sessions |
| **Memory toggled at least once** | Engaging the core lesson | ≥ 30% of sessions |
| **Compare (≥ 2 windows) used** | Model trade-off exploration | ≥ 25% of sessions |
| **Messages per session** | Engagement | ≥ 3 median |

> **Note:** ships **without analytics instrumentation**; targets are aspirational. Only **Learn-AI** has telemetry (PostHog) across the portfolio.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Public demo runs up API cost | Password gate + model allowlist + `max_tokens` cap. |
| Users read the cost estimate as a real bill | Labeled an **estimate**; real token totals shown separately. |
| Token estimate diverges from reality | Only per-item context is estimated; totals come from the provider. |
| OpenRouter key invalid / model retired | Clear error surfaced; model IDs verified against the live list; allowlist easy to update. |
| Password shipped in the repo | Password lives only in the server environment, never in client code. |

## 12. Roadmap

- **v1.1:** analytics (inspector opens, memory toggles, compare usage), accessibility audit, streaming replies.
- **v1.2:** save/replay a conversation locally; a "context window filling up" visualization.
- **v2:** cross-provider routing beyond OpenRouter; a shareable read-only transcript with the inspector data.

## 13. Open questions

1. Should cost also be shown live in the running meter, or only in the inspector?
2. Is streaming worth the added complexity for a learning tool?
3. Should the model set rotate as prices/models change, or stay fixed for a stable lesson?
