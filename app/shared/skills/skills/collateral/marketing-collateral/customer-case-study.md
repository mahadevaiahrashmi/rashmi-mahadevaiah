# Customer Case Study

## Purpose
Creates a compelling customer success story following the STAR format (Situation, Task, Action, Result) that profiles the customer, describes their challenge, details the solution implementation, and quantifies results. Includes direct customer quotes and concrete lessons learned.

## Auto-Trigger Patterns
- "Write a case study for [customer]"
- "Create a customer success story"
- "I need a customer reference document for [account]"
- "Help me structure a customer case study"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Customer name and profile, their challenge, how they used the product, quantified results, customer quotes
- **Optional:** Implementation timeline, competitive alternatives evaluated, customer's team structure, photos/screenshots
- **Reference files:** product-brief.md, solution-brief.md, customer-insights-report.md

## Process
1. **Interview the customer** — Capture their story in their words. Ask for specific numbers and quotes.
2. **Frame the situation** — Describe who they are, their industry context, and the challenge they faced.
3. **Detail the journey** — Why they chose us, how they implemented, key milestones.
4. **Quantify results** — Hard numbers: time saved, revenue gained, cost reduced, risk mitigated.
5. **Extract quotes** — Get approval on direct quotes that capture emotion and conviction.
6. **Get legal approval** — Confirm customer has approved the final version for publication.

## Output Format
```
# [Customer Name]: [Outcome Headline]

## At a Glance
- **Industry:** [Industry]
- **Company Size:** [employees, revenue, or other relevant measure]
- **Use Case:** [Primary use case]
- **Key Results:** [Top 2-3 metrics]

## The Situation
[Who is this customer? What's their business context?
What was the status quo before our product?]

## The Challenge
[What specific problem were they trying to solve?
What was the business impact of this problem?
What alternatives had they tried?]

## The Solution
[Why did they choose us? How was the product deployed?
Key capabilities they leverage. Implementation highlights.]

## The Results
| Metric | Before | After | Impact |
|--------|--------|-------|--------|
| [Metric] | [X] | [Y] | [% change] |

"[Direct customer quote about results]" — [Name, Title, Company]

## Lessons Learned
[What made this implementation successful?
Advice for other teams considering this approach.]

## About [Customer Name]
[One-paragraph company description]
```

## Quality Standards
- Results are quantified with specific numbers, not vague improvements.
- Customer quotes are authentic and approved—not sanitized into blandness.
- The story follows a clear narrative arc: challenge → decision → implementation → outcome.
- **Anti-patterns:** Vague results ("improved efficiency"), quotes that sound like marketing wrote them, no implementation detail, case study without customer approval.

## Audience
Prospects evaluating the product, sales teams seeking proof points, and marketing teams creating campaigns. Prospects want to see themselves in the story—match industry, size, and use case. Sales wants compelling stats to cite.

## Formatting Guidelines
- 1-2 pages. Scannable with clear sections and callout boxes.
- "At a Glance" box for quick scanning. Pull-quote for the strongest customer statement.
- Include customer logo (with permission) and team photos if available.
- Results section uses a before/after comparison table.

## Example
**Results excerpt:** "Within 90 days of deployment, Acme Corp reduced their mean time to detect security incidents from 72 hours to 4 hours—a 94% improvement. False positive rates dropped from 65% to 12%, freeing the security team to focus on real threats. 'We went from drowning in alerts to actually hunting threats proactively. It fundamentally changed how our team operates.' — Sarah Chen, CISO, Acme Corp"
