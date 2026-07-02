# Town Hall Script

## Purpose
Write a complete town hall or all-hands script with opening, product update, metrics review, customer stories, upcoming priorities, and Q&A preparation. Includes timing guidance, speaker notes, and transition cues to ensure a polished, engaging delivery.

## Auto-Trigger Patterns
- "Write a town hall script" / "all-hands script"
- "Help me script the product section of the town hall"
- "Full script for the team meeting"
- "Prepare town hall content with timing"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Town hall theme/purpose, key updates to cover, metrics to share, time allocation
- **Optional:** Customer stories, guest speakers, sensitive topics, prior town hall for continuity
- **Reference:** `context/initiatives/` for initiative updates, `context/team/` for team context

## Process
1. **Set the arc** — Every town hall has a narrative: where we've been, where we are, where we're going. Define the emotional arc too: energize? align? be transparent about challenges?
2. **Structure the sections** — Opening hook → Context/recap → Product update → Metrics → Customer spotlight → Priorities → Q&A.
3. **Write speaker notes** — Conversational, not robotic. Include exact opening lines, transition phrases, and emphasis cues.
4. **Embed customer stories** — At least one specific customer narrative. Names, quotes, outcomes. Stories create emotional connection.
5. **Prepare metrics commentary** — Don't just show numbers. Narrate them: "This means..." "What changed was..." "We're watching this because..."
6. **Build Q&A prep** — Anticipate 8-10 questions, including uncomfortable ones. Draft concise, honest answers.
7. **Add timing** — Assign minutes per section. Build in 10% buffer — town halls always run long.
8. **Include stage directions** — [PAUSE], [CLICK], [TRANSITION SLIDE], [INVITE GUEST SPEAKER].

## Output Format
```
## Town Hall Script: [Theme]
**Date:** [Date] | **Duration:** [X min] | **Speaker(s):** [Names]

### Opening (X min)
[SPEAKER WALKS ON / UNMUTES]
"[Exact opening line — hook with energy, story, or provocative question]"

[Context: Set the stage — what this town hall covers and why it matters now]

"[Transition to first section]"

### Product Update (X min)
"[Section opener connecting to audience's daily work]"

- [Update 1 — framed as outcome, not feature]
- [Update 2 — with customer or data proof point]

[CLICK — show demo/screenshot if applicable]

"[Transition phrase to metrics]"

### Metrics Review (X min)
"[Metrics intro — 'Let me show you the numbers behind the work']"

| Metric | Current | Change | Commentary |
|--------|---------|--------|------------|
| ...    | ...     | ...    | [What it means] |

### Customer Spotlight (X min)
"Let me tell you about [Customer Name]..."
[Story: Situation → Challenge → How we helped → Outcome → Quote]

### What's Next (X min)
"Looking ahead, here are our top 3 priorities..."
1. [Priority 1 — why it matters]
2. [Priority 2 — why it matters]
3. [Priority 3 — why it matters]

### Close (X min)
"[Callback to opening hook]"
"[Inspiring or rallying close]"
"[Thank you + open for questions]"

### Q&A Prep
| Question | Answer | Notes |
|----------|--------|-------|
| [Hard question 1] | [Concise answer] | [If pressed...] |
```

## Quality Standards
- Opening hook captures attention in the first 15 seconds. Not "Welcome to the town hall."
- Customer stories have names, specifics, and emotional resonance — not "a customer said they liked it."
- Metrics are narrated, not just displayed. The speaker explains what the number means and why it matters.
- Q&A prep includes at least 3 uncomfortable questions with honest, non-defensive answers.
- **Anti-patterns:** Reading slides verbatim, no customer stories, metrics without commentary, skipping Q&A prep, running over time because no buffer was planned.

## Framework References
- Storytelling arc (Hook → Build → Climax → Resolution)
- Assertion-Evidence for metrics slides
- Town hall best practices — energy management across sections

## Formatting Guidelines
- Write in script format with speaker cues in brackets.
- Include [PAUSE], [CLICK], [TRANSITION SLIDE] stage directions.
- Time each section explicitly. Total should include 10% buffer.
- Q&A in table format for quick reference.

## Example
> **Opening:** "Six months ago, I stood here and said we'd bet on developer experience as our growth engine. Today I want to show you what that bet has produced — and where it takes us next."
>
> **Customer Spotlight:** "Let me tell you about Priya at Meridian Health. She integrated our API in a weekend hackathon. Three months later, her team processes 2M events daily through our platform. She told us: 'You turned a weekend project into our core infrastructure.' That's the story of developer adoption."
