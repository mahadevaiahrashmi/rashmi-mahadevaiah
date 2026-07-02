# Packaging Strategy

## Purpose
Design a tiered packaging structure including feature allocation logic, value gates, upgrade mechanics, free/trial strategy, and conversion optimization. Maps customer segments to tiers and analyzes competitive packaging to ensure differentiation and growth alignment.

## Auto-Trigger Patterns
- "Design our packaging" / "packaging strategy"
- "How should we tier our product?"
- "Free vs paid feature allocation"
- "Create pricing tiers for [product]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature set, customer segments, competitive packaging, growth model (PLG/SLG)
- **Optional:** Current packaging (if redesigning), feature usage data, conversion data, churn analysis
- **Reference:** `context/products/` for competitive packaging, growth model documentation

## Process
1. **Segment customers** — Define 3-4 distinct segments by size, need, and willingness to pay. Each tier should map to a segment.
2. **Rank features by value** — Survey, usage data, or qualitative assessment. Separate: table-stakes (every tier), differentiators (upgrade triggers), and premium (enterprise-only).
3. **Design value gates** — What triggers an upgrade? Usage limits, feature access, collaboration needs, support levels. Gates should feel natural, not punitive.
4. **Allocate features to tiers** — Free/trial gets enough to experience value. Mid-tier solves the core job. Top tier adds scale, control, and support.
5. **Design free/trial strategy** — Free forever (feature-limited), free trial (time-limited), or freemium (usage-limited). Choose based on growth model.
6. **Map upgrade mechanics** — What's the upgrade experience? Self-serve or sales-assisted? Seamless or requires migration?
7. **Analyze competitive packaging** — What do competitors include at each tier? Where can you differentiate?
8. **Optimize for conversion** — Design the free-to-paid journey. Remove friction, create natural "aha → paywall" moments.

## Output Format
```
## Packaging Strategy: [Product]

### Customer Segment → Tier Mapping
| Segment | Profile | Tier | Price |
|---------|---------|------|-------|
| [Segment 1] | [Description] | Free/Starter | $0 |
| [Segment 2] | [Description] | Pro | $X/mo |
| [Segment 3] | [Description] | Enterprise | Custom |

### Feature Allocation
| Feature | Free | Pro | Enterprise | Gate Type |
|---------|------|-----|------------|-----------|
| [Feature 1] | ✅ | ✅ | ✅ | Table stakes |
| [Feature 2] | Limited | ✅ | ✅ | Usage gate |
| [Feature 3] | ❌ | ✅ | ✅ | Value gate |
| [Feature 4] | ❌ | ❌ | ✅ | Premium |

### Value Gates (Upgrade Triggers)
- **Free → Pro:** [What triggers upgrade — natural growth moment]
- **Pro → Enterprise:** [What triggers upgrade]

### Free/Trial Strategy
[Model chosen and rationale — freemium, trial, or hybrid]

### Competitive Packaging Comparison
| Feature/Limit | Us (Free) | Comp A (Free) | Us (Pro) | Comp A (Pro) |
|---------------|-----------|---------------|----------|--------------|
| ... | ... | ... | ... | ... |

### Conversion Optimization
[Key moments in free-to-paid journey, friction points, optimization plan]
```

## Quality Standards
- Every tier maps to a real customer segment with distinct needs and willingness to pay.
- Upgrade triggers feel like natural growth moments, not artificial paywalls.
- Free tier provides enough value to demonstrate the product — not so much that there's no reason to upgrade.
- Competitive comparison is specific with named competitors and their tier structures.
- **Anti-patterns:** Too many tiers (>4 causes confusion), gates that feel punitive, free tier that's either too generous or too crippled, features in wrong tiers (premium features that should be table stakes), no clear upgrade trigger.

## Framework References
- Value-based feature allocation — features priced to value, not cost
- PLG packaging principles — land with value, expand with need
- Competitive packaging analysis — differentiate on packaging, not just features

## Formatting Guidelines
- Feature allocation table is the centerpiece — make it comprehensive and scannable.
- Use ✅/❌/Limited for quick visual scanning.
- Include a competitive comparison table.
- Keep to 3-4 pages with appendix for full feature list.

## Example
> **Free → Pro trigger:** When a team adds their 4th member. Free supports 3 seats — enough to try the product with a small team, but real team collaboration requires Pro. This is a natural growth moment, not an artificial limit.
>
> **Competitive differentiation:** Competitor A gates API access behind their $99/mo tier. We include API in Free — this is our PLG wedge. Developers start free with the API, build integrations, and their companies upgrade to Pro for team features.
