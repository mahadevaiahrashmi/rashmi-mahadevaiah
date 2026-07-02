# Define Success Metrics

## Purpose
Build a comprehensive metrics framework — north star, input, output, and guardrail metrics — that gives the team a shared definition of success, enables data-driven decisions during execution, and prevents optimizing one thing at the expense of another. Good metrics are the PM's most powerful alignment tool.

## Auto-Trigger Patterns
- "define success metrics for [feature]"
- "what should we measure"
- "help me set KPIs"
- "create a metrics framework"
- "how do we know if [initiative] is working"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Initiative or feature description | Yes | User prompt |
| Business goals | No | `context/company/overview.md` |
| Customer outcomes | Yes | User prompt or PRD |
| Current baselines | Optional | User prompt |
| Data infrastructure | Optional | `context/products/*/tech-context.md` |

## Process
1. **Identify the north star metric** — The single metric that captures the core value delivered. Must be: measurable, tied to value exchange, influenceable by the team.
2. **Define input metrics (leading)** — Actions and behaviors that drive the north star. These are controllable and move first.
3. **Define output metrics (lagging)** — Business results that follow. Revenue, retention, NPS — things the team influences indirectly.
4. **Set guardrail metrics** — What should NOT get worse. Performance, other product areas, customer segments not targeted.
5. **Set targets with rationale** — Each metric needs: current baseline, target, timeframe, and why that target is appropriate.
6. **Plan measurement** — Data source, instrumentation needed, dashboard location, review cadence.
7. **Identify counter-metrics** — For each primary metric, what could go wrong if you over-optimize it?
8. **Quality-check** — Metrics are SMART, the set is balanced (not all lagging), guardrails prevent gaming.

## Output Format
```
## Metrics Framework: [Initiative Name]

### North Star Metric
**Metric:** [Name]
**Definition:** [Precise definition]
**Current Baseline:** [Value] | **Target:** [Value] | **By:** [Date]
**Rationale:** [Why this metric captures value delivered]

### Input Metrics (Leading Indicators)
| Metric | Definition | Baseline | Target | Data Source |
|--------|-----------|----------|--------|-------------|

### Output Metrics (Lagging Indicators)
| Metric | Definition | Baseline | Target | Data Source |
|--------|-----------|----------|--------|-------------|

### Guardrail Metrics (Must Not Degrade)
| Metric | Current Value | Threshold | Alert If |
|--------|--------------|-----------|----------|

### Measurement Plan
| Metric | Instrumentation Needed | Owner | Dashboard |
|--------|----------------------|-------|-----------|

### Review Cadence
[When and how metrics will be reviewed]
```

## Quality Standards
- North star metric directly reflects user value, not vanity.
- Input metrics are controllable by the team — they can take action to move them.
- Every target has a rationale (not arbitrary round numbers).
- Guardrails prevent tunnel vision and gaming.
- Measurement plan is feasible with current data infrastructure.

**Anti-patterns:** Vanity metrics (page views without context), too many metrics (>8 total), all lagging indicators, no guardrails, targets without baselines.

## Framework References
- **North Star Framework** — Single metric that captures delivered value.
- **HEART Framework** — Happiness, Engagement, Adoption, Retention, Task Success for UX metrics.
- **Pirate Metrics (AARRR)** — Acquisition, Activation, Retention, Revenue, Referral for growth.

## Formatting Guidelines
- Put the north star metric in its own prominent section.
- Use tables for all metric listings.
- Include a measurement plan — metrics without instrumentation are wishes.
- Bold threshold values in guardrail metrics.

## Example
**North Star:** "Weekly Active Integrations — the number of unique integrations that successfully synced data in the past 7 days. Baseline: 1,200. Target: 2,500 by Q3-end."

**Guardrail:** "API error rate must remain below 0.5%. If integration growth comes at the cost of reliability, we're destroying value."
