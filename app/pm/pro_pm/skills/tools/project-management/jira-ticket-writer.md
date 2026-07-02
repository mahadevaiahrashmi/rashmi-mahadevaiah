# Jira Ticket Writer

## Purpose
Generates well-structured Jira issues (epics, stories, bugs, subtasks) that follow team conventions, include complete acceptance criteria, and provide enough context for engineers to begin work without follow-up questions.

## Auto-Trigger Patterns
- "Write a Jira ticket for…"
- "Create a story/epic/bug in Jira"
- "Draft Jira issues for this feature"
- "Break this into Jira tickets"
- Any request mentioning Jira issue types with a feature or bug description

## Tool Configuration
Requires `context/integrations/jira.md` with: Jira Cloud/Server URL, project key, API token or OAuth credentials, custom field IDs for story points and team-specific fields. Auth: API token (email + token) or OAuth 2.0.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature description or bug report, issue type (epic/story/bug/subtask)
- **Optional:** Sprint target, assignee, priority, linked issues, parent epic, components, labels, fix version, story point estimate

## Process
1. Identify the correct issue type and map to the project's workflow.
2. Write a concise Summary (max 80 chars, imperative voice: "Add…", "Fix…", "Enable…").
3. Build the Description using the structured template: Context, User Story (As a… I want… So that…), Acceptance Criteria (Given/When/Then), Technical Notes, Out of Scope, Dependencies.
4. Set Priority using the team's severity matrix (P1=Blocker through P4=Minor).
5. Suggest Story Points using relative sizing (1/2/3/5/8/13) with reasoning.
6. Add Labels matching project taxonomy and Components for ownership routing.
7. Link related issues (blocks, is-blocked-by, relates-to).
8. If epic, include child story breakdown as a checklist.

## Output Format
```
Summary: [Imperative verb] [feature/fix description]
Issue Type: [Epic | Story | Bug | Sub-task]
Priority: [P1-Blocker | P2-Critical | P3-Major | P4-Minor]
Labels: [comma-separated]
Components: [comma-separated]
Story Points: [1|2|3|5|8|13]
Fix Version: [version]
Epic Link: [PROJ-###]

Description:
## Context
[1-2 paragraphs of background]

## User Story
As a [persona], I want [action] so that [outcome].

## Acceptance Criteria
- [ ] Given [precondition], when [action], then [result]

## Technical Notes
[Implementation hints, API references, design links]

## Out of Scope
[Explicitly excluded items]

## Dependencies
[Linked tickets, external teams, infrastructure needs]
```

## Quality Standards
- Summary is scannable in a board view without truncation.
- Acceptance criteria are testable and unambiguous.
- No implementation prescription unless necessary for constraints.
- Story points reflect relative complexity, not hours.
- Every bug includes: steps to reproduce, expected vs actual behavior, environment.

## Permissions Required
Project member with Create Issue permission. Reporter role minimum.

## Example
```
Summary: Add CSV export to analytics dashboard
Issue Type: Story
Priority: P3-Major
Labels: analytics, export, q3-initiative
Components: Dashboard
Story Points: 5
Epic Link: DASH-142

Description:
## Context
Users frequently request raw data from the analytics dashboard for offline
analysis. Currently they screenshot or manually copy data.

## User Story
As a marketing analyst, I want to export dashboard data as CSV so that
I can build custom reports in my spreadsheet tool.

## Acceptance Criteria
- [ ] Given I am viewing any dashboard chart, when I click "Export", then a CSV downloads containing all visible data points
- [ ] Given I have date filters applied, when I export, then only filtered data is included
- [ ] Given the dataset exceeds 10k rows, when I export, then the system streams the file without timeout

## Technical Notes
- Reuse existing `/api/v2/reports/export` endpoint; extend format param
- Design mockup: [Figma link]

## Out of Scope
- PDF export (separate ticket DASH-198)
```
