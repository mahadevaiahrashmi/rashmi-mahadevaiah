# Magic Quadrant / Wave Response

## Purpose
Helps product teams prepare responses to analyst evaluation questionnaires (Gartner Magic Quadrant, Forrester Wave, etc.) by structuring how to present capabilities, organize evidence, select customer references, and craft the positioning narrative. Maximizes evaluation scores through thorough, evidence-based responses.

## Auto-Trigger Patterns
- "Help me prepare a Magic Quadrant response"
- "Build a Forrester Wave questionnaire response"
- "I need to prepare for an analyst evaluation"
- "Help me structure our MQ/Wave submission"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Questionnaire or evaluation criteria, product capabilities, customer references available, competitive positioning
- **Optional:** Prior evaluation results, analyst feedback, customer metrics, market share data, roadmap
- **Reference files:** product-brief.md, competitive-landscape-report.md, analyst-briefing-deck.md, customer-case-study.md

## Process
1. **Analyze the criteria** — Map every evaluation criterion to your capabilities. Identify strengths and gaps.
2. **Build the capability matrix** — For each criterion: what we do, how we do it, evidence, and customer reference.
3. **Select customer references** — Match references to evaluation criteria. Diverse segments and use cases.
4. **Craft the narrative** — Positioning story that frames your strengths within the analyst's framework.
5. **Address gaps honestly** — For weak areas: acknowledge, show the plan, and provide mitigations.
6. **Prepare for the demo** — If an eval demo is required, design it to highlight differentiators.

## Output Format
```
# [Evaluation Name] Response Preparation

## Evaluation Overview
- **Analyst firm:** [Gartner/Forrester/IDC]
- **Report type:** [MQ/Wave/MarketScape]
- **Category:** [Market category name]
- **Timeline:** [Key dates: questionnaire due, demo, publication]

## Capability Mapping
| Criterion | Weight | Our Capability | Strength (1-5) | Evidence | Reference |
|-----------|--------|---------------|----------------|----------|-----------|

## Positioning Narrative
[How we want the analyst to perceive our position.
Key themes. Differentiation story. Vision alignment.]

## Strengths to Emphasize
1. **[Strength 1]:** [How to present it. Evidence to provide.]
2. **[Strength 2]:** [Same structure]
3. **[Strength 3]:** [Same structure]

## Gaps to Address
1. **[Gap 1]:** [Current state. Roadmap plan. Mitigation.]
2. **[Gap 2]:** [Same structure]

## Customer Reference Strategy
| Reference | Criteria Covered | Industry | Size | Key Metric |
|-----------|-----------------|----------|------|------------|

## Demo Strategy (if applicable)
[Scenario design. Key differentiators to showcase.
Flow. Backup plan. Q&A preparation.]

## Response Best Practices
- Answer every question—no blanks. If you don't have it, explain the plan.
- Use customer evidence wherever possible, not just capability claims.
- Reference named, contactable customers for critical criteria.
- Match the analyst's language and framework, not your marketing language.
- Be honest about gaps—analysts respect transparency and penalize spin.
```

## Quality Standards
- Every criterion has a response with evidence, not just a capability claim.
- Customer references strategically cover the most important evaluation criteria.
- Gaps are addressed with concrete plans and timelines, not dismissed.
- **Anti-patterns:** Leaving questions blank, overclaiming capabilities, poor reference matching, using marketing jargon instead of analyst framework language.

## Audience
Internal product, marketing, and analyst relations teams preparing the submission. The end audience is the analyst evaluator who is deeply expert, skeptical of unsubstantiated claims, and evaluating 15-20 vendors simultaneously.

## Formatting Guidelines
- Structured around the specific evaluation criteria.
- Include a "Response Checklist" to ensure completeness.
- Track customer reference availability and preparation status.
- Maintain a timeline with internal deadlines for each component.

## Example
**Capability Mapping excerpt:** "Criterion: 'Advanced Analytics and Reporting' (Weight: High). Our Capability: Real-time analytics dashboard with 25+ built-in report templates, custom report builder, scheduled reports, and API for external BI tools. Strength: 4/5. Evidence: 340 customers actively using analytics; average 12 reports/user/week. Customer Reference: Acme Corp (Enterprise, Financial Services)—'Reduced reporting time from 4 hours to 15 minutes.'"
