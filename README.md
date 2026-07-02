# mahadevaiahrashmi.github.io

Personal portfolio website for **Rashmi Mahadevaiah** — AI/ML Engineer & Product Leader — with **seven embedded AI apps** you can launch from the Projects section.

**Live:** https://rashmi-mahadevaiah.vercel.app/

**Embedded apps:** Product Discovery guide (`/product-discovery`), Personal Voice Skill (`/personal-voice`), Resume Tailor (`/resume-tailor`), Funded Companies / job agent (`/funded-companies`), Duolingo-style AI learning (`/learn-ai`), GTM with AI video (`/gtm-videos`), and a PM AI Agent (`/pm-agent`). See [`docs/`](docs/) for a PRD per app.

> ▶️ **Run the whole thing locally:** see **[docs/running-locally.md](docs/running-locally.md)** — setup, env keys, and the one-command `vercel dev` flow.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS v4 (Anthropic-inspired theme)
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Hosting:** GitHub Pages (deployed via GitHub Actions)

## Run locally

**Full site (portfolio + all 7 embedded apps), exactly like production** — see the
complete guide: **[docs/running-locally.md](docs/running-locally.md)**.

Quick start for just the portfolio front end:

```bash
npm install
npm run dev        # http://localhost:5173
```

To run the embedded apps too (they're a Python function), the guide covers the
one-command `vercel dev` flow and the manual two-server setup, plus the `.env`
keys each app uses (`cp .env.example .env`).

## Build for Production

```bash
npm run build
```

Output is written to `dist/`. This is what gets deployed to GitHub Pages.

## Deploy

Deployment is automatic — push to `main` and GitHub Actions builds and deploys to GitHub Pages.

SPA deep links are GitHub Pages-safe via a `404.html` redirect bootstrap:
- `public/404.html` captures unknown paths and redirects to `/?redirect=<original-path>`
- `index.html` restores the original path using `history.replaceState` before React bootstraps

This keeps `BrowserRouter` URLs working for direct opens/refreshes such as `/blog` and `/blog/<slug>`.

To manually verify the build before pushing:

```bash
npm run build
npm run preview
```

## Project Structure

```
├── index.html          # Entry point (includes JSON-LD structured data)
├── src/
│   ├── App.tsx         # Main app component (all sections)
│   ├── main.tsx        # React entry point
│   └── index.css       # Global styles + Tailwind config
├── public/
│   └── resume.pdf      # Downloadable resume
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Sections

- **Hero** — Professional summary with ATS-optimized keywords
- **Experience** — Timeline with quantified impact metrics and linked company websites
- **Education** — IIT Madras, B.Tech Electrical Engineering
- **Technical Skills** — Categorized: AI/ML, Languages & Tools, Domain & Strategy
- **Interests** — Yoga, Running, Meditation, Trekking
- **Contact** — Email, LinkedIn, GitHub, Twitter, Instagram

## Branches

- **`main`** — Active working branch (deployed to GitHub Pages)
- **`v1`** — Backup of the original website before enhancements
