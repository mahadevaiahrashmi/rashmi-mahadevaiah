# Product Charter

## Purpose
Creates a team charter document that defines the product mission, team composition, decision-making norms, communication agreements, success metrics, and operating principles. Serves as the team's social contract—how we work together, make decisions, and hold each other accountable.

## Auto-Trigger Patterns
- "Write a product team charter"
- "Create a team charter document"
- "I need to define our team operating principles"
- "Help me establish team norms and agreements"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product area, team members and roles, team mission/purpose, key stakeholders
- **Optional:** Existing team norms, retrospective feedback, company values, prior charter (if updating)
- **Reference files:** product-brief.md, process-documentation.md

## Process
1. **Define mission** — Why does this team exist? What unique value do we create?
2. **Map the team** — Who's on the team, their roles, and decision rights.
3. **Establish decision norms** — How do we make decisions? Who has authority for what?
4. **Set communication agreements** — How, when, and where we communicate.
5. **Define success** — What does great look like for this team?
6. **Co-create** — This should be built WITH the team, not FOR them. Plan a workshop.

## Output Format
```
# [Product Area] Team Charter

## Our Mission
[One sentence: Why we exist and what we're trying to achieve]

## Team Members & Roles
| Name | Role | Key Responsibilities | Decision Rights |

## Decision-Making Framework
- **Unilateral decisions:** [Individual scope - what anyone can decide alone]
- **Consultative decisions:** [Decide after consulting - what needs input]
- **Consensus decisions:** [Team agreement needed - what requires alignment]
- **Escalation path:** [When and how to escalate]

## Communication Agreements
- **Async by default:** [Tools, response time expectations]
- **Synchronous meetings:** [Which meetings, cadence, purpose]
- **Status updates:** [Format, frequency, audience]
- **Urgent issues:** [How to flag, expected response]

## Operating Principles
1. [Principle]: [What it means in practice]
2. [Principle]: [What it means in practice]
3. [Principle]: [What it means in practice]
4. [Principle]: [What it means in practice]

## Success Metrics
| Metric | Current | Target | Measurement |

## Working Agreements
- How we run sprints/planning
- How we handle tech debt
- How we manage stakeholders
- How we give feedback

## Review Cadence
When and how we review and update this charter.
```

## Quality Standards
- The charter reflects actual team input, not one person's ideal.
- Decision rights are specific enough to prevent confusion in real situations.
- Operating principles create real constraints on behavior (not platitudes).
- **Anti-patterns:** Charter written by manager alone, principles nobody references, no review cadence, overly prescriptive rules.

## Audience
The product team itself, plus adjacent teams who need to understand how to work with them. New team members use it for onboarding. Managers use it to calibrate expectations. Partners use it to understand engagement norms.

## Formatting Guidelines
- 2-4 pages. Clear sections with tables where appropriate.
- Written in first person plural ("we") to signal shared ownership.
- Living document: include "last updated" date and review cadence.
- Print-friendly—teams often post these visibly.

## Example
**Decision-Making excerpt:** "Unilateral: Any PM can prioritize bugs and UX polish within a sprint without approval. Consultative: Feature scope changes require PM decision after consulting engineering lead and design. Consensus: Strategic direction changes, team process changes, and hiring decisions require team alignment. Escalation: If consultative decisions are blocked for >48 hours, escalate to VP Product."
