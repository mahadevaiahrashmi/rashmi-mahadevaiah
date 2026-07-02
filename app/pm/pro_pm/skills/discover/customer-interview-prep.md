# Customer Interview Prep

## Purpose
Prepare a comprehensive customer interview kit — discussion guide, hypotheses, screening criteria, and logistics — so that every conversation yields high-signal insights. Well-structured interviews reduce bias, surface latent needs, and build the evidence base that drives confident product decisions.

## Auto-Trigger Patterns
- "prepare for a customer interview"
- "create a discussion guide"
- "help me plan customer interviews"
- "interview prep for [customer/segment]"
- "what should I ask customers about [topic]"
- "screen participants for research"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Research objective / hypothesis | Yes | User prompt |
| Target customer segment | No | `context/products/*/customers.md` |
| Product area or feature under investigation | Yes | User prompt |
| Number of interviews planned | Optional | User prompt |
| Prior research findings | Optional | `artifacts/research/` |
| Competitive context | Optional | `context/products/*/competitors.md` |

## Process
1. **Clarify the research objective** — Restate what decisions this research will inform. Tie to a specific product question or bet.
2. **Draft hypotheses to test** — List 3-5 falsifiable hypotheses. Each should map to a belief the team holds that could be wrong.
3. **Define screening criteria** — Specify demographics, behaviors, and usage patterns that qualify a participant. Include disqualifiers.
4. **Build the discussion guide** — Structure into four acts:
   - *Warm-up (5 min)*: Rapport-building, context-setting, consent.
   - *Context & current behavior (10 min)*: Understand their world before introducing your topic.
   - *Core exploration (20 min)*: Open-ended questions probing the problem space. Use JTBD "when did you last…" framing.
   - *Wrap-up (5 min)*: Surprises, anything unsaid, referral ask.
5. **Add follow-up probes** — For each core question, list 2-3 probes: "Tell me more," "Why is that important," "What happened next."
6. **Plan logistics** — Recording setup, note-taker role, participant incentive, scheduling window.
7. **Quality-check** — Verify no leading questions, no double-barreled questions, hypotheses are testable, and guide fits the time slot.

## Output Format
```
## Interview Prep: [Topic]

### Research Objective
[One clear sentence]

### Hypotheses to Test
| # | Hypothesis | How We'll Know |
|---|-----------|----------------|
| H1 | ... | ... |

### Screening Criteria
**Include:** ...
**Exclude:** ...
**Target count:** ...

### Discussion Guide

#### Warm-Up (5 min)
- [Question]

#### Context & Current Behavior (10 min)
- [Question]
  - Probe: ...

#### Core Exploration (20 min)
- [Question]
  - Probe: ...
  - Probe: ...

#### Wrap-Up (5 min)
- [Question]

### Logistics
| Item | Detail |
|------|--------|
| Duration | ... |
| Recording | ... |
| Incentive | ... |
```

## Quality Standards
- Every core question is open-ended (no yes/no).
- Questions follow a funnel: broad context → specific problem → reaction.
- No feature pitches disguised as questions.
- Hypotheses are falsifiable with evidence from 5-8 interviews.
- Guide fits the allotted time when read aloud.

**Anti-patterns:** Leading questions ("Don't you think X is hard?"), asking about future behavior ("Would you use…?"), stacking multiple questions, jumping to solutions.

## Framework References
- **JTBD (Jobs-to-Be-Done)** — Frame questions around the job the customer is trying to accomplish, not the product.
- **Problem-Interview Fit** — Validate problem severity, existing alternatives, and willingness to change before discussing solutions.

## Formatting Guidelines
- Use tables for hypotheses and logistics.
- Number all questions for easy reference during the interview.
- Bold key probes so the interviewer can scan quickly.
- Keep the guide to 1-2 pages when printed.

## Example
**Scenario:** Preparing interviews about onboarding friction for a B2B SaaS analytics product.

**Hypothesis:** "New users abandon setup because connecting data sources requires engineering help."

**Core question:** "Walk me through what happened the first time you tried to get your data into [Product]. Start from the very beginning."
- Probe: "Where did you get stuck, if anywhere?"
- Probe: "Who else was involved? Why?"
- Probe: "How does that compare to other tools you've set up?"
