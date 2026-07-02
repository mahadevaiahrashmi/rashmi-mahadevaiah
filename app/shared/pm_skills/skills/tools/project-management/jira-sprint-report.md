# Jira Sprint Report

## Purpose
Generates a comprehensive sprint report summarizing velocity, burndown trends, completion rates, carry-over items, and overall sprint health — formatted for stakeholder review in Jira dashboards or Confluence pages.

## Auto-Trigger Patterns
- "Generate a sprint report"
- "Summarize this sprint"
- "What's our sprint velocity?"
- "Sprint retro data"
- "Create burndown narrative for sprint…"

## Tool Configuration
Requires `context/integrations/jira.md` with: Jira Cloud URL, project key, board ID, API token. Needs read access to sprint data, issue history, and changelogs. Auth: API token or OAuth 2.0.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Sprint name or ID, project key, board ID
- **Optional:** Comparison sprints (for velocity trend), team name, stakeholder audience (exec vs team)

## Process
1. Pull sprint data: start/end dates, committed issues, completed issues, added/removed mid-sprint.
2. Calculate velocity: completed story points vs committed. Compare to 3-sprint rolling average.
3. Build burndown narrative: identify plateaus, late completions, scope changes.
4. List carry-over items with reasons (blocked, underestimated, added late).
5. Categorize completed work by epic/theme for stakeholder context.
6. Assess sprint health using signals: commitment accuracy, scope change %, blocked time.
7. Generate improvement suggestions based on patterns.

## Output Format
```
# Sprint Report: [Sprint Name] — [Date Range]

## Summary
| Metric | Value |
|---|---|
| Committed | X stories / Y points |
| Completed | X stories / Y points |
| Velocity | Y points (avg: Z) |
| Commitment Accuracy | XX% |
| Scope Change | +A / -B items mid-sprint |

## Burndown Narrative
[2-3 sentences describing the sprint's burn pattern]

## Completed Work
### [Epic/Theme 1]
- PROJ-101: Description (X pts)

## Carry-Over Items
| Ticket | Points | Reason |
|---|---|---|
| PROJ-110 | 3 | Blocked by API dependency |

## Sprint Health: [Healthy | At Risk | Unhealthy]
[Assessment paragraph with supporting data]

## Recommendations
- [Actionable improvement suggestion]
```

## Quality Standards
- All metrics are derived from actual sprint data, not estimates.
- Burndown narrative explains *why*, not just *what*.
- Carry-over reasons are specific and actionable.
- Health assessment is honest — no sugarcoating systemic issues.
- Recommendations tie to observable patterns across 2+ sprints.

## Permissions Required
Board viewer access. Scrum Master or PM role for full sprint data.

## Example
A sprint report showing 29 of 34 committed points completed (85% accuracy), 2-day plateau due to staging outage, 2 carry-overs both added mid-sprint, healthy assessment with recommendation to reduce mid-sprint additions.
