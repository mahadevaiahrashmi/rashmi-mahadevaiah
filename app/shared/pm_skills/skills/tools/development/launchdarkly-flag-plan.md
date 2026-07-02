# LaunchDarkly Flag Plan

## Purpose
Plans feature flag implementations in LaunchDarkly — defining flag naming, variations, targeting rules, rollout percentages, segments, kill switches, and flag lifecycle — enabling safe, controlled feature releases.

## Auto-Trigger Patterns
- "Plan a feature flag"
- "LaunchDarkly flag for…"
- "Feature flag strategy for…"
- "Set up a feature toggle"
- "Rollout plan with feature flags"

## Tool Configuration
Requires `context/integrations/launchdarkly.md` with: LaunchDarkly project key, environment keys, API access token. Auth: API access token with writer role.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature description, rollout strategy, environments
- **Optional:** User segments, targeting rules, percentage rollout plan, kill switch criteria, flag dependencies

## Process
1. Define the flag with a clear name following naming conventions.
2. Select flag type: boolean, multivariate (string/number/JSON).
3. Define variations and their meanings.
4. Create targeting rules for controlled rollout.
5. Design the rollout plan: percentages, segments, timeline.
6. Document the kill switch criteria and procedure.
7. Plan the flag lifecycle: temporary vs permanent, cleanup date.
8. Set up prerequisites and flag dependencies.

## Output Format
```
# Feature Flag Plan: [Feature Name]

## Flag Configuration
- **Flag Key:** `[kebab-case-flag-key]`
- **Name:** [Human-readable name]
- **Description:** [What this flag controls]
- **Type:** [Boolean | String | Number | JSON]
- **Tags:** [feature, team, initiative]
- **Temporary:** [Yes — cleanup by DATE | No — permanent operational flag]

## Variations
| Variation | Value | Description |
|---|---|---|
| Off | false | Feature disabled (default) |
| On | true | Feature enabled |
| (or for multivariate:) | | |
| Control | "control" | Original experience |
| Variant A | "variant-a" | New experience v1 |
| Variant B | "variant-b" | New experience v2 |

## Targeting Rules (Production)
| Priority | Rule | Variation | Purpose |
|---|---|---|---|
| 1 | Internal team segment | On | Internal testing |
| 2 | Beta customers segment | On | Beta validation |
| 3 | Percentage rollout | On (X%) | Gradual release |
| Default | — | Off | Everyone else |

## Segments
| Segment | Definition | Purpose |
|---|---|---|
| internal-team | email ends with @company.com | Dogfooding |
| beta-customers | customer_tier = "beta" | Early access |
| enterprise-exclude | plan = "enterprise" | Hold for enterprise release |

## Rollout Plan
| Phase | Date | Percentage | Segment | Success Criteria |
|---|---|---|---|---|
| 1. Internal | [Date] | 100% internal | internal-team | No errors in 24h |
| 2. Beta | [Date] | 100% beta | beta-customers | NPS ≥ baseline |
| 3. Canary | [Date] | 5% all users | — | Error rate < 0.1% |
| 4. Ramp | [Date] | 25% → 50% → 100% | — | Metrics stable |
| 5. GA | [Date] | 100% | — | Flag cleanup scheduled |

## Kill Switch
- **Trigger Criteria:** [Error rate > 1% | Latency > 2x baseline | Revenue drop > 5%]
- **Procedure:**
  1. Toggle flag to Off in production
  2. Notify #incidents Slack channel
  3. Create incident ticket
  4. Analyze impact and root cause
- **Monitoring:** [Datadog dashboard / alert link]

## Flag Dependencies
| Flag | Dependency | Type |
|---|---|---|
| [This flag] | [prerequisite-flag] | Requires On |

## Lifecycle
- **Created:** [Date]
- **Target GA:** [Date]
- **Cleanup By:** [Date — remove flag from code]
- **Owner:** [Name — responsible for lifecycle]

## Environments
| Environment | Default | Notes |
|---|---|---|
| Development | On | Always enabled |
| Staging | On | Mirrors production targeting |
| Production | Off | Follows rollout plan |
```

## Quality Standards
- Flag keys follow a consistent naming convention (kebab-case, feature-prefixed).
- Temporary flags have explicit cleanup dates and code owners.
- Kill switch criteria are measurable and pre-defined, not reactive.
- Rollout plan has clear success criteria for each phase gate.
- Segments are reusable across flags, not duplicated.
- Flag dependencies are documented to prevent cascading issues.

## Permissions Required
LaunchDarkly Writer role for flag creation. Admin for segment management. Environment-specific permissions for production targeting.

## Example
A new checkout flow flag: boolean `new-checkout-flow`, 5-phase rollout over 3 weeks (internal → beta → 5% canary → 25% → 100%), kill switch triggers if error rate exceeds 0.5% or checkout conversion drops more than 2%, cleanup scheduled 30 days after GA, prerequisite on `payment-v2-enabled` flag. Monitored via Datadog dashboard with automated alerting.
