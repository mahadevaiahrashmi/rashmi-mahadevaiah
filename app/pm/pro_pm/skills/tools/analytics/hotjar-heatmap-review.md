# Hotjar Heatmap Review

## Purpose
Interprets Hotjar heatmaps, scroll depth data, recording insights, and feedback polls — translating visual behavior data into actionable UX recommendations for page optimization and content strategy.

## Auto-Trigger Patterns
- "Review Hotjar heatmaps"
- "Analyze scroll depth"
- "Hotjar insights for [page]"
- "What are users clicking on?"
- "Design a Hotjar feedback poll"

## Tool Configuration
Requires `context/integrations/hotjar.md` with: Hotjar site ID, API access (if applicable). Auth: Hotjar account login with site access. Business plan for API access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Page URL(s) to analyze, analysis type (heatmap, scroll, recording, poll)
- **Optional:** Date range, device filter, traffic source segment, comparison page

## Process
1. Collect heatmap data for the target page(s).
2. Analyze click/tap heatmaps: hot zones, dead zones, unexpected clicks.
3. Review move heatmaps for attention patterns (desktop).
4. Interpret scroll depth: where users stop, content below the fold.
5. Watch recordings for context behind heatmap patterns.
6. Design feedback polls for additional qualitative data.
7. Synthesize findings into layout and content recommendations.

## Output Format
```
# Hotjar Analysis: [Page Name]
**URL:** [Page URL] | **Period:** [Date range] | **Sessions:** [N]

## Click/Tap Heatmap Analysis
### Hot Zones (High Engagement)
| Element | Click % | Expected? | Insight |
|---|---|---|---|
| [Element] | [X%] | [Yes/No] | [What this tells us] |

### Dead Zones (No Engagement)
| Element | Expected Clicks | Actual | Issue |
|---|---|---|---|
| [CTA Button] | High | None | [Visibility/positioning issue] |

### Unexpected Clicks
| Element | Click % | Non-Interactive? | Action |
|---|---|---|---|
| [Element] | [X%] | [Yes] | [Make interactive or clarify] |

## Scroll Depth Analysis
| Depth | % Users Reaching | Key Content |
|---|---|---|
| 25% | [X%] | [What's here] |
| 50% | [X%] | [What's here] |
| 75% | [X%] | [What's here] |
| 100% | [X%] | [What's here] |

**Drop-off Point:** [X%] depth — [X%] of users leave here
**Content Below Fold:** [What important content users are missing]

## Recording Insights (N = [reviewed])
| Pattern | Frequency | Impact |
|---|---|---|
| [Behavior] | [X of N] | [Effect on conversion] |

## Feedback Poll Design
**Question:** "[What users will be asked]"
**Type:** [Rating | Open text | Multiple choice]
**Trigger:** [Exit intent | Scroll depth | Time on page]
**Targeting:** [All visitors | Segment]
**Options:** [If multiple choice, list options]

## Recommendations
| Priority | Finding | Action | Expected Impact |
|---|---|---|---|
| High | [Finding] | [Specific change] | [Improvement] |
| Medium | [Finding] | [Specific change] | [Improvement] |

## A/B Test Suggestions
- Test: [What to change based on findings]
- Hypothesis: [Expected outcome]
- Metric: [Primary KPI to measure]
```

## Quality Standards
- Heatmap data has sufficient session count for reliable patterns (100+ recommended).
- Click analysis distinguishes between intentional clicks and misclicks.
- Scroll analysis identifies content priority mismatches.
- Recording sample supports heatmap findings with context.
- Poll questions are neutral — not leading toward a desired answer.

## Permissions Required
Hotjar site member for heatmap and recording access. Admin for poll creation.

## Example
A pricing page analysis: click heatmap shows 45% of clicks on the "Enterprise" column (but only 12% of conversions happen there), scroll depth shows 60% of users never reach the FAQ section (which addresses top objections), and recordings reveal users scrolling back up to compare plan features. Recommendations: add sticky comparison header, move FAQ above the fold, and A/B test feature comparison table layout.
