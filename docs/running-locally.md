# Running rashmi-mahadevaiah.vercel.app locally

This is a **portfolio site** (`/`) with **seven embedded apps** under path prefixes.
In production it's **one Vercel deployment**: a static Vite/React front end plus a
single Python (FastAPI) serverless function that serves every app.

| Path | App | Needs |
|------|-----|-------|
| `/` | Portfolio (React/Vite) | — |
| `/product-discovery` | Product Discovery guide | OpenRouter (coach) |
| `/personal-voice` | Personal Voice Skill | OpenRouter |
| `/resume-tailor` | Resume Tailor | OpenRouter (else offline Mock) |
| `/funded-companies` | Funded Companies / job agent | OpenRouter (+ web plugin) |
| `/learn-ai` | Duolingo-style AI learning | **nothing** (curated, client-side); PostHog optional |
| `/gtm-videos` | GTM with AI video | OpenRouter; Google Veo optional |
| `/pm-agent` | PM AI Agent | OpenRouter |

> **You don't need any keys to boot the site.** Every AI app degrades gracefully
> without its key, and Learn-AI works fully offline. Add keys only for the AI you
> want to actually run.

---

## Prerequisites

- **Node.js 18+** (for the Vite front end)
- **Python 3.12** (the serverless function pins 3.12 — `pydantic-core` has no
  wheels for newer Pythons yet, so 3.13/3.14 will try to compile and fail)
- **git**
- *(Recommended)* the **Vercel CLI** — `npm i -g vercel` — for a one-command,
  production-identical local run

---

## 1. Get the code & install

```bash
git clone https://github.com/mahadevaiahrashmi/rashmi-mahadevaiah.git
cd rashmi-mahadevaiah

# Front end (Vite/React)
npm install

# Python apps (create a 3.12 virtualenv)
python3.12 -m venv .venv
./.venv/bin/pip install -r requirements.txt
```

## 2. Add your keys (optional)

```bash
cp .env.example .env
# open .env and fill in what you want — all keys are optional:
#   OPENROUTER_API_KEY   -> the AI apps (get one at openrouter.ai/keys)
#   GEMINI_API_KEY       -> real Veo video in /gtm-videos (billing-enabled)
#   VEO_PASSCODE         -> gate the paid Veo button
#   POSTHOG_KEY          -> analytics for /learn-ai
```

`.env` is gitignored and never committed. The Python function auto-loads it via
`python-dotenv` (see `api/index.py`).

---

## 3. Run it

### Option A — `vercel dev` (recommended: the whole site, exactly like production)

This runs the Vite front end **and** the Python function behind the same routing
as production, so every `/app` path works from one URL.

```bash
vercel dev
# first run: it asks to link a project — accept the defaults (or link to your
# Vercel project to pull its env vars automatically)
# then open the printed URL, e.g. http://localhost:3000
```

- Uses the keys from your `.env` (or, if you linked a Vercel project, run
  `vercel env pull .env` to fetch the ones already set there).
- Clicking a project card on the portfolio opens the embedded app for real.

### Option B — two servers (no Vercel CLI)

Handy when you're focused on one app. You run the front end and the Python apps
separately, on different ports.

**Terminal 1 — the Python apps** (serves every `/app` path):

```bash
# load .env into this shell, then start the FastAPI function with uvicorn
set -a && source .env && set +a          # optional: only if you set keys
./.venv/bin/python -m uvicorn api.index:app --reload --port 8000
```

Now the apps are at, e.g. `http://localhost:8000/resume-tailor`,
`http://localhost:8000/learn-ai`, `http://localhost:8000/pm-agent`, etc.
(`http://localhost:8000/` itself is empty — that path is the portfolio, which is
served by Vite below.)

**Terminal 2 — the portfolio front end:**

```bash
npm run dev        # http://localhost:5173
```

> **Caveat:** in Option B the two halves are on different ports, so a project
> card on the Vite site (`localhost:5173`) links to `/resume-tailor` on **5173**,
> not 8000. For the full click-through experience use **Option A**. Option B is
> for iterating on a single app directly at its `:8000/...` URL.

---

## Build / test / lint

```bash
npm run build       # production front-end build -> dist/
npm run typecheck   # TypeScript
npm run lint        # ESLint
./.venv/bin/python -m pytest        # (if/when Python tests are added)
```

---

## Environment variables reference

| Variable | Used by | Required? | Where to get it |
|----------|---------|-----------|-----------------|
| `OPENROUTER_API_KEY` | Resume Tailor, Personal Voice, Funded Agent, GTM plan, PM Agent | Optional (apps degrade without it) | [openrouter.ai/keys](https://openrouter.ai/keys) |
| `OPENROUTER_MODELS` | ↑ same | Optional | comma-separated model order; default `deepseek/deepseek-chat,…:free` |
| `GEMINI_API_KEY` | `/gtm-videos` Veo generation | Optional (paid; billing required) | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| `GEMINI_VEO_MODEL` | `/gtm-videos` | Optional | default `veo-3.1-fast-generate-preview` |
| `VEO_PASSCODE` | `/gtm-videos` | Optional | any string; gates the paid button |
| `POSTHOG_KEY` | `/learn-ai` analytics | Optional | PostHog → Settings → Project API Key |
| `POSTHOG_HOST` | `/learn-ai` analytics | Optional | `https://us.i.posthog.com` (US) or `…eu…` |

On **Vercel**, set these in **Project → Settings → Environment Variables** (not via
`.env`), then redeploy for changes to take effect.

---

## Troubleshooting

- **`pip install` fails building `pydantic-core` / `maturin`** → you're not on
  Python 3.12. Recreate the venv with `python3.12 -m venv .venv`.
- **An AI app says "unavailable" / falls back to Mock** → its key isn't set (or,
  for OpenRouter free models, they're rate-limited). Add the key to `.env` and
  restart the Python server (Option B) or `vercel dev` (Option A).
- **Veo returns `429 … quota / billing`** → the Gemini key's Google Cloud project
  needs **billing enabled** (Veo is paid).
- **Port already in use** → change `--port 8000` (Option B) or free the port.
