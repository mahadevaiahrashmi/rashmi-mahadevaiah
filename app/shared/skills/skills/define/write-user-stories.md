# Write User Stories

## Purpose
Convert product requirements into properly formatted, INVEST-compliant user stories with acceptance criteria that engineering can estimate, design can prototype against, and QA can verify. Good stories bridge the gap between product intent and implementation clarity.

## Auto-Trigger Patterns
- "write user stories for [feature]"
- "break this PRD into stories"
- "create stories from these requirements"
- "convert this to user stories"
- "help me write acceptance criteria"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| PRD, brief, or feature description | Yes | User prompt or PRD file |
| User personas / segments | No | `context/products/*/customers.md` |
| Technical constraints | Optional | `context/products/*/tech-context.md` |
| Design context | Optional | User prompt |
| Existing story backlog | Optional | User prompt |

## Process
1. **Identify personas** — Extract distinct user types from the requirements. Each persona gets stories written from their perspective.
2. **Map user flows** — Walk through the end-to-end experience. Identify every action, decision point, and outcome.
3. **Draft stories in INVEST format** — Each story is Independent, Negotiable, Valuable, Estimable, Small, Testable.
4. **Write acceptance criteria** — Given/When/Then for each story. Cover: happy path, edge cases, error states.
5. **Add non-functional criteria** — Performance, accessibility, security requirements per story where relevant.
6. **Size check** — If a story takes more than one sprint, split it. If it's trivial, combine with related stories.
7. **Dependency scan** — Flag stories that depend on others. Suggest sequencing.
8. **Quality-check** — Each story delivers user value. No technical tasks disguised as stories. Acceptance criteria are testable.

## Output Format
```
## User Stories: [Feature Name]

### Epic: [Epic Name]

#### Story 1: [Short Title]
**As a** [persona],
**I want** [action/capability],
**So that** [outcome/benefit].

**Acceptance Criteria:**
- **Given** [context], **When** [action], **Then** [result]
- **Given** [context], **When** [action], **Then** [result]

**Edge Cases:**
- [Edge case and expected behavior]

**Notes:** [Technical context, design references]
**Size:** [T-shirt estimate]
**Dependencies:** [Other stories or teams]

---
```

## Quality Standards
- Every story delivers value to a real user — no "as a system" stories.
- Acceptance criteria are specific enough to write tests against.
- Stories are small enough to complete in one sprint.
- Edge cases and error states are explicit, not assumed.
- Stories are independent — reordering them doesn't break the plan.

**Anti-patterns:** Technical tasks as stories ("As a developer, I want to refactor..."), missing acceptance criteria, stories too large to estimate, acceptance criteria that restate the story.

## Framework References
- **INVEST** — Criteria for well-formed user stories (Independent, Negotiable, Valuable, Estimable, Small, Testable).
- **Given/When/Then** — Behavior-driven acceptance criteria format.
- **User Story Mapping** — Context for how stories fit into the larger flow.

## Formatting Guidelines
- Group stories under epics.
- Use the exact "As a / I want / So that" format.
- Bold the Given/When/Then keywords.
- Include a summary table of all stories with sizes at the end.

## Example
**Story:** "As a *marketing manager*, I want to *schedule reports to auto-send weekly*, so that *my stakeholders get updates without me manually exporting*."

**AC:** Given I've configured a weekly schedule, When Monday 9am arrives, Then the report is emailed to my distribution list in PDF format with data current as of 8am.

**Edge Case:** If the report fails to generate, the system sends me an error notification instead of a blank report.
