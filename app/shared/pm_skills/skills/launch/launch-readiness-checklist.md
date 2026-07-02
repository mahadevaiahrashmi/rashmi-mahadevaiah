# Launch Readiness Checklist

## Purpose
Conduct a comprehensive readiness review across every launch workstream — product, documentation, support, sales enablement, marketing, analytics, monitoring, legal, customer communication, and internal alignment. Ensures no critical element is missed before flipping the switch.

## Auto-Trigger Patterns
- "launch readiness check for [feature]"
- "are we ready to launch [product]"
- "launch checklist"
- "pre-launch review"
- "readiness assessment for [launch]"
- "go/no-go preparation"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product launching | Yes | User prompt |
| Launch tier | Recommended | Launch plan |
| DRI list | Recommended | Launch plan |
| Launch date | Optional | User prompt |

## Process
1. **Review product readiness** — Feature complete, QA passed, performance tested, accessibility verified, edge cases handled, feature flags configured.
2. **Check documentation** — User docs, API docs, migration guides, KB articles, in-app help updated.
3. **Verify support readiness** — Support team trained, runbook created, escalation paths defined, ticket categories set up.
4. **Confirm sales enablement** — Deck updated, demo environment ready, talk tracks distributed, FAQ available, competitive positioning documented.
5. **Validate marketing assets** — Blog post, email, social, landing page, in-app announcement all reviewed and approved.
6. **Verify analytics instrumentation** — Events tracked, dashboards built, goals/funnels configured, A/B tests set up if applicable.
7. **Check monitoring** — Alerts configured, dashboards ready, on-call schedule confirmed, rollback plan tested.
8. **Legal/compliance review** — Terms updated if needed, privacy review complete, compliance sign-off obtained.
9. **Customer communication** — Announcement drafted, timing coordinated, migration support plan if breaking changes.
10. **Internal alignment** — All teams aware of launch, escalation paths clear, war room scheduled if P0 launch.

## Output Format
```
## Launch Readiness: [Feature/Product]
**Target Launch Date:** [date]  |  **Overall Readiness:** 🟢/🟡/🔴
**Last Updated:** [date]

### Readiness Summary
| Workstream | Status | DRI | Blockers |
|-----------|--------|-----|----------|
| Product | 🟢/🟡/🔴 | [Name] | [None / blocker description] |
| Documentation | 🟢/🟡/🔴 | [Name] | |
| Support | 🟢/🟡/🔴 | [Name] | |
| Sales Enablement | 🟢/🟡/🔴 | [Name] | |
| Marketing | 🟢/🟡/🔴 | [Name] | |
| Analytics | 🟢/🟡/🔴 | [Name] | |
| Monitoring | 🟢/🟡/🔴 | [Name] | |
| Legal/Compliance | 🟢/🟡/🔴 | [Name] | |
| Customer Comms | 🟢/🟡/🔴 | [Name] | |
| Internal Alignment | 🟢/🟡/🔴 | [Name] | |

### Detailed Checklist

#### Product Readiness
- [ ] All acceptance criteria met
- [ ] QA sign-off obtained
- [ ] Performance testing complete (meets SLAs)
- [ ] Accessibility review passed
- [ ] Edge cases and error states handled
- [ ] Feature flags configured and tested
- [ ] Rollback procedure verified

#### Documentation
- [ ] User-facing docs published
- [ ] API documentation updated
- [ ] Migration guide (if applicable)
- [ ] KB articles created
- [ ] In-app help/tooltips updated

#### Support Readiness
- [ ] Support team trained
- [ ] Runbook created and reviewed
- [ ] Escalation paths documented
- [ ] Ticket categories configured
- [ ] Canned responses prepared

#### Sales Enablement
- [ ] Sales deck updated
- [ ] Demo environment ready
- [ ] Talk tracks distributed
- [ ] FAQ document available
- [ ] Pricing/packaging confirmed

#### Marketing
- [ ] Blog post reviewed and scheduled
- [ ] Email campaigns drafted and approved
- [ ] Social media posts queued
- [ ] Landing page live
- [ ] In-app announcement configured

#### Analytics & Monitoring
- [ ] Event tracking implemented and verified
- [ ] Dashboards configured
- [ ] Alerts and thresholds set
- [ ] On-call schedule confirmed
- [ ] Rollback triggers defined

#### Legal & Compliance
- [ ] Terms of service updated (if needed)
- [ ] Privacy review complete
- [ ] Compliance sign-off obtained

### Go/No-Go Decision
**Decision:** GO / NO-GO / CONDITIONAL GO
**Conditions (if conditional):** [What must be resolved]
**Decided by:** [name]  |  **Date:** [date]
```

## Quality Standards
- Every checklist item has a clear pass/fail state — no ambiguity.
- DRI assigned to each workstream — someone owns the status.
- Blockers are explicitly called out with resolution plans.
- Conditional go decisions specify exactly what conditions must be met.

**Anti-patterns:** Checking boxes without verification, skipping workstreams for speed, no DRI accountability, conditional go without conditions tracked.

## Framework References
- **Launch readiness review** — Cross-functional go/no-go framework.
- **DRI model** — Single accountable owner per workstream.

## Formatting Guidelines
- Summary table at top for executive view (instant health check).
- Detailed checklists grouped by workstream.
- Status emojis for visual scanning (🟢🟡🔴).
- Go/no-go decision clearly stated at the bottom.

## Example
**Conditional go:** "GO with conditions: Sales enablement training webinar must happen within 24 hours of launch. Risk accepted because 70% of reps completed async training and the feature is self-serve. Support team is fully ready and can handle early inquiries."
