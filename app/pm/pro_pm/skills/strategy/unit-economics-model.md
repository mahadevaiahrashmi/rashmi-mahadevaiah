# Unit Economics Model

## Purpose
Build or analyze a unit economics model covering CAC by channel, LTV by segment, payback period, margins, and sensitivity analysis. Presents current state, trends, improvement levers, and industry benchmarks to guide strategic investment decisions and identify economic health or risk.

## Auto-Trigger Patterns
- "Build a unit economics model" / "unit economics analysis"
- "What are our CAC and LTV?" / "LTV:CAC ratio"
- "Analyze our payback period" / "customer economics"
- "Are our unit economics healthy?"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Revenue data by segment, customer acquisition costs by channel, churn/retention rates, gross margin
- **Optional:** Cohort data, expansion revenue data, support cost per customer, industry benchmarks
- **Reference:** SaaS benchmarks, `context/products/` for industry comparisons

## Process
1. **Calculate CAC by channel** — Total cost (marketing + sales) per acquired customer, broken down by channel. Include: salaries, tools, ad spend, events.
2. **Calculate LTV by segment** — Average revenue per customer × gross margin × (1 / churn rate). Segment by plan, cohort, or customer type.
3. **Derive LTV:CAC ratio** — Healthy SaaS is >3:1. Below 3:1 means acquisition is too expensive or retention is too low.
4. **Calculate payback period** — Months to recover CAC. Healthy is <12 months for SMB, <18 for mid-market, <24 for enterprise.
5. **Analyze margins** — Gross margin by segment. Identify margin-dilutive segments or features.
6. **Run sensitivity analysis** — Model impact of: 10% churn improvement, 20% CAC reduction, 15% ARPU increase. Identify highest-leverage lever.
7. **Benchmark** — Compare to industry medians and top-quartile performers. Where are you strong? Where are you lagging?
8. **Identify improvement levers** — Prioritized list of actions to improve unit economics, ordered by impact and feasibility.

## Output Format
```
## Unit Economics: [Product/Company]
**Period:** [Timeframe] | **Status:** [Healthy/Watch/Concern]

### Key Metrics Summary
| Metric | Current | Benchmark | Status |
|--------|---------|-----------|--------|
| Blended CAC | $[X] | $[Y] | 🟢/🟡/🔴 |
| LTV | $[X] | $[Y] | 🟢/🟡/🔴 |
| LTV:CAC | [X]:1 | >3:1 | 🟢/🟡/🔴 |
| Payback (months) | [X] | <12 | 🟢/🟡/🔴 |
| Gross Margin | [X]% | >70% | 🟢/🟡/🔴 |

### CAC by Channel
| Channel | Spend | Customers | CAC | Trend |
|---------|-------|-----------|-----|-------|
| Organic | $[X] | [N] | $[X] | ↑/↓ |
| Paid | $[X] | [N] | $[X] | ↑/↓ |
| Sales | $[X] | [N] | $[X] | ↑/↓ |

### LTV by Segment
| Segment | ARPU | Churn | Gross Margin | LTV | LTV:CAC |
|---------|------|-------|--------------|-----|---------|
| ... | ... | ... | ... | ... | ... |

### Sensitivity Analysis
| Lever | Change | LTV:CAC Impact | Payback Impact |
|-------|--------|----------------|----------------|
| Reduce churn 10% | ... | ... | ... |
| Increase ARPU 15% | ... | ... | ... |
| Reduce CAC 20% | ... | ... | ... |

### Improvement Levers (Prioritized)
1. **[Lever]** — [Impact] — [Feasibility] — [Recommended action]

### Trends
[QoQ and YoY trends for key metrics — are we getting healthier?]
```

## Quality Standards
- CAC includes fully-loaded costs — not just ad spend. Sales salaries, tools, and overhead count.
- LTV uses actual churn data by segment, not blended averages that hide problems.
- Sensitivity analysis reveals which lever has the highest impact — this guides investment.
- Benchmarks are relevant (same stage, same industry) not generic "SaaS benchmarks."
- **Anti-patterns:** Using blended metrics that hide segment-level problems, excluding costs from CAC, using theoretical churn instead of actual, no sensitivity analysis, benchmarking against wrong peer set.

## Framework References
- SaaS unit economics — CAC, LTV, payback period, magic number
- Cohort analysis — retention and expansion by customer cohort
- Bessemer benchmarks — SaaS efficiency metrics

## Formatting Guidelines
- Tables for all metrics — side-by-side comparison is essential.
- Include trend arrows (↑↓→) for all key metrics.
- RAG status on key metrics for quick health assessment.
- Keep to 3-4 pages with financial model appendix.

## Example
> **Key Finding:** LTV:CAC is 4.2:1 overall (healthy), but the SMB segment is 1.8:1 (unhealthy) due to 8% monthly churn. Enterprise is 7.1:1 — our economics are being subsidized by enterprise.
>
> **Highest-Leverage Action:** Reducing SMB churn from 8% to 5% monthly would improve blended LTV:CAC from 4.2:1 to 5.8:1 and add $420K in annual retained revenue.
