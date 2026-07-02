# Code Review Context

## Purpose
Provide PM-perspective context for technical decisions during code reviews — explaining business reasoning behind product choices, flagging user-facing implications, and helping engineering understand the "why" behind requirements. Bridges the gap between product intent and technical execution.

## Auto-Trigger Patterns
- "add PM context to this code review"
- "why did we decide [technical choice]"
- "business context for [implementation]"
- "user impact of [technical approach]"
- "help eng understand the product reasoning"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Code change / PR description | Yes | User prompt |
| Product requirements / PRD | Recommended | Related PRD |
| Technical context | Recommended | `context/products/*/tech-context.md` |
| Codebase integration context | Optional | `context/integrations/codebase.md` |

## Process
1. **Understand the change** — Read the PR description and identify what product behavior is being modified.
2. **Map to product intent** — Connect implementation to original requirement. What user problem does this solve?
3. **Flag user-facing implications** — Identify changes affecting: UX flows, error messages, performance, data displayed, defaults.
4. **Provide business reasoning** — Explain why specific product decisions were made with customer research or strategic context.
5. **Identify edge cases** — Flag scenarios based on real user behavior patterns.
6. **Check against requirements** — Verify implementation matches spec. Flag intentional vs. accidental deviations.
7. **Note future considerations** — Flag upcoming product changes that might affect this implementation.

## Output Format
```
## PM Context: [PR/Feature Name]

### Product Intent
[What user problem this solves and why this approach was chosen]

### Business Reasoning
- **[Decision 1]:** [Why — customer data, strategic context]

### User-Facing Implications
| Change | User Impact | Concern Level |
|--------|------------|---------------|
| [Detail] | [What user experiences] | Low / Medium / High |

### Spec Alignment Check
- ✅ [Requirement met]
- ⚠️ [Deviation — intentional?]
- ❌ [Requirement missed]
```

## Quality Standards
- Context is additive — provides information engineers don't already have.
- Business reasoning is grounded in data, not PM opinion.
- Tone is collaborative — "here's context" not "you did this wrong."

**Anti-patterns:** Micro-managing implementation, providing context engineers already have, making technical recommendations outside PM scope.

## Framework References
- **Jobs to Be Done** — Connecting implementation to user jobs.
- **User story mapping** — Tracing code changes to user narratives.

## Formatting Guidelines
- Tables for user impact (quick scan of concern levels).
- Checkmarks for spec alignment (clear pass/fail).
- Keep business reasoning concise — 2-3 sentences per decision.

## Example
**Business reasoning:** "We default notification to 'on' because onboarding research showed 73% of users who disabled in first session never re-enabled, even when beneficial. Opt-out after 7 days is only 12%, suggesting the default drives healthy engagement."
