# Team Health Check

## Purpose
Assess the overall health of a product team across dimensions that matter: velocity, morale, collaboration quality, communication effectiveness, and blockers. Produce an honest diagnostic with specific indicators, not vague feelings, and generate actionable improvement items that the PM can drive.

## Auto-Trigger Patterns
- "How is my team doing"
- "Team health check"
- "Team morale assessment"
- "Is my team healthy"
- "Diagnose team dynamics"
- "Sprint retrospective prep"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Team description** (required) — who is on the team, roles, size
- **Velocity/delivery data** (optional) — sprint completion rates, cycle time, throughput trends
- **Observations** (required) — PM's notes on team dynamics, morale signals, collaboration patterns
- **Retro notes** (optional) — recent retrospective themes and action items
- **Organizational context** (optional) — recent changes, pressures, deadlines

## Process
1. **Assess delivery health** — velocity trends, predictability, scope management, quality signals (bugs, rework)
2. **Assess morale signals** — enthusiasm in standups, voluntary participation, attrition risk, overtime patterns, complaints vs suggestions ratio
3. **Assess collaboration quality** — cross-functional friction, handoff smoothness, knowledge sharing, pair programming, code review quality
4. **Assess communication effectiveness** — meeting efficiency, decision speed, information flow, alignment quality
5. **Identify blockers** — systemic impediments, dependency bottlenecks, process friction, tooling gaps
6. **Score each dimension** with evidence-based indicators
7. **Generate team health survey questions** if PM wants to validate with the team
8. **Produce prioritized action plan**

## Output Format
```markdown
# Team Health Check — [Team Name] — [Date]

## Health Dashboard
| Dimension | Score | Trend | Key Signal |
|-----------|-------|-------|-----------|
| Delivery Velocity | 🟡 | → | Completing 70% of sprint commitments |
| Predictability | 🟢 | ↑ | Estimates within 20% for 3 sprints |
| Team Morale | 🟡 | ↓ | Reduced participation in optional ceremonies |
| Collaboration | 🟢 | → | Strong cross-functional pairing |
| Communication | 🔴 | ↓ | Decisions revisited frequently |
| Blockers | 🟡 | → | 2 systemic impediments identified |

## Detailed Assessment

### Delivery Health
- **What's working**: …
- **Concerns**: …
- **Evidence**: …

### Morale & Engagement
- **Positive signals**: …
- **Warning signs**: …
- **Root cause hypothesis**: …

### Collaboration & Communication
- **Strengths**: …
- **Friction points**: …

### Systemic Blockers
1. [Blocker] — impact, owner, proposed resolution

## Observation Checklist
- [ ] Team members proactively share progress
- [ ] Disagreements are constructive
- [ ] People volunteer for stretch tasks
- [ ] Meetings end with clear actions
- [ ] Feedback flows in all directions

## Recommended Survey Questions
1. "I feel empowered to make decisions in my area" (1-5)
2. "I understand how my work connects to product goals" (1-5)
3. …

## Action Plan (prioritized)
| Priority | Action | Owner | Timeline | Expected Impact |
|----------|--------|-------|----------|----------------|

## Follow-Up
- Re-assess in [timeframe]
- Track leading indicators: …
```

## Quality Standards
- Assessment uses observable signals, not subjective feelings
- Trend arrows show direction of change, not just current state
- Root cause analysis goes beyond symptoms to systemic issues
- Action plan has clear owners and timelines
- **Anti-patterns**: Ignoring delivery data and relying only on vibes; treating team health as solely PM's responsibility; survey fatigue without action

## Framework References
- Spotify Squad Health Check model (adapted)
- Agile team maturity assessment
- Psychological safety indicators (Edmondson)
- Team Topologies for structural health

## Formatting Guidelines
- Dashboard table at top with emoji indicators and trend arrows
- Observation checklist as lightweight assessment tool
- Survey questions ready to use or adapt
- Action plan as final actionable output

## Example
Health check reveals: "Delivery velocity is stable (🟢) but morale is declining (🟡↓). Root cause: team feels 'feature factory' — no ownership of outcomes. Evidence: 3 team members mentioned 'just building what we're told' in retro. Action: introduce outcome-based sprint goals, share customer impact metrics weekly, involve team in discovery sessions."
