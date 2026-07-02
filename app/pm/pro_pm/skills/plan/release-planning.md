# Release Planning

## Purpose
Plan product releases — including version strategy, release cadence, feature freeze dates, testing windows, rollout sequencing, and communication timelines. A solid release plan coordinates engineering, QA, marketing, support, and sales so that shipping is predictable and low-drama.

## Auto-Trigger Patterns
- "plan the release for [feature]"
- "release planning for [version]"
- "create a release schedule"
- "when should we ship [feature]"
- "coordinate the [product] launch"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Features included in release | Yes | User prompt |
| Release date targets | Yes | User prompt |
| Team processes | Optional | `context/company/processes.md` |
| Feature flag strategy | Optional | Feature flag strategy document |
| Stakeholder communication needs | Optional | User prompt |
| Quality requirements | Optional | User prompt |

## Process
1. **Define the release** — What's included, version number, target date, release type (major, minor, patch).
2. **Set the timeline** — Work backward from target date: feature freeze, code freeze, testing windows, release day.
3. **Plan testing** — QA scope, regression testing, performance testing, security review, staging validation.
4. **Plan rollout** — Progressive rollout stages if applicable. Who gets it first? Monitoring plan.
5. **Coordinate communications** — Release notes, docs updates, marketing announcements, support training.
6. **Define rollback plan** — If something goes wrong, what's the plan? Who decides?
7. **Assign owners** — Each phase has a clear owner and DRI.
8. **Set go/no-go criteria** — What must be true for the release to proceed?
9. **Quality-check** — Timeline is realistic, all stakeholders are informed, rollback plan exists.

## Output Format
```
## Release Plan: [Product] v[Version]
**Target Date:** [Date] | **Type:** [Major/Minor/Patch] | **DRI:** [Name]

### Release Contents
| Feature | Status | Owner | Risk |
|---------|--------|-------|------|

### Timeline
| Milestone | Date | Owner | Status |
|-----------|------|-------|--------|
| Feature freeze | ... | ... | ... |
| Code freeze | ... | ... | ... |
| QA testing | ... | ... | ... |
| Staging validation | ... | ... | ... |
| Go/no-go decision | ... | ... | ... |
| Production release | ... | ... | ... |

### Testing Plan
| Test Type | Scope | Owner | Duration |
|-----------|-------|-------|----------|

### Rollout Plan
| Stage | Audience | Duration | Monitoring | Advance Criteria |
|-------|----------|----------|-----------|-----------------|

### Go/No-Go Criteria
- [ ] [Criterion — must be true to proceed]

### Rollback Plan
**Trigger:** [Conditions requiring rollback]
**Process:** [Steps to rollback]
**Decision maker:** [Name]
**RTO:** [Recovery time objective]

### Communication Plan
| Audience | Asset | Owner | Date |
|----------|-------|-------|------|
| Customers | Release notes | ... | ... |
| Support | Training doc | ... | ... |
| Sales | Enablement brief | ... | ... |
```

## Quality Standards
- Timeline works backward from the target date with realistic buffers.
- Go/no-go criteria are specific and measurable — not "everything looks good."
- Rollback plan is documented and tested before release.
- Every stakeholder group has a communication plan.

**Anti-patterns:** No feature freeze, testing squeezed at the end, no rollback plan, forgetting support/sales enablement, go/no-go by vibes.

## Framework References
- **Release Train** — Regular cadence releases for predictability.
- **Progressive Delivery** — Staged rollouts for risk reduction.

## Formatting Guidelines
- Use a timeline table with dates and owners.
- Checkboxes for go/no-go criteria.
- Include a communication plan showing all audiences.
- Bold the key dates (feature freeze, release day).

## Example
**Timeline:** "Feature freeze: April 1 → Code freeze: April 5 → QA: April 5-12 → Staging: April 12-14 → Go/no-go: April 14 → Production: April 15 → Full rollout: April 22."

**Go/No-Go:** "Zero P0 bugs. P1 bugs have documented workarounds. Performance within 10% of baseline. Security review complete. Release notes approved."
