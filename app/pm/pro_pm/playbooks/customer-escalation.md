# Customer Escalation

## Overview
Structured process for handling customer escalations from initial triage through systemic fix. Use whenever a customer issue is escalated beyond normal support channels—typically involving revenue risk, executive attention, or product-level decisions.

## Prerequisites
- Escalation received via support, CS, sales, or executive channel
- Customer account details and history accessible
- Engineering on-call or available for investigation
- Escalation owner identified (typically PM or CS lead)

## Phases

### Phase 1: Triage
**Objective:** Understand severity, impact, and urgency within the first hour
**Skills/Agents Used:** `research-analyst`
**Activities:**
- Classify severity: P0 (business down), P1 (major impact), P2 (significant), P3 (minor)
- Identify the customer: ARR, strategic importance, contract status
- Determine scope: single customer or multi-tenant issue
- Assign an escalation owner and assemble the response team
- Set internal communication channel (Slack channel, war room)
- Acknowledge receipt to the customer within SLA
**Human Checkpoint:** Escalation owner confirms severity and response plan
**Output:** Triage assessment with severity, impact, and response team
**Duration:** 30 minutes – 2 hours

### Phase 2: Investigate
**Objective:** Root-cause the issue and determine available options
**Skills/Agents Used:** `codebase-navigator`, `research-analyst`
**Activities:**
- Reproduce the issue or gather detailed reproduction steps
- Analyze logs, data, and system state
- Identify root cause or narrow to top hypotheses
- Determine if a workaround exists
- Assess timeline for permanent fix vs. temporary mitigation
- Document findings in a shared investigation thread
**Human Checkpoint:** Engineering confirms root cause and fix options
**Output:** Root cause analysis with fix options and estimated timelines
**Duration:** 2 hours – 2 days (depends on severity)

### Phase 3: Respond
**Objective:** Communicate transparently and execute the chosen resolution path
**Skills/Agents Used:** `comms-chameleon`, `document-builder`
**Activities:**
- Communicate findings and plan to the customer (via CS or directly)
- Deploy workaround if available
- Implement fix with appropriate testing and rollout
- Provide regular status updates to customer (frequency based on severity)
- Coordinate internal stakeholders (sales, legal if needed)
- Document all customer communications
**Human Checkpoint:** Customer confirms issue is resolved or workaround is acceptable
**Output:** Issue resolved or mitigated with customer acknowledgment
**Duration:** 1 day – 2 weeks

### Phase 4: Follow-up
**Objective:** Ensure customer confidence is restored and relationship is strengthened
**Skills/Agents Used:** `comms-chameleon`, `research-analyst`
**Activities:**
- Schedule follow-up call with customer (executive sponsor if P0/P1)
- Share post-incident summary with customer
- Offer concessions if appropriate (credits, extended support, roadmap preview)
- Update CRM with escalation details and resolution
- Collect CSAT or NPS feedback on handling
- Monitor for recurrence over next 30 days
**Human Checkpoint:** Account team confirms customer relationship is stable
**Output:** Customer follow-up complete with documented resolution and feedback
**Duration:** 1–2 weeks

### Phase 5: Systemic Fix
**Objective:** Address root causes to prevent recurrence and improve processes
**Skills/Agents Used:** `strategy-advisor`, `data-storyteller`
**Activities:**
- Write internal post-mortem using the post-mortem template
- Identify systemic issues: product gaps, process failures, monitoring blind spots
- Create tickets for preventive measures
- Update runbooks, alerting, or testing based on learnings
- Review escalation process itself—was triage fast enough? Communication clear?
- Share learnings with broader product and engineering teams
**Human Checkpoint:** Leadership reviews systemic fixes and prevention plan
**Output:** Post-mortem document, prevention tickets created, process improvements identified
**Duration:** 1–2 weeks

## Success Criteria
- Customer issue resolved within SLA for its severity level
- Customer satisfaction maintained or recovered (measured via follow-up CSAT)
- Root cause identified and documented
- Systemic fix prevents recurrence
- Escalation handling improved based on retrospective

## Common Pitfalls
- **Slow acknowledgment:** Customers tolerate problems better when they know you're on it
- **Over-promising timelines:** Under-promise, over-deliver on fix timelines
- **Forgetting the follow-up:** Resolution without relationship repair leaves lasting damage
- **Skipping systemic fix:** Without it, escalations become recurring firefighting
- **Single-threading:** Assign a backup; escalation owners get sick and go on vacation

## Adaptation Guide
- **Enterprise/high-touch:** Add executive sponsor communication; offer on-site visit for P0
- **Self-serve/PLG:** Focus on product-level fixes; less 1:1 follow-up, more in-app communication
- **Regulated industry:** Add compliance notification step; document for audit trail
- **Small team:** Combine phases 4 and 5; PM may own the entire process end-to-end
