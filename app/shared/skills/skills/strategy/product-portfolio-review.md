# Product Portfolio Review

## Purpose
Conduct a multi-product portfolio analysis evaluating product health, resource allocation efficiency, portfolio gaps, cannibalization risks, cross-sell opportunities, and sunset candidates. Uses structured frameworks to optimize the portfolio for strategic coherence and financial health.

## Auto-Trigger Patterns
- "Review our product portfolio" / "portfolio analysis"
- "Which products should we invest in / sunset?"
- "Product portfolio strategy" / "portfolio optimization"
- "Resource allocation across products"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Portfolio of products/features with revenue, growth, market position, and resource allocation data
- **Optional:** Customer segment mapping, cross-sell data, competitive positioning per product, team allocation
- **Reference:** BCG Matrix, `context/initiatives/` for product health data

## Process
1. **Inventory the portfolio** — List all products/major features with: revenue, growth rate, market share, resource allocation, customer count.
2. **Classify using BCG Matrix:**
   - **Stars:** High growth, high share — invest to maintain leadership.
   - **Cash Cows:** Low growth, high share — maximize profitability, fund other products.
   - **Question Marks:** High growth, low share — invest selectively or exit.
   - **Dogs:** Low growth, low share — harvest or divest.
3. **Assess product health** — For each product: PMF strength, NPS, retention, competitive position, technical health.
4. **Analyze resource allocation** — Are resources aligned with strategic priority? Are cash cows over-invested? Are stars under-invested?
5. **Identify portfolio gaps** — What capabilities are missing? What customer needs are unmet? Where are competitors stronger?
6. **Assess cannibalization** — Are products competing for the same customers? Is a new product eating an old one's revenue?
7. **Find cross-sell opportunities** — Which products can be sold together? Which customer segments use multiple products?
8. **Recommend actions** — Invest, maintain, harvest, or sunset for each product. Resource reallocation recommendations.

## Output Format
```
## Product Portfolio Review
**Date:** [Date] | **Portfolio Size:** [N products]

### Portfolio Overview
| Product | Revenue | Growth | Market Share | Resources | BCG |
|---------|---------|--------|-------------|-----------|-----|
| [Prod A] | $[X] | [%] | [%] | [FTEs] | Star |
| [Prod B] | $[X] | [%] | [%] | [FTEs] | Cash Cow |
| [Prod C] | $[X] | [%] | [%] | [FTEs] | Question Mark |

### Product Health Scorecard
| Product | PMF | NPS | Retention | Tech Health | Overall |
|---------|-----|-----|-----------|-------------|---------|
| ... | [1-5] | [Score] | [%] | [1-5] | 🟢/🟡/🔴 |

### Resource Allocation Assessment
[Are resources aligned with strategic priority? Over/under-invested areas]

### Portfolio Gaps
[Missing capabilities, unmet customer needs, competitive blind spots]

### Cannibalization Analysis
[Products competing for same customers — with evidence]

### Cross-Sell Opportunities
| Combination | Customer Overlap | Revenue Potential | Effort |
|-------------|-----------------|-------------------|--------|
| Prod A + B | [%] | $[X] | [Level] |

### Recommendations
| Product | Action | Rationale | Resource Change |
|---------|--------|-----------|----------------|
| [Prod A] | Invest | Star — accelerate growth | +3 FTEs |
| [Prod B] | Maintain | Cash Cow — optimize margins | — |
| [Prod C] | Sunset | Dog — drain on resources | -4 FTEs |
```

## Quality Standards
- BCG classification uses actual data (growth rate, market share), not intuition.
- Resource allocation analysis shows misalignment between strategic priority and investment.
- Cannibalization is assessed with data — revenue movement, customer overlap, usage patterns.
- Sunset recommendations include transition plans, not just "stop investing."
- **Anti-patterns:** Spreading resources equally across all products, keeping dogs alive due to sunk cost, ignoring cannibalization, no portfolio-level view (evaluating products in isolation).

## Framework References
- BCG Growth-Share Matrix — portfolio classification
- GE/McKinsey Nine-Box — industry attractiveness × competitive strength
- Portfolio strategy — invest, maintain, harvest, divest

## Formatting Guidelines
- Overview table showing all products side-by-side.
- Health scorecard with RAG indicators.
- Recommendations table with clear actions and resource changes.
- Keep to 4-5 pages with product-level appendices.

## Example
> **Key Finding:** Product C (legacy analytics) consumes 22% of engineering resources but generates only 8% of revenue with -3% growth. Product A (API platform) generates 35% of revenue growing at 42% but has only 18% of engineering resources.
>
> **Recommendation:** Shift 4 engineers from Product C to Product A. Begin Product C sunset plan (see sunset-plan skill). Product A's growth trajectory justifies 2x its current investment — our modeling shows this could accelerate growth to 55%.
