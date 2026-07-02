# Incident Response

## Overview
Playbook for managing production incidents from detection through resolution and retrospective. Use for any outage, degradation, security incident, or data issue affecting customers.

## Prerequisites
- On-call rotation and escalation paths defined
- Monitoring and alerting systems operational
- Incident communication channels and tools ready
- Status page or customer notification mechanism available

## Phases

### Phase 1: Detect
**Objective:** Identify the incident and activate the response team quickly
**Skills/Agents Used:** `codebase-navigator`
**Activities:**
- Incident detected via monitoring alert, customer report, or internal discovery
- Verify the incident is real (not a false positive)
- Classify severity: SEV1 (critical/outage), SEV2 (major degradation), SEV3 (minor impact)
- Activate incident channel (Slack, PagerDuty, war room)
- Page the incident commander and relevant on-call engineers
- Start the incident timeline log
**Human Checkpoint:** Incident commander confirms severity and activates response
**Output:** Incident declared with severity, team assembled, timeline started
**Duration:** 5–30 minutes

### Phase 2: Assess
**Objective:** Determine scope, impact, and initial response approach
**Skills/Agents Used:** `codebase-navigator`, `data-storyteller`
**Activities:**
- Determine blast radius: which customers, features, or regions are affected
- Quantify impact: error rates, affected users, revenue impact, data integrity
- Identify the most likely root cause or narrow to top hypotheses
- Determine if the issue is worsening, stable, or improving
- Decide response approach: rollback, hotfix, mitigation, or monitoring
- Assign roles: incident commander, technical lead, communications lead
**Human Checkpoint:** Incident commander approves response approach
**Output:** Impact assessment and response approach decided
**Duration:** 15–60 minutes

### Phase 3: Communicate
**Objective:** Keep all stakeholders informed throughout the incident
**Skills/Agents Used:** `comms-chameleon`
**Activities:**
- Post initial update to status page with known impact
- Notify customer-facing teams (CS, support, sales) with talking points
- Provide regular updates at defined intervals (every 30 min for SEV1)
- Escalate to executive leadership for SEV1 incidents
- Prepare customer communications for direct outreach if needed
- Update status page as situation evolves
- Communicate resolution when confirmed stable
**Human Checkpoint:** Comms lead approves external communications
**Output:** Stakeholders informed with regular, transparent updates
**Duration:** Throughout the incident

### Phase 4: Resolve
**Objective:** Fix the issue and restore normal service
**Skills/Agents Used:** `codebase-navigator`
**Activities:**
- Execute the chosen response: rollback, hotfix, configuration change, or scale-up
- Test the fix in staging or canary if possible
- Deploy fix with monitoring for regression
- Verify resolution: check metrics, test affected flows, confirm with customers
- Monitor for recurrence over the next 2–4 hours
- Declare incident resolved when stable
- Preserve evidence: logs, metrics snapshots, timeline notes
**Human Checkpoint:** Incident commander declares incident resolved
**Output:** Service restored, resolution confirmed, evidence preserved
**Duration:** 30 minutes – 24+ hours (varies widely)

### Phase 5: Retrospective
**Objective:** Learn from the incident and prevent recurrence
**Skills/Agents Used:** `strategy-advisor`, `data-storyteller`
**Activities:**
- Schedule blameless retrospective within 48 hours
- Write incident report using post-mortem template
- Identify root cause and contributing factors
- Generate action items for prevention and detection improvements
- Prioritize action items and assign owners with deadlines
- Share incident report with relevant stakeholders
- Update runbooks and monitoring based on learnings
- Track action item completion
**Human Checkpoint:** Leadership reviews post-mortem and approves action items
**Output:** Post-mortem document with action items tracked to completion
**Duration:** 1–2 weeks

## Success Criteria
- Incident detected and response activated within SLA
- Customer communication transparent and timely
- Mean time to resolution (MTTR) within acceptable range for severity
- Blameless retrospective completed within 48 hours
- Action items implemented to prevent recurrence
- No repeat of the same root cause

## Common Pitfalls
- **Hero culture:** Incidents need coordination, not individuals going rogue
- **Silent during incidents:** Communicate even when you don't have answers yet
- **Skipping the retro:** The retrospective is where the real value is captured
- **Blame-oriented retros:** Blameless culture leads to honest analysis and real fixes
- **Action items that never ship:** Track retro action items like any other priority

## Adaptation Guide
- **Startup:** PM may be incident commander; simpler communication paths
- **Enterprise:** Formal SLA tracking; customer-specific incident reports for top accounts
- **Security incident:** Add legal, compliance, and privacy team involvement; follow breach notification requirements
- **Data incident:** Add data integrity verification and customer data audit steps
