# Webinar Script

## Purpose
Creates a complete webinar script with opening, agenda, content sections, demo flow, Q&A preparation, and closing CTA. Includes speaker notes, timing guidance, and visual direction for slides. Designed for both live and recorded formats.

## Auto-Trigger Patterns
- "Write a webinar script for [topic]"
- "Create a webinar presentation plan"
- "I need to script a product webinar"
- "Help me prepare a webinar on [subject]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Topic, target audience, key messages (3-5), demo plan, CTA, total duration
- **Optional:** Co-presenter details, Q&A bank, registration data, follow-up sequence, recording plan
- **Reference files:** product-brief.md, product-launch-deck.md, conference-talk-deck.md

## Process
1. **Define the promise** — What will attendees be able to do after watching? Make it specific.
2. **Structure for retention** — Attendees drop off over time. Front-load value. Tease what's coming.
3. **Script the demo** — Practice the demo 3x. Have a backup plan if it fails.
4. **Prepare Q&A** — Anticipate 15-20 questions. Have concise answers ready.
5. **Write the close** — Strong CTA with urgency or exclusivity.
6. **Time everything** — Mark timing for each section. Build in buffer.

## Output Format
```
# Webinar: [Title]
**Duration:** [X minutes] | **Format:** [Live/recorded] | **Speakers:** [Names]

## Opening (0:00-3:00)
**Speaker:** [Name]
**Script:** [Welcome, housekeeping, introduce the promise]
**Visual:** [Title slide]
**Engagement:** [Poll or question to warm up audience]

## Agenda (3:00-4:00)
**Script:** [Preview what they'll learn. Create anticipation.]
**Visual:** [Agenda slide]

## Section 1: [Topic] (4:00-12:00)
**Speaker:** [Name]
**Key message:** [One takeaway]
**Script:** [Talking points, transitions, stories]
**Visuals:** [Slide descriptions]

## Section 2: [Topic] (12:00-20:00)
[Same structure]

## Demo (20:00-30:00)
**Setup:** [Context for what they're about to see]
**Flow:** [Step-by-step demo walkthrough]
**Backup:** [If demo fails: pre-recorded video or screenshots]
**Transition:** [Bridge from demo to takeaways]

## Section 3: [Takeaways] (30:00-35:00)
[Key learnings. Framework. Actionable advice.]

## Q&A (35:00-45:00)
**Prepared questions:** [Top 10 anticipated questions with answers]
**Moderation:** [How to handle off-topic or hostile questions]

## Close (45:00-48:00)
**CTA:** [Specific action with incentive]
**Follow-up:** [What they'll receive after the webinar]
**Thank you:** [Appreciation + contact info]

## Post-Webinar
[Follow-up email. Recording distribution. Lead scoring.]
```

## Quality Standards
- Attendees can articulate the key takeaway in one sentence after watching.
- Demo works flawlessly or has a seamless backup.
- Q&A prep covers 80%+ of actual questions asked.
- **Anti-patterns:** All slides no demo, reading slides verbatim, no engagement moments, weak CTA, running over time.

## Audience
Registered attendees who self-selected for this topic. They expect to learn something practical. Mix of prospects (evaluating) and customers (deepening usage). Honor their time investment.

## Formatting Guidelines
- Script with timing marks every 5 minutes.
- Speaker notes written as speaking cues, not full scripts (unless requested).
- Plan for engagement every 7-10 minutes: poll, question, chat prompt.
- Total duration: 45-60 minutes including Q&A.

## Example
**Demo opening:** "(20:00) Let me show you exactly what this looks like in practice. I'm going to start as a new user with a real dataset—this is actual anonymized customer data, not a demo environment. In the next 8 minutes, I'll go from raw data to a published report with AI-generated insights. Watch how many clicks it takes... [begin demo]."
