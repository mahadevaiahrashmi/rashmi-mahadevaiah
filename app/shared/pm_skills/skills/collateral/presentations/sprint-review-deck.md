# Sprint Review Deck

## Purpose
Creates a sprint review presentation covering the sprint goal, what was delivered with demo flow, metrics impact, what wasn't delivered and why, and an upcoming sprint preview. Keeps stakeholders informed and celebrates team execution while maintaining honest accountability.

## Auto-Trigger Patterns
- "Create a sprint review deck for sprint [X]"
- "Build a sprint demo presentation"
- "I need to present our sprint results"
- "Help me structure a sprint review"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Sprint goal, completed stories/features, demo-ready items, items not completed (with reasons), next sprint preview
- **Optional:** Velocity data, sprint metrics, blockers encountered, team feedback
- **Reference files:** product-brief.md, prd.md, roadmap-presentation.md

## Process
1. **Anchor to the sprint goal** — Frame everything delivered against the stated goal, not just a task list.
2. **Build demo flow** — Sequence completed work into a coherent story. Show real product, not slides.
3. **Measure impact** — Connect delivered work to metrics movement or expected impact.
4. **Address gaps honestly** — For unfinished items: what happened, what's the plan, is the goal still met?
5. **Preview next sprint** — Tease upcoming work to maintain stakeholder engagement.

## Output Format
```
# Sprint [X] Review — [Dates]

## Slide 1: Sprint Goal Recap (Met / Partially Met / Not Met)
## Slide 2: What We Delivered (summary list)
## Slides 3-5: Demo Flow (live demo or annotated walkthrough)
## Slide 6: Metrics Impact
## Slide 7: What We Didn't Finish (item, why, plan)
## Slide 8: Blockers & Learnings
## Slide 9: Next Sprint Preview
## Slide 10: Feedback & Discussion
```

## Quality Standards
- Demo shows real, working product—not mockups or slides describing what was built.
- Sprint goal status is assessed honestly.
- Unfinished work includes root cause and clear plan.
- **Anti-patterns:** Reading a Jira board, demos that don't work, hiding incomplete work.

## Audience
Product stakeholders, engineering peers, design, and leadership. Keep it interactive—this is a working session, not a presentation.

## Formatting Guidelines
- 8-10 slides plus live demo time. Total meeting: 30-45 minutes.
- Demo is the centerpiece—allocate 50%+ of time to working software.
- Use screenshots or recordings as backup if live demo risks are high.

## Example
**Slide 7: What We Didn't Finish**
| Item | Status | Why | Plan |
|------|--------|-----|------|
| Bulk export CSV | 70% done | API rate limit issue | Carry to Sprint 12 |
| Email notifications | Descoped | Design UX issues found | Redesigning, Sprint 13 |
