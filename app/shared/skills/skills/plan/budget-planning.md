# Budget Planning

## Purpose
Build a feature or initiative budget that translates product plans into financial terms — covering engineering costs, infrastructure, tooling, third-party services, and projected ROI. Present this in the format finance and leadership expect, bridging the gap between product vision and fiscal reality.

## Auto-Trigger Patterns
- "create a budget for [feature]"
- "cost estimate for [initiative]"
- "ROI analysis for [project]"
- "budget planning for [product]"
- "financial case for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Initiative description and scope | Yes | User prompt |
| Team costs / rates | Yes | User prompt |
| Infrastructure estimates | Optional | `context/products/*/tech-context.md` |
| Revenue projections | Optional | User prompt |
| Comparable projects | Optional | User prompt |
| Finance formatting requirements | Optional | `context/company/processes.md` |

## Process
1. **Itemize costs** — Engineering time (fully loaded rate × months), infrastructure, tooling, third-party services, support costs.
2. **Project revenue/savings** — What does this initiative generate or save? Over what timeframe?
3. **Calculate ROI** — Net return / total investment. Include payback period.
4. **Compare alternatives** — Cost of build vs. buy vs. partner. What's the cheapest path to the outcome?
5. **Model scenarios** — Optimistic, expected, and conservative projections.
6. **Identify ongoing costs** — Not just build costs — what does this cost to operate monthly?
7. **Map to fiscal periods** — Align costs with fiscal quarters for finance team consumption.
8. **Quality-check** — All costs included (often missed: support, maintenance, sunset), revenue assumptions are defensible.

## Output Format
```
## Budget: [Initiative Name]
**Period:** [Timeframe] | **Total Investment:** $[Amount]

### Cost Breakdown
| Category | Item | One-Time | Monthly Recurring | Total (Year 1) |
|----------|------|----------|------------------|----------------|
| Engineering | [N] engineers × [M] months | $... | — | $... |
| Infrastructure | [Cloud/hosting] | $... | $... | $... |
| Tooling | [Third-party tools] | $... | $... | $... |
| Third-party | [APIs, services] | — | $... | $... |
| **Total** | | **$...** | **$...** | **$...** |

### Revenue / Savings Projection
| Scenario | Year 1 | Year 2 | Year 3 |
|----------|--------|--------|--------|
| Conservative | $... | $... | $... |
| Expected | $... | $... | $... |
| Optimistic | $... | $... | $... |

### ROI Analysis
| Metric | Value |
|--------|-------|
| Total investment | $... |
| Expected annual return | $... |
| Payback period | [Months] |
| 3-year ROI | [%] |

### Alternatives Comparison
| Option | Cost | Time | Risk | Recommendation |
|--------|------|------|------|----------------|
| Build | $... | ... | ... | ... |
| Buy | $... | ... | ... | ... |

### Quarterly Spend Plan
| Quarter | Investment | Cumulative |
|---------|-----------|-----------|

### Assumptions
- [Assumption underlying cost or revenue projection]
```

## Quality Standards
- All cost categories are covered: build, operate, maintain, sunset.
- Revenue projections have three scenarios with clear assumptions.
- ROI calculation includes payback period for executive consumption.
- Alternatives are genuinely evaluated, not straw men.
- Assumptions are explicit and testable.

**Anti-patterns:** Engineering-only costs (missing infra, support, maintenance), single-scenario projections, ignoring ongoing operational costs, no payback period.

## Framework References
- **Total Cost of Ownership (TCO)** — Full lifecycle cost analysis.
- **Build vs. Buy** — Framework for evaluating alternatives.
- **NPV / IRR** — Financial metrics for investment decisions (reference for advanced analysis).

## Formatting Guidelines
- Use currency formatting consistently.
- Bold the totals and key ROI numbers.
- Include a quarterly spend plan for finance alignment.
- Keep assumptions in a dedicated section.

## Example
**Cost:** "4 engineers × 3 months at $15K/month fully loaded = $180K. Infrastructure: $2K/month ongoing. Third-party API: $500/month. Year 1 total: $210K."

**ROI:** "Expected to reduce churn-related revenue loss by $400K/year based on feature being #1 cited reason in 23% of churn exit surveys. Payback period: 7 months."
