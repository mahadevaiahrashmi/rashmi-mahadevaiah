# Meeting Prep

## Purpose
Prepare a comprehensive meeting brief that maximizes the value of every meeting — pulling attendee personas, building a tight agenda with desired outcomes per item, preparing talking points, anticipating objections, and creating pre-reads when needed. Transforms meetings from time-sinks into decision-making machines.

## Auto-Trigger Patterns
- "prep for my meeting with [person/team]"
- "meeting prep for [topic]"
- "prepare for [meeting name]"
- "help me get ready for a meeting"
- "build an agenda for [topic]"
- "what should I cover in my meeting with [stakeholder]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Meeting topic / purpose | Yes | User prompt |
| Attendees | Yes | User prompt |
| Attendee personas | Recommended | `context/people/` |
| Meeting duration | Optional | User prompt |
| Prior meeting notes | Optional | User prompt or context |
| Key decisions needed | Optional | User prompt |

## Process
1. **Clarify meeting type** — Identify: decision meeting, status sync, brainstorm, review, 1:1, exec update, or external. Each has a different optimal structure.
2. **Map attendees** — Pull personas from `context/people/`. For each attendee: role, communication style, priorities, potential concerns, decision-making authority.
3. **Define desired outcomes** — For every agenda item, specify the concrete outcome: decision made, alignment reached, feedback collected, action assigned, information shared.
4. **Build the agenda** — Structure with time allocations, owner per item, and outcome type. Front-load decisions; put FYIs last or in pre-read.
5. **Prepare talking points** — Key messages, data points to reference, framing for contentious topics. Tailor language to the audience.
6. **Anticipate objections** — Based on attendee personas and known positions, predict pushback and prepare responses with supporting evidence.
7. **Create pre-read** — If the meeting requires context, draft a concise pre-read (max 1 page) that attendees can consume in 5 minutes.
8. **Define follow-up plan** — Who sends notes, how decisions are communicated, next steps tracking.

## Output Format
```
## Meeting Brief: [Topic]
**Date/Time:** [if known]  |  **Duration:** [X min]

### Attendees & Context
| Attendee | Role | Key Priority | Watch For |
|----------|------|-------------|-----------|
| [Name] | ... | ... | ... |

### Desired Outcomes
1. [Outcome 1 — e.g., "Decision on API versioning approach"]
2. [Outcome 2]

### Agenda
| # | Topic | Owner | Time | Outcome Type |
|---|-------|-------|------|-------------|
| 1 | ... | ... | X min | Decision / Input / FYI |

### Talking Points
- **[Topic 1]:** [Key message + supporting data]

### Anticipated Objections
| Objection | From | Response |
|-----------|------|----------|
| ... | [Persona] | ... |

### Pre-Read (if needed)
[Concise context document]

### Follow-Up Plan
- Notes owner: [name]
- Decision communication: [channel]
```

## Quality Standards
- Every agenda item has a clear desired outcome — no "discuss X" without a target.
- Time allocations are realistic; total doesn't exceed meeting duration.
- Objection anticipation is grounded in known stakeholder positions, not hypothetical.
- Talking points include data, not just opinions.

**Anti-patterns:** Overloading agendas, vague outcomes like "align on direction," ignoring attendee dynamics, skipping pre-reads for complex topics.

## Framework References
- **Meeting design best practices** — Outcome-driven agendas, decision-type framing.
- **Stakeholder communication** — Persona-aware messaging and objection handling.

## Formatting Guidelines
- Tables for attendees and agenda (scannable structure).
- Bold key messages in talking points.
- Keep pre-read under 1 page — bullet points over paragraphs.

## Example
**Scenario:** Prepping for a cross-functional meeting on launch timeline with Eng Lead, Design Lead, and VP Product.

**Anticipated objection:** "Eng Lead [from persona: values technical rigor] will push back on the compressed timeline. Response: Present the phased approach — MVP scope for target date, fast-follow for remaining items. Show the scope cut options with user impact data."
