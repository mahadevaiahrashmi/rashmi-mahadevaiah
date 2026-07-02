# Requirements Review

## Purpose
Systematically critique a spec, PRD, or requirements document to surface gaps, ambiguity, unstated assumptions, missing edge cases, and testability issues before they become expensive implementation problems. A thorough review now prevents rework later.

## Auto-Trigger Patterns
- "review this PRD"
- "critique these requirements"
- "find gaps in this spec"
- "is this spec ready for eng"
- "review [document] for completeness"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Requirements document to review | Yes | User prompt |
| Product context | Optional | `context/products/` |
| Target users | Optional | `context/products/*/customers.md` |
| Technical context | Optional | `context/products/*/tech-context.md` |

## Process
1. **Completeness check** — Does it cover: problem, users, solution, metrics, scope, risks, dependencies, open questions?
2. **Ambiguity scan** — Flag any statement that two reasonable people could interpret differently.
3. **Assumption audit** — Identify unstated assumptions. Are they valid? What if they're wrong?
4. **Edge case review** — Walk through error states, boundary conditions, concurrent use, empty states, migration.
5. **Testability check** — Can each requirement be verified? Are acceptance criteria specific enough?
6. **Consistency check** — Do any requirements contradict each other? Do metrics align with goals?
7. **Stakeholder lens** — Would eng, design, QA, legal, support each find this sufficient?
8. **Severity rating** — Rate each finding: Critical (blocks work), Major (causes rework), Minor (improvement).
9. **Quality-check** — Findings are specific and actionable, not vague complaints.

## Output Format
```
## Requirements Review: [Document Name]
**Reviewer:** [Name] | **Date:** [Date]
**Overall Assessment:** [Ready / Needs Revision / Major Gaps]

### Summary
[2-3 sentences on overall quality and top concerns]

### Findings
| # | Section | Finding | Severity | Suggestion |
|---|---------|---------|----------|------------|
| 1 | ... | ... | Critical | ... |
| 2 | ... | ... | Major | ... |

### Missing Elements
- [ ] [Element that should be present but isn't]

### Assumptions Identified
| # | Assumption | Risk If Wrong | Recommendation |
|---|-----------|--------------|----------------|

### Edge Cases Not Addressed
| # | Scenario | Expected Behavior Needed |
|---|----------|------------------------|

### Recommendation
[Specific next steps to address findings]
```

## Quality Standards
- Every finding is specific — quotes the problematic text and explains why.
- Suggestions are constructive and actionable, not just criticism.
- Severity ratings are calibrated — not everything is Critical.
- Review covers multiple perspectives (eng, design, QA, user).

**Anti-patterns:** Vague feedback ("needs more detail"), only surface-level comments, missing the forest for the trees, not suggesting fixes.

## Framework References
- **Definition of Ready** — Checklist for whether work items are ready for implementation.
- **INVEST** — Criteria for evaluating user story quality.

## Formatting Guidelines
- Use a findings table with severity color-coding guidance.
- Checkboxes for missing elements make it actionable.
- Group findings by severity (Critical first).
- Keep suggestions concise but specific.

## Example
**Finding:** "Section 3 says 'the system should handle large files' but doesn't define 'large.' Engineering will need to know: max file size in MB, max concurrent uploads, timeout behavior for slow uploads."

**Severity:** Major — will cause implementation questions and delays.
