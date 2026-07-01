# PRD — Resume Tailor (JD-to-Resume Customizer)

| | |
|---|---|
| **Product** | Resume Tailor (JD-to-Resume Customizer) |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/resume-tailor` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

Paste a **job description** and your **current resume**; get back a tailored **one-page resume** and a matching **cover letter**, downloadable as both **Word (.docx)** and **PDF** — four files. The tool re-emphasises the real experience that matches the role and is explicitly instructed to **never invent** employers, dates, degrees, metrics, or skills. It guarantees a single A4 page by auto-shrinking typography until both documents fit, and it renders the Word file at the same scale so the two formats look identical. You see a live preview of both documents before downloading.

## 2. Problem & background

Tailoring a resume to each job is the highest-return, most-skipped step in a job search. Doing it by hand is tedious: you re-read the JD, hunt for the matching bullets, rewrite them, keep it to one page, and then repeat the whole thing for the cover letter — for every application. Generic AI resume tools help with wording but frequently **hallucinate** — adding jobs, inflating metrics, or inventing skills — which is worse than useless when a recruiter checks.

There's a gap for a tool that (a) tailors honestly by re-emphasising *real* experience against a specific JD, (b) produces polished, one-page, download-ready files in the formats employers actually accept, and (c) does it without asking the user to trust that the model didn't make things up.

## 3. Goals & non-goals

**Goals**
- Produce a tailored one-page resume **and** matching cover letter from a JD + existing resume.
- Deliver four ready-to-use downloads: resume `.docx`, resume `.pdf`, cover `.docx`, cover `.pdf`.
- **Never fabricate** employers, dates, degrees, metrics, or skills — only re-emphasise real content.
- Guarantee a single A4 page for the resume and matched scale for the Word file.
- Keep the page usable even without an LLM key (offline mock layout preview).
- Show a live preview before the user commits to downloading.

**Non-goals (v1)**
- Not an ATS-scoring or keyword-density optimizer.
- No accounts, saved resume libraries, or server-side storage.
- Not a multi-page or portfolio-style resume builder (one page is the point).
- No model/engine picker — the server forces the engine (deliberately removed).

## 4. Target users

| Persona | Need |
|---|---|
| **Active job seeker** | Tailor honestly and fast for each application, in employer-ready formats. |
| **Career switcher** | Re-frame existing experience toward a new role without inventing anything. |
| **New grad** | Produce a clean, one-page resume + cover letter without fighting formatting. |
| **Recruiter / hiring manager (secondary)** | Evaluate the author's applied product + AI craft via the portfolio. |

## 5. User stories

- As a job seeker, I can **paste a JD and my resume** and get a tailored resume + cover letter.
- As a job seeker, I can **download** each document as **Word and PDF** (four files).
- As a job seeker, I can trust the output **won't invent** jobs, dates, degrees, metrics, or skills.
- As a job seeker, I can **preview** both documents before downloading.
- As a job seeker, I get a **one-page** resume automatically, without hand-tuning font sizes.
- As a user without an API key configured, I still get a **usable layout preview** (offline mock).
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Inputs.** Two textareas: job description and current resume.
- **FR2 — Tailored generation.** Produce a tailored resume and a matching cover letter emphasising the experience most relevant to the JD.
- **FR3 — No fabrication.** The system prompt forbids inventing employers, dates, degrees, metrics, or skills; it may only re-order, re-frame, and re-emphasise real content.
- **FR4 — Four downloads.** Resume and cover letter each as `.docx` (python-docx) and `.pdf` (reportlab).
- **FR5 — One-page guarantee.** The PDF renderer auto-shrinks typography until the resume fits a single A4 page; the Word file is rendered at the **same scale** so both formats match.
- **FR6 — Live preview.** Render an on-page preview of both the resume and cover letter before download.
- **FR7 — Forced engine.** No user-facing model/engine picker (removed). The server selects the engine: OpenRouter free model when a key is present, else an offline **Mock** layout preview so the page still works.
- **FR8 — Stateless downloads.** On serverless, downloads are returned as **inline base64 `data:` URLs** so a later download request doesn't depend on a different, stateless instance holding the file.
- **FR9 — Navigation out.** A visible "← Back to portfolio" link.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/resume-tailor
        │
   [Job description] + [Your resume] ──► Tailor
        │
        ▼
   server forces engine (OpenRouter free model, else Mock)
        │
        ▼
   Live preview:  [ Resume ]   [ Cover letter ]
        │
        ▼
   auto-shrink to fit one A4 page (PDF) ; Word rendered at same scale
        │
        ▼
   Downloads (inline base64 data: URLs):
     resume.docx  resume.pdf  cover.docx  cover.pdf
```

- Single responsive page, dark theme consistent with the portfolio (warm accent).
- Two large input areas up top; a prominent "Tailor" action.
- Preview panels for resume and cover letter; download buttons grouped beneath each.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered HTML template; prefix-aware URLs via an injected `APP_ROOT` so it works mounted under a subpath. No user data persisted (any state is browser-local).
- **Backend:** FastAPI sub-app mounted at `/resume-tailor` on the site's single Vercel Python function; static + Jinja2 template from the same package.
- **LLM:** OpenRouter, with the **engine forced server-side** — an OpenRouter free model when a key is present; otherwise an offline **Mock** layout so the page degrades gracefully. The former engine/model picker was intentionally removed.
- **Rendering:** `reportlab` for PDF, `python-docx` for Word. The PDF path iteratively shrinks typography until the resume fits one A4 page; the Word renderer uses the same computed scale so the two formats match.
- **Downloads on serverless:** files are returned as **inline base64 `data:` URLs** in the response, so a follow-up download never hits a different, stateless function instance that lacks the generated file.
- **Routing:** `vercel.json` rewrites `/resume-tailor` and `/resume-tailor/*` to the function; the portfolio SPA is the fallback.
- **State:** none server-side; no user data stored.
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** JD and resume are sent to the model only to produce the tailored documents; **not stored** server-side.
- **Reliability:** never hard-fail — with no key, the offline Mock layout keeps the page functional; downloads are self-contained data URLs.
- **Performance:** static-fast page; generation targets a few seconds; document rendering is local to the function.
- **Cost:** free OpenRouter model keeps per-tailor cost at $0; Mock path costs nothing.
- **Accessibility:** semantic headings, keyboard-usable controls, sufficient contrast; downloadable formats support assistive review. *(Formal a11y audit is a v1.1 item.)*
- **Responsive:** works on mobile — inputs stack; previews scroll.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Tailor completion rate** | Do users get to output? | ≥ 70% of sessions generate documents |
| **Downloads per session** | Is the output used? | ≥ 2 files downloaded median |
| **Word vs PDF split** | Which format matters | tracked to inform defaults |
| **Mock fallback rate** | How often key is missing | monitor to justify a live key |
| **Portfolio → tailor click-through** | Draw as a portfolio piece | tracked at the card |

> **Note:** This app ships **without analytics instrumentation** — these targets are aspirational. Across the portfolio, only **Learn-AI** has telemetry (PostHog); this app has no event tracking. Called out honestly rather than implied.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Model hallucinates jobs/metrics | Strong no-fabrication system prompt; re-emphasis only, never invention. |
| No API key configured | Offline Mock layout keeps the page working. |
| Resume overflows one page | PDF auto-shrink loop; Word rendered at the same scale to match. |
| Serverless statelessness breaks downloads | Inline base64 `data:` URLs are self-contained per response. |
| Privacy concern over resume content | Not stored server-side; sent only to produce documents; stated in this PRD. |

## 12. Roadmap

- **v1.1:** analytics (completion + download funnel), accessibility audit, editable preview before render.
- **v1.2:** optional ATS keyword-coverage check (read-only, no fabrication); tone presets for the cover letter.
- **v2:** optional accounts to save a base resume; per-application history.

## 13. Open questions

1. Should the preview be directly editable, or is regenerate-from-inputs sufficient for v1?
2. Do users want an optional two-page mode for senior profiles, or is one page a firm constraint?
3. Which privacy-friendly analytics tool fits the no-accounts, no-storage stance?
