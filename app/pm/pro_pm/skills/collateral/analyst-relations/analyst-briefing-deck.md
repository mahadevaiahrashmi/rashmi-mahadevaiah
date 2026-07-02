# Analyst Briefing Deck

## Purpose
Creates a 15-20 slide briefing deck for industry analyst meetings, covering company overview, market positioning, product strategy, competitive differentiation, customer evidence, and roadmap preview. Designed to build analyst confidence in your strategic direction and product execution.

## Auto-Trigger Patterns
- "Create an analyst briefing deck"
- "Build a presentation for [Gartner/Forrester/IDC] briefing"
- "I need to prepare for an analyst meeting"
- "Help me brief industry analysts on our product"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Company overview, product capabilities, market positioning, competitive differentiation, customer evidence, roadmap direction
- **Optional:** Prior analyst interactions, current analyst perception, market report context, specific analyst focus areas
- **Reference files:** product-brief.md, strategy-document.md, competitive-landscape-report.md, customer-case-study.md

## Process
1. **Research the analyst** — Review their recent reports, blog posts, and tweets. Understand their framework and biases.
2. **Tailor the story** — Align your narrative with how the analyst thinks about the market.
3. **Lead with strategy** — Analysts care about where you're going more than where you are.
4. **Provide evidence** — Customer names, metrics, and deployment scale. Analysts validate claims.
5. **Preview the roadmap** — Share direction under NDA. Analysts reward forward-looking vision.
6. **Prepare for tough questions** — Analysts will probe weaknesses. Have honest answers.

## Output Format
```
# [Company] Analyst Briefing — [Date]

## Slide 1: Company Overview
Key facts: funding, headcount, growth rate, customer count.

## Slide 2: Market Context
How we define the market. Key trends. Why now.

## Slide 3: Our Vision
Where we believe the market is heading. Our north star.

## Slide 4-5: Product Overview
Core capabilities. Architecture approach. Key differentiators.

## Slide 6-7: Market Positioning
How we position vs alternatives. Where we play. Where we don't.

## Slide 8-9: Competitive Differentiation
What's genuinely different. Technical and strategic moats.

## Slide 10-12: Customer Evidence
3-4 customer stories with metrics. Deployment scale. Segments.

## Slide 13-14: Product Strategy
Strategic pillars. Key bets. Investment areas.

## Slide 15-16: Roadmap Preview (NDA)
Next 12-18 months. Key capabilities. Innovation direction.

## Slide 17: Market Traction
Growth metrics. Pipeline. Key wins. Analyst-relevant data.

## Slide 18: Team & Investment
Key leadership. R&D investment. Partnerships.

## Slide 19: Summary & Discussion
Key takeaways. Questions we'd like the analyst's perspective on.

## Appendix: Detailed Product Capabilities
```

## Quality Standards
- Narrative aligns with the analyst's framework for evaluating the market.
- Claims are backed by evidence—named customers, specific metrics, verifiable data.
- Roadmap discussion is forward-looking and innovation-oriented.
- **Anti-patterns:** Product demo without strategy context, marketing slides recycled for analysts, no customer evidence, defensive positioning.

## Audience
Industry analysts (Gartner, Forrester, IDC, etc.) who influence buyer decisions, shape market categories, and produce evaluation reports. They're deeply knowledgeable, skeptical of hype, and looking for strategic thinkers. They value honest, substantive conversations over polished pitches.

## Formatting Guidelines
- 15-20 slides. Data-dense but clean. Professional design.
- Leave 50% of time for discussion—don't present every slide.
- Include "Discussion Questions" for the analyst—makes it a conversation, not a pitch.
- Provide pre-read materials 2-3 days in advance if possible.

## Example
**Slide 7 — Competitive Differentiation:** "Three things that are genuinely hard to replicate: (1) Our data model was built for [approach] from day one—competitors are retrofitting legacy architectures. (2) We've invested 40% of R&D in [capability] for 3 years—we have a 2-year head start. (3) Our developer community (12K+ members) creates network effects that improve the platform for everyone. We'll be honest about where we're still catching up: [area 1] and [area 2] are active investment areas."
