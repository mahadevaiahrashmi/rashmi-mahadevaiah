# Gong Call Analysis

## Purpose
Analyzes Gong call recordings — identifying competitive mentions, feature requests, objection patterns, talk/listen ratios, and deal signals — to extract product intelligence from sales conversations at scale.

## Auto-Trigger Patterns
- "Analyze Gong calls"
- "What are prospects saying about…"
- "Competitive mentions in calls"
- "Feature requests from sales calls"
- "Gong insights for product"

## Tool Configuration
Requires `context/integrations/gong.md` with: Gong API base URL, access key and secret. Auth: API access key pair with calls and analytics read permissions.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Analysis focus (competitive, feature requests, objections, deal patterns)
- **Optional:** Date range, deal stage filter, competitor names, keyword trackers, rep filter

## Process
1. Define the analysis focus and relevant keyword trackers.
2. Pull call data with transcripts and analytics.
3. Identify competitive mentions and context.
4. Extract feature requests and product feedback.
5. Analyze objection patterns and winning responses.
6. Review talk/listen ratios and engagement metrics.
7. Segment findings by deal stage, segment, and outcome.
8. Generate product intelligence report.

## Output Format
```
# Gong Call Analysis: [Focus Area]
**Period:** [Date range] | **Calls Analyzed:** [N]

## Competitive Intelligence
| Competitor | Mentions | % of Calls | Context | Win Rate When Mentioned |
|---|---|---|---|---|
| [Competitor A] | [N] | [X%] | [Common comparison points] | [X%] |
| [Competitor B] | [N] | [X%] | [Common comparison points] | [X%] |

### Key Competitive Themes
1. **[Theme]:** [What prospects say and how reps respond]
2. **[Theme]:** [What prospects say and how reps respond]

## Feature Requests from Prospects
| Feature | Mentions | Deal Stage | Segment | Deal Size |
|---|---|---|---|---|
| [Feature 1] | [N] | [Stage] | [Segment] | [Avg $] |
| [Feature 2] | [N] | [Stage] | [Segment] | [Avg $] |

## Objection Patterns
| Objection | Frequency | Best Response | Win Rate |
|---|---|---|---|
| "[Objection 1]" | [N calls] | [Winning response pattern] | [X%] |
| "[Objection 2]" | [N calls] | [Winning response pattern] | [X%] |

## Conversation Metrics
| Metric | Team Avg | Top Performers | Benchmark |
|---|---|---|---|
| Talk/Listen Ratio | [X:Y] | [X:Y] | [Target] |
| Longest Monologue | [Xs] | [Xs] | [<Xs] |
| Question Rate | [N/call] | [N/call] | [>N] |
| Next Steps Set | [X%] | [X%] | [>90%] |

## Deal Signals
| Signal | Correlation with Win | Occurrences |
|---|---|---|
| [Positive signal] | [+X% win rate] | [N calls] |
| [Negative signal] | [-X% win rate] | [N calls] |

## Product Intelligence Summary
| Insight | Evidence | Recommendation |
|---|---|---|
| [Insight 1] | [N mentions across X calls] | [Product action] |
| [Insight 2] | [Pattern in Y% of lost deals] | [Product action] |
```

## Quality Standards
- Competitive mentions include context, not just counts — what specifically is compared.
- Feature requests are quantified by deal value and segment for prioritization.
- Objection analysis includes both the pattern and effective counter-responses.
- Deal signals are correlated with outcomes (won/lost) for predictive value.
- Product recommendations cite specific call evidence, not anecdotal impressions.

## Permissions Required
Gong Viewer for call access. Manager role for team-level analytics. Admin for tracker configuration.

## Example
A quarterly competitive analysis of 250 calls: Competitor A mentioned in 35% of deals (win rate drops to 28% when mentioned vs 42% baseline), top feature gap is "native integrations" (mentioned in 40 calls worth $2.1M pipeline), leading objection is "pricing for small teams" (best counter: value per user comparison), and talk/listen ratio analysis shows top closers listen 65% of the time vs team average of 50%.
