# Acquisition Assessment

## Purpose
Conduct a product-focused assessment of a potential acquisition target. Evaluates the target's technology, product, customers, team, and revenue quality. Assesses integration complexity, synergies, risks, and provides an integration plan outline from the product perspective.

## Auto-Trigger Patterns
- "Assess [company] as an acquisition target" / "acquisition analysis"
- "Should we acquire [company]?"
- "Product evaluation of [target] for M&A"
- "Acquisition assessment for [company]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Target company details, strategic rationale for acquisition, product information
- **Optional:** Financial data, team details, technology stack, customer data, due diligence findings
- **Reference:** `context/products/` for competitive context, M&A integration frameworks

## Process
1. **Define the strategic thesis** — Why acquire? Acqui-hire, technology, customers, market position, revenue? The thesis drives the evaluation criteria.
2. **Evaluate the product** — Product quality, market fit, user experience, technical architecture, scalability, technical debt.
3. **Assess the technology** — Stack compatibility, code quality, infrastructure, data architecture, security posture.
4. **Analyze the customer base** — Customer quality, segment overlap, retention rates, concentration risk, expansion potential.
5. **Evaluate the team** — Key talent, culture fit, retention risk, knowledge concentration, leadership quality.
6. **Assess revenue quality** — Recurring vs one-time, growth trajectory, churn, expansion, contract terms.
7. **Estimate integration complexity** — Product integration, technology migration, team integration, customer migration. Timeline and effort.
8. **Identify synergies** — Revenue synergies (cross-sell, up-sell), cost synergies (shared infrastructure, reduced redundancy), capability synergies.
9. **Flag risks** — Integration risks, customer churn risk, key person risk, technology risk, cultural risk.
10. **Outline integration plan** — Phases, priorities, milestones. What to integrate, what to keep separate, what to sunset.

## Output Format
```
## Acquisition Assessment: [Target Company]
**Strategic Thesis:** [Why acquire — in one sentence]
**Recommendation:** [Pursue / Don't Pursue / Pursue with Conditions]

### Product Evaluation
| Criterion | Rating | Assessment |
|-----------|--------|-----------|
| Product-market fit | [1-5] | [Evidence] |
| Technology quality | [1-5] | [Evidence] |
| User experience | [1-5] | [Evidence] |
| Scalability | [1-5] | [Evidence] |
| Technical debt | [1-5] | [Evidence] |

### Customer Analysis
- **Customer count:** [N]
- **Key segments:** [Who they serve]
- **Overlap with us:** [% overlap]
- **Retention:** [Rate]
- **Concentration risk:** [Top N customers = X% revenue]

### Team Assessment
- **Team size:** [N]
- **Key talent:** [Who's critical to retain]
- **Retention risk:** [Assessment]
- **Culture fit:** [Assessment]

### Revenue Quality
| Metric | Value | Assessment |
|--------|-------|-----------|
| ARR | $[X] | [Growing/Flat/Declining] |
| NRR | [X]% | [Healthy/Concerning] |
| Gross margin | [X]% | [Assessment] |

### Synergies
- **Revenue:** [Cross-sell, up-sell opportunities with estimates]
- **Cost:** [Shared infrastructure, reduced redundancy]
- **Capability:** [What we gain that we couldn't build]

### Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| [Risk 1] | High/Med/Low | [Mitigation] |

### Integration Plan Outline
**Phase 1 (0-3 months):** [Immediate actions — team, customers, quick wins]
**Phase 2 (3-6 months):** [Product integration — what merges, what stays]
**Phase 3 (6-12 months):** [Full integration — technology, sunset legacy]
```

## Quality Standards
- Strategic thesis is clear and testable — "acqui-hire" is a different evaluation than "market entry."
- Product evaluation is evidence-based, not just competitor envy.
- Customer concentration risk is assessed — one customer = 40% of revenue is a major risk.
- Integration plan is realistic about complexity and timeline.
- **Anti-patterns:** Acquiring for features you could build faster, ignoring cultural fit, underestimating integration complexity, no retention plan for key talent, overestimating synergies.

## Framework References
- M&A product due diligence frameworks
- Integration planning — 100-day plans
- Synergy estimation methods

## Formatting Guidelines
- Rating tables for product evaluation.
- Risk table with severity and mitigation.
- Integration plan phased with clear milestones.
- Keep to 4-6 pages with due diligence appendix.

## Example
> **Strategic Thesis:** Acquire Acme Analytics to add real-time analytics capability to our platform — a feature our top 20 customers have requested and would take 12+ months to build. Acme has strong PMF in the analytics space, a 40-person engineering team, and $3M ARR growing 80% YoY.
>
> **Key Risk — Team Retention:** Acme's CTO and 3 senior engineers hold most of the institutional knowledge. Without them, the technology value degrades significantly. Retention packages for these 4 individuals are critical to the deal structure.
