# Churn Analysis

## Purpose
Conduct a comprehensive churn analysis — examining churn rate trends, cohort-based churn patterns, leading indicators, categorized churn reasons, segment-specific analysis, and developing intervention recommendations and prevention strategies. Turns "we're losing customers" into an actionable retention strategy.

## Auto-Trigger Patterns
- "churn analysis for [product/segment]"
- "why are customers churning"
- "churn rate trends"
- "retention problem analysis"
- "customer loss analysis"
- "reduce churn for [segment]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Churn data (rate, counts) | Yes | User prompt |
| Time period | Recommended | User prompt |
| Churn reason data | Recommended | User prompt or CS data |
| Segment definitions | Optional | User prompt |
| Product usage data | Optional | User prompt |

## Process
1. **Calculate churn rates** — Logo churn (customer count) and revenue churn (MRR/ARR). Gross churn (losses only) and net churn (losses minus expansion). Monthly, quarterly, annual views.
2. **Trend analysis** — Is churn improving, worsening, or stable? What's the trajectory? Identify inflection points and correlate with product/market events.
3. **Cohort churn analysis** — Which cohorts churn most? At what point in their lifecycle? Is churn front-loaded (activation problem) or distributed (value delivery problem)?
4. **Categorize churn reasons** — Classify into: product gap, price, competitive loss, business closure, poor experience, champion change, poor fit (never should have been a customer). Use exit surveys, CS notes, cancellation data.
5. **Identify leading indicators** — What signals precede churn by 30/60/90 days? Usage decline, support increase, feature disengagement, payment issues.
6. **Segment analysis** — Churn by: company size, plan tier, acquisition channel, geography, industry. Identify high-churn and low-churn segments.
7. **Quantify impact** — Revenue lost, LTV impact, growth drag. What would reducing churn by X% mean for the business?
8. **Develop prevention strategy** — For each churn driver: specific interventions, owners, expected impact, implementation timeline.

## Output Format
```
## Churn Analysis: [Product/Segment]
**Period:** [Date range]  |  **Analysis Date:** [date]

### Churn Overview
| Metric | Current | Prior Period | Trend | Benchmark |
|--------|---------|-------------|-------|-----------|
| Logo churn (monthly) | [X%] | [Y%] | ↑/↓/→ | [Industry: Z%] |
| Revenue churn (gross) | [X%] | [Y%] | ↑/↓/→ | [Z%] |
| Net revenue retention | [X%] | [Y%] | ↑/↓/→ | [>100% target] |

### Churn by Reason
| Reason | % of Churn | Revenue Lost | Trend | Addressable? |
|--------|-----------|-------------|-------|-------------|
| Product gap | [X%] | [$X] | ↑/↓ | Yes — roadmap |
| Price sensitivity | [X%] | [$X] | ↑/↓ | Partial |
| Competitive loss | [X%] | [$X] | ↑/↓ | Yes — differentiation |
| Poor fit | [X%] | [$X] | → | Improve qualification |
| Champion change | [X%] | [$X] | → | Relationship strategy |

### Churn by Segment
| Segment | Churn Rate | vs. Average | Revenue at Risk | Key Driver |
|---------|-----------|-------------|----------------|-----------|
| [SMB] | [X%] | [Above/Below] | [$X] | [Primary reason] |
| [Enterprise] | [X%] | [Above/Below] | [$X] | [Primary reason] |

### Leading Indicators
| Indicator | Lead Time | Predictive Strength | Current Signal |
|-----------|-----------|-------------------|---------------|
| [Usage decline >30%] | 60 days | High | [# accounts showing] |
| [Support tickets >5/mo] | 45 days | Medium | [# accounts] |
| [No login in 14 days] | 30 days | High | [# accounts] |

### Lifecycle Churn Pattern
| Period | Churn Rate | Type | Driver |
|--------|-----------|------|--------|
| Month 1-3 | [X%] | Activation failure | [Onboarding issues] |
| Month 4-6 | [X%] | Value realization | [Feature gaps] |
| Month 7-12 | [X%] | Renewal decision | [ROI justification] |
| Month 12+ | [X%] | Maturity | [Competitive / needs change] |

### Prevention Strategy
| Driver | Intervention | Owner | Expected Impact | Timeline |
|--------|-------------|-------|----------------|----------|
| [Product gap] | [Build X feature] | Product | [-X% churn] | [Q target] |
| [Activation] | [Improve onboarding] | Product | [-X% early churn] | [Q target] |
| [Champion change] | [Multi-threading program] | CS | [-X% relationship churn] | [Ongoing] |

### Business Impact
- **Revenue lost to churn (TTM):** [$X]
- **If churn reduced by 1%:** [+$X ARR retained]
- **Growth drag:** [Need to acquire X new customers just to replace churn]
```

## Quality Standards
- Both logo churn and revenue churn are analyzed — they often tell different stories.
- Churn reasons are categorized from multiple sources (exit surveys, CS notes, usage data), not just one.
- Leading indicators are validated against historical data, not assumed.
- Prevention strategies are tied to specific churn drivers with expected impact.

**Anti-patterns:** Only reporting logo churn (hides revenue impact), blaming all churn on price, no leading indicator analysis, prevention strategies that don't match churn causes.

## Framework References
- **Net revenue retention (NRR)** — The gold standard SaaS retention metric.
- **Churn taxonomy** — Categorizing churn by root cause.
- **Leading indicator analysis** — Identifying predictive signals.

## Formatting Guidelines
- Overview table with trends and benchmarks (context).
- Churn reasons with revenue impact and addressability (prioritization).
- Leading indicators with lead time (early warning system).
- Prevention strategy with expected impact (ROI of retention investment).

## Example
**Prevention insight:** "42% of churn is concentrated in months 1-3 (activation failure) and is the most addressable category. Customers who complete 3+ key actions in week 1 have 4x better 6-month retention. Current activation rate for these actions is 38%. Improving this to 60% through guided onboarding could reduce early churn by 30%, retaining ~$180K ARR annually."
