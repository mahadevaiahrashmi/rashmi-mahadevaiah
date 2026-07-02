# Win-Loss Analysis

## Purpose
Analyze patterns across won and lost deals to understand why customers choose us or a competitor. Win-loss analysis reveals product gaps, messaging effectiveness, sales process issues, and competitive dynamics — providing actionable intelligence that improves win rates and informs product strategy.

## Auto-Trigger Patterns
- "win loss analysis"
- "why did we lose [deal/customer]"
- "why are we winning/losing deals"
- "analyze our win rate"
- "competitive win/loss patterns"
- "deal analysis for [segment/quarter]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Deal data (won and lost) | Yes | User prompt |
| Loss reasons and win themes | Yes | User prompt or CRM data |
| Competitive context | Recommended | `context/products/*/competitors.md` |
| Customer segment info | Optional | `context/products/*/customers.md` |
| Time period | Optional | User prompt |

## Process
1. **Segment the dataset** — Group deals by: outcome (win/loss), segment, deal size, competitor involved, sales cycle length, product line.
2. **Identify win themes** — Across won deals, find the top 3-5 reasons customers chose us. Quantify each: % of wins where this theme appeared.
3. **Identify loss reasons** — Across lost deals, categorize: product gap, pricing, competitor strength, relationship/trust, timing, no-decision. Quantify each.
4. **Competitive pattern analysis** — For deals involving specific competitors:
   - Win rate against each competitor.
   - Common win themes per competitor.
   - Common loss reasons per competitor.
5. **Segment analysis** — Check if win/loss patterns differ by customer size, industry, use case, or geography.
6. **Sales process analysis** — Look for process-related patterns: deals with POC vs. without, multi-threaded vs. single-threaded, champion strength, decision timeline.
7. **Extract product implications** — Which product gaps appeared most in losses? Which features drove wins?
8. **Generate recommendations** — Actionable items for product (build/fix), marketing (messaging), and sales (process/enablement).

## Output Format
```
## Win-Loss Analysis: [Period / Segment]

### Dataset Overview
| Metric | Value |
|--------|-------|
| Total deals analyzed | ... |
| Win rate | ... |
| Avg. deal size (won) | ... |
| Avg. cycle length | ... |

### Win Themes
| # | Theme | % of Wins | Typical Quote |
|---|-------|----------|---------------|
| 1 | ... | ... | "..." |

### Loss Reasons
| # | Reason | % of Losses | Category |
|---|--------|------------|----------|
| 1 | ... | ... | Product / Price / Competitor / Process |

### Competitive Win Rates
| Competitor | Deals | Win Rate | Top Win Theme | Top Loss Reason |
|-----------|-------|----------|---------------|-----------------|
| Comp A | ... | ... | ... | ... |

### Segment Patterns
| Segment | Win Rate | Key Pattern |
|---------|----------|-------------|
| Enterprise | ... | ... |
| Mid-Market | ... | ... |

### Product Implications
| Signal | Source | Recommendation |
|--------|--------|----------------|
| Gap: ... | X losses | Build / Investigate |
| Strength: ... | Y wins | Double down |

### Recommendations
**Product:** ...
**Marketing:** ...
**Sales:** ...

### Methodology & Limitations
[How data was collected, sample size caveats, potential biases]
```

## Quality Standards
- Both wins AND losses are analyzed — not just losses.
- Patterns are quantified, not anecdotal — minimum sample of 15-20 deals per segment.
- Competitor-specific insights are actionable (feed into battlecards).
- Product implications distinguish between table-stakes gaps and differentiating features.
- Methodology limitations are transparent.

**Anti-patterns:** Only analyzing losses, relying on CRM dropdown fields without interview data, small sample generalizations, blaming sales for losses that are product problems, ignoring no-decision outcomes.

## Framework References
- **Competitive Positioning** — Understand where you win and lose in the value landscape.
- **MEDDPICC** — Sales qualification framework to analyze deal dynamics.

## Formatting Guidelines
- Lead with high-level metrics (win rate, deal count, avg. size).
- Tables for all pattern data — scannable and comparable.
- Separate sections for product, marketing, and sales recommendations.
- Include a methodology section for credibility.

## Example
**Scenario:** Q2 win-loss analysis for a mid-market security product.

**Pattern:** Win rate drops from 45% to 22% when Competitor B is involved. Primary loss reason: their product has native SIEM integration (cited in 8/11 losses against them).
**Recommendation:** Product — accelerate SIEM integration from Q4 to Q3. Sales — when Competitor B is present, lead with our superior alerting and investigation workflow rather than trying to match on integrations.
