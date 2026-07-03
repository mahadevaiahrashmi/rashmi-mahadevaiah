---
name: add-new-project
description: Add a new embedded project (app) to the portfolio — the full, repeatable checklist from folder to live deploy.
metadata:
  type: reference
---

# Add a New Project

The repeatable recipe for adding a new embedded app to this portfolio. Every
project is a **FastAPI sub-app** mounted under a path prefix on the single Vercel
Python function, served by the site's SPA. Follow these steps in order.

## When to use
Use when adding a new mini-app/project to the portfolio (e.g. "add project N",
"turn repo X into a project here").

## The pattern
One Vercel function (`api/index.py`) mounts each app under `/<prefix>`. The app is
vanilla JS + a Jinja template + static CSS/JS. LLM calls (if any) go through the
shared router `app/llm.py` → OpenRouter with the `OPENROUTER_MODELS` hierarchy.
No server-side storage; secrets live only in the server env.

## Steps

1. **Create the app package** — `app/<name>/`:
   - `__init__.py` (with an agent-notes comment).
   - `main.py` — `app = FastAPI(...)`, mount `/static`, a `Jinja2Templates`, a
     `GET /` returning the template with `{"root_path": request.scope.get("root_path","")}`,
     and any `POST` endpoints. For AI, `from .. import llm` and call
     `llm.complete(prompt, system=..., max_tokens=...)` / `llm.chat(...)`. Guard with
     `if not llm.available(): return {...}` and degrade gracefully.
   - `templates/index.html` — inject `window.APP_ROOT = {{ root_path | tojson }}` and
     load `{{ root_path }}/static/...` assets; include a `← Back to portfolio` link to `/#projects`.
   - `static/app.js` — `const ROOT = window.APP_ROOT || ""`; fetch `ROOT + "/endpoint"`.
   - `static/style.css` — use the **Airbnb light theme** (white `#ffffff`, text `#222222`,
     coral accent `#ff385c`) so it matches the other apps. (Exception: Learn-AI uses its own
     Duolingo theme.) Keep the primary container `max-width` generous (~1120–1200px).

2. **Mount it** — in `api/index.py`: add `from app.<name>.main import app as <name>_app`
   and a `"<prefix>": <name>_app` entry in `_MOUNTS`.

3. **Route it** — in `vercel.json` add two rewrites **above** the SPA catch-all:
   `{ "source": "/<prefix>", "destination": "/api/index" }` and
   `{ "source": "/<prefix>/(.*)", "destination": "/api/index" }`.

4. **Add the card** — in `src/App.tsx`: add a `const <NAME>_URL = "/<prefix>"` and a
   `projects[]` entry `{ title, description, tags, live: <NAME>_URL }` (add `repo`/`repoLabel`
   for a source link). Cards with only `live` become whole-card launch anchors.

5. **Document it** — write `docs/prd-<name>.md` (see any existing PRD for the section
   layout) and a skill doc `app/shared/skills/projects/<name>.md` (frontmatter
   `name`/`description`, when-to-use, inputs, how it works, live link). Add both to
   `app/shared/skills/projects/README.md`.

6. **Env (if needed)** — reuse OpenRouter via `app/llm.py`; the `OPENROUTER_MODELS`
   hierarchy is already set on Vercel (free-first, then cheapest ≤ $0.10/1M). Add new
   secrets in the Vercel dashboard (Settings → Environment Variables) + redeploy.

7. **Verify** — `npm run typecheck && npm run lint && npm run build`; import-check the
   mount with the `api/index.py` module under `VERCEL=1`; run the app locally via the
   `pyapp` launch config; then deploy (`vercel deploy --prod`) and hit the live endpoints.

## Credit external sources
If the project is adapted from someone else's repo, credit them in the app footer,
the PRD header, and the skill doc's `source`.

## Gotchas
- Python is pinned to **3.12** on Vercel (`vercel.json` build env) — don't rely on newer.
- Serverless is **stateless**: persist client state in `localStorage`, not on the server.
- Anything needing a mic/camera/ffmpeg must run **client-side** (or be linked to a repo).
- Free OpenRouter models 429 intermittently; the model hierarchy + fallback handles it.
