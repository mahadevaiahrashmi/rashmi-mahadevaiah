# All-Hands Deck

## Purpose
Creates an engaging 10-15 slide company or team all-hands presentation that celebrates product wins, shares key metrics, tells customer stories, gives shoutouts, previews upcoming priorities, and shares team updates. The tone is energizing and unifying—not a reporting exercise.

## Auto-Trigger Patterns
- "Create an all-hands deck for [month/quarter]"
- "Build a team meeting presentation"
- "I need slides for our product all-hands"
- "Help me put together an all-hands update"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Time period, key wins/launches, metrics highlights, upcoming priorities
- **Optional:** Customer stories, team shoutouts, new hires, cultural moments, fun elements, org updates
- **Reference files:** product-brief.md, sprint-review-deck.md, quarterly-business-review.md

## Process
1. **Curate, don't dump** — Select 3-5 highlights that tell a cohesive story about progress and direction.
2. **Lead with energy** — Open with a win or customer story, not a metrics table.
3. **Make it human** — Include team shoutouts, customer quotes, and behind-the-scenes moments.
4. **Keep metrics accessible** — Show 3-5 key numbers with clear context, not a dashboard.
5. **End with momentum** — Close on what's next and why it's exciting.

## Output Format
```
# [Team/Company] All-Hands — [Month/Quarter Year]

## Slide 1: Opening Energy (big win, customer quote, or milestone)
## Slide 2: Agenda / What We'll Cover
## Slide 3-4: What We Shipped (demos, screenshots, impact)
## Slide 5: By the Numbers (3-5 key metrics, trend arrows)
## Slide 6-7: Customer Spotlight (story, quote, outcome)
## Slide 8: Team Shoutouts
## Slide 9: Learnings (one honest "here's what we learned")
## Slide 10-11: What's Coming Up (preview with excitement framing)
## Slide 12: Team Updates (new hires, org changes, events)
## Slide 13: Q&A / Open Discussion
```

## Quality Standards
- The deck should make people feel proud, informed, and energized.
- Shoutouts are specific—"Sarah led the migration that cut deploy time 40%" not "thanks to the infra team."
- Metrics have context—"53K DAU, up 12% and our best quarter ever."
- **Anti-patterns:** Reading a status report, no human stories, metrics without context, skipping learnings.

## Audience
The full product team or company. Mix of engineers, designers, PMs, GTM, support, and leadership. Keep it accessible—no jargon that excludes non-technical team members.

## Formatting Guidelines
- 10-15 slides. Visual, energizing, light on text.
- Use photos of team members for shoutouts (with permission).
- Include one interactive element: poll, Q&A prompt, or trivia.
- Aim for 30-45 minute presentation including Q&A.

## Example
**Slide 1 (Opening):**
"This quarter, a customer told us: 'Your product saved my team 20 hours a week. My engineers are actually happy now.' — VP Engineering, Acme Corp"
