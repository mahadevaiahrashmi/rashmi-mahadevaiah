# DACI Decision Framework

## What It Is
DACI is a decision-making framework used at Atlassian and other tech companies. It assigns four roles: Driver (leads the process), Approver (makes the final call), Contributors (provide input and expertise), and Informed (notified of the decision). It's designed specifically for decisions, not ongoing responsibilities.

## When to Use
- Making cross-functional decisions that affect multiple teams
- When decisions stall because nobody owns driving them forward
- Product decisions with many opinionated stakeholders
- Any decision where "who decides?" is ambiguous

## When NOT to Use
- Routine decisions within a team — adds unnecessary overhead
- Decisions that one person can and should make unilaterally
- When the team is too small for role assignment to matter

## How to Apply
1. **Frame the decision**: Write a clear decision statement. What are we deciding?
2. **Assign roles**:
   - **Driver (D)**: One person. Leads the process, gathers input, frames options, drives to a decision. Not necessarily the decider
   - **Approver (A)**: One person (occasionally two). Makes the final call. Has veto power
   - **Contributors (C)**: People with relevant expertise or stake. Provide input and options. Must be heard but don't have a vote
   - **Informed (I)**: People who need to know the outcome but don't participate in the decision
3. **Gather input**: Driver collects perspectives from Contributors
4. **Present options**: Driver presents 2–3 options with pros/cons to the Approver
5. **Decide**: Approver makes the call
6. **Communicate**: Inform the I's and publish the decision with rationale

## Template
**Decision**: [Clear statement of what we're deciding]
**Deadline**: [When the decision needs to be made]

| Role | Person | Responsibility |
|------|--------|---------------|
| Driver | | Leads process, gathers input, presents options |
| Approver | | Makes final decision |
| Contributors | | Provide expertise and input |
| Informed | | Notified of outcome |

**Options Considered**:
| Option | Pros | Cons | Recommendation |
|--------|------|------|---------------|
| A | | | |
| B | | | |

**Decision**: ___
**Rationale**: ___

## Example
**Decision**: "Should we build our own analytics engine or integrate with a third-party?"
- **Driver**: Product Manager (gathers input, presents analysis)
- **Approver**: VP Engineering (final call, owns technical strategy)
- **Contributors**: Data team lead, Frontend lead, CFO (cost), CTO (architecture)
- **Informed**: Sales, marketing, customer success
- **Options**: Build custom (full control, 6-month investment) vs. Integrate Amplitude (faster, less control) vs. Hybrid (core custom + Amplitude for exploration)
- **Decision**: Hybrid — build core metrics pipeline, use Amplitude for exploratory analysis
- **Rationale**: Balances speed-to-market with long-term data ownership

## Key Pitfalls
- Multiple Approvers — decision by committee; one person must own the call
- Driver who doesn't actually drive — they must actively push the decision to conclusion
- Skipping the Contributor input step — Contributors who feel unheard will undermine the decision
- Not documenting the rationale — future teams will wonder "why did we decide this?"

## Related Frameworks
- **RACI** — broader responsibility matrix for ongoing work, not just decisions
- **SPADE** — Square's more structured decision framework with explicit alternatives evaluation
- **Narrative Memo** — for communicating complex decisions with context
- **Pre-mortem** — for stress-testing the decision before committing
