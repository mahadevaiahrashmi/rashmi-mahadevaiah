# Blocker Resolution

## Purpose
Diagnose and unblock stuck initiatives — identifying root cause, mapping stakeholders, generating resolution options with trade-offs, recommending action, and drafting communication to move forward. Turns "we're blocked" into a clear path forward.

## Auto-Trigger Patterns
- "we're blocked on [issue]"
- "how do I unblock [initiative]"
- "resolve this blocker"
- "[team/person] is blocking [thing]"
- "we can't move forward because [reason]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Blocker description | Yes | User prompt |
| Initiative context | Recommended | `context/initiatives/` |
| Stakeholder personas | Recommended | `context/people/` |
| Timeline / deadline | Optional | User prompt |
| What's been tried | Optional | User prompt |

## Process
1. **Diagnose the blocker type** — Categorize: technical dependency, resource constraint, decision needed, stakeholder disagreement, external dependency, information gap, priority conflict.
2. **Root cause analysis** — Use "5 Whys" to find the actual blocker beneath the symptom.
3. **Map stakeholders** — Who can resolve this? Who's affected? Who has decision authority?
4. **Generate resolution options** — 3+ options ranging from conservative to aggressive with trade-offs.
5. **Assess escalation need** — Does this need escalation? To whom, with what framing?
6. **Recommend action** — Select best option based on urgency, impact, and organizational dynamics.
7. **Draft communication** — Write the ask tailored to the key stakeholder's persona.
8. **Define follow-up cadence** — How to track resolution and when to re-escalate.

## Output Format
```
## Blocker Resolution: [Issue]

### Blocker Diagnosis
- **Type:** [Technical / Resource / Decision / Stakeholder / External]
- **Root cause:** [The actual underlying issue]
- **Impact if unresolved:** [Timeline, revenue, user impact]
- **Deadline to resolve:** [Date]

### Stakeholder Map
| Stakeholder | Role in Resolution | Leverage / Interest |
|------------|-------------------|-------------------|
| [Name] | Decision maker / Blocker | [What they care about] |

### Resolution Options
| Option | Description | Trade-offs | Timeline Impact | Risk |
|--------|-------------|-----------|----------------|------|
| A | [Conservative] | ... | ... | Low |
| B | [Moderate] | ... | ... | Medium |
| C | [Aggressive] | ... | ... | High |

### Recommendation
**Option [X]** — [Reasoning]

### Draft Communication
**To:** [stakeholder]  |  **Channel:** [Slack/email/meeting]
[Draft message framed for recipient's priorities]
```

## Quality Standards
- Root cause goes deeper than the surface symptom.
- Options include genuine trade-offs, not a straw man and obvious winner.
- Communication is framed for the recipient's priorities, not the sender's frustration.
- Impact is quantified where possible.

**Anti-patterns:** Blaming individuals, single-option "recommendations," emotional framing, escalating before trying direct resolution.

## Framework References
- **5 Whys** — Root cause analysis.
- **Principled Negotiation** — Interest-based problem solving.

## Formatting Guidelines
- Tables for options comparison (side-by-side trade-offs).
- Bold the recommended option and key deadlines.
- Draft communication should be copy-paste ready.

## Example
**Root cause:** "Stated blocker: 'waiting on API from Platform team.' Actual root cause: priority conflict — Platform committed to a different initiative. Resolution requires re-prioritization (VP Eng alignment) or workaround (mock API, build against contract, integrate later)."
