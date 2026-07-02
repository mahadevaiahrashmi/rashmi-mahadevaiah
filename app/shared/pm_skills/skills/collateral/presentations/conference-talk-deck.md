# Conference Talk Deck

## Purpose
Creates a story-driven external conference presentation that hooks the audience, frames a compelling problem, shares a unique insight or approach, provides evidence, and delivers memorable takeaways. Minimal text on slides—the speaker IS the content; slides are visual anchors.

## Auto-Trigger Patterns
- "Create a conference talk deck on [topic]"
- "Build a presentation for [conference name]"
- "I need slides for my talk at [event]"
- "Help me structure a conference presentation"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Talk topic, key thesis/insight, target audience, talk duration, 2-3 evidence points or stories
- **Optional:** Conference theme, audience skill level, prior talks on similar topics, speaker bio
- **Reference files:** product-brief.md, blog-post-thought-leadership.md

## Process
1. **Find the hook** — First 30 seconds must create curiosity or tension.
2. **Build the narrative arc** — Setup → Conflict → Insight → Resolution → Takeaway.
3. **One idea per slide** — If a slide needs more than 5 seconds to process, split it.
4. **Evidence through stories** — Replace bullet points with anecdotes, data visualizations, and demos.
5. **Rehearsal-ready** — Write speaker notes as spoken script. Time each section.

## Output Format
```
# [Talk Title — Punchy, Memorable]

## Slide 1: Hook (0:00-0:30)
  [Provocative question / surprising stat / story opening]
  Speaker Notes: [Full opening script]

## Slides 2-4: The World As It Is (0:30-5:00)
## Slides 5-7: The Problem / What's Broken (5:00-10:00)
## Slides 8-11: The Insight / Our Approach (10:00-20:00)
## Slides 12-14: Evidence / Results (20:00-25:00)
## Slide 15: Takeaways (3 things to remember)
## Slide 16: Thank You + Contact
```

## Quality Standards
- A stranger should be able to state the talk's key insight from the title alone.
- No slide has more than 10 words. Images, diagrams, and single phrases only.
- Speaker notes are written in spoken language, not formal prose.
- **Anti-patterns:** Bullet point slides, company pitch disguised as a talk, reading slides aloud, no narrative arc.

## Audience
Conference attendees—practitioners, leaders, and peers in the field. They chose this talk over alternatives and expect to learn something new or gain a framework.

## Formatting Guidelines
- 15-25 slides for a 30-minute talk. Large fonts, high-contrast visuals.
- Speaker notes: full spoken script with timing marks and transition cues.
- Include a "resources" link at the end (blog post, slides download).

## Example
**Slide 8: "We were measuring the wrong thing"**
Visual: A speedometer pointing to "features shipped." An X crossing it out. Below: "time to value."
Speaker Notes: "For two years, we tracked features shipped per quarter. Then a customer told us: 'I don't care how many features you ship. I care how long it takes me to get value from one.' That changed everything..."
