# Capacity Planning

## Purpose
Analyze engineering capacity — accounting for committed work, maintenance, support overhead, and buffers — to produce a realistic capacity allocation that prevents over-commitment and ensures sustainable delivery. Capacity planning is the reality check that prevents roadmap fiction.

## Auto-Trigger Patterns
- "help with capacity planning"
- "how much capacity do we have"
- "can we take on [project]"
- "engineering capacity for [quarter]"
- "are we over-committed"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Team roster and availability | Yes | User prompt or `context/team/team.md` |
| Planned PTO and holidays | Yes | User prompt |
| Current commitments | Yes | User prompt |
| Working agreements | Optional | `context/me/working-agreements.md` |
| Historical velocity data | Optional | User prompt |
| Support/on-call rotation | Optional | User prompt |

## Process
1. **Calculate gross capacity** — Total person-days in the period. Team size × working days.
2. **Subtract fixed overhead** — PTO, holidays, company events, training.
3. **Subtract recurring overhead** — Meetings, standups, sprint ceremonies, 1:1s.
4. **Subtract support/maintenance** — On-call, bug fixes, customer escalations, tech debt.
5. **Calculate net capacity** — What's actually available for new feature work.
6. **Map committed work** — List everything already committed. Calculate utilization.
7. **Reserve buffer** — 15-20% for unplanned work, estimation error, and interrupts.
8. **Assess available capacity** — What's left for new commitments?
9. **Quality-check** — Utilization is sustainable (<80% for new work), buffer exists, support costs are realistic.

## Output Format
```
## Capacity Plan: [Team] — [Period]

### Team Roster
| Member | Role | Available Days | PTO | Net Days |
|--------|------|---------------|-----|----------|

### Capacity Waterfall
| Category | Days | % of Total |
|----------|------|-----------|
| Gross capacity | ... | 100% |
| − PTO & holidays | ... | ... |
| − Meetings & ceremonies | ... | ... |
| − Support & maintenance | ... | ... |
| − Buffer (20%) | ... | ... |
| **= Available for new work** | **...** | **...%** |

### Current Commitments
| Commitment | Effort | Owner | Status |
|-----------|--------|-------|--------|

### Utilization Summary
| Category | Days | % |
|----------|------|---|
| Committed work | ... | ... |
| Available capacity | ... | ... |
| Over/under-committed | ... | ... |

### Risk Assessment
| Risk | Impact | Likelihood |
|------|--------|-----------|
| Over-commitment | ... | ... |
| Key-person dependency | ... | ... |

### Recommendation
[Can the team take on more? How much? What needs to give?]
```

## Quality Standards
- Capacity calculation uses real data, not assumptions about utilization.
- Support and maintenance overhead is based on historical actuals, not wishful thinking.
- Buffer is explicitly reserved, not absorbed into estimates.
- Key-person risks are identified where one person is critical to multiple commitments.

**Anti-patterns:** 100% utilization plans, ignoring meetings/ceremonies, no buffer, assuming zero support load, counting vacation days as available.

## Framework References
- **Sustainable Pace** — Teams perform best at 70-80% utilization of theoretical capacity.
- **Yesterday's Weather** — Use last period's actual throughput as the best predictor.

## Formatting Guidelines
- Use a waterfall table showing how gross capacity becomes net capacity.
- Bold the final available capacity number.
- Include a utilization percentage for quick assessment.
- Visualize over/under-commitment clearly.

## Example
**Waterfall:** "Gross: 200 person-days → PTO: -15 → Meetings: -20 → Support: -30 → Buffer: -27 → Available: 108 person-days (54% of gross)."

**Assessment:** "Currently committed to 95 days of work against 108 available. The team has 13 days (~1.5 developer-weeks) of uncommitted capacity. Taking on the API migration (estimated 20 days) would put us 7 days over capacity."
