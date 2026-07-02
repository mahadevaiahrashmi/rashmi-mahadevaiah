# Intercom Analysis

## Purpose
Analyzes Intercom conversation data — identifying patterns in customer queries, bot performance, response times, customer segments, and product feedback — extracting actionable product insights from support and engagement channels.

## Auto-Trigger Patterns
- "Analyze Intercom conversations"
- "Intercom bot performance"
- "Customer conversation trends"
- "Extract product feedback from Intercom"
- "Intercom support analysis"

## Tool Configuration
Requires `context/integrations/intercom.md` with: Intercom workspace ID, API access token. Auth: Access token with read conversations, contacts, and analytics scopes.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Analysis period, focus area (conversations, bot, feedback, segments)
- **Optional:** Tag filters, team inbox, customer segment, comparison period

## Process
1. Pull conversation data and metadata for the analysis period.
2. Analyze conversation volume, channels, and initiation patterns.
3. Evaluate bot (Fin) performance: resolution rate, handoff rate, accuracy.
4. Measure response times and SLA compliance.
5. Segment conversations by customer attributes and lifecycle stage.
6. Extract product feedback and feature requests from conversation content.
7. Identify self-serve opportunities and knowledge gaps.
8. Generate insights with recommended actions.

## Output Format
```
# Intercom Analysis: [Period]

## Conversation Overview
| Metric | Current | Previous | Change |
|---|---|---|---|
| Total Conversations | [N] | [N] | [+/-X%] |
| Bot Resolved | [N] ([X%]) | [N] ([X%]) | [+/-X pp] |
| Human Handled | [N] | [N] | [+/-X%] |
| Median First Response | [Xm] | [Xm] | [+/-X%] |
| Median Resolution | [Xh] | [Xh] | [+/-X%] |
| CSAT | [X%] | [X%] | [+/-X pp] |

## Bot Performance
| Metric | Value | Target | Status |
|---|---|---|---|
| Resolution Rate | [X%] | [Y%] | [Met/Missed] |
| Handoff Rate | [X%] | [<Y%] | [Met/Missed] |
| Customer Satisfaction | [X%] | [Y%] | [Met/Missed] |
| Top Unresolved Topics | [List] | — | [Action needed] |

## Conversation Topics
| Topic | Volume | Bot Resolved | Human Needed | Trend |
|---|---|---|---|---|
| [Topic 1] | [N] | [X%] | [X%] | [↑↓→] |

## Product Feedback Extracted
| Feedback Theme | Mentions | Customer Segment | Sentiment |
|---|---|---|---|
| [Theme 1] | [N] | [Segment] | [Positive/Negative/Mixed] |

## Customer Segment Patterns
| Segment | Conv. Volume | Top Topic | Avg Resolution |
|---|---|---|---|
| Trial Users | [N] | [Topic] | [Xh] |
| Paying Users | [N] | [Topic] | [Xh] |

## Recommendations
| Action | Evidence | Expected Impact |
|---|---|---|
| [Improve bot for topic X] | [N unresolved convos] | [-X% handoff rate] |
| [Create help article for Y] | [N repeated questions] | [-X human convos/month] |
```

## Quality Standards
- Bot performance is measured against defined targets, not just raw metrics.
- Product feedback extraction distinguishes between bugs, feature requests, and confusion.
- Segment analysis reveals different support needs across customer lifecycle.
- Recommendations quantify expected impact on support volume.
- Unresolved bot topics are prioritized for bot training.

## Permissions Required
Intercom Admin or Analyst role for conversation and analytics access.

## Example
Monthly analysis showing: bot resolving 42% of conversations (target: 50%), top unresolved topic is "billing questions" (28% of handoffs), trial user conversations spike 3x at day 5 (activation wall), 15 unique feature requests extracted with "API webhooks" mentioned 12 times across 8 enterprise accounts. Recommendation: train bot on billing FAQs (projected +8pp resolution rate) and prioritize webhook feature based on enterprise demand signal.
