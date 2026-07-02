# Product Strategy Deck

## Purpose
Generates a compelling 10-15 slide strategy presentation that follows a narrative arc—where we are, where we're going, how we get there, and what we need—backed by data and designed for visual-first consumption. The deck aligns leadership around strategic direction and secures buy-in for investment priorities.

## Auto-Trigger Patterns
- "Create a product strategy deck/presentation"
- "Build a strategy narrative for [product/area]"
- "I need to present our product strategy to leadership"
- "Help me structure a strategy pitch"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product area or initiative, target audience (exec team, board, broader org), current metrics and performance data, strategic goals or OKRs
- **Optional:** Competitive landscape, customer research, prior strategy docs, brand/template guidelines
- **Reference files:** product-brief.md, strategy-document.md, market-research-report.md

## Process
1. **Gather context** — Pull product vision, current state metrics, market dynamics, and strategic priorities from reference files and user input.
2. **Build narrative arc** — Structure as: Situation (where we are) → Aspiration (where we're going) → Strategy (how we get there) → Ask (what we need).
3. **Draft slide-by-slide** — Title slide, executive summary, market context, current state, strategic vision, strategic pillars (2-4), key initiatives per pillar, timeline/roadmap, success metrics, resource ask, next steps.
4. **Add speaker notes** — Write 3-5 bullet speaker notes per slide with talking points, data citations, and anticipated questions.
5. **Quality check** — Verify narrative flow, data accuracy, visual balance (no text-heavy slides), and audience calibration.

## Output Format
```
# [Product/Area] Strategy — [Time Period]

## Slide 1: Title
**[Product Name] Product Strategy [Quarter/Year]**
Speaker Notes: [Opening context, set the stage]

## Slide 2: Executive Summary
**Key visual:** [One-sentence strategy statement]
**Three bullets:** [Core strategic moves]
Speaker Notes: [Frame the conversation]

## Slide 3-4: Where We Are (Situation)
**Key metrics:** [Current performance dashboard]
**Market context:** [Trends shaping our environment]
Speaker Notes: [Data walkthrough, honest assessment]

## Slide 5-6: Where We're Going (Aspiration)
**Vision statement:** [Compelling future state]
**Target metrics:** [What success looks like]
Speaker Notes: [Paint the picture, connect to company mission]

## Slide 7-10: How We Get There (Strategy)
**Strategic pillars:** [2-4 pillars with initiatives]
**Key bets:** [Highest-impact moves]
Speaker Notes: [Rationale for each choice, trade-offs acknowledged]

## Slide 11-12: What We Need (Ask)
**Resource requirements:** [Team, budget, dependencies]
**Timeline:** [Key milestones and decision points]
Speaker Notes: [Specific asks, ROI framing]

## Slide 13: Success Metrics & Checkpoints
## Slide 14: Next Steps & Discussion
```

## Quality Standards
- Every slide has one key takeaway; audience should grasp it in 5 seconds.
- Data visualizations over bullet points wherever possible.
- Speaker notes anticipate "why" and "what if" questions.
- **Anti-patterns:** Text walls, unsupported claims, missing the "so what," burying the ask.

## Audience
Executives and leadership who make investment decisions. They want clarity on strategic direction, confidence in the team's thinking, and a clear ask. Adapt density: lighter for broad org, denser for exec staff.

## Formatting Guidelines
- One key message per slide. Use headlines that state the takeaway, not the topic.
- 10-15 slides total. Heavy use of visuals, charts, and diagrams.
- Consistent visual hierarchy: title → key visual → supporting detail.
- Speaker notes: 3-5 bullets, conversational tone.

## Example
**Slide 5: "We're shifting from feature parity to platform differentiation"**
Visual: 2x2 matrix showing competitive positioning shift. Arrow from "fast follower" quadrant to "category leader."
Speaker Notes: "Our first two years were about matching table-stakes features. We've closed 80% of the gap. Now is the inflection point—we invest in platform capabilities that competitors can't easily replicate. Three reasons why now is the right time..."
