# Platform Pricing

## What It Is
Platform Pricing covers pricing strategies for APIs, developer platforms, and infrastructure products. These products serve developers and businesses as building blocks, requiring pricing that scales with customer value, encourages adoption, and doesn't penalize growth. Common models include request-based, compute-based, seat-based, revenue-share, and hybrid approaches.

## When to Use
- Pricing API products, developer tools, or infrastructure services
- When your product is consumed programmatically rather than through a UI
- Marketplace or platform businesses where multiple pricing dimensions exist
- When customers' usage patterns vary by orders of magnitude

## When NOT to Use
- End-user SaaS products where per-seat or tier-based pricing is simpler
- Products without measurable API/platform consumption
- When your platform is in early beta and pricing experimentation would slow adoption

## How to Apply
1. **Choose the value metric**: What best represents value consumed?
   - API calls / requests
   - Compute time / processing units
   - Data processed / stored
   - Active users (of your customer's product)
   - Revenue generated through your platform
2. **Design the model**:
   - **Request-based**: Per API call with tiered discounts (Twilio, Stripe)
   - **Compute-based**: Per unit of processing (AWS Lambda, Vercel)
   - **Seat-based**: Per developer seat accessing the platform (GitHub)
   - **Revenue share**: Percentage of GMV or revenue (Stripe's 2.9%, app stores' 15–30%)
   - **Hybrid**: Base platform fee + usage (most common for mature platforms)
3. **Set the free tier**: Generous enough for developers to build and test. Critical for adoption
4. **Design for predictability**: Offer committed-use plans, spending caps, and cost calculators
5. **Provide transparency**: Real-time usage dashboards, billing alerts, cost estimation APIs

## Template
| Element | Design |
|---------|--------|
| Value metric | |
| Pricing model | Request / Compute / Seat / Revenue share / Hybrid |
| Free tier | ___ units/month free |
| Pricing tiers | |
| Committed discount | ___% for annual commitment |
| Predictability tools | |

## Example
**Product**: Communication API platform (like Twilio)
- **Metric**: Messages sent + phone minutes used
- **Model**: Request-based with volume tiers
- **Free**: 1,000 messages/month for development
- **Pricing**: SMS $0.0075/msg (US), Voice $0.013/min. Volume discounts at 100K/month
- **Committed**: 30% discount for $10K+ monthly commitment
- **Transparency**: Real-time dashboard, usage alerts, cost estimator for planning

## Key Pitfalls
- Pricing that penalizes customer success — costs shouldn't skyrocket at the moment customers succeed
- No free tier for developers — developers evaluate before buying; no free tier = no evaluation
- Unpredictable billing — surprise bills destroy trust; provide tools for cost management
- Too many pricing dimensions — keep it to 1–2 metrics customers can understand and predict
- Ignoring developer experience in pricing pages — developers need docs, calculators, and transparency

## Related Frameworks
- **Usage-Based Pricing** — platform pricing is a specific application of UBP
- **Value-Based Pricing** — informs what value metric to use
- **Network Effects** — platform pricing should encourage network growth
- **Freemium Model** — the free tier for platforms follows freemium principles
