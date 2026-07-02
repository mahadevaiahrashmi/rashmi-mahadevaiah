# Team Charter

## Purpose
Define a team's operating principles: mission, decision-making norms, communication agreements, meeting cadence, definition of done, escalation paths, and feedback culture. Create a living document that aligns the team on how they work together, not just what they work on. Reduce friction by making implicit expectations explicit.

## Auto-Trigger Patterns
- "Create a team charter"
- "Define team norms"
- "Team working agreements"
- "How should our team operate"
- "Team operating principles"
- "Set up team rituals"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Team composition** (required) — members, roles, reporting lines
- **Team scope** (required) — what the team owns, its mission
- **Current pain points** (optional) — what's not working in how the team operates
- **Existing norms** (optional) — unwritten rules that should be codified
- **Organizational context** (optional) — company culture, constraints

## Process
1. **Define team mission** — why this team exists, what success looks like
2. **Set decision-making norms** — who decides what, how to escalate, RACI for common decisions
3. **Establish communication agreements** — channels, response times, meeting etiquette
4. **Design meeting cadence** — purpose and format for each recurring meeting
5. **Define "done"** — what it means for work to be complete (quality bar)
6. **Create escalation paths** — when and how to escalate, to whom
7. **Codify feedback culture** — how the team gives and receives feedback
8. **Plan charter review** — how often to revisit and update

## Output Format
```markdown
# Team Charter: [Team Name]
**Created**: [date] | **Last reviewed**: [date]
**Members**: [names and roles]

## Mission
[1-2 sentences: why this team exists and what it optimizes for]

## Decision-Making
| Decision Type | Who Decides | Who's Consulted | Who's Informed |
|--------------|-----------|----------------|---------------|
| Feature prioritization | PM | Eng Lead, Design | Team |
| Technical approach | Eng Lead | PM, Team | Stakeholders |
| Design direction | Design Lead | PM, Eng | Team |

### Decision Principles
- Default to [speed / consensus / data] unless stakes are high
- If stuck for [X time], escalate to [person]
- Document decisions in [location]

## Communication Agreements
| Channel | Use For | Response Time |
|---------|---------|--------------|
| Slack [channel] | Daily questions, quick updates | 4 hours |
| Email | External stakeholders, formal comms | 24 hours |
| Meetings | Decisions, brainstorming, alignment | Synchronous |

### Norms
- Default to async; schedule sync for complex or sensitive topics
- No meetings without an agenda and desired outcome
- Camera-on for [specific meetings]

## Meeting Cadence
| Meeting | Frequency | Duration | Purpose | Required Attendees |
|---------|-----------|----------|---------|-------------------|

## Definition of Done
- [ ] Acceptance criteria met
- [ ] [Quality checks completed]
- [ ] [Documentation updated]
- [ ] [Stakeholders notified]

## Escalation Paths
| Situation | First Step | Escalation | Timeline |
|-----------|-----------|-----------|---------|

## Feedback Culture
- We give feedback [promptly / in 1:1s / using SBI]
- We receive feedback with [curiosity, not defensiveness]
- Retro frequency: [cadence]
- Anonymous feedback channel: [if applicable]

## Team Agreements
- [ ] We [specific agreement]
- [ ] We don't [specific anti-pattern]

## Charter Review
- **Frequency**: Quarterly
- **Process**: Full team discussion, any member can propose changes
- **Approval**: Team consensus
```

## Quality Standards
- Decision-making authority is clear and specific, not vague
- Communication agreements include expected response times
- Meeting cadence includes purpose — every meeting earns its slot
- Charter is co-created with the team, not imposed by PM
- **Anti-patterns**: Charter created but never referenced; too detailed to remember; PM-imposed without team input; no review cadence

## Framework References
- RACI for decision-making clarity
- Team working agreements (Agile)
- Lencioni's Five Dysfunctions for trust and accountability
- DACI for decision frameworks

## Formatting Guidelines
- Tables for decision rights and meeting cadence
- Checklist format for Definition of Done and Team Agreements
- Keep the total charter to 2 pages — if it's longer, it won't be read
- Include review date prominently

## Example
"Decision norm: 'PM owns what we build and why, Eng Lead owns how we build it and when. If PM and Eng Lead disagree on scope vs timeline trade-off, they have 24 hours to resolve before escalating to Director.' Communication: 'Slack for daily, email for external only, no Slack messages expecting response after 6pm unless production incident.' Definition of Done: 'Feature is not done until analytics events are verified in staging.'"
