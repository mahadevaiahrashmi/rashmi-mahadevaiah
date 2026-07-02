# Mixpanel Query Builder

## Purpose
Builds Mixpanel analytics reports — insights, funnels, retention, and flows — specifying events, properties, filters, and breakdowns for product usage analysis and user behavior understanding.

## Auto-Trigger Patterns
- "Build a Mixpanel report"
- "Create a Mixpanel funnel"
- "Mixpanel retention analysis for…"
- "Analyze user flows in Mixpanel"
- "Set up Mixpanel insights for…"

## Tool Configuration
Requires `context/integrations/mixpanel.md` with: Mixpanel project ID, service account credentials or API secret. Auth: Service account (username/secret) for API access.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Analysis question, relevant events
- **Optional:** Properties for filtering/breakdown, cohorts, date range, chart type

## Process
1. Map the product question to a Mixpanel report type (Insights, Funnels, Retention, Flows).
2. Select events from the tracking plan with correct naming.
3. Add property filters and breakdowns.
4. Define cohorts for comparison if needed.
5. Configure chart settings: visualization type, date range, unit.
6. Set up formulas for calculated metrics (Insights).
7. Document interpretation guidance.

## Output Format
```
# Mixpanel Report: [Analysis Title]

## Report Type
[Insights | Funnels | Retention | Flows]

## Query

### Events
| Event | Filters | Breakdown |
|---|---|---|
| [event_name] | [property operator value] | [property] |

### Cohorts (if applicable)
| Cohort | Definition |
|---|---|
| [Name] | [Behavioral or property-based] |

### Settings
- **Date Range:** [Range]
- **Unit:** [Daily | Weekly | Monthly]
- **Visualization:** [Line | Bar | Table | Stacked]
- **Formula:** [A/B, A+B, custom] (Insights only)
- **Conversion Window:** [X days] (Funnels only)

## Interpretation
- **Key metric:** [What to focus on]
- **Benchmark:** [Expected range or target]
- **Drill-down:** [If metric is off, break down by…]

## Dashboard Placement
- Dashboard: [Name]
- Position: [Where in the dashboard layout]
- Refresh: [Real-time | Daily | Weekly]
```

## Quality Standards
- Event names match Mixpanel's case-sensitive naming exactly.
- Breakdowns use high-cardinality properties judiciously.
- Formulas are documented with clear numerator/denominator logic.
- Retention uses appropriate return event (not just any event).
- Reports are named descriptively for dashboard discoverability.

## Permissions Required
Mixpanel project consumer for report viewing. Analyst role for report creation and cohort management.

## Example
An Insights report tracking weekly active feature usage: event "Feature Used" broken down by feature_name property, filtered to paid users, displayed as a stacked bar chart over 12 weeks, with a formula calculating feature adoption rate (unique users of feature / total active users).
