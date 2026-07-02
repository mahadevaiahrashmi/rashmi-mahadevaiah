# Pricing Change Analysis

## Purpose
Model the impact of a proposed pricing change across revenue, customer segments, competitive response, and organizational readiness. Includes revenue impact modeling, customer reaction prediction, migration planning, communication strategy, and rollback criteria.

## Auto-Trigger Patterns
- "Analyze a pricing change" / "pricing change impact"
- "What happens if we change pricing to [X]?"
- "Model the impact of [pricing change]"
- "Pricing migration analysis"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Current pricing, proposed pricing, customer base data (segment breakdown), revenue data
- **Optional:** Historical pricing change data, customer sensitivity signals, competitive pricing, contract terms
- **Reference:** `context/products/` for competitive context, financial models

## Process
1. **Define the change** — Precisely state: what's changing, for whom, by how much, and when.
2. **Segment the impact** — Model revenue change per customer segment. Some gain, some lose, some are neutral.
3. **Predict customer reaction** — Based on segment: price-sensitive customers churn, value-aligned customers stay, enterprise customers negotiate.
4. **Model revenue scenarios** — Best case, expected, worst case. Include: new revenue, lost revenue (churn), expansion impact, new customer acquisition effect.
5. **Anticipate competitive response** — Will competitors undercut? Match? Ignore? How does that change the analysis?
6. **Plan migration** — Grandfather vs immediate? Transition period? Notice requirements? Contractual constraints?
7. **Design communication** — Different messaging per segment. Emphasize value, not just price. Give context.
8. **Set rollback criteria** — What metrics would trigger a pricing rollback? Churn rate threshold, revenue drop, NPS decline.

## Output Format
```
## Pricing Change Analysis: [Change Description]
**Current:** [Current pricing] → **Proposed:** [New pricing]
**Effective:** [Date] | **Affected Customers:** [Count/Segment]

### Change Summary
[What's changing and why — the strategic rationale]

### Revenue Impact by Segment
| Segment | Customers | Current Rev | Projected Rev | Δ | Δ% |
|---------|-----------|-------------|---------------|---|----|
| [Seg 1] | [N] | $[X] | $[Y] | $[Z] | [%] |
| **Total** | | | | | |

### Scenario Modeling
| Scenario | Churn Rate | Rev Impact | Net Change |
|----------|-----------|------------|------------|
| Best case | [X%] | +$[X] | +[%] |
| Expected | [X%] | +$[X] | +[%] |
| Worst case | [X%] | -$[X] | -[%] |

### Customer Reaction Prediction
| Segment | Likely Reaction | Risk Level | Mitigation |
|---------|----------------|------------|------------|
| ... | ... | ... | ... |

### Competitive Response Scenarios
[How competitors might react and how that affects our position]

### Migration Plan
- **Existing customers:** [Grandfather/transition/immediate]
- **Timeline:** [Notice period and transition schedule]
- **Contractual considerations:** [Any constraints]

### Communication Strategy
[Per-segment messaging approach]

### Rollback Criteria
- Churn exceeds [X%] within [timeframe]
- Revenue drops below [$X] for [N] consecutive months
- NPS drops below [X]
```

## Quality Standards
- Revenue modeling includes scenario ranges, not just best-case projections.
- Customer reaction prediction is segment-specific — not all customers react the same way.
- Migration plan addresses contractual obligations and grandfathering logistics.
- Rollback criteria are specific and measurable — not vague "if things go badly."
- **Anti-patterns:** Modeling only the upside, ignoring churn impact, no competitive response consideration, one-size-fits-all communication, no rollback plan.

## Framework References
- Revenue impact modeling — cohort-based analysis
- Price elasticity — sensitivity analysis by segment
- Change management — phased communication and migration

## Formatting Guidelines
- Tables for segment analysis and scenario modeling.
- Include specific dollar amounts and percentages.
- Separate sections for different audiences: finance, sales, CS.
- Keep to 3-4 pages with financial model appendix.

## Example
> **Expected scenario:** 12% price increase on Pro tier affects 2,400 customers. Modeling 5% churn (120 customers, $144K lost) offset by $288K in increased revenue from remaining customers. Net positive: +$144K/year (+8% on Pro tier revenue).
>
> **Rollback trigger:** If Pro tier churn exceeds 8% in the 90 days post-change, revert to previous pricing for all affected customers and offer a 3-month credit.
