# Business Case

## Purpose
Creates a structured investment justification document that sizes the opportunity, proposes a solution approach, estimates costs, projects ROI, assesses risks, outlines the implementation plan, and makes a clear decision request. Designed to get investment approval from leadership or finance.

## Auto-Trigger Patterns
- "Write a business case for [initiative]"
- "Build an investment justification for [project]"
- "I need to make the financial case for [feature/product]"
- "Help me get budget approval for [initiative]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Initiative description, estimated investment (cost), expected benefits (revenue, savings, risk reduction), timeline
- **Optional:** Market data, competitive urgency, customer demand signals, alternative approaches, comparable investments
- **Reference files:** product-brief.md, strategy-document.md, roi-calculator-spec.md

## Process
1. **Size the opportunity** — Quantify the business impact using multiple methods (bottom-up, top-down, comparable).
2. **Define the approach** — What we'll build/buy/partner, and why this approach vs alternatives.
3. **Model costs honestly** — Include all costs: people, infrastructure, opportunity cost, ongoing maintenance.
4. **Project returns** — Conservative, base, and optimistic scenarios. Show payback period and NPV.
5. **Assess risks** — What could go wrong, probability, impact, and mitigation.
6. **Make the ask** — Specific decision request with timeline and approval needed.

## Output Format
```
# Business Case: [Initiative Name]

## Executive Summary
[One-paragraph: opportunity, approach, investment, expected return, decision needed]

## 1. Opportunity (1-2 pages)
Problem statement. Market sizing. Customer demand evidence.
Revenue opportunity or cost savings quantified.

## 2. Proposed Solution (1 page)
Approach. Key capabilities. Why this approach vs alternatives.
Build vs buy analysis if applicable.

## 3. Investment Required (0.5-1 page)
| Cost Category | Year 1 | Year 2 | Year 3 |
| Headcount | | | |
| Infrastructure | | | |
| Other | | | |
| Total | | | |

## 4. Expected Returns (1 page)
| Scenario | Revenue Impact | Cost Savings | Payback Period | 3-Year NPV |
| Conservative | | | | |
| Base | | | | |
| Optimistic | | | | |
Key assumptions listed.

## 5. Risk Assessment (0.5 page)
Risk | Probability | Impact | Mitigation

## 6. Implementation Plan (0.5 page)
Phases, milestones, decision gates.

## 7. Decision Request
Specific ask. Approval needed by [date]. Decision options.
```

## Quality Standards
- Financial projections use conservative base case with clearly stated assumptions.
- All costs are included, including opportunity costs and ongoing maintenance.
- Multiple scenarios (not just the optimistic one) are modeled.
- **Anti-patterns:** Only showing the optimistic case, hiding costs, vague ROI ("significant improvement"), no risk assessment.

## Audience
Decision-makers who control budget: VP/C-level, finance, and investment committees. They evaluate many proposals and appreciate intellectual honesty, data-backed projections, and clear asks. They'll fund things with honest risk assessment over things that seem too good to be true.

## Formatting Guidelines
- 3-6 pages total. Tables for financial data, prose for narrative.
- Executive summary is self-contained—decision can be made from it alone.
- Assumptions section is explicit and easily challengeable.
- Include a one-page summary version for quick review.

## Example
**Executive Summary:** "We propose a $1.2M investment over 18 months to build an automated compliance engine. Based on 47 customer interviews showing compliance is the #1 purchase blocker, we project $3.8M in incremental ARR within 24 months (base case), with payback at month 14. Key risk: regulatory landscape changes—mitigated through modular architecture and compliance advisory partnership."
