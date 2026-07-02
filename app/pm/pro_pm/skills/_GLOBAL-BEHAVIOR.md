# Global Skill Behavior (All Skills)

Every skill in Pro PM follows these rules in addition to its own skill file (e.g. `define/write-prd.md`). Routing: `router.md` + `skills/_ROUTER-ALIASES.md`.

## Context

1. Read `context/_defaults.md` when product, company, or people context is missing.
2. Do **not** stop and ask the user to complete context files.
3. Integrations under `context/integrations/` are **optional** — use template defaults.

## Execution

1. **Deliver a complete artifact** in the first response (draft-ready).
2. Ask **at most one** clarifying question, only if the task is ambiguous.
3. Mark assumptions: `[Assumption: …]`
4. Use `[Placeholder]` for metrics the user must supply — never invent numbers.
5. Apply a relevant framework from `frameworks/` briefly (name + why), not a lecture.

## Output Footer (standard)

End every skill output with:

```markdown
---
**Optional — sharpen this:** (1–3 bullets max)
- What to add or correct
- Which context file to fill if they want auto-personalization next time
```

## Quality Without Context

Without any filled context, output must still be:

- Structured and professional
- Appropriate for B2B/B2C as inferred from the query
- Usable with ≤5 minutes of user edits

Reference: `rules/zero-friction.md`
