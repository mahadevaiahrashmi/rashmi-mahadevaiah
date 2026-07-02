# Market Landscape Report

## Purpose
Produce a comprehensive market landscape analysis that maps the competitive terrain, identifies market dynamics, and provides the strategic context executives need for investment decisions. This is the foundational market document that informs product strategy, positioning, M&A considerations, and resource allocation.

## Auto-Trigger Patterns
- "create a market landscape report"
- "market landscape for [industry]"
- "map the [market] landscape"
- "who are the players in [market]"
- "market overview report"
- "executive market briefing"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Market or industry to analyze | Yes | User prompt |
| Our position in the market | Recommended | `context/products/*/overview.md` |
| Known competitors | Optional | `context/products/*/competitors.md` |
| Geographic scope | Optional | User prompt |
| Specific areas of focus | Optional | User prompt |

## Process
1. **Define the market** — Clearly bound the market: category definition, adjacent categories, inclusion/exclusion criteria. Identify any sub-segments.
2. **Size the market** — TAM, growth rate, and key drivers. Use available data with cited sources. Reference the market-sizing skill if a deeper analysis is needed.
3. **Map the segments** — Break the market into logical segments by buyer type, use case, deployment model, geography, or technology approach.
4. **Catalog key players** — For each segment, identify: leaders, challengers, niche players, and emerging entrants. Note their positioning and approximate scale.
5. **Analyze market dynamics:**
   - Growth drivers: What's fueling market expansion?
   - Barriers: What slows adoption or entry?
   - Technology trends: What technology shifts are reshaping the landscape?
   - Regulatory landscape: What regulations affect the market?
   - Buyer behavior: How are buying patterns changing?
6. **Map competitive positions** — Place players on a 2×2 matrix using the two most strategically important dimensions (e.g., breadth vs. depth, enterprise vs. SMB).
7. **Identify white space** — Where are the gaps in the landscape? Underserved segments, emerging needs, or positioning opportunities.
8. **Assess strategic implications** — Given the landscape, where should we invest, partner, compete, or avoid?

## Output Format
```
## Market Landscape: [Market Name]

### Executive Summary
[4-5 sentence overview: market definition, size, growth, key dynamics, and strategic implications]

### Market Definition
**Category:** ...
**Scope:** [What's included / excluded]
**Adjacent categories:** ...

### Market Size & Growth
| Metric | Value | Source |
|--------|-------|--------|
| TAM | $Xbn | ... |
| CAGR | X% | ... |
| Key driver | ... | ... |

### Market Segments
| Segment | Size | Growth | Key Need | Key Players |
|---------|------|--------|----------|-------------|
| ... | ... | ... | ... | ... |

### Competitive Landscape

#### Key Players
| Player | Segment Focus | Est. Revenue | Positioning | Key Strength |
|--------|--------------|-------------|-------------|--------------|
| ... | ... | ... | ... | ... |

#### Competitive Positioning Map
```
                High Breadth
                    |
         [Leader A]  |  [Leader B]
                    |
  Low Depth --------+-------- High Depth
                    |
         [Niche C]  |  [Emerging D]
                    |
                Low Breadth
```

### Market Dynamics
| Dynamic | Detail | Impact |
|---------|--------|--------|
| Growth driver | ... | ... |
| Barrier | ... | ... |
| Technology shift | ... | ... |
| Regulatory | ... | ... |
| Buyer behavior | ... | ... |

### White Space & Opportunities
| Opportunity | Evidence | Our Fit |
|-------------|----------|---------|
| ... | ... | Strong / Moderate / Weak |

### Strategic Implications
1. **Invest:** ...
2. **Partner:** ...
3. **Compete:** ...
4. **Avoid:** ...

### Data Sources & Methodology
[List of sources, dates, and caveats]
```

## Quality Standards
- Market definition is precise — reader knows exactly what's in and out of scope.
- Market size comes from cited sources or transparent bottom-up calculation.
- Player catalog is comprehensive, not just the obvious 3-4 competitors.
- Competitive positioning map uses strategically meaningful axes.
- White space analysis identifies actionable opportunities, not just gaps.
- Written for executive consumption — insight-rich, not data-dumping.

**Anti-patterns:** Defining the market too broadly ("the cloud market"), uncited market sizes, missing emerging players, using vanity axes on the positioning map, listing players without analyzing dynamics.

## Framework References
- **Porter's Five Forces** — Industry-level competitive dynamics.
- **Market Segmentation** — Logical decomposition of the market into sub-markets.
- **Competitive Positioning Maps** — 2×2 visualization of competitive positions.

## Formatting Guidelines
- Executive summary on first page — must stand alone for exec readers.
- Tables for structured data throughout.
- Positioning map as a simple 2×2 grid.
- Separate methodology section for credibility.
- Keep the main report to 4-6 pages; use appendix for detail.

## Example
**Scenario:** Market landscape for the AI-powered code assistant market.

**White space:** "No player has strong positioning in 'regulated industry code assistance' — combining AI-powered development with compliance guardrails for financial services and healthcare. Current leaders treat compliance as an afterthought. An enterprise player with built-in policy enforcement could own this segment."
