# Feature Flag Strategy

## Purpose
Design a progressive rollout plan using feature flags — defining flag naming, rollout stages, monitoring at each stage, rollback triggers, and cleanup timelines. A thoughtful strategy separates deployment from release, reduces risk, and enables data-driven launch decisions.

## Auto-Trigger Patterns
- "plan a feature flag rollout"
- "how should we roll out [feature]"
- "create a rollout strategy"
- "feature flag plan for [feature]"
- "progressive rollout for [initiative]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature description | Yes | User prompt |
| Risk level assessment | Yes | User prompt |
| Success metrics | Yes | User prompt or metrics definition |
| User segments | Optional | `context/products/*/customers.md` |
| Technical infrastructure | Optional | `context/products/*/tech-context.md` |

## Process
1. **Name the flag** — Use consistent naming: `[team].[feature].[variant]`.
2. **Define rollout stages** — Internal → beta → % rollout → GA.
3. **Set stage criteria** — Entry and exit criteria for each stage.
4. **Define monitoring per stage** — Metrics to watch, alert thresholds.
5. **Set rollback triggers** — Specific conditions that trigger immediate rollback.
6. **Define targeting rules** — Who sees the feature at each stage.
7. **Plan cleanup** — When to remove the flag, who owns it.
8. **Quality-check** — Rollback is fast and safe. Monitoring catches issues early.

## Output Format
```
## Feature Flag Strategy: [Feature Name]

### Flag Configuration
**Flag Name:** `[team.feature.variant]`
**Type:** [Boolean / Multivariate] | **Default:** Off | **Owner:** [Name]

### Rollout Stages
| Stage | Audience | Duration | Entry Criteria | Monitoring |
|-------|----------|----------|---------------|------------|

### Rollback Triggers
| Trigger | Threshold | Action | Owner |
|---------|-----------|--------|-------|

### Targeting Rules
[Segment definitions, exclusions, overrides]

### Cleanup Plan
**Flag removal deadline:** [Date]
**Owner:** [Name]
**Cleanup ticket:** [Link]
```

## Quality Standards
- Rollback is one click and takes effect within minutes.
- Each stage has clear, measurable criteria to advance.
- Monitoring is set up *before* the first stage.
- Cleanup has a hard deadline and an owner.

**Anti-patterns:** No rollback plan, skipping monitoring, leaving flags permanently, rolling out 100% without staged validation.

## Framework References
- **Progressive Delivery** — Deploy != Release.
- **Canary Releases** — Small % exposure to detect issues.

## Formatting Guidelines
- Tables for stages and rollback triggers.
- Include exact flag name for eng reference.
- Bold rollback thresholds.
- Include cleanup deadline prominently.

## Example
**Flag:** `analytics.smart-alerts.v1`
**Rollback trigger:** "If false-positive rate exceeds 15%, immediately disable the flag."
