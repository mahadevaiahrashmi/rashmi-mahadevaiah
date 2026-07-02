# SPADE Decision Framework

## What It Is
SPADE is a decision-making framework created at Square (now Block) by Gokul Rajaram. It provides a structured process for making high-stakes decisions: Setting, People, Alternatives, Decide, Explain. It's designed for consequential, hard-to-reverse decisions that affect multiple teams and require broad buy-in.

## When to Use
- High-stakes, hard-to-reverse decisions (architecture choices, market entry, pricing overhauls)
- Cross-functional decisions with significant disagreement
- When you need a transparent, well-documented decision trail
- Decisions that will be questioned later — SPADE creates a clear record

## When NOT to Use
- Routine, easily reversible decisions — SPADE is heavyweight
- Individual or small-team decisions where the process overhead isn't justified
- Urgent decisions that can't wait for the full SPADE process (days to weeks)

## How to Apply
1. **Setting**: Define the context. What is the decision? Why now? What's the deadline? What are the constraints?
2. **People**: Assign roles:
   - Responsible: One person who owns driving the decision
   - Approver: One person with final authority (often the Responsible person's skip-level)
   - Consulted: People who provide input (should represent diverse perspectives)
3. **Alternatives**: Identify at least 3 viable options. For each, document:
   - Description and key characteristics
   - Pros and cons
   - Risks and mitigations
   - Estimated cost/effort
4. **Decide**: The Responsible person makes a recommendation. Share with Consulted for feedback. Approver makes the final call. If Consulted members disagree, they can escalate, but the process must have a clear endpoint
5. **Explain**: Document and communicate the decision, rationale, alternatives considered, and dissenting views. Publish broadly

## Template
**Setting**:
- Decision: ___
- Why now: ___
- Deadline: ___
- Constraints: ___

**People**:
- Responsible: ___
- Approver: ___
- Consulted: ___

**Alternatives**:
| Option | Description | Pros | Cons | Risk | Cost |
|--------|-----------|------|------|------|------|
| A | | | | | |
| B | | | | | |
| C | | | | | |

**Decision**: ___
**Rationale**: ___
**Dissenting Views**: ___

## Example
**Decision**: How should we handle multi-region data residency?
- **Setting**: Enterprise customers in EU require data stored in EU. 3 deals ($1.2M ARR) blocked. Deadline: end of Q2
- **People**: Responsible = Platform PM; Approver = CTO; Consulted = Legal, Security, Infra Lead, Sales VP
- **Alternatives**:
  A) Multi-region deployment (full data isolation) — $400K infra cost, 4 months
  B) Data proxy with EU-only storage — $150K, 6 weeks, some latency tradeoff
  C) Partner with EU hosting provider — $200K/year, 2 weeks, less control
- **Decision**: Option B — fastest to unblock deals, acceptable latency, buys time to build Option A properly
- **Dissenting View**: Infra Lead prefers Option A long-term; agreed B is acceptable short-term with commitment to A in H2

## Key Pitfalls
- Only generating 2 alternatives — 3+ forces creative thinking and prevents false dichotomies
- Not including dissenting views in the Explain step — this erodes trust
- Responsible person not making a clear recommendation — "it depends" isn't a recommendation
- Skipping the Explain step — the decision loses value if the rationale isn't documented

## Related Frameworks
- **DACI** — simpler decision framework for less consequential decisions
- **RACI** — broader responsibility matrix beyond decisions
- **Pre-mortem** — use before the Decide step to stress-test alternatives
- **Narrative Memo** — format for the Explain step
