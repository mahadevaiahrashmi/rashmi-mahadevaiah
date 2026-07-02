# LLM Evaluation Plan

## Purpose
Design a comprehensive evaluation plan for LLM-powered features: create evaluation datasets, set up automated evals, design human evaluation protocols, plan red teaming, establish regression testing, implement prompt versioning, design A/B testing strategy, and build quality monitoring. Treat LLM quality as a continuous process, not a one-time check.

## Auto-Trigger Patterns
- "How to evaluate our LLM feature"
- "LLM evaluation plan"
- "Test AI quality"
- "Eval dataset for…"
- "Red team our AI"
- "Prompt testing strategy"
- "AI quality monitoring"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **LLM feature description** (required) — what the LLM does, input/output format
- **Quality criteria** (required) — what "good" output looks like (accuracy, tone, format, safety)
- **Current prompts** (optional) — system prompts, templates, few-shot examples
- **Known failure modes** (optional) — where the LLM currently struggles
- **Volume** (optional) — expected request volume for cost estimation
- **Risk level** (required) — consequences of bad output (low/medium/high)

## Process
1. **Define quality dimensions** — what makes output good for this specific use case
2. **Create eval dataset**:
   - Representative inputs covering normal cases
   - Edge cases (short, long, ambiguous, multilingual)
   - Adversarial inputs (injection attempts, confusing prompts)
   - Golden answers for automated comparison
3. **Design automated evals**:
   - Format compliance checks
   - Factual accuracy checks (against sources)
   - Safety/toxicity filters
   - Consistency tests (same input → similar output)
   - LLM-as-judge for subjective quality
4. **Design human evaluation protocol**:
   - Evaluator selection and training
   - Rubric with clear anchors
   - Inter-rater reliability targets
   - Sample size and frequency
5. **Plan red teaming** — systematic adversarial testing
6. **Establish regression testing** — automated suite run on prompt changes
7. **Design A/B testing** — how to compare prompt versions in production
8. **Build monitoring** — ongoing quality tracking post-launch

## Output Format
```markdown
# LLM Evaluation Plan: [Feature Name]
**Model**: … | **Risk Level**: … | **Date**: …

## Quality Dimensions
| Dimension | Definition | Weight | Measurement |
|-----------|-----------|--------|------------|
| Accuracy | Factual correctness | 30% | Automated + Human |
| Relevance | Addresses the user's actual need | 25% | Human eval |
| Format | Matches expected structure | 15% | Automated |
| Tone | Appropriate for context | 15% | Human eval |
| Safety | No harmful content | 15% | Automated filter |

## Eval Dataset Specification
| Category | Count | Description | Source |
|----------|-------|-------------|--------|
| Normal cases | 100 | Representative inputs | Production logs |
| Edge cases | 50 | Boundary conditions | Manual creation |
| Adversarial | 30 | Injection, manipulation | Red team |
| Regression | 20 | Known past failures | Bug reports |
| **Total** | **200** | | |

### Golden Answer Format
```json
{
  "input": "...",
  "expected_output": "...",
  "quality_criteria": ["accuracy", "format"],
  "acceptable_variations": ["..."]
}
```

## Automated Evaluation Pipeline
| Check | Method | Threshold | Frequency |
|-------|--------|----------|-----------|
| Format compliance | Regex / schema validation | 100% | Every request |
| Toxicity | Safety classifier | <0.01% flagged | Every request |
| Factual accuracy | LLM-as-judge + source comparison | >90% | Daily sample |
| Consistency | Same-input comparison (n=3) | >85% similarity | Weekly |
| Regression suite | Full eval dataset | No regressions | On prompt change |

## Human Evaluation Protocol
- **Evaluators**: [Who, how many, expertise level]
- **Sample size**: [N per evaluation round]
- **Frequency**: [Weekly / Biweekly / On prompt change]
- **Rubric**:
  | Score | Label | Definition |
  |-------|-------|-----------|
  | 5 | Excellent | Perfect output, no edits needed |
  | 4 | Good | Minor improvements possible |
  | 3 | Acceptable | Usable with edits |
  | 2 | Poor | Major issues, significant editing |
  | 1 | Unacceptable | Wrong, harmful, or unusable |
- **Inter-rater reliability target**: Cohen's kappa > 0.7

## Red Teaming Plan
| Attack Vector | Test Cases | Frequency |
|-------------|-----------|-----------|
| Prompt injection | [Examples] | Monthly |
| Jailbreak attempts | [Examples] | Monthly |
| PII extraction | [Examples] | Monthly |
| Bias elicitation | [Examples] | Quarterly |

## Prompt Versioning
- All prompts stored in version control
- Change log with rationale for each version
- Rollback capability to any previous version
- Eval results tagged to prompt version

## A/B Testing Strategy
- **Minimum sample size**: [Calculated for statistical significance]
- **Primary metric**: [User-facing quality metric]
- **Duration**: [Minimum test duration]
- **Rollout**: [% ramp strategy]

## Quality Monitoring Dashboard
| Metric | Source | Cadence | Alert Threshold |
|--------|--------|---------|----------------|

## Incident Response
| Severity | Definition | Response Time | Action |
|----------|-----------|-------------|--------|
```

## Quality Standards
- Eval dataset covers normal, edge, and adversarial cases — not just happy path
- Human evaluation uses trained evaluators with calibrated rubric
- Red teaming is systematic and periodic, not one-time
- Prompt changes are never deployed without regression testing
- **Anti-patterns**: Vibes-based quality assessment; eval dataset that only covers happy path; no red teaming; prompt changes without testing; no ongoing monitoring

## Framework References
- LLM evaluation frameworks (HELM, LMSYS, custom)
- A/B testing methodology for generative AI
- Red teaming best practices (OWASP LLM Top 10)
- MLOps monitoring practices

## Formatting Guidelines
- Quality dimensions table with weights
- Eval dataset specification with category counts
- Rubric with clear behavioral anchors
- Monitoring dashboard specification

## Example
For an AI customer support response generator: "Eval dataset: 200 cases (100 common questions, 50 complex/multi-turn, 30 edge cases, 20 adversarial). Automated: format check (must include greeting + answer + sign-off), toxicity filter, factual accuracy against knowledge base. Human eval: weekly sample of 50 responses rated on 5-point rubric by 2 support agents (kappa target: 0.75). Red team monthly: test for PII leakage, instruction injection, off-topic manipulation. A/B test any prompt change for minimum 1 week before full rollout."
