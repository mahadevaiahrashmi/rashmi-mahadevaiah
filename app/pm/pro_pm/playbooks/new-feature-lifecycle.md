# New Feature Lifecycle

## Overview
End-to-end playbook for taking a feature from raw idea through discovery, definition, build, launch, and measurement. Use this whenever a new feature enters the pipeline—whether sourced from customers, internal teams, or strategic bets.

## Prerequisites
- Product strategy and current quarter OKRs are defined
- Feedback channel or idea source is identified
- Cross-functional team (engineering, design, data) is available
- Stakeholder alignment on investment area

## Phases

### Phase 1: Idea Capture & Prioritization
**Objective:** Collect, evaluate, and rank the idea against current priorities
**Skills/Agents Used:** `research-analyst`, `strategy-advisor`
**Activities:**
- Document the idea using the one-pager template
- Link supporting evidence (customer requests, data signals, competitive gaps)
- Score against prioritization framework (RICE, ICE, or weighted scoring)
- Compare against current roadmap and active bets
- Create initial sizing estimate (T-shirt size)
**Human Checkpoint:** Decide whether to advance to discovery or park the idea
**Output:** Prioritized idea brief with evidence and initial score
**Duration:** 1–3 days

### Phase 2: Discovery
**Objective:** Validate the problem space, understand user needs, and assess feasibility
**Skills/Agents Used:** `research-analyst`, `codebase-navigator`, `competitive-intel`
**Activities:**
- Conduct 5–10 customer/user interviews focused on the problem
- Analyze existing usage data for related workflows
- Research competitive approaches to the same problem
- Assess technical feasibility with engineering
- Map the customer journey around the problem
- Identify risks and unknowns
**Human Checkpoint:** Go/no-go on whether the problem is worth solving now
**Output:** Discovery brief with user insights, competitive context, and feasibility assessment
**Duration:** 1–3 weeks

### Phase 3: Define
**Objective:** Specify what to build, success criteria, and scope boundaries
**Skills/Agents Used:** `spec-writer`, `data-storyteller`
**Activities:**
- Write the PRD using the prd.md template
- Define success metrics and measurement plan
- Create design mockups or prototypes
- Scope MVP vs. fast-follow features
- Write user stories and acceptance criteria
- Review with engineering for technical design
- Align stakeholders on scope and timeline
**Human Checkpoint:** PRD sign-off from product, engineering, and design leads
**Output:** Approved PRD, design specs, user stories, and measurement plan
**Duration:** 1–2 weeks

### Phase 4: Build
**Objective:** Implement the feature with quality, iterating on design as needed
**Skills/Agents Used:** `quarterly-planner`, `comms-chameleon`
**Activities:**
- Break PRD into epics and stories in project tracker
- Run sprints with regular standups and demos
- Conduct design reviews at key milestones
- Write and execute test plans
- Track progress against timeline
- Manage scope changes through change request process
**Human Checkpoint:** Feature complete review—confirm readiness for launch prep
**Output:** Implemented feature passing QA, with documentation drafted
**Duration:** 2–8 weeks (varies by scope)

### Phase 5: Launch
**Objective:** Ship the feature to users with proper enablement and communication
**Skills/Agents Used:** `launch-coordinator`, `comms-chameleon`
**Activities:**
- Complete launch checklist (use product-launch playbook for major launches)
- Prepare internal enablement (sales, support, CS)
- Draft customer-facing communications
- Set up feature flags and rollout plan
- Coordinate release with engineering
- Execute go-live and monitor for issues
**Human Checkpoint:** Launch go/no-go based on readiness checklist
**Output:** Feature live in production with enablement complete
**Duration:** 1–2 weeks

### Phase 6: Measure & Iterate
**Objective:** Evaluate feature performance against success criteria and plan next steps
**Skills/Agents Used:** `data-storyteller`, `research-analyst`
**Activities:**
- Monitor adoption metrics daily for first two weeks
- Collect early user feedback through in-app surveys or interviews
- Compare actual results against predicted success metrics
- Identify usability issues or gaps for fast-follow
- Write post-launch report
- Decide: iterate, expand, or move on
**Human Checkpoint:** Review results with leadership—decide on follow-up investment
**Output:** Post-launch report with data, learnings, and next-step recommendation
**Duration:** 2–4 weeks post-launch

## Success Criteria
- Feature shipped on time and within scope
- Adoption meets or exceeds target within 30/60/90 day windows
- Customer satisfaction scores remain stable or improve
- No critical incidents during or after launch
- Clear learnings documented for future features

## Common Pitfalls
- **Skipping discovery:** Building based on assumptions leads to low-adoption features
- **Scope creep during build:** Lock scope at PRD sign-off; use change request process
- **Weak measurement plan:** Define metrics before build, not after launch
- **Insufficient enablement:** Sales and support teams need training before launch
- **Abandoning after launch:** The first two weeks of measurement are critical

## Adaptation Guide
- **Early-stage startup:** Compress phases 1–3 into a single week; bias toward shipping and learning
- **Enterprise PM:** Add compliance review in Phase 3; extend stakeholder alignment
- **Platform product:** Add API design review in Phase 3; developer documentation in Phase 5
- **B2C product:** Increase user research sample sizes; add A/B test design in Phase 3
