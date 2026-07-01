# PRD — GTM with AI Video

| | |
|---|---|
| **Product** | GTM with AI Video |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/gtm-videos` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

Turn **what you're launching** into a full **go-to-market plan built on short-form AI video**, aimed at landing your **first 10 users**. You describe your launch, who it's for, a channel (Instagram or LinkedIn), and an optional angle. The app returns positioning, the sharpest hook for that channel, **3–5 video concepts** (each with a paste-ready generation prompt for an ~8s cinematic clip, plus on-screen script, caption, hashtags, and CTA), a ~2-week posting plan, channel-specific tactics, a first-10-users playbook, and the one metric to watch. Real video generation is wired to **Google Veo** via the Gemini API (async, passcode-gated), and every concept also has **free hand-off buttons** (Kling / Hailuo / Higgsfield) that copy the prompt and open the tool so you can render at $0.

## 2. Problem & background

Getting the first 10 users is the hardest, loneliest part of a launch — and short-form video is now the most effective channel to do it, but it's intimidating. Founders don't know what to post, how to hook the algorithm, what to actually say on screen, or how to string it into a plan. And AI video tools that could help are scattered, some are expensive, and none of them start from *your* launch and *your* channel.

There's a gap for a tool that goes from "here's what I'm launching" to a **complete, channel-specific GTM video plan** — concepts, scripts, captions, a posting cadence, and a first-10-users playbook — with the option to actually generate the clips (paid, gated) or hand the prompt to a free tool.

## 3. Goals & non-goals

**Goals**
- Produce a complete short-form-video GTM plan from a short brief.
- Give **channel-specific** hooks and tactics (Instagram vs LinkedIn).
- Provide **3–5 concrete video concepts**, each paste-ready for generation.
- Let the owner actually **generate** clips (Google Veo) — safely gated.
- Give everyone a **free path** to render via hand-off buttons ($0 tools).
- Focus the whole plan on the **first 10 users** and one metric.

**Non-goals (v1)**
- Not a scheduler/publisher — it plans; the user posts.
- No accounts or server-side storage.
- Not a general video editor — it generates ~8s clips and hands off prompts.
- The public cannot spend the owner's paid Veo credits (passcode-gated).

## 4. Target users

| Persona | Need |
|---|---|
| **Indie hacker / founder** | A concrete short-form-video plan to land the first 10 users. |
| **Solo marketer** | Channel-specific hooks, scripts, and a 2-week cadence, ready to post. |
| **Creator-operator** | Paste-ready generation prompts + free render paths. |
| **Recruiter / hiring manager (secondary)** | Evaluate the author's applied product + AI craft via the portfolio. |

## 5. User stories

- As a founder, I can **describe my launch, audience, channel, and angle** and get a full GTM video plan.
- As a founder, I can see **positioning** and the **sharpest hook** for my chosen channel.
- As a founder, I get **3–5 video concepts**, each with a **generation prompt**, on-screen script, caption, hashtags, and CTA.
- As a founder, I get a **~2-week posting plan**, channel tactics, a **first-10-users playbook**, and the **one metric** to watch.
- As the owner, I can **generate a clip with Veo** for a concept (passcode-gated).
- As any user, I can **hand off a prompt** to a free tool (Kling / Hailuo / Higgsfield) with one tap.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Brief input.** Fields for what you're launching, who it's for, channel (**Instagram or LinkedIn**), and optional angle.
- **FR2 — Plan generation (LLM).** Produce positioning, the sharpest **channel-specific hook**, and the full plan (below) via OpenRouter.
- **FR3 — Video concepts.** 3–5 concepts, each with: a paste-ready **Higgsfield/Google-Veo generation prompt** (~8s cinematic clip), an **on-screen script**, a **caption**, **hashtags**, and a **CTA**.
- **FR4 — Plan sections.** A **~2-week posting plan**, channel-specific tactics, a **first-10-users playbook**, and the **one metric to watch**.
- **FR5 — Veo generation.** A per-concept "Generate video" button drives Google Veo via the Gemini API, **async**: `POST /video/start` (`predictLongRunning`) → poll `/video/status` → `/video/file` proxy-streams the finished MP4.
- **FR6 — Passcode gate.** Veo generation is gated by `VEO_PASSCODE` so the public can't spend the owner's paid credits.
- **FR7 — Server-side key.** The Gemini key stays **server-side**, never exposed to the browser.
- **FR8 — Free hand-offs.** Per-concept buttons (**Kling / Hailuo / Higgsfield**) copy the prompt and open the tool so the user can render at $0 in that tool's free web credits.
- **FR9 — Navigation out.** A visible "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/gtm-videos
        │
   [What you're launching] [Who it's for] [Channel: IG/LinkedIn] [Angle?]
        │
        ▼
   Generate plan ──► OpenRouter
        │
        ▼
   Positioning + sharpest hook (channel-specific)
   3–5 concepts { gen-prompt, on-screen script, caption, #tags, CTA }
   ~2-week posting plan + channel tactics + first-10-users + one metric
        │
        ├── per concept: "Generate video" (passcode-gated)
        │        POST /video/start ─► poll /video/status ─► /video/file (MP4)
        │        (Gemini key stays server-side)
        │
        └── per concept: free hand-off → Kling / Hailuo / Higgsfield
                 (copy prompt + open tool, render at $0)
```

- Single responsive page, dark theme consistent with the portfolio (warm accent).
- Concepts render as cards; each carries its prompt, script, caption, tags, CTA, and the generate / hand-off buttons.
- Veo generation shows async status while polling; the finished MP4 streams in via the proxy.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered HTML template; prefix-aware URLs via an injected `APP_ROOT` so it works mounted under a subpath. Any state is browser-local.
- **Backend:** FastAPI sub-app mounted at `/gtm-videos` on the site's single Vercel Python function; static + Jinja2 template from the same package.
- **LLM:** OpenRouter (`deepseek/deepseek-chat` primary, free-model fallback) generates the plan and concepts; degrades gracefully if the model is unavailable.
- **Video generation (Veo):** real generation via **Google Veo through the Gemini API**, async — `POST /video/start` uses `predictLongRunning`, `/video/status` polls the operation, and `/video/file` **proxy-streams** the finished MP4 so the **Gemini key never reaches the browser**. Gated by `VEO_PASSCODE` because Veo is **paid** (~$1–6 per 8s clip) and needs a billing-enabled Gemini key.
- **Free hand-offs:** per-concept buttons copy the generation prompt and open Kling / Hailuo / Higgsfield. **Higgsfield has no reliable public API**, so it's a **copy-prompt hand-off**, not an API integration.
- **Routing:** `vercel.json` rewrites `/gtm-videos` and `/gtm-videos/*` (including the video sub-routes) to the function; the portfolio SPA is the fallback.
- **State:** none server-side.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** briefs are sent to the model only to generate the plan; **not stored** server-side. The Gemini key stays server-side.
- **Reliability:** graceful message if the model is unavailable; free hand-offs work regardless of Veo access.
- **Performance:** static-fast page; plan generation targets a few seconds; Veo is async (clips take longer, surfaced via polling).
- **Cost:** plan generation is cheap/free (OpenRouter); **Veo is paid (~$1–6 per 8s clip)** and passcode-gated to protect the owner's credits; free hand-offs cost $0.
- **Accessibility:** semantic headings, keyboard-usable controls, sufficient contrast; buttons labeled clearly. *(Formal a11y audit is a v1.1 item.)*
- **Responsive:** works on mobile — concept cards stack; buttons wrap.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Plan completion rate** | Do users get a full plan? | ≥ 75% of sessions generate a plan |
| **Concepts used (copy/hand-off)** | Is the output actionable? | ≥ 1 hand-off per session median |
| **Veo generation attempts (owner)** | Is real generation used? | tracked for the owner's use |
| **Channel split (IG vs LinkedIn)** | Which channel dominates | informs future tactics |
| **Portfolio → GTM click-through** | Draw as a portfolio piece | tracked at the card |

> **Note:** This app ships **without analytics instrumentation** — these targets are aspirational. Across the portfolio, only **Learn-AI** has telemetry (PostHog); this app has no event tracking. Called out honestly rather than implied.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Public spends the owner's Veo credits | `VEO_PASSCODE` gate on all Veo generation. |
| Gemini key leakage | Key stays server-side; `/video/file` proxy-streams the MP4. |
| Veo cost/latency (paid, async) | Passcode gate + free hand-off buttons give a $0 path for everyone. |
| Higgsfield has no reliable API | Copy-prompt hand-off instead of an API integration. |
| LLM unavailable | Graceful message; free hand-offs still work with existing prompts. |

## 12. Roadmap

- **v1.1:** analytics (plan completion, hand-off usage), accessibility audit, more channels (TikTok, YouTube Shorts).
- **v1.2:** save/export a plan; richer per-channel hook libraries.
- **v2:** optional accounts to store plans and generated clips; batch generation.

## 13. Open questions

1. Should generated clips be downloadable/savable, or is proxy-stream-and-view enough for v1?
2. Which additional free hand-off tools are worth adding beyond Kling / Hailuo / Higgsfield?
3. Which privacy-friendly analytics tool fits the no-accounts stance?
