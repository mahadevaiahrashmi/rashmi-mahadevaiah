# Coda Doc Builder

## Purpose
Creates Coda documents leveraging the platform's unique capabilities — interactive tables, formulas, buttons, automations, and custom views — building docs that function as lightweight apps for team workflows.

## Auto-Trigger Patterns
- "Build a Coda doc for…"
- "Create a Coda page"
- "Set up a Coda workflow"
- "Design a Coda table with automations"
- Any request targeting Coda as the platform

## Tool Configuration
Requires `context/integrations/coda.md` with: Coda workspace URL, API token. Auth: API token generated from Coda account settings with doc read/write scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Document purpose, content or workflow description
- **Optional:** Table schema, formula needs, button actions, automation triggers, pack integrations

## Process
1. Design the document structure: pages, subpages, sections.
2. Create tables with typed columns: Text, Number, Select, Date, People, Formula.
3. Build formulas for calculated fields, lookups, and conditional formatting.
4. Add buttons for common actions (create row, send notification, change status).
5. Set up automations: time-based triggers, row change triggers, button triggers.
6. Configure views: Grid, Detail, Card, Calendar, Chart.
7. Add Coda Packs for external integrations (Slack, Gmail, GitHub).
8. Design interactive sections with controls and filters.

## Output Format
```
# Coda Doc: [Title]

## Pages
- 📊 Dashboard (overview with charts and key metrics)
- 📋 [Main Table Page]
- ⚙️ Settings (configuration and lookups)

## Tables

### [Table Name]
| Column | Type | Formula/Config |
|---|---|---|
| Name | Text | — |
| Status | Select | New, Active, Done, Blocked |
| Owner | People | — |
| Due Date | Date | — |
| Days Left | Formula | `DateTimeDiff(thisRow.Due Date, Today(), "days")` |
| Priority Score | Formula | `If(thisRow.Status="Blocked", 100, ...)` |

### Views
- **Active Items (Grid):** Filter Status ≠ Done, Sort by Due Date
- **By Owner (Card):** Group by Owner
- **Calendar:** By Due Date field
- **Chart:** Status distribution pie chart

## Buttons
| Button | Action | Location |
|---|---|---|
| ➕ New Item | Add row with defaults | Table toolbar |
| 📧 Notify Owner | Send Slack message | Row action |
| ✅ Mark Complete | Set Status=Done, add completion date | Row action |

## Automations
| Trigger | Condition | Action |
|---|---|---|
| Daily at 9am | Items due today | Send Slack reminder to Owner |
| Row changed | Status → Blocked | Notify PM in Slack |
| New row added | — | Set Created Date to today |

## Pack Integrations
- Slack: Send notifications, post updates
- Google Calendar: Sync due dates
```

## Quality Standards
- Formulas are readable and documented with clear column references.
- Buttons perform single, clear actions — not multi-step workflows (use automations for those).
- Automations have clear triggers and don't create notification overload.
- Views serve different user needs without duplicating data.
- Packs are used for integrations, not for data that should live natively in Coda.

## Permissions Required
Doc creator for full edit access. Workspace admin for Pack installation.

## Example
A sprint planning doc with: task table (12 columns including 3 formulas), 4 views (sprint board, calendar, by-engineer card view, burndown chart), 3 buttons (new task, mark done, reassign), 2 automations (daily standup reminder, overdue escalation), and Slack pack integration for notifications.
