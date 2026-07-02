# Pre-Meeting Brief

## Purpose
Generate a tactical brief before any meeting by pulling from attendees' personas, interaction histories, and the meeting's agenda. Anticipate what each person will focus on, likely objections, and recommended approaches — so the PM walks in prepared for the people dynamics, not just the content.

## Auto-Trigger Patterns
- "I have a meeting with…"
- "Prep me for the [meeting name]"
- "Pre-meeting brief"
- "What should I expect from [attendees]"
- "Meeting prep for…"
- "Briefing for tomorrow's…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Meeting details** (required) — topic/agenda, attendees, purpose (decision, update, brainstorm)
- **Attendee personas** (optional) — `context/people/[name]/persona.md` for each attendee
- **Interaction logs** (optional) — `context/people/[name]/interaction-log.md`
- **Meeting context** (optional) — related PRD, decision document, prior meeting notes
- **PM's goals for meeting** (optional) — what outcome the PM wants

## Process
1. **Load attendee personas** — pull persona, communication guide, and recent interactions for each attendee
2. **Analyze meeting dynamics** — given the topic and attendees, predict the conversation flow
3. **Per attendee, generate**:
   - What they will care about most
   - Likely questions they will ask
   - Potential objections or pushback
   - How to frame content for them specifically
4. **Identify potential conflicts** — where attendees' priorities clash on this topic
5. **Map the room** — who are allies, who are skeptics, who is the decision-maker
6. **Recommend approach** — opening framing, key talking points per audience, order of topics, how to handle likely challenges
7. **Prepare contingencies** — if [X pushback], respond with [Y approach]

## Output Format
```markdown
# Pre-Meeting Brief: [Meeting Name]
**Date**: … | **Duration**: … | **Purpose**: [decision / update / brainstorm]

## Room Dynamics
- **Decision-maker**: [name]
- **Allies**: [names — and why]
- **Skeptics**: [names — and why]
- **Wildcards**: [names — unpredictable or unknown]

## Attendee Predictions
### [Name 1] — [Role]
- **Will focus on**: …
- **Likely questions**: …
- **Potential objection**: …
- **Approach**: …

### [Name 2] — [Role]
…

## Recommended Meeting Strategy
1. **Open with**: [framing that works for the room]
2. **Key talking points**: …
3. **Anticipated friction points**: …
4. **Closing / decision approach**: …

## Contingency Plays
| If… | Then… |
|------|--------|

## Post-Meeting Checklist
- [ ] [Follow-ups per attendee]
```

## Quality Standards
- Predictions are grounded in persona data, not generic assumptions
- Strategy accounts for interpersonal dynamics between attendees, not just PM-to-individual
- Contingency plays are specific and actionable
- Post-meeting checklist includes follow-up tailored to each person's preferences
- **Anti-patterns**: Generic meeting prep that ignores people dynamics; over-scripting (meetings are dynamic); ignoring unknown attendees

## Framework References
- Stakeholder personas (communication-guide.md, influence-playbook.md)
- Meeting facilitation frameworks (Purpose → Process → Payoff)
- Influence and negotiation preparation models

## Formatting Guidelines
- Lead with room dynamics map for quick orientation
- Use H3 headers per attendee for scanability
- Contingency table for quick reference during meeting
- Keep the entire brief to 1-2 pages — scannable in 5 minutes before walking in

## Example
For a roadmap review with VP Eng, Design Lead, and Data Science Manager: "VP Eng (Sarah) will ask about technical feasibility and resource impact — lead with eng complexity assessment. Design Lead (Alex) will push for user research validation — have usability data ready. Data Science Manager (Priya) will question metric definitions — align on success criteria early. Potential conflict: Sarah wants to cut scope for speed, Alex wants full UX polish. Bridge: propose phased approach."
