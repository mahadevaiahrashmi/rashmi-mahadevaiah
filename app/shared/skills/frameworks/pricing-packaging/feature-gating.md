# Feature Gating

## What It Is
Feature Gating is the practice of deciding which features go behind the paywall and which remain free or in lower tiers. It's one of the most consequential pricing decisions because it directly determines conversion pressure, perceived value, and customer experience. The right gate creates a natural "pull" toward upgrading; the wrong gate either kills conversion or frustrates users.

## When to Use
- Designing tiered pricing for a product with many features
- Deciding what goes in the free tier vs. paid tiers (freemium boundary)
- Repackaging an existing product after adding new features
- When conversion rates are low and you suspect the gate is in the wrong place

## When NOT to Use
- Usage-based pricing where all features are available and metering is the gate
- Single-tier products with no need for packaging decisions
- When you don't have data on feature usage and value perception — research first

## How to Apply
1. **Map all features** and categorize by four criteria:
   - **Value**: How much value does this feature deliver to users? (H/M/L)
   - **Cost**: How much does it cost you to provide? (H/M/L)
   - **Competitive**: Is this table-stakes or a differentiator? (Table-stakes/Differentiator)
   - **Strategic**: Does keeping it free drive adoption, virality, or data collection?
2. **Apply gating rules**:
   - **Free/Starter**: Table-stakes features + features that drive adoption/virality. Must deliver real value
   - **Mid-tier**: High-value differentiating features that growing teams need. This is where most conversion happens
   - **Top-tier**: Features for enterprise (compliance, admin, security) + premium features with high cost to serve
3. **Test the "upgrade moment"**: Users should naturally encounter the gate when they've received enough value to justify paying
4. **Avoid anti-patterns**: Don't gate features that break the core experience. Don't make the free tier useless

## Template
| Feature | Value | Cost | Competitive | Strategic | Tier |
|---------|-------|------|-------------|-----------|------|
| | H/M/L | H/M/L | Table/Diff. | Adoption/Virality/Data/None | Free/Mid/Top |

**Gating Philosophy**: ___

## Example
**Product**: Team communication tool
| Feature | Value | Competitive | Tier | Rationale |
|---------|-------|------------|------|-----------|
| Direct messages | High | Table-stakes | Free | Core experience, drives adoption |
| Channels | High | Table-stakes | Free | Core experience, creates network effect |
| File sharing | Medium | Table-stakes | Free | Enables collaboration (viral) |
| Search history | High | Differentiator | Mid | Users feel pain at free limit (90 days) |
| SSO | High | Table-stakes for enterprise | Top | Enterprise purchase requirement |
| Analytics | Medium | Differentiator | Mid | Power users and managers want it |
| Custom retention | Low | Differentiator | Top | Compliance requirement for regulated industries |

## Key Pitfalls
- Gating the core value proposition — users must experience enough value to justify paying
- Artificial gates that feel punitive (e.g., no dark mode unless you pay) — gates should reflect genuine value tiers
- Not testing gate placement — small changes in where the gate sits can dramatically affect conversion
- Too many gates creating a confusing upgrade experience — each tier should have 1–2 clear differentiators

## Related Frameworks
- **Tiered Packaging** — the tier structure that feature gating populates
- **Freemium Model** — the free/paid boundary is a specific gating decision
- **Kano Model** — categorizes features by satisfaction impact, informing what to gate
- **Conjoint Analysis** — quantifies willingness to pay for specific features
