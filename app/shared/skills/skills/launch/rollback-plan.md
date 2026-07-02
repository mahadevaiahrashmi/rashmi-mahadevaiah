# Rollback Plan

## Purpose
Plan for launch failure — defining monitoring triggers that signal trouble, rollback decision criteria, step-by-step rollback procedures, customer and internal communication plans, post-rollback analysis, and re-launch strategy. Ensures the team can respond quickly and professionally when things go wrong.

## Auto-Trigger Patterns
- "rollback plan for [launch/feature]"
- "what if [launch] goes wrong"
- "contingency plan for [release]"
- "rollback procedure for [feature]"
- "launch failure plan"
- "how to undo [deployment]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / launch details | Yes | User prompt |
| Deployment architecture | Recommended | User prompt or eng docs |
| Monitoring setup | Recommended | User prompt |
| Customer communication channels | Optional | User prompt |
| SLA commitments | Optional | `context/products/` |

## Process
1. **Define monitoring triggers** — What signals indicate something is wrong? Error rate spikes, latency increases, conversion drops, support ticket surges. Set specific thresholds.
2. **Establish decision criteria** — When do you rollback vs. hotfix vs. wait? Define the decision tree based on severity and scope.
3. **Document rollback procedure** — Step-by-step technical rollback: feature flags, deployment reverts, database migrations. Include time estimates per step.
4. **Plan customer communication** — Templates for: "we're aware," "we're investigating," "we've reverted," "we're back." Tone: transparent, empathetic.
5. **Plan internal communication** — Who gets notified, in what order, through which channels. Include escalation paths.
6. **Design post-rollback analysis** — After stabilization: root cause analysis, timeline reconstruction, impact assessment, prevention measures.
7. **Create re-launch strategy** — How to re-launch after a rollback: fix validation, incremental rollout, customer re-communication.

## Output Format
```
## Rollback Plan: [Feature/Launch]
**Launch Date:** [date]  |  **Rollback Owner:** [name]

### Monitoring Triggers
| Signal | Threshold | Source | Action |
|--------|-----------|--------|--------|
| Error rate | >X% (baseline: Y%) | [Dashboard/alert] | Investigate |
| Latency p99 | >Xms (baseline: Yms) | [Dashboard] | Investigate |
| Support tickets | >X in 1 hour | [Support queue] | Alert PM |
| Conversion rate | <X% (baseline: Y%) | [Analytics] | Escalate |

### Decision Tree
| Severity | Scope | Action | Timeline |
|----------|-------|--------|----------|
| Critical (data loss, security) | Any | Immediate rollback | <15 min |
| High (core flow broken) | >10% users | Rollback | <1 hour |
| High (core flow broken) | <10% users | Hotfix attempt, rollback if not fixed in 2h | 2 hours |
| Medium (degraded experience) | Any | Hotfix | Next business day |
| Low (cosmetic) | Any | Queue fix | Normal sprint |

### Rollback Procedure
| Step | Action | Owner | Time Est. | Verification |
|------|--------|-------|-----------|-------------|
| 1 | [Flip feature flag off] | [Eng] | [2 min] | [Verify flag is off] |
| 2 | [Revert deployment to v.X.Y] | [Eng] | [5 min] | [Health check passes] |
| 3 | [Run database rollback migration] | [Eng] | [10 min] | [Data integrity check] |
| 4 | [Clear CDN cache] | [Ops] | [5 min] | [Verify old version served] |
| **Total estimated rollback time:** | | | **~22 min** | |

### Customer Communication Templates
**Aware:** "We're experiencing an issue with [feature] that may affect [impact]. Our team is investigating. We'll update you within [timeframe]."

**Reverted:** "We've temporarily rolled back [feature] to ensure stability. Your data and workflows are not affected. We'll re-launch once we've resolved the underlying issue."

**Resolved:** "The issue with [feature] has been resolved. [Feature] is back and working as expected. We apologize for the disruption."

### Internal Communication
| Audience | Channel | Message | Timing |
|----------|---------|---------|--------|
| Eng team | Slack #incident | Technical details | Immediate |
| Leadership | Email/Slack | Impact summary | Within 30 min |
| Support | Slack #support | Customer talking points | Within 30 min |
| Sales | Email | Customer-facing FAQ | Within 1 hour |

### Post-Rollback Analysis
- [ ] Timeline reconstruction
- [ ] Root cause identification
- [ ] Impact quantification
- [ ] Prevention measures defined
- [ ] Re-launch plan created

### Re-Launch Strategy
1. [Fix validation — how to confirm the issue is resolved]
2. [Incremental rollout — % ramp plan]
3. [Enhanced monitoring — additional checks for re-launch]
4. [Customer re-communication — messaging for re-launch]
```

## Quality Standards
- Triggers are specific with thresholds, not "if something looks wrong."
- Decision tree covers the full severity spectrum, not just worst case.
- Rollback procedure is step-by-step with time estimates and verification at each step.
- Communication templates are pre-written and ready to send — no drafting under pressure.

**Anti-patterns:** No rollback plan at all, vague triggers, rollback procedures that require figuring it out in real time, no customer communication plan, no re-launch strategy.

## Framework References
- **Incident response** — Structured response to production issues.
- **Progressive rollout** — Incremental deployment with rollback capability.

## Formatting Guidelines
- Decision tree as table (quick reference under pressure).
- Rollback procedure with time estimates (sets expectations).
- Communication templates in blockquote (copy-paste ready).
- Total rollback time prominently displayed.

## Example
**Decision criteria:** "Error rate exceeded 2% threshold (baseline 0.3%) within 20 minutes of launch, affecting the checkout flow. Decision: immediate rollback per the 'Critical — core flow broken' row. Feature flag flipped at 14:32, error rate returned to baseline at 14:35. Total impact: ~200 users over 20 minutes."
