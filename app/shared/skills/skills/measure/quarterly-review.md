# Quarterly Review

## Purpose
Produce a comprehensive quarter review — scoring OKRs with honest commentary, highlighting key wins and misses, extracting learnings, assessing strategic implications, and recommending priorities for the next quarter. Formatted for executive consumption with the right balance of depth and brevity.

## Auto-Trigger Patterns
- "quarterly review for [team/product]"
- "Q[X] review"
- "OKR scoring for [quarter]"
- "quarter retrospective"
- "executive quarterly update"
- "end of quarter summary"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| OKRs for the quarter | Yes | User prompt |
| Results / metrics data | Yes | User prompt |
| Key events and decisions | Recommended | User prompt |
| Strategic context | Optional | `context/products/` |
| Next quarter planning context | Optional | User prompt |

## Process
1. **Score OKRs** — Rate each Key Result 0.0-1.0 with honest commentary. 0.7 is a strong result (stretch goals should be missed sometimes). Include context for each score.
2. **Highlight key wins** — 3-5 most impactful accomplishments. Connect to business outcomes, not just feature delivery.
3. **Acknowledge key misses** — What didn't happen and why. Honest assessment without blame. Distinguish between: scope misses, execution misses, and strategic pivots.
4. **Extract learnings** — What did we learn about our customers, market, product, or team? Lessons that should influence future decisions.
5. **Assess strategic implications** — Based on the quarter's results: what should change in our strategy? What assumptions were validated or invalidated?
6. **Recommend next quarter priorities** — Based on results and learnings, what should the team focus on? Include: things to continue, things to start, things to stop.
7. **Resource and capacity reflection** — Was the team appropriately sized and structured? Were there bottlenecks? Inform next quarter resourcing.

## Output Format
```
## Quarterly Review: Q[X] [Year]
**Team/Product:** [name]  |  **Presented by:** [name]
**Review Date:** [date]

### Quarter Summary
[3-4 sentence executive summary: what defined this quarter]

### OKR Scorecard
#### Objective 1: [Objective Statement]
| Key Result | Target | Actual | Score | Commentary |
|-----------|--------|--------|-------|-----------|
| KR1: [Description] | [Target] | [Actual] | [0.0-1.0] | [Why this score] |
| KR2: [Description] | [Target] | [Actual] | [0.0-1.0] | [Why this score] |
**Objective Score: [Average]**

#### Objective 2: [Objective Statement]
[Same structure]

### Key Wins
1. **[Win]** — [Business impact and context]
2. **[Win]** — [Business impact]

### Key Misses
1. **[Miss]** — [Why it happened, type: scope / execution / pivot]
2. **[Miss]** — [Why and what we learned]

### Learnings
| Learning | Evidence | Implication |
|----------|----------|-------------|
| [What we learned] | [Data / observation] | [How it changes our thinking] |

### Strategic Implications
- **Validated assumption:** [What proved true]
- **Invalidated assumption:** [What proved false]
- **New insight:** [What we didn't expect]

### Next Quarter Recommendations
| Priority | Rationale | Expected Impact |
|----------|-----------|----------------|
| [Continue: X] | [Why keep doing this] | [Projected outcome] |
| [Start: Y] | [Why start this now] | [Projected outcome] |
| [Stop: Z] | [Why stop this] | [Resource freed up] |

### Capacity & Resourcing
- [Bottlenecks observed]
- [Resourcing recommendations for next quarter]
```

## Quality Standards
- OKR scores are honest — 1.0 on every KR means goals weren't ambitious enough.
- Key misses include root causes, not just acknowledgment of the miss.
- Learnings are connected to implications — "we learned X, so we should change Y."
- Next quarter recommendations flow logically from the quarter's results.

**Anti-patterns:** Inflated OKR scores, glossing over misses, learnings without implications, next quarter recommendations disconnected from results, blame-oriented miss analysis.

## Framework References
- **OKR scoring** — 0.0-1.0 scale with 0.7 as target for stretch goals.
- **Continue/Start/Stop** — Prioritization framework for next quarter.

## Formatting Guidelines
- OKR scorecard in table with commentary (structured assessment).
- Wins and misses as numbered lists (scannable).
- Learnings table connecting evidence to implications.
- Next quarter recommendations as continue/start/stop (actionable).

## Example
**OKR commentary:** "KR2: 'Increase D30 retention from 35% to 42%.' Score: 0.6 (achieved 39%). The onboarding improvements drove retention to 39% — meaningful progress but below the stretch target. The remaining gap is in the day 14-21 period where engagement drops. Next quarter we should invest in the 'second week experience' with progressive feature discovery."
