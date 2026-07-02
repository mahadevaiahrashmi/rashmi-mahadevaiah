# Unit Economics

## What It Is
Unit Economics measures the direct revenues and costs associated with a single "unit" of your business model (typically a customer or transaction). The core metrics — Customer Acquisition Cost (CAC), Lifetime Value (LTV), LTV:CAC ratio, and payback period — determine whether your business model is sustainable and scalable. Good unit economics mean each new customer adds value; bad means you're losing money at scale.

## When to Use
- Evaluating business model viability and sustainability
- Making investment decisions (how much to spend on acquisition)
- Fundraising and investor communications
- Comparing different customer segments or channels by profitability

## When NOT to Use
- Pre-revenue products — you need actual data to calculate
- Very early-stage with <100 customers — sample is too small for reliable LTV estimates
- As the only lens — unit economics misses strategic value (brand, network effects, market position)

## How to Apply
1. **Calculate CAC**: Total sales + marketing spend / Number of new customers acquired
2. **Calculate LTV**: Average revenue per customer × Gross margin × Average customer lifetime
   - Or: LTV = ARPU × Gross Margin / Churn Rate (for subscription businesses)
3. **Calculate LTV:CAC ratio**: LTV / CAC. Target: 3:1 or higher
4. **Calculate Payback Period**: CAC / (ARPU × Gross Margin). How many months to recover CAC?
5. **Calculate Contribution Margin**: Revenue per unit minus all variable costs per unit
6. **Segment**: Calculate per channel, per customer segment, per cohort
7. **Benchmark and act**: LTV:CAC < 1 = losing money. 1–3 = improving but risky. 3+ = healthy. 5+ = potentially under-investing in growth

## Template
| Metric | Formula | Value | Benchmark |
|--------|---------|-------|-----------|
| CAC | Sales & Marketing / New Customers | $ | Varies by industry |
| ARPU (monthly) | MRR / Customers | $ | |
| Gross Margin | (Revenue - COGS) / Revenue | % | >70% for SaaS |
| Churn Rate (monthly) | Churned / Total Customers | % | <3% for B2B SaaS |
| LTV | ARPU × Gross Margin / Churn | $ | |
| LTV:CAC | LTV / CAC | x | >3x target |
| Payback Period | CAC / (ARPU × GM) | months | <12 months |

## Example
**Product**: B2B SaaS analytics tool
- CAC: $3,000 (blended across all channels)
- ARPU: $500/month
- Gross Margin: 80%
- Monthly Churn: 2.5%
- LTV: $500 × 0.80 / 0.025 = **$16,000**
- LTV:CAC: $16,000 / $3,000 = **5.3x** (healthy)
- Payback: $3,000 / ($500 × 0.80) = **7.5 months** (good)
- **Insight**: Paid search CAC is $5,000 (LTV:CAC = 3.2x), organic is $800 (LTV:CAC = 20x). Invest more in organic, accept paid at current levels

## Key Pitfalls
- Using blended CAC when channel-level analysis would reveal problems
- Overly optimistic LTV projections — use actual retention data, not projections
- Ignoring variable costs in COGS — hosting, support, and payment processing eat into margins
- Not accounting for expansion revenue — NRR > 100% significantly increases LTV
- Comparing across different business models without normalization

## Related Frameworks
- **Pirate Metrics (AARRR)** — the lifecycle that drives unit economics inputs
- **Cohort Analysis** — essential for accurate LTV and retention measurement
- **Expansion Revenue** — impacts LTV through net revenue retention
- **Cost of Delay** — complements with the time-value dimension
