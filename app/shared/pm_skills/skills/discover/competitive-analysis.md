# Competitive Analysis

## Purpose
Produce a deep-dive analysis of one or more competitors — positioning, capabilities, pricing, GTM motion, and strategic direction — so the product team can make informed differentiation and investment decisions. Turns scattered competitive intel into a structured, actionable profile.

## Auto-Trigger Patterns
- "analyze competitor [name]"
- "competitive analysis for [market/product]"
- "how does [competitor] compare to us"
- "competitive landscape"
- "what is [competitor] doing"
- "Porter's Five Forces for [market]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Competitor name(s) | Yes | User prompt |
| Our product positioning | Recommended | `context/products/*/overview.md` |
| Market context | Optional | `context/products/landscape.md` |
| Specific focus areas | Optional | User prompt |
| Known competitive intel | Optional | `context/products/*/competitors.md` |

## Process
1. **Define the competitive frame** — Clarify: direct competitors (same job, same approach), indirect (same job, different approach), or potential (adjacent players who could enter).
2. **Build competitor profiles** — For each competitor, map: founding story, funding, target customer, positioning statement, core value proposition, key differentiators.
3. **Feature comparison** — Create a feature matrix comparing capabilities across the most strategically important dimensions. Use: ✅ (strong), ⚠️ (partial), ❌ (absent).
4. **Pricing analysis** — Document pricing model, tiers, key packaging decisions, free tier availability, and enterprise pricing signals.
5. **GTM strategy** — Analyze: sales motion (PLG vs. sales-led vs. hybrid), channel strategy, content strategy, partnership ecosystem.
6. **SWOT per competitor** — Strengths, weaknesses, opportunities, threats — grounded in evidence, not opinion.
7. **Porter's Five Forces** — Assess the broader competitive dynamics: buyer power, supplier power, threat of new entrants, threat of substitutes, competitive rivalry.
8. **Strategic implications** — Translate analysis into: where we should differentiate, where we should match, where we should ignore, and where we're vulnerable.

## Output Format
```
## Competitive Analysis: [Market / Focus Area]

### Competitive Landscape Overview
[2-3 sentence market framing]

### Competitor Profiles
#### [Competitor A]
| Dimension | Detail |
|-----------|--------|
| Founded | ... |
| Funding / Revenue | ... |
| Target customer | ... |
| Positioning | ... |
| Key differentiator | ... |

### Feature Matrix
| Capability | Us | Comp A | Comp B | Comp C |
|-----------|-----|--------|--------|--------|
| ... | ✅ | ⚠️ | ❌ | ✅ |

### Pricing Comparison
| | Us | Comp A | Comp B |
|---|---|--------|--------|
| Entry price | ... | ... | ... |
| Enterprise | ... | ... | ... |
| Model | ... | ... | ... |

### SWOT: [Competitor A]
| Strengths | Weaknesses |
|-----------|------------|
| ... | ... |
| **Opportunities** | **Threats** |
| ... | ... |

### Porter's Five Forces
| Force | Intensity | Rationale |
|-------|-----------|-----------|
| Buyer power | ... | ... |

### Strategic Implications
1. **Differentiate on:** ...
2. **Match parity on:** ...
3. **Monitor:** ...
4. **Vulnerability:** ...
```

## Quality Standards
- Analysis is evidence-based, not opinion-based. Cite sources where possible.
- Feature matrix focuses on strategically important capabilities, not exhaustive lists.
- SWOT entries are specific and actionable, not generic.
- Implications are tied directly to product decisions.
- Acknowledges information gaps and confidence levels.

**Anti-patterns:** Dismissing competitors, cherry-picking favorable comparisons, feature-count comparisons without strategic context, outdated information presented as current.

## Framework References
- **Porter's Five Forces** — Industry-level competitive dynamics analysis.
- **SWOT Analysis** — Competitor-level strengths, weaknesses, opportunities, threats.
- **Competitive Positioning** — Where competitors sit in the value/price landscape.

## Formatting Guidelines
- Tables for feature matrices and comparisons (scannable at a glance).
- SWOT in 2×2 grid format.
- Separate profile sections per competitor with consistent structure.
- Bold the strategic implications — these are the actionable takeaways.

## Example
**Scenario:** Competitive analysis of the product analytics market.

**Strategic implication:** "Competitor A dominates self-serve analytics for PLG companies but has weak enterprise permissioning. Our opportunity is to own the 'enterprise-grade analytics with PLG simplicity' position — matching their ease of use while adding governance controls they can't."
