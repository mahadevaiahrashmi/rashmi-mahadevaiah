# Annual Planning

## Purpose
Build a year-level product plan that translates company strategy into concrete themes, bets, resource asks, and milestones — giving leadership confidence in the roadmap while preserving flexibility for learning. Annual planning is where strategy meets execution at the highest level.

## Auto-Trigger Patterns
- "help with annual planning"
- "build next year's product plan"
- "annual plan for [year]"
- "strategic planning for [product]"
- "year-level roadmap"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Company strategy and goals | No | `context/company/overview.md` |
| Prior year retrospective data | Yes | User prompt |
| Market landscape | Optional | `context/products/` |
| Team capacity and capabilities | Optional | `context/team/team.md` |
| Customer feedback themes | Optional | `artifacts/research/` |
| Competitive landscape | Optional | `context/products/*/competitors.md` |

## Process
1. **Retrospective** — Review past year: what shipped, what worked, what didn't, what changed.
2. **Market context** — Key trends, competitive moves, regulatory changes, technology shifts.
3. **Identify strategic themes** — 3-5 themes that organize the year's work. Each tied to a strategic goal.
4. **Define big bets** — For each theme, the 1-2 major investments. Include expected outcomes.
5. **Resource planning** — What team, budget, and infrastructure do you need? What's the delta?
6. **Set key milestones** — Quarterly checkpoints with clear deliverables and success criteria.
7. **Identify capability investments** — Platform, tooling, or process improvements needed.
8. **Risk assessment** — Strategic risks, dependencies on other orgs, market assumptions.
9. **Quality-check** — Plan is achievable, themes connect to strategy, milestones are realistic.

## Output Format
```
## Annual Plan: [Product] — [Year]
**Author:** [Name] | **Status:** Draft | **Date:** [Date]

### Year in Review ([Previous Year])
| Theme | Goal | Result | Learning |
|-------|------|--------|----------|

### Market Context
[Key trends, competitive shifts — prose, 2-3 paragraphs]

### Strategic Themes for [Year]
| # | Theme | Strategic Goal | Expected Outcome |
|---|-------|---------------|------------------|

### Big Bets
#### Bet 1: [Name]
**Theme:** [Which theme] | **Investment:** [Team size × quarters]
**Hypothesis:** [What we believe and why]
**Expected outcome:** [Measurable result]
**Key risks:** [Top 2-3]

### Resource Plan
| Resource | Current | Needed | Gap | Ask |
|----------|---------|--------|-----|-----|

### Quarterly Milestones
| Quarter | Theme | Milestone | Success Criteria |
|---------|-------|-----------|-----------------|

### Capability Investments
| Investment | Purpose | Timing | Impact |
|-----------|---------|--------|--------|

### Strategic Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
```

## Quality Standards
- Themes connected to strategy — not a wish list.
- Big bets have hypotheses, not just descriptions.
- Resource asks are specific and justified.
- Plan accounts for maintenance, support, and tech debt.
- Milestones are checkpoints for learning, not just delivery dates.

**Anti-patterns:** Feature list disguised as strategy, no retrospective, ignoring capacity, all bets and no maintenance.

## Framework References
- **Three Horizons** — Balance across sustain, grow, and transform.
- **Strategic Options** — Frame bets as options with asymmetric upside.

## Formatting Guidelines
- Tables for milestones, resources, and risks.
- Prose for market context and retrospective.
- Bold strategic themes for visual hierarchy.
- Include a one-page summary view for exec presentations.

## Example
**Theme:** "Self-Serve Enterprise" — Enable enterprise customers to onboard without professional services, reducing CAC by 40%.

**Big Bet:** "Guided onboarding engine — interactive setup wizard replacing 3-week PS engagement. 4 engineers × 2 quarters. Expected: 60% of new enterprise accounts self-serve by Q3."
