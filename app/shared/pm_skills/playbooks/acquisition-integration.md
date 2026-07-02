# Acquisition Integration

## Overview
Playbook for evaluating a potential acquisition from a product perspective and integrating the acquired product post-close. Covers due diligence through optimization. Use when your company is acquiring another product or company.

## Prerequisites
- M&A process initiated with identified target
- NDA and due diligence access secured
- Product leadership involved in acquisition evaluation
- Integration team or PMO identified

## Phases

### Phase 1: Evaluate
**Objective:** Assess the acquisition target from a product and technology perspective
**Skills/Agents Used:** `strategy-advisor`, `codebase-navigator`, `competitive-intel`
**Activities:**
- Evaluate product quality: UX, reliability, technical architecture, technical debt
- Assess product-market fit: usage, retention, NPS, growth trajectory
- Analyze customer overlap and expansion opportunity
- Evaluate technology stack compatibility with your platform
- Assess team quality and key-person risk
- Identify integration complexity: data models, APIs, infrastructure
- Evaluate IP and competitive moat
- Map feature overlap and gap fill with your product
- Estimate integration cost and timeline
**Human Checkpoint:** Product leadership provides M&A committee with product assessment
**Output:** Product due diligence report with integration feasibility and cost estimate
**Duration:** 2–4 weeks

### Phase 2: Integration Planning
**Objective:** Develop the detailed product integration plan before deal close
**Skills/Agents Used:** `strategy-advisor`, `quarterly-planner`
**Activities:**
- Define integration strategy: absorb, maintain standalone, or hybrid
- Design target-state product architecture
- Identify day-one requirements: SSO, billing, basic UX consistency
- Plan data migration strategy
- Map API integration or consolidation approach
- Plan customer experience during transition
- Define milestones: 30/60/90 day and 6/12 month targets
- Assign integration workstream owners
- Estimate engineering capacity needed for integration
- Plan for team integration: roles, reporting, culture
**Human Checkpoint:** CEO/CPO approves integration plan
**Output:** Detailed integration plan with milestones, owners, and resource requirements
**Duration:** 2–4 weeks (pre-close)

### Phase 3: Announce & Stabilize
**Objective:** Execute day-one activities and stabilize both products
**Skills/Agents Used:** `comms-chameleon`, `launch-coordinator`
**Activities:**
- Communicate acquisition to customers of both products
- Brief sales, CS, and support teams on combined offering
- Ensure business continuity: no service disruptions during transition
- Meet with acquired team: share vision, integration plan, and expectations
- Establish shared communication channels and tools
- Freeze non-critical changes to acquired product during stabilization
- Identify and retain key talent from acquired team
- Set up cross-team relationships and integration cadences
**Human Checkpoint:** First-week stability check—no customer or team issues
**Output:** Acquisition announced, teams connected, products stable
**Duration:** 2–4 weeks

### Phase 4: Integrate
**Objective:** Execute the technical and product integration
**Skills/Agents Used:** `quarterly-planner`, `codebase-navigator`
**Activities:**
- Execute integration sprints against the milestone plan
- Implement unified authentication and user management
- Consolidate or bridge data models
- Build integration points or migrate functionality
- Align UX patterns and design language
- Migrate customers in phases (start with willing early adopters)
- Address technical debt in acquired product as needed
- Maintain both products during transition period
- Communicate migration progress to customers regularly
**Human Checkpoint:** Milestone reviews at 30/60/90 days and 6 months
**Output:** Products integrated according to plan with customers migrated
**Duration:** 3–12 months

### Phase 5: Optimize
**Objective:** Maximize value from the combined product
**Skills/Agents Used:** `data-storyteller`, `strategy-advisor`
**Activities:**
- Measure combined product metrics: usage, retention, cross-sell, upsell
- Evaluate acquisition ROI against business case projections
- Optimize the combined product experience based on user feedback
- Sunset redundant features or products
- Expand the combined value proposition to new segments
- Document integration learnings for future acquisitions
- Celebrate team achievements and milestones
**Human Checkpoint:** 12-month acquisition review with executive team
**Output:** Optimization report with ROI assessment and forward plan
**Duration:** 6–12 months

## Success Criteria
- Customer retention maintained through integration (< 5% incremental churn)
- Key talent from acquired company retained
- Integration milestones met within planned timeline
- Combined product delivers new value not possible before acquisition
- Acquisition ROI tracking to or exceeding business case

## Common Pitfalls
- **Integration takes 2x longer than planned:** Add buffer and phase aggressively
- **Losing acquired talent:** Culture integration matters as much as product integration
- **Ignoring acquired customers:** They didn't choose to be acquired; communicate empathetically
- **Forcing premature integration:** Sometimes maintaining two products temporarily is the right call
- **Forgetting the business case:** Track whether the acquisition delivers the value that justified it

## Adaptation Guide
- **Acqui-hire:** Focus on team integration; product may be sunset
- **Feature acquisition:** Focus on fast feature integration into core product
- **Platform acquisition:** Maintain standalone with unified auth and billing
- **Competitive acquisition:** Focus on customer migration and market positioning
