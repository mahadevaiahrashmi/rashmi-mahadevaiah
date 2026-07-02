# Influence Strategy

## Purpose
Develop a targeted influence strategy for a specific ask or initiative. Understand the decision-maker's world, frame the request in language they value, prepare compelling evidence, and plan the optimal timing and setting for maximum impact. This skill turns generic asks into strategically positioned proposals.

## Auto-Trigger Patterns
- "How do I convince [name] to…"
- "Influence strategy for…"
- "I need [name] to approve…"
- "How do I frame this for…"
- "What's the best way to pitch…"
- "Make the case for [initiative] to [person]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **The ask** (required) — what the PM wants the decision-maker to do
- **Decision-maker persona** (required) — `context/people/[name]/persona.md` and `influence-playbook.md`
- **Supporting evidence** (optional) — data, analysis, customer feedback, competitive intel
- **Constraints** (optional) — timeline, budget, organizational dynamics
- **Previous attempts** (optional) — what's been tried, what was the response

## Process
1. **Understand the decision-maker's frame** — from persona: what do they optimize for, what evidence do they trust, what do they fear
2. **Reframe the ask in their language** — translate PM's goals into decision-maker's priorities
3. **Select evidence strategy** — choose the evidence types this person finds compelling (data, customer stories, competitive pressure, peer endorsement, expert opinion)
4. **Prepare the narrative arc** — structure: anchor to their priority → present the gap → propose the solution → show evidence → address objections → define the ask
5. **Plan timing and setting** — when are they most receptive, what setting (1:1 vs group), how much context to provide in advance
6. **Anticipate objections** — from persona hot buttons and decision patterns, prepare responses
7. **Design the follow-up sequence** — what happens after the initial conversation

## Output Format
```markdown
# Influence Strategy: [The Ask]
**Target**: [Decision-maker name and role]
**Desired outcome**: [Specific approval/action needed]

## Their World
- **Optimizes for**: [from persona]
- **Fears**: [from persona]
- **Trusts**: [evidence types, people, sources]
- **Current pressures**: [what's on their mind right now]

## Framing
### Don't say: "[PM's natural framing]"
### Say: "[Reframed in their language]"
**Why this framing works**: …

## Evidence Package
| Evidence | Type | Source | Why It Resonates |
|----------|------|--------|-----------------|

## Narrative Arc
1. **Anchor**: Connect to their stated priority — "…"
2. **Gap**: Show the problem in terms they care about — "…"
3. **Solution**: Present the ask as solving their problem — "…"
4. **Proof**: Evidence in their preferred format — "…"
5. **Ask**: Specific, clear, with defined next step — "…"

## Objection Handling
| Likely Objection | Root Concern | Response Approach |
|-----------------|-------------|-------------------|

## Timing & Setting
- **Best timing**: …
- **Setting**: [1:1 / group / async first then sync]
- **Pre-read**: [what to send in advance, if anything]
- **Duration needed**: …

## Follow-Up Plan
- After meeting: [immediate follow-up]
- Within [X days]: [reinforcement]
- If delayed: [re-engagement approach]
```

## Quality Standards
- Framing is genuinely different from PM's default — shows real perspective shift
- Evidence is curated for this specific person, not a generic data dump
- Objection handling addresses root concerns, not surface-level pushback
- Timing recommendation considers organizational rhythms and decision-maker's calendar patterns
- **Anti-patterns**: Using PM's preferred evidence style instead of decision-maker's; leading with the ask instead of anchoring to their priorities; one-size-fits-all pitch decks

## Framework References
- Cialdini's 6 principles of influence (reciprocity, commitment, social proof, authority, liking, scarcity)
- Aristotle's rhetoric (ethos, pathos, logos) mapped to decision-maker preferences
- Pre-suasion (priming and framing)
- Stakeholder influence-playbook.md

## Formatting Guidelines
- "Don't say / Say" contrast format for immediate reframing
- Narrative arc numbered steps as a presentation script
- Objection table as a quick-reference cheat sheet
- Keep the total strategy to 2 pages — enough to internalize before the conversation

## Example
To convince a CFO to approve a new analytics hire: "Don't say: 'We need a data analyst for the product team.' Say: 'We're leaving $2M in revenue optimization on the table because we can't run pricing experiments faster than quarterly.' Anchor to their Q3 revenue target. Lead with ROI calculation (their preferred evidence). Address likely objection about headcount freeze by framing as reallocation from contractor budget. Schedule for Wednesday afternoon when they typically have lighter meetings."
