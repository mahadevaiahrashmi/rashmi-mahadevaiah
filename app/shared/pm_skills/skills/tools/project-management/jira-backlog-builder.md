# Jira Backlog Builder

## Purpose
Transforms a PRD, spec, or feature brief into a fully structured Jira backlog — an epic with decomposed stories, acceptance criteria, estimates, sequencing, and priority assignments ready for sprint planning.

## Auto-Trigger Patterns
- "Build a backlog from this PRD"
- "Break this spec into Jira stories"
- "Create an epic with stories for…"
- "Decompose this feature into tickets"
- "Set up the backlog for [project]"

## Tool Configuration
Requires `context/integrations/jira.md` with: Jira Cloud URL, project key, API token, custom field mappings. Auth: API token or OAuth 2.0 with issue creation scope.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** PRD, spec, or feature description document
- **Optional:** Target release/fix version, team capacity, sprint timeline, existing epic, priority framework

## Process
1. Parse the input document — extract goals, user stories, requirements, constraints, and success metrics.
2. Create the Epic with a clear name, summary, and description linking to the source document.
3. Decompose into stories using vertical slicing — each story delivers a thin, testable slice of value.
4. Write acceptance criteria for each story (Given/When/Then format).
5. Estimate using relative points (1/2/3/5/8/13). Flag any story > 8 points for further decomposition.
6. Sequence stories by dependency graph and value delivery order.
7. Set priorities: Must Have, Should Have, Could Have, Won't Have (MoSCoW).
8. Add cross-cutting concerns: error handling, analytics events, accessibility.
9. Validate completeness — ensure all PRD requirements map to at least one story.

## Output Format
```
# Backlog: [Epic Name]

## Epic
- Summary: [Epic title]
- Description: [Goal, scope, success metrics, link to PRD]
- Fix Version: [release]

## Stories (ordered by priority and sequence)

### 1. [Story Summary] — [Priority] — [X pts]
**User Story:** As a [persona], I want [action] so that [outcome].
**Acceptance Criteria:**
- [ ] Given…, when…, then…
**Dependencies:** [None | PROJ-###]

## Estimation Summary
| Priority | Stories | Points |
|---|---|---|
| Must Have | X | Y |
| Should Have | X | Y |
| Could Have | X | Y |

## Traceability
| PRD Requirement | Story |
|---|---|
| [Req 1] | STORY-1, STORY-3 |
```

## Quality Standards
- Every story is vertically sliced — no "backend only" or "frontend only" stories unless unavoidable.
- No story exceeds 8 points; larger items are decomposed further.
- Full traceability from PRD requirements to stories.
- Cross-cutting concerns are explicit, not assumed.

## Permissions Required
Project member with Create Issue and Epic creation permissions.

## Example
A PRD for "In-app notifications" produces: 1 epic, 8 stories totaling 29 points, with a dependency chain from notification service (3 pts) through UI components (5 pts) to preference management (3 pts), with clear MoSCoW priorities and traceability covering all 12 PRD requirements.
