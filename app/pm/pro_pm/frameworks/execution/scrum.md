# Scrum

## What It Is
Scrum is a lightweight agile framework for managing complex product development. Created by Ken Schwaber and Jeff Sutherland (1995), it organizes work into fixed-length iterations called Sprints (typically 1–2 weeks). It defines three roles (Product Owner, Scrum Master, Developers), five ceremonies, and three artifacts to enable teams to deliver incrementally and adapt based on feedback.

## When to Use
- Teams building complex products where requirements evolve
- When you need predictable delivery cadence with regular stakeholder check-ins
- Cross-functional teams (3–9 people) that can self-organize
- When the organization values iterative improvement and transparency

## When NOT to Use
- Continuous flow work where batching into sprints creates artificial delays — use Kanban
- Very small teams (1–2 people) where the ceremony overhead isn't justified
- Projects with well-defined, unchanging requirements — waterfall may be simpler
- When teams frequently context-switch across multiple products — Scrum assumes focus

## How to Apply
1. **Roles**: Product Owner (what to build, backlog priority), Scrum Master (process facilitation, impediment removal), Developers (how to build, self-organizing)
2. **Ceremonies**:
   - **Sprint Planning**: Select backlog items for the sprint. Define sprint goal. (~2 hrs/2-week sprint)
   - **Daily Standup**: 15 min sync. What did I do? What will I do? Any blockers?
   - **Sprint Review**: Demo completed work to stakeholders. Gather feedback. (~1 hr)
   - **Sprint Retrospective**: What went well? What to improve? Action items. (~1 hr)
   - **Backlog Refinement**: Ongoing. Break down, estimate, and clarify upcoming items
3. **Artifacts**: Product Backlog (ordered list of all work), Sprint Backlog (items committed for this sprint), Increment (shippable product at sprint end)
4. **PM's role**: Typically the Product Owner — own the backlog, define acceptance criteria, set priorities, represent customer voice

## Template
| Sprint # | Sprint Goal | Committed Items | Velocity | Outcome |
|----------|------------|----------------|----------|---------|
|          |            |                |          |         |

**Retro Actions**: ___

## Example
**Sprint 14** (2 weeks):
- **Goal**: "Users can self-serve password resets without contacting support"
- **Committed**: 5 stories (21 points): Reset flow UI, email service integration, security logging, rate limiting, help docs update
- **Velocity**: Team averages 24 points/sprint — this is within capacity
- **Review**: Demoed to stakeholders. Feedback: add "reset via phone" option to backlog for future sprint
- **Retro**: Build times are slow (action: invest in CI pipeline improvement next sprint)

## Key Pitfalls
- Treating Sprint Review as a status report instead of a feedback session
- Product Owner writing stories in isolation without eng input — refinement is collaborative
- Sprint goals that are just a list of stories instead of a meaningful outcome
- Skipping retros — continuous improvement dies without reflection
- Mini-waterfall within sprints (design → dev → QA sequentially instead of collaboratively)

## Related Frameworks
- **Kanban** — flow-based alternative when sprints feel artificial
- **Shape Up** — longer cycles (6 weeks) with more shaping upfront
- **SAFe** — scaling Scrum across multiple teams
- **OKRs** — connecting sprint goals to quarterly objectives
