# ClickUp Task Builder

## Purpose
Creates structured work in ClickUp using its hierarchy (Spaces → Folders → Lists → Tasks) with custom fields, views, and automations — organizing project work for clear ownership, tracking, and reporting.

## Auto-Trigger Patterns
- "Create ClickUp tasks for…"
- "Set up a ClickUp space"
- "Build tasks in ClickUp"
- "Organize work in ClickUp"
- "ClickUp project structure for…"

## Tool Configuration
Requires `context/integrations/clickup.md` with: ClickUp workspace ID, API token (personal or OAuth). Auth: Personal API token or OAuth 2.0 with workspace scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Project description, target workspace
- **Optional:** Hierarchy structure, assignees, custom fields, automation rules, due dates, dependencies, tags

## Process
1. Design the hierarchy: Space (team/department) → Folder (project) → List (workstream/phase).
2. Create tasks with clear names, descriptions, assignees, and due dates.
3. Add subtasks and checklists for granular steps within tasks.
4. Configure custom fields: dropdown, number, date, text, formula, relationship.
5. Set task statuses matching the team's workflow.
6. Define dependencies and task relationships.
7. Create views: List, Board, Gantt, Calendar, Workload, Activity.
8. Set up automations for status changes, assignments, and notifications.
9. Add tags for cross-list categorization and filtering.

## Output Format
```
# ClickUp Structure: [Project Name]

## Hierarchy
- **Space:** [Team/Department]
  - **Folder:** [Project Name]
    - **List:** [Workstream 1]
    - **List:** [Workstream 2]

## Statuses
Open → In Progress → Review → Closed

## Custom Fields
| Field | Type | Options |
|---|---|---|
| Priority | Dropdown | Urgent, High, Normal, Low |
| Effort | Number | Points (1-13) |
| Feature Area | Dropdown | Frontend, Backend, Mobile |
| Sprint | Dropdown | Sprint 1, 2, 3 |

## Tasks

### List: [Workstream 1]
#### [Task Name]
- Assignee: [Name]
- Due Date: [Date]
- Priority: [Level]
- Effort: [Points]
- Tags: [tag1, tag2]
- Description: [Context and requirements]
- Subtasks:
  - [ ] [Step 1]
  - [ ] [Step 2]
- Dependencies: Waiting on [Task Name]

## Automations
| Trigger | Condition | Action |
|---|---|---|
| Status change | → Review | Notify reviewer |
| Due date | Overdue | Change priority to Urgent |
| Task created | In Sprint list | Apply template |

## Views
- **Board:** Kanban by status, filtered by assignee
- **Gantt:** Timeline with dependencies shown
- **Workload:** Capacity by team member
```

## Quality Standards
- Hierarchy depth is intentional — avoid over-nesting beyond 3 levels.
- Custom fields are consistent across lists in the same folder.
- Statuses are minimal and reflect actual workflow states.
- Automations reduce manual overhead without creating noise.
- Dependencies are used to surface blockers, not just for documentation.

## Permissions Required
Workspace member with Space creation rights. Custom field management requires admin or Space owner.

## Example
A mobile app project: 1 Space (Mobile), 1 Folder (v2 Redesign), 3 Lists (Design, Development, QA), 15 tasks with subtasks, 4 custom fields, Gantt view showing a 6-week timeline with 5 dependency chains, and 3 automations for status-based notifications.
