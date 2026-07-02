# Roadmap Planning

## Purpose
Build or update a product roadmap that communicates what the team plans to deliver and why — using a Now/Next/Later or quarterly framework that balances commitment with flexibility. A roadmap is a strategic communication tool, not a project plan.

## Auto-Trigger Patterns
- "build a roadmap for [product]"
- "update the roadmap"
- "roadmap for [quarter/half/year]"
- "what should we build next"
- "help me plan the roadmap"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Strategic priorities | No | `context/company/overview.md` |
| Backlog / candidate features | Yes | User prompt |
| Team capacity | Optional | `context/me/working-agreements.md` |
| Customer feedback | Optional | `artifacts/research/` |
| Dependencies | Optional | User prompt |
| Current roadmap (if updating) | Optional | User prompt |

## Process
1. **Anchor in strategy** — Review strategic goals. The roadmap is strategy made visible.
2. **Gather candidates** — Collect all potential work: features, improvements, tech debt, experiments.
3. **Prioritize** — Apply appropriate framework (RICE, value-effort, WSJF). Rank items.
4. **Sequence** — Arrange by dependencies, learning order, and capacity.
5. **Assign to horizons** — Now (committed), Next (planned), Later (exploring).
6. **Identify flexibility points** — Where can the plan flex?
7. **Add confidence levels** — How certain are you about each item?
8. **Quality-check** — Roadmap connects to strategy, is achievable, and has explicit flexibility.

## Output Format
```
## Product Roadmap: [Product Name]
**Period:** [Timeframe] | **Last Updated:** [Date]

### Strategic Context
[2-3 sentences linking roadmap to strategy]

### Now (Current Quarter — Committed)
| Initiative | Goal | Status | Owner | Confidence |
|-----------|------|--------|-------|-----------|

### Next (Following Quarter — Planned)
| Initiative | Goal | Dependency | Owner | Confidence |
|-----------|------|-----------|-------|-----------|

### Later (Future — Exploring)
| Initiative | Goal | Open Questions | Confidence |
|-----------|------|---------------|-----------|

### Sequencing Rationale
[Why this order. Dependencies. Learning gates.]

### Dependencies
| Initiative | Depends On | Team | Risk |
|-----------|-----------|------|------|

### Not Doing (Conscious Decisions)
| Item | Reason | Revisit When |
|------|--------|-------------|
```

## Quality Standards
- Now items are genuinely committed and resourced.
- Confidence decreases from Now → Next → Later.
- "Not Doing" section makes trade-offs visible.
- Every initiative connects to a strategic goal.

**Anti-patterns:** Roadmap as Gantt chart, all items equal confidence, no strategic connection, missing "Not Doing" section.

## Framework References
- **Now/Next/Later** — Time-horizon framework managing expectations.
- **North Star Framework** — Ensure roadmap items drive the north star.
- **Opportunity Solution Trees** — Connect roadmap to opportunities and outcomes.

## Formatting Guidelines
- Tables within each horizon.
- Include confidence levels (High/Medium/Low).
- Bold items new since last update.
- Keep the full roadmap to one viewable page.

## Example
**Now:** "Smart Alerts v1 — auto-detecting anomalies. Owner: Platform team. Confidence: High."

**Not Doing:** "Mobile app — 95% desktop usage. Revisit if mobile >15%."
