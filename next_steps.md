# Next steps

Backlog of follow-ups for [rashmi-mahadevaiah.vercel.app](https://rashmi-mahadevaiah.vercel.app).
All 7 apps are live; these are enhancements and loose ends.

## Requested

- [ ] **Rebuild Project 7 by forking the OpenClaw GitHub repo** and ship your own
      Product Manager AI Agent.
  - Current state: Project 7 (PM AI Agent) was shipped **natively** at
    `/pm-agent` (a conversational PM co-pilot over the multi-provider LLM layer),
    not from a fork — chosen to keep the clean single-site architecture.
  - To do this: identify/confirm the exact **OpenClaw** repo, fork it under
    `mahadevaiahrashmi`, adapt it into a Product Manager agent, and either deploy
    it standalone or embed it in this site (replacing or complementing `/pm-agent`).
  - Note: confirm the repo URL first — "OpenClaw" wasn't verified as a known repo,
    so we need the exact link before forking.

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
