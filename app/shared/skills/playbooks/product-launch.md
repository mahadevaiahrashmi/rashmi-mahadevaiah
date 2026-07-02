# Product Launch

## Overview
Comprehensive launch playbook for coordinating readiness, GTM activities, communications, the launch event itself, and post-launch monitoring. Use for any launch larger than a minor feature update.

## Prerequisites
- Feature or product has passed build phase and QA
- Launch tier decided: Tier 1 (major), Tier 2 (significant), Tier 3 (incremental)
- Cross-functional launch team identified (PM, PMM, Engineering, Sales, Support, CS)
- Launch date tentatively set with executive approval

## Phases

### Phase 1: Readiness
**Objective:** Confirm all functions are prepared and launch criteria are met
**Skills/Agents Used:** `launch-coordinator`, `codebase-navigator`
**Activities:**
- Complete launch readiness checklist across all functions
- Verify product quality: performance, reliability, edge cases handled
- Confirm documentation is complete (help docs, API docs, release notes)
- Validate pricing and packaging (if applicable)
- Test onboarding and upgrade flows end-to-end
- Prepare rollback plan in case of critical issues
- Run load testing for expected traffic patterns
**Human Checkpoint:** Launch readiness review—go/no-go from all function leads
**Output:** Signed-off launch readiness checklist with rollback plan
**Duration:** 1–2 weeks

### Phase 2: GTM Preparation
**Objective:** Arm sales, marketing, and customer-facing teams for launch
**Skills/Agents Used:** `comms-chameleon`, `competitive-intel`
**Activities:**
- Finalize positioning and messaging
- Create sales enablement materials (battlecard, demo script, FAQ)
- Prepare marketing assets (landing page, blog post, social content)
- Brief sales team with live demo and objection handling
- Brief support and CS teams on new functionality and known issues
- Prepare customer migration or upgrade communications
- Set up tracking for launch metrics (sign-ups, adoption, pipeline influence)
**Human Checkpoint:** GTM materials reviewed and approved by PMM and sales leadership
**Output:** Complete GTM package ready for execution
**Duration:** 1–2 weeks (parallel with Phase 1)

### Phase 3: Communications
**Objective:** Coordinate all internal and external communications
**Skills/Agents Used:** `comms-chameleon`
**Activities:**
- Draft and schedule customer email announcements
- Prepare press release or media outreach (if Tier 1)
- Schedule social media posts across channels
- Draft internal announcement for all-hands or Slack
- Prepare analyst briefing materials (if Tier 1)
- Coordinate partner communications (if applicable)
- Set up communication war room for launch day
**Human Checkpoint:** Final review of all external communications
**Output:** All communications drafted, reviewed, and scheduled
**Duration:** 1 week

### Phase 4: Launch Execution
**Objective:** Execute the launch with coordination and monitoring
**Skills/Agents Used:** `launch-coordinator`, `comms-chameleon`
**Activities:**
- Execute deployment according to rollout plan (feature flags, phased rollout)
- Publish all communications on schedule
- Monitor system health, error rates, and performance
- Staff support channels for increased volume
- Execute marketing campaigns
- Track real-time launch metrics
- Address any issues immediately with on-call team
**Human Checkpoint:** 24-hour stability confirmation post-launch
**Output:** Product live and stable with all communications published
**Duration:** 1–3 days

### Phase 5: Post-Launch
**Objective:** Evaluate launch success and transition to steady-state
**Skills/Agents Used:** `data-storyteller`, `research-analyst`
**Activities:**
- Monitor adoption metrics daily for two weeks
- Collect early customer feedback and testimonials
- Track support ticket volume and themes
- Measure marketing campaign performance
- Conduct launch retrospective with cross-functional team
- Write post-launch report
- Transition ongoing support from launch team to steady-state owners
- Plan fast-follow improvements based on early feedback
**Human Checkpoint:** Post-launch review with leadership at 2-week mark
**Output:** Post-launch report with metrics, feedback, and recommendations
**Duration:** 2–4 weeks

## Success Criteria
- Launch executed on planned date without critical issues
- Adoption metrics meet or exceed targets at 7/14/30 day marks
- Support ticket volume within acceptable range
- Sales team actively positioning new capability in deals
- Positive customer and market reception

## Common Pitfalls
- **Launching before ready:** Honor the readiness checklist; delayed launches beat broken ones
- **Underestimating support load:** Staff up support for 2–3x normal volume during launch week
- **Weak internal enablement:** If your sales team can't demo it, they won't sell it
- **No rollback plan:** Always have a way to undo the launch if critical issues emerge
- **Launch and forget:** The first two weeks post-launch need active monitoring

## Adaptation Guide
- **Enterprise product:** Add customer-specific migration plans; white-glove for top accounts
- **PLG/self-serve:** Focus on in-app onboarding and activation flows over sales enablement
- **API/platform launch:** Add developer documentation, SDK updates, and changelog
- **Global product:** Stagger launch across regions; localize communications
