# Next steps

Backlog of follow-ups for [rashmi-mahadevaiah.vercel.app](https://rashmi-mahadevaiah.vercel.app).
All 7 apps are live; these are enhancements and loose ends.

## Finish the last functional gap

- [ ] **Make Veo video generation real (Project 6 / `/gtm-videos`).** Wiring is done
      but blocked on **Google billing** (Veo is paid, ~$1–6/clip). Enable billing on
      the Gemini project, then verify a real clip.
  - Alternative: wire the **near-free fal.ai** path (e.g. LTX-Video, ~cents/clip).

## Operationalize (so it runs itself)

- [ ] **GitHub → Vercel auto-deploy.** Connect the repo in Vercel so every `git push`
      deploys automatically; then the manual CLI deploy token can be deleted.
- [ ] **Key hygiene.** Rotate any keys shared during setup (OpenRouter, Gemini,
      PostHog) and pick a default `LLM_PROVIDER` (e.g. `gemini` — free tier, key
      already set).

## Polish & grow

- [ ] **Analytics beyond Learn-AI.** Add PostHog to the other apps to see which
      projects visitors open/use.
- [ ] **Custom domain.** Point e.g. `rashmimahadevaiah.com` at the Vercel site.
- [ ] **Repo cleanup.** Remove the leftover blog code/routes from the original
      portfolio that are no longer used.
- [ ] **Weekly automation for the Funded/Job Agent.** Scheduled run that emails the
      week's funded-startup matches.
- [ ] **Mobile + accessibility QA** across all 7 apps, plus a `/code-review` pass.
