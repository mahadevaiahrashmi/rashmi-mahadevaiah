# Figma Spec Annotation

## Purpose
Creates detailed specification annotations for Figma designs — documenting behavior notes, edge cases, state descriptions, interaction details, and copy specifications — bridging the gap between design mockups and engineering implementation.

## Auto-Trigger Patterns
- "Annotate the Figma specs"
- "Write design specs for…"
- "Add behavior notes to Figma"
- "Spec out this design for engineering"
- "Document the interaction details"

## Tool Configuration
Requires `context/integrations/figma.md` with: Figma file URL, editor access token. Auth: Personal access token with file write scope for adding annotations. FigJam access for annotation boards.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Figma design frames, feature requirements
- **Optional:** Interaction flows, API contracts, analytics events, accessibility requirements, copy deck

## Process
1. Review each screen and identify all interactive elements.
2. Document behavior for each element: default, hover, active, disabled, focus states.
3. Describe transitions and animations between states.
4. Specify edge cases: empty states, max content, error conditions, loading.
5. Write exact copy specifications with character limits.
6. Note conditional logic (show/hide rules, permissions-based UI).
7. Define responsive behavior across breakpoints.
8. List analytics events to fire on key interactions.
9. Add accessibility annotations (ARIA labels, tab order, screen reader text).

## Output Format
```
# Design Spec: [Feature Name]
**Figma File:** [URL]
**Spec Author:** [Name] | **Date:** [Date]

## Screen: [Screen Name]

### Element: [Element Name/ID]
**Type:** [Button | Input | Modal | Card | etc.]
**States:**
- Default: [Description]
- Hover: [Description + visual change]
- Active/Pressed: [Description]
- Disabled: [When disabled + visual treatment]
- Loading: [Spinner/skeleton/disabled with indicator]
- Error: [Error display behavior]

**Behavior:**
- Click/Tap: [What happens]
- Keyboard: [Enter triggers action, Esc closes]
- Long press: [Mobile behavior if applicable]

**Conditions:**
- Show when: [Condition]
- Hide when: [Condition]
- Disable when: [Condition]

### Copy Specifications
| Element | Copy | Max Chars | Notes |
|---|---|---|---|
| [Heading] | "[Exact text]" | 60 | Truncate with ellipsis |
| [CTA Button] | "[Exact text]" | 20 | — |
| [Error message] | "[Exact text]" | 100 | Red text below input |
| [Empty state] | "[Exact text]" | 150 | Center-aligned with icon |

### Transitions
| From | To | Animation | Duration |
|---|---|---|---|
| [State A] | [State B] | Fade in | 200ms ease-out |
| [Screen 1] | [Screen 2] | Slide left | 300ms ease-in-out |

### Edge Cases
| Scenario | Behavior |
|---|---|
| No data available | Show empty state illustration + CTA |
| Text exceeds container | Truncate with "…" after 2 lines |
| Network error | Show inline error with retry button |
| Session expired | Redirect to login, preserve deep link |

### Responsive Behavior
| Breakpoint | Layout Change |
|---|---|
| Desktop (>1024px) | 3-column grid |
| Tablet (768-1024px) | 2-column grid |
| Mobile (<768px) | Single column, stacked |

### Analytics Events
| Trigger | Event Name | Properties |
|---|---|---|
| Button click | `feature_cta_clicked` | button_text, screen |
| Form submit | `form_submitted` | form_type, field_count |
| Error shown | `error_displayed` | error_type, screen |

### Accessibility
- Tab order: [Element sequence]
- ARIA label: "[Screen reader text]"
- Role: [button | link | dialog | alert]
- Live region: [For dynamic content updates]
```

## Quality Standards
- Every interactive element has all relevant states documented.
- Copy is exact — no "something like this" placeholder text.
- Edge cases cover realistic failure modes, not just happy path.
- Responsive behavior is specified at each breakpoint.
- Analytics events follow the project's tracking plan naming conventions.
- Accessibility annotations enable WCAG 2.1 AA compliance.

## Permissions Required
Figma editor access for adding annotations. Viewer access for spec-only documentation.

## Example
A checkout form spec with: 6 input fields (each with 5 states), 2 buttons (primary CTA with loading state, secondary cancel), inline validation rules, 4 error messages with exact copy, responsive layout for 3 breakpoints, 5 analytics events, tab order annotation, and 3 edge cases (expired session, payment failure, network timeout).
