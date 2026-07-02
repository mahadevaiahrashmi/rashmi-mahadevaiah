# Linear Issue Writer

## Purpose
Creates Linear issues that follow Linear's conventions — concise, action-oriented titles with structured descriptions, proper priority levels, and organized sub-issues for larger features.

## Auto-Trigger Patterns
- "Write a Linear issue for…"
- "Create a Linear ticket"
- "Draft issues in Linear format"
- "Add this to Linear"
- Any request specifying Linear as the target tool

## Tool Configuration
Requires `context/integrations/linear.md` with: Linear workspace slug, team identifier, API key. Auth: Personal API key or OAuth application token.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature description or bug report, team
- **Optional:** Project, cycle, priority, assignee, labels, parent issue, estimate, due date

## Process
1. Write a concise title — imperative mood, under 60 characters, no ticket prefixes.
2. Set Priority: Urgent (P0), High (P1), Medium (P2), Low (P3), No Priority.
3. Build description following Linear's markdown conventions: brief context, requirements list, technical notes.
4. Add labels from team's label set (feature, bug, improvement, chore).
5. Assign to project and cycle if specified.
6. For larger features, create sub-issues that each represent a shippable unit.
7. Set estimate using Linear's point scale.
8. Link related issues using Linear's relation types.

## Output Format
```
Title: [Concise imperative action]
Team: [Team identifier]
Priority: [Urgent | High | Medium | Low]
Project: [Project name]
Cycle: [Cycle name]
Labels: [comma-separated]
Estimate: [points]

Description:
[1-2 sentence context]

### Requirements
- [ ] [Specific, testable requirement]

### Technical Notes
[Implementation guidance, links, constraints]

### Sub-issues (if applicable)
1. [Sub-issue title] — [estimate]
```

## Quality Standards
- Titles are scannable in Linear's list view — no redundant prefixes.
- Descriptions are concise; Linear favors brevity over verbose templates.
- Sub-issues are independently shippable, not arbitrary task splits.
- Labels match the team's existing taxonomy.

## Permissions Required
Team member with issue creation access.

## Example
```
Title: Add keyboard shortcuts to command palette
Team: Product
Priority: Medium
Project: Developer Experience
Labels: improvement, ux
Estimate: 3

Description:
Power users have requested keyboard shortcuts for frequently used
command palette actions.

### Requirements
- [ ] Support Cmd+K → Cmd+[1-9] for pinned actions
- [ ] Show shortcut hints next to action names
- [ ] Allow users to customize shortcuts in settings
```
