# PRD — PM AI Agent (Your Own Product Manager AI Agent)

| | |
|---|---|
| **Product** | PM AI Agent |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/pm-agent` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

A conversational **Product Manager co-pilot** you chat with. It helps you draft PRDs, break features into user stories with acceptance criteria, prioritize backlogs (RICE / MoSCoW), draft roadmaps, sharpen positioning, and pressure-test ideas. The interface is a multi-turn chat with **quick-action starter chips** ("Draft a PRD," "Break into user stories," "Prioritize my backlog," "Draft a roadmap," "Critique my idea"). It behaves like a sharp, experienced PM: concise and structured, asks a clarifying question when something's ambiguous, and makes reasonable stated assumptions — but never invents facts about your product. Replies render as light markdown (headings, bold, lists, tables). Positioned as **"ship your own PM AI Agent"** — built natively for a clean single-site architecture rather than forking an external agent repo.

## 2. Problem & background

Product work is full of structured artifacts — PRDs, user stories, prioritization frameworks, roadmaps, positioning — that follow known patterns but still take real effort to produce well. Generic chat assistants can help, but they ramble, skip the PM structure, and confidently invent details about *your* product. Meanwhile, "PM AI agent" tools often mean forking a heavyweight external agent framework, which is overkill for a portfolio site and muddies its clean single-deployment architecture.

There's a gap for a **focused, native PM co-pilot** that knows the PM playbook, keeps conversation context, stays concise and structured, and — crucially — doesn't fabricate facts about the user's product.

## 3. Goals & non-goals

**Goals**
- Provide a conversational PM co-pilot for PRDs, stories, prioritization, roadmaps, positioning, and critique.
- Keep it **structured and concise**, in the voice of an experienced PM.
- Offer **quick-action chips** to lower the blank-page barrier.
- Ask a clarifying question when ambiguous; otherwise make **reasonable stated assumptions**.
- **Never invent facts** about the user's product.
- Ship it **natively** (not by forking an external agent repo) for a clean single-site architecture.

**Non-goals (v1)**
- Not a project board or ticketing tool — it drafts; the user acts.
- No accounts or **server-side storage** (context lives in the browser).
- Not a streaming/agentic multi-tool system — a focused, non-streaming chat.
- Not a replacement for a real PM's judgment — a co-pilot.

## 4. Target users

| Persona | Need |
|---|---|
| **PM / aspiring PM** | Fast, structured help producing PM artifacts. |
| **Founder / solo builder** | A PM sounding board to draft PRDs, stories, and roadmaps. |
| **Engineer / designer** | Turn a feature idea into structured stories and acceptance criteria. |
| **Recruiter / hiring manager (secondary)** | Evaluate the author's applied product + AI craft via the portfolio. |

## 5. User stories

- As a user, I can **chat** with a PM co-pilot across **multiple turns**, with context preserved.
- As a user, I can tap a **quick-action chip** ("Draft a PRD," "Break into user stories," "Prioritize my backlog," "Draft a roadmap," "Critique my idea") to start fast.
- As a user, I can get a **PRD draft**, **user stories with acceptance criteria**, a **prioritized backlog** (RICE / MoSCoW), a **roadmap**, **positioning**, or a **critique** of my idea.
- As a user, I get **concise, structured** replies rendered as **light markdown**.
- As a user, I get a **clarifying question** when my input is ambiguous, otherwise **reasonable stated assumptions**.
- As a user, I can trust it **won't invent facts** about my product.
- As a user, when the model is unavailable, I get a **graceful message**.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Chat interface.** Multi-turn chat; conversation context kept in the browser and **sent each turn** to the model.
- **FR2 — Quick-action chips.** Starter chips: "Draft a PRD," "Break into user stories," "Prioritize my backlog," "Draft a roadmap," "Critique my idea."
- **FR3 — PM capabilities.** Draft PRDs; break features into user stories **with acceptance criteria**; prioritize backlogs via **RICE / MoSCoW**; draft roadmaps; sharpen positioning; pressure-test ideas.
- **FR4 — PM persona.** System prompt makes it act as a sharp, experienced PM: concise and structured; asks a clarifying question when ambiguous but makes **reasonable stated assumptions**; **never invents facts** about the user's product.
- **FR5 — Markdown rendering.** Replies render as **light markdown** — headings, bold, lists, tables.
- **FR6 — Non-streaming.** Replies are returned non-streaming.
- **FR7 — Graceful degradation.** A clear message if the model is unavailable.
- **FR8 — No server storage.** No server-side storage of conversations; context lives in the browser.
- **FR9 — Navigation out.** A visible "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/pm-agent
        │
   Quick-action chips:
   [Draft a PRD] [User stories] [Prioritize] [Roadmap] [Critique]
        │
        ▼
   Chat (multi-turn) ─► user message
        │                    │
        │        full conversation context sent each turn
        │                    ▼
        │             OpenRouter (deepseek/deepseek-chat → free fallback)
        │                    │
        ▼                    ▼
   context kept in browser   reply rendered as light markdown
        │                    (headings, bold, lists, tables)
        └── ambiguous? clarifying question ; else stated assumptions
```

- Single responsive page, dark theme consistent with the portfolio (warm accent).
- Chat transcript is the focal element; quick-action chips sit above or beside the input to seed conversations.
- Replies are structured and skimmable thanks to light markdown.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered HTML template; the **conversation context is kept in the browser and sent each turn**. Light-markdown rendering client-side. Prefix-aware URLs via an injected `APP_ROOT` so it works mounted under a subpath.
- **Backend:** FastAPI sub-app mounted at `/pm-agent` on the site's single Vercel Python function; static + Jinja2 template from the same package.
- **LLM:** OpenRouter, `deepseek/deepseek-chat` primary with free-model fallback, **non-streaming**. The system prompt encodes the PM persona (sharp, concise, structured; clarify when ambiguous; stated assumptions; never fabricate product facts). Degrades gracefully with a clear message if the model is unavailable.
- **Native build:** implemented **natively** rather than forking an external agent framework, keeping the site's clean single-deployment architecture — positioned as "ship your own PM AI Agent."
- **Routing:** `vercel.json` rewrites `/pm-agent` and `/pm-agent/*` to the function; the portfolio SPA is the fallback.
- **State:** none server-side; conversation lives only in the browser.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** conversations are **not stored** server-side; context lives in the browser and is sent to the model only to produce replies.
- **Reliability:** graceful message if the model is unavailable; free-model fallback improves availability.
- **Performance:** static-fast page; non-streaming replies target a few seconds.
- **Cost:** a fraction of a cent per turn on the paid model; free fallback models cost $0.
- **Accessibility:** semantic headings, keyboard-usable chat input and chips, sufficient contrast; markdown output is readable. *(Formal a11y audit is a v1.1 item.)*
- **Responsive:** works on mobile — chips wrap; transcript scrolls; input stays reachable.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Sessions with ≥ 1 message** | Do users engage the chat? | ≥ 70% of sessions send a message |
| **Turns per session** | Depth of collaboration | ≥ 3 turns median |
| **Quick-action chip usage** | Do chips lower the barrier? | ≥ 40% of sessions start from a chip |
| **Artifact completion** | Do users get a usable draft? | qualitative until analytics exist |
| **Portfolio → agent click-through** | Draw as a portfolio piece | tracked at the card |

> **Note:** This app ships **without analytics instrumentation** — these targets are aspirational. Across the portfolio, only **Learn-AI** has telemetry (PostHog); this app has no event tracking. Called out honestly rather than implied.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Model invents facts about the product | System prompt forbids fabrication; asks clarifying questions; states assumptions. |
| Replies ramble / lack PM structure | Persona enforces concise, structured output; markdown keeps it skimmable. |
| Model unavailable / key invalid | Free-model fallback; graceful message rather than an error. |
| Context grows large over a long chat | Context kept client-side and sent per turn; long chats naturally reset on reload. |
| Privacy concern over conversations | Not stored server-side; lives only in the browser; stated in this PRD. |

## 12. Roadmap

- **v1.1:** analytics (engagement, chip usage, turns), accessibility audit, export a chat to markdown.
- **v1.2:** save/resume conversations locally; more chips (competitive teardown, metrics tree).
- **v2:** optional accounts to persist conversations; deeper integrations (export stories to a board).

## 13. Open questions

1. Should conversations be locally saveable/resumable, or is per-session context the right default?
2. Is streaming worth adding for perceived speed, given the non-streaming simplicity?
3. Which privacy-friendly analytics tool fits the no-accounts, no-storage stance?
