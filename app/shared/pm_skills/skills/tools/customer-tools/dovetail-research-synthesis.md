# Dovetail Research Synthesis

## Purpose
Structures research synthesis in Dovetail — defining tag taxonomies, insight creation, highlight organization, and report generation — to systematically transform qualitative research data into actionable product insights.

## Auto-Trigger Patterns
- "Synthesize research in Dovetail"
- "Organize research findings"
- "Create insights from user research"
- "Dovetail tag taxonomy"
- "Research synthesis for…"

## Tool Configuration
Requires `context/integrations/dovetail.md` with: Dovetail workspace URL, API access. Auth: API key or SSO with workspace member access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Research data (interview transcripts, survey responses, usability tests), research questions
- **Optional:** Existing tag taxonomy, insight framework, report template, stakeholder audience

## Process
1. Define or extend the tag taxonomy aligned with research questions.
2. Import research data: transcripts, notes, recordings.
3. Highlight key quotes and observations in the data.
4. Apply tags to highlights for pattern identification.
5. Analyze tag patterns: frequency, co-occurrence, sentiment.
6. Create insights: evidence-backed findings with implications.
7. Organize insights into themes and recommendations.
8. Generate reports for stakeholder communication.

## Output Format
```
# Research Synthesis: [Study Name]

## Research Overview
- **Method:** [Interviews | Usability Tests | Survey | Mixed]
- **Participants:** [N] ([Segment description])
- **Research Questions:**
  1. [RQ1]
  2. [RQ2]
  3. [RQ3]
- **Period:** [Date range]

## Tag Taxonomy
### Theme Tags
| Tag | Description | Usage |
|---|---|---|
| [theme:onboarding] | Related to first-time experience | [N highlights] |
| [theme:collaboration] | Multi-user workflows | [N highlights] |

### Sentiment Tags
| Tag | Description |
|---|---|
| [sentiment:positive] | Positive experience or reaction |
| [sentiment:negative] | Frustration, confusion, failure |
| [sentiment:neutral] | Informational, no strong feeling |

### Behavior Tags
| Tag | Description |
|---|---|
| [behavior:workaround] | User created a workaround |
| [behavior:abandonment] | User gave up on a task |
| [behavior:delight] | Unexpected positive reaction |

## Key Highlights
### [Theme 1]
> "[Participant quote]" — P[N], [Segment]
> Tagged: [tags]

> "[Participant quote]" — P[N], [Segment]
> Tagged: [tags]

## Insights

### Insight 1: [Insight Title]
- **Finding:** [Clear statement of what we learned]
- **Evidence:** [N] of [N] participants exhibited this pattern
- **Highlights:** [N tagged highlights supporting this]
- **Confidence:** [High | Medium | Low]
- **Impact:** [Who is affected and how severely]
- **Recommendation:** [What to do about it]

### Insight 2: [Insight Title]
...

## Pattern Analysis
| Tag | Frequency | Co-occurs With | Segment Skew |
|---|---|---|---|
| [Tag 1] | [N highlights] | [Tag 2, Tag 3] | [Enterprise heavy] |

## Recommendations Summary
| Priority | Recommendation | Evidence Strength | Linked Insights |
|---|---|---|---|
| P1 | [Action] | [Strong — N/N participants] | Insight 1, 3 |
| P2 | [Action] | [Moderate — N/N] | Insight 2 |

## Report Configuration
- **Audience:** [Product team | Leadership | Design]
- **Format:** [Dovetail report | Presentation | Document]
- **Sharing:** [Link with comment access]
```

## Quality Standards
- Tags are applied consistently — the same concept gets the same tag across all data.
- Insights are evidence-based — not one participant's opinion elevated to a finding.
- Confidence levels honestly reflect sample size and evidence strength.
- Highlights preserve participant voice — direct quotes, not paraphrases.
- Pattern analysis looks for co-occurrence and segment differences, not just frequency.
- Recommendations are actionable and linked to specific insights.

## Permissions Required
Dovetail workspace member for data access and tagging. Admin for taxonomy management.

## Example
A 15-participant usability study synthesized with: 3-level tag taxonomy (12 theme tags, 3 sentiment tags, 5 behavior tags), 145 tagged highlights, 6 insights with confidence ratings, key finding that 11/15 participants failed to discover the collaboration feature (tagged: theme:collaboration + behavior:abandonment), leading to P1 recommendation to redesign the feature entry point. Report shared with product and design teams.
