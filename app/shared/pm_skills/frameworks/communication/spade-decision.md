# SPADE Decision Communication

## What It Is
SPADE (Setting, People, Alternatives, Decide, Explain) is Square's decision-making framework that doubles as a communication tool. The Explain step specifically focuses on how to communicate decisions after they're made — documenting the rationale, alternatives considered, and dissenting views so that everyone understands not just *what* was decided but *why*.

## When to Use
- Communicating consequential, cross-functional decisions to the organization
- Creating a decision record that future team members can reference
- When past decisions are frequently questioned ("why did we do that?")
- Building trust through transparent decision-making

## When NOT to Use
- Minor operational decisions that don't need documentation
- Decisions where speed matters more than documentation
- When the full SPADE process wasn't used — lighter documentation may suffice

## How to Apply
1. **Write the decision document** (after the decision is made):
   - **Setting**: Restate the context, constraints, and deadline
   - **People**: Who was involved and in what role (Responsible, Approver, Consulted)
   - **Alternatives**: List all options considered with their pros, cons, and risk assessment
   - **Decision**: State what was decided and by whom
   - **Rationale**: Explain *why* this alternative was chosen over others
   - **Dissenting views**: Document disagreements honestly — this builds trust
   - **Implications**: What changes as a result? Who needs to act?
2. **Distribute broadly**: Send to all Informed parties and publish in a discoverable location
3. **Invite questions**: Allow a window for questions or escalation before implementation begins

## Template
# Decision: [Title]
**Date**: ___  **Status**: Decided / In Implementation

**Setting**: [Context, constraints, deadline]

**People**: Responsible: ___. Approver: ___. Consulted: ___.

**Alternatives Considered**:
| Option | Summary | Pros | Cons |
|--------|---------|------|------|
| A | | | |
| B | | | |
| C (chosen) | | | |

**Decision**: We chose Option C.

**Rationale**: [Why this option over others]

**Dissenting Views**: [Honest documentation of disagreements]

**Implications & Next Steps**: [What changes, who acts, timeline]

## Example
**Decision**: Adopt PostgreSQL as the primary database (replacing MongoDB)
- **Setting**: Growing data consistency issues with MongoDB; need ACID compliance for financial features launching Q3
- **People**: Responsible: Platform PM. Approver: CTO. Consulted: DB admin, Backend leads, Finance PM
- **Alternatives**: Stay with MongoDB (optimize), PostgreSQL, CockroachDB
- **Decision**: PostgreSQL — mature, ACID-compliant, team has experience
- **Dissent**: Backend Lead preferred CockroachDB for horizontal scaling. Acknowledged as valid long-term concern; revisit in 18 months
- **Implications**: 3-month migration plan. Feature freeze on new MongoDB-dependent features starting next sprint

## Key Pitfalls
- Omitting dissenting views — this destroys trust; people want to know their input was heard
- Writing the document weeks after the decision — details get lost; write within 48 hours
- Storing decision documents where nobody can find them — use a consistent, searchable location
- Not stating implications clearly — people need to know what to do differently

## Related Frameworks
- **SPADE** — the full decision-making framework this communication step belongs to
- **DACI** — simpler decision framework with less formal communication requirements
- **Pyramid Principle** — structure the rationale section using pyramid format
- **Narrative Memo** — for decisions complex enough to warrant a full narrative document
