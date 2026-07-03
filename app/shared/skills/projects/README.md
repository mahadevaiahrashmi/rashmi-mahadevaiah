# Project Skills

One `SKILL.md`-style file per project that represents a reusable AI **skill** — a
capability an agent (or a person) can invoke, with a clear "when to use", inputs,
and how it works. Each links to the live app.

| Skill | Project | Live |
|---|---|---|
| [personal-voice](personal-voice.md) | Personal Voice Skill | `/personal-voice` |
| [jd-to-resume](jd-to-resume.md) | JD-to-Resume Customizer | `/resume-tailor` |
| [funded-companies-agent](funded-companies-agent.md) | Funded Companies Agent | `/funded-companies` |
| [gtm-video-plan](gtm-video-plan.md) | GTM with AI Videos | `/gtm-videos` |
| [product-manager](product-manager.md) | PM AI Agent | `/pm-agent` |
| [explainer-video](explainer-video.md) | Narrated Explainer Video Bot | `/explainer-bot` |
| [product-discovery-coach](product-discovery-coach.md) | Product Discovery Guide | `/product-discovery` |
| [ai-exam-proctor](ai-exam-proctor.md) | AI Exam Proctor | `/proctored-ai` |
| [interview-prep-mapper](interview-prep-mapper.md) | Interview Prep Mapper | `/interview-prep` |

## Meta

- [add-new-project](add-new-project.md) — the repeatable recipe for adding a new embedded project/app to this portfolio (folder → mount → route → card → docs → deploy).

## Not skills (intentionally omitted)

These projects are demos or utilities, not reusable agent skills, so they have no `SKILL.md`:

- **GlassChat** (`/glass-chat`) — a *teaching demo* about how LLMs work (tokens, context, cost), not a capability to invoke.
- **Learn-AI** (`/learn-ai`) — a Duolingo-style *course*; its value is the lesson content, not an agent skill.
- **Time Tracker** (`/time-tracker`) — a client-side productivity app with no AI capability.

> Related: the parent folder `app/shared/skills/` also holds the 500+ Pro-PM skill
> library (`skills/`, `agents/`, `playbooks/`, `templates/`, `frameworks/`) that the
> **product-manager** and **product-discovery-coach** skills retrieve from at runtime
> via `app/shared/retrieval.py`.
