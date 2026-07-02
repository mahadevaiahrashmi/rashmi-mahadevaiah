# Negotiation Prep

## Purpose
Prepare for negotiations on scope, timeline, resources, or priorities — understanding each party's interests, identifying BATNA, planning opening position, mapping concession strategy, and defining walk-away criteria. Applies principled negotiation to PM's daily trade-off conversations.

## Auto-Trigger Patterns
- "prepare for negotiation on [topic]"
- "how do I negotiate [scope/timeline/resources]"
- "negotiation strategy for [stakeholder]"
- "scope negotiation with [team]"
- "how to push back on [request]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Negotiation context | Yes | User prompt |
| Your objectives | Yes | User prompt |
| Other party's likely position | Recommended | User prompt |
| Stakeholder personas | Recommended | `context/people/` |
| Constraints | Optional | User prompt |

## Process
1. **Define the negotiation** — What's being negotiated? Ideal outcome?
2. **Separate interests from positions** — What each party actually needs vs. asks for.
3. **Identify your BATNA** — Best Alternative To a Negotiated Agreement.
4. **Assess their BATNA** — Understanding their alternative reveals flexibility.
5. **Find the ZOPA** — Zone Of Possible Agreement overlap.
6. **Plan your opening** — Ambitious but defensible, anchored in objective criteria.
7. **Map concession strategy** — What costs you little but matters to them? Sequence concessions.
8. **Define walk-away** — Minimum acceptable outcome.
9. **Prepare for tactics** — Anchoring, deadline pressure, appeal to authority.
10. **Design conversation flow** — Opening, questions, listening strategy, proposal.

## Output Format
```
## Negotiation Prep: [Topic]

### Interest Analysis
| Party | Position | Underlying Interest | Flexibility |
|-------|---------|-------------------|-------------|
| You | ... | ... | ... |
| [Other] | ... | ... | ... |

### BATNA Analysis
| | Your BATNA | Their BATNA |
|---|-----------|-------------|
| Alternative | [Fallback] | [Their fallback] |
| Strength | Strong/Moderate/Weak | Strong/Moderate/Weak |

### Concession Strategy
| Priority | You Could Concede | They Should Offer |
|----------|------------------|------------------|
| 1 (last) | [High-value] | [Return ask] |
| 3 (easy) | [Low-cost to you] | — |

### Conversation Playbook
1. **Open with:** [Frame and question]
2. **Listen for:** [Flexibility signals]
3. **If pushback:** [Response strategy]
```

## Quality Standards
- Analysis goes to interests, not just positions.
- BATNA honestly assessed, not inflated.
- Concessions planned and sequenced, not reactive.
- Walk-away defined before the conversation.

**Anti-patterns:** Win-lose framing, conceding without return, negotiating against yourself, revealing walk-away, emotional reactions.

## Framework References
- **Principled Negotiation (Getting to Yes)** — Interest-based negotiation.
- **BATNA/ZOPA** — Negotiation range analysis.

## Formatting Guidelines
- Tables for interest analysis and concessions.
- Conversation playbook as numbered sequence.
- Clear separation between ideal, opening, and walk-away.

## Example
**Concession strategy:** "If Eng pushes back on 6-week timeline, concede on scope (drop admin dashboard — low user value, high effort) before timeline. Dashboard costs 2 weeks but serves only 5% of users. Gives Eng a win while preserving core experience."
