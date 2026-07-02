# Monday.com Board Setup

## Purpose
Configures a Monday.com board with the right columns, groups, automations, views, and dashboard widgets — creating a project management workspace tailored to the team's workflow and reporting needs.

## Auto-Trigger Patterns
- "Set up a Monday.com board"
- "Create a Monday board for…"
- "Configure Monday.com for [project]"
- "Build a Monday workspace"
- "Monday board structure for…"

## Tool Configuration
Requires `context/integrations/monday.md` with: Monday.com account URL, board ID or workspace ID, API token (v2). Auth: Personal API token or OAuth 2.0 app token.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Project name, workflow type (kanban, sprint, portfolio, CRM)
- **Optional:** Team members, column specifications, automation rules, integration needs, dashboard requirements

## Process
1. Select board type: Main Board (team-visible), Private, or Shareable.
2. Define groups representing workflow stages, categories, or sprints.
3. Configure columns: Status, People, Date, Numbers, Text, Dropdown, Formula, Mirror.
4. Set up automations: status change notifications, date-based reminders, item creation triggers.
5. Create views: Main Table, Kanban, Timeline (Gantt), Calendar, Chart, Workload.
6. Build dashboard with summary widgets: numbers, charts, battery, workload.
7. Set permissions and sharing settings.
8. Create item templates for recurring task types.

## Output Format
```
# Monday.com Board: [Board Name]

## Board Settings
- Type: Main Board
- Workspace: [Workspace name]
- Owner: [Name]

## Groups
| Group | Purpose | Color |
|---|---|---|
| Backlog | Unprioritized items | Gray |
| This Sprint | Active sprint work | Blue |
| In Review | Awaiting approval | Yellow |
| Done | Completed items | Green |

## Columns
| Column | Type | Options/Config |
|---|---|---|
| Status | Status | Not Started, Working, Stuck, Done |
| Owner | People | Team members |
| Priority | Dropdown | Critical, High, Medium, Low |
| Due Date | Date | Deadline reminder: 1 day before |
| Effort | Numbers | Story points (1-13) |
| Sprint | Dropdown | Sprint 1, Sprint 2, Sprint 3 |

## Automations
| Trigger | Action |
|---|---|
| Status → Done | Notify item creator |
| Due Date arrived | Notify Owner |
| Item created in "This Sprint" | Set Status to "Not Started" |
| Status → Stuck for 2 days | Notify board owner |

## Views
- **Main Table:** Default, grouped by Group
- **Kanban:** By Status column
- **Timeline:** By Due Date, colored by Priority
- **Dashboard:** Velocity chart, status breakdown, workload by person

## Item Templates
### Feature
- Pre-filled: Status=Not Started, Priority=Medium
- Description template with requirements checklist

### Bug
- Pre-filled: Status=Not Started, Priority=High
- Description template with repro steps
```

## Quality Standards
- Column types match actual data needs — avoid text columns where dropdowns enforce consistency.
- Automations reduce manual status updates without creating notification fatigue.
- Views serve distinct audiences: team (kanban), leadership (timeline), PM (dashboard).
- Groups align with the team's actual workflow, not an idealized process.

## Permissions Required
Board admin for column and automation configuration. Workspace admin for dashboard creation.

## Example
A product launch board with 4 groups (Planning, Design, Development, Launch), 8 columns including custom formulas for progress %, 5 automations for status transitions, and a dashboard showing timeline, workload distribution, and completion percentage across all groups.
