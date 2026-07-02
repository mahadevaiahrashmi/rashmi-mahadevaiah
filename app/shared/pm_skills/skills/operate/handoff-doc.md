# Handoff Document

## Purpose
Create a comprehensive transition document when handing off a product area to another PM. Organize everything they need to know — product context, stakeholder map, current state, in-flight work, known issues, key relationships, upcoming decisions, and tribal knowledge — so continuity is preserved and nothing falls through the cracks.

## Auto-Trigger Patterns
- "I'm transitioning [product area]"
- "Create a handoff doc"
- "Product transition document"
- "Handing off to new PM"
- "Transfer [product] to [name]"
- "Transition plan for…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Product area** (required) — what is being handed off
- **Incoming PM** (optional) — who is receiving, their background
- **Product context** (required) — `context/products/` files, roadmap, metrics
- **Stakeholder personas** (required) — `context/people/` for key relationships
- **In-flight initiatives** (required) — current projects, their status, timelines
- **PM's tribal knowledge** (required) — things not documented anywhere else

## Process
1. **Inventory all product context** — everything the current PM knows organized by category
2. **Map stakeholder relationships** — not just who they are but the relationship quality, history, and communication approach
3. **Document in-flight work** — status, next steps, blockers, dependencies, decision points
4. **Capture known issues** — bugs, technical debt, UX problems, stakeholder concerns
5. **List upcoming decisions** — what's coming, timeline, who's involved, recommended approach
6. **Record tribal knowledge** — unwritten rules, political dynamics, historical context, "things I wish someone had told me"
7. **Create transition timeline** — overlap period activities, handoff meetings, introduction sequence
8. **Define success criteria** — how to know the handoff is complete

## Output Format
```markdown
# Product Handoff: [Product Area]
**From**: [Current PM] | **To**: [Incoming PM]
**Transition period**: [dates] | **Last updated**: [date]

## Product Overview
- **Mission**: …
- **Users**: …
- **Key metrics**: [metric, current value, target, dashboard link]
- **Business model**: …

## Stakeholder Map
| Stakeholder | Role | Relationship Quality | Key Concern | Communication Approach |
|------------|------|---------------------|-------------|----------------------|

## Current State
### In-Flight Initiatives
| Initiative | Status | Next Milestone | Blockers | Key Decision Pending |
|-----------|--------|---------------|---------|---------------------|

### Known Issues & Tech Debt
| Issue | Severity | Context | Recommended Action |
|-------|----------|---------|-------------------|

### Recent Decisions (last 90 days)
| Decision | Rationale | Stakeholders | Document |
|----------|----------|-------------|----------|

## Upcoming Decisions
| Decision | Deadline | Key Stakeholders | My Recommendation |
|----------|---------|-----------------|-------------------|

## Tribal Knowledge ⚠️
### Things Not Documented Elsewhere
- [Unwritten rules, historical context, political dynamics]

### Common Gotchas
- [Things that trip people up in this product area]

### Relationship Notes
- [Sensitive stakeholder dynamics, relationship history]

## Recurring Responsibilities
| Responsibility | Frequency | Description | Templates/Tools |
|---------------|-----------|-------------|----------------|

## Transition Plan
### Week 1: Shadow
- [ ] Shadow key meetings
- [ ] Review all linked documents
- [ ] Meet priority stakeholders (introduced by outgoing PM)

### Week 2: Co-own
- [ ] Co-lead key ceremonies
- [ ] Make first decisions with outgoing PM available

### Week 3+: Independent
- [ ] Full ownership with async support available

## Key Documents & Links
| Document | Location | Description |
|----------|----------|-------------|

## Handoff Complete When
- [ ] All stakeholders introduced
- [ ] All recurring meetings transferred
- [ ] Access to all tools and dashboards
- [ ] First independent decision made
- [ ] Outgoing PM available for async questions until [date]
```

## Quality Standards
- Tribal knowledge section is honest and specific, not sanitized
- Stakeholder relationships include quality assessment, not just names
- In-flight work includes enough context for the incoming PM to make decisions
- Transition plan has clear milestones for independence
- **Anti-patterns**: Dumping links without context; omitting relationship dynamics; sanitizing tribal knowledge; no transition overlap period

## Framework References
- Product area knowledge model
- Stakeholder mapping and relationship context
- Change management for transitions

## Formatting Guidelines
- Executive summary format — scannable tables with detail available
- Tribal knowledge section clearly marked as sensitive/important
- Transition plan as phased checklist
- Key documents as linked references, not embedded content

## Example
Handoff of Payments product: "Tribal knowledge: 'Never propose changes to the checkout flow without running it by Compliance first — last PM tried and it became a 3-month approval process. The VP of Sales (Mike) has strong opinions about pricing page layout — proactively share designs before reviews. The legacy billing system has undocumented behavior around proration — talk to [engineer name] before making assumptions.'"
