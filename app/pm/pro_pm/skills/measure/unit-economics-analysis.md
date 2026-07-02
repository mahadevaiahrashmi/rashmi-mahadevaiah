# Unit Economics Analysis

## Purpose
Perform a deep-dive into unit economics — calculating CAC by channel, LTV by segment, LTV:CAC ratios, payback periods, gross margins, and contribution margins. Includes trend analysis and benchmarking to assess whether the business model is sustainable and where to invest for growth.

## Auto-Trigger Patterns
- "unit economics analysis"
- "what's our CAC and LTV"
- "LTV to CAC ratio"
- "payback period analysis"
- "economics by [channel/segment]"
- "is our growth profitable"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Revenue data | Yes | User prompt |
| Customer acquisition costs | Yes | User prompt |
| Customer lifecycle data | Recommended | User prompt |
| Cost structure | Recommended | User prompt |
| Segment definitions | Optional | User prompt |

## Process
1. **Calculate CAC** — Total acquisition cost / new customers acquired. Break down by channel: paid search, organic, referral, sales-led, PLG. Include all costs: marketing spend, sales salaries, tools, overhead.
2. **Calculate LTV** — Average revenue per user × gross margin × average customer lifetime. Use cohort-based approach for accuracy. Account for expansion and contraction.
3. **Compute LTV:CAC ratio** — Target ≥3:1 for SaaS. Analyze by segment and channel — aggregate ratios hide channel-specific problems.
4. **Determine payback period** — Months to recover CAC from gross profit. Target <12 months for most SaaS businesses.
5. **Analyze gross margin** — Revenue minus COGS (hosting, support, third-party costs). Benchmark against industry (70-80% for SaaS).
6. **Calculate contribution margin** — Revenue minus COGS minus direct sales/marketing cost. Shows profitability per customer after variable costs.
7. **Trend analysis** — How are unit economics changing over time? Improving (scaling efficiency) or degrading (growth at all costs)?
8. **Benchmark** — Compare against industry benchmarks and public company data where available.

## Output Format
```
## Unit Economics Analysis
**Period:** [Date range]  |  **Analysis Date:** [date]

### Summary Dashboard
| Metric | Value | Trend | Benchmark | Status |
|--------|-------|-------|-----------|--------|
| Blended CAC | [$X] | ↑/↓/→ | [$Y industry] | ✅/⚠️/❌ |
| LTV | [$X] | ↑/↓/→ | [$Y] | ✅/⚠️/❌ |
| LTV:CAC | [X:1] | ↑/↓/→ | [3:1 target] | ✅/⚠️/❌ |
| Payback (months) | [X] | ↑/↓/→ | [<12 target] | ✅/⚠️/❌ |
| Gross margin | [X%] | ↑/↓/→ | [75% target] | ✅/⚠️/❌ |

### CAC by Channel
| Channel | Spend | Customers | CAC | LTV:CAC | Efficiency |
|---------|-------|-----------|-----|---------|-----------|
| Paid search | [$X] | [N] | [$X] | [X:1] | ✅/⚠️/❌ |
| Organic | [$X] | [N] | [$X] | [X:1] | ✅/⚠️/❌ |
| Sales-led | [$X] | [N] | [$X] | [X:1] | ✅/⚠️/❌ |
| Referral | [$X] | [N] | [$X] | [X:1] | ✅/⚠️/❌ |

### LTV by Segment
| Segment | ARPU | Gross Margin | Avg Lifetime | LTV | LTV:CAC |
|---------|------|-------------|-------------|-----|---------|
| [SMB] | [$X] | [X%] | [X months] | [$X] | [X:1] |
| [Mid-market] | [$X] | [X%] | [X months] | [$X] | [X:1] |
| [Enterprise] | [$X] | [X%] | [X months] | [$X] | [X:1] |

### Payback Analysis
| Segment | Monthly Gross Profit | CAC | Payback (months) |
|---------|---------------------|-----|-----------------|
| [Segment] | [$X] | [$X] | [X months] |

### Trend Analysis (Last 4 Quarters)
| Quarter | CAC | LTV | LTV:CAC | Payback |
|---------|-----|-----|---------|---------|
| Q1 | [$X] | [$X] | [X:1] | [X mo] |

### Strategic Implications
1. **[Channel/segment with best economics]** — [Invest more here because...]
2. **[Channel/segment with worst economics]** — [Reduce/optimize because...]
3. **[Trend concern or opportunity]** — [Action needed]
```

## Quality Standards
- CAC includes all acquisition costs, not just ad spend — sales salaries, tools, and overhead matter.
- LTV is cohort-based where possible, not just average revenue × assumed lifetime.
- Analysis is segmented — blended metrics hide problematic channels and segments.
- Trends are tracked to show whether economics are improving or degrading.

**Anti-patterns:** Excluding costs from CAC to make it look better, using LTV projections not grounded in cohort data, only reporting blended metrics, ignoring payback period.

## Framework References
- **SaaS metrics (SaaStr/Bessemer)** — LTV:CAC, payback, gross margin benchmarks.
- **Unit economics framework** — Contribution margin analysis for sustainability.

## Formatting Guidelines
- Summary dashboard at top (instant health check).
- Channel and segment breakdowns in tables (identify optimization opportunities).
- Trend analysis over quarters (trajectory matters more than snapshot).
- Status indicators (✅⚠️❌) for quick assessment.

## Example
**Strategic implication:** "Paid search CAC has increased 35% over 4 quarters (from $120 to $162) while LTV:CAC dropped from 4.2:1 to 3.1:1. Organic channel maintains 8:1 LTV:CAC. Recommendation: shift $50K/month from paid search to content marketing and SEO investment. Expected impact: lower blended CAC by 15% within 2 quarters."
