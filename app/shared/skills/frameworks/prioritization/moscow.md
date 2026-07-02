# MoSCoW Prioritization

## What It Is
MoSCoW is a prioritization technique that categorizes requirements into four buckets: Must have, Should have, Could have, and Won't have (this time). Developed by Dai Clegg at Oracle and widely used in DSDM/Agile projects for scope negotiation against fixed timelines.

## When to Use
- Sprint or release planning with a fixed deadline
- Scope negotiation with stakeholders ("we can't do everything -- let's agree on what's essential")
- MVP definition where you need clear in/out decisions
- Contract-based delivery where scope must be explicit

## When NOT to Use
- Comparing features quantitatively -- MoSCoW doesn't produce a ranked list
- Ongoing roadmap prioritization with shifting timelines -- use RICE or WSJF
- When "Must have" will inevitably absorb everything -- discipline is required

## How to Apply
1. **List** all requirements/features for the release
2. **Define "Must Have"**: Without these, the release is a failure. Legal requirements, core functionality, blockers
3. **Define "Should Have"**: Important but workaroundable. Significant value but not launch-blocking
4. **Define "Could Have"**: Nice to have. Include if time permits. First to cut
5. **Define "Won't Have"**: Explicitly out of scope for this release. Agreed and documented
6. **Validate**: Must Haves should be around 60% of effort. If >60%, scope is too large
7. **Get sign-off** from stakeholders on the categorization

## Template
| Requirement | Category | Rationale | Effort Estimate |
|-------------|----------|-----------|-----------------|
|             | Must     |           |                 |
|             | Should   |           |                 |
|             | Could    |           |                 |
|             | Won't    |           |                 |

**Allocation check**: Must = ___% of total effort (target: 60% or less)

## Example
**Release**: Q3 mobile app launch
- **Must**: User login, core dashboard, push notifications, crash reporting
- **Should**: Profile editing, dark mode, offline caching
- **Could**: Widget support, animated transitions, custom themes
- **Won't**: Social sharing, AR features, third-party integrations

## Key Pitfalls
- Everything becomes a "Must Have" -- enforce the 60% rule and challenge each Must
- No one uses "Won't Have" -- explicitly listing what's out prevents scope creep
- Treating MoSCoW as permanent -- categories are per-release, not forever
- Skipping the stakeholder agreement step -- the value is in the shared commitment

## Related Frameworks
- **Stack Ranking** -- when you need strict ordering, not buckets
- **Kano Model** -- for understanding *why* something matters to customers
- **Story Mapping** -- for visualizing scope in the context of user journeys
- **Value-Effort Matrix** -- for visual prioritization alongside MoSCoW
