# Responsible AI Checklist

## Purpose
Provide a comprehensive responsible AI checklist covering fairness, accountability, transparency, privacy, security, human oversight, appeal mechanisms, and documentation. Include both pre-launch and post-launch checks. Ensure AI features meet ethical standards and regulatory requirements throughout their lifecycle — not just at launch.

## Auto-Trigger Patterns
- "Responsible AI checklist"
- "AI ethics checklist"
- "Pre-launch AI review"
- "AI compliance check"
- "Is our AI responsible"
- "AI governance checklist"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **AI feature or system** (required) — what is being assessed
- **AI feature spec** (optional) — from `ai-feature-spec` output
- **Risk level** (required) — low/medium/high based on impact on users
- **Regulatory context** (optional) — applicable regulations (EU AI Act, sector-specific)
- **Company AI policy** (optional) — internal responsible AI guidelines

## Process
1. **Classify risk level** — based on user impact, autonomy of AI decisions, vulnerability of affected populations
2. **Run pre-launch checklist** — all items must be assessed before shipping
3. **Run post-launch checklist** — ongoing monitoring requirements
4. **Document findings** — for each item, record status, evidence, and gaps
5. **Generate action items** — for any checklist items not met
6. **Establish review cadence** — how often to re-run the checklist

## Output Format
```markdown
# Responsible AI Checklist: [Feature/System Name]
**Risk Level**: [Low / Medium / High] | **Review Date**: …
**Reviewer**: … | **Next Review**: …

## Pre-Launch Checklist

### Fairness & Bias
- [ ] Training data analyzed for demographic representation gaps
- [ ] Model performance tested across relevant demographic groups
- [ ] Fairness metric defined and measured (demographic parity / equalized odds / other)
- [ ] Disparate impact assessment completed
- [ ] Bias mitigation measures implemented and documented
- [ ] Edge cases for underrepresented groups tested

### Transparency & Explainability
- [ ] Users informed that AI is involved in the experience
- [ ] Explanation of AI decision available to users (appropriate to context)
- [ ] AI limitations clearly communicated
- [ ] Data sources disclosed (where applicable)
- [ ] Model decision factors documented internally

### Privacy & Data Protection
- [ ] Data minimization applied — only necessary data collected
- [ ] User consent obtained for data use in AI
- [ ] Data anonymization/pseudonymization applied where required
- [ ] Data retention policy defined and implemented
- [ ] Cross-border data transfer compliance verified
- [ ] Right to erasure supported (user data can be removed from training)

### Security
- [ ] Model endpoints secured against unauthorized access
- [ ] Input validation prevents prompt injection and adversarial attacks
- [ ] Output filtering prevents harmful, offensive, or private data leakage
- [ ] Model artifacts stored securely
- [ ] Access controls for model management documented

### Human Oversight
- [ ] Human review process defined for high-stakes decisions
- [ ] Override mechanism available to users
- [ ] Escalation path defined for contested AI decisions
- [ ] Monitoring team assigned for post-launch oversight

### Accountability
- [ ] Clear ownership for AI feature decisions documented
- [ ] Incident response plan for AI failures defined
- [ ] Liability and accountability chain documented
- [ ] Decision audit trail maintained

### User Rights & Appeals
- [ ] Users can contest AI decisions
- [ ] Appeal process is accessible and timely
- [ ] Users can opt out of AI-powered features
- [ ] Users can request human review of AI decisions

### Documentation
- [ ] Model card or system documentation completed
- [ ] Training data documentation (datasheet) completed
- [ ] Evaluation results documented
- [ ] Known limitations documented
- [ ] Deployment context and intended use documented

## Post-Launch Checklist

### Ongoing Monitoring
- [ ] Model performance metrics monitored continuously
- [ ] Fairness metrics tracked across demographic groups
- [ ] Data drift detection in place
- [ ] User feedback collected and analyzed
- [ ] Incident reports tracked and reviewed

### Periodic Reviews
- [ ] Quarterly bias audit scheduled
- [ ] Annual comprehensive responsible AI review
- [ ] Regulatory compliance review (when regulations change)
- [ ] Stakeholder feedback incorporated

### Continuous Improvement
- [ ] Feedback loop from user reports to model improvement
- [ ] Red team testing scheduled periodically
- [ ] Model retraining triggered by performance degradation
- [ ] Documentation updated with each significant change

## Summary
| Category | Pre-Launch Status | Post-Launch Status |
|----------|------------------|-------------------|
| Fairness | ✅/⚠️/❌ | Monitoring active? |
| Transparency | | |
| Privacy | | |
| Security | | |
| Human Oversight | | |
| Accountability | | |
| User Rights | | |
| Documentation | | |

## Action Items
| Item | Priority | Owner | Deadline |
|------|---------|-------|---------|

## Approval
- [ ] Product owner sign-off
- [ ] Engineering lead sign-off
- [ ] Legal/compliance review (if high-risk)
- [ ] Ethics board review (if applicable)
```

## Quality Standards
- Checklist is adapted to risk level — low-risk features have lighter requirements
- Each item has clear pass/fail criteria, not subjective assessment
- Post-launch monitoring is not optional — ongoing checks are required
- Action items from gaps have owners and deadlines
- **Anti-patterns**: One-time checklist without ongoing review; treating all AI features as same risk; checking boxes without genuine assessment; no appeal mechanism for users

## Framework References
- NIST AI Risk Management Framework
- EU AI Act requirements (by risk tier)
- Microsoft Responsible AI Standard
- Google AI Principles
- IEEE Ethically Aligned Design

## Formatting Guidelines
- Checkbox format for practical use (check off items)
- Grouped by category with clear pre/post-launch distinction
- Summary table for executive reporting
- Action items with accountability

## Example
High-risk AI credit scoring: "Pre-launch: bias testing across race, gender, age completed — 3% disparity found in approval rates for age >60, mitigation implemented (age-blind model variant). Transparency: denial reasons provided in plain language. Appeal: users can request human review within 30 days, average review time 5 business days. Post-launch: monthly fairness audit, quarterly red team testing, annual comprehensive review."
