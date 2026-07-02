# Cohort Analysis

## Purpose
Perform cohort-based analysis to understand how user behavior evolves over time — examining retention curves, engagement trends, revenue patterns, and feature adoption by cohort. Identifies whether the product is getting better or worse for new users and surfaces causal hypotheses for observed trends.

## Auto-Trigger Patterns
- "cohort analysis for [product/feature]"
- "retention by cohort"
- "are newer cohorts performing better"
- "cohort comparison"
- "user behavior by signup date"
- "vintage analysis"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Cohort data (by signup date/period) | Yes | User prompt |
| Metrics to analyze | Recommended | User prompt |
| Cohort definition | Optional | User prompt (weekly/monthly) |
| Product changes timeline | Optional | User prompt |

## Process
1. **Define cohorts** — Group users by meaningful criteria: signup date (most common), acquisition channel, first feature used, plan tier. Choose a cohort window (weekly or monthly) that balances granularity with sample size.
2. **Build retention curves** — For each cohort: what percentage of users are active at Day 1, 7, 14, 30, 60, 90? Overlay curves to compare.
3. **Analyze engagement trends** — Beyond retention (active/inactive binary): are engaged users doing more or less over time? Frequency, depth, breadth of feature usage.
4. **Examine revenue patterns** — Revenue per user by cohort: LTV curves, expansion revenue, contraction, churn. Are newer cohorts monetizing better?
5. **Feature adoption by cohort** — Which features do cohorts adopt, and when? Do newer cohorts adopt key features faster?
6. **Identify improving vs. declining trends** — Are newer cohorts outperforming older ones? Where specifically? Align with product changes that might explain improvements.
7. **Correlate with product changes** — Map cohort performance shifts to specific product releases, marketing changes, or market events.
8. **Form causal hypotheses** — Why are trends moving in this direction? What changes drove improvements? What factors drive degradation?

## Output Format
```
## Cohort Analysis: [Product/Feature]
**Cohort definition:** [Monthly / Weekly by signup date]
**Period analyzed:** [Date range]

### Retention by Cohort
| Cohort | D1 | D7 | D14 | D30 | D60 | D90 |
|--------|-----|-----|------|------|------|------|
| [Jan '24] | [%] | [%] | [%] | [%] | [%] | [%] |
| [Feb '24] | [%] | [%] | [%] | [%] | [%] | — |
| [Mar '24] | [%] | [%] | [%] | [%] | — | — |

### Trend Assessment
- **Overall trend:** [Improving / Declining / Stable]
- **Inflection point:** [When and what changed]
- **Best performing cohort:** [Which and why]
- **Worst performing cohort:** [Which and why]

### Engagement Depth by Cohort
| Cohort | Avg sessions/week | Avg features used | Power user % |
|--------|------------------|------------------|-------------|
| [Cohort] | [N] | [N] | [%] |

### Revenue by Cohort
| Cohort | Month 1 ARPU | Month 3 ARPU | LTV (projected) | Expansion rate |
|--------|-------------|-------------|-----------------|---------------|
| [Cohort] | [$X] | [$Y] | [$Z] | [%] |

### Feature Adoption by Cohort
| Feature | Cohort A Adoption | Cohort B Adoption | Cohort C Adoption |
|---------|------------------|------------------|------------------|
| [Feature 1] | [% by day 30] | [%] | [%] |

### Product Change Correlation
| Date | Product Change | Cohort Impact |
|------|---------------|---------------|
| [Date] | [What changed] | [Which metric improved/declined] |

### Causal Hypotheses
| Trend | Hypothesis | Evidence | Confidence |
|-------|-----------|----------|-----------|
| [Improving retention] | [New onboarding flow] | [Cohorts post-change retain 8% better] | High |

### Recommendations
1. [Action based on cohort insights]
```

## Quality Standards
- Cohort sizes are large enough for meaningful comparison — flag where sample sizes are too small.
- Trends are correlated with product changes — not just described.
- Causal hypotheses are clearly labeled as hypotheses with supporting evidence and confidence level.
- Incomplete cohorts (insufficient maturity) are clearly marked.

**Anti-patterns:** Drawing conclusions from immature cohorts, ignoring sample size differences, confusing correlation with causation, comparing cohorts without normalizing for seasonality.

## Framework References
- **Cohort analysis** — Time-based user grouping for longitudinal analysis.
- **Retention curves** — Visualizing user retention over time by cohort.

## Formatting Guidelines
- Retention table with cohort rows and time-period columns (classic cohort view).
- Trend assessment as bullet summary (quick interpretation).
- Product change correlation table (connecting causes to effects).
- Mark incomplete data with dashes (—) not zeros.

## Example
**Insight:** "March 2024 cohort shows D30 retention of 42% vs. 35% for January cohort — a 7pp improvement. This aligns with the new onboarding flow shipped Feb 15. Cohorts signing up after Feb 15 consistently outperform earlier cohorts at every retention checkpoint. The improvement is strongest on D7 (+10pp), suggesting the onboarding changes are most impactful in the first week."
