# Acceptance Criteria Writer

## Purpose
Write detailed, testable acceptance criteria for user stories using Given/When/Then format — covering the happy path, edge cases, error states, performance expectations, and accessibility requirements. Well-written AC eliminates ambiguity between PM intent and engineering implementation.

## Auto-Trigger Patterns
- "write acceptance criteria for [story]"
- "add AC to these stories"
- "given/when/then for [feature]"
- "what are the acceptance criteria"
- "define done for [story]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| User story or feature description | Yes | User prompt |
| User personas | Optional | `context/products/*/customers.md` |
| Technical constraints | Optional | `context/products/*/tech-context.md` |
| Design specs | Optional | User prompt |
| Accessibility requirements | Optional | `context/company/processes.md` |

## Process
1. **Understand the story** — Restate the user story and identify the core value.
2. **Write happy path AC** — The primary flow. Given/When/Then.
3. **Write edge case AC** — Boundary conditions, unusual inputs, concurrent use, empty states.
4. **Write error state AC** — What happens when things go wrong. Error messages, recovery paths.
5. **Add performance criteria** — Load times, response times, concurrency limits.
6. **Add accessibility criteria** — Keyboard navigation, screen reader behavior, color contrast.
7. **Add data criteria** — Validation rules, format requirements, size limits.
8. **Quality-check** — Each criterion is independently testable. No ambiguity.

## Output Format
```
## Acceptance Criteria: [Story Title]

### Story
**As a** [persona], **I want** [action], **So that** [outcome].

### Happy Path
- **Given** [precondition]
  **When** [action taken]
  **Then** [expected result]

### Edge Cases
- **Given** [boundary condition]
  **When** [action]
  **Then** [behavior]

### Error States
- **Given** [error condition]
  **When** [action]
  **Then** [error handling]

### Performance
- [Criterion with specific threshold]

### Accessibility
- [WCAG-related criterion]

### Data Validation
- [Input rules, format, limits]

### Not In Scope
- [Explicitly excluded behaviors]
```

## Quality Standards
- Every criterion can be turned into a test case.
- Error states describe user-visible behavior, not internal exceptions.
- Performance criteria have specific numbers, not "fast."
- Criteria describe *what*, not *how*.

**Anti-patterns:** Vague criteria ("works correctly"), criteria restating the story, mixing implementation details, missing error states.

## Framework References
- **Given/When/Then (BDD)** — Behavior-driven format for testable specifications.
- **WCAG 2.1 AA** — Accessibility standards baseline.

## Formatting Guidelines
- Bold the Given/When/Then keywords.
- Group criteria by type.
- One criterion per bullet.
- Include "Not In Scope" section.

## Example
**Happy Path:** Given I'm viewing a dashboard with data, When I select "Last 7 days," Then all charts update to show only data from that period within 2 seconds.

**Edge Case:** Given I select a date range with no data, When the filter applies, Then I see: "No data available for this period."
