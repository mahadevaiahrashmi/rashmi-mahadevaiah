# Packaging Optimization

## Purpose
Analyze current product packaging effectiveness and recommend optimizations. Evaluates feature utilization by tier, upgrade triggers, value perception, competitive gaps, and delivers repackaging recommendations with projected revenue and adoption impact.

## Auto-Trigger Patterns
- "Optimize our packaging" / "packaging review"
- "Analyze our current tiers" / "tier optimization"
- "Which features should move between tiers?"
- "Why aren't users upgrading?"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Current tier structure, feature usage data by tier, upgrade/downgrade rates, revenue by tier
- **Optional:** Customer feedback on packaging, competitive packaging updates, churn reasons, NPS by tier
- **Reference:** `context/products/` for competitive packaging benchmarks

## Process
1. **Audit current packaging** — Map every feature to its tier. Identify the original logic for allocation.
2. **Analyze feature utilization** — Which features are heavily used per tier? Which are ignored? Which free features are table stakes vs over-generous?
3. **Identify upgrade triggers** — What causes customers to upgrade? Is it a natural need or a forced paywall? Analyze upgrade funnel conversion.
4. **Assess value perception** — Do customers feel they're getting value at each tier? Survey data, NPS by tier, support ticket patterns.
5. **Find competitive gaps** — What do competitors offer at comparable tiers that we don't? Where do we over-index?
6. **Spot cannibalization** — Are lower tiers too generous, reducing upgrade incentive? Are higher tiers too similar to mid-tier?
7. **Recommend changes** — Feature moves between tiers, new gate mechanisms, tier consolidation or expansion. Model each change.
8. **Project impact** — Revenue impact, conversion impact, churn risk, and competitive positioning change for each recommendation.

## Output Format
```
## Packaging Optimization: [Product]

### Current State Assessment
| Tier | Customers | Revenue | ARPU | Utilization Score |
|------|-----------|---------|------|-------------------|
| Free | [N] | $0 | $0 | [Score] |
| Pro | [N] | $[X] | $[Y] | [Score] |
| Enterprise | [N] | $[X] | $[Y] | [Score] |

### Feature Utilization Analysis
| Feature | Free Usage | Pro Usage | Ent Usage | Recommendation |
|---------|-----------|-----------|-----------|----------------|
| [Feature] | [%] | [%] | [%] | [Keep/Move/Gate] |

### Upgrade Trigger Analysis
- Current primary trigger: [What causes upgrades]
- Conversion rate: [Free→Pro: X%, Pro→Ent: Y%]
- Friction points: [Where users drop off]

### Competitive Gaps
| Feature/Limit | Our Free | Comp Free | Our Pro | Comp Pro |
|---------------|----------|-----------|---------|----------|
| ... | ... | ... | ... | ... |

### Recommendations
1. **[Change 1]:** Move [feature] from [tier] to [tier]
   - Rationale: [Why]
   - Impact: [Revenue/conversion projection]
   - Risk: [Potential downside]

### Projected Impact Summary
| Change | Rev Impact | Conversion Impact | Risk |
|--------|-----------|-------------------|------|
| [Change 1] | +$[X]/yr | +[X]% upgrade rate | [Risk] |
```

## Quality Standards
- Utilization data drives recommendations — not opinions about where features "should" be.
- Upgrade trigger analysis identifies both working and broken triggers.
- Competitive gaps are specific and current — not from outdated analysis.
- Impact projections include ranges, not single-point estimates.
- **Anti-patterns:** Moving features without usage data, optimizing for revenue while destroying adoption, ignoring customer perception, making too many changes at once, no measurement plan.

## Framework References
- Feature-value matrix — usage vs perceived value quadrant
- Conversion funnel analysis — where users convert or drop off
- Competitive packaging benchmarking

## Formatting Guidelines
- Heavy use of tables — this is data-driven analysis.
- Color-code recommendations (move up, move down, gate, keep).
- Include projected impact for each individual change.
- Keep to 3-5 pages with data appendix.

## Example
> **Finding:** Our "Advanced Analytics" feature is in the Enterprise tier but 72% of Pro users say it's a top-3 desired feature. Meanwhile, "Custom Branding" is in Pro but only 8% of Pro users have configured it.
>
> **Recommendation:** Move Advanced Analytics to Pro (drives upgrade from Free, justifies Pro price increase of $10/mo). Move Custom Branding to Enterprise (it's a nice-to-have, not a growth driver). Net impact: +$180K/yr revenue, +4% Free→Pro conversion.
