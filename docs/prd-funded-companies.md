# PRD — Funded Companies Agent (Job-Hunting Mode)

| | |
|---|---|
| **Product** | Funded Companies Agent (job-hunting mode) |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/funded-companies` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

A weekly agent that **scrapes the live web for startups that raised funding in the last ~7 days** and, for each one, proposes your **"way in"** — a tailored path to land a job there. You give it your background (resume/skills) and optional preferences (role type, location, sectors, stage). It returns a set of company cards: what the company does, the funding round/amount/date, investors, a **target role to apply for**, why *you* fit (mapped to your real experience), **who to contact**, a tailored outreach pitch, application steps, and a source URL. Results are **grounded in live web search** (OpenRouter's web-search plugin) so they're real and sourced — and the agent clearly flags when a result is **not** from live search, plus a "verify before applying" disclaimer.

## 2. Problem & background

The best time to apply to a startup is right after it raises — headcount is about to expand, urgency is high, and there's fresh budget. But finding those companies means trawling funding newsletters and news sites, then separately figuring out *which role fits you*, *who to contact*, and *what to say*. That's hours of manual work every week, and the moment passes fast.

Generic "AI job assistants" tend to hallucinate companies, roles, and contacts — which wastes the applicant's credibility. There's a gap for an agent that (a) pulls **real, recently-funded** companies from **live search**, (b) maps each to the applicant's **actual** experience, and (c) hands over a concrete, sourced "way in" — while being explicit about what is and isn't verified.

## 3. Goals & non-goals

**Goals**
- Surface startups that raised in the last ~7 days, from **live, sourced** web search.
- For each, propose a **target role** and a **why-you-fit** grounded in the user's real background.
- Provide a concrete way in: who to contact, a tailored pitch, and application steps.
- Never invent companies or fundings — only include what appears in search results.
- Be transparent: flag non-live results; carry a "verify before applying" disclaimer.

**Non-goals (v1)**
- Not an auto-applier — it proposes the path; the human applies.
- No accounts or server-side storage (background persists in the browser only).
- Not a full CRM or applicant tracker.
- Not a guarantee of accuracy — sourcing + disclaimers, not a verified database.

## 4. Target users

| Persona | Need |
|---|---|
| **Active job seeker (startups)** | A weekly, sourced list of freshly-funded companies with a way in. |
| **Career switcher** | Roles mapped to their real, transferable experience — not generic listings. |
| **Founder-adjacent operator** | Early-stage companies to reach before roles are even posted. |
| **Recruiter / hiring manager (secondary)** | Evaluate the author's applied product + AI craft via the portfolio. |

## 5. User stories

- As a job seeker, I can **enter my background** (pre-filled with the owner's profile) and have it **remembered** on my device.
- As a job seeker, I can **set preferences** (role type, location, sectors, stage).
- As a job seeker, I can **run the agent** and get cards for **recently-funded** companies.
- As a job seeker, I can see each company's **round, amount, date, investors, and source URL**.
- As a job seeker, I can see a **target role**, **why I fit** (mapped to my experience), **who to contact**, a **tailored pitch**, and **application steps**.
- As a job seeker, I can tell when results are **not from live search**, and I'm reminded to **verify before applying**.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Background input.** A "Your background" field (resume/skills), pre-filled with the owner's profile and persisted in `localStorage`.
- **FR2 — Preferences.** Optional "Preferences" for role type, location, sectors, and stage.
- **FR3 — Live grounded search.** Use OpenRouter's **web-search plugin** to retrieve startups that raised funding in the last ~7 days; results must be real and sourced.
- **FR4 — Company cards.** Each result renders: company name, one-line description, funding round/amount/date, investors, **target role**, **why-you-fit** (mapped to the user's real experience), who to contact, a tailored outreach pitch, application steps, and a **source URL**.
- **FR5 — No invention.** Only include companies present in the search results; never fabricate companies, fundings, or contacts.
- **FR6 — Grounding transparency.** Clearly **flag when results are NOT from live search**.
- **FR7 — Verify disclaimer.** Carry a persistent "verify before applying" disclaimer.
- **FR8 — Navigation out.** A visible "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/funded-companies
        │
   [Your background] (pre-filled, saved) + [Preferences?]
        │
        ▼
   Run agent ──► OpenRouter web-search plugin (live)
        │
        ├── live results? ──► sourced company cards
        │                       (round, amount, date, investors,
        │                        role, why-you-fit, contact,
        │                        pitch, steps, source URL)
        │
        └── not live ─────────► results flagged "not from live search"
        │
        ▼
   "Verify before applying" disclaimer (always shown)
```

- Single responsive page, dark theme consistent with the portfolio (warm accent).
- Cards are the focal element; each is self-contained and links to its source.
- Grounding state is unmistakable — a badge/flag when results aren't live.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered HTML template; background/preferences persist in `localStorage`. Prefix-aware URLs via an injected `APP_ROOT` so it works mounted under a subpath.
- **Backend:** FastAPI sub-app mounted at `/funded-companies` on the site's single Vercel Python function; static + Jinja2 template from the same package.
- **LLM + grounding:** OpenRouter with the **web-search plugin** for live, sourced retrieval; `deepseek/deepseek-chat` primary with free-model fallback. The prompt constrains output to companies present in the search results and requires per-card source URLs. When live search isn't available, results are explicitly flagged as not-live.
- **Safety framing:** system prompt forbids inventing companies, fundings, or contacts; a "verify before applying" disclaimer is always rendered.
- **Routing:** `vercel.json` rewrites `/funded-companies` and `/funded-companies/*` to the function; the portfolio SPA is the fallback.
- **State:** none server-side; background/preferences live only in the browser.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** background/preferences persist **on-device**; sent to the model only to run the search and map fit; **not stored** server-side.
- **Reliability:** degrades gracefully — flags non-live results rather than presenting hallucinations as fact.
- **Performance:** static-fast page; live search adds latency (a few seconds to tens of seconds depending on the plugin).
- **Cost:** OpenRouter web-search + generation cost per run; free-model fallback where possible.
- **Accessibility:** semantic headings, keyboard-usable controls, sufficient contrast; source links clearly labeled. *(Formal a11y audit is a v1.1 item.)*
- **Responsive:** works on mobile — cards stack; inputs collapse.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Runs per week** | Is the weekly cadence sticky? | ≥ 1 run/week for return users |
| **Cards per run** | Enough leads to act on | ≥ 5 sourced companies median |
| **Live-search rate** | Grounding quality | ≥ 80% of runs from live search |
| **Source-link click-through** | Are results trusted/verified | measurable via link clicks |
| **Portfolio → agent click-through** | Draw as a portfolio piece | tracked at the card |

> **Note:** This app ships **without analytics instrumentation** — these targets are aspirational. Across the portfolio, only **Learn-AI** has telemetry (PostHog); this app has no event tracking. Called out honestly rather than implied.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Model hallucinates companies/contacts | Web-search grounding; only include companies in results; no-invention prompt. |
| Stale or non-live results | Explicit "not from live search" flag when grounding fails. |
| Inaccurate funding details | Per-card source URL + a persistent "verify before applying" disclaimer. |
| Contact suggestions may be wrong/outdated | Framed as leads to verify, not confirmed contacts. |
| Privacy concern over background | On-device storage; not stored server-side; stated in this PRD. |

## 12. Roadmap

- **v1.1:** analytics (runs, cards, source click-through), accessibility audit, saved multiple profiles.
- **v1.2:** scheduled weekly digest; filters by round size and investor.
- **v2:** optional accounts to track applications; outreach draft export to Personal Voice.

## 13. Open questions

1. Should the agent de-duplicate companies across weekly runs so users don't see repeats?
2. How aggressively should it verify contacts vs. simply flag them as "to verify"?
3. Which privacy-friendly analytics tool fits the on-device, no-accounts stance?
