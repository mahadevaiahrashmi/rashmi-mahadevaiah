# Technology Assessment

## Purpose
Evaluate emerging technologies for product relevance — assessing readiness, market maturity, competitive adoption, customer demand, and build/buy/partner options. Technology assessments prevent both premature adoption of immature tech and late entry that cedes competitive advantage.

## Auto-Trigger Patterns
- "assess [technology] for our product"
- "technology assessment for [tech]"
- "should we adopt [technology]"
- "build vs buy vs partner for [capability]"
- "technology readiness for [tech]"
- "evaluate [technology] maturity"
- "emerging tech analysis"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Technology to assess | Yes | User prompt |
| Product context and strategy | Recommended | `context/products/*/overview.md` |
| Competitive landscape | Optional | `context/products/*/competitors.md` |
| Customer demand signals | Optional | Research outputs |
| Technical constraints | Optional | User prompt |

## Process
1. **Define the technology** — Clearly describe the technology, distinguish it from adjacent/overlapping technologies, and identify the specific capability it enables.
2. **Assess technology readiness:**
   - Maturity level: Research → Prototype → Early Adoption → Growth → Mature.
   - Key milestones achieved and remaining.
   - Known limitations, failure modes, and scaling constraints.
3. **Evaluate market maturity:**
   - Where on the technology adoption lifecycle? (Innovators → Early Adopters → Early Majority → Late Majority → Laggards)
   - Ecosystem maturity: tooling, talent, community, standards.
   - Vendor landscape: who is providing solutions? How stable?
4. **Analyze competitive adoption** — Which competitors have adopted? At what level (experiment, pilot, production)? What results have they reported?
5. **Assess customer demand:**
   - Are customers asking for this? How many? Which segments?
   - Would this solve a known customer pain point?
   - Is this a table-stakes expectation or a differentiator?
6. **Evaluate build/buy/partner options:**
   - Build: Technical feasibility, team capability, timeline, investment.
   - Buy: Available vendors, integration complexity, cost, lock-in risk.
   - Partner: Partnership models, strategic fit, dependency risk.
7. **Risk assessment** — Technical risk, market risk, execution risk, dependency risk, security/compliance risk.
8. **Recommend** — Adopt now, plan adoption, pilot/experiment, monitor, or pass. Include timing, investment level, and success criteria.

## Output Format
```
## Technology Assessment: [Technology Name]

### Technology Overview
**What it is:** ...
**What it enables:** ...
**What it's not:** ...

### Readiness Assessment
| Dimension | Rating | Evidence |
|-----------|--------|----------|
| Technology maturity | [Research → Mature] | ... |
| Ecosystem maturity | [Nascent → Established] | ... |
| Talent availability | [Scarce → Abundant] | ... |
| Standards status | [None → Formal standards] | ... |

### Adoption Lifecycle Position
```
[Innovators] → [Early Adopters] → [Early Majority] → [Late Majority]
                    ▲ We are here
```

### Competitive Landscape
| Competitor | Adoption Level | Implementation | Results |
|-----------|---------------|----------------|---------|
| Comp A | Production | Full integration | ... |
| Comp B | Pilot | Limited | ... |

### Customer Demand
| Signal | Strength | Source |
|--------|----------|--------|
| Direct requests | ... | ... |
| Pain point alignment | ... | ... |
| Competitive pressure | ... | ... |

### Build / Buy / Partner Analysis
| Option | Pros | Cons | Timeline | Cost |
|--------|------|------|----------|------|
| Build | ... | ... | ... | ... |
| Buy | ... | ... | ... | ... |
| Partner | ... | ... | ... | ... |

### Risk Assessment
| Risk Type | Level | Mitigation |
|-----------|-------|------------|
| Technical | ... | ... |
| Market | ... | ... |
| Execution | ... | ... |
| Security/Compliance | ... | ... |

### Recommendation
**Verdict:** [Adopt now / Plan adoption / Pilot / Monitor / Pass]
**Rationale:** ...
**Timeline:** ...
**Investment:** ...
**Success criteria:** ...
**Review date:** ...
```

## Quality Standards
- Assessment distinguishes between technology hype and actual readiness.
- Competitive analysis is factual — based on public evidence, not assumptions.
- Build/buy/partner analysis includes realistic timelines and costs.
- Risks are specific and have mitigation strategies.
- Recommendation includes clear success criteria and a review date.

**Anti-patterns:** Hype-driven adoption ("everyone's doing AI"), ignoring ecosystem maturity, underestimating integration complexity, treating build/buy as binary (ignoring hybrid approaches), assessment without a decision framework.

## Framework References
- **Technology Adoption Lifecycle** — Rogers' diffusion of innovations curve.
- **Technology Readiness Levels** — Maturity assessment from research to production.
- **Build/Buy/Partner Framework** — Strategic evaluation of acquisition approaches.

## Formatting Guidelines
- Readiness table with clear ratings and evidence.
- Adoption lifecycle visual with "you are here" marker.
- Build/buy/partner as a comparison table.
- Risk assessment with severity levels and mitigations.
- Bold the recommendation verdict.

## Example
**Scenario:** Assessing vector databases for a product search feature.

**Readiness:** Early Majority — multiple production-grade options (Pinecone, Weaviate, Qdrant), growing talent pool, no formal standards but strong community conventions.
**Competitive adoption:** 3 of 5 direct competitors have shipped vector search in the past 12 months.
**Recommendation:** Adopt now via Buy (managed vector DB service). Customer demand is strong (cited in 40% of enterprise RFPs), competitors are ahead, and managed services reduce operational risk. Pilot with 2 enterprise customers in Q3; production rollout Q4 if latency SLAs are met.
