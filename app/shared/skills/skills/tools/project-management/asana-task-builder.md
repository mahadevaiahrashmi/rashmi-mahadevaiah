# Asana Task Builder

## Purpose
Creates well-structured Asana tasks and projects with sections, subtasks, assignees, due dates, and custom fields — following Asana's organizational model to keep work trackable and actionable.

## Auto-Trigger Patterns
- "Create Asana tasks for…"
- "Set up an Asana project"
- "Build tasks in Asana format"
- "Add this to Asana"
- Any request targeting Asana as the work management tool

## Tool Configuration
Requires `context/integrations/asana.md` with: Asana workspace GID, project GID, personal access token or OAuth token. Auth: Personal Access Token or OAuth 2.0 service account.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Task description or project scope, workspace
- **Optional:** Project, section, assignee, due date, custom fields, followers, dependencies, tags

## Process
1. Determine scope — single task, task with subtasks, or full project structure.
2. For projects: define sections representing workflow stages or work categories.
3. Write task names — clear, action-oriented, starting with a verb.
4. Build task descriptions: context, requirements, definition of done.
5. Add subtasks for discrete steps within a larger task.
6. Set due dates, assignees, and custom field values.
7. Define dependencies (blocked by / blocking) for sequenced work.
8. Add tags for cross-project categorization.

## Output Format
```
# Asana Project: [Project Name]

## Project Settings
- Layout: [List | Board | Timeline]
- Custom Fields: [Field: Type (options)]

## Sections & Tasks

### Section: [Section Name]
#### Task: [Task name]
- Assignee: [Name]
- Due Date: [Date]
- Custom Fields: {Priority: High, Type: Feature}
- Description: [Context and requirements]
- Subtasks:
  - [ ] [Subtask 1] — [Assignee] — [Due]
- Dependencies: Blocked by [Task name]
- Tags: [tag1, tag2]
```

## Quality Standards
- Task names are scannable — verb-first, under 60 characters.
- Sections map to meaningful groupings.
- Subtasks represent discrete actions, not vague phases.
- Dependencies are explicit so timeline views are accurate.

## Permissions Required
Project member with task creation permissions. Project admin for custom field management.

## Example
A checkout redesign project with Design Phase section: "Create wireframes for checkout flow" assigned to Sarah, due Jun 10, with 3 subtasks (cart review, payment, confirmation wireframes), tagged checkout and q3-redesign.
