# AI Build vs Buy

## Purpose
Evaluate whether to build AI capabilities in-house or use a vendor/API. Compare model options (open-source vs commercial), infrastructure needs, team capability, cost projections, quality benchmarks, latency requirements, data privacy implications, and vendor lock-in risk. Produce a clear recommendation with conditions for revisiting.

## Auto-Trigger Patterns
- "Should we build or buy AI for…"
- "AI build vs buy"
- "Use OpenAI or build our own"
- "Evaluate AI vendors for…"
- "Open source vs commercial model"
- "Host our own model or use API"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **AI capability needed** (required) — what the AI should do
- **Quality requirements** (required) — accuracy, latency, consistency thresholds
- **Team capabilities** (required) — ML engineering capacity, infrastructure expertise
- **Data context** (required) — data sensitivity, volume, residency requirements
- **Budget** (optional) — available budget for build or buy
- **Timeline** (required) — when the capability is needed

## Process
1. **Define capability requirements** — functional needs, quality bar, latency, scale
2. **Assess build option**:
   - Model selection (open-source options: Llama, Mistral, etc.)
   - Infrastructure needs (GPU, hosting, monitoring)
   - Team investment (ML engineers, training time)
   - Timeline to production
   - Total cost (infra + people + maintenance)
3. **Assess buy/API option**:
   - Vendor options (OpenAI, Anthropic, Google, specialized vendors)
   - API capabilities and limitations
   - Cost at projected scale
   - Vendor reliability and SLA
   - Data privacy and processing terms
4. **Compare on key dimensions**:
   - Cost (short-term and long-term at different scales)
   - Quality and customizability
   - Time-to-market
   - Data privacy and control
   - Vendor lock-in risk
   - Maintenance burden
5. **Generate recommendation** with conditions for revisiting

## Output Format
```markdown
# AI Build vs Buy Analysis: [Capability]
**Date**: … | **Decision needed by**: …

## Capability Requirements
| Requirement | Threshold | Notes |
|-------------|----------|-------|

## Build Assessment
### Model Options
| Model | License | Quality | Infra Needs | Fine-Tuning |
|-------|---------|---------|------------|-------------|

### Infrastructure Requirements
- Compute: …
- Storage: …
- Monitoring: …
- Estimated setup: [timeline]

### Team Investment
- Required roles: …
- Ramp-up time: …
- Ongoing maintenance: …

### Build Cost Projection
| Component | Year 1 | Year 2 | Year 3 |
|-----------|--------|--------|--------|

## Buy Assessment
### Vendor Options
| Vendor | Capability Match | Pricing Model | SLA | Data Terms |
|--------|-----------------|--------------|-----|-----------|

### API Limitations
- [Rate limits, customization constraints, feature gaps]

### Buy Cost Projection
| Volume | Monthly Cost | Annual Cost | Per-Unit |
|--------|-------------|------------|---------|

## Comparison Matrix
| Dimension | Build | Buy | Winner |
|-----------|-------|-----|--------|
| Time-to-market | [months] | [weeks] | Buy |
| Year 1 cost | $X | $X | [depends] |
| Year 3 cost | $X | $X | [depends] |
| Quality/customization | [assessment] | [assessment] | Build |
| Data privacy | Full control | Vendor dependent | Build |
| Maintenance burden | High | Low | Buy |
| Lock-in risk | None | Medium-High | Build |

## Crossover Analysis
- At [X requests/month], build becomes cheaper than buy
- Break-even timeline: [X months]

## Data Privacy & Compliance
| Concern | Build Impact | Buy Impact |
|---------|-------------|------------|

## Recommendation
**Recommended approach**: [Build / Buy / Hybrid]
**Rationale**: …
**Conditions for revisiting**: …

## Hybrid Option (if applicable)
- Start with [buy] for speed to market
- Plan migration to [build] when [conditions met]
- Transition timeline: …

## Risk Assessment
| Risk | Build | Buy | Mitigation |
|------|-------|-----|------------|
```

## Quality Standards
- Cost projections include realistic scaling, not just current volume
- Data privacy assessment is thorough — covers residency, processing terms, and compliance
- Crossover analysis shows when economics shift between build and buy
- Hybrid option is considered when appropriate, not just binary choice
- **Anti-patterns**: Comparing build cost with current volume only; ignoring maintenance burden of build; not reading vendor data processing terms; assuming build quality equals vendor quality

## Framework References
- Total Cost of Ownership (TCO) analysis for AI systems
- ML maturity model for team capability assessment
- Data sovereignty and privacy frameworks
- Vendor evaluation methodology

## Formatting Guidelines
- Side-by-side comparison matrix as primary decision tool
- Cost projections over 3 years for trend visibility
- Crossover analysis for economic break-even point
- Hybrid option when neither pure build nor pure buy is optimal

## Example
For an LLM-powered customer support bot: "Buy (Claude API): $2K/month at current volume, production-ready in 2 weeks, excellent quality. Build (Llama fine-tuned): $5K/month infra + 2 ML engineer-months to set up, production in 3 months, quality requires fine-tuning investment. Crossover: at 500K requests/month, build becomes cheaper. Recommendation: Buy now for speed, begin fine-tuning on proprietary data in parallel, plan migration to self-hosted at 200K requests/month."
