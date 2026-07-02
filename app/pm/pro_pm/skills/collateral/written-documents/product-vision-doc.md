# Product Vision Document

## Purpose
Generates a 4-8 page long-form vision document that articulates market context, customer pain, the envisioned future state, strategy to get there, guiding principles, and success measures. Written in narrative style to inspire alignment across the organization and serve as a north star for product development.

## Auto-Trigger Patterns
- "Write a product vision document for [product]"
- "Create a long-form vision narrative"
- "I need to articulate our product vision"
- "Help me write a vision doc that aligns the team"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product area, target market, customer pain points, envisioned future state, strategic approach
- **Optional:** Competitive landscape, technology trends, company mission, prior vision docs, customer research
- **Reference files:** product-brief.md, strategy-document.md, market-research-report.md

## Process
1. **Set the context** — Describe the current market reality. What forces are shaping the landscape? Use data.
2. **Define the customer pain** — Tell the story of a real (or composite) customer struggling today. Make it visceral.
3. **Paint the future** — Describe the world 3-5 years out if we succeed. Make it concrete and aspirational.
4. **Articulate the strategy** — How we get from today to the future. Key choices, bets, and sequencing.
5. **Establish principles** — 4-6 guiding principles that will help teams make decisions in ambiguous situations.
6. **Define success** — Measurable outcomes that indicate we're on the right path.
7. **Review for inspiration** — The document should make people want to build this. Edit for narrative quality.

## Output Format
```
# [Product] Vision: [Aspirational Title]

## 1. The World Today (1-2 pages)
Market context. Customer reality. What's changing and why it matters.
Data points and trends. "The current state is unsustainable because..."

## 2. The Customer's Story (1 page)
A day in the life of our target customer today. Their frustrations,
workarounds, and unmet needs. Empathy-building narrative.

## 3. Our Vision for the Future (1-2 pages)
The same customer's day in the future. How their world is different.
What's possible that wasn't before. Concrete, vivid, and inspiring.

## 4. How We Get There (1-2 pages)
Strategic approach. Key phases. Critical capabilities to build.
What we're choosing to do AND choosing not to do.

## 5. Guiding Principles (0.5 page)
4-6 principles that guide decisions. Format: "We believe [X],
so we will [Y] even when [Z]."

## 6. How We'll Know We're Succeeding (0.5 page)
Leading and lagging indicators. Qualitative and quantitative measures.
```

## Quality Standards
- Reading it should feel like reading a compelling essay, not a strategy doc.
- The future state is specific enough to build toward but aspirational enough to inspire.
- Principles create real decision-making constraints (if a principle never forces a hard choice, it's not useful).
- **Anti-patterns:** Vague platitudes, no customer grounding, strategy without trade-offs, principles that nobody would disagree with.

## Audience
The entire product organization and key cross-functional partners. This is the "why we exist" document that onboards new team members, resolves strategic debates, and provides continuity through leadership changes. Write for a smart reader who isn't an expert in the domain.

## Formatting Guidelines
- 4-8 pages. Narrative prose, not bullets. Minimal jargon.
- Section headers guide the reader through the arc.
- Include 2-3 data callouts or pull quotes to break up prose.
- End with conviction, not caveats.

## Example
**Section 3 excerpt:** "Imagine Sarah, our compliance manager from Section 2, starting her Monday morning. Instead of logging into five systems and manually cross-referencing reports, she opens a single dashboard that has already flagged the three items that need her attention. The system has pre-populated the regulatory context, suggested a resolution path, and drafted the response for her review. Her Monday morning task that used to take four hours now takes twenty minutes—and she's more confident in the outcome."
