# Monetization Strategy

## Purpose
Determine the right monetization approach for a new feature or capability: include in existing tier, offer as add-on, usage-based pricing, or keep free. Evaluates trade-offs between revenue capture, adoption velocity, competitive positioning, and customer experience.

## Auto-Trigger Patterns
- "How should we monetize [feature]?" / "monetization strategy"
- "Should [feature] be free or paid?"
- "Add-on vs include in tier for [feature]"
- "Pricing for new feature [name]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature description, target users, strategic role of feature (growth driver vs revenue driver), competitive landscape
- **Optional:** Usage projections, WTP signals, sales team feedback, customer research
- **Reference:** `context/initiatives/` for strategic context, `context/products/` for competitive pricing

## Process
1. **Classify the feature's strategic role:**
   - **Growth driver** — drives adoption, activation, or retention. Lean toward free/included.
   - **Revenue driver** — high perceived value, willing to pay. Lean toward paid/add-on.
   - **Table stakes** — expected by market. Must include in base tier.
   - **Differentiator** — unique capability. Premium positioning opportunity.
2. **Evaluate monetization models:**
   - **Include in tier** — increases tier value, simpler packaging, no incremental revenue.
   - **Add-on** — incremental revenue, but adds packaging complexity and sales friction.
   - **Usage-based** — aligns cost with value, but adds unpredictability for customers.
   - **Free** — maximizes adoption, no direct revenue, potential competitive moat.
3. **Assess trade-offs** — Revenue potential vs adoption impact vs competitive positioning vs sales complexity.
4. **Model scenarios** — Revenue under each model with adoption rate assumptions.
5. **Consider second-order effects** — Does free access create data network effects? Does paid access enable sales-led upsell?
6. **Check competitive positioning** — What do competitors charge for equivalent? Where's the opportunity to differentiate?
7. **Recommend with rationale** — Clear model choice with reasoning tied to strategic priorities.

## Output Format
```
## Monetization Strategy: [Feature Name]
**Strategic Role:** [Growth/Revenue/Table Stakes/Differentiator]

### Feature Overview
[Brief description — what it does, who it's for, why it matters]

### Monetization Options
| Model | Revenue Estimate | Adoption Impact | Complexity | Fit |
|-------|-----------------|-----------------|------------|-----|
| Include in Pro | $0 incremental | High adoption | Low | [Score] |
| Add-on ($X/mo) | $[Y]/yr | Medium adoption | Medium | [Score] |
| Usage-based | $[Y]/yr | Variable | High | [Score] |
| Free | $0 | Maximum adoption | Low | [Score] |

### Trade-off Analysis
- **Revenue vs Adoption:** [Analysis]
- **Competitive Position:** [How each option positions us]
- **Sales Enablement:** [Impact on sales process]
- **Customer Impact:** [How customers experience each model]

### Recommendation
**Model:** [Recommended approach]
**Rationale:** [Why — connected to strategy, not just revenue]
**Implementation:** [How to roll this out]
```

## Quality Standards
- Strategic role is explicitly identified before evaluating monetization models — the role drives the model, not the other way around.
- Trade-off analysis is honest — every model has downsides.
- Second-order effects are considered — adoption network effects, competitive moat, sales motion impact.
- Revenue estimates include adoption rate sensitivity — not just "if everyone pays."
- **Anti-patterns:** Defaulting to "make it paid" without strategic analysis, ignoring adoption impact, not considering competitive response, treating all features the same, no measurement plan.

## Framework References
- Feature monetization matrix — strategic role × value perception
- PLG monetization principles — free drives growth, paid captures value
- Competitive pricing analysis

## Formatting Guidelines
- Comparison table for monetization options.
- Include revenue estimates with adoption assumptions.
- Bold the recommendation and rationale.
- Keep to 2-3 pages.

## Example
> **Feature:** AI-powered search across workspace
> **Strategic Role:** Differentiator → Revenue driver
>
> **Recommendation: Add-on at $10/user/mo** — This feature has high perceived value (ranked #1 in customer survey), competitors don't have an equivalent, and early beta users show 3x higher engagement. As an add-on, it generates $360K/yr at projected 30% adoption while preserving the core tier's price point. Include a limited version (10 searches/day) in Pro to drive awareness and upgrade.
