# RFM Analysis

## What It Is
RFM Analysis segments customers by three behavioral dimensions: Recency (how recently they engaged), Frequency (how often they engage), and Monetary value (how much they spend). Each dimension is scored (typically 1–5), and the combined score creates segments like "Champions" (high R, F, M) or "At Risk" (low R, high F, M). Originally from direct marketing, it's widely applicable to SaaS and product analytics.

## When to Use
- Customer segmentation for targeted campaigns and product strategies
- Identifying your most valuable customers and at-risk segments
- Prioritizing which users to invest in retaining or reactivating
- Building personalized experiences based on engagement patterns

## When NOT to Use
- Products with very few customers (<100) — segments won't be meaningful
- Subscription products where "Monetary" is uniform — use RF analysis instead
- When you need causal analysis — RFM describes behavior, not why

## How to Apply
1. **Define metrics**:
   - **Recency**: Days since last purchase/login/action
   - **Frequency**: Total purchases/logins/actions in a period
   - **Monetary**: Total revenue/spend in a period
2. **Score each dimension** (1–5): Use quintiles (top 20% = 5, next 20% = 4, etc.)
3. **Create segments** from score combinations:
   - **Champions** (R:5, F:5, M:5): Most valuable. Reward and retain
   - **Loyal** (R:4–5, F:4–5, M:3–5): Consistent engagement. Upsell opportunities
   - **At Risk** (R:2–3, F:3–5, M:3–5): Were engaged, going cold. Win-back campaigns
   - **Hibernating** (R:1–2, F:1–2, M:1–2): Long gone. Low-cost reactivation or let go
   - **New** (R:5, F:1, M:1): Just arrived. Focus on activation
4. **Define strategies** for each segment
5. **Track movement** between segments over time

## Template
| Segment | R Score | F Score | M Score | Count | % of Revenue | Strategy |
|---------|---------|---------|---------|-------|-------------|----------|
| Champions | 5 | 5 | 4–5 | | | Reward, get referrals |
| Loyal | 4–5 | 3–5 | 3–5 | | | Upsell, deepen engagement |
| At Risk | 2–3 | 3–5 | 3–5 | | | Win-back, check in |
| New | 4–5 | 1 | 1–2 | | | Activate, onboard |
| Hibernating | 1–2 | 1–2 | 1–3 | | | Low-cost reactivation |

## Example
**Product**: E-commerce SaaS platform (10,000 merchants)
- **Champions** (820 merchants, 45% of revenue): Use 5+ features weekly, high GMV. Strategy: Beta access, advisory board, case studies
- **At Risk** (1,200 merchants, 22% of revenue): Were active 60–90 days ago, now declining. Strategy: CSM outreach, "what's new" campaign, exclusive webinar
- **New** (950 merchants): Signed up in last 30 days. Strategy: Onboarding sequence, activation milestones, welcome call for high-potential

## Key Pitfalls
- Equal weighting when dimensions have different importance for your business
- Static segmentation — re-run RFM monthly to track movement
- Ignoring the "why" — RFM tells you what's happening, not why; pair with qualitative research
- Over-segmenting — too many segments dilute your ability to act on them

## Related Frameworks
- **Cohort Analysis** — time-based segmentation complementing behavioral RFM
- **Unit Economics** — RFM informs LTV estimation per segment
- **Retention Framework** — RFM segments map to retention strategies
- **Pareto Analysis** — RFM often reveals 80/20 patterns in customer value
