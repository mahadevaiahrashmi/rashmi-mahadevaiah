# FullStory Session Review

## Purpose
Structures FullStory session analysis — identifying rage clicks, error patterns, user journey friction, and UX issues — to surface qualitative insights from user behavior recordings that complement quantitative analytics.

## Auto-Trigger Patterns
- "Review FullStory sessions"
- "Find rage clicks in FullStory"
- "FullStory analysis for…"
- "What are users struggling with?"
- "Session replay analysis"

## Tool Configuration
Requires `context/integrations/fullstory.md` with: FullStory organization ID, API key. Auth: API key for data export, SSO for session playback.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Analysis focus (page, feature, user segment, error type)
- **Optional:** Date range, frustration signals to look for, comparison segments, sample size target

## Process
1. Define the analysis question and scope.
2. Build search segments: frustration signals, pages, user properties.
3. Review a representative sample of sessions (15-25 minimum).
4. Document patterns: rage clicks, dead clicks, error clicks, thrashed cursors.
5. Note specific UX issues with timestamps and screenshots.
6. Quantify pattern frequency across the sample.
7. Correlate with quantitative data (conversion rates, drop-offs).
8. Prioritize findings by frequency and severity.

## Output Format
```
# FullStory Session Review: [Focus Area]

## Review Parameters
- **Focus:** [Page/feature/flow]
- **Date Range:** [Start — End]
- **Sessions Reviewed:** [N]
- **Segment:** [User segment definition]

## Frustration Signals Summary
| Signal | Occurrences | % of Sessions | Severity |
|---|---|---|---|
| Rage Clicks | [N] | [X%] | [High/Med/Low] |
| Dead Clicks | [N] | [X%] | [High/Med/Low] |
| Error Clicks | [N] | [X%] | [High/Med/Low] |
| Thrashed Cursor | [N] | [X%] | [High/Med/Low] |
| Form Abandonment | [N] | [X%] | [High/Med/Low] |

## Key Findings

### Finding 1: [Issue Title] — Severity: [High]
- **Pattern:** [Description of what users are doing]
- **Frequency:** [X of N sessions, X%]
- **Location:** [Page/element]
- **Evidence:** Sessions [ID1, ID2, ID3]
- **Impact:** [Effect on conversion/task completion]
- **Root Cause Hypothesis:** [Why this is happening]

### Finding 2: [Issue Title] — Severity: [Medium]
...

## User Journey Analysis
| Step | Expected Behavior | Observed Behavior | Friction Level |
|---|---|---|---|
| [Step 1] | [Expected] | [Actual] | [None/Low/High] |
| [Step 2] | [Expected] | [Actual] | [None/Low/High] |

## Recommendations
| Priority | Finding | Recommendation | Expected Impact |
|---|---|---|---|
| P1 | [Finding 1] | [Specific fix] | [Improvement estimate] |
| P2 | [Finding 2] | [Specific fix] | [Improvement estimate] |

## Notable Sessions
| Session | User Segment | Key Observation | Link |
|---|---|---|---|
| [ID] | [Segment] | [What happened] | [FullStory URL] |
```

## Quality Standards
- Sample size is sufficient to identify patterns (minimum 15 sessions).
- Findings distinguish between systematic issues and individual anomalies.
- Rage clicks are analyzed for root cause, not just counted.
- Recommendations are specific and tied to observed patterns.
- Notable sessions are bookmarked for stakeholder review.

## Permissions Required
FullStory Viewer for session playback. Admin for segment creation and data export.

## Example
A checkout flow review of 25 sessions reveals: rage clicks on the "Apply Coupon" button (40% of sessions — button appears clickable but requires field entry first), dead clicks on pricing text (28% — users expect it to be interactive), and form abandonment at shipping address (20% — autocomplete not working on mobile). Top recommendation: add visual affordance to coupon flow, projected to reduce checkout friction by 15%.
