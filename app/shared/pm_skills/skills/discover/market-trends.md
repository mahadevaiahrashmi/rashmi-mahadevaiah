# Market Trends

## Purpose
Analyze and synthesize macro trends, technology shifts, regulatory changes, and evolving customer behaviors that shape the competitive landscape. Trend analysis provides early-warning signals and strategic context so the product team can position ahead of market shifts rather than reacting to them.

## Auto-Trigger Patterns
- "what trends are shaping [market/industry]"
- "market trends for [category]"
- "emerging trends in [space]"
- "what's changing in [industry]"
- "industry outlook for [category]"
- "signal detection for [market]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Industry or market focus | Yes | User prompt |
| Current product positioning | Recommended | `context/products/*/overview.md` |
| Known competitive dynamics | Optional | `context/products/*/competitors.md` |
| Time horizon | Optional | User prompt (default: 2-3 years) |

## Process
1. **Define the scope** — Specify the industry, geography, and time horizon. Distinguish between trends affecting the entire market vs. your specific segment.
2. **Scan across PESTLE dimensions** — Catalog signals across Political, Economic, Social, Technological, Legal, and Environmental factors.
3. **Categorize trends by type:**
   - *Macro/secular*: Multi-year structural shifts (e.g., cloud migration, AI adoption).
   - *Cyclical*: Recurring patterns (e.g., budget cycles, seasonal behavior).
   - *Emerging*: Early signals that may or may not materialize (e.g., new regulation proposals).
4. **Assess each trend:**
   - Certainty: How confident are we this trend will continue? (High/Medium/Low)
   - Impact: How much does this affect our market? (High/Medium/Low)
   - Velocity: How fast is this trend moving? (Accelerating/Steady/Decelerating)
   - Time horizon: When will this become material? (Now/1-2 years/3+ years)
5. **Map implications** — For each high-impact trend, identify: opportunities it creates, threats it poses, required capabilities, and strategic options.
6. **Identify signal sources** — Where to monitor for trend acceleration or reversal: data sources, indicators, and review cadence.
7. **Synthesize strategic posture** — Given the trend landscape, what is the recommended strategic orientation: lean into, hedge against, or monitor.

## Output Format
```
## Market Trends: [Industry/Market] — [Date]

### Executive Summary
[3-4 sentence synthesis of the most important trends and their strategic implications]

### Trend Landscape
| # | Trend | Type | Certainty | Impact | Velocity | Horizon |
|---|-------|------|-----------|--------|----------|---------|
| 1 | ... | Macro | High | High | Accelerating | Now |

### Trend Deep-Dives

#### Trend 1: [Name]
**Signal:** What we're observing
**Driver:** Why this is happening
**Data points:** Quantitative evidence
**Impact on our market:** ...
**Opportunity:** ...
**Threat:** ...
**Strategic option:** ...

### PESTLE Summary
| Dimension | Key Signals | Relevance |
|-----------|-------------|-----------|
| Political | ... | ... |

### Monitoring Plan
| Trend | Signal to Watch | Source | Review Cadence |
|-------|----------------|--------|----------------|
| ... | ... | ... | Quarterly |

### Strategic Posture
| Posture | Trends | Rationale |
|---------|--------|-----------|
| Lean into | #1, #3 | ... |
| Hedge | #4 | ... |
| Monitor | #5, #6 | ... |
```

## Quality Standards
- Trends are backed by data points, not just narratives.
- Distinction between certain and speculative trends is clear.
- Implications are specific to the product/company, not generic industry observations.
- Monitoring plan ensures trends are revisited, not just reported once.
- Time horizons are realistic — avoids both hype and complacency.

**Anti-patterns:** Listing trends without assessing impact, treating all trends as equally important, confusing a trend with a single data point, hype-driven analysis, ignoring counter-signals.

## Framework References
- **PESTLE Analysis** — Scanning political, economic, social, technological, legal, environmental dimensions.
- **Technology Adoption Lifecycle** — Assessing where technologies sit on the adoption curve.

## Formatting Guidelines
- Summary table at top with all trends rated on consistent scales.
- Deep-dive sections for high-impact trends only.
- PESTLE as a reference table, not the primary structure.
- Bold the strategic posture recommendations.

## Example
**Scenario:** Trends analysis for the enterprise data platform market.

**Trend:** "AI-native data transformation" — Certainty: High, Impact: High, Velocity: Accelerating.
**Signal:** 60% of data engineers surveyed expect AI to write >50% of their transformation logic within 2 years (State of Data Engineering 2025).
**Implication:** Products without AI-assisted pipeline building will lose competitive positioning in 12-18 months. Invest now in AI-assisted transformation capabilities.
