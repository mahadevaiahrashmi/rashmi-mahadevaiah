# Notion Workspace Setup

## Purpose
Designs a complete Notion workspace — pages, databases, relations, rollups, views, templates, and permissions — creating an organized system for team knowledge management and project tracking.

## Auto-Trigger Patterns
- "Set up a Notion workspace"
- "Organize Notion for our team"
- "Design a Notion system for…"
- "Configure Notion databases and relations"
- "Build a Notion workspace from scratch"

## Tool Configuration
Requires `context/integrations/notion.md` with: Notion workspace ID, admin integration token. Auth: Internal integration token with workspace-level access. Workspace owner permissions for member management.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Team/organization purpose, primary use cases (docs, projects, wiki, CRM)
- **Optional:** Team structure, existing content to migrate, database schema needs, template requirements, permission model

## Process
1. Define workspace structure: top-level pages as navigation hubs.
2. Design the database schema: tables, properties, relations between databases.
3. Configure relations and rollups for connected data.
4. Create views for each database: Table, Board, Calendar, Gallery, Timeline.
5. Build page templates for recurring content types.
6. Set up team spaces with appropriate permissions.
7. Create a homepage with quick navigation and key dashboards.
8. Document workspace conventions and onboarding guide.

## Output Format
```
# Notion Workspace: [Name]

## Top-Level Structure
- 🏠 Home (team dashboard)
- 📋 Projects (database)
- 📝 Docs (wiki pages)
- 🗓️ Meetings (database)
- 🎯 OKRs (database)
- 👥 Team (database)

## Database Schema

### Projects Database
| Property | Type | Config |
|---|---|---|
| Name | Title | — |
| Status | Select | Planning, Active, Complete |
| Lead | Relation → Team | Single |
| OKR | Relation → OKRs | Multiple |
| Tasks | Relation → Tasks | Multiple |
| Task Count | Rollup | Count of Tasks |
| Completion % | Rollup | % Tasks where Status=Done |
| Start Date | Date | — |
| End Date | Date | — |

### Tasks Database
| Property | Type | Config |
|---|---|---|
| Name | Title | — |
| Project | Relation → Projects | Single |
| Assignee | Relation → Team | Single |
| Status | Select | Todo, In Progress, Done |
| Priority | Select | P0, P1, P2, P3 |

## Relations Map
Projects ↔ Tasks (one-to-many)
Projects ↔ OKRs (many-to-many)
Projects ↔ Team (many-to-one lead)
Tasks ↔ Team (many-to-one assignee)
Meetings → Projects (many-to-many)

## Views
### Projects Database Views
- **Active Projects (Board):** Filter Status=Active, Group by Lead
- **Timeline (Timeline):** By Start/End Date
- **All Projects (Table):** No filter, Sort by Status

## Templates
| Template | Database | Pre-filled Properties |
|---|---|---|
| New Project | Projects | Status=Planning, template tasks |
| Weekly Meeting | Meetings | Agenda template, date=today |
| Feature Spec | Docs | Heading structure, sections |

## Permissions
| Space | Access |
|---|---|
| Home | Full team — view + edit |
| Projects | Full team — view + edit |
| OKRs | Leadership — edit; Team — view |
| Team | Admin — edit; Team — view |
```

## Quality Standards
- Database relations create a connected system, not isolated tables.
- Rollups surface useful aggregated data (completion %, counts).
- Views are purpose-built — each view serves a specific question.
- Templates reduce friction for common actions.
- Permission model prevents accidental edits to sensitive data.

## Permissions Required
Workspace owner for full setup. Admin for database and permission configuration.

## Example
A product team workspace with 5 interconnected databases (Projects, Tasks, OKRs, Team, Meetings), 8 relations creating a fully connected data model, 15 purpose-built views, 4 templates, and role-based permissions separating leadership OKR editing from team-level task management.
