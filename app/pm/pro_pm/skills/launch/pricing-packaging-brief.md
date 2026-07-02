# Pricing & Packaging Brief

## Purpose
Define pricing and packaging for a new feature or product launch — including tier placement rationale, pricing analysis, competitive comparison, packaging options, migration plan for existing customers, and internal communication. Ensures pricing decisions are strategic, data-informed, and clearly communicated.

## Auto-Trigger Patterns
- "pricing for [new feature]"
- "which tier should [feature] be in"
- "packaging decision for [product]"
- "pricing strategy for [launch]"
- "how to price [feature]"
- "monetization plan for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product description | Yes | User prompt |
| Current pricing model | Recommended | `context/products/` |
| Competitive pricing | Recommended | `context/products/*/competitors.md` |
| Customer willingness-to-pay signals | Optional | User prompt |
| Usage / adoption data | Optional | User prompt |

## Process
1. **Assess feature value** — Who benefits? How much value does it create? Is this a must-have or nice-to-have? Does it drive acquisition, retention, or expansion?
2. **Determine tier placement** — Which plan/tier should include this? Consider: target segment, competitive positioning, upgrade incentive, complexity.
3. **Analyze pricing rationale** — Value-based, competitive-based, or cost-plus? Justify the pricing approach with data.
4. **Compare competitively** — Where do competitors price similar capabilities? Are we premium, parity, or penetration?
5. **Model packaging options** — 2-3 packaging approaches with trade-offs. Consider: bundling, add-on, tier inclusion, usage-based.
6. **Plan migration** — Impact on existing customers. Grandfather clause? Upgrade incentive? Communication approach.
7. **Prepare sales FAQ** — How to discuss pricing with customers. Objection handling for "it's too expensive" and "competitors include it for free."
8. **Project revenue impact** — Estimated impact on ARPU, conversion, retention, and expansion revenue.

## Output Format
```
## Pricing & Packaging: [Feature/Product]
**Decision Owner:** [name]  |  **Status:** Proposed / Approved

### Feature Value Assessment
- **Who benefits:** [Segments]
- **Value created:** [Quantified impact]
- **Revenue lever:** [Acquisition / Retention / Expansion]

### Recommended Tier Placement
**Recommendation:** [Tier name] — [Justification]

| Tier | Included? | Rationale |
|------|----------|-----------|
| Free | ❌ | [Why not] |
| Starter | ❌ | [Why not] |
| Pro | ✅ | [Why here] |
| Enterprise | ✅ | [Why here] |

### Pricing Rationale
- **Approach:** [Value-based / Competitive / Cost-plus]
- **Justification:** [Data supporting the price point]
- **Elasticity estimate:** [Price sensitivity assessment]

### Competitive Comparison
| Competitor | Pricing | Tier Included | Model |
|-----------|---------|--------------|-------|
| [Comp A] | [Price] | [Their tier] | [Included / Add-on / Usage] |
| [Comp B] | [Price] | [Their tier] | [Model] |

### Packaging Options
#### Option A: [Include in tier]
- Pros: [Simplicity, drives upgrades]
- Cons: [Revenue ceiling]
- Revenue impact: [Estimate]

#### Option B: [Add-on pricing]
- Pros: [Revenue maximization]
- Cons: [Friction, complexity]
- Revenue impact: [Estimate]

### Migration Plan
| Customer Segment | Impact | Approach |
|-----------------|--------|---------|
| [Free tier users] | [No access] | [Upgrade incentive messaging] |
| [Current paid users] | [Included / needs upgrade] | [Communication plan] |
| [Enterprise] | [Included] | [CSM notification] |

### Sales FAQ
| Question | Answer |
|----------|--------|
| "Why isn't this free?" | [Value justification] |
| "Competitor X includes it" | [Differentiation response] |

### Revenue Projection
| Metric | Current | Projected | Timeframe |
|--------|---------|-----------|-----------|
| ARPU | $X | $Y | 6 months |
| Conversion (free→paid) | X% | Y% | 6 months |
```

## Quality Standards
- Tier placement is justified by segment targeting and competitive positioning, not arbitrary.
- Revenue projections include assumptions and are clearly labeled as estimates.
- Migration plan addresses every existing customer segment — no surprises.
- Sales FAQ covers the hard questions, not just easy ones.

**Anti-patterns:** Pricing without competitive context, tier placement without strategic rationale, no migration plan, ignoring price sensitivity.

## Framework References
- **Value-based pricing** — Price based on customer value, not cost.
- **Good-Better-Best** — Tiered packaging strategy.

## Formatting Guidelines
- Tier placement table with checkmarks (visual decision).
- Competitive comparison in table (side-by-side).
- Packaging options with pros/cons (decision support).
- Revenue projections with timeframes and assumptions.

## Example
**Tier placement rationale:** "Smart Filters goes in Pro tier ($49/mo) because: (1) The primary beneficiary is the team lead persona who is already on Pro, (2) Competitor A includes similar functionality in their $45/mo plan, (3) It creates a strong upgrade incentive from Free — our data shows filter usage is the #2 reason users hit free-tier limits."
