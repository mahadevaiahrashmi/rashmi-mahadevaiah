# Infographic Brief

## Purpose
Creates a creative brief for a visual infographic specifying data points, narrative flow, visual style direction, key takeaways, source citations, and sizing/format requirements. Provides enough direction for a designer to execute while allowing creative freedom.

## Auto-Trigger Patterns
- "Create an infographic brief for [topic]"
- "Brief a designer on an infographic about [subject]"
- "I need an infographic plan for [data/topic]"
- "Help me outline an infographic"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Topic, 5-10 key data points, target audience, key takeaway message
- **Optional:** Brand guidelines, visual style preferences, distribution channels, comparable infographics
- **Reference files:** product-brief.md, market-research-report.md, whitepaper.md

## Process
1. **Define the story** — What single message should someone take away at a glance?
2. **Select data points** — Choose 5-10 statistics that build the narrative. Verify and cite each.
3. **Design the flow** — Top to bottom (or left to right) narrative progression.
4. **Specify visual style** — Color palette, icon style, chart types, brand alignment.
5. **Identify format needs** — Social, web, print, email. Size specifications for each.
6. **Write takeaway text** — Header, section labels, callouts, CTA, and source line.

## Output Format
```
# Infographic Brief: [Title]

## Overview
- **Topic:** [What this infographic is about]
- **Key takeaway:** [One sentence the viewer should remember]
- **Target audience:** [Who will see this]
- **Distribution:** [Where it will be shared]

## Narrative Flow
### Section 1: [Hook / Opening Stat]
Data point: [Statistic with source]
Visual suggestion: [Icon, chart type, or illustration]
Copy: [Headline text for this section]

### Section 2: [Problem / Context]
Data points: [2-3 statistics]
Visual suggestion: [Comparison chart, icons, etc.]
Copy: [Section headline]

### Section 3: [Solution / Insight]
Data points: [2-3 statistics]
Visual suggestion: [Process flow, before/after, etc.]
Copy: [Section headline]

### Section 4: [Takeaway / CTA]
Data point: [Concluding statistic]
Copy: [CTA text]

## Visual Direction
- **Color palette:** [Primary and accent colors]
- **Style:** [Flat, isometric, illustrated, data-heavy, etc.]
- **Brand elements:** [Logo placement, font requirements]
- **References:** [Links to similar infographics we like]

## Sizing & Format
| Format | Dimensions | Use |
|--------|-----------|-----|
| Social (LinkedIn) | 1200×1500px | Organic post |
| Web (blog embed) | 800×2400px | Blog/landing page |
| Print | 8.5×11" | Leave-behind |

## Sources
[Every data point cited with source, date, and URL]
```

## Quality Standards
- Every data point is verified and cited with a credible source.
- The narrative flow tells a story, not just displays random stats.
- Visual suggestions guide the designer without over-constraining creativity.
- **Anti-patterns:** Unverified data, no narrative arc, overly prescriptive visual direction, too many data points (>12), no sources.

## Audience
Designers who will create the infographic and the end viewers (prospects, social media audiences, event attendees). The brief serves the designer; the infographic serves the viewer. Ensure both are considered.

## Formatting Guidelines
- Brief itself: 1-2 pages. Clear sections.
- Specify all required format sizes upfront.
- Include links to reference infographics for style direction.
- Provide all copy as final text (not placeholder).

## Example
**Section 1:** "Hook: '73% of security teams are overwhelmed by alert volume' (Source: SANS Institute, 2025). Visual: Large number '73%' with an overflowing inbox icon. Below: silhouettes of 10 people, 7.3 highlighted in red. Section header: 'The Alert Fatigue Crisis.'"
