# Market Sizing

## Purpose
Estimate the total addressable market (TAM), serviceable addressable market (SAM), and serviceable obtainable market (SOM) using both top-down and bottom-up methodologies. Transparent market sizing builds investor confidence, guides resource allocation, and validates that an opportunity is worth pursuing.

## Auto-Trigger Patterns
- "size the market for [product/category]"
- "TAM SAM SOM"
- "how big is the [X] market"
- "market opportunity for [product]"
- "estimate market size"
- "is [opportunity] big enough"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Product or category to size | Yes | User prompt |
| Target customer segments | No | `context/products/*/customers.md` |
| Pricing model / average deal size | Recommended | `context/products/*/overview.md` |
| Geographic scope | Optional | User prompt |
| Industry reports or data points | Optional | User prompt |

## Process
1. **Define the market boundary** — Clearly state what's in and out of scope. Define the category, geography, and time horizon.
2. **Top-down analysis** — Start with the total industry revenue (from analyst reports, public data) and narrow down:
   - TAM: Total spending on this category globally (or in your geography).
   - SAM: The portion addressable by your product type and go-to-market.
   - SOM: The realistic share capturable in 3-5 years given your resources.
3. **Bottom-up analysis** — Build from unit economics:
   - Count of potential customers in target segments × average revenue per customer.
   - Validate against known customer data and win rates.
4. **Triangulate** — Compare top-down and bottom-up. If they diverge significantly, investigate assumptions.
5. **Sensitivity analysis** — Test key assumptions: ±20% on customer count, pricing, penetration rate. Show the range.
6. **Document assumptions** — Every number needs a source or a stated assumption. No black-box estimates.
7. **Assess confidence** — Rate overall confidence (High/Medium/Low) and flag the assumptions most likely to be wrong.

## Output Format
```
## Market Sizing: [Product/Category]

### Market Definition
[What's included, what's excluded, geography, time horizon]

### TAM / SAM / SOM Summary
| Metric | Value | Methodology |
|--------|-------|-------------|
| TAM | $Xbn | Top-down: [source] |
| SAM | $Xbn | [filter applied] |
| SOM | $Xm | [penetration assumption] |

### Top-Down Analysis
[Step-by-step narrowing with sources]

### Bottom-Up Analysis
| Input | Value | Source |
|-------|-------|--------|
| Target companies | ... | ... |
| Penetration rate | ... | ... |
| Avg. deal size | ... | ... |
| **Bottom-up TAM** | **$X** | Calculated |

### Triangulation
| Method | TAM | SAM | SOM |
|--------|-----|-----|-----|
| Top-down | ... | ... | ... |
| Bottom-up | ... | ... | ... |
| Delta | ... | ... | ... |

### Sensitivity Analysis
| Assumption | Base | -20% | +20% | Impact on SOM |
|-----------|------|------|------|---------------|
| ... | ... | ... | ... | ... |

### Key Assumptions & Confidence
| Assumption | Value | Confidence | Risk if wrong |
|-----------|-------|------------|---------------|
| ... | ... | High/Med/Low | ... |

### Conclusion
[Is this market worth pursuing? Key caveats.]
```

## Quality Standards
- TAM, SAM, SOM are clearly differentiated — not inflated TAM presented as addressable.
- Both top-down and bottom-up are attempted; divergence is explained.
- Every data point has a source or is explicitly flagged as an assumption.
- Sensitivity analysis covers the 2-3 most impactful variables.
- SOM reflects realistic penetration, not optimistic fantasy.

**Anti-patterns:** Using TAM as if it's all capturable, single-method sizing, hiding assumptions, precision theater (false precision on uncertain numbers), ignoring competition's share.

## Framework References
- **TAM/SAM/SOM** — Standard market sizing funnel.
- **Bottom-Up Sizing** — Unit-economics-based market construction.

## Formatting Guidelines
- Lead with the summary table for executive scanning.
- Use separate sections for each methodology.
- Sensitivity analysis in a table with clear high/low ranges.
- Bold the final SOM figure — this is the actionable number.

## Example
**Scenario:** Sizing the market for AI-powered customer support software.

**Bottom-up:** 150,000 companies with 10+ support agents × 60% digital-first × $50K avg. ACV = $4.5B SAM.
**Top-down:** Global customer service software market ($15B, Gartner 2025) × 40% AI-augmented segment = $6B TAM. SAM with mid-market focus = $3.5B.
**Triangulation:** Bottom-up and top-down SAM within 25% — reasonable convergence.
