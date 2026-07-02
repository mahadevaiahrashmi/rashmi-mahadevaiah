# AI Opportunity Scanner

## Purpose
Scan a product or product area for opportunities to apply AI/ML — automation, prediction, personalization, generation, and classification. Assess each opportunity against data availability, technical feasibility, user value, and competitive advantage. Produce a prioritized opportunity matrix that helps PMs identify where AI creates genuine user value versus where it's hype.

## Auto-Trigger Patterns
- "Where can we use AI in…"
- "AI opportunities for our product"
- "Scan for AI/ML use cases"
- "Where does AI make sense"
- "AI opportunity assessment"
- "Should we add AI to…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Product description** (required) — what the product does, user workflows, key features
- **User pain points** (optional) — known friction areas, feature requests, support tickets
- **Data assets** (optional) — what data the product collects, quality, volume, labeling status
- **Competitive landscape** (optional) — what competitors are doing with AI
- **Technical constraints** (optional) — infrastructure, team ML capability, budget

## Process
1. **Map user workflows** — break down the product into discrete user tasks and decision points
2. **Classify each task** by AI applicability:
   - **Automation**: repetitive, rule-based tasks that AI can fully handle
   - **Prediction**: decisions that benefit from pattern recognition (churn, conversion, risk)
   - **Personalization**: experiences that improve with user-specific tailoring
   - **Generation**: content creation that AI can draft or assist (text, images, code)
   - **Classification**: sorting, categorizing, or routing that is currently manual
3. **Assess each opportunity** on four dimensions:
   - Data availability: do we have the data? Quality? Volume?
   - Technical feasibility: model maturity, infrastructure readiness, latency requirements
   - User value: does this genuinely improve the user experience?
   - Competitive advantage: does this differentiate or is it table stakes?
4. **Score and prioritize** — impact vs effort matrix
5. **Identify quick wins** vs strategic bets
6. **Flag risks** — bias, hallucination, user trust, cost

## Output Format
```markdown
# AI Opportunity Scan: [Product Name]
**Date**: … | **Scanned by**: …

## Opportunity Matrix
| Opportunity | Type | Data Ready | Feasibility | User Value | Competitive | Score |
|------------|------|-----------|-------------|-----------|-------------|-------|
| [Feature] | Generation | 🟢 | 🟡 | 🟢 | 🟢 | 85 |
| [Feature] | Prediction | 🔴 | 🟡 | 🟡 | 🟡 | 45 |

## Top Opportunities (Detailed)

### 1. [Opportunity Name]
- **Type**: [Automation / Prediction / Personalization / Generation / Classification]
- **User problem solved**: …
- **AI approach**: [Model type, technique]
- **Data needs**: [What data, current state, gaps]
- **Feasibility**: [Technical assessment]
- **User value**: [Impact on experience]
- **Competitive context**: [Differentiation vs table stakes]
- **Risks**: [Bias, quality, trust, cost]
- **Estimated effort**: [T-shirt size]
- **Recommended next step**: …

### 2. [Opportunity Name]
…

## Quick Wins (High Value, Low Effort)
| Opportunity | Why Quick | Expected Impact |
|------------|----------|----------------|

## Strategic Bets (High Value, High Effort)
| Opportunity | Investment | Payoff Timeline | Risk |
|------------|-----------|----------------|------|

## Not Worth Pursuing (and Why)
| Opportunity | Why Not | Revisit When |
|------------|---------|-------------|

## Data Readiness Assessment
| Data Asset | Quality | Volume | Labeling | Gap |
|-----------|---------|--------|---------|-----|

## Recommended Roadmap
### Phase 1 (0-3 months): Quick Wins
### Phase 2 (3-6 months): Core AI Features
### Phase 3 (6-12 months): Strategic AI Capabilities
```

## Quality Standards
- Opportunities are grounded in real user problems, not technology-first thinking
- Assessment honestly evaluates data readiness — doesn't assume data exists
- "Not worth pursuing" section prevents AI-for-AI's-sake initiatives
- Risks include bias, hallucination, and user trust, not just technical risks
- **Anti-patterns**: Adding AI for marketing claims; ignoring data requirements; overestimating LLM reliability; not considering user trust implications

## Framework References
- AI readiness assessment frameworks
- Jobs-to-be-Done for identifying genuine automation opportunities
- Build vs buy analysis for AI capabilities
- Responsible AI considerations for each opportunity

## Formatting Guidelines
- Opportunity matrix at top for overview
- Detailed assessment per top opportunity
- Quick wins vs strategic bets separation
- Data readiness as separate assessment

## Example
For a project management tool: "Quick win: Auto-categorize incoming support tickets using classification (data: 50K labeled tickets, high feasibility, saves 10h/week). Strategic bet: Predictive project timeline based on historical velocity data (data: needs 6 months collection, high value if accurate). Not worth pursuing: AI-generated project plans from scratch (too low quality to be useful, erodes trust, users need agency in planning)."
