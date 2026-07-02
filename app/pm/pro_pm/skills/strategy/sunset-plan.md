# Sunset Plan

## Purpose
Create a comprehensive plan for sunsetting a product, feature, or service. Covers phased communication, user migration, timeline, data handling, contractual obligations, support wind-down, financial impact, and team transition. Handles the emotional and operational dimensions of ending something.

## Auto-Trigger Patterns
- "Create a sunset plan for [product/feature]"
- "How do we deprecate [feature]?"
- "Wind down [product]" / "end of life plan"
- "Sunset strategy for [product/feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/feature being sunset, user base data, reason for sunset, proposed timeline
- **Optional:** Contractual obligations, alternative products, migration paths, team impact
- **Reference:** `context/initiatives/` for strategic context, legal/contract documentation

## Process
1. **Validate the decision** — Confirm the sunset is the right call. What's the cost of maintaining vs sunsetting? What do users lose?
2. **Audit dependencies** — Who uses this? How many? How deeply integrated? Contractual commitments?
3. **Design migration path** — Where do users go? Build the bridge before burning the old road. If no migration path, this becomes much harder.
4. **Plan phased communication:**
   - **Phase 1 (internal):** Align leadership and teams. Handle the emotional aspect.
   - **Phase 2 (key customers):** High-touch notification to top users. Listen and support.
   - **Phase 3 (all users):** Broad announcement with timeline, migration guide, support resources.
   - **Phase 4 (reminders):** Regular countdown communications as deadlines approach.
5. **Handle data** — What happens to user data? Export tools, retention period, deletion timeline. Legal/compliance review.
6. **Wind down support** — Transition support resources. Documentation updates. FAQ preparation.
7. **Assess financial impact** — Revenue loss, cost savings, net impact. Plan for churn mitigation.
8. **Support the team** — Team members who built this will feel the loss. Acknowledge their work. Redeploy thoughtfully.

## Output Format
```
## Sunset Plan: [Product/Feature]
**Reason:** [Why this is being sunset]
**Users Affected:** [Count and segments]
**Sunset Date:** [Date] | **Announcement Date:** [Date]

### Migration Path
[Where users go and how — specific, step-by-step]
**Alternative:** [Replacement product/feature]
**Migration tool:** [Self-serve or assisted]

### Communication Plan
| Phase | Audience | Channel | Timing | Owner |
|-------|----------|---------|--------|-------|
| Internal alignment | Leadership, teams | Meetings | [Date] | [Owner] |
| Key customer notification | Top N users | 1:1 calls/emails | [Date] | [Owner] |
| Broad announcement | All users | Email + in-app | [Date] | [Owner] |
| Reminder 1 | All users | Email + in-app | [Date-60d] | [Owner] |
| Final reminder | All users | Email + in-app | [Date-14d] | [Owner] |

### Timeline
| Milestone | Date | Details |
|-----------|------|---------|
| Internal announcement | [Date] | ... |
| Migration tools available | [Date] | ... |
| Sunset date | [Date] | ... |
| Data deletion | [Date + retention period] | ... |

### Data Handling
- **Export:** [What users can export and how]
- **Retention:** [How long data is kept post-sunset]
- **Deletion:** [When and how data is permanently removed]

### Financial Impact
| Item | Amount | Timing |
|------|--------|--------|
| Revenue at risk | $[X] | [Period] |
| Cost savings | $[X] | [Period] |
| Migration costs | $[X] | One-time |

### Team Impact
[How affected team members are supported and redeployed]
```

## Quality Standards
- Migration path is built and tested BEFORE the announcement — don't announce without a bridge.
- Communication is phased and respectful — key customers hear first, personally, with time to plan.
- Data handling is legally reviewed — deletion policies must comply with regulations and contracts.
- Financial impact includes both revenue loss AND cost savings — it's a net calculation.
- **Anti-patterns:** Abrupt sunset without notice, no migration path, ignoring contractual obligations, treating it as purely operational (ignoring the emotional dimension for team and customers), insufficient communication lead time.

## Framework References
- Product lifecycle management — end-of-life processes
- Change management — phased communication and adoption
- Customer communication best practices — empathy-first approach

## Formatting Guidelines
- Timeline table with clear milestones and owners.
- Communication plan in table format showing the cascade.
- Include data handling specifics — customers will ask.
- Keep to 3-5 pages with detailed migration guide as appendix.

## Example
> **Phase 2 (Key Customers):** Our top 20 customers by usage will receive personal calls from their account managers starting June 1. Each call covers: why we're sunsetting, their specific migration path, and dedicated migration support. We'll listen to their concerns and adapt our timeline if contractual obligations require it.
>
> **Team Impact:** The 3 engineers on this product will be redeployed to the API platform team, where their domain expertise directly applies. We'll hold a team retrospective to celebrate what was built and extract lessons learned.
