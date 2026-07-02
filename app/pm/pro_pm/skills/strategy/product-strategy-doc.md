# Product Strategy Document

## Purpose
Create a comprehensive product strategy document covering market context, customer insights, competitive landscape, strategic choices (where to play, how to win), product vision, strategic pillars, key bets, success criteria, and resource implications. This is the canonical artifact that aligns the organization on product direction.

## Auto-Trigger Patterns
- "Write a product strategy" / "product strategy document"
- "Create a strategy doc for [product/initiative]"
- "Define our product strategy"
- "Where to play, how to win for [product]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Market/domain context, customer insights or research, competitive landscape data, organizational constraints
- **Optional:** Existing vision statements, prior strategies, financial targets, technology constraints
- **Reference:** `context/products/` for market data, `context/initiatives/` for current initiatives, frameworks: Porter, Wardley, JTBD

## Process
1. **Establish market context** — Market size, growth rate, trends, regulatory dynamics. Use Porter's Five Forces to assess industry attractiveness.
2. **Synthesize customer insights** — Jobs to Be Done, unmet needs, segments, behavioral patterns. Ground strategy in real customer evidence.
3. **Map competitive landscape** — Direct competitors, substitutes, potential entrants. Where are they strong/weak? Use Wardley Mapping for value chain positioning.
4. **Make strategic choices** — Where to play (segments, markets, use cases) and how to win (differentiation, cost, experience). These are explicit decisions about what you will and won't do.
5. **Articulate product vision** — A compelling future state that inspires and aligns. 3-5 year horizon.
6. **Define strategic pillars** — 3-4 pillars that operationalize the strategy. Each pillar is a multi-quarter area of investment.
7. **Identify key bets** — The 2-3 biggest bets you're making. What needs to be true for them to pay off?
8. **Set success criteria** — Measurable outcomes for each pillar. Leading and lagging indicators.
9. **Assess resource implications** — What this strategy requires in people, technology, and capital. Trade-offs made explicit.
10. **Pressure-test** — What could invalidate this strategy? What are the kill criteria?

## Output Format
```
## Product Strategy: [Product Name]
**Timeframe:** [Period] | **Author:** [Name] | **Status:** [Draft/Final]

### Market Context
[Market size, trends, dynamics — supported by data]

### Customer Insights
[Key JTBD, unmet needs, segment analysis — grounded in research]

### Competitive Landscape
[Competitor positioning, our differentiation, competitive dynamics]

### Strategic Choices
**Where to Play:** [Segments, markets, use cases we're targeting — and what we're NOT doing]
**How to Win:** [Our differentiation strategy — what makes us win in chosen segments]

### Product Vision
[Compelling 3-5 year future state — narrative format]

### Strategic Pillars
1. **[Pillar 1]:** [Description, rationale, key initiatives, success metric]
2. **[Pillar 2]:** [Same structure]
3. **[Pillar 3]:** [Same structure]

### Key Bets
| Bet | Thesis | What Must Be True | Kill Criteria |
|-----|--------|-------------------|---------------|
| ... | ...    | ...               | ...           |

### Success Criteria
[Measurable outcomes per pillar — leading and lagging indicators]

### Resource Implications
[People, technology, capital requirements and trade-offs]

### Risks & Assumptions
[What could invalidate this strategy — and how we'd know]
```

## Quality Standards
- Strategic choices are explicit about what you're NOT doing — strategy without trade-offs isn't strategy.
- Customer insights are grounded in evidence (research, data, quotes) not assumptions.
- Key bets have kill criteria — conditions under which you'd abandon or pivot the bet.
- Vision is inspiring but grounded — aspirational without being delusional.
- **Anti-patterns:** Strategy that tries to do everything, no competitive differentiation, vision without execution path, pillars that are just feature categories, no kill criteria on bets.

## Framework References
- Porter's Five Forces — industry attractiveness analysis
- Wardley Mapping — value chain evolution and positioning
- JTBD (Jobs to Be Done) — customer needs framework
- Playing to Win (Lafley/Martin) — where to play, how to win

## Formatting Guidelines
- Narrative for vision and market context. Tables for bets and success criteria.
- Include "What we're NOT doing" explicitly — it's the hardest and most valuable part.
- Keep to 5-8 pages. Link to appendices for deep analysis.
- Use headers that tell the story even if someone only reads headings.

## Example
> **Where to Play:** Mid-market B2B SaaS companies (500-5000 employees) with complex onboarding flows. We are NOT pursuing enterprise (>10K employees) until our platform handles SSO/SCIM natively.
>
> **How to Win:** Best-in-class time-to-value through our guided onboarding engine — 10x faster setup than competitors. We win on experience, not features.
>
> **Key Bet:** Developer-first adoption will create a bottom-up growth loop. Thesis: developers who integrate our API become internal advocates. Kill criteria: if <15% of API adopters drive org-wide expansion within 6 months.
