# Presentation Outline

## Purpose
Create a structured slide outline for any PM presentation, organized around a narrative arc with one idea per slide. Includes speaker notes, visual suggestions, data callouts, and transition logic. Adapts framing and depth to the target audience.

## Auto-Trigger Patterns
- "Create a presentation outline" / "slide outline"
- "Help me structure a deck for [audience]"
- "Outline a presentation on [topic]"
- "What slides should I include for [topic]?"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Presentation topic, target audience, key message or objective, time allocation
- **Optional:** Supporting data, constraints (e.g., max slides), prior presentations on topic
- **Reference:** `context/people/` for audience persona and preferences

## Process
1. **Define the objective** — What should the audience think, feel, or do after this presentation?
2. **Map the audience** — Load audience persona from `context/people/`. Adapt: technical depth, strategic framing, emotional tone, evidence types they trust.
3. **Build the narrative arc** — Setup (context/problem) → Tension (challenge/opportunity) → Resolution (approach/results) → Forward (next steps/ask).
4. **Apply one-idea-per-slide** — Each slide has exactly one takeaway. If you can't state it in one sentence, split the slide.
5. **Add speaker notes** — What to say that's not on the slide. Transitions, emphasis, stories.
6. **Suggest visuals** — Chart type, image concept, or layout for each slide. Slides are visual; notes are verbal.
7. **Place data callouts** — Specific numbers that anchor each point. One key stat per slide max.
8. **Write transitions** — Explicit phrases connecting each slide to the next.
9. **Estimate timing** — ~2 minutes per slide for presented decks, ~1 min for read-aheads.

## Output Format
```
## Presentation Outline: [Title]
**Audience:** [Who] | **Objective:** [What they should do/think after]
**Duration:** [X min] | **Slides:** [N]

### Slide 1: [Title Slide]
- **Headline:** [Presentation title]
- **Visual:** [Suggested visual]
- **Speaker note:** [Opening line / hook]

### Slide 2: [Setup/Context]
- **One idea:** [Single takeaway sentence]
- **Visual:** [Chart type or image suggestion]
- **Data callout:** [Key stat]
- **Speaker note:** [What to say, story to tell]
- **Transition:** "[Phrase leading to next slide]"

### Slide N: [The Ask / Close]
- **One idea:** [Clear call to action]
- **Visual:** [Summary or next steps visual]
- **Speaker note:** [Closing statement, callback to opening]
```

## Quality Standards
- Every slide has exactly one idea — if the headline doesn't capture it in one sentence, the slide is overloaded.
- Narrative arc is clear — a stranger reading just the slide titles should follow the logic.
- Speaker notes are conversational, not scripts. They guide delivery, not dictate it.
- Visuals are suggested by type (bar chart, screenshot, quote card) not described in detail.
- **Anti-patterns:** Bullet-point slides with no visual, multiple ideas per slide, no narrative flow (random order), missing transitions, no clear ask at the end.

## Framework References
- Narrative arc (Setup → Tension → Resolution → Forward)
- Assertion-Evidence slide design — headline is the assertion, body is the evidence
- Audience persona mapping from `context/people/`

## Formatting Guidelines
- Slide titles are complete sentences (assertions), not labels.
- Number every slide for easy reference.
- Include timing estimate per slide or per section.
- Group slides into sections that map to the narrative arc.

## Example
> **Slide 3: "Mid-market activation jumped 22% after the onboarding redesign"**
> - **Visual:** Before/after funnel comparison chart
> - **Data callout:** Day-7 activation: 28% → 34%
> - **Speaker note:** "This is the redesign we bet on in Q1. The hypothesis was that reducing setup steps from 7 to 3 would unlock activation. The data says yes."
> - **Transition:** "But activation is only half the story — let's look at what happens after Day 7..."
