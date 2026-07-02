# Market Entry Strategy

## Purpose
Analyze a new market opportunity and develop an entry strategy. Covers market attractiveness, competitive intensity, entry barriers, go-to-market options, resource requirements, timeline, and risk assessment. Uses structured frameworks to make a go/no-go decision and plan the entry approach.

## Auto-Trigger Patterns
- "Should we enter [market]?" / "market entry analysis"
- "New market opportunity for [segment/geography/vertical]"
- "Evaluate expanding into [market]"
- "Go-to-market strategy for [new market]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Target market description, current capabilities, strategic rationale for entry
- **Optional:** Market size data, competitive landscape in target market, existing customer overlap, regulatory considerations
- **Reference:** Ansoff Matrix, `context/products/` for market data

## Process
1. **Define the market** — Clear boundaries: segment, geography, vertical, use case. Be specific about what you mean by "entering this market."
2. **Assess market attractiveness** — Size (TAM/SAM/SOM), growth rate, profitability, customer willingness to pay, regulatory environment. Use Porter's Five Forces.
3. **Analyze competitive intensity** — Who are the incumbents? How entrenched? Where are their weaknesses? What would we offer that's different?
4. **Identify entry barriers** — Technology, regulations, brand recognition, distribution, customer relationships, capital requirements.
5. **Map go-to-market options:**
   - **Organic:** Build product, enter directly. Slowest but most control.
   - **Partnership:** Leverage existing player's distribution/brand. Faster but less control.
   - **Acquisition:** Buy a player in the market. Fastest but highest cost/risk.
6. **Estimate resource requirements** — People, capital, time. What do you need to invest and what's the opportunity cost?
7. **Build timeline** — Phase the entry: validate → pilot → scale. Define milestones and go/no-go checkpoints.
8. **Assess risks** — What could go wrong? How would you exit if the entry fails?

## Output Format
```
## Market Entry Analysis: [Target Market]
**Entry Type:** [New Segment / New Geography / New Vertical / Adjacent]
**Decision:** [Go / No-Go / Conditional Go]

### Market Attractiveness
| Factor | Assessment | Evidence |
|--------|-----------|----------|
| TAM/SAM/SOM | $[X]/$[Y]/$[Z] | [Source] |
| Growth Rate | [X]% | [Source] |
| Competitive Intensity | High/Medium/Low | [Analysis] |
| Entry Barriers | High/Medium/Low | [Key barriers] |

### Competitive Landscape
| Competitor | Strengths | Weaknesses | Market Share |
|-----------|-----------|------------|-------------|
| ... | ... | ... | ... |

### Our Right to Win
[Why we can succeed where others haven't — specific advantages]

### Entry Options
| Option | Cost | Time | Risk | Control |
|--------|------|------|------|---------|
| Organic | $[X] | [Months] | [Level] | High |
| Partnership | $[X] | [Months] | [Level] | Medium |
| Acquisition | $[X] | [Months] | [Level] | Varies |

### Recommended Approach
**Option:** [Recommended entry strategy]
**Phase 1 — Validate ([Timeline]):** [What to test]
**Phase 2 — Pilot ([Timeline]):** [How to scale carefully]
**Phase 3 — Scale ([Timeline]):** [Full entry]

### Resource Requirements
[People, capital, opportunity cost]

### Risk Assessment & Exit Criteria
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| ... | ... | ... | ... |
**Exit criteria:** [When to abandon the entry]
```

## Quality Standards
- "Right to win" is specific and evidence-based — not "we're a great team." What structural advantage do you bring?
- TAM/SAM/SOM is calculated from data, not aspirational round numbers.
- Entry is phased with explicit go/no-go checkpoints — not a one-shot bet.
- Exit criteria are defined upfront — knowing when to stop is as important as knowing when to go.
- **Anti-patterns:** Overestimating TAM, underestimating incumbents, no clear right to win, single-phase entry plan, no exit criteria, entering a market just because it's big.

## Framework References
- Ansoff Matrix — market penetration, development, diversification
- Porter's Five Forces — industry attractiveness
- Beachhead strategy — focused entry point before expanding

## Formatting Guidelines
- Tables for market attractiveness, competitive landscape, and entry options.
- Phase the entry timeline with milestones.
- Include exit criteria — this is often the most valuable part.
- Keep to 4-5 pages with market research appendix.

## Example
> **Right to Win:** Our onboarding engine is the #1 rated in our current market. Healthcare SaaS companies face the same onboarding challenges but with HIPAA compliance requirements. We can extend our engine with compliance features — something no current healthcare onboarding tool offers at our experience quality.
>
> **Phase 1 — Validate (3 months):** Partner with 3 healthcare SaaS companies as design partners. Test: Does our engine solve their onboarding problems? What healthcare-specific features are required? Is the WTP sufficient?
>
> **Exit Criteria:** If fewer than 2 of 3 design partners convert to paid within 6 months, pause market entry and reassess.
