# Go-to-Market Brief

## Purpose
Define the GTM strategy for a product or feature launch — covering target segments, positioning, messaging by persona, distribution channels, competitive differentiation, pricing/packaging, enablement needs, and success metrics. Aligns product, marketing, sales, and CS around a unified market approach.

## Auto-Trigger Patterns
- "GTM strategy for [feature/product]"
- "go-to-market plan for [launch]"
- "positioning for [feature]"
- "messaging for [launch]"
- "how do we take [feature] to market"
- "GTM brief for [product]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product description | Yes | User prompt |
| Target customer segments | Recommended | `context/products/` |
| Competitive landscape | Recommended | `context/products/*/competitors.md` |
| Product positioning | Optional | `context/products/*/overview.md` |
| Pricing context | Optional | User prompt |

## Process
1. **Define target segments** — Who is this for? Primary and secondary segments. Be specific: industry, company size, role, maturity level, current pain.
2. **Craft positioning** — One sentence that captures: for [target], who [need], [product] is a [category] that [key benefit], unlike [alternative], we [key differentiator].
3. **Develop messaging by persona** — Each persona cares about different things. Map: persona → their problem → how this solves it → proof points.
4. **Map distribution channels** — How does this reach the target? Product-led (in-app), sales-led (demos, proposals), marketing-led (content, ads, events), partner-led.
5. **Articulate competitive differentiation** — Why us vs. alternatives? What's the defensible advantage? Be honest about where competitors are strong.
6. **Define pricing/packaging** — Tier placement, pricing rationale, packaging considerations, migration path for existing customers.
7. **Identify enablement needs** — What do sales, CS, and support need to sell and support this effectively?
8. **Set success metrics** — How will GTM success be measured? Adoption, revenue, market share, perception.

## Output Format
```
## Go-to-Market Brief: [Feature/Product]
**Launch Date:** [date]  |  **GTM Owner:** [name]

### Target Segments
| Segment | Description | Size | Priority |
|---------|------------|------|----------|
| Primary | [Who, what they need] | [TAM estimate] | P0 |
| Secondary | [Who, what they need] | [TAM estimate] | P1 |

### Positioning Statement
For [target customer], who [problem/need], [product] is a [category] that [key benefit]. Unlike [competitors/alternatives], [product] [key differentiator].

### Messaging by Persona
| Persona | Their Problem | Our Message | Proof Point |
|---------|-------------|-------------|-------------|
| [Buyer] | [Pain] | [How we solve it] | [Evidence] |
| [User] | [Pain] | [How we solve it] | [Evidence] |
| [Champion] | [Pain] | [How we solve it] | [Evidence] |

### Channel Strategy
| Channel | Approach | Owner | Timeline |
|---------|---------|-------|----------|
| In-product | [Announcement, onboarding] | Product | [Date] |
| Content | [Blog, webinar, docs] | Marketing | [Date] |
| Sales | [Deck, demo, talk track] | Sales Enablement | [Date] |
| Partners | [Co-marketing, integration] | Partnerships | [Date] |

### Competitive Differentiation
| Dimension | Us | Competitor A | Competitor B |
|-----------|-----|-------------|-------------|
| [Key capability] | [Strength] | [Their position] | [Their position] |

### Pricing & Packaging
- **Tier placement:** [Which plan/tier]
- **Rationale:** [Why this pricing]
- **Migration:** [Impact on existing customers]

### Enablement Requirements
- Sales: [What they need]
- CS: [What they need]
- Support: [What they need]

### Success Metrics
| Metric | Target | Timeframe | Measurement |
|--------|--------|-----------|-------------|
| Adoption rate | [X%] | [30/60/90 days] | [How measured] |
```

## Quality Standards
- Positioning is crisp and differentiated — passes the "so what?" test.
- Messaging varies meaningfully by persona — not the same message reworded.
- Channels are prioritized based on where the target audience actually is.
- Success metrics are specific with timeframes and measurement methods.

**Anti-patterns:** Generic positioning ("best in class"), identical messaging for all personas, channel strategy without resource commitment, success metrics without baselines.

## Framework References
- **Positioning framework** — Geoffrey Moore's positioning statement structure.
- **Messaging hierarchy** — Persona-specific value propositions.
- **Channel strategy** — PLG vs. sales-led vs. hybrid distribution models.

## Formatting Guidelines
- Positioning statement in bold standalone block.
- Tables for segments, messaging, channels, and metrics (structured comparison).
- Competitive differentiation in matrix format.
- Success metrics with measurable targets.

## Example
**Positioning:** "For mid-market SaaS companies who struggle with user onboarding completion, ProductX Flows is an in-app guidance platform that increases activation rates by 40% in the first week. Unlike Pendo and WalkMe, Flows uses zero-code conditional logic that adapts to user behavior in real time."
