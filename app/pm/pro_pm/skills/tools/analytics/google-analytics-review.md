# Google Analytics Review

## Purpose
Analyzes GA4 data — traffic sources, conversion tracking, audience insights, and behavior flow — producing structured reports with interpretations and actionable recommendations for product and growth teams.

## Auto-Trigger Patterns
- "Review Google Analytics"
- "GA4 traffic analysis"
- "Analyze conversion data"
- "Google Analytics report for…"
- "What's happening with our web traffic?"

## Tool Configuration
Requires `context/integrations/google-analytics.md` with: GA4 property ID, Google Analytics Data API credentials. Auth: OAuth 2.0 with analytics.readonly scope or service account.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** GA4 property ID, analysis focus (traffic, conversions, engagement, audience)
- **Optional:** Date range, comparison period, segments, specific pages/events, conversion goals

## Process
1. Define the analysis scope and key questions.
2. Pull relevant metrics: users, sessions, engagement rate, conversions.
3. Analyze traffic sources: organic, paid, referral, direct, social.
4. Review conversion funnel performance.
5. Examine audience demographics and behavior patterns.
6. Compare to previous period for trends.
7. Identify anomalies and opportunities.
8. Generate actionable recommendations.

## Output Format
```
# GA4 Analysis: [Focus Area]
**Property:** [Property name] | **Period:** [Date range] | **Compared to:** [Previous period]

## Key Metrics Summary
| Metric | Current | Previous | Change |
|---|---|---|---|
| Users | [X] | [X] | [+/-X%] |
| Sessions | [X] | [X] | [+/-X%] |
| Engagement Rate | [X%] | [X%] | [+/-X pp] |
| Avg. Engagement Time | [Xm Xs] | [Xm Xs] | [+/-X%] |
| Conversions | [X] | [X] | [+/-X%] |
| Conversion Rate | [X%] | [X%] | [+/-X pp] |

## Traffic Source Analysis
| Source/Medium | Users | Sessions | Conv. Rate | Revenue |
|---|---|---|---|---|
| google/organic | [X] | [X] | [X%] | [$X] |
| direct/(none) | [X] | [X] | [X%] | [$X] |

## Top Pages
| Page | Views | Avg. Time | Bounce Rate |
|---|---|---|---|
| [/page] | [X] | [Xs] | [X%] |

## Conversion Funnel
| Step | Users | Drop-off |
|---|---|---|
| [Page/Event 1] | [X] | — |
| [Page/Event 2] | [X] | [X%] |
| [Conversion] | [X] | [X%] |

## Key Insights
1. **[Insight]:** [Data-backed observation with interpretation]
2. **[Insight]:** [Data-backed observation with interpretation]

## Recommendations
| Priority | Action | Expected Impact | Effort |
|---|---|---|---|
| High | [Action] | [Impact] | [Low/Med/High] |
| Medium | [Action] | [Impact] | [Low/Med/High] |

## Anomalies / Watch Items
- [Unexpected pattern and possible explanation]
```

## Quality Standards
- Metrics include comparison periods for trend context.
- Insights are data-backed, not opinions — cite specific numbers.
- Recommendations are actionable with expected impact.
- Engagement rate is used instead of bounce rate (GA4 convention).
- Anomalies are flagged with hypotheses for investigation.

## Permissions Required
GA4 Viewer role for report access. Editor role for custom report creation.

## Example
A monthly GA4 review showing: 15% traffic increase driven by organic search (+22%), conversion rate up 0.5pp to 3.2%, top landing page `/pricing` has 45% engagement rate (investigate), mobile conversion rate 40% below desktop (recommendation: mobile UX audit), and seasonal traffic spike aligning with industry conference.
