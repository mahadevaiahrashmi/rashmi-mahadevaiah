# Executive Summary

## Purpose
Generate a crisp, one-page executive update using BLUF (Bottom Line Up Front) format. Designed for time-starved executives who need to quickly grasp status, make decisions, or take action. Leads with what matters most and uses the Pyramid Principle to structure supporting detail.

## Auto-Trigger Patterns
- "Write an exec summary" / "executive update"
- "Summarize this for [exec name]" / "leadership update"
- "Give me the BLUF" / "one-pager for the exec team"
- "Status update for [VP/SVP/C-level]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Initiative or topic to summarize, current status data, key metrics
- **Optional:** Recipient exec persona from `context/people/`, recent decisions or blockers, prior exec summary for continuity
- **Reference:** `context/people/` for exec communication preferences, `context/initiatives/` for initiative detail

## Process
1. **Identify the recipient** — Load exec persona from `context/people/` to adapt tone, detail level, and framing priorities.
2. **Determine the BLUF** — What does this exec need to decide, know, or do? Lead with that single statement.
3. **Assign status** — Green (on track), Yellow (at risk with mitigation), Red (off track, needs help). Be honest.
4. **Select key metrics** — 3-5 metrics that tell the story. Show trend (↑↓→) and context.
5. **Curate wins** — 2-3 highlights that demonstrate progress. Quantify impact where possible.
6. **Surface risks** — Risks with severity, likelihood, mitigation status. No surprises.
7. **Frame asks** — Specific, actionable requests with deadlines. Make it easy to say yes.
8. **Apply Pyramid Principle** — Lead with conclusion, support with grouped arguments, detail only as needed.
9. **Edit ruthlessly** — Cut anything that doesn't serve the BLUF. Target under 1 page.

## Output Format
```
## Executive Summary: [Initiative/Topic]
**Date:** [Date] | **Status:** 🟢/🟡/🔴 | **Owner:** [Name]

### Bottom Line
[One-sentence BLUF: what happened, what it means, what's needed]

### Key Metrics
| Metric | Current | Target | Trend |
|--------|---------|--------|-------|
| ...    | ...     | ...    | ↑/↓/→ |

### Wins
- [Win 1 with quantified impact]
- [Win 2 with quantified impact]

### Risks & Mitigations
- **[Risk]** — [Severity] — [Mitigation status]

### Asks
- [ ] [Specific ask with deadline and decider]
```

## Quality Standards
- BLUF is a single sentence that stands alone — an exec reading only that line gets the message.
- Status color is honest, not optimistic. Yellow is not "almost green."
- Metrics include trend direction and context, not just numbers.
- Asks are specific and actionable — not "we need support" but "approve $X by Friday."
- **Anti-patterns:** Burying the lead, status color inflation, vague asks, walls of text, listing activities instead of outcomes.

## Framework References
- Pyramid Principle (Barbara Minto) — conclusion-first structure
- BLUF (military communication) — bottom line up front
- RAG Status — Red/Amber/Green status reporting

## Formatting Guidelines
- Maximum one page when printed. Aim for 300-400 words.
- Use tables for metrics. Bullet points for wins/risks.
- Bold the status indicator. Use emoji for RAG (🟢🟡🔴).
- White space matters — dense exec summaries don't get read.

## Example
> **Bottom Line:** Q2 activation is trending 12% below target due to onboarding friction; we've shipped a fix (live Monday) and need Design to reprioritize the setup wizard by May 30 to hit plan.
>
> **Status:** 🟡 | **Key Metric:** Day-7 activation at 34% (target: 40%, was 31% last month ↑)
>
> **Win:** New segmentation engine drove 22% lift in trial-to-paid for mid-market.
> **Risk:** API rate limits causing partner churn — eng fix in sprint, ETA June 5.
> **Ask:** Design lead to confirm setup wizard reprioritization by EOW.
