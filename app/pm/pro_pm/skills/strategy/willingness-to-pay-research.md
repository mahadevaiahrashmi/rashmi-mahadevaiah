# Willingness to Pay Research

## Purpose
Design and execute willingness-to-pay research using established methodologies. Covers Van Westendorp Price Sensitivity Meter, Gabor-Granger demand curves, and conjoint analysis options. Includes interview guide design, analysis framework, and presentation of findings for pricing decisions.

## Auto-Trigger Patterns
- "Design WTP research" / "willingness to pay study"
- "How much would customers pay for [feature]?"
- "Van Westendorp analysis" / "price sensitivity research"
- "Run a pricing study"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/feature to price, target respondent profile, current pricing context
- **Optional:** Hypothesized price range, competitive pricing, prior WTP data
- **Reference:** Van Westendorp methodology, conjoint analysis design principles

## Process
1. **Choose methodology** — Van Westendorp for price range discovery, Gabor-Granger for demand curves at specific points, conjoint for feature-price trade-offs. Often combine 2+.
2. **Design the instrument:**
   - **Van Westendorp:** Four questions — too cheap, bargain, getting expensive, too expensive. Applied to a clearly described product/feature.
   - **Gabor-Granger:** Sequential price points with purchase intent at each. Start high or low (randomize).
   - **Conjoint:** Feature bundles at different prices. Requires more respondents and statistical rigor.
3. **Build the interview guide** — Context setting, product description, WTP questions, follow-up probes (why that price?), demographic/firmographic questions.
4. **Define sample** — Size (n≥50 for Van Westendorp, n≥200 for conjoint), segment representation, screening criteria.
5. **Collect data** — Survey, interview, or hybrid. Ensure respondents understand the value proposition before answering.
6. **Analyze results:**
   - **Van Westendorp:** Plot cumulative distributions, find intersection points (PMC, IDP, OPP, PME).
   - **Gabor-Granger:** Plot demand curve, identify revenue-maximizing price.
   - **Conjoint:** Part-worth utilities, willingness to pay by feature.
7. **Synthesize** — Recommended price range, optimal price point, segment-level variations, confidence level.

## Output Format
```
## WTP Research: [Product/Feature]
**Methodology:** [Van Westendorp / Gabor-Granger / Conjoint]
**Sample:** [N respondents, segment breakdown] | **Confidence:** [High/Medium/Low]

### Research Design
- **Respondent criteria:** [Who qualifies]
- **Product description shown:** [Exact description used]
- **Methodology details:** [Approach and rationale]

### Interview/Survey Guide
[Key questions with exact wording]

#### Van Westendorp Questions:
1. "At what price would you consider [product] to be so inexpensive that you'd question its quality?"
2. "At what price would you consider [product] to be a bargain — great value for the money?"
3. "At what price would [product] start to seem expensive — you'd have to think carefully?"
4. "At what price would [product] be too expensive — you'd never consider purchasing it?"

### Findings
**Acceptable Price Range:** $[X] - $[Y]
**Optimal Price Point (OPP):** $[Z]
**Indifference Price Point (IDP):** $[A]

### Segment Variations
| Segment | Range | Optimal | Key Insight |
|---------|-------|---------|-------------|
| [Seg 1] | $X-$Y | $Z | [Insight] |
| [Seg 2] | $X-$Y | $Z | [Insight] |

### Recommendation
[Recommended price point with rationale and confidence level]

### Limitations & Next Steps
[What this research doesn't answer — and what to do next]
```

## Quality Standards
- Product/feature description shown to respondents is clear and consistent — WTP for a vague concept is meaningless.
- Sample is representative of target buyers, not just easy-to-reach respondents.
- Analysis correctly applies methodology — Van Westendorp intersections are correctly calculated, not eyeballed.
- Limitations are stated — WTP research is directional, not definitive. Stated WTP ≠ actual purchase behavior.
- **Anti-patterns:** Leading questions, insufficient sample size, mixing segments in analysis, treating stated WTP as exact pricing, not controlling for respondent's current spend anchoring.

## Framework References
- Van Westendorp Price Sensitivity Meter — four-question price range method
- Gabor-Granger — iterative purchase intent at price points
- Conjoint Analysis — feature-price trade-off measurement

## Formatting Guidelines
- Include exact question wording — WTP is highly sensitive to phrasing.
- Visualize Van Westendorp curves if possible (describe the chart).
- Segment-level table for variations.
- Keep methodology section concise; detailed protocol in appendix.

## Example
> **Finding (Van Westendorp):** For our API platform, the acceptable range is $49-$149/mo. The optimal price point where equal numbers find it cheap vs expensive is $89/mo. Enterprise segment's OPP is $129/mo vs SMB at $59/mo.
>
> **Recommendation:** Launch at $79/mo (just below OPP) to capture the broadest acceptance range while leaving room for a planned price increase after establishing value. Offer enterprise at $129/mo with additional features.
