# Customer POC Plan

## Purpose
Plan a structured proof of concept — defining clear objectives, measurable success criteria, bounded scope, timeline, resource requirements, evaluation framework, and go/no-go criteria. Ensures POCs produce a clear decision, not drag on indefinitely.

## Auto-Trigger Patterns
- "plan a POC with [customer]"
- "proof of concept for [customer/feature]"
- "customer pilot plan"
- "trial plan for [customer]"
- "POC evaluation criteria"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Customer context | Yes | User prompt |
| Problem / use case to prove | Yes | User prompt |
| Product capabilities | Recommended | `context/products/` |
| Success criteria | Recommended | User prompt |

## Process
1. **Define objectives** — What question does the POC answer? Be specific and measurable.
2. **Align on success criteria** — Joint agreement with customer on measurable outcomes. Define pass/fail upfront.
3. **Scope the POC** — Features, users, data, integrations, duration. Resist scope creep.
4. **Design evaluation framework** — How success criteria are measured, data sources, baselines.
5. **Build timeline** — Phases: setup, onboarding, active usage, evaluation, decision.
6. **Identify resources** — From both sides: technical support, customer champion, data access.
7. **Define go/no-go** — What triggers buy vs. iterate vs. walk-away?
8. **Plan follow-up** — Next steps for success, learnings from failure, graceful exit if not a fit.

## Output Format
```
## POC Plan: [Customer]
**Duration:** [X weeks]  |  **Scope:** [Included/excluded]

### Success Criteria
| Criteria | Target | Method | Baseline |
|----------|--------|--------|----------|
| [Metric] | [Value] | [How measured] | [Current] |

### Timeline
| Phase | Duration | Activities | Owner |
|-------|----------|-----------|-------|
| Setup | Week 1 | [Config, data] | [Us/Customer] |
| Active | Weeks 2-4 | [Core evaluation] | [Customer] |
| Decision | Week 5 | [Go/no-go review] | [Joint] |

### Go / No-Go Criteria
- **Go:** [Conditions for purchase]
- **Iterate:** [Conditions for extending]
- **No-Go:** [Conditions for exit]
```

## Quality Standards
- Success criteria mutually agreed and measurable.
- Scope is bounded — POCs that grow are free consulting.
- Go/no-go defined before POC starts.

**Anti-patterns:** Open-ended POCs, subjective success criteria, scope creep, no customer skin in the game.

## Framework References
- **POC best practices** — Bounded evaluation with clear exit criteria.
- **Value hypothesis testing** — Validating fit with real usage.

## Formatting Guidelines
- Tables for criteria, timeline, resources.
- Clear included/excluded scope boundary.
- Go/no-go as explicit decision framework.

## Example
**Success criteria:** "POC succeeds if: (1) ticket resolution time decreases ≥20% vs. 4.2hr baseline, (2) agent satisfaction ≥4/5, (3) Zendesk integration completes without custom eng. Measured over 2-week active period."
