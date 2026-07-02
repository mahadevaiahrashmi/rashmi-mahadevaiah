# Linear Project Setup

## Purpose
Configures a new Linear project with milestones, labels, workflows, templates, and team assignments — providing a complete project structure guide that aligns with Linear's opinionated workflow model.

## Auto-Trigger Patterns
- "Set up a Linear project for…"
- "Configure Linear for [initiative]"
- "Create a new project in Linear"
- "Organize Linear workspace for…"
- "Linear project structure for…"

## Tool Configuration
Requires `context/integrations/linear.md` with: Linear workspace slug, team identifiers, API key with workspace admin scope. Auth: API key or OAuth token with project management permissions.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Project name, goal/description, team(s) involved
- **Optional:** Timeline, milestone dates, label scheme, workflow customizations, template needs

## Process
1. Define the project with name, description, target date, and lead.
2. Create milestones marking key delivery checkpoints.
3. Set up or extend the label taxonomy for the project.
4. Review workflow states (Backlog → Todo → In Progress → Done → Canceled).
5. Create issue templates for recurring patterns.
6. Assign team members with appropriate roles.
7. Configure project views: board, list, timeline.
8. Set up cycle cadence if the team uses cycles.

## Output Format
```
# Linear Project Setup: [Project Name]

## Project Details
- **Name:** [Project name]
- **Description:** [1-2 sentence goal]
- **Lead:** [Name]
- **Target Date:** [Date]

## Milestones
| Milestone | Target Date | Description |
|---|---|---|
| Alpha | [Date] | Core functionality complete |
| Beta | [Date] | Feature-complete, testing |
| Launch | [Date] | GA release |

## Labels
| Label | Color | Purpose |
|---|---|---|
| scope:core | Blue | Core feature work |
| scope:polish | Green | UX refinement |

## Issue Templates
### Bug Report
- Title: [Bug] [Brief description]
- Fields: Steps to reproduce, Expected, Actual, Environment

## Cycle Configuration
- Duration: 2 weeks
- Start day: Monday
```

## Quality Standards
- Milestones represent meaningful delivery checkpoints.
- Labels follow a namespace convention for filtering.
- Workflow states are minimal — only states the team will actually use.
- Setup is documented so new team members can onboard.

## Permissions Required
Workspace admin or team admin for project creation and configuration.

## Example
Setting up "Mobile App v2": 3 milestones, 6 labels, default workflow with added "In Review" state, 2 issue templates, 2-week cycles, team of 5 with mobile lead as project lead.
