# Retrospective

## Purpose
Facilitate a structured team retrospective that surfaces what worked, what didn't, and what to change — using proven formats to encourage constructive conversation. Produces clear action items with owners and deadlines, not just good vibes and forgotten insights.

## Auto-Trigger Patterns
- "run a retrospective"
- "retro for [sprint/project/quarter]"
- "what went well / what didn't"
- "team reflection on [project]"
- "start/stop/continue for [team]"
- "lessons learned from [project]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Period / project to reflect on | Yes | User prompt |
| Team context | Recommended | User prompt |
| Key outcomes / metrics | Optional | User prompt |
| Previous retro actions | Optional | Prior retro docs |
| Format preference | Optional | User prompt |

## Process
1. **Choose the format** — Select based on context: Start/Stop/Continue (default), 4Ls (Liked, Learned, Lacked, Longed For), Mad/Sad/Glad (emotional pulse), Sailboat (wind/anchors/rocks), or custom.
2. **Set the context** — Recap the period: key events, outcomes, milestones hit and missed. Ground the discussion in shared reality.
3. **Review previous action items** — Were prior retro actions completed? Accountability matters — retros lose credibility when actions aren't followed up.
4. **Gather input** — For each category in the chosen format, collect team observations. Silent brainstorm first, then discuss. Group similar items.
5. **Prioritize themes** — Identify the 3-5 most impactful themes. Not everything needs an action — some observations are just acknowledged.
6. **Generate actions** — For priority themes: specific action, single owner, deadline. SMART format: specific, measurable, achievable, relevant, time-bound.
7. **Identify systemic patterns** — Do the same themes recur across retros? Flag systemic issues that need structural solutions, not just point fixes.
8. **Close constructively** — End with appreciation and commitments. Retros should leave the team energized, not demoralized.

## Output Format
```
## Retrospective: [Period/Project]
**Date:** [date]  |  **Facilitator:** [name]
**Format:** Start/Stop/Continue | 4Ls | Mad/Sad/Glad
**Participants:** [names]

### Previous Action Items Review
| Action | Owner | Status |
|--------|-------|--------|
| [Prior action] | [Name] | ✅ Done / ❌ Not done / 🔄 In progress |

### [Format: Start / Stop / Continue]

#### Start (New things to try)
1. [Observation] — [Context / evidence]
2. ...

#### Stop (Things that aren't working)
1. [Observation] — [Impact on team]
2. ...

#### Continue (Things that are working)
1. [Observation] — [Why it works]
2. ...

### [Alternative: 4Ls Format]
| Liked | Learned | Lacked | Longed For |
|-------|---------|--------|-----------|
| [Item] | [Item] | [Item] | [Item] |

### Priority Themes
1. **[Theme]** — [Why this matters most]
2. **[Theme]** — [Context]

### Action Items
| # | Action | Owner | Deadline | Success Criteria |
|---|--------|-------|----------|-----------------|
| 1 | [Specific action] | @name | [Date] | [How we know it's done] |
| 2 | [Specific action] | @name | [Date] | [How we know it's done] |

### Systemic Patterns
- [Pattern that recurs across retros — needs structural solution]

### Appreciation
- [Team wins and individual callouts]
```

## Quality Standards
- Previous actions are reviewed — accountability builds trust in the retro process.
- Actions are SMART: specific, owned by a person, with a deadline and success criteria.
- Themes are prioritized — not everything gets an action item, and that's OK.
- Systemic patterns are flagged — recurring issues need more than point fixes.

**Anti-patterns:** No follow-up on previous actions, too many action items (nothing gets done), blame-oriented discussion, retros that are just venting, no prioritization of themes.

## Framework References
- **Start/Stop/Continue** — Simple behavior-change framework.
- **4Ls** — Liked, Learned, Lacked, Longed For.
- **Mad/Sad/Glad** — Emotional pulse check.
- **Sailboat** — Visual metaphor (wind=helps, anchors=slows, rocks=risks).

## Formatting Guidelines
- Choose one format and commit to it — mixing formats confuses.
- Prior actions review at the top (accountability first).
- Action items in numbered table with owner and deadline.
- Appreciation section at the end (constructive close).

## Example
**Systemic pattern:** "For the third consecutive sprint, 'unclear requirements' appears as a retro theme. Point fixes (more spec reviews) haven't resolved it. Structural solution needed: implement a requirement clarity checklist that must be passed before work enters the sprint. Owner: PM Lead. Deadline: implement for next sprint."
