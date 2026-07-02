# Write One-Pager

## Purpose
Produce a concise, BLUF-formatted pitch document that gives decision-makers everything they need to say yes, no, or "tell me more" in under five minutes. The one-pager is the fastest path from idea to green light — it forces clarity and prevents premature over-investment in specification.

## Auto-Trigger Patterns
- "write a one-pager"
- "quick pitch for [idea]"
- "I need a brief for [feature]"
- "summarize this idea for leadership"
- "help me pitch [concept]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Idea or opportunity description | Yes | User prompt |
| Strategic context | No | `context/company/overview.md` |
| Target users | Optional | `context/products/*/customers.md` |
| Supporting data | Optional | User prompt or research files |
| Competitive landscape | Optional | `context/products/*/competitors.md` |

## Process
1. **Bottom-line up front** — Write the recommendation first. State what you're proposing and why, in two sentences.
2. **Frame the problem** — One paragraph. What's broken or missing? Who's affected? What's the cost of inaction?
3. **Describe the solution** — One paragraph. What will you build? How does the user experience change?
4. **Explain why now** — Market window, competitive pressure, strategic alignment, customer urgency.
5. **Define success** — 2-3 measurable outcomes with targets.
6. **Estimate effort** — T-shirt size, rough timeline, key resources needed.
7. **Flag risks** — Top 2-3 risks with severity. Keep it honest.
8. **Quality-check** — Can someone make a decision from this alone? Is every sentence earning its place?

## Output Format
```
## One-Pager: [Idea Name]
**Author:** [Name] | **Date:** [Date] | **Ask:** [Decision needed]

### Bottom Line
[2-sentence recommendation. What and why.]

### Problem
[One paragraph. Evidence-backed.]

### Proposed Solution
[One paragraph. User-experience focused.]

### Why Now
[3-4 bullet points]

### Success Metrics
| Metric | Target | Timeline |
|--------|--------|----------|

### Estimated Effort
**Size:** [T-shirt] | **Timeline:** [Rough] | **Team:** [Who's needed]

### Key Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
```

## Quality Standards
- Total length fits on one page when printed.
- BLUF: a reader who stops after the first section still gets the point.
- Problem is evidence-backed, not opinion.
- Effort estimate is honest, including unknowns.
- The "ask" is explicit: what decision do you need?

**Anti-patterns:** Burying the recommendation, excessive detail, no clear ask, using the one-pager as a mini-PRD, vague effort estimates ("it depends").

## Framework References
- **BLUF (Bottom Line Up Front)** — Military communication style: lead with the conclusion.
- **Opportunity Solution Trees** — Connect the proposed solution back to a desired outcome and opportunity.

## Formatting Guidelines
- Hard limit: one page when rendered.
- Use tables for metrics and risks.
- Bold the ask and recommendation.
- Use short paragraphs and bullet points for scannability.

## Example
**Bottom Line:** "We should add SSO support for enterprise accounts. It's the #1 blocker in 6 of our last 8 lost enterprise deals ($1.2M combined ARR), and competitors all support it."

**Ask:** "Approve 1 engineer for 4 weeks to ship SAML-based SSO in Q2."
