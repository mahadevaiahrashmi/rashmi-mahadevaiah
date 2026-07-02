# Retention Curves as PMF Signal

## What It Is
Retention curves plot the percentage of a user cohort that remains active over time. A flattening curve — where retention stabilizes at a meaningful level rather than trending to zero — is one of the strongest quantitative signals of product-market fit. The level at which the curve flattens, and how quickly it gets there, reveals both the strength of PMF and the quality of the product experience.

## When to Use
- Measuring product-market fit quantitatively alongside the Sean Ellis Test
- Comparing PMF strength across user segments, features, or product versions
- Determining whether product changes are improving long-term retention
- Setting benchmarks for healthy retention by product type

## When NOT to Use
- Products with fewer than 100 users per cohort — curves won't be statistically reliable
- Very new products without enough time for curves to develop (need 8+ weeks minimum)
- Products with inherent one-time use patterns (e.g., home-buying apps)

## How to Apply
1. **Build cohort retention tables**: Group users by signup week/month. Track % returning at each subsequent period
2. **Plot the curves**: X-axis = time since signup. Y-axis = % of cohort still active
3. **Analyze the shape**:
   - **Flattening curve**: PMF signal — users who stay past the initial drop-off are retained long-term
   - **Declining to zero**: No PMF — even engaged users eventually leave
   - **Smiling curve**: Very strong — retention actually increases over time (rare, indicates growing value)
4. **Compare across cohorts**: Are newer cohorts flattening at higher levels? Product is improving
5. **Benchmark by product type**:
   - Social/messaging: D30 > 25% is good
   - SaaS productivity: M3 > 40% is good
   - E-commerce: M3 > 20% is good
   - Consumer subscription: M6 > 30% is good

## Template
| Cohort | D1 | D7 | D14 | D30 | D60 | D90 | Curve Shape |
|--------|-----|-----|------|------|------|------|-------------|
|        |     |     |      |      |      |      | Flattening/Declining |

**Flattening Point**: Day/Month ___
**Flattening Level**: ___%
**Trend**: Improving / Stable / Declining across cohorts

## Example
**Product**: B2B analytics tool
| Cohort | M1 | M2 | M3 | M4 | M5 | M6 |
|--------|-----|-----|-----|-----|-----|-----|
| Q1 (pre-onboarding redesign) | 55% | 38% | 30% | 25% | 23% | 22% |
| Q2 (post-redesign) | 62% | 48% | 42% | 38% | 36% | 35% |

- **Q1 curve**: Flattens at ~22% at M5 — weak PMF
- **Q2 curve**: Flattens at ~35% at M5 — significantly better; approaching strong PMF
- **Insight**: Onboarding redesign improved long-term retention by 13 points. Continue optimizing activation

## Key Pitfalls
- Using aggregate retention instead of cohort-based curves — aggregates hide trends
- Not waiting long enough for curves to develop — premature conclusions are unreliable
- Ignoring the initial drop-off slope — a steep early drop with eventual flattening suggests an activation problem
- Comparing across product types without appropriate benchmarks
- Assuming a flat curve means you're done — the level matters (flattening at 5% is not PMF)

## Related Frameworks
- **Sean Ellis Test** — survey-based PMF signal complementing retention curves
- **Cohort Analysis** — the analytical technique behind retention curves
- **Activation Framework** — improving the initial drop before the curve flattens
- **Retention Framework** — strategies for improving each phase of the retention curve
