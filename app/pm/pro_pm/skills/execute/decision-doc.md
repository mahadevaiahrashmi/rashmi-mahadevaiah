# Decision Document

## Purpose
Create a structured RFC or decision document that frames a decision clearly — articulating the problem, presenting multiple options with honest trade-offs, making a recommendation with reasoning, and documenting the decision for future reference. Ensures decisions are made transparently with stakeholder input.

## Auto-Trigger Patterns
- "write a decision doc for [topic]"
- "RFC for [decision]"
- "help me decide between [options]"
- "document this decision"
- "create a SPADE for [decision]"
- "DACI for [topic]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Decision to be made | Yes | User prompt |
| Context / background | Yes | User prompt |
| Known options | Recommended | User prompt |
| Stakeholders | Recommended | `context/people/` |
| Constraints | Optional | User prompt |

## Process
1. **Frame the decision** — Crisp problem statement. Why does this matter now? Cost of not deciding?
2. **Identify framework** — SPADE or DACI. Assign roles.
3. **Map options** — 3+ genuine options including "do nothing." No straw men.
4. **Evaluate each option** — Pros, cons, risks, effort, reversibility, strategic alignment.
5. **Gather stakeholder input** — Note who was consulted, perspectives, and disagreements.
6. **Make recommendation** — State recommended option with reasoning. Address strongest counter-argument.
7. **Assess reversibility** — One-way door (irreversible) or two-way door (easily reversed)?
8. **Define success criteria** — How will you know the decision was right?

## Output Format
```
## Decision Doc: [Title]
**Status:** Draft / In Review / Decided  |  **Date:** [date]
**Driver:** [name]  |  **Approver:** [name]

### Problem Statement
[1-2 sentence crisp framing]

### Options Considered
#### Option A: [Name]
| Dimension | Assessment |
|-----------|-----------|
| Pros | ... |
| Cons | ... |
| Risk | ... |
| Reversibility | High / Medium / Low |

### Comparison Matrix
| Criteria | Option A | Option B | Option C |
|----------|----------|----------|----------|
| User impact | ... | ... | ... |

### Recommendation
**Option [X]** — [Reasoning]
**Strongest counter-argument:** [Address honestly]

### Success Criteria
- [Metric/milestone that validates the decision]
```

## Quality Standards
- Problem statement is crisp — understood in one paragraph.
- Options are genuinely distinct and defensible.
- Trade-offs are honest — recommendation acknowledges downsides.
- Reversibility is explicitly assessed.

**Anti-patterns:** Presenting conclusion as only option, hiding trade-offs, skipping "do nothing," ignoring dissent, over-engineering reversible decisions.

## Framework References
- **SPADE** — Setting, People, Alternatives, Decide, Explain.
- **DACI** — Driver, Approver, Contributor, Informed.
- **Two-Way Door** — Calibrating decision speed to reversibility.

## Formatting Guidelines
- Consistent structure per option for easy comparison.
- Comparison matrix for side-by-side evaluation.
- Bold recommendation and key trade-offs.
- Status field at top — readers know if draft or decided.

## Example
**Recommendation:** "Option B (build on existing infrastructure with targeted refactoring) balances shipping speed with sustainability. While Option A ships 2 weeks faster, it creates 3+ months of tech debt blocking Q3. The strongest counter-argument is Option C's long-term superiority, but our 90-day constraint makes full rebuild infeasible."
