# Quarterly Business Review Deck

## Purpose
Produces a 15-20 slide data-rich QBR presentation that gives leadership a comprehensive view of product performance—wins, misses, learnings, customer highlights, competitive shifts, and forward priorities—with clear resource asks tied to outcomes.

## Auto-Trigger Patterns
- "Create a QBR deck for [quarter]"
- "Build a quarterly business review presentation"
- "I need to present quarterly results to leadership"
- "Help me summarize Q[X] product performance"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Quarter dates, key metrics (actual vs target), major launches/milestones, customer feedback or NPS data, next quarter priorities
- **Optional:** Competitive intelligence, team health data, budget actuals, prior QBR for comparison
- **Reference files:** product-brief.md, strategy-document.md, customer-insights-report.md

## Process
1. **Collect metrics** — Gather all KPIs with actuals, targets, and prior quarter comparisons. Calculate deltas and trends.
2. **Categorize outcomes** — Sort into wins (exceeded target), on-track, misses (below target), and surprises. Identify root causes for misses.
3. **Extract stories** — Pull 2-3 customer highlights and 1-2 competitive developments that shaped the quarter.
4. **Build forward view** — Outline next quarter priorities with dependencies and resource needs.
5. **Assemble deck** — Follow the slide structure below. Ensure every claim has a data point.
6. **Add speaker notes** — Include context behind numbers and prepared answers for likely challenges.

## Output Format
```
# Q[X] [Year] Product Business Review

## Slide 1: Title & Quarter Snapshot
## Slide 2: Executive Summary (3 wins, 2 misses, 1 big bet)
## Slides 3-5: Metrics Dashboard
  - Usage/engagement metrics with trend lines
  - Revenue/growth metrics vs targets
  - Quality/reliability metrics
## Slides 6-8: Key Wins (what shipped, impact, customer reaction)
## Slide 9: Misses & Learnings (honest assessment, root cause, corrective action)
## Slides 10-11: Customer Highlights (quotes, case studies, churn analysis)
## Slide 12: Competitive Update (market shifts, new entrants, positioning changes)
## Slides 13-15: Next Quarter Priorities (initiatives, expected impact, confidence level)
## Slide 16: Resource Asks (headcount, budget, cross-functional dependencies)
## Slide 17: Risks & Mitigations
## Slide 18: Discussion & Q&A
```

## Quality Standards
- Every metric shown with target, actual, and trend (up/down/flat with percentage).
- Wins are celebrated with specifics; misses are addressed with honesty and action plans.
- Forward priorities connect back to strategic pillars from the strategy deck.
- **Anti-patterns:** Vanity metrics without context, hiding misses, priorities without resource mapping, no customer voice.

## Audience
Executive leadership and cross-functional partners who need to assess product health, approve resource allocation, and align on priorities. They value candor, data precision, and forward momentum over polish.

## Formatting Guidelines
- Data-dense: dashboards, sparklines, comparison tables. Minimal prose.
- Color-code metrics: green (on/above target), yellow (at risk), red (missed).
- 15-20 slides. One appendix slide per detailed data set referenced.
- Speaker notes should preempt "why did this miss?" questions.

## Example
**Slide 4: Engagement Metrics**
| Metric | Target | Actual | Δ QoQ | Status |
|--------|--------|--------|-------|--------|
| DAU | 50K | 53K | +12% | 🟢 |
| Activation Rate | 40% | 34% | -2% | 🔴 |
| Feature Adoption (new) | 25% | 28% | N/A | 🟢 |

Speaker Notes: "Activation is our miss this quarter. Root cause: onboarding flow redesign shipped late in Q2, so we only had 3 weeks of data. Early signals from the new flow show 41% activation—we expect this to normalize in Q3."
