# AI Ethics Review

## Purpose
Conduct a comprehensive ethics review for an AI-powered feature or system. Assess bias, fairness, transparency, privacy, and human oversight. Identify potential harms, design mitigations, and ensure the product meets responsible AI standards. This skill goes beyond compliance checklists to genuinely evaluate whether the AI system treats users fairly and earns their trust.

## Auto-Trigger Patterns
- "Ethics review for AI feature"
- "Bias assessment for…"
- "Responsible AI review"
- "Fairness analysis"
- "Is this AI feature ethical"
- "AI impact assessment"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Feature or system description** (required) — what the AI does, how it makes decisions
- **AI feature spec** (optional) — from `ai-feature-spec` output
- **Data sources** (required) — what data trains or informs the model
- **User population** (required) — who uses this, demographic breakdown
- **Company AI ethics guidelines** (optional) — internal responsible AI frameworks
- **Regulatory context** (optional) — applicable regulations (EU AI Act, etc.)

## Process
1. **Data bias analysis** — examine training data for representation gaps, historical biases, labeling quality
2. **Demographic impact assessment** — how does the system perform across different user groups (age, gender, race, disability, language, geography)
3. **Fairness evaluation** — which fairness definition applies (demographic parity, equalized odds, individual fairness) and how to measure
4. **Transparency assessment** — can users understand why a decision was made? Is AI involvement disclosed?
5. **Privacy review** — data collection minimization, consent, retention, anonymization
6. **Human oversight mechanisms** — when do humans intervene, appeal process, override capability
7. **Power and autonomy assessment** — does this feature increase or decrease user agency?
8. **Second-order effects** — societal impact, labor displacement, information integrity
9. **Mitigation design** — for each identified risk, propose concrete mitigations
10. **Monitoring plan** — ongoing fairness and bias monitoring post-launch

## Output Format
```markdown
# AI Ethics Review: [Feature/System Name]
**Reviewer**: … | **Date**: … | **Status**: [Pass / Conditional Pass / Fail]

## Executive Summary
[2-3 sentences: overall ethical assessment and key concerns]

## Data Bias Analysis
| Data Source | Representation Concern | Severity | Mitigation |
|-----------|----------------------|---------|------------|

## Demographic Impact Assessment
| User Group | Expected Impact | Concern | Testing Needed |
|-----------|----------------|---------|---------------|

## Fairness Evaluation
- **Fairness definition applied**: [Which definition and why]
- **Measurement approach**: …
- **Known gaps**: …

## Transparency Assessment
| Question | Answer | Adequate? |
|----------|--------|----------|
| Is AI involvement disclosed? | | |
| Can users understand decisions? | | |
| Are confidence levels shown? | | |
| Is the data source explained? | | |

## Privacy Review
| Data Element | Necessity | Consent | Retention | Risk |
|-------------|----------|---------|-----------|------|

## Human Oversight
- **Appeal mechanism**: [How users contest AI decisions]
- **Human review triggers**: [When humans must intervene]
- **Override capability**: [Can users opt out or override]

## Power & Autonomy Impact
- Does this feature **increase** or **decrease** user agency?
- Who benefits? Who could be disadvantaged?

## Second-Order Effects
| Effect | Likelihood | Severity | Mitigation |
|--------|-----------|---------|------------|

## Risk Summary
| Risk | Severity | Likelihood | Mitigation | Residual Risk |
|------|---------|-----------|------------|--------------|

## Recommendations
### Must-Fix Before Launch
### Should-Address (timeline)
### Monitor Post-Launch

## Monitoring Plan
| Metric | Frequency | Threshold | Action if Exceeded |
|--------|-----------|-----------|-------------------|

## Review Decision
- [ ] **Approved** — meets ethical standards
- [ ] **Conditional** — approved with required mitigations
- [ ] **Not approved** — significant concerns must be addressed
```

## Quality Standards
- Bias analysis examines actual data, not just theoretical risks
- Fairness definition is explicitly chosen and justified — not one-size-fits-all
- Transparency assessment considers real user comprehension, not just disclosure
- Appeal mechanisms are genuinely accessible, not buried
- **Anti-patterns**: Checkbox compliance without genuine analysis; assuming fairness means treating everyone identically; ignoring second-order effects; no post-launch monitoring

## Framework References
- Microsoft Responsible AI Standard
- Google AI Principles
- EU AI Act risk classification
- Fairness definitions (demographic parity, equalized odds, calibration)
- NIST AI Risk Management Framework

## Formatting Guidelines
- Traffic light severity indicators
- Executive summary with clear pass/conditional/fail recommendation
- Risk tables for structured assessment
- Must-fix vs should-address for prioritization

## Example
Content recommendation AI: "Data bias: training data over-represents English-language content from US users → non-English speakers receive lower-quality recommendations. Fairness concern: recommendation amplification creates filter bubbles for political content. Transparency gap: users don't know why content is recommended. Required mitigation: add 'Why this recommendation' explainer, audit recommendation diversity across user demographics monthly, add content diversity controls for users."
