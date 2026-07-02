# UX Review

## Purpose
Conduct a structured usability review using established heuristics — evaluating task completion, error prevention, learnability, efficiency, and satisfaction. Produces prioritized findings with severity ratings and actionable recommendations.

## Auto-Trigger Patterns
- "UX review of [feature/flow]"
- "usability review"
- "heuristic evaluation of [product]"
- "Nielsen's heuristics review"
- "usability assessment for [workflow]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / flow to review | Yes | User prompt |
| User personas | Recommended | `context/people/` |
| Task scenarios | Recommended | User prompt |
| Design artifacts | Optional | User prompt |

## Process
1. **Define scope** — Which flows, screens, tasks? For which personas?
2. **Walk primary tasks** — Complete key tasks as each persona. Note friction, confusion, dead ends.
3. **Apply Nielsen's 10 Heuristics** — Score severity (0-4) per finding.
4. **Task completion analysis** — Can users complete the task? How many steps? Error rate?
5. **Learnability** — Can first-time users figure it out? Familiar patterns? Progressive disclosure?
6. **Efficiency** — Shortcuts for repeat users? Optimized for common case?
7. **Error prevention and recovery** — Errors prevented? Helpful messages? Easy recovery?
8. **Prioritize findings** — Rank by severity × frequency × fix effort.

## Output Format
```
## UX Review: [Feature/Flow]

### Executive Summary
[2-3 sentences: overall assessment and top recommendations]

### Heuristic Evaluation
| # | Heuristic | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Visibility of system status | [0-4] | [Finding] |
| 2 | Match real world | [0-4] | [Finding] |
| ... | ... | ... | ... |

### Detailed Findings
#### Critical (Severity 4)
1. **[Finding]** — Heuristic: [#], Impact: [description] → Recommendation: [fix]

#### Major (Severity 3)
1. **[Finding]** → [Recommendation]

### Task Completion
| Task | Completion Rate | Steps | Pain Points |
|------|----------------|-------|-------------|
| [Primary task] | [Est.%] | [#] | [Friction] |

### Recommendations (Prioritized)
| # | Recommendation | Heuristic | Effort | Impact |
|---|---------------|-----------|--------|--------|
| 1 | [Improvement] | [#] | S/M/L | High/Med/Low |
```

## Quality Standards
- Findings grounded in heuristics, not personal preference.
- Severity scores use consistent rubric (0=not a problem, 4=catastrophic).
- Recommendations are specific and actionable.
- Positive findings included — what works well.

**Anti-patterns:** Aesthetic opinions as usability findings, reviewing without personas, focusing only on visual design, findings without recommendations, severity inflation.

## Framework References
- **Nielsen's 10 Usability Heuristics** — Systematic evaluation framework.
- **Severity rating scale** — 0 (not a problem) to 4 (catastrophe).
- **Task analysis** — Evaluating workflows for efficiency and completion.

## Formatting Guidelines
- Heuristic table with scores (quick overview).
- Findings grouped by severity (prioritized action).
- Recommendations with effort/impact (decision support).

## Example
**Critical finding:** "Severity 4 — Heuristic #5 (Error Prevention). Payment form allows expired card submission. No client-side validation. Users get generic 'Payment failed' after 8-second wait. → Add client-side expiration validation with inline error before submission."
