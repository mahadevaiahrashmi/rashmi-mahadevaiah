# Portfolio Balancing

## Purpose
Analyze the product or feature portfolio across key dimensions — innovation vs. optimization, short-term vs. long-term, risk distribution, and resource allocation — using the Three Horizons framework to ensure the team isn't over-indexing on one type of bet. Portfolio balancing prevents the slow death of always optimizing without investing in the future.

## Auto-Trigger Patterns
- "analyze our product portfolio"
- "balance our investment portfolio"
- "three horizons analysis"
- "are we investing in the right mix"
- "portfolio review for [team/product]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Current initiatives / roadmap | Yes | User prompt |
| Resource allocation | Yes | User prompt |
| Strategic goals | No | `context/company/overview.md` |
| Revenue by product/feature | Optional | User prompt |
| Market maturity assessment | Optional | `context/products/` |

## Process
1. **Classify initiatives by horizon** — H1 (sustain: optimize current business), H2 (grow: scale emerging opportunities), H3 (transform: create future options).
2. **Map resource allocation** — What percentage of resources goes to each horizon?
3. **Compare to benchmarks** — Typical healthy allocation: 70% H1 / 20% H2 / 10% H3, but varies by company stage and strategy.
4. **Analyze additional dimensions** — Innovation vs. optimization, customer-facing vs. internal, offensive vs. defensive.
5. **Assess risk distribution** — Is all the risk concentrated in one area? Are you hedging appropriately?
6. **Identify imbalances** — Where is the portfolio over- or under-indexed relative to strategy?
7. **Recommend rebalancing** — Specific shifts with rationale and trade-offs.
8. **Quality-check** — Analysis is grounded in data, recommendations align with strategy, trade-offs are explicit.

## Output Format
```
## Portfolio Analysis: [Team/Product]
**Period:** [Timeframe] | **Date:** [Date]

### Three Horizons Classification
| Initiative | Horizon | Investment (%) | Expected Return | Timeline |
|-----------|---------|---------------|-----------------|----------|

### Current Allocation
| Horizon | % of Resources | % of Initiatives | Benchmark |
|---------|---------------|-----------------|-----------|
| H1: Sustain | ... | ... | ~70% |
| H2: Grow | ... | ... | ~20% |
| H3: Transform | ... | ... | ~10% |

### Multi-Dimensional Analysis
| Dimension | Current Mix | Recommended | Gap |
|-----------|------------|-------------|-----|
| Innovation vs. Optimization | ... | ... | ... |
| Short-term vs. Long-term | ... | ... | ... |
| Customer-facing vs. Internal | ... | ... | ... |
| Offensive vs. Defensive | ... | ... | ... |

### Risk Distribution
| Risk Type | Exposure | Concentration | Concern |
|-----------|----------|--------------|---------|

### Portfolio Health Assessment
| Indicator | Status | Concern |
|-----------|--------|---------|
| H3 pipeline | [Empty/Sparse/Healthy] | ... |
| H1 optimization | [Neglected/Balanced/Over-indexed] | ... |
| Diversification | [Low/Medium/High] | ... |

### Rebalancing Recommendations
| # | Recommendation | From → To | Impact | Rationale |
|---|---------------|-----------|--------|-----------|

### Strategic Alignment
[How the recommended portfolio maps to stated strategy]
```

## Quality Standards
- Classification is based on strategic impact, not team perception.
- Benchmarks are contextualized — a startup's allocation differs from an enterprise's.
- Recommendations include specific shifts, not vague "invest more in innovation."
- Risk distribution is explicitly analyzed — not just assumed to be diversified.

**Anti-patterns:** All work classified as H1 (no investment in future), no H3 pipeline (future starvation), portfolio analysis without strategic context, recommendations that ignore resource constraints.

## Framework References
- **Three Horizons (McKinsey)** — Sustain, grow, transform investment framework.
- **Exploration vs. Exploitation** — Balance between leveraging known advantages and discovering new ones.
- **Real Options** — Treat H3 investments as options with asymmetric upside.

## Formatting Guidelines
- Use percentage tables for allocation comparisons.
- Include benchmark comparisons for context.
- Visualize the portfolio balance across dimensions.
- Bold items that need immediate rebalancing attention.

## Example
**Imbalance:** "Currently allocating 92% to H1 (sustain) and 8% to H2 (grow), with zero H3 investment. While H1 performance is strong (NRR 115%), our innovation pipeline is empty. If our market shifts (see competitor analysis), we have no emerging bets to pivot toward."

**Recommendation:** "Shift 10% of H1 resources to H3 exploration. Specifically: reduce scope of Dashboard v4 polish (H1) by 2 engineers and create a 2-person innovation squad to prototype the ML-powered insights concept (H3). Expected trade-off: Dashboard v4 ships 3 weeks later; we gain 3 months of H3 learning."
