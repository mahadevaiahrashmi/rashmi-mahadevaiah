# Design Review

## Purpose
Provide structured, actionable design feedback against product requirements — evaluating whether the design solves the user problem, handles edge cases, meets accessibility standards, maintains design system consistency, and is technically feasible. Turns subjective "I don't like it" feedback into prioritized, constructive critique.

## Auto-Trigger Patterns
- "review this design"
- "give feedback on [design/mockup/prototype]"
- "design review for [feature]"
- "does this design solve [problem]"
- "what's missing in this design"
- "design critique for [screen/flow]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Design artifact (description or link) | Yes | User prompt |
| User problem / requirements | Yes | User prompt or PRD |
| User personas | Recommended | `context/people/` or PRD |
| Design system guidelines | Optional | Team documentation |
| Technical constraints | Optional | `context/products/*/tech-context.md` |

## Process
1. **Understand the intent** — What user problem does this design solve? What are the success criteria?
2. **User problem fit** — Does the design actually solve the stated problem? Walk through the primary user flow.
3. **Edge case analysis** — Evaluate: empty states, error states, loading states, first-time use, power user scenarios, offline/degraded states, boundary conditions.
4. **Accessibility review** — Check: color contrast, touch targets, keyboard navigation, screen reader flow, text readability, WCAG 2.1 AA compliance.
5. **Design system consistency** — Components, spacing, typography, and interaction patterns consistent with established system?
6. **Technical feasibility** — Flag elements that may be complex, have performance implications, or conflict with architecture.
7. **Information hierarchy** — Is the most important information prominent? Does flow guide users toward desired action?
8. **Prioritize feedback** — Categorize: must-fix (blocks launch), should-fix (impacts quality), nice-to-have (polish), question (needs clarification).

## Output Format
```
## Design Review: [Feature/Screen]

### Overall Assessment
[2-3 sentence summary: does this solve the problem?]

### Must-Fix (Blocks Launch)
1. **[Issue]** — [Why it matters] → [Suggested direction]

### Should-Fix (Impacts Quality)
1. **[Issue]** — [Why it matters] → [Suggested direction]

### Nice-to-Have (Polish)
1. **[Issue]** → [Suggestion]

### Missing States
| State | Status | Notes |
|-------|--------|-------|
| Empty state | ❌ Missing | [What's needed] |
| Error state | ⚠️ Partial | [What's missing] |
| Loading state | ✅ Covered | — |

### Accessibility Flags
- [Issue with remediation suggestion]

### What Works Well
- [Positive feedback — be specific]
```

## Quality Standards
- Feedback is specific and actionable — "CTA button lacks contrast (4.2:1, needs 4.5:1)" not "button looks weird."
- Every critique includes a suggested direction.
- Positive feedback is included — acknowledge what works.
- Edge cases are systematically checked.

**Anti-patterns:** Subjective aesthetic opinions without rationale, redesigning in the review, ignoring stated user problem, feedback without priority.

## Framework References
- **Nielsen's 10 Usability Heuristics** — Systematic usability evaluation.
- **WCAG 2.1 AA** — Accessibility compliance standards.

## Formatting Guidelines
- Group feedback by priority (must-fix → nice-to-have).
- Tables for state coverage (quick visual scan).
- Bold issue titles for skimmability.
- Include "What Works Well" section.

## Example
**Must-fix:** "The password reset flow dead-ends after email submission — no confirmation screen. Users will wonder if it worked. → Add confirmation state: 'Check your email at s***@example.com. Link expires in 15 minutes.'"
