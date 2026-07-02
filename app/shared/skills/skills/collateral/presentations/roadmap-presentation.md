# Roadmap Presentation

## Purpose
Creates a visual roadmap presentation using Now/Next/Later or timeline views, organized by themes and key initiatives, with dependencies and confidence levels clearly marked. Designed to be adaptable for different audiences—from engineering teams wanting specifics to executives wanting strategic direction.

## Auto-Trigger Patterns
- "Create a roadmap presentation for [product/team]"
- "Build a roadmap deck for [audience]"
- "I need to present our roadmap to [stakeholders]"
- "Help me visualize our product roadmap"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Initiatives with rough timing, strategic themes, confidence levels (committed/planned/exploring)
- **Optional:** Dependencies, resource constraints, prior roadmap for comparison, OKR linkage
- **Reference files:** product-brief.md, strategy-document.md, prd.md

## Process
1. **Choose the right format** — Now/Next/Later for strategic audiences; timeline for execution teams.
2. **Group by theme** — Cluster initiatives under 3-5 strategic themes that connect to company goals.
3. **Mark confidence levels** — Committed (high), Planned (medium), Exploring (low, directional).
4. **Map dependencies** — Identify cross-team dependencies and external blockers.
5. **Build audience variants** — Strip detail for executives, add detail for engineering.

## Output Format
```
# [Product] Roadmap — [Time Period]

## Slide 1: Roadmap Philosophy (how to read, confidence legend)
## Slide 2: Strategic Themes
## Slide 3: Now/Next/Later Overview
## Slides 4-6: Theme Deep-Dives
## Slide 7: Dependencies & Risks
## Slide 8: What We're NOT Doing (and why)
## Slide 9: How to Engage (feedback channels, review cadence)
```

## Quality Standards
- Roadmap explicitly states what it is and isn't (not a commitment, subject to change).
- "What we're NOT doing" slide demonstrates strategic discipline.
- **Anti-patterns:** Gantt charts with fake precision, everything marked high priority, no trade-offs shown.

## Audience
Varies widely. Executives want strategic themes. Sales wants customer-relevant timelines. Engineering wants scope and dependencies. Always include a "how to read this" frame.

## Formatting Guidelines
- Visual-first: swim lanes, Kanban-style layouts, or timeline bars.
- Color-code by confidence level and theme. 8-12 slides.
- Add a "last updated" date and feedback channel.

## Example
**Slide 3: Now/Next/Later**
| Now (Committed) | Next (Planned) | Later (Exploring) |
|---|---|---|
| 🟢 SSO Integration | 🟡 Advanced Analytics | 🔵 Mobile App |
| 🟢 Bulk Import | 🟡 Custom Workflows | 🔵 AI Recommendations |
