# PM Onboarding Guide

## Purpose
Create comprehensive onboarding materials for a new PM joining a product area. Provide everything they need to ramp up quickly: key context documents, stakeholder introductions, a structured 30/60/90 day plan, quick wins for early credibility, common pitfalls to avoid, and a complete tools setup guide. Reduce time-to-productivity from months to weeks.

## Auto-Trigger Patterns
- "New PM joining my area"
- "Create onboarding for…"
- "PM onboarding guide"
- "Ramp-up plan for new PM"
- "30/60/90 day plan for PM"
- "Help me onboard [name]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Product area** (required) — which product/domain the new PM is joining
- **New PM's background** (optional) — experience level, domain knowledge, previous company context
- **Product context** (required) — `context/products/` files, roadmap, key metrics
- **Stakeholder map** (optional) — `context/people/` personas for key relationships
- **Organizational context** (optional) — `context/org/` files, team structure
- **Known pitfalls** (optional) — PM's experience with what trips people up

## Process
1. **Audit existing context** — what documentation exists vs what needs to be created
2. **Build reading list** — prioritized documents for first week, first month, ongoing
3. **Create stakeholder introduction plan** — who to meet, in what order, what to discuss
4. **Design 30/60/90 day plan**:
   - **30 days**: Learn — context absorption, stakeholder meetings, tool setup, shadow sessions
   - **60 days**: Contribute — take ownership of defined scope, first decisions, first deliverables
   - **90 days**: Own — full ownership, strategic contribution, independent stakeholder management
5. **Identify quick wins** — low-risk, high-visibility actions that build credibility early
6. **Document common pitfalls** — mistakes previous PMs have made, organizational landmines
7. **Compile tools and access guide** — everything they need to be operational

## Output Format
```markdown
# PM Onboarding: [Product Area]
**Prepared for**: [New PM name] | **Start date**: …
**Onboarding buddy**: [Name]

## Week 1: Essential Reading
| Document | Location | Priority | Notes |
|----------|----------|----------|-------|

## Stakeholder Introduction Plan
| Week | Person | Role | Purpose | Suggested Topics |
|------|--------|------|---------|-----------------|
| 1 | [Name] | [Role] | Context setting | Product history, current priorities |

## 30/60/90 Day Plan

### Days 1-30: Learn
**Goal**: Understand the product, team, and stakeholders
- [ ] Complete essential reading
- [ ] Meet all key stakeholders
- [ ] Shadow 3 customer calls
- [ ] Attend all recurring ceremonies
- [ ] Deliver: Written summary of "what I've learned"

### Days 31-60: Contribute
**Goal**: Begin adding value with defined scope
- [ ] Own [specific workstream]
- [ ] Make first product decision
- [ ] Write first PRD or spec
- [ ] Deliver: [Specific deliverable]

### Days 61-90: Own
**Goal**: Operate independently
- [ ] Full ownership of [scope]
- [ ] Independent stakeholder management
- [ ] Contribute to roadmap planning
- [ ] Deliver: [Strategic contribution]

## Quick Wins
| Opportunity | Effort | Impact | Why It Works |
|------------|--------|--------|-------------|

## Common Pitfalls
| Pitfall | Why It Happens | How to Avoid |
|---------|---------------|-------------|

## Tools & Access Setup
| Tool | Purpose | Access Request | Setup Guide |
|------|---------|---------------|-------------|

## Key Metrics to Learn
| Metric | Definition | Current Value | Target | Dashboard |
|--------|-----------|--------------|--------|-----------|

## Glossary
| Term | Definition |
|------|-----------|
```

## Quality Standards
- 30/60/90 plan has measurable milestones, not just activities
- Stakeholder introduction order reflects priority and dependency
- Quick wins are genuinely achievable and valuable, not busywork
- Pitfalls section is honest and specific to this product area
- **Anti-patterns**: Information overload in week 1; no measurable milestones; generic advice that applies to any PM role; missing tools/access setup

## Framework References
- 30/60/90 day onboarding framework
- First 90 Days (Watkins) — learning, contributing, owning phases
- Stakeholder mapping for introduction prioritization

## Formatting Guidelines
- Checklists for actionable items within each phase
- Tables for structured reference information
- Progressive disclosure — don't front-load everything
- Include a glossary for product/org-specific terminology

## Example
For a PM joining the Payments product area: "Week 1 reading: payments architecture doc, regulatory requirements overview, last 3 quarterly reviews. Quick win: The error message on failed transactions has been a known UX issue for months — fixing it is low-risk, high-visibility, and signals you care about customer experience. Pitfall: Don't propose changes to the checkout flow before understanding PCI compliance constraints."
