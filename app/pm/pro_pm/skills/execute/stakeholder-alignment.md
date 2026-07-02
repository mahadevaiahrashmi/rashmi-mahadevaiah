# Stakeholder Alignment

## Purpose
Diagnose and resolve misalignment between stakeholders — mapping who disagrees on what and why, identifying whether the conflict is about values, data, or priorities, and creating a concrete alignment plan with conversations to have and compromises to propose.

## Auto-Trigger Patterns
- "stakeholders disagree on [topic]"
- "how do I align [person A] and [person B]"
- "there's misalignment on [initiative]"
- "stakeholder conflict about [decision]"
- "get alignment between [teams/people]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Misalignment description | Yes | User prompt |
| Stakeholder positions | Yes | User prompt |
| Stakeholder personas | Recommended | `context/people/` |
| Initiative context | Optional | `context/initiatives/` |

## Process
1. **Map the disagreement** — Who disagrees with whom, on what specifically, and stated positions.
2. **Diagnose the source** — Facts/data (solvable with information), priorities (solvable with framework), values (requires compromise), politics/incentives (structural solution).
3. **Understand interests** — Go beneath positions to interests. Often positions conflict but interests are compatible.
4. **Identify common ground** — What all parties agree on. Build from shared ground.
5. **Design alignment path** — Sequence of conversations, data presentations, or workshops.
6. **Prepare compromise proposals** — 2-3 options addressing core interests from all sides.
7. **Plan communication** — Tailored per persona's communication style and priorities.
8. **Define alignment criteria** — What does "aligned" look like? Explicit agreement on specific decisions.

## Output Format
```
## Stakeholder Alignment: [Topic]

### Disagreement Map
| Stakeholder | Position | Underlying Interest | Priority |
|------------|----------|-------------------|----------|
| [Name A] | [Stated position] | [What they need] | [Value] |
| [Name B] | [Stated position] | [What they need] | [Value] |

### Diagnosis
- **Source:** [Data / Priorities / Values / Incentives]
- **Common ground:** [Agreement points]
- **Core tension:** [Fundamental trade-off]

### Alignment Plan
| Step | Action | Target | Objective |
|------|--------|--------|-----------|
| 1 | [Conversation/data share] | [Person] | [Achieve] |

### Compromise Options
#### Option A: [Name]
- [Name A] gets: [gain]
- [Name B] gets: [gain]
- Trade-off: [what's given up]
```

## Quality Standards
- Interests distinguished from positions — key insight for alignment.
- Compromise options genuinely address core interests.
- Communication tailored per stakeholder persona.
- Alignment plan is sequenced — who to talk to first matters.

**Anti-patterns:** Taking sides, forcing agreement, treating all disagreements as political, skipping the "why" behind positions.

## Framework References
- **Principled Negotiation** — Separate people from problems, focus on interests.
- **DACI** — Clarifying decision authority.
- **Stakeholder mapping** — Power/interest grid.

## Formatting Guidelines
- Disagreement map table for clarity on positions.
- Sequenced alignment plan.
- Separate communication sections per stakeholder.

## Example
**Diagnosis:** "VP Sales wants enterprise SSO for Q2 deals. VP Product wants self-serve activation. Disagreement looks like priorities but is actually about data — Sales doesn't know 60% of prospects have SSO alternatives; Product doesn't know 3 deals worth $400K are blocked. Solution: build SSO scoped to unblock deals (4 weeks) rather than full suite (12 weeks)."
