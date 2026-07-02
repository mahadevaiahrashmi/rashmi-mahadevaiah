# Product Sunset

## Overview
Structured process for responsibly discontinuing a product or feature. Covers the decision, stakeholder and customer communication, migration support, and technical shutdown. Use when a product, major feature, or service is being retired.

## Prerequisites
- Data supporting the sunset decision (usage, revenue, cost, strategic fit)
- Legal review of customer contracts and commitments
- Executive sponsor who owns the sunset decision
- Customer success and support teams briefed on potential impact

## Phases

### Phase 1: Decision & Planning
**Objective:** Formalize the sunset decision and develop the execution plan
**Skills/Agents Used:** `strategy-advisor`, `document-builder`
**Activities:**
- Document the rationale: low usage, high maintenance cost, strategic misalignment, or replacement available
- Quantify impact: how many customers, revenue at risk, contractual obligations
- Determine timeline: urgent, 90-day, 6-month, or 12-month sunset
- Identify migration path: alternative product, partner solution, or self-serve export
- Assess contractual obligations and consult legal
- Calculate cost of sunset (migration support, refunds, engineering cleanup)
- Define sunset tiers based on customer impact
- Create detailed sunset plan with milestones
**Human Checkpoint:** Executive approval of sunset decision and plan
**Output:** Sunset decision document with rationale, timeline, and migration plan
**Duration:** 1–2 weeks

### Phase 2: Communication
**Objective:** Communicate the sunset transparently to all affected parties
**Skills/Agents Used:** `comms-chameleon`, `document-builder`
**Activities:**
- Draft customer communication (email, in-app notification, documentation)
- Prepare internal talking points for sales, CS, and support
- Create FAQ document for customer-facing teams
- Brief sales on impact to pipeline and existing deals
- Notify partners and integrators
- Update public documentation and status page
- Communicate timeline clearly: announcement → migration period → shutdown date
- Offer direct contact for high-value customers
- Publish blog post or public announcement if appropriate
**Human Checkpoint:** Legal and exec review of all external communications
**Output:** All stakeholders informed with clear timeline and migration options
**Duration:** 1–2 weeks

### Phase 3: Migration Support
**Objective:** Help customers transition smoothly to alternatives
**Skills/Agents Used:** `research-analyst`, `comms-chameleon`
**Activities:**
- Provide data export tools or services
- Offer migration guides and documentation
- Run migration office hours or webinars for affected customers
- Provide white-glove migration support for top accounts
- Track migration progress: percentage migrated, blockers, at-risk accounts
- Extend timeline for customers who need more time (within reason)
- Negotiate contract adjustments or credits as appropriate
- Monitor customer sentiment throughout migration
**Human Checkpoint:** Migration progress review—are customers successfully transitioning
**Output:** Majority of customers migrated with at-risk accounts actively managed
**Duration:** 1–6 months (varies by sunset timeline)

### Phase 4: Shutdown
**Objective:** Complete the technical shutdown safely and document learnings
**Skills/Agents Used:** `codebase-navigator`, `comms-chameleon`
**Activities:**
- Verify all active customers have migrated or acknowledged shutdown
- Implement final shutdown: disable access, sunset APIs, remove from product
- Archive data per retention policy (maintain compliance requirements)
- Decommission infrastructure and reduce costs
- Update documentation, remove from website and marketing materials
- Close related support tickets and update knowledge base
- Write post-sunset report with financials, customer impact, and learnings
- Conduct retrospective on the sunset process itself
**Human Checkpoint:** Final confirmation that shutdown is safe to execute
**Output:** Product fully decommissioned, costs eliminated, learnings documented
**Duration:** 1–2 weeks for shutdown; 30 days monitoring

## Success Criteria
- All customers migrated or informed with reasonable alternatives
- No contractual violations or legal issues
- Infrastructure costs reduced to zero
- Customer relationships preserved (minimal churn from sunset)
- Learnings documented to inform future product decisions

## Common Pitfalls
- **Ripping the band-aid:** Too-fast sunsets damage trust; give adequate migration time
- **Endless extensions:** Set firm dates; indefinite extensions add ongoing cost
- **Forgetting partners:** Third-party integrators and partners need advance notice
- **Inadequate migration tools:** If you build it, you should help them leave it
- **Not learning from it:** Every sunset teaches about product-market fit and investment decisions

## Adaptation Guide
- **Free/freemium product:** Shorter notice acceptable; focus on data portability
- **Enterprise product with contracts:** Long migration timelines; legal review essential
- **Internal tool/service:** Simpler communication; focus on team transition
- **Regulated industry:** Add compliance review for data handling and retention requirements
