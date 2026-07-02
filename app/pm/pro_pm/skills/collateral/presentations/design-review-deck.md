# Design Review Deck

## Purpose
Creates a structured design review presentation that walks stakeholders through problem context, design explorations considered, the recommended direction, user research backing, edge cases, accessibility considerations, and implementation notes. Facilitates informed decision-making, not just design showcase.

## Auto-Trigger Patterns
- "Create a design review deck for [feature]"
- "Build a design review presentation"
- "I need to present design options to stakeholders"
- "Help me structure a design critique/review"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Problem statement, user research or insights, design explorations (2-3 options), recommended direction with rationale
- **Optional:** User flows, wireframes, prototypes, accessibility audit, technical constraints, competitor UX benchmarks
- **Reference files:** product-brief.md, prd.md, customer-insights-report.md

## Process
1. **Frame the problem** — Start with user need and business context, not solutions.
2. **Show the journey** — Present explorations chronologically or by design dimension.
3. **Make the case** — Recommend a direction with clear criteria: user research, feasibility, consistency, accessibility.
4. **Anticipate concerns** — Pre-address edge cases, accessibility gaps, and implementation complexity.
5. **Define the ask** — Be clear: seeking approval, feedback on specifics, or directional alignment.

## Output Format
```
# Design Review: [Feature/Flow Name]

## Slide 1: What We're Solving (user problem + business goal)
## Slide 2: User Research Summary (key insights driving design)
## Slide 3: Design Principles Applied
## Slides 4-6: Explorations (Option A, B, C with rationale + trade-offs)
## Slide 7: Recommendation (with evaluation matrix)
## Slide 8: Recommended Design (detailed walkthrough)
## Slide 9: Edge Cases & Error States
## Slide 10: Accessibility Considerations
## Slide 11: Implementation Notes
## Slide 12: Feedback Requested (specific questions for reviewers)
```

## Quality Standards
- Design decisions are traceable to user research or established design principles.
- Explorations show genuine alternatives, not strawmen.
- Edge cases and error states are thoughtfully addressed.
- **Anti-patterns:** Presenting only the preferred option, no user research backing, ignoring accessibility.

## Audience
Cross-functional stakeholders: PM, engineering leads, design peers, and leadership. Each cares about different aspects—PMs want user/business alignment, engineers want feasibility, designers want craft quality.

## Formatting Guidelines
- Visual-heavy: mockups, wireframes, flow diagrams, annotated screenshots.
- Use a consistent evaluation framework across options.
- 10-14 slides. Include interactive prototype links if available.

## Example
**Slide 7: Evaluation Matrix**
| Criteria (weighted) | Option A | Option B | Option C |
|---------------------|----------|----------|----------|
| User comprehension (30%) | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Dev complexity (20%) | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| Accessibility (25%) | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
**Recommendation: Option B** — Best balance of usability and accessibility.
