# Meeting Notes to Actions

## Purpose
Transform raw meeting notes into a structured, actionable summary — extracting decisions made, action items with owners and deadlines, open questions, and key insights. Ensures nothing falls through the cracks and every meeting produces clear next steps.

## Auto-Trigger Patterns
- "parse these meeting notes"
- "extract action items from [meeting]"
- "summarize meeting notes"
- "what were the decisions from [meeting]"
- "meeting follow-up for [topic]"
- "turn these notes into actions"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Raw meeting notes | Yes | User prompt |
| Meeting context / purpose | Recommended | User prompt |
| Attendee list | Optional | User prompt |
| Team roster for ownership | Optional | `context/people/` |

## Process
1. **Parse the raw notes** — Read through completely before extracting. Identify the overall meeting purpose and flow.
2. **Extract decisions** — Identify explicit decisions and implicit agreements. Capture: what was decided, rationale, who has authority, any conditions or caveats.
3. **Extract action items** — Identify commitments. For each: owner (specific person, not team), description (concrete and verifiable), deadline (explicit or inferred), dependencies.
4. **Identify open questions** — Flag unresolved items that need follow-up — who needs to answer, by when, and what's blocked on the answer.
5. **Surface key insights** — Important context, data points, or strategic signals that emerged but aren't action items.
6. **Validate completeness** — Cross-check: does every topic discussed have a clear outcome (decision, action, or explicit deferral)?
7. **Format for distribution** — Structure for Slack/email with clear headers, owners bolded, deadlines highlighted.

## Output Format
```
## Meeting Summary: [Topic] — [Date]
**Attendees:** [list]

### Decisions Made
1. **[Decision]** — [Rationale/context]. Decided by [authority].

### Action Items
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | [Specific task] | @name | [date] | Pending |

### Open Questions
| Question | Owner to Answer | Needed By | Blocks |
|----------|----------------|-----------|--------|
| ... | @name | [date] | [what it blocks] |

### Key Insights
- [Insight with context — why it matters]

### Follow-Ups Needed
- [Conversation/meeting that needs to happen next]
```

## Quality Standards
- Action items are specific and verifiable — "Draft the API spec" not "Look into API."
- Every action has a single owner (a person, not a team).
- Decisions include rationale so they can be revisited with context.
- Open questions specify what they block to enable prioritization.

**Anti-patterns:** Vague actions ("follow up on X"), team-level ownership ("engineering will handle"), missing deadlines, restating discussion without extracting outcomes.

## Framework References
- **GTD (Getting Things Done)** — Next-action thinking for clear, actionable items.
- **RACI** — Clear ownership assignment for follow-ups.

## Formatting Guidelines
- Tables for action items and open questions (easy to track).
- Bold owner names for visual scanning.
- Number decisions and actions for easy reference in follow-up.
- Keep the full summary under 1 page — brevity is a feature.

## Example
**Extracted action:** "**@sarah** — Update the onboarding flow spec to include the skip option for enterprise users. **Due: Friday 3/15.** Blocks: design can't start mockups until spec is updated."
