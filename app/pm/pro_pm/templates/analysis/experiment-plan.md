# Experiment Plan: [Experiment Name]

<!-- Structured plan for running a product experiment or A/B test. -->

## Hypothesis
<!-- "We believe [change] will [impact] for [users] because [reason]." -->

## Experiment Design
| Field | Value |
|-------|-------|
| **Type** | A/B test / Feature flag / Fake door / Prototype test |
| **Duration** | [X days/weeks] |
| **Sample Size** | [# users needed for significance] |
| **Audience** | [Who is included/excluded] |
| **Assignment** | [Random / Segment-based / Geographic] |

## Variants
| Variant | Description |
|---------|-------------|
| Control (A) | [Current experience] |
| Treatment (B) | [Changed experience] |

## Metrics
### Primary Metric
- [The one metric that determines success/failure]

### Secondary Metrics
- [Supporting metric 1]
- [Supporting metric 2]

### Guardrail Metrics
- [Metric that should NOT degrade — e.g., error rate, page load time]

## Success Criteria
<!-- What result would make us ship the treatment? Be specific about thresholds. -->

## Risks & Mitigations
- [Risk of negative user experience] → [Mitigation: kill switch, small rollout]

## Timeline
| Phase | Date | Activity |
|-------|------|----------|
| Setup | [Date] | Implement and QA |
| Launch | [Date] | Start experiment |
| Check-in | [Date] | Review early results |
| End | [Date] | Conclude and analyze |
| Decision | [Date] | Ship / iterate / kill |

## Results (fill in after experiment)
| Metric | Control | Treatment | Lift | Significance |
|--------|---------|-----------|------|-------------|
| [Primary] | [Value] | [Value] | [%] | [p-value] |

## Decision
<!-- Ship / Iterate / Kill — with rationale. -->
