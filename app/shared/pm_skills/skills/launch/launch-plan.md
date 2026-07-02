# Launch Plan

## Purpose
Create a comprehensive launch plan covering every dimension of a product launch — from tiering and timeline to DRIs, readiness criteria, go/no-go checklists, day-of runbooks, and post-launch monitoring. Ensures nothing falls through the cracks across the dozens of moving parts in a cross-functional launch.

## Auto-Trigger Patterns
- "create a launch plan for [feature/product]"
- "plan the launch of [feature]"
- "launch planning for [initiative]"
- "how do we launch [feature]"
- "launch tier for [feature]"
- "go/no-go checklist for [launch]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product to launch | Yes | User prompt |
| Launch date / target | Recommended | User prompt |
| Product context | Recommended | `context/products/` |
| Teams involved | Optional | User prompt |
| Initiative context | Optional | `context/initiatives/` |

## Process
1. **Determine launch tier** — P0 (company-level event, exec-sponsored), P1 (product-line feature, marketing support), P2 (standard release, lightweight launch). Tier determines the depth of each workstream.
2. **Build the timeline** — Work backward from launch date. Key milestones: feature freeze, QA complete, docs ready, enablement done, marketing assets, go/no-go meeting, launch day, post-launch review.
3. **Assign DRIs** — One directly responsible individual per workstream: product, engineering, design, marketing, sales enablement, support, documentation, legal/compliance.
4. **Define readiness criteria** — For each workstream, what must be true for launch to proceed. These become the go/no-go checklist.
5. **Create launch day runbook** — Hour-by-hour plan: feature flag flips, announcements, monitoring checks, escalation procedures.
6. **Design post-launch monitoring** — Metrics to watch, alert thresholds, war room duration, feedback channels, first-week review cadence.
7. **Plan contingencies** — What if something goes wrong? Rollback plan, customer communication templates, escalation paths.
8. **Schedule go/no-go** — Meeting 2-3 days before launch with all DRIs. Checklist review, risk assessment, final decision.

## Output Format
```
## Launch Plan: [Feature/Product]
**Launch Tier:** P0 / P1 / P2  |  **Target Date:** [date]
**Launch Owner:** [name]

### Launch Tier Justification
[Why this tier — audience size, strategic importance, risk level]

### Timeline
| Milestone | Date | DRI | Status |
|-----------|------|-----|--------|
| Feature freeze | T-3 weeks | Eng Lead | |
| QA complete | T-2 weeks | QA Lead | |
| Docs & enablement ready | T-1 week | PM / PMM | |
| Go/no-go meeting | T-2 days | PM | |
| Launch day | [Date] | PM | |
| Post-launch review | T+1 week | PM | |

### DRI Matrix
| Workstream | DRI | Key Deliverable | Deadline |
|-----------|-----|----------------|----------|
| Product | [Name] | Feature complete, release notes | [Date] |
| Engineering | [Name] | Deployed, monitoring in place | [Date] |
| Marketing | [Name] | Blog, email, social assets | [Date] |
| Enablement | [Name] | Sales deck, CS training | [Date] |
| Support | [Name] | KB articles, runbook | [Date] |
| Legal | [Name] | Compliance review signed off | [Date] |

### Go/No-Go Checklist
- [ ] Feature passes all acceptance criteria
- [ ] Performance testing complete (meets SLAs)
- [ ] Documentation published
- [ ] Sales/CS enablement delivered
- [ ] Marketing assets approved
- [ ] Monitoring and alerting configured
- [ ] Rollback plan tested
- [ ] Legal/compliance sign-off

### Launch Day Runbook
| Time | Action | Owner | Verification |
|------|--------|-------|-------------|
| [T+0h] | Flip feature flag | [Eng] | [How to verify] |
| [T+0h] | Publish blog post | [Marketing] | [Link live] |
| [T+1h] | Monitor error rates | [Eng] | [Dashboard link] |
| [T+2h] | First status check | [PM] | [All clear or escalate] |

### Post-Launch Monitoring
| Metric | Baseline | Alert Threshold | Dashboard |
|--------|----------|----------------|-----------|
| Error rate | [X%] | [>Y%] | [Link] |
| Latency p99 | [Xms] | [>Yms] | [Link] |
| Adoption | — | [<X in first 24h] | [Link] |
```

## Quality Standards
- Every workstream has a single DRI — shared ownership is no ownership.
- Go/no-go criteria are binary (pass/fail), not subjective assessments.
- Launch day runbook is detailed enough for someone else to execute.
- Post-launch monitoring includes specific thresholds, not just "watch the metrics."

**Anti-patterns:** Launching without a go/no-go meeting, vague readiness criteria, no rollback plan, skipping post-launch monitoring, over-tiering minor releases.

## Framework References
- **Launch tiering** — P0/P1/P2 classification by impact and effort.
- **DRI model** — Single directly responsible individual per deliverable.

## Formatting Guidelines
- Tables for timeline, DRI matrix, and monitoring (structured reference).
- Checklist for go/no-go (binary pass/fail).
- Runbook in time-sequenced table.
- Launch tier and target date prominently displayed at top.

## Example
**Go/no-go decision:** "All checklist items green except sales enablement — training webinar hasn't happened yet but 80% of reps completed the async module. Risk is low: feature is self-serve and support has the runbook. Decision: GO with an additional enablement session scheduled for day 2."
