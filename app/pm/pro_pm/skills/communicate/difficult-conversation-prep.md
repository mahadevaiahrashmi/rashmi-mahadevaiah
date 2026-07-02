# Difficult Conversation Prep

## Purpose
Prepare for hard conversations — scope cuts, timeline slips, saying no, delivering critical feedback, or pushing back on leadership. Structures the facts, anticipates reactions using stakeholder personas, frames the message constructively, and provides escalation paths if the conversation stalls.

## Auto-Trigger Patterns
- "Help me prepare for a difficult conversation"
- "How do I tell [person] about [bad news]?"
- "I need to push back on [person/request]"
- "Prep me for saying no to [stakeholder]"
- "How do I deliver this feedback?"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** The situation (what happened or needs to happen), the person you're talking to, desired outcome
- **Optional:** Relationship history, political context, prior attempts to address this
- **Reference:** `context/people/` for stakeholder persona, reaction patterns, communication preferences

## Process
1. **Establish the facts** — Separate facts from interpretations. Write down only what objectively happened or is true. No editorializing.
2. **Load the persona** — Pull the stakeholder profile from `context/people/`. Understand: what they care about, how they react to bad news, what motivates them, their decision-making style.
3. **Predict the reaction** — Based on persona: Will they push back? Escalate? Go quiet? Negotiate? Prepare for each likely response.
4. **Frame using SBI** — Situation (when/where), Behavior (what happened, observable), Impact (the effect on the project/team/customer).
5. **Craft the message** — Lead with shared goals. Acknowledge the difficulty. Present the facts. Offer what you can. Be direct but not harsh.
6. **Prepare concessions** — What can you offer? Partial scope? Extended timeline? Additional support? Know your trade space.
7. **Define escalation path** — If the conversation doesn't resolve, what's the next step? Who else gets involved?
8. **Rehearse** — Write out your opening 2-3 sentences verbatim. Practice transitions for likely pushback.

## Output Format
```
## Difficult Conversation Prep: [Topic]
**With:** [Person/Role] | **Goal:** [Desired outcome]

### The Facts (Not Interpretations)
- [Fact 1]
- [Fact 2]

### Their Likely Perspective
- What they care about: [Key concern]
- Likely reaction: [Predicted response based on persona]
- What they might say: "[Anticipated pushback]"

### Your Message (SBI Framework)
- **Situation:** [When/where]
- **Behavior/Event:** [What happened — observable, specific]
- **Impact:** [Effect on project/team/customer/business]

### How to Frame It
- **Opening:** "[Exact opening sentences — rehearse these]"
- **Shared goal:** [Connect to something you both want]
- **The message:** [Direct, clear, compassionate]
- **What you can offer:** [Concessions or alternatives]

### If They Push Back
| They say... | You respond... |
|-------------|---------------|
| "[Pushback 1]" | "[Response]" |
| "[Pushback 2]" | "[Response]" |

### Escalation Path
- If unresolved: [Next step, who to involve, timeline]
```

## Quality Standards
- Facts section contains zero interpretations or emotional language.
- SBI framework is applied correctly — Situation is specific, Behavior is observable, Impact is concrete.
- Pushback responses are prepared for at least 3 likely reactions.
- Opening sentences are written verbatim and rehearsable — this is where most people fumble.
- **Anti-patterns:** Leading with blame, sandwiching (compliment-criticism-compliment), being vague to avoid discomfort, not having an escalation plan, over-preparing to the point of scripting the whole conversation.

## Framework References
- SBI (Situation-Behavior-Impact) — Center for Creative Leadership
- Crucial Conversations — Patterson, Grenny, McMillan, Switzler
- Nonviolent Communication — Marshall Rosenberg (needs-based framing)

## Formatting Guidelines
- Write opening sentences as exact quotes — they need to be rehearsable.
- Use a table for pushback/response pairs — easy to scan before the meeting.
- Keep the prep to one page — this is a reference sheet, not an essay.

## Example
> **Opening:** "Alex, I want to talk about the Q3 timeline. I know we both want to hit the September launch, and I need to share some data that affects that plan."
>
> **SBI:** In our sprint review last Thursday (Situation), we identified that the API integration has 3 unresolved dependencies on the partner's side (Behavior), which means we can't start integration testing until those are resolved — putting us 3 weeks behind the critical path (Impact).
>
> **If they say "Just work around it":** "I hear you. We explored workarounds — the fastest alternative still adds 2 weeks and introduces technical debt we'd need to address before GA. Here's what I'd propose instead..."
