# Escalation Document

## Purpose
Structure an escalation for senior leadership — providing clear context, quantified impact, what's been tried, options with trade-offs, and recommended action. Ensures escalations are professional, data-driven, and actionable rather than emotional or vague.

## Auto-Trigger Patterns
- "escalate [issue] to leadership"
- "write an escalation for [problem]"
- "executive escalation for [situation]"
- "need leadership help with [issue]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Issue description | Yes | User prompt |
| Impact data | Yes | User prompt |
| What's been tried | Recommended | User prompt |
| Stakeholder context | Recommended | `context/people/` |

## Process
1. **Validate escalation is warranted** — Has direct resolution been attempted?
2. **Frame the situation** — Concise context: what, when, who. Summary not saga.
3. **Quantify impact** — Revenue, users, timeline, contractual obligations, reputation. Numbers not adjectives.
4. **Document attempted resolutions** — What was tried, by whom, why it didn't work.
5. **Present options** — 2-3 options with trade-offs including "do nothing."
6. **Make recommendation** — Clear recommendation with reasoning.
7. **Define the ask** — What specifically do you need from the recipient?
8. **Set timeline** — When must this be resolved? Consequences at each deadline.

## Output Format
```
## Escalation: [Issue Title]
**Urgency:** Critical / High / Medium  |  **Date:** [date]

### Situation Summary
[3-4 sentences: what, when, who, why it matters]

### Impact
| Dimension | Impact |
|-----------|--------|
| Revenue | [$X at risk] |
| Users affected | [Number] |
| Timeline | [Delay] |

### What's Been Tried
1. [Action] — [Result]

### Options
| Option | Description | Risk | Needs |
|--------|-------------|------|-------|
| A | [Description] | [Risk] | [Required] |
| B | [Description] | [Risk] | [Required] |

### Recommendation
**Option [X]** — [Reasoning]

### The Ask
[Specific action needed from recipient]
```

## Quality Standards
- Impact quantified in business terms, not emotional language.
- "What's been tried" demonstrates diligence.
- Options are real, not straw man setup.
- The ask is specific — "I need you to [action]."

**Anti-patterns:** Emotional tone, blaming, vague impact, no options, missing timeline, not showing prior attempts.

## Framework References
- **BLUF** — Bottom Line Up Front structure.
- **Pyramid Principle** — Conclusion first, evidence follows.

## Formatting Guidelines
- Urgency label at top.
- Impact table (scannable quantified impact).
- Document readable in under 2 minutes.

## Example
**Summary:** "Platform API migration deadline is 3 weeks out but Platform team deprioritized our integration. Impact: $850K Q2 revenue at risk from 4 enterprise contracts. We need VP Eng to arbitrate priority. Decision needed by Friday."
