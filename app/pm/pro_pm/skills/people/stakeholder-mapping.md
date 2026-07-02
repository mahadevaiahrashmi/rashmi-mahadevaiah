# Stakeholder Mapping

## Purpose
Map all stakeholders for a product initiative onto an influence-vs-interest matrix, producing a visual quadrant diagram and tailored communication strategy for each group. This skill surfaces hidden power dynamics, identifies decision-makers versus influencers, and ensures no critical stakeholder is overlooked or under-managed.

## Auto-Trigger Patterns
- "Who are the stakeholders for…"
- "Map stakeholders"
- "Stakeholder analysis"
- "Who needs to be involved in…"
- "Power/interest grid"
- "Who has influence over this decision"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Initiative or decision description** (required) — what is being decided or shipped
- **Known stakeholders** (optional) — names, roles, or teams already identified
- **Organizational context** (optional) — `context/org/` files, reporting structures
- **Existing personas** (optional) — `context/people/[name]/persona.md`

## Process
1. **Identify stakeholders** — enumerate all individuals and groups affected by or able to affect the initiative. Prompt PM for gaps: "Who could block this? Who controls budget? Who owns dependent systems?"
2. **Assess each stakeholder** on two axes:
   - **Influence** (High/Low): ability to affect the outcome — decision authority, budget control, technical veto, political capital
   - **Interest** (High/Low): degree to which they are affected by or care about the outcome
3. **Place into quadrants**:
   - **High Influence / High Interest** → Manage Closely (co-create, frequent updates, involve in decisions)
   - **High Influence / Low Interest** → Keep Satisfied (executive summaries, periodic check-ins, respect their time)
   - **Low Influence / High Interest** → Keep Informed (regular updates, feedback channels, leverage as champions)
   - **Low Influence / Low Interest** → Monitor (light-touch, inform on milestones only)
4. **Map power dynamics** — identify formal authority vs informal influence, alliance clusters, potential blockers, and champions
5. **Define communication strategy** per quadrant — channel, frequency, message framing, escalation path
6. **Generate Mermaid quadrant diagram** for visual output

## Output Format
```markdown
# Stakeholder Map: [Initiative Name]

## Quadrant Diagram
```mermaid
quadrantChart
    title Stakeholder Map
    x-axis Low Interest --> High Interest
    y-axis Low Influence --> High Influence
    quadrant-1 Manage Closely
    quadrant-2 Keep Satisfied
    quadrant-3 Monitor
    quadrant-4 Keep Informed
    [Name]: [x, y]
```

## Stakeholder Details
| Name | Role | Quadrant | Key Concern | Communication Plan |
|------|------|----------|-------------|-------------------|

## Power Dynamics
- Decision-makers: …
- Influencers: …
- Potential blockers: …
- Champions: …

## Communication Strategy by Quadrant
### Manage Closely
### Keep Satisfied
### Keep Informed
### Monitor

## Risks & Gaps
```

## Quality Standards
- Every stakeholder has a clear quadrant placement with rationale
- Communication strategy is specific (channel, frequency, owner) not generic
- Power dynamics section surfaces non-obvious relationships
- At least one "who are we missing?" prompt to the PM
- **Anti-patterns**: Listing stakeholders without prioritization; identical communication plans for all; ignoring informal influencers

## Framework References
- Mendelow's Power/Interest Matrix
- RACI for decision rights
- Influence mapping (Cialdini's principles applied to organizational context)

## Formatting Guidelines
- Use Mermaid `quadrantChart` for the visual map
- Tables for stakeholder details
- Bold quadrant names for scanability
- Keep communication plans to 2-3 bullet points per stakeholder

## Example
For a "Platform Migration" initiative, the map might show: CTO in Manage Closely (high influence, high interest in technical approach), CFO in Keep Satisfied (high influence, low interest until budget discussion), front-end team lead in Keep Informed (low influence, high interest as user of platform), legal in Monitor (low influence, low interest unless data residency triggered).
