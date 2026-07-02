# Customer Feedback Synthesis

## Purpose
Aggregate customer feedback from multiple channels — support tickets, NPS responses, app reviews, sales call notes, social media, and community forums — into a prioritized theme report. Provides a unified view of customer sentiment and pain points to drive product decisions with quantified, cross-channel evidence.

## Auto-Trigger Patterns
- "synthesize customer feedback"
- "what are customers saying"
- "aggregate feedback from [channels]"
- "top customer complaints"
- "feedback analysis"
- "customer pain point trends"
- "NPS / support ticket analysis"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feedback data from 1+ channels | Yes | User prompt |
| Channel sources (support, NPS, reviews, etc.) | Yes | User prompt |
| Time period | Recommended | User prompt |
| Customer segments | Optional | `context/products/*/customers.md` |
| Product areas to focus on | Optional | User prompt |

## Process
1. **Inventory sources** — List all channels included, their volume, and any coverage gaps. Note channel biases (e.g., support tickets skew toward frustrated users).
2. **Normalize the data** — Standardize formats across channels. Tag each data point with: channel, date, customer segment (if known), sentiment (positive/negative/neutral), product area.
3. **Categorize feedback** — Assign each data point to a category: bug/defect, feature request, UX friction, pricing/packaging, documentation, performance, onboarding, support experience.
4. **Cluster into themes** — Group related feedback into 6-10 themes. Name themes descriptively (e.g., "Dashboard load times frustrate power users" not "Performance").
5. **Quantify each theme:**
   - Frequency: How many mentions across how many customers.
   - Severity: Impact on customer success (blocks workflow / degrades experience / minor annoyance).
   - Segment concentration: Is this theme concentrated in a specific segment?
   - Trend: Increasing, stable, or decreasing over time.
6. **Pull representative quotes** — Select 2-3 verbatim quotes per theme that best capture the customer voice.
7. **Prioritize themes** — Rank by frequency × severity, adjusted for strategic segment importance.
8. **Generate recommendations** — For each top theme, suggest: investigate further, fix now, add to backlog, or communicate (set expectations).

## Output Format
```
## Customer Feedback Synthesis: [Period]

### Source Summary
| Channel | Volume | Period | Bias Notes |
|---------|--------|--------|------------|
| Support tickets | ... | ... | Skews negative |
| NPS comments | ... | ... | ... |

### Theme Overview
| # | Theme | Mentions | Customers | Severity | Segment | Trend | Priority |
|---|-------|----------|-----------|----------|---------|-------|----------|
| 1 | ... | ... | ... | High | Enterprise | ↑ | P1 |

### Theme Deep-Dives

#### Theme 1: [Name]
**Summary:** ...
**Frequency:** X mentions across Y customers
**Severity:** [High/Med/Low] — [impact description]
**Segment:** [which segments affected]
**Trend:** [↑ increasing / → stable / ↓ decreasing]
**Representative quotes:**
> "[Quote]" — [Channel], [Segment]
> "[Quote]" — [Channel], [Segment]
**Recommendation:** [Investigate / Fix now / Backlog / Communicate]

### Segment View
| Theme | SMB | Mid-Market | Enterprise |
|-------|-----|-----------|-----------|
| ... | Low | Medium | High |

### Recommendations Summary
| Priority | Theme | Action | Owner |
|----------|-------|--------|-------|
| P1 | ... | Fix now | ... |

### Coverage Gaps
[Channels or segments not represented in this analysis]
```

## Quality Standards
- Multiple channels are represented to avoid single-source bias.
- Themes are quantified — not just "customers are unhappy" but "47 mentions from 32 customers."
- Severity reflects business impact, not just volume.
- Segment correlation is analyzed — the same theme may matter differently to different segments.
- Channel biases are acknowledged explicitly.

**Anti-patterns:** Treating all feedback equally regardless of source, reporting individual complaints as themes, ignoring positive feedback, conflating feature requests with pain points, recency bias.

## Framework References
- **Voice of Customer (VoC)** — Multi-channel feedback aggregation methodology.
- **Kano Model** — Categorize feedback as must-have, performance, or delight.

## Formatting Guidelines
- Overview table at top for executive scanning.
- Deep-dive sections for top 5-6 themes only.
- Use trend arrows (↑ → ↓) for quick visual scanning.
- Segment view as a heat-map-style table.
- Blockquotes for all customer quotes.

## Example
**Scenario:** Quarterly feedback synthesis for a project management SaaS.

**Theme:** "Notification overload drowns important updates" — 83 mentions from 61 customers across support (34), NPS (29), reviews (20). Severity: Medium. Concentrated in teams with 20+ members. Trend: ↑ increasing.
**Quote:** "I've started ignoring all notifications because 90% are irrelevant. Last week I missed a deadline because the important alert was buried." — NPS, Enterprise.
**Recommendation:** Investigate — design a notification preferences study to understand the filtering rules customers actually want.
