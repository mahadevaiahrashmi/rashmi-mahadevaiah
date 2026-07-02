# Lean Canvas

## Purpose
Complete a Lean Canvas for early-stage product ideas or new ventures. Covers: Problem, Customer Segments, Unique Value Proposition, Solution, Channels, Revenue Streams, Cost Structure, Key Metrics, and Unfair Advantage. Designed for rapid hypothesis documentation and validation planning.

## Auto-Trigger Patterns
- "Create a Lean Canvas" / "lean canvas for [idea]"
- "Map my startup idea" / "one-page business plan"
- "Lean Canvas for [new feature/product]"
- "Help me think through this idea systematically"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product idea or concept, target customer description, core problem being solved
- **Optional:** Competitive landscape, early traction data, team capabilities
- **Reference:** Ash Maurya's Running Lean, Lean Startup methodology

## Process
1. **Start with Problem** — List 1-3 top problems your target customers have. Validate: Are these real problems or assumed problems? What existing alternatives do customers use today?
2. **Define Customer Segments** — Who has these problems most acutely? Identify early adopters specifically — they're your beachhead.
3. **Craft Unique Value Proposition** — One clear sentence: why you're different AND why it matters. Not a tagline — a clear differentiation statement.
4. **Describe Solution** — Top 3 features that address the top 3 problems. Keep it minimal — this is an MVP, not a roadmap.
5. **Identify Channels** — How do you reach early adopters? Focus on channels where they already gather.
6. **Define Revenue Streams** — How will you make money? Even if you're not charging yet, define the model. Include pricing anchors.
7. **Estimate Cost Structure** — What does it cost to operate? Fixed costs, variable costs, burn rate. Be honest about runway.
8. **Choose Key Metrics** — What 3-5 metrics tell you if this is working? Pirate Metrics (AARRR) is a good starting framework.
9. **Name Unfair Advantage** — What can't be easily copied or bought? If you don't have one yet, that's okay — but acknowledge it and plan to build one.
10. **Identify riskiest assumption** — Which hypothesis, if wrong, kills the idea? This is what you validate first.

## Output Format
```
## Lean Canvas: [Product/Idea Name]
**Date:** [Date] | **Iteration:** [#] | **Stage:** [Idea/Validation/MVP]

### Problem (Top 3)
1. [Problem 1 — specific and validated]
2. [Problem 2]
3. [Problem 3]
**Existing Alternatives:** [How customers solve this today]

### Customer Segments
**Target:** [Primary segment description]
**Early Adopters:** [Who will use this first and why]

### Unique Value Proposition
[Single sentence: why different + why it matters]
**High-Level Concept:** [X for Y analogy — e.g., "Uber for dog walking"]

### Solution (Top 3 Features)
1. [Feature mapping to Problem 1]
2. [Feature mapping to Problem 2]
3. [Feature mapping to Problem 3]

### Channels
- [Channel 1 — how you reach early adopters]
- [Channel 2]

### Revenue Streams
- [Revenue model and pricing]
**Pricing anchor:** [What customers pay for alternatives today]

### Cost Structure
- **Fixed:** [Major fixed costs]
- **Variable:** [Major variable costs]
- **Monthly burn:** $[X]

### Key Metrics
| Metric | What It Measures | Target |
|--------|-----------------|--------|
| [Metric 1] | [What] | [Target] |
| [Metric 2] | [What] | [Target] |

### Unfair Advantage
[What can't be easily copied — or "TBD" with plan to develop]

### Riskiest Assumption
[The one hypothesis that must be true — and how you'll test it]
```

## Quality Standards
- Problems are stated from the customer's perspective, not the solution's. "Customers can't do X" not "There's no tool for X."
- Existing alternatives are named — if there are none, the problem might not be real.
- UVP is a single sentence that a customer would understand and care about.
- Unfair advantage is honest — most early-stage ideas don't have one yet. Don't fabricate it.
- Riskiest assumption is identified and has a validation plan.
- **Anti-patterns:** Starting with the solution instead of the problem, generic UVP ("best in class"), no existing alternatives (usually means the problem isn't real enough), listing 10 features instead of 3, no unfair advantage acknowledgment.

## Framework References
- Lean Canvas (Ash Maurya) — Running Lean
- Lean Startup (Eric Ries) — build-measure-learn
- AARRR Pirate Metrics — acquisition, activation, retention, referral, revenue

## Formatting Guidelines
- Follow the canvas block structure — each section is distinct.
- Keep each section to 2-5 bullets. The whole canvas fits on one page.
- Include the "riskiest assumption" — it drives what you validate first.
- Mark iteration number — canvases evolve as you learn.

## Example
> **Problem:** Mid-market SaaS companies spend 20+ engineering hours per onboarding flow change. Growth teams are blocked on engineering for every experiment. 60% of users drop off before reaching the "aha moment."
>
> **UVP:** Ship onboarding experiments in hours, not sprints — no engineering required.
>
> **Unfair Advantage:** TBD — building toward data network effects as we accumulate onboarding performance data across customers. Plan to develop proprietary benchmarks.
>
> **Riskiest Assumption:** Growth teams will adopt a no-code tool for onboarding (historically they've relied on custom engineering). Test: Can we get 5 of 10 design partners to ship an experiment without engineering help within 30 days?
