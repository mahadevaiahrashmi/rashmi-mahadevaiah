# One-on-One Prep

## Purpose
Prepare the PM for effective 1:1 meetings across three relationship types: with direct reports (coaching, growth, feedback), with peers (alignment, collaboration, mutual support), and with leadership (updates, asks, strategic alignment). Pull from personas and interaction logs to make each 1:1 specific to the person and the moment.

## Auto-Trigger Patterns
- "Prep for my 1:1 with…"
- "One-on-one agenda with…"
- "1:1 prep"
- "What should I discuss with [name]"
- "Help me prepare for my check-in with…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Person and relationship type** (required) — who and whether they are a report, peer, or leader
- **Persona** (optional) — `context/people/[name]/persona.md`
- **Interaction log** (optional) — `context/people/[name]/interaction-log.md`
- **Recent context** (optional) — ongoing projects, recent wins/challenges, pending decisions
- **PM's goals for 1:1** (optional) — specific topics or outcomes desired

## Process
1. **Identify relationship type** and apply appropriate framework:
   - **Report**: coaching, career development, feedback, blockers, recognition
   - **Peer**: alignment, shared commitments, mutual support, information exchange
   - **Leadership**: concise updates, strategic asks, alignment on priorities, feedback seeking
2. **Review persona and recent interactions** — identify topics that matter to this person right now
3. **Generate agenda** tailored to relationship type:
   - For reports: open with their agenda, then coaching questions, then PM topics
   - For peers: lead with shared context, then alignment items, then asks
   - For leadership: lead with concise updates, then asks (framed in their priorities), then alignment questions
4. **Prepare specific talking points** — not generic questions but contextual prompts
5. **Include follow-up items** from previous 1:1s
6. **Draft coaching questions** (for reports) using open-ended, growth-oriented framing

## Output Format
```markdown
# 1:1 Prep: [Name] — [Date]
**Type**: [Report / Peer / Leader] | **Cadence**: [weekly / biweekly]
**Last 1:1**: [date] | **Open items from last time**: …

## Their Likely Priorities Right Now
- [Based on persona, recent events, current projects]

## Suggested Agenda (30 min)

### Opening (5 min)
- [Relationship-appropriate opener]
- Check: "What's on your mind?"

### Core Discussion (20 min)
#### Topic 1: [Specific topic]
- Context: …
- Talking points: …
- Question to ask: "…"

#### Topic 2: [Specific topic]
- …

### Wrap-Up (5 min)
- Commitments recap
- "What can I do for you this week?"

## Coaching Questions (for reports)
- "What's been your biggest challenge this sprint?"
- "What would you do differently if you could?"
- [Contextual coaching question based on their growth areas]

## Things to Share
- [Recognition or positive feedback]
- [Context they need but might not have]

## Things to Ask About
- [Open items, concerns, alignment needs]

## Follow-Up Template
- [ ] [Action items to track after the meeting]
```

## Quality Standards
- Agenda is specific to this person and this moment, not a generic template
- Coaching questions are open-ended and growth-oriented, not leading
- For leadership 1:1s, updates are pre-framed in their priority language
- Previous action items are tracked and referenced
- **Anti-patterns**: Identical 1:1 prep regardless of person; skipping their agenda to focus on PM's needs; missing opportunity for recognition

## Framework References
- Manager Tools 1:1 framework (their agenda first)
- Coaching GROW model (Goal, Reality, Options, Will)
- Radical Candor for feedback conversations
- Stakeholder personas for communication adaptation

## Formatting Guidelines
- Time-boxed agenda for practical use during the meeting
- Separate coaching questions section for easy reference
- Follow-up template as checklist for post-meeting capture
- Keep total prep to 1 page — glanceable during the meeting

## Example
1:1 with a direct report (eng lead): "Their priorities right now: finishing API migration (stressed about deadline), interested in tech lead promotion. Open from last week: they were going to propose a testing strategy. Coaching question: 'You mentioned wanting more ownership — what would you change about how we handle technical decisions?' Recognition: their refactoring reduced build time by 40%."
