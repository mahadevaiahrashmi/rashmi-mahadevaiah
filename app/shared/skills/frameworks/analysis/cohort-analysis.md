# Cohort Analysis

## What It Is
Cohort Analysis groups users by a shared characteristic — typically when they signed up (time-based cohort) or what they did (behavioral cohort) — and tracks their metrics over time. Unlike aggregate metrics that mix new and old users, cohort analysis isolates groups to reveal trends, identify whether your product is improving, and measure retention, engagement, and revenue accurately.

## When to Use
- Measuring retention accurately (aggregate retention is misleading)
- Determining whether product changes are improving user outcomes
- Identifying which user segments have the best/worst retention and LTV
- Understanding seasonality, growth quality, and product-market fit signals

## When NOT to Use
- When you have very few users (<50 per cohort) — results won't be reliable
- For real-time operational decisions — cohort analysis is retrospective
- When you only need a snapshot metric, not a trend over time

## How to Apply
1. **Define cohort type**:
   - **Time-based**: Group by signup week/month (most common)
   - **Behavioral**: Group by action taken (e.g., "users who completed onboarding" vs. "users who didn't")
   - **Acquisition**: Group by source channel
2. **Choose the metric**: Retention rate, revenue, engagement, feature adoption
3. **Build the cohort table**: Rows = cohorts (e.g., Jan signups, Feb signups). Columns = time periods (Week 1, Week 2... or Month 1, Month 2...)
4. **Analyze patterns**:
   - Are newer cohorts retaining better than older ones? (Product is improving)
   - Is there a point where retention flattens? (PMF signal)
   - Which behavioral cohorts have the best outcomes?
5. **Act on insights**: Double down on what makes the best cohorts different

## Template
**Retention Cohort Table** (% of users returning):
| Cohort | Month 0 | Month 1 | Month 2 | Month 3 | Month 4 |
|--------|---------|---------|---------|---------|---------|
| Jan    | 100%    |         |         |         |         |
| Feb    | 100%    |         |         |         |         |
| Mar    | 100%    |         |         |         |         |
| Apr    | 100%    |         |         |         |         |

**Key Observations**: ___

## Example
**Product**: Task management SaaS
| Cohort | M0 | M1 | M2 | M3 | M4 |
|--------|-----|-----|-----|-----|-----|
| Jan | 100% | 42% | 28% | 22% | 20% |
| Feb | 100% | 45% | 31% | 25% | 23% |
| Mar (new onboarding launched) | 100% | 55% | 40% | 33% | — |
| Apr | 100% | 58% | 42% | — | — |

**Insight**: New onboarding (launched March) improved M1 retention by ~13 percentage points. Curves are flattening around M3-M4, suggesting these users will be long-term.

## Key Pitfalls
- Comparing cohorts of different sizes without normalizing — always use percentages
- Using aggregate metrics instead of cohort metrics — "overall retention is 30%" hides whether things are improving or degrading
- Too many cohort dimensions — start simple (time-based) and add behavioral once you understand basics
- Not acting on cohort insights — the analysis is only valuable if it drives product decisions

## Related Frameworks
- **Retention Framework** — uses cohort analysis as its primary measurement tool
- **Unit Economics** — accurate LTV requires cohort-based calculation
- **RFM Analysis** — behavioral segmentation that complements cohort analysis
- **Pirate Metrics (AARRR)** — cohorts measure each stage accurately
