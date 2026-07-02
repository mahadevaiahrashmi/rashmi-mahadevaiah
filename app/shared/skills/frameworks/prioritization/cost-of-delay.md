# Cost of Delay

## What It Is
Cost of Delay (CoD) quantifies the economic impact of not delivering a feature or product now. It answers: "What do we lose for every week/month this is delayed?" Popularized by Don Reinertsen in product development flow economics. CoD converts time into money, making urgency tangible and comparable.

## When to Use
- Arguing for urgency on specific features with stakeholders or leadership
- Comparing items where time-sensitivity varies significantly
- As an input to WSJF prioritization
- When opportunity windows are closing (competitive threats, market timing, regulatory deadlines)

## When NOT to Use
- Features with no meaningful time dimension — value is constant whenever delivered
- When you can't reasonably estimate revenue/cost impact — use qualitative frameworks instead
- As a scare tactic — CoD requires honest estimation, not inflated urgency

## How to Apply
1. **Identify the value type** of the feature:
   - **Standard**: Value accrues linearly over time (most features)
   - **Urgent**: Value decays rapidly if delayed (competitive response, outage fix)
   - **Fixed Date**: Value is binary — hit the date or lose it (regulatory, seasonal, contractual)
   - **Intangible**: Hard to quantify but real (technical debt, team morale, brand)
2. **Estimate the weekly/monthly cost** of delay:
   - Revenue: Lost sales, delayed revenue recognition
   - Cost: Continued manual workarounds, support burden
   - Risk: Fines, churn, competitive loss
3. **Visualize** the CoD curve (value vs. time)
4. **Compare** CoD across features to prioritize
5. **Combine with duration** for WSJF: CoD / Duration

## Template
| Feature | CoD Type | Weekly CoD ($) | Rationale | Duration (wks) | WSJF |
|---------|----------|---------------|-----------|----------------|------|
|         |          |               |           |                |      |

## Example
**Feature**: SOC 2 compliance (fixed date: customer contract requires it by June 1)
- CoD Type: Fixed Date
- If missed: $500K deal at risk + 3 pipeline deals ($200K each) stall
- Weekly CoD after deadline: ~$150K/week in delayed revenue
- Duration: 6 weeks
- **WSJF**: $150K / 6 = $25K/week prioritization weight

## Key Pitfalls
- Treating all CoD as "urgent" — most features are standard with gradual accrual
- Fabricating precision — $147,329/week is false precision; use ranges
- Ignoring intangible CoD — tech debt and morale have real costs even if hard to quantify
- Not updating CoD as circumstances change — a competitive threat may dissolve

## Related Frameworks
- **WSJF** — directly uses CoD as the numerator
- **RICE** — alternative that doesn't explicitly model time-sensitivity
- **Stack Ranking** — force-ranked output when CoD informs but doesn't dictate
- **Unit Economics** — provides the financial inputs for CoD estimation
