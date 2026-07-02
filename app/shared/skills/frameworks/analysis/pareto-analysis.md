# Pareto Analysis (80/20 Rule)

## What It Is
Pareto Analysis, based on the Pareto Principle observed by Vilfredo Pareto and popularized by Joseph Juran, states that roughly 80% of effects come from 20% of causes. In product management, this means 80% of value often comes from 20% of features, 80% of revenue from 20% of customers, or 80% of bugs from 20% of code. It's a focusing tool for finding the highest-leverage investments.

## When to Use
- Identifying which efforts produce the most results
- Prioritizing bug fixes, feature improvements, or customer segments
- Resource allocation when everything seems equally important
- Cutting scope by identifying what actually drives value

## When NOT to Use
- When the distribution is genuinely even — not everything follows 80/20
- As a precise ratio — the actual split might be 70/30 or 90/10; the principle is about asymmetry
- When all items are equally critical (e.g., compliance requirements)

## How to Apply
1. **Define the outcome**: What are you measuring? (Revenue, bugs, support tickets, feature usage, etc.)
2. **List contributors**: What inputs or categories contribute to this outcome?
3. **Quantify each**: Measure each contributor's share of the total outcome
4. **Sort descending**: Rank contributors from largest to smallest contribution
5. **Calculate cumulative %**: Find where 80% of the outcome is reached
6. **Identify the vital few**: These are your highest-leverage focus areas
7. **Act**: Invest disproportionately in the vital few. Deprioritize or eliminate the trivial many

## Template
| Contributor | Value | % of Total | Cumulative % | Category |
|-------------|-------|-----------|-------------|----------|
| 1. | | | | Vital Few |
| 2. | | | | Vital Few |
| 3. | | | | |
| ... | | | | Trivial Many |

**The vital few (≈20%)**: ___
**Their contribution (≈80%)**: ___
**Action**: ___

## Example
**Analysis**: What drives support ticket volume?
| Category | Tickets/Month | % | Cumulative |
|----------|--------------|---|-----------|
| Login/auth issues | 340 | 34% | 34% |
| Billing confusion | 280 | 28% | 62% |
| Integration failures | 180 | 18% | 80% |
| Performance complaints | 90 | 9% | 89% |
| Feature requests | 60 | 6% | 95% |
| Other | 50 | 5% | 100% |

→ Top 3 categories (30% of categories) drive 80% of tickets. Fixing login, clarifying billing, and stabilizing integrations would eliminate most support volume.

## Key Pitfalls
- Treating the 80% as expendable — sometimes the "trivial many" include strategically important items
- Assuming 80/20 is exact — it's a heuristic, not a law
- Applying it once and never revisiting — the distribution shifts as you address the vital few
- Ignoring that the "trivial many" collectively still matter — reducing them by 50% still has impact

## Related Frameworks
- **Root Cause Analysis** — dig deeper into why the vital few are the biggest contributors
- **Constraint Theory** — finds the single biggest bottleneck (extreme Pareto)
- **RFM Analysis** — applies Pareto thinking to customer value segmentation
- **Value-Effort Matrix** — visual version of focusing on high-value, low-effort items
