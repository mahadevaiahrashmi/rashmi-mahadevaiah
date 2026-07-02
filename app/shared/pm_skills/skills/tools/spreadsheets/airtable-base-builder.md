# Airtable Base Builder

## Purpose
Designs Airtable bases with tables, fields, views, linked records, formulas, automations, and interfaces — creating flexible, relational databases that serve as lightweight project management and data tracking tools for PM teams.

## Auto-Trigger Patterns
- "Build an Airtable base"
- "Set up Airtable for…"
- "Create an Airtable tracker"
- "Airtable database for…"
- "Design an Airtable workspace"

## Tool Configuration
Requires `context/integrations/airtable.md` with: Airtable workspace ID, personal access token or OAuth integration token. Auth: Personal access token with base create/write scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Base purpose, data to track, key relationships
- **Optional:** Automation needs, interface designs, integration requirements, formula logic, sync sources

## Process
1. Design the relational data model: tables, fields, and relationships.
2. Create tables with appropriate field types.
3. Set up linked record fields for relationships between tables.
4. Build rollup and lookup fields for aggregated/referenced data.
5. Create formula fields for calculated values.
6. Configure views: Grid, Kanban, Calendar, Gallery, Gantt, Form.
7. Set up automations for workflow triggers.
8. Design interfaces for user-friendly data interaction.

## Output Format
```
# Airtable Base: [Name]

## Data Model

### Table: [Table Name]
| Field | Type | Config | Purpose |
|---|---|---|---|
| Name | Primary (Text) | — | Record identifier |
| Status | Single Select | Todo, In Progress, Done, Blocked | Workflow state |
| Owner | Collaborator | — | Assigned person |
| Priority | Single Select | P0, P1, P2, P3 | Urgency level |
| Due Date | Date | Include time: No | Deadline |
| Projects | Linked Record → Projects | Allow multiple | Parent project |
| Project Status | Lookup | Projects → Status | Referenced data |
| Total Tasks | Rollup | Tasks → COUNT | Aggregated count |
| Days Until Due | Formula | `DATETIME_DIFF(Due Date, TODAY(), 'days')` | Calculated field |
| Attachments | Attachment | — | Related files |

### Table: [Related Table]
...

## Relationships
| From Table | Field | To Table | Type |
|---|---|---|---|
| Tasks | Projects | Projects | Many-to-One |
| Projects | Team Members | People | Many-to-Many |
| Projects | Milestones | Milestones | One-to-Many |

## Views
### Table: [Table Name]
| View | Type | Filter | Sort | Group | Fields |
|---|---|---|---|---|---|
| All Tasks | Grid | None | Due Date asc | Status | All |
| My Tasks | Grid | Owner = me | Priority desc | — | Key fields |
| Board | Kanban | Active only | Priority | Status stacks | Summary |
| Calendar | Calendar | Has due date | — | — | Name, Owner |
| Timeline | Gantt | Active projects | Start date | — | Key fields |
| Intake Form | Form | — | — | — | Required fields |

## Automations
| Trigger | Condition | Action |
|---|---|---|
| Record enters view "Overdue" | Due Date < Today | Send email to Owner |
| Status changed to Done | — | Update completion date, notify PM |
| New form submission | — | Send Slack notification to channel |

## Interfaces
### Interface: Project Dashboard
- **Widgets:**
  - Summary numbers: Total tasks, Completed, Overdue
  - Chart: Status distribution
  - Grid: Upcoming deadlines (filtered, sorted)
  - Button: Create new task
```

## Quality Standards
- Linked records create genuine relationships, not duplicated data.
- Rollups and lookups surface related data without manual entry.
- Views are purpose-built — each view answers a specific question.
- Formulas use Airtable's function syntax correctly (differs from Excel).
- Automations reduce manual work without creating notification spam.
- Interfaces provide simplified access for stakeholders who don't need full base access.

## Permissions Required
Airtable Creator for base creation. Owner for automation and interface configuration.

## Example
A product launch tracker base with: 4 tables (Projects, Tasks, Team, Milestones), 6 linked record relationships, 3 rollup fields (task count, completion %, days to milestone), 5 views per table (grid, kanban, calendar, filtered, form), 3 automations (overdue alerts, completion notifications, intake processing), and a stakeholder dashboard interface with summary charts and filterable task list.
