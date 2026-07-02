# Zendesk Ticket Analysis

## Purpose
Analyzes Zendesk support ticket data — identifying trend patterns, common issue categories, resolution times, satisfaction scores, and knowledge gaps — to surface product insights from customer support interactions.

## Auto-Trigger Patterns
- "Analyze Zendesk tickets"
- "Support ticket trends"
- "What are customers complaining about?"
- "Zendesk analysis for product insights"
- "Customer support patterns"

## Tool Configuration
Requires `context/integrations/zendesk.md` with: Zendesk subdomain, API token (email/token pair) or OAuth. Auth: API token with read access to tickets, users, and satisfaction ratings.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Analysis period, scope (all tickets or specific tags/groups)
- **Optional:** Category filters, customer segment, comparison period, resolution SLA targets

## Process
1. Pull ticket data for the analysis period.
2. Categorize tickets by issue type, product area, and severity.
3. Calculate metrics: volume trends, resolution time, CSAT, first-response time.
4. Identify top issue categories and emerging trends.
5. Analyze resolution patterns: self-serve vs agent, knowledge base gaps.
6. Segment by customer tier for prioritization insights.
7. Surface product improvement opportunities from ticket patterns.
8. Generate actionable recommendations.

## Output Format
```
# Zendesk Analysis: [Period]

## Volume Summary
| Metric | Current | Previous | Change |
|---|---|---|---|
| Total Tickets | [N] | [N] | [+/-X%] |
| Avg. Daily Volume | [N] | [N] | [+/-X%] |
| First Response Time | [Xh] | [Xh] | [+/-X%] |
| Resolution Time | [Xh] | [Xh] | [+/-X%] |
| CSAT Score | [X%] | [X%] | [+/-X pp] |
| One-Touch Resolution | [X%] | [X%] | [+/-X pp] |

## Top Issue Categories
| Category | Tickets | % of Total | Trend | CSAT |
|---|---|---|---|---|
| [Category 1] | [N] | [X%] | [↑↓→] | [X%] |
| [Category 2] | [N] | [X%] | [↑↓→] | [X%] |

## Emerging Issues (New or Growing)
| Issue | This Period | Last Period | Growth | Severity |
|---|---|---|---|---|
| [Issue] | [N] | [N] | [+X%] | [High/Med/Low] |

## Customer Segment Analysis
| Segment | Tickets | Avg Resolution | CSAT | Top Issue |
|---|---|---|---|---|
| Enterprise | [N] | [Xh] | [X%] | [Issue] |
| Mid-Market | [N] | [Xh] | [X%] | [Issue] |

## Knowledge Base Gaps
| Topic | Tickets Requiring Agent | KB Article Exists? | Action |
|---|---|---|---|
| [Topic] | [N] | No | Create article |
| [Topic] | [N] | Yes — outdated | Update article |

## Product Recommendations
| Finding | Evidence | Recommendation | Impact |
|---|---|---|---|
| [Pattern] | [X tickets, Y% of category] | [Product change] | [Estimated ticket reduction] |
```

## Quality Standards
- Categories are consistent with the support team's taxonomy.
- Trends compare to the previous period for context.
- Emerging issues are flagged early before they become top categories.
- Knowledge base gap analysis connects support costs to self-serve opportunities.
- Product recommendations cite specific ticket volumes as evidence.

## Permissions Required
Zendesk Agent or Admin for ticket data access. Explore access for built-in analytics.

## Example
A monthly analysis revealing: ticket volume up 15% driven by a 40% spike in "Integration Setup" issues (correlated with new API release), CSAT down 3pp for Enterprise segment (resolution time 2x target SLA), 3 knowledge base gaps identified (estimated 120 tickets/month deflectable), and top product recommendation: improve API error messages (would reduce 200+ monthly tickets by providing actionable error guidance).
