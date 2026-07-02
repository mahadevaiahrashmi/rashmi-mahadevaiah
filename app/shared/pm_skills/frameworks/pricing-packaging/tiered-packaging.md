# Tiered Packaging (Good/Better/Best)

## What It Is
Tiered Packaging structures your product into 2–4 tiers (commonly Good/Better/Best or Starter/Pro/Enterprise) with increasing features and prices. Each tier targets a different customer segment and willingness to pay. The middle tier typically captures the most revenue (the "Goldilocks" effect). Price anchoring from the top tier makes the middle feel like good value.

## When to Use
- When customers have varying needs and budgets across segments
- Designing a pricing page that converts across SMB, mid-market, and enterprise
- When you need clear upgrade paths to drive expansion revenue
- Any SaaS product with features that naturally tier by sophistication

## When NOT to Use
- Very simple products with one natural price point
- API/infrastructure products where usage-based pricing is more natural
- When you can't clearly differentiate what goes in each tier (artificial bundling)

## How to Apply
1. **Define segments**: Who are the 2–4 customer types? What do they value?
2. **Allocate features by tier**: Use conjoint data or these principles:
   - **Starter**: Core value. Enough to be useful. Target: individuals and small teams
   - **Pro/Growth**: Power features. Collaboration. Target: growing teams
   - **Enterprise**: Security, compliance, admin, custom. Target: large organizations
3. **Price with anchoring**: The top tier makes the middle tier look like great value
4. **Name tiers** to reflect the customer, not the feature set (Team, Business, Enterprise — not Basic, Standard, Premium)
5. **Default to the middle**: Design the pricing page to highlight the recommended tier
6. **Create clear upgrade triggers**: Features that users encounter as they grow

## Template
| | Starter | Pro (recommended) | Enterprise |
|--|---------|-------------------|------------|
| Target | | | |
| Price | $/mo | $/mo | Custom |
| Feature 1 | ✓ | ✓ | ✓ |
| Feature 2 | - | ✓ | ✓ |
| Feature 3 | - | - | ✓ |
| Support | Email | Priority | Dedicated |
| **Upgrade Trigger** | | | |

## Example
**Product**: Project management SaaS
| | Free | Team ($10/user) | Business ($20/user) | Enterprise (custom) |
|--|------|----------------|---------------------|---------------------|
| Projects | 3 | Unlimited | Unlimited | Unlimited |
| Users | 5 | Unlimited | Unlimited | Unlimited |
| Automations | - | 50/month | Unlimited | Unlimited + custom |
| SSO | - | - | ✓ | ✓ |
| Audit logs | - | - | - | ✓ |
| SLA | - | - | 99.9% | 99.99% |
| Support | Community | Email | Priority | Dedicated CSM |

**Upgrade triggers**: Team → Business: when teams hit automation limits or need SSO. Business → Enterprise: when compliance requires audit logs.

## Key Pitfalls
- Too many tiers (>4) — creates decision paralysis
- Feature overlap that makes tiers indistinguishable — each tier needs a clear differentiator
- Starter tier too generous — no reason to upgrade
- Enterprise tier that's just "contact sales" with no indication of value — show some pricing and features
- Not testing — A/B test tier boundaries, pricing, and feature allocation

## Related Frameworks
- **Feature Gating** — deciding which features go in which tier
- **Price Anchoring** — the psychology behind tier pricing
- **Freemium Model** — often the "Starter" tier is free
- **Conjoint Analysis** — data for optimal feature allocation across tiers
