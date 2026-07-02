# Pricing Strategy

## Purpose
Develop a comprehensive pricing analysis covering pricing model options, value-based pricing rationale, competitive positioning, willingness-to-pay signals, unit economics impact, and a recommended approach. Grounds pricing decisions in customer value and market data rather than cost-plus guesswork.

## Auto-Trigger Patterns
- "Create a pricing strategy" / "pricing analysis"
- "How should we price [product/feature]?"
- "Evaluate pricing models for [product]"
- "Value-based pricing analysis"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/feature to price, target customer segments, competitive pricing data, value proposition
- **Optional:** WTP research data, current pricing (if repricing), unit economics, sales feedback
- **Reference:** Van Westendorp, conjoint analysis, `context/products/` for competitive pricing

## Process
1. **Identify the value metric** — What unit of value does the customer buy? Seats, usage, outcomes, access? The best value metric scales with customer value received.
2. **Map pricing models** — Evaluate: flat-rate, per-seat, usage-based, tiered, freemium, hybrid. Assess each against your value metric and customer behavior.
3. **Analyze willingness to pay** — Use WTP research (Van Westendorp, Gabor-Granger) or proxy signals: competitive pricing, customer interviews, deal data, feature value ranking.
4. **Position competitively** — Where do you sit? Premium, parity, or penetration? Position should match your differentiation strategy.
5. **Model unit economics** — What does each pricing model mean for CAC, LTV, payback, margins? Sensitivity analysis on volume assumptions.
6. **Assess behavioral impact** — How does pricing affect adoption, expansion, churn? Usage-based lowers barriers but adds unpredictability.
7. **Design the recommendation** — Recommended model, price points, and rationale. Include launch approach (grandfather, migration, A/B).
8. **Plan for iteration** — Pricing is never done. Define metrics to watch and triggers to revisit.

## Output Format
```
## Pricing Strategy: [Product/Feature]
**Segment:** [Target customers] | **Competitive Position:** [Premium/Parity/Penetration]

### Value Metric
[What the customer is paying for — and why this metric aligns with value]

### Pricing Models Evaluated
| Model | Description | Pros | Cons | Fit Score |
|-------|-------------|------|------|-----------|
| Flat-rate | ... | ... | ... | [1-5] |
| Usage-based | ... | ... | ... | [1-5] |
| Per-seat | ... | ... | ... | [1-5] |

### Willingness to Pay Analysis
[WTP data, competitive benchmarks, customer signals]
- Acceptable range: $[X] - $[Y]
- Optimal price point: $[Z]
- Too-cheap threshold: $[A] (below this signals low quality)

### Competitive Positioning
[Where we sit relative to competitors — with specific comp pricing]

### Unit Economics Impact
| Metric | Current | Proposed | Δ |
|--------|---------|----------|---|
| CAC | ... | ... | ... |
| LTV | ... | ... | ... |
| Payback | ... | ... | ... |

### Recommendation
**Model:** [Recommended pricing model]
**Price point:** [Specific pricing]
**Rationale:** [Why this model and price — tied to value and strategy]

### Launch & Iteration Plan
[Migration approach, metrics to watch, revisit triggers]
```

## Quality Standards
- Value metric clearly aligns with how customers experience value — not just what's easy to meter.
- WTP analysis uses data, not guesses. Even proxy data (competitive pricing, interview quotes) is better than nothing.
- Unit economics are modeled with sensitivity analysis — not just best-case assumptions.
- Competitive positioning is specific with named competitors and their pricing.
- **Anti-patterns:** Cost-plus pricing ignoring value, pricing without WTP data, ignoring behavioral impact on adoption, setting and forgetting pricing, pricing that penalizes growth.

## Framework References
- Van Westendorp Price Sensitivity Meter — acceptable price range
- Gabor-Granger — demand curve estimation
- Conjoint analysis — feature value and price trade-offs
- Value-based pricing — price to value delivered, not cost to produce

## Formatting Guidelines
- Tables for model comparison and unit economics.
- Include specific dollar amounts — vague pricing analysis is useless.
- Visualize WTP range if data supports it.
- Keep to 3-5 pages with financial model appendix.

## Example
> **Value Metric:** API calls — our power users make 100x more calls than casual users, and value scales linearly with usage. Per-seat would penalize our best customers.
>
> **Recommendation:** Usage-based at $0.002/call with a 10K free tier and volume discounts at 1M+. This balances developer adoption (free tier removes friction) with monetization of enterprise value (high-volume users pay proportionally).
>
> **WTP Signal:** 78% of surveyed developers said they'd pay $0.001-$0.005/call. Our sweet spot is at $0.002 — above the "too cheap" threshold, below the "too expensive" ceiling.
