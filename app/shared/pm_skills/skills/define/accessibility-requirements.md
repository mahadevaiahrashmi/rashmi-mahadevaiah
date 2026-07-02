# Accessibility Requirements

## Purpose
Define comprehensive accessibility requirements — covering WCAG compliance, keyboard navigation, screen reader support, color contrast, focus management, and testing plans. Accessibility broadens market reach, avoids legal risk, and is a fundamental quality dimension.

## Auto-Trigger Patterns
- "define accessibility requirements"
- "a11y requirements for [feature]"
- "WCAG compliance for [product]"
- "make [feature] accessible"
- "accessibility checklist for [project]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature or component description | Yes | User prompt |
| Target WCAG level | Optional (default: AA) | User prompt |
| Existing a11y standards | Optional | `context/company/processes.md` |
| Design specs | Optional | User prompt |

## Process
1. **Set compliance level** — WCAG 2.1 AA as baseline.
2. **Audit interaction patterns** — Identify all interactive elements.
3. **Define keyboard requirements** — Tab order, focus traps, shortcuts.
4. **Define screen reader requirements** — ARIA labels, roles, live regions, heading hierarchy.
5. **Set visual requirements** — Color contrast, text sizing, color-independent information.
6. **Define focus management** — Focus behavior on page transitions, modal open/close.
7. **Plan testing** — Automated tools, manual testing, assistive technology matrix.
8. **Quality-check** — Requirements cover POUR (Perceivable, Operable, Understandable, Robust).

## Output Format
```
## Accessibility Requirements: [Feature Name]
**Compliance Target:** WCAG 2.1 Level AA

### Keyboard Navigation
| Element | Keyboard Behavior | Tab Order |
|---------|-------------------|-----------|

### Screen Reader Support
| Element | ARIA Role | ARIA Label | Announcements |
|---------|-----------|------------|---------------|

### Visual Requirements
| Criterion | Standard | Requirement |
|-----------|----------|-------------|

### Focus Management
| Scenario | Focus Behavior |
|----------|---------------|

### Testing Plan
| Method | Tool | Coverage | Frequency |
|--------|------|----------|-----------|
```

## Quality Standards
- Requirements cover all four POUR principles.
- Every interactive element has keyboard and screen reader specs.
- Testing plan includes automated and manual methods.
- Requirements are specific enough for eng to implement.

**Anti-patterns:** "Make it accessible" without specifics, automated-only testing, ignoring keyboard navigation, treating a11y as final polish.

## Framework References
- **WCAG 2.1** — Web Content Accessibility Guidelines.
- **ARIA Authoring Practices** — W3C patterns for common widgets.
- **POUR** — Perceivable, Operable, Understandable, Robust.

## Formatting Guidelines
- Tables for element-level requirements.
- Include specific WCAG success criterion references.
- Group by requirement type, not WCAG number.

## Example
**Keyboard:** "Date picker: arrow keys to navigate, Enter to select, Escape to close. Focus returns to trigger button on close."
