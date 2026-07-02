# Focus Group Guide

## Purpose
Plan and facilitate a focus group — objectives, participant mix, discussion topics, exercises, and analysis framework — to gather qualitative insights from group dynamics. Focus groups reveal shared mental models, social validation of ideas, and reactions that emerge from participant interaction, complementing 1:1 interviews with a group-dynamic lens.

## Auto-Trigger Patterns
- "plan a focus group"
- "focus group guide for [topic]"
- "group discussion about [topic]"
- "facilitate a focus group on [topic]"
- "design a focus group session"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Discussion topic and objectives | Yes | User prompt |
| Target participant profile | No | `context/products/*/customers.md` |
| Number of participants | Optional | User prompt (default: 6-8) |
| Session duration | Optional | User prompt (default: 90 min) |
| Prior research to build on | Optional | Prior research outputs |

## Process
1. **Define objectives** — State 2-3 specific questions the focus group will answer. Focus groups excel at: exploring reactions, testing concepts, understanding language and mental models, and surfacing social dynamics.
2. **Design participant mix** — Select 6-8 participants per group. Decide on homogeneous (same role/segment for depth) or heterogeneous (diverse for breadth). Define screening criteria.
3. **Plan multiple groups** — Run 2-3 groups to reduce outlier effects. Plan for saturation.
4. **Structure the session** — Build a 90-minute arc:
   - *Warm-up (10 min)*: Introductions, ground rules, ice-breaker.
   - *Opening (10 min)*: Broad context-setting question.
   - *Core discussion (40 min)*: 3-4 focused topics with exercises.
   - *Activity/exercise (15 min)*: Card sort, ranking, concept reaction, or scenario-based discussion.
   - *Wrap-up (15 min)*: Priorities, summary, anything unsaid.
5. **Design exercises** — Interactive activities that generate discussion: concept reactions, prioritization exercises, "magic wand" scenarios, card sorting.
6. **Prepare facilitation techniques:**
   - Use the 5-second rule (wait for silence before probing).
   - Redirect dominant participants diplomatically.
   - Draw out quieter voices with direct invitations.
   - Use "anyone feel differently?" to surface minority views.
7. **Plan logistics** — Venue/platform, recording, note-taker, incentives, consent, refreshments.
8. **Define analysis approach** — How notes will be coded, themes extracted, and findings validated across groups.

## Output Format
```
## Focus Group Guide: [Topic]

### Objectives
1. [Question this group will explore]
2. [Question this group will explore]

### Session Overview
| Detail | Value |
|--------|-------|
| Duration | 90 minutes |
| Participants | 6-8 per group |
| Number of groups | 2-3 |
| Format | In-person / Virtual |

### Participant Screening
**Must have:** ...
**Nice to have:** ...
**Exclude:** ...
**Composition goal:** [Homogeneous / Heterogeneous]

### Discussion Guide

#### Warm-Up (10 min)
- Welcome and introductions
- Ground rules: no wrong answers, speak freely, one at a time
- Ice-breaker: [activity]

#### Opening (10 min)
- [Broad opening question to set context]
- Follow-up: [probe]

#### Core Discussion (40 min)
**Topic 1: [Name]** (15 min)
- [Key question]
  - Probe: ...
  - Probe: ...

**Topic 2: [Name]** (15 min)
- [Key question]

**Topic 3: [Name]** (10 min)
- [Key question]

#### Exercise (15 min)
**[Exercise name]:** [Description and instructions]
Materials needed: ...
Discussion after exercise: [Debrief questions]

#### Wrap-Up (15 min)
- "If you could change one thing about [topic], what would it be?"
- "What didn't we cover that you think is important?"
- Thank you, next steps, incentive distribution

### Facilitation Notes
| Situation | Technique |
|-----------|-----------|
| Dominant speaker | "Let's hear from others..." |
| Silence | Wait 5 seconds, then rephrase |
| Groupthink | "Does anyone see it differently?" |
| Off-topic | "That's interesting — let's park it and come back" |

### Logistics
| Item | Detail |
|------|--------|
| Location | ... |
| Recording | ... |
| Note-taker | ... |
| Incentive | ... |
| Consent forms | ... |

### Analysis Framework
- Code notes by topic and participant
- Compare themes across groups
- Flag where groups agreed vs. diverged
- Weight findings by how many groups surfaced them
```

## Quality Standards
- 6-8 participants per group (fewer loses dynamics; more reduces airtime).
- Session is structured but flexible — guide allows for organic conversation.
- Exercises generate concrete artifacts (rankings, reactions), not just discussion.
- Multiple groups run to validate patterns (minimum 2).
- Facilitation techniques address common group dynamics pitfalls.

**Anti-patterns:** Too many topics for the time available, allowing one participant to dominate, treating focus group findings as statistically representative, leading questions, concept testing without context, running only one group.

## Framework References
- **Focus Group Methodology** — Qualitative research through group discussion and interaction.
- **Service Design** — Co-creation exercises within focus group sessions.

## Formatting Guidelines
- Time allocations noted for every section.
- Facilitation techniques in a quick-reference table.
- Exercises described with materials list.
- Discussion questions numbered for easy reference.

## Example
**Scenario:** Focus group exploring how marketing teams collaborate on campaign planning.

**Exercise:** Card sort — Give participants 12 cards, each with a campaign planning activity (brief creation, audience selection, channel planning, etc.). Ask them to sort into: "always do," "sometimes do," "never do." Discuss the "sometimes" pile — what determines whether they do it?
