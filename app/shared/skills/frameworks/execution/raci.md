# RACI Matrix

## What It Is
RACI is a responsibility assignment matrix that clarifies who does what for each task or decision. Each intersection of person and activity is assigned one of four roles: Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), Informed (kept in the loop). It eliminates the "I thought you were handling that" problem.

## When to Use
- Cross-functional projects with multiple stakeholders
- When decisions stall because nobody knows who has authority
- Onboarding new team members to clarify roles and expectations
- Process design where handoffs between teams need to be explicit

## When NOT to Use
- Small teams where roles are obvious and fluid
- Day-to-day agile work where the team is self-organizing — RACI adds overhead
- When used as a power-grabbing tool rather than a clarity tool

## How to Apply
1. **List activities/decisions** down the left column
2. **List people/roles** across the top row
3. **Assign RACI for each cell**:
   - **R (Responsible)**: Does the work. Can be multiple people
   - **A (Accountable)**: Owns the outcome. Signs off. **Must be exactly one person per activity**
   - **C (Consulted)**: Provides input before the decision/action (two-way communication)
   - **I (Informed)**: Notified after the decision/action (one-way communication)
4. **Validate**: Check for common issues (see pitfalls)
5. **Share and get agreement** from all parties

## Template
| Activity/Decision | PM | Eng Lead | Designer | Data | Exec |
|------------------|-----|----------|----------|------|------|
| Define requirements | A/R | C | C | I | I |
| Technical design | C | A/R | I | C | I |
| UX design | C | C | A/R | I | I |
| Launch decision | A | C | C | C | I |
| Pricing change | R | I | I | C | A |

## Example
**Project**: Launch of enterprise SSO feature
| Activity | PM | Eng Lead | Security | Sales | Legal |
|----------|-----|----------|----------|-------|-------|
| Requirements gathering | A/R | C | C | C | I |
| Security architecture | C | A/R | R | I | I |
| Compliance review | C | I | R | I | A |
| Sales enablement | A/R | I | I | R | I |
| Pricing decision | R | I | I | C | A |
| Launch communication | A/R | I | I | C | I |

## Key Pitfalls
- Multiple Accountable people for one activity — there must be exactly one A per row
- Too many Consulteds — every C slows down the process; be selective
- Confusing Responsible and Accountable — R does the work, A owns the outcome (can be the same person)
- Creating a RACI and never referencing it — post it where the team can see it
- RACI as bureaucracy — it should clarify, not slow down. Keep it to key decisions, not every task

## Related Frameworks
- **DACI** — Atlassian's variant focused on decision-making (Driver replaces Responsible)
- **SPADE** — Square's more structured decision framework
- **Team Topologies** — informs who should be R, A, C, or I based on team design
- **Stakeholder Influence** — helps identify who should be Consulted vs. Informed
