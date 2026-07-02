# Partnership Evaluation

## Purpose
Evaluate a potential partnership across strategic fit, value exchange, integration complexity, competitive implications, terms framework, success metrics, and exit criteria. Provides a structured go/no-go recommendation for pursuing the partnership.

## Auto-Trigger Patterns
- "Evaluate a partnership with [company]" / "partnership analysis"
- "Should we partner with [company]?"
- "Partnership assessment for [company]"
- "Evaluate the [company] partnership opportunity"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Potential partner details, partnership type (integration, distribution, co-development, white-label), strategic rationale
- **Optional:** Prior partnership history, competitive implications, financial terms, technical assessment
- **Reference:** `context/people/` for partner contacts, `context/products/` for competitive context

## Process
1. **Define partnership type** — Integration, distribution, co-development, white-label, reseller, technology. Each has different value dynamics.
2. **Assess strategic fit** — Does this partnership advance your strategy? Does it align with theirs? Is there genuine mutual benefit or is one side extracting more?
3. **Map value exchange** — What does each side contribute? What does each side receive? Is the exchange balanced?
4. **Evaluate integration complexity** — Technical effort, timeline, ongoing maintenance, security implications, support burden.
5. **Analyze competitive implications** — Does this partnership limit your competitive options? Does it strengthen a potential competitor? Could it be exclusive?
6. **Framework terms** — Revenue share, exclusivity, duration, IP ownership, data access, termination conditions.
7. **Define success metrics** — What does success look like for both sides? How will you measure it? When do you evaluate?
8. **Set exit criteria** — Under what conditions would you end the partnership? How do you unwind?

## Output Format
```
## Partnership Evaluation: [Partner Name]
**Type:** [Integration/Distribution/Co-Development/etc.]
**Recommendation:** [Pursue / Don't Pursue / Pursue with Conditions]

### Strategic Fit
| Criterion | Assessment | Evidence |
|-----------|-----------|----------|
| Aligns with our strategy | 🟢/🟡/🔴 | [Why] |
| Aligns with their strategy | 🟢/🟡/🔴 | [Why] |
| Mutual benefit | 🟢/🟡/🔴 | [Value exchange] |
| No competitive conflict | 🟢/🟡/🔴 | [Assessment] |

### Value Exchange
| We Contribute | They Contribute |
|--------------|----------------|
| [What we bring] | [What they bring] |
| [What we bring] | [What they bring] |

| We Receive | They Receive |
|-----------|-------------|
| [What we get] | [What they get] |

### Integration Complexity
- **Technical effort:** [Estimate]
- **Timeline:** [Months]
- **Ongoing maintenance:** [Effort level]
- **Security considerations:** [Assessment]

### Competitive Implications
[How this partnership affects competitive dynamics — specific scenarios]

### Proposed Terms Framework
| Term | Our Position | Their Likely Position |
|------|-------------|---------------------|
| Revenue share | [X%] | [Y%] |
| Exclusivity | [Position] | [Position] |
| Duration | [Proposed] | [Expected] |
| Data access | [Position] | [Position] |

### Success Metrics
| Metric | 6-Month Target | 12-Month Target |
|--------|----------------|-----------------|
| [Metric 1] | [Target] | [Target] |

### Exit Criteria
- [Condition that would end the partnership]
- [Minimum termination notice]
- [Unwinding process]
```

## Quality Standards
- Value exchange is mapped explicitly — asymmetric partnerships breed resentment.
- Competitive implications are thoroughly analyzed — not just current but future competitive dynamics.
- Exit criteria are defined before entering — it's much harder to define them later.
- Integration complexity is honestly assessed — partnerships often fail on integration, not strategy.
- **Anti-patterns:** Pursuing partnerships for logo value without strategic substance, ignoring competitive conflicts, not defining exit criteria, underestimating integration effort, unbalanced value exchange.

## Framework References
- Partnership value exchange mapping
- RACI for joint initiatives
- Strategic alliance evaluation frameworks

## Formatting Guidelines
- Strategic fit table with RAG assessment.
- Value exchange in a clear two-column format.
- Terms framework as a negotiation reference.
- Keep to 3-4 pages.

## Example
> **Value Exchange:** We contribute API access and 10K active customers. They contribute distribution through their marketplace (100K+ users) and co-marketing budget ($50K). Both sides receive: new customer acquisition, product stickiness, and co-marketing exposure.
>
> **Competitive Risk:** Partner is also in discussions with Competitor X. If we don't pursue, they'll likely partner with X, giving X access to their distribution. This is a defensive partnership as much as an offensive one.
>
> **Exit Criteria:** If joint customers <50 after 6 months, or if partner enters our core market as a competitor, we trigger the 90-day termination clause and wind down the integration.
