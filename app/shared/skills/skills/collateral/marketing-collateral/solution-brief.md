# Solution Brief

## Purpose
Creates a 2-4 page problem-to-solution narrative for a specific use case, covering customer challenge, our approach, key capabilities, measurable outcomes, customer evidence, and clear next steps. Bridges the gap between a one-page datasheet and a full whitepaper.

## Auto-Trigger Patterns
- "Write a solution brief for [use case]"
- "Create a use case document for [scenario]"
- "I need a solution overview for [industry/problem]"
- "Help me write a use-case-specific brief"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Use case or problem statement, target persona, relevant product capabilities, customer outcomes
- **Optional:** Industry-specific context, customer quotes, competitive differentiation, ROI data
- **Reference files:** product-brief.md, product-datasheet.md, customer-case-study.md

## Process
1. **Define the use case** — Specific problem, specific persona, specific context.
2. **Build empathy** — Describe the challenge in the customer's language. Quantify the cost.
3. **Present the approach** — How our product addresses this specific use case (not all capabilities).
4. **Show outcomes** — Measurable results from real or projected deployments.
5. **Provide evidence** — Customer quote, case study reference, or analyst validation.
6. **Offer next step** — Clear, low-friction CTA appropriate to the buying stage.

## Output Format
```
# [Use Case Name]: [Outcome-Oriented Subtitle]

## The Challenge (0.5 page)
[Problem narrative in customer's words. Industry context.
Quantified cost of the status quo. Why existing solutions fall short.]

## Our Approach (1 page)
[How the product addresses this use case. Key capabilities deployed.
Workflow or architecture for this specific scenario.
What makes our approach different.]

### Key Capabilities
- **[Capability 1]:** [How it helps in this use case]
- **[Capability 2]:** [How it helps in this use case]
- **[Capability 3]:** [How it helps in this use case]

## Outcomes (0.5 page)
| Metric | Before | After |
|--------|--------|-------|
| [Metric 1] | [X] | [Y] |
| [Metric 2] | [X] | [Y] |

## Customer Evidence (0.5 page)
[Case study summary or customer quote. Company profile.
Specific results achieved.]

## Next Steps (0.25 page)
[CTA: demo, pilot, assessment, or consultation offer]
```

## Quality Standards
- The use case is specific enough that the reader recognizes themselves immediately.
- Capabilities shown are only those relevant to this use case—no kitchen sink.
- Outcomes are quantified with before/after comparison.
- **Anti-patterns:** Generic product pitch, capabilities without use case context, outcomes without evidence, addressing too many use cases.

## Audience
Evaluators and champions in a specific role or industry who have a defined problem and are exploring solutions. They want to know: "Does this solve MY problem?" Make it easy for them to say yes and share internally.

## Formatting Guidelines
- 2-4 pages. Narrative flow with supporting visuals.
- Use the customer's industry language, not product jargon.
- Include a "who this is for" qualifier early to confirm relevance.
- Callout box for the key customer quote or outcome stat.

## Example
**Challenge excerpt:** "Security operations teams in mid-market enterprises (500-5,000 employees) face an average of 4,200 alerts per week but only have capacity to investigate 15%. The remaining 85% represent unknown risk—any one could be a critical breach in progress. Current SIEM tools generate alerts but don't prioritize or investigate, leaving teams playing a dangerous game of triage roulette."
