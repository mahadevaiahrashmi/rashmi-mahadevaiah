# Risk Assessment

## Purpose
Systematically identify project and product risks — technical, market, organizational, and resource — assess their probability and impact, and develop mitigation and contingency plans. A good risk assessment doesn't prevent problems; it ensures you're not surprised by them.

## Auto-Trigger Patterns
- "risk assessment for [project]"
- "what could go wrong with [initiative]"
- "identify risks for [feature]"
- "risk register for [project]"
- "what are the risks"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Initiative description | Yes | User prompt |
| Technical approach | Optional | `context/products/*/tech-context.md` |
| Market context | Optional | `context/products/` |
| Team context | Optional | `context/team/team.md` |
| Dependencies | Optional | User prompt |
| Historical project data | Optional | User prompt |

## Process
1. **Brainstorm risks by category** — Technical, market, organizational, resource, legal/compliance, external.
2. **Assess probability** — High (>60%), Medium (20-60%), Low (<20%). Use evidence, not gut.
3. **Assess impact** — Critical (project failure), High (major delay/degradation), Medium (manageable), Low (minor).
4. **Calculate risk score** — Probability × Impact. Plot on risk matrix.
5. **Assess detection difficulty** — How easy is it to know when this risk materializes? Early detection = easier mitigation.
6. **Develop mitigations** — For high/critical risks: what can you do NOW to reduce probability or impact?
7. **Develop contingency plans** — If the risk materializes despite mitigation, what's the response plan?
8. **Assign owners** — Each risk has an owner who monitors and acts.
9. **Set triggers** — Observable conditions that indicate the risk is materializing.
10. **Quality-check** — All categories covered, mitigations are actionable, no orphan risks without owners.

## Output Format
```
## Risk Assessment: [Initiative Name]
**Date:** [Date] | **Assessor:** [Name]
**Overall Risk Level:** [High/Medium/Low]

### Risk Matrix
|  | Low Impact | Medium Impact | High Impact | Critical Impact |
|---|-----------|---------------|-------------|-----------------|
| **High Prob** | | | | |
| **Med Prob** | | | | |
| **Low Prob** | | | | |

### Risk Register
| # | Risk | Category | Prob | Impact | Score | Detection | Owner |
|---|------|----------|------|--------|-------|-----------|-------|

### Mitigation Plans
| Risk # | Mitigation Strategy | Action Items | Timeline |
|--------|-------------------|-------------|----------|

### Contingency Plans
| Risk # | Trigger Condition | Response Plan | Decision Maker |
|--------|------------------|---------------|----------------|

### Risk Summary by Category
| Category | Count | High/Critical | Key Concern |
|----------|-------|---------------|-------------|

### Monitoring Plan
| Risk # | What to Monitor | Frequency | Owner |
|--------|----------------|-----------|-------|
```

## Quality Standards
- Risks span all categories — not just technical risks.
- Probability and impact assessments cite evidence or rationale.
- Every high/critical risk has both a mitigation AND a contingency plan.
- Trigger conditions are specific and observable.
- Risk register is a living document with review cadence.

**Anti-patterns:** Only technical risks, no contingency plans, risk owner = "team" (no one owns it), vague triggers, risks without mitigations.

## Framework References
- **Risk Matrix** — Probability × Impact visualization for prioritization.
- **Pre-mortem** — "Imagine the project failed. Why?" exercise for risk identification.
- **FMEA** — Failure Mode and Effects Analysis for systematic risk discovery.

## Formatting Guidelines
- Use the risk matrix for visual impact.
- Number risks for cross-referencing between register, mitigations, and contingencies.
- Bold high/critical risks in the register.
- Include a monitoring plan with review frequency.

## Example
**Risk:** "Key engineer (sole expert on payment integration) leaves mid-project. Probability: Medium. Impact: Critical. Detection: Low (may not have warning)."

**Mitigation:** "Cross-train second engineer on payment codebase within first sprint. Pair programming on critical components."

**Contingency:** "If triggered, pause payment work for 2-week knowledge transfer to remaining engineer. Extend timeline by 3 weeks."
