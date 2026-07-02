# GitHub Project Setup

## Purpose
Configures GitHub Projects (v2) — with board setup, custom fields, views, automation rules, and iteration planning — creating a lightweight project management layer directly within the GitHub development workflow.

## Auto-Trigger Patterns
- "Set up a GitHub Project"
- "Configure GitHub Projects for…"
- "Create a GitHub project board"
- "GitHub Projects v2 setup"
- "Organize work in GitHub Projects"

## Tool Configuration
Requires `context/integrations/github.md` with: GitHub organization, personal access token or GitHub App with project scope. Auth: Token with project and repo scopes. Organization owner for org-level projects.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Project purpose, repositories to connect, workflow type
- **Optional:** Custom fields, views, iteration schedule, automation rules, team members

## Process
1. Create the project (organization-level or user-level).
2. Add repositories and configure auto-add rules.
3. Create custom fields: status, priority, size, sprint, area.
4. Design views: board, table, roadmap.
5. Configure automation: auto-set status, auto-add from repos, auto-archive.
6. Set up iterations (sprints) with start/end dates.
7. Create saved filters and views for different audiences.
8. Document the workflow conventions.

## Output Format
```
# GitHub Project: [Name]

## Project Settings
- **Level:** [Organization | User]
- **Visibility:** [Public | Private]
- **Repositories:** [repo1, repo2, repo3]
- **Description:** [Project purpose]

## Custom Fields
| Field | Type | Options |
|---|---|---|
| Status | Single Select | Backlog, Ready, In Progress, In Review, Done |
| Priority | Single Select | P0-Critical, P1-High, P2-Medium, P3-Low |
| Size | Single Select | XS, S, M, L, XL |
| Sprint | Iteration | 2-week cycles |
| Area | Single Select | Frontend, Backend, Infrastructure, Design |

## Views

### Board View: Sprint Board
- **Layout:** Board grouped by Status
- **Filter:** Sprint = current iteration
- **Fields shown:** Title, Assignees, Priority, Size
- **Sort:** Priority ascending

### Table View: Full Backlog
- **Layout:** Table
- **Filter:** Status ≠ Done
- **Fields shown:** All custom fields
- **Sort:** Priority, then Size
- **Group by:** Area

### Roadmap View: Timeline
- **Layout:** Roadmap
- **Date field:** Sprint start/end
- **Group by:** Area
- **Filter:** Priority = P0 or P1

## Automation Rules
| Trigger | Action |
|---|---|
| Issue added to project | Set Status = Backlog |
| PR linked to issue | Set Status = In Review |
| PR merged | Set Status = Done |
| Issue closed | Set Status = Done, archive after 14 days |
| Issue opened in [repo] | Auto-add to project |

## Iteration Schedule
| Sprint | Start | End |
|---|---|---|
| Sprint 1 | [Date] | [Date] |
| Sprint 2 | [Date] | [Date] |
| Sprint 3 | [Date] | [Date] |

## Workflow Conventions
- **Backlog:** Triaged but not yet scheduled
- **Ready:** Refined, estimated, and scheduled for current sprint
- **In Progress:** Actively being worked on (max 2 per person)
- **In Review:** PR open, awaiting review
- **Done:** PR merged and deployed
```

## Quality Standards
- Custom fields are minimal — only fields the team will actually use and maintain.
- Views serve different audiences (sprint team vs PM vs stakeholders).
- Automations reduce manual status updates without hiding important state changes.
- WIP limits are enforced through conventions, not system restrictions.
- Iteration dates align with the team's actual sprint cadence.

## Permissions Required
Organization owner or project admin for project creation. Repository admin for auto-add rules.

## Example
A product engineering project with: 5 custom fields (Status, Priority, Size, Sprint, Area), 3 views (Sprint Board, Full Backlog table, Quarterly Roadmap), 5 automation rules (auto-add from 3 repos, PR-linked status updates, auto-archive), 2-week iterations for Q3, and documented workflow conventions for a team of 8 engineers.
