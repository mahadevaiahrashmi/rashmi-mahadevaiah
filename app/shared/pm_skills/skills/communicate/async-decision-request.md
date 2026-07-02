# Async Decision Request

## Purpose
Create an async document that gets a clean decision without requiring a meeting. Presents context, options with trade-offs, a clear recommendation, and specifies exactly who decides, what they're deciding, and by when. Designed to respect everyone's time while ensuring decisions don't stall.

## Auto-Trigger Patterns
- "Write a decision request" / "async decision doc"
- "I need [person] to decide on [topic]"
- "How do I get a decision on this without a meeting?"
- "Create a DACI for [decision]"
- "Decision document for [topic]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Decision to be made, options considered, recommendation, decider, deadline
- **Optional:** Constraints, prior discussions, stakeholders to consult, reversibility assessment
- **Reference:** `context/people/` for decider's preferences, DACI framework for role clarity

## Process
1. **Name the decision** — Frame it as a clear question. "Should we X or Y?" not "Thoughts on X."
2. **Set the DACI** — Driver (you), Approver (the decider), Contributors (who was consulted), Informed (who needs to know the outcome).
3. **Provide context** — Just enough background for the decider to orient. Link to deeper docs if needed.
4. **Present options** — 2-4 options, each with: description, pros, cons, trade-offs, effort, risk level. Include "do nothing" if it's a viable option.
5. **State your recommendation** — Be clear and direct. "I recommend Option B because..." The decider should know where you stand.
6. **Define what you need** — Exactly what the decider needs to do: approve, choose between options, or modify. Make it a simple action.
7. **Set the deadline** — When the decision is needed and why. Include "if no response by X, we'll proceed with the recommendation."
8. **Specify reversibility** — Can this be undone? This affects how much deliberation is warranted.

## Output Format
```
## Decision Request: [Clear question being decided]
**Deadline:** [Date] | **Reversibility:** High/Medium/Low
**Default if no response:** [What happens if deadline passes]

### DACI
| Role | Person |
|------|--------|
| Driver | [You] |
| Approver | [Decider] |
| Contributors | [Who was consulted] |
| Informed | [Who needs to know] |

### Context
[2-3 sentences — just enough to orient. Link to details.]

### Options
#### Option A: [Name]
- **Description:** [What this option entails]
- **Pros:** [Benefits]
- **Cons:** [Drawbacks]
- **Effort:** [T-shirt size or estimate]
- **Risk:** [Key risk]

#### Option B: [Name]
[Same structure]

### Recommendation
**I recommend Option [X]** because [clear rationale connecting to strategic priorities and trade-off preferences].

### What I Need From You
[Specific action: "Approve Option B" or "Choose between A and B" — by deadline]
```

## Quality Standards
- The decision question is stated as an actual question — not a topic or theme.
- Options are genuinely different approaches, not strawmen designed to make one look good.
- Trade-offs are honest — every option has real cons.
- Recommendation is explicit and reasoned. The decider can see your logic and disagree if warranted.
- Deadline includes consequence: "If no response by X, we proceed with Y."
- **Anti-patterns:** Options without trade-offs (making it obvious), no recommendation (abdicating), no deadline (decisions drift), framing as "FYI" when you actually need a decision, too many options (more than 4 causes paralysis).

## Framework References
- DACI (Driver, Approver, Contributor, Informed) — decision-making roles
- Disagree and Commit — explicit mechanism for moving forward
- Two-way vs One-way Door — reversibility assessment (Bezos)

## Formatting Guidelines
- Options in parallel structure — same headings for each option for easy comparison.
- Bold the recommendation. Bold the deadline.
- Keep under 1 page. Link to appendix for deep analysis.
- Use a table for DACI roles.

## Example
> **Decision Request:** Should we launch the API with usage-based or flat-rate pricing?
> **Deadline:** Friday May 30 | **Reversibility:** Medium (can adjust after Q1 data)
>
> **Option A: Usage-based ($0.002/call, 10K free)** — Aligns with PLG, lower barrier, but revenue is less predictable.
> **Option B: Flat-rate ($99/mo, 50K calls)** — Predictable revenue, simpler billing, but higher barrier for small developers.
>
> **Recommendation:** Option A — our growth model depends on developer adoption, and usage-based pricing removes the biggest friction point. We can add flat-rate tiers in Q2 once we have usage data.
