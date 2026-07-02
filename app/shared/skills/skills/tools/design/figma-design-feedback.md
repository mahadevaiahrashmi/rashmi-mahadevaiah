# Figma Design Feedback

## Purpose
Provides structured, actionable feedback on Figma designs — organized by screen/component, categorized by severity and type, with specific suggestions — enabling productive design reviews that move work forward.

## Auto-Trigger Patterns
- "Review this Figma design"
- "Give feedback on the mockups"
- "Design review for…"
- "Comment on the Figma file"
- "What's wrong with this design?"

## Tool Configuration
Requires `context/integrations/figma.md` with: Figma file URL, access token. Auth: Personal access token or OAuth with file read scope. Figma viewer access minimum.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Figma file/frame URL or design screenshots
- **Optional:** Design brief/requirements, target personas, brand guidelines, accessibility requirements, competitive references

## Process
1. Review each screen/component systematically against requirements.
2. Categorize feedback by type: Usability, Visual, Content/Copy, Accessibility, Consistency.
3. Assign severity: Critical (blocks launch), Major (should fix), Minor (nice to fix).
4. Write specific, actionable suggestions — not just problems.
5. Note what works well — positive feedback reinforces good decisions.
6. Reference specific frames/components by name or node ID.
7. Consider edge cases: empty states, error states, loading states, long text.
8. Organize feedback for the design review conversation.

## Output Format
```
# Design Review: [Feature/Screen Name]
**Figma File:** [URL]
**Reviewer:** [Name] | **Date:** [Date]
**Overall Assessment:** [Ready with minor changes | Needs revisions | Needs rethinking]

## What's Working Well
- [Positive observation about layout/interaction/visual]
- [Positive observation]

## Feedback by Screen

### [Screen/Component Name]

#### Critical
| # | Type | Feedback | Suggestion |
|---|---|---|---|
| C1 | Usability | [Problem description] | [Specific fix] |
| C2 | Accessibility | [Problem description] | [Specific fix] |

#### Major
| # | Type | Feedback | Suggestion |
|---|---|---|---|
| M1 | Visual | [Problem description] | [Specific fix] |
| M2 | Content | [Problem description] | [Specific fix] |

#### Minor
| # | Type | Feedback | Suggestion |
|---|---|---|---|
| m1 | Consistency | [Problem description] | [Specific fix] |

### [Screen/Component Name]
...

## Missing States
- [ ] Empty state for [component]
- [ ] Error state for [form/action]
- [ ] Loading state for [data fetch]
- [ ] Overflow behavior for [long text area]

## Accessibility Notes
- [ ] Color contrast on [element]: [current ratio] → needs [4.5:1 min]
- [ ] Touch target on [element]: [current size] → needs [44x44px min]
- [ ] Missing alt text for [image/icon]

## Summary
| Severity | Count |
|---|---|
| Critical | X |
| Major | X |
| Minor | X |
| **Total** | **X** |

**Recommended next step:** [Address criticals, then review again | Ready for eng handoff]
```

## Quality Standards
- Feedback is specific — reference exact elements, not "the button looks off."
- Suggestions are included with every critique — don't just identify problems.
- Severity is calibrated honestly — not everything is critical.
- Edge cases and missing states are explicitly called out.
- Accessibility is always evaluated, not treated as optional.
- Positive feedback is genuine, not perfunctory.

## Permissions Required
Figma viewer access for review. Editor access for leaving comments directly in Figma.

## Example
A checkout flow review with: 3 positive notes (clear progression, good form layout, consistent spacing), 2 critical items (no error states for payment failure, color contrast fails WCAG on CTA), 4 major items (missing loading state, inconsistent icon style, copy clarity, mobile tap targets), 3 minor items (alignment, spacing inconsistency, hover state), and 4 missing states flagged.
