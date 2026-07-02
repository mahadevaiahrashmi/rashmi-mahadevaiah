# Usage-Based Pricing

## What It Is
Usage-Based Pricing (UBP) charges customers based on consumption — API calls, data processed, messages sent, compute hours, or other metered units. It aligns cost with value received: use more, pay more. Increasingly popular in cloud infrastructure, AI/ML, and API-first products. Can be pure UBP or hybrid (base subscription + usage).

## When to Use
- Products where value directly correlates with usage volume
- API and infrastructure products where usage varies dramatically across customers
- When you want pricing that scales with customer success (use more = getting more value)
- Reducing friction for new customer adoption (start small, grow naturally)

## When NOT to Use
- Products where usage doesn't correlate with value (a note-taking app used daily isn't worth more)
- When customers need budget predictability (enterprise procurement teams hate surprise bills)
- Products with high fixed costs and low variable costs — flat pricing may be simpler

## How to Apply
1. **Choose the value metric**: What unit best represents value delivered? (API calls, data processed, users, messages, storage, events)
2. **Design the model**:
   - **Pure UBP**: Pay only for what you use (AWS, Twilio)
   - **Hybrid**: Base subscription + usage on top (Snowflake, HubSpot)
   - **Tiered usage**: Different per-unit rates at volume tiers (cheaper at scale)
3. **Set pricing**: Research willingness to pay per unit. Consider committed-use discounts
4. **Build transparency**: Real-time usage dashboards, spend alerts, cost estimation tools
5. **Manage predictability**: Offer committed-use plans, spending caps, budget alerts
6. **Monitor**: Revenue predictability, bill shock complaints, expansion revenue from usage growth

## Template
| Element | Design |
|---------|--------|
| Value metric | |
| Model type | Pure UBP / Hybrid / Tiered |
| Per-unit price | $ |
| Volume tiers | |
| Committed-use discount | |
| Base subscription (if hybrid) | $ |
| Transparency tools | Dashboard / Alerts / Calculator |

## Example
**Product**: AI document processing API
- **Metric**: Pages processed per month
- **Model**: Tiered usage with a base fee
- **Pricing**: $49/month base (includes 1,000 pages) + $0.03/page for 1K–10K + $0.02/page for 10K–100K + $0.01/page for 100K+
- **Committed plan**: 12-month commitment at 20% discount
- **Transparency**: Real-time usage dashboard, email alert at 80% of monthly average
- **Result**: Average customer starts at $49/month, grows to $250/month within 6 months. NRR: 140%

## Key Pitfalls
- "Bill shock" — customers getting surprised by large invoices. Build alerts and caps
- Choosing a metric that doesn't align with value — if customers game the metric, it's wrong
- Revenue unpredictability — pure UBP makes forecasting hard; hybrid models help
- Penalizing growth — if prices don't decrease with volume, customers feel punished for success

## Related Frameworks
- **Per-Seat Pricing** — alternative model based on user count
- **Tiered Packaging** — combining usage-based with tier-based features
- **Value-Based Pricing** — the principle behind choosing the right usage metric
- **Expansion Revenue** — UBP is a natural driver of expansion revenue
