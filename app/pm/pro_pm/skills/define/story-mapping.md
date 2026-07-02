# Story Mapping

## Purpose
Apply Jeff Patton's User Story Mapping technique to organize stories in a 2D grid that reveals the user journey, identifies the walking skeleton (thinnest end-to-end slice), and visualizes release boundaries. Story mapping keeps the team focused on delivering complete user outcomes rather than isolated features.

## Auto-Trigger Patterns
- "create a story map"
- "map user stories for [feature]"
- "build a story map for [initiative]"
- "help me visualize the backlog"
- "what's the walking skeleton for [product]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature or initiative description | Yes | User prompt |
| User stories or requirements | Yes | User prompt or PRD |
| User personas | Optional | `context/products/*/customers.md` |
| Technical constraints | Optional | `context/products/*/tech-context.md` |
| Release constraints | Optional | User prompt |

## Process
1. **Identify the backbone** — Map high-level user activities from left to right.
2. **Break into tasks** — Under each activity, list the specific user tasks.
3. **Add stories** — Under each task, arrange user stories vertically by priority.
4. **Define the walking skeleton** — Draw a horizontal line across the top: the thinnest end-to-end slice.
5. **Define release slices** — Additional horizontal lines for subsequent releases.
6. **Identify gaps** — Activities with no stories? Tasks without coverage?
7. **Validate** — Walk through the map as a user. Does the walking skeleton actually work?
8. **Quality-check** — Map tells a coherent user story from left to right.

## Output Format
```
## Story Map: [Feature/Initiative]
**User:** [Primary persona]

### Backbone (User Activities)
[Activity 1] → [Activity 2] → [Activity 3] → [Activity 4]

### Story Map Grid
| | Activity 1 | Activity 2 | Activity 3 | Activity 4 |
|-----------|-----------|-----------|-----------|-----------|
| **Tasks** | Task 1a | Task 2a | Task 3a | Task 4a |
| ── Release 1 (Walking Skeleton) ── |
| | Story 1a.1 | Story 2a.1 | Story 3a.1 | Story 4a.1 |
| ── Release 2 ── |
| | Story 1a.2 | Story 2a.2 | Story 3a.2 | Story 4a.2 |

### Walking Skeleton Validation
[Walkthrough of the minimum end-to-end flow]

### Gaps Identified
| Gap | Location | Impact | Resolution |
|-----|----------|--------|------------|

### Release Summary
| Release | Theme | Stories | Value Delivered |
|---------|-------|---------|----------------|
```

## Quality Standards
- Backbone represents the user's journey, not the team's build order.
- Walking skeleton is genuinely end-to-end.
- Vertical priority reflects user value, not technical convenience.
- Each release slice delivers incremental, demonstrable value.

**Anti-patterns:** Organizing by component instead of user activity, walking skeleton that skips critical steps, releases that don't deliver user value.

## Framework References
- **User Story Mapping (Jeff Patton)** — Core technique for 2D backlog visualization.
- **Walking Skeleton** — Thinnest end-to-end implementation.
- **Incremental Delivery** — Ship value in slices, not layers.

## Formatting Guidelines
- Use wide tables or text-based grids.
- Draw clear horizontal lines for release boundaries.
- Left-to-right = user journey flow. Top-to-bottom = priority.

## Example
**Backbone:** Sign Up → Connect Data → Configure Dashboard → Share Insights

**Walking Skeleton:** Email signup (no SSO) → CSV upload (no API) → Default dashboard (no custom) → Share link (no permissions).
