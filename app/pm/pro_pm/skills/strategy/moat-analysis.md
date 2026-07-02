# Moat Analysis

## Purpose
Assess competitive moats using Hamilton Helmer's 7 Powers framework: network effects, switching costs, economies of scale, brand, counter-positioning, cornered resource, and process power. Evaluates current moat strength, identifies vulnerabilities, and recommends strategies to deepen defensibility.

## Auto-Trigger Patterns
- "Analyze our competitive moat" / "moat analysis"
- "What's our defensibility?" / "competitive advantages"
- "How defensible is our position?"
- "7 Powers analysis for [product]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/company context, competitive landscape, key differentiators, customer data
- **Optional:** Network effects data, churn/switching data, brand perception data, cost structure
- **Reference:** Hamilton Helmer's 7 Powers, `context/products/` for competitive data

## Process
1. **Assess each of the 7 Powers:**
   - **Network Effects:** Does the product become more valuable as more people use it? Direct (user-to-user) or indirect (e.g., marketplace)?
   - **Switching Costs:** How hard is it for customers to leave? Data lock-in, workflow lock-in, integration lock-in, contractual?
   - **Economies of Scale:** Do we have cost advantages that grow with scale? Distribution, infrastructure, R&D amortization?
   - **Brand:** Is there brand-driven willingness to pay or preference? Recognition, trust, association?
   - **Counter-Positioning:** Are we doing something incumbents can't copy without damaging their existing business?
   - **Cornered Resource:** Do we have exclusive access to something valuable? Data, talent, technology, relationships?
   - **Process Power:** Do we have organizational capabilities that are hard to replicate? Culture, knowledge, operational excellence?
2. **Rate current strength** — For each power: None, Emerging, Moderate, Strong. Provide evidence.
3. **Identify vulnerabilities** — Where are moats weakest? Where could competitors attack?
4. **Recommend strengthening strategies** — Specific actions to deepen each relevant moat.
5. **Prioritize** — Which moats matter most for your market and stage? Focus investment.

## Output Format
```
## Moat Analysis: [Product/Company]

### 7 Powers Assessment
| Power | Strength | Evidence | Vulnerability |
|-------|----------|----------|---------------|
| Network Effects | None/Emerging/Moderate/Strong | [Evidence] | [Weakness] |
| Switching Costs | ... | ... | ... |
| Scale Economies | ... | ... | ... |
| Brand | ... | ... | ... |
| Counter-Positioning | ... | ... | ... |
| Cornered Resource | ... | ... | ... |
| Process Power | ... | ... | ... |

### Strongest Moats
[Which powers are your primary defensibility — and evidence]

### Key Vulnerabilities
[Where you're most exposed — specific competitive threats]

### Strengthening Strategies
1. **[Power to strengthen]:** [Specific actions, investment, timeline]
2. **[Power to strengthen]:** [Specific actions, investment, timeline]

### Moat Trajectory
[Are moats deepening or eroding? What's the trend?]
```

## Quality Standards
- Each power is assessed with specific evidence, not aspirational claims. "We have network effects" requires data showing value increase with scale.
- Vulnerabilities are honest — every company has moat gaps. Pretending otherwise is dangerous.
- Strengthening strategies are actionable and connected to product/business decisions.
- Assessment acknowledges that not all 7 Powers are relevant — most companies have 1-3 meaningful moats.
- **Anti-patterns:** Claiming moats without evidence, confusing features with moats, ignoring vulnerabilities, trying to build all 7 powers simultaneously, mistaking first-mover advantage for a moat (it's not).

## Framework References
- 7 Powers (Hamilton Helmer) — strategic power framework
- Competitive advantage (Michael Porter) — cost vs differentiation
- Network effects taxonomy — direct, indirect, data, platform

## Formatting Guidelines
- Summary table with all 7 Powers for quick assessment.
- Separate detailed sections for strongest moats and key vulnerabilities.
- Use evidence (data, quotes, examples) not assertions.
- Keep to 3-4 pages.

## Example
> **Strongest Moat — Switching Costs (Strong):** Average customer has 14 active integrations through our platform. Migration cost estimated at 3-4 engineering weeks plus business disruption. This is evidenced by our 2% annual gross churn and competitor win-back rate of <5%.
>
> **Key Vulnerability — Brand (Emerging):** In unaided recall surveys, only 18% of target buyers name us. Competitor X has 52% aided recall. Our product wins in head-to-head evaluations (78% win rate in competitive deals) but we lose when we're not in the consideration set.
>
> **Strengthening Strategy:** Invest in developer community and content marketing to build brand in our core segment. Target: 40% unaided recall within 12 months.
