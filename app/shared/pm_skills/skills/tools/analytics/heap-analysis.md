# Heap Analysis

## Purpose
Structures Heap analytics analyses — auto-capture event exploration, funnel analysis, session replay review, and user path analysis — leveraging Heap's retroactive data capture to answer product questions without pre-instrumented events.

## Auto-Trigger Patterns
- "Analyze user behavior in Heap"
- "Heap funnel for…"
- "Review Heap session replays"
- "User path analysis in Heap"
- "What are users doing on [page/feature]?"

## Tool Configuration
Requires `context/integrations/heap.md` with: Heap environment ID, API credentials. Auth: API key for data export, SSO for dashboard access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Analysis question, target page/feature/flow
- **Optional:** User segments, date range, comparison groups, specific interactions to track

## Process
1. Define the behavioral question to answer.
2. Identify relevant auto-captured events (pageviews, clicks, form submissions).
3. Create virtual events by combining auto-captured interactions if needed.
4. Build the analysis: funnel, path, retention, or effort analysis.
5. Segment users for comparison.
6. Review session replays for qualitative context.
7. Synthesize quantitative data with qualitative observations.
8. Generate recommendations.

## Output Format
```
# Heap Analysis: [Question]

## Analysis Type
[Funnel | Path | Retention | Effort | Usage Over Time]

## Events Used
| Event | Type | Definition |
|---|---|---|
| [Event] | Auto-captured | [Page/element description] |
| [Virtual Event] | Defined | [Combination logic] |

## Segments
| Segment | Definition | User Count |
|---|---|---|
| [Name] | [Property or behavior] | [N] |

## Results

### Quantitative Findings
[Charts, conversion rates, path data with specific numbers]

| Metric | Segment A | Segment B | Difference |
|---|---|---|---|
| [Metric] | [Value] | [Value] | [Delta] |

### Session Replay Insights (N = [count reviewed])
| Pattern | Frequency | Example Session |
|---|---|---|
| [Observed behavior] | [X of N] | [Session ID] |

## Interpretation
[What the data tells us about user behavior and why]

## Recommendations
| Action | Evidence | Expected Impact |
|---|---|---|
| [Action] | [Data point] | [Projected improvement] |
```

## Quality Standards
- Virtual events are clearly defined and reproducible.
- Session replay sample is representative, not cherry-picked.
- Quantitative and qualitative findings are synthesized, not presented separately.
- Recommendations cite specific data points as evidence.
- Auto-captured events are validated against the actual page structure.

## Permissions Required
Heap Viewer for analysis access. Admin for virtual event creation and segment management.

## Example
Analyzing checkout abandonment: 5-step funnel using auto-captured pageviews and clicks, segmented by new vs returning users, reveals 38% drop at payment step. Session replay review (20 sessions) shows 12 users hesitating at shipping cost reveal. Recommendation: show estimated shipping earlier in the flow, projected to improve checkout completion by 8-12%.
