# Org Change Navigation

## Purpose
Help the PM navigate organizational changes — reorgs, role changes, leadership transitions, team restructuring — by mapping impact, identifying risks to relationships and product continuity, building a communication plan, protecting key relationships, and spotting opportunities within the change.

## Auto-Trigger Patterns
- "There's a reorg happening"
- "My manager/VP/team is changing"
- "How do I navigate this change"
- "New leadership in…"
- "Team restructuring"
- "Org change impact"
- "My role is changing"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Change description** (required) — what is changing, timeline, known details
- **PM's current position** (required) — role, team, reporting line, scope
- **Stakeholder personas** (optional) — `context/people/` for affected relationships
- **Product context** (optional) — in-flight initiatives, dependencies, commitments
- **Organizational context** (optional) — `context/org/` files

## Process
1. **Map the change** — what is moving, who is affected, what's confirmed vs speculated
2. **Assess impact on PM**:
   - Reporting line changes
   - Scope changes (gained or lost)
   - Resource changes
   - Decision authority changes
3. **Assess impact on relationships**:
   - Stakeholders gained or lost
   - Relationships that need re-establishment with new leaders
   - Allies who may lose influence
   - New decision-makers to build relationships with
4. **Assess impact on product**:
   - In-flight initiative continuity
   - Dependency changes
   - Priority shifts under new leadership
   - Knowledge transfer needs
5. **Identify risks** — what could go wrong during the transition
6. **Identify opportunities** — expanded scope, new allies, fresh start, organizational visibility
7. **Build action plan** — immediate, short-term, medium-term actions

## Output Format
```markdown
# Org Change Navigation: [Change Description]
**Timeline**: … | **Status**: [confirmed / rumored / in progress]

## Change Map
### What's Changing
### What's Staying the Same
### What's Unknown

## Impact Assessment
### On PM's Role
| Dimension | Before | After | Impact |
|-----------|--------|-------|--------|

### On Key Relationships
| Stakeholder | Change | Risk | Action |
|------------|--------|------|--------|

### On Product/Initiatives
| Initiative | Impact | Continuity Plan |
|-----------|--------|----------------|

## Risks
| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|

## Opportunities
- [Opportunity with action to capture it]

## Communication Plan
### Immediate (This Week)
- [ ] [Who to talk to, about what, via what channel]

### Short-Term (2-4 Weeks)
- [ ] [Relationship building with new stakeholders]

### Medium-Term (1-3 Months)
- [ ] [Positioning and scope establishment]

## Relationship Protection Plan
- [Key relationships to preserve and how]

## New Relationship Building Plan
- [New stakeholders to engage and approach]
```

## Quality Standards
- Impact assessment distinguishes facts from speculation
- Relationship analysis covers both risks (lost allies) and opportunities (new allies)
- Communication plan is timed appropriately — not too early, not too late
- Opportunity identification is genuine, not forced positivity
- **Anti-patterns**: Panic-driven reactive planning; ignoring emotional impact; treating reorgs as purely structural without political dimension

## Framework References
- Bridges' Transition Model (ending → neutral zone → new beginning)
- Kotter's Change Management (adapted for individual navigation)
- Stakeholder mapping (re-do for new structure)
- SCARF model (Status, Certainty, Autonomy, Relatedness, Fairness)

## Formatting Guidelines
- Change map at top for grounding in facts vs unknowns
- Impact tables for structured assessment
- Action items as checklists with timeframes
- Separate relationship protection from new relationship building

## Example
Reorg moves PM from VP Product (strong ally) to new VP Growth (unknown): "Immediate: schedule intro 1:1 with new VP Growth — research their background and priorities. Risk: VP Product was champion for platform investment — need alternative sponsor. Opportunity: Growth focus aligns with PM's interest in experimentation. Action: prepare 'product area overview' for new VP, lead with metrics they likely care about (conversion, activation)."
