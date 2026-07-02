# AI Feature Spec

## Purpose
Spec an AI-powered feature with the rigor it deserves — beyond standard PRDs. Cover the AI-specific dimensions: model approach, data requirements, UX design for AI uncertainty, evaluation criteria, failure modes and fallbacks, bias considerations, cost estimation, and human oversight mechanisms. Produce a spec that engineering, design, data science, and responsible AI reviewers can all work from.

## Auto-Trigger Patterns
- "Spec an AI feature"
- "AI feature PRD"
- "Write a spec for [AI-powered capability]"
- "AI product requirements"
- "Design an ML feature"
- "Spec for [LLM/ML]-powered…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Feature concept** (required) — what the AI-powered feature should do
- **User problem** (required) — what user need this addresses
- **AI opportunity assessment** (optional) — from `ai-opportunity-scanner` output
- **Data assets** (optional) — available data for training/inference
- **Technical constraints** (optional) — latency, cost, infrastructure
- **Responsible AI requirements** (optional) — company AI ethics guidelines

## Process
1. **Define the user problem** — who needs this, when, why AI is the right approach
2. **Specify the AI approach**:
   - Model type (LLM, classification, regression, recommendation, etc.)
   - Build vs buy decision for model
   - Data requirements (training, fine-tuning, RAG, prompting)
3. **Design the UX**:
   - How AI output surfaces to the user
   - Confidence indicators and transparency
   - User control and override mechanisms
   - Progressive disclosure of AI involvement
4. **Define evaluation criteria**:
   - Model metrics (precision, recall, accuracy)
   - UX metrics (task completion, time saved, satisfaction)
   - Business metrics (conversion, retention, revenue impact)
5. **Map failure modes** — what happens when the AI is wrong, and design fallbacks
6. **Assess bias and fairness** — who could be harmed, how to detect and mitigate
7. **Estimate costs** — inference cost per request, training cost, infrastructure
8. **Define human oversight** — when humans review, escalation triggers

## Output Format
```markdown
# AI Feature Spec: [Feature Name]
**Status**: Draft | **Author**: … | **Last updated**: …

## Problem Statement
**User**: … | **Need**: … | **Why AI**: …

## Feature Description
[Clear description of what the feature does from the user's perspective]

## AI Approach
- **Model type**: [LLM / Classification / Regression / Recommendation / etc.]
- **Build vs buy**: [Rationale]
- **Data sources**: [Training data, inference data, context data]
- **Data requirements**: [Volume, quality, labeling, freshness]
- **Inference pipeline**: [Request → processing → response flow]

## UX Design
### How AI Output Appears
### Confidence & Transparency
- How the user knows this is AI-generated
- Confidence indicators (when applicable)
### User Control
- Override mechanism
- Feedback mechanism (thumbs up/down, correction)
- Opt-out option
### Edge Cases
| Scenario | UX Behavior |
|----------|------------|

## Evaluation Criteria
### Model Performance
| Metric | Target | Minimum Viable | Measurement |
|--------|--------|----------------|------------|

### UX Metrics
| Metric | Target | Measurement |
|--------|--------|------------|

### Business Metrics
| Metric | Hypothesis | Measurement |
|--------|-----------|------------|

## Failure Modes & Fallbacks
| Failure Mode | Likelihood | User Impact | Fallback | Detection |
|-------------|-----------|-------------|---------|-----------|
| Wrong output | Medium | High | Manual path | Feedback + monitoring |
| Hallucination | Medium | High | Disclaimer + sources | Automated checks |
| High latency | Low | Medium | Async + loading state | Latency monitoring |

## Bias & Fairness Assessment
- **Who could be harmed**: …
- **Data bias risks**: …
- **Mitigation approach**: …
- **Monitoring plan**: …

## Cost Estimation
| Component | Per-Request | Monthly (estimated) | Scaling Factors |
|-----------|-----------|-------------------|----------------|

## Human Oversight
- **Review triggers**: [When humans must review AI output]
- **Escalation path**: …
- **Audit frequency**: …

## Launch Plan
### Phase 1: Internal Testing
### Phase 2: Beta (% rollout)
### Phase 3: GA

## Open Questions
- [ ] [Unresolved decisions]

## Appendix: Prompt/Model Configuration (if LLM)
- System prompt design principles
- Few-shot examples approach
- Guardrails and safety filters
```

## Quality Standards
- Failure modes are specific and have designed fallbacks, not just "handle errors"
- Bias assessment identifies specific populations that could be affected
- Cost estimation includes scaling projections, not just per-request
- UX design addresses AI uncertainty explicitly — doesn't treat AI output as deterministic
- **Anti-patterns**: Treating AI feature like a traditional feature; no fallback for failures; ignoring bias assessment; assuming 100% accuracy; hiding AI involvement from users

## Framework References
- AI Product Management frameworks (Marty Cagan adapted for AI)
- Responsible AI checklists (Microsoft, Google, internal)
- AI UX patterns library
- Model evaluation methodology

## Formatting Guidelines
- Standard PRD structure extended with AI-specific sections
- Failure modes as table with likelihood and fallback
- Cost estimation with scaling projections
- Clear separation of model metrics vs UX metrics vs business metrics

## Example
AI-powered email subject line generator: "Failure mode: generates offensive subject line → Fallback: content safety filter blocks, shows default subject, logs for review. Bias risk: training data over-represents English business communication style → Mitigation: test with diverse user segments, include style options. Cost: $0.002 per generation, ~$600/month at 300K requests. UX: show 3 options with 'Regenerate' button, always allow manual editing."
