# Amplitude Query Builder

## Purpose
Builds Amplitude analytics queries — event analysis, funnel analysis, retention analysis, and cohort comparisons — specifying events, properties, segments, and chart types for data-driven product decisions.

## Auto-Trigger Patterns
- "Build an Amplitude query for…"
- "Create a funnel in Amplitude"
- "Analyze retention in Amplitude"
- "Amplitude chart for…"
- "Set up Amplitude analysis for…"

## Tool Configuration
Requires `context/integrations/amplitude.md` with: Amplitude project ID, API key and secret key. Auth: API key pair for query API, or SSO for dashboard access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Analysis question, relevant events
- **Optional:** User segments, date range, property filters, comparison groups, chart type preference

## Process
1. Translate the product question into the correct analysis type.
2. Select primary and secondary events from the tracking plan.
3. Define user segments and property filters.
4. Choose the appropriate chart type and visualization.
5. Set the date range and granularity (daily, weekly, monthly).
6. Configure group-by dimensions for drill-down.
7. Add comparison cohorts if needed.
8. Document the query interpretation guidance.

## Output Format
```
# Amplitude Analysis: [Question Being Answered]

## Analysis Type
[Event Segmentation | Funnel Analysis | Retention Analysis | User Composition | Revenue]

## Query Specification

### Events
| Step | Event | Filter | Group By |
|---|---|---|---|
| 1 | [event_name] | [property = value] | [property] |
| 2 | [event_name] | [property = value] | — |

### Segments
| Segment | Definition |
|---|---|
| [Name] | [User property = value] |
| [Name] | [Cohort or behavioral] |

### Settings
- **Date Range:** [Start — End]
- **Granularity:** [Daily | Weekly | Monthly]
- **Chart Type:** [Line | Bar | Stacked | Table]
- **Conversion Window:** [X days] (funnels only)
- **Retention Type:** [N-day | Unbounded | Bracket] (retention only)

## Expected Output
[Description of what the chart should show and how to interpret results]

## Follow-Up Queries
- If [result A], investigate: [follow-up query]
- If [result B], investigate: [follow-up query]

## Interpretation Guide
- **Good:** [What a positive result looks like]
- **Concerning:** [What a negative result looks like]
- **Action threshold:** [When to act on the data]
```

## Quality Standards
- Events match the project's tracking plan naming conventions exactly.
- Segments use consistent definitions across queries for comparability.
- Conversion windows are realistic for the user journey being measured.
- Interpretation guide prevents misreading of results.
- Follow-up queries anticipate the next analytical step.

## Permissions Required
Amplitude project viewer for query execution. Admin for cohort creation and saved query management.

## Example
Funnel analysis for checkout conversion: 4-step funnel (View Cart → Begin Checkout → Enter Payment → Complete Purchase), segmented by new vs returning users, 7-day conversion window, daily granularity for 30-day range, with interpretation guide noting that < 60% step 2→3 conversion indicates payment friction.
