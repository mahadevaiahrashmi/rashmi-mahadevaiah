# Refresh Persona

## Purpose
Update an existing stakeholder persona with new observations, interactions, and context changes. Track how the relationship evolves over time by incorporating entries from the interaction log, recent meeting notes, and shifts in organizational dynamics. Produce an updated persona that reflects current reality rather than stale first impressions.

## Auto-Trigger Patterns
- "Update [name]'s persona"
- "Refresh persona for…"
- "I have new observations about…"
- "Add this to [name]'s profile"
- "Things have changed with [name]"
- PM provides new interaction data for someone with an existing persona

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Existing persona files** (required) — `context/people/[name]/persona.md`, `communication-guide.md`, `influence-playbook.md`
- **Interaction log** (required) — `context/people/[name]/interaction-log.md`
- **New observations** (optional) — PM's latest notes, meeting outcomes, email exchanges
- **Organizational changes** (optional) — reorgs, role changes, new reporting lines

## Process
1. **Load current persona** — read all three persona files and interaction log
2. **Identify new data** — what has been added to interaction log since last update, plus any new observations provided
3. **Detect pattern changes**:
   - Has communication style shifted?
   - Have priorities changed (new role, new boss, new pressures)?
   - Has the relationship dynamic evolved (trust built or eroded)?
   - Have hot buttons changed or new ones emerged?
4. **Reconcile conflicts** — when new observations contradict old assessments, flag explicitly and update with rationale
5. **Update confidence levels** — increase confidence on validated hypotheses, decrease on contradicted ones
6. **Track relationship evolution** — add a changelog entry showing what changed and why
7. **Re-generate all three files** with updates clearly marked
8. **Surface action items** — if updated persona suggests the PM should change their approach

## Output Format
```markdown
# Persona Refresh: [Name]
**Previous update**: [date] | **This update**: [date]
**New data incorporated**: [X interactions, Y observations]

## What Changed
| Dimension | Previous | Updated | Evidence |
|-----------|----------|---------|----------|

## Confirmed Patterns
- [Patterns that held true with additional evidence]

## Revised Assessments
- [What changed and why]

## New Insights
- [Patterns or dynamics not previously captured]

## Relationship Evolution
- **Trust trajectory**: [improving / stable / declining]
- **Key moments since last update**: …

## Action Items for PM
- [ ] [Changes to communication approach]
- [ ] [Stakeholder management adjustments]

## Updated Files
- persona.md — [changes summary]
- communication-guide.md — [changes summary]
- influence-playbook.md — [changes summary]

## Changelog
| Date | Change | Trigger |
|------|--------|---------|
```

## Quality Standards
- Changes are traceable to specific new evidence
- Contradictions with prior assessment are explicitly acknowledged
- Relationship evolution narrative is coherent over time
- Action items are concrete and tied to updated insights
- **Anti-patterns**: Overwriting old assessments without tracking changes; recency bias (over-weighting latest interaction); refreshing without meaningful new data

## Framework References
- Persona Builder core skill for structure
- Relationship lifecycle models (building, maintaining, repairing)
- Bayesian updating (adjust confidence based on new evidence)

## Formatting Guidelines
- Use diff-style comparison tables for what changed
- Maintain changelog as append-only record
- Bold action items that require PM behavior change
- Include "last refreshed" timestamp prominently

## Example
After 3 months and 8 new interactions: "[Name]'s decision style was initially assessed as 'consensus-driven' but recent interactions show they've become more directive since promotion to VP. Updated: decision style is now 'directive with selective consensus for high-visibility decisions.' PM action: shift from building group alignment to direct executive briefings."
