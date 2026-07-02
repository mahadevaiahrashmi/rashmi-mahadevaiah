# Opportunity Assessment

## Purpose
Score, rank, and compare product opportunities using structured frameworks to drive objective prioritization decisions. Transforms a list of potential investments into a prioritized stack with transparent rationale, enabling leadership alignment and resource allocation.

## Auto-Trigger Patterns
- "prioritize these opportunities"
- "score and rank [opportunities/ideas]"
- "RICE scoring"
- "which opportunity should we pursue"
- "opportunity assessment for [list]"
- "help me decide between [A] and [B]"
- "ICE framework"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| List of opportunities to evaluate | Yes | User prompt |
| Scoring framework preference (RICE/ICE/custom) | Optional | User prompt (default: RICE) |
| Strategic context and goals | Recommended | `context/strategy/goals.md` |
| Customer evidence per opportunity | Optional | Research outputs |
| Resource constraints | Optional | User prompt |

## Process
1. **Clarify the decision** — What are we choosing between? What constraints exist (timeline, budget, team capacity)?
2. **Standardize opportunity descriptions** — Ensure each opportunity is described at the same level of granularity. Decompose anything too broad.
3. **Select scoring framework:**
   - **RICE** (Reach × Impact × Confidence / Effort) — Best for product teams with usage data.
   - **ICE** (Impact × Confidence × Ease) — Simpler, good for early-stage decisions.
   - **Weighted scoring** — Custom criteria with stakeholder-defined weights.
4. **Define scoring scales** — Establish consistent scales before scoring:
   - Reach: # of users/accounts affected per quarter.
   - Impact: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal.
   - Confidence: 100% = high evidence, 80% = solid, 50% = gut, 20% = speculative.
   - Effort: person-months.
5. **Score each opportunity** — Rate on every dimension with brief justification. Flag where estimates are uncertain.
6. **Calculate composite scores** — Apply the formula. Rank by score.
7. **Analyze trade-offs** — Look beyond the score: strategic alignment, dependencies, sequencing, risk. Note where the model might mislead.
8. **Recommend** — Propose the top 3-5 opportunities with rationale. Identify "not now" items and explain why.

## Output Format
```
## Opportunity Assessment: [Context]

### Framework: RICE
| Scale | Definition |
|-------|-----------|
| Reach | Users/quarter |
| Impact | 0.25–3 |
| Confidence | 20%–100% |
| Effort | Person-months |

### Scored Opportunities
| # | Opportunity | Reach | Impact | Confidence | Effort | RICE Score |
|---|------------|-------|--------|------------|--------|------------|
| 1 | ... | ... | ... | ... | ... | ... |

### Scoring Rationale
#### [Opportunity 1]
- **Reach:** [justification]
- **Impact:** [justification]
- **Confidence:** [justification]
- **Effort:** [justification]

### Trade-Off Analysis
| Factor | Opp A | Opp B | Opp C |
|--------|-------|-------|-------|
| Strategic alignment | ... | ... | ... |
| Dependencies | ... | ... | ... |
| Risk | ... | ... | ... |

### Recommendation
**Pursue now:** ...
**Pursue next:** ...
**Not now (and why):** ...
```

## Quality Standards
- Scoring scales are defined before scoring begins — not retroactively adjusted.
- Every score has a brief justification, not just a number.
- Confidence scores are honest — low-evidence items are marked as such.
- Trade-off analysis surfaces factors the model can't capture.
- Recommendations include clear "not now" decisions with reasoning.

**Anti-patterns:** Gaming scores to support a predetermined outcome, treating RICE scores as absolute truth, scoring at inconsistent granularity, ignoring strategic fit, anchoring on effort estimates without validating.

## Framework References
- **RICE** — Reach, Impact, Confidence, Effort scoring developed by Intercom.
- **ICE** — Impact, Confidence, Ease — lighter-weight alternative.
- **Weighted Scoring** — Custom criteria with stakeholder-defined weights.

## Formatting Guidelines
- Summary table with all scores for side-by-side comparison.
- Separate rationale sections so scores can be challenged.
- Bold the final recommendation.
- Include the scoring scale definition so anyone can audit.

## Example
**Scenario:** Prioritizing 5 feature opportunities for Q3.

| Opportunity | Reach | Impact | Confidence | Effort | RICE |
|------------|-------|--------|------------|--------|------|
| Smart alerts | 5000 | 2 | 80% | 3 | 2667 |
| CSV export | 8000 | 0.5 | 100% | 0.5 | 8000 |
| Dashboard redesign | 3000 | 3 | 50% | 6 | 750 |

**Recommendation:** CSV export has the highest RICE score due to high reach and low effort. However, Smart alerts has stronger strategic alignment with our Q3 retention goal — recommend pursuing both, with CSV export as a quick win.
