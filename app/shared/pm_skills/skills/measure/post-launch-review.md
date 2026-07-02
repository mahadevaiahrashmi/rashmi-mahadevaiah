# Post-Launch Review

## Purpose
Conduct a thorough post-launch analysis — comparing expected vs. actual results, analyzing metric movements, synthesizing user feedback, evaluating technical performance, documenting lessons learned, and defining follow-up actions. Closes the loop between planning and outcomes to improve future launches.

## Auto-Trigger Patterns
- "post-launch review for [feature]"
- "how did [launch] go"
- "launch retrospective"
- "post-launch analysis"
- "post-ship review for [feature]"
- "launch results for [product]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Launch plan / goals | Yes | Launch plan doc |
| Actual metrics data | Yes | User prompt or dashboards |
| User feedback | Recommended | User prompt |
| Technical performance data | Optional | User prompt |
| Support ticket data | Optional | User prompt |

## Process
1. **Review original goals** — What were the success criteria defined before launch? What metrics were we targeting?
2. **Compare expected vs. actual** — Side-by-side comparison of projected outcomes vs. reality. Where did we hit, miss, or exceed expectations?
3. **Analyze metric movements** — Which metrics moved and by how much? Break down by segment, time period, and user type. Attribute causation where possible.
4. **Synthesize user feedback** — Aggregate feedback from support tickets, in-app surveys, social media, sales conversations. Identify themes.
5. **Evaluate technical performance** — Uptime, latency, error rates, scalability. Did the system handle the load? Any incidents?
6. **Document what went well** — What worked in both the product and the launch process. Capture for repetition.
7. **Document what didn't** — Honest assessment of misses in product, process, communication, or timing. Capture for improvement.
8. **Define follow-up actions** — What needs to happen next? Bug fixes, feature iterations, process improvements, additional research.

## Output Format
```
## Post-Launch Review: [Feature/Product]
**Launch Date:** [date]  |  **Review Date:** [date]
**Review Period:** [Launch to now — X days/weeks]

### Goals vs. Results
| Goal | Target | Actual | Status |
|------|--------|--------|--------|
| [Adoption rate] | [X%] | [Y%] | ✅ Hit / ❌ Missed / 🎯 Exceeded |
| [Metric 2] | [Target] | [Actual] | ✅/❌/🎯 |
| [Metric 3] | [Target] | [Actual] | ✅/❌/🎯 |

### Overall Assessment
[3-4 sentence summary: was this launch successful? What's the headline?]

### Metric Deep-Dive
| Metric | Pre-Launch | Post-Launch | Change | Driver |
|--------|-----------|-------------|--------|--------|
| [Metric] | [Baseline] | [Current] | [Δ] | [Why it moved] |

### User Feedback Themes
| Theme | Frequency | Sentiment | Sample Quote | Action |
|-------|-----------|-----------|-------------|--------|
| [Theme 1] | [# mentions] | Positive/Negative | "[Quote]" | [Follow-up] |

### Technical Performance
| Dimension | Target | Actual | Status |
|-----------|--------|--------|--------|
| Uptime | [X%] | [Y%] | ✅/❌ |
| Latency p99 | [Xms] | [Yms] | ✅/❌ |
| Error rate | [<X%] | [Y%] | ✅/❌ |

### What Went Well
1. [Specific thing that worked — product, process, or communication]

### What Didn't Go Well
1. [Specific miss with root cause]

### Lessons Learned
1. [Actionable learning for future launches]

### Follow-Up Actions
| Action | Owner | Deadline | Priority |
|--------|-------|----------|----------|
| [Bug fix / iteration] | [Name] | [Date] | P0/P1/P2 |
```

## Quality Standards
- Goals are compared against original targets, not revised post-hoc.
- Metric analysis includes attribution (why it moved), not just what moved.
- Feedback synthesis identifies themes with frequency, not just cherry-picked quotes.
- Lessons learned are actionable, not platitudes.

**Anti-patterns:** Revising goals after seeing results, cherry-picking positive data, skipping technical performance review, lessons learned without follow-up actions, blame-oriented retrospectives.

## Framework References
- **Objectives-based review** — Measuring against pre-defined success criteria.
- **Blameless retrospective** — Learning-focused post-launch analysis.

## Formatting Guidelines
- Goals vs. results table with status icons (instant scorecard).
- Feedback themes with frequency counts (quantified qualitative data).
- What went well / didn't in numbered lists (structured reflection).
- Follow-up actions with owners and deadlines (accountable next steps).

## Example
**Assessment:** "Smart Filters launch was a qualified success. Adoption rate (28%) exceeded the 20% target, and users who activated Filters showed 15% higher retention. However, initial load time was 40% above our target, and 12 support tickets flagged confusion about the 'saved filters' feature. Key learning: we under-invested in the empty state experience — users who didn't have enough data to generate useful filter suggestions had a poor first impression."
