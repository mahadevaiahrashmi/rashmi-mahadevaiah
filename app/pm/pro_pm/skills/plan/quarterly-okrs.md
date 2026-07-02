# Quarterly OKRs

## Purpose
Draft well-structured OKRs — inspiring Objectives paired with measurable Key Results — that cascade from company strategy to team execution and create alignment without micromanagement. Good OKRs focus the team on outcomes, not outputs, and make progress legible across the organization.

## Auto-Trigger Patterns
- "draft OKRs for [team/quarter]"
- "help me write OKRs"
- "set quarterly objectives"
- "create OKRs for Q[N]"
- "cascade OKRs from company goals"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Company or org-level OKRs | No | `context/company/overview.md` |
| Team context and capabilities | No | `context/team/team.md` |
| Prior quarter results | Optional | User prompt |
| Strategic priorities | Optional | `context/company/overview.md` |
| Resource constraints | Optional | User prompt |

## Process
1. **Review company OKRs** — Understand what the organization is optimizing for. Your OKRs should contribute to these.
2. **Identify 2-4 Objectives** — Each should be qualitative, inspiring, and achievable within the quarter. No metrics in objectives.
3. **Draft 2-4 Key Results per Objective** — Each KR is measurable, time-bound, and outcome-oriented. Not tasks or milestones.
4. **Score confidence** — Rate each KR's achievability (0.3 = stretch, 0.5 = challenging, 0.7 = committed). Aim for 0.5 average.
5. **Map dependencies** — Which KRs depend on other teams? Flag cross-functional dependencies.
6. **Align with individuals** — Suggest how team-level OKRs cascade to individual contributors.
7. **Draft rationale** — For each Objective, explain why this matters this quarter specifically.
8. **Quality-check** — Key Results are outcomes (not outputs), measurable, and collectively sufficient to indicate the Objective is met.

## Output Format
```
## OKRs: [Team Name] — [Quarter Year]

### Objective 1: [Inspiring, qualitative statement]
**Rationale:** [Why this matters this quarter]

| # | Key Result | Baseline | Target | Confidence | Owner |
|---|-----------|----------|--------|-----------|-------|
| KR1.1 | [Measurable outcome] | [Current] | [Target] | 0.5 | [Name] |
| KR1.2 | ... | ... | ... | 0.3 | ... |

**Dependencies:** [Cross-team needs]

### Objective 2: [Inspiring, qualitative statement]
[Same structure]

---

### Cascade Summary
| Company OKR | Team OKR | Connection |
|-------------|----------|------------|

### Confidence Distribution
- Stretch (0.3): [Count] KRs
- Challenging (0.5): [Count] KRs
- Committed (0.7): [Count] KRs
```

## Quality Standards
- Objectives are inspiring and memorable — you could put them on a poster.
- Key Results are outcomes, not tasks ("Increase retention to 85%" not "Launch feature X").
- Confidence scores indicate genuine stretch — all 0.7s means you're sandbagging.
- 2-4 Objectives total. More means no focus.
- Each KR has a clear owner, even at the team level.

**Anti-patterns:** Too many OKRs (>4 objectives), KRs that are task lists, objectives with metrics embedded, all-committed confidence, no connection to company strategy.

## Framework References
- **OKR Framework (Doerr)** — Objectives + Key Results for goal alignment.
- **North Star Framework** — Ensure KRs connect to the team's north star metric.

## Formatting Guidelines
- One table per Objective for Key Results.
- Include a cascade summary showing connection to company OKRs.
- Bold the confidence scores.
- Keep rationale to 2-3 sentences.

## Example
**Objective:** "Make our platform the easiest analytics tool for non-technical teams."

**KR1:** "Increase 7-day activation rate from 31% to 45% (measured by first-dashboard-created)." Confidence: 0.5

**KR2:** "Reduce median time-to-first-insight from 47 minutes to under 15 minutes." Confidence: 0.3
