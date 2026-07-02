# PRD — Narrated Explainer Video Bot

| | |
|---|---|
| **Product** | Narrated Explainer Video Bot |
| **Surface** | Embedded app at `rashmi-mahadevaiah.vercel.app/explainer-bot` + repo `github.com/mahadevaiahrashmi/explainer-bot` |
| **Author** | Rashmi Mahadevaiah |
| **Status** | v1.0 — Shipped (authoring studio); full local pipeline in repo |
| **Last updated** | 2026-07-02 |

---

## 1. Summary

A studio that turns rough bullet points into a **3Blue1Brown-style explainer video** narrated in your own voice. The embedded web app does the parts a browser can: it picks a consistent **visual aesthetic**, writes a **script broken into slide segments**, **critiques** that script against understandability / analogies / wonder, and designs a self-contained **HTML slide per segment** — each previewed live and downloadable. The final steps — **recording narration** and **assembling the MP4** — need a microphone and ffmpeg, so they live in the companion repo's local pipeline (web + terminal UI, running on a Claude Code subscription, a local Ollama model, or any LLM provider).

## 2. Problem & background

Good explainer videos (the 3Blue1Brown feel) are scarce because they demand three separate crafts: a clear, wondery **script**; clean **visual slides**; and **narration**. Doing all three by hand is slow, and generic AI tools give you a wall of text, not a slide-by-slide plan you can actually film. There's a gap for a tool that produces the *authoring layer* — script + matched slides — in a form ready to record over, while keeping the private, machine-bound steps (voice, video encoding) local.

## 3. Goals & non-goals

**Goals**
- Turn rough points into a **segmented, spoken-style script** aimed at a first-year CS undergrad.
- Enforce quality via a **self-critique** (understandability, analogies, wonder).
- Pick a **consistent aesthetic** and design **one self-contained HTML slide per segment**.
- Preview slides live and let the user **download** slides + `script.txt`.
- Keep the browser app **serverless-friendly** (no video/audio work server-side).

**Non-goals (v1, embedded app)**
- No in-browser voice recording or MP4 assembly (that's the local repo pipeline).
- No account or server-side storage of scripts/slides.
- Not a general video editor — it's an explainer-authoring studio.

## 4. Target users

| Persona | Need |
|---|---|
| **Educator / creator** | Fast path from an idea to a filmable slide-by-slide explainer. |
| **Student / self-learner** | Turn notes into a narrated explainer to learn by teaching. |
| **Developer advocate** | Explain a concept as short-form video without a design team. |
| **Recruiter / hiring manager (secondary)** | See the author's applied generative-AI craft. |

## 5. User stories

- As a user, I enter a **topic + rough points** and get a **segmented script** back.
- As a user, I see a **critique** (scores + concrete notes) so I can trust or revise the script.
- As a user, I get a **consistent aesthetic** and **one HTML slide per segment**, previewed live.
- As a user, I can **download** each slide's HTML and a combined `script.txt`.
- As a user, I can **redesign** a single slide I don't like.
- As a user, I understand the **voice + MP4** steps happen locally, with a link to the repo.
- As a visitor, I can **get back to the portfolio** with one click.

## 6. Functional requirements

- **FR1 — Script generation.** `POST /script`: from topic + rough points, return a JSON aesthetic, a 4–8 segment script (`title`, `key_visual`, `narration`), and a critique (`scores`, `verdict`, `notes`).
- **FR2 — Slide generation.** `POST /slide`: from topic + aesthetic + one segment, return a single self-contained 1920×1080 HTML slide (no external assets, no on-screen narration).
- **FR3 — Two-call split.** Script and each slide are separate requests so no single call exceeds the serverless time limit; slides are fetched a couple at a time.
- **FR4 — Live preview.** Each slide renders in a scaled iframe inside the page.
- **FR5 — Narration playback aid.** Each segment shows its narration to read aloud, with copy.
- **FR6 — Downloads.** Per-slide HTML download and a combined `script.txt`.
- **FR7 — Redesign.** Re-request any single slide on demand.
- **FR8 — Robust parsing.** Tolerant JSON extraction and HTML-fence stripping around model output.
- **FR9 — Graceful degradation.** Clear message if the model is unavailable; sane default aesthetic if the picker fails.
- **FR10 — Navigation out.** A visible "← Back to portfolio" link and a link to the repo for the local pipeline.

## 7. UX & flow

```
Portfolio card ("Launch")
        │
        ▼
/explainer-bot  ──  topic + rough points ──► POST /script
                                                  │
                          aesthetic + segmented script + critique
                                                  │
                             per segment: POST /slide (2 at a time)
                                                  ▼
     live slide previews (scaled iframes) · narration to read · downloads
                                                  │
                    record voice + assemble MP4  →  local (repo)
```

- Single responsive page, dark theme with a warm accent, consistent with the portfolio.
- Aesthetic swatches + critique scores up top; a grid of slide cards below.

## 8. Technical design

- **Frontend:** vanilla JS + CSS, server-rendered template; slides shown in sandboxed iframes scaled from 1920×1080 via container-query units; downloads via Blob URLs. Prefix-aware URLs via injected `APP_ROOT`.
- **Backend:** FastAPI sub-app mounted at `/explainer-bot` on the site's single Vercel Python function. Two endpoints (`/script`, `/slide`).
- **LLM:** the shared multi-provider router (`app/llm.py`) — **works with OpenRouter** (current default), OpenAI, Anthropic, or Gemini, with cross-provider fallback. Prompts adapted from the explainer-bot repo (MIT).
- **Routing:** `vercel.json` rewrites `/explainer-bot` and `/explainer-bot/*` to the function; SPA fallback otherwise.
- **State:** none server-side; scripts/slides live only in the browser.
- **Local pipeline (repo):** voice recording + ffmpeg MP4 assembly, web + terminal UI, backend auto-detect (claude_cli / ollama / llm).
- **Runtime:** Python pinned to 3.12 on Vercel.

## 9. Non-functional requirements

- **Privacy:** no server-side storage; generated content lives in the browser.
- **Reliability:** two-call design stays within serverless limits; provider fallback; tolerant parsing.
- **Performance:** slides stream in a couple at a time so the page fills progressively.
- **Cost:** a few fractions of a cent per script + per slide on paid models; free fallback models cost $0.
- **Accessibility:** semantic structure, keyboard-usable controls, readable narration text. *(Formal audit is a v1.1 item.)*
- **Responsive:** slide grid collapses to one column on mobile.

## 10. Success metrics

| Metric | Why | Target (initial) |
|---|---|---|
| **Sessions that generate a script** | Core activation | ≥ 60% of sessions |
| **Slides generated per session** | Depth of use | ≥ 4 median |
| **Downloads (slide or script)** | Real intent to produce a video | tracked qualitatively |
| **Repo click-through** | Hand-off to the full pipeline | tracked at the link |

> **Note:** ships **without analytics instrumentation**; targets are aspirational. Only **Learn-AI** has telemetry (PostHog) across the portfolio.

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Slides overlap / run off frame | Detailed layout rules + self-check in the slide prompt; per-slide redesign. |
| Model returns non-JSON / fenced HTML | Tolerant JSON extraction + HTML-fence stripping. |
| A slow model exceeds serverless time | Script and each slide are separate calls; slides fetched 2 at a time. |
| User expects a finished MP4 in-browser | Clear messaging that voice + assembly are local, with a repo link. |
| Model unavailable / key invalid | Multi-provider fallback; graceful message. |

## 12. Roadmap

- **v1.1:** analytics, accessibility audit, "download all slides" as a zip, aesthetic override.
- **v1.2:** in-browser narration recording (Web Audio) + a client-side cue video.
- **v2:** optional server-side render of slide PNGs; one-click export bundle for the local pipeline.

## 13. Open questions

1. Is in-browser narration recording worth adding, or should voice stay local?
2. Should the aesthetic be user-selectable up front, or is auto-pick the right default?
3. What's the best "export bundle" format to hand off to the local ffmpeg pipeline?
