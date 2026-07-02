# Build Persona from Internal Data

## Purpose
Generate a stakeholder persona from internal sources — Workday profiles, org directory entries, HRIS data, and the PM's personal notes about internal dynamics. Focus on organizational context that external profiles miss: reporting relationships, cross-functional influence, internal reputation, and political positioning.

## Auto-Trigger Patterns
- "Here's their Workday info…"
- "Build persona from internal data"
- "They're in [org/team], report to…"
- PM pastes internal directory information
- "What should I know about [name] internally"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Internal directory data** (required) — name, role, team, manager, org, location, tenure, level/band
- **PM's personal notes** (optional) — observations about this person's internal dynamics, reputation, relationships
- **Organizational context** (optional) — `context/org/` files, team structures, recent reorgs
- **Reporting chain** (optional) — who they report to, their skip-level, dotted-line relationships

## Process
1. **Extract organizational facts** — title, level, team, manager, location, tenure, functional area
2. **Map reporting relationships** — direct manager, skip-level, dotted-line, cross-functional touchpoints
3. **Assess organizational positioning** — centrality (many dependencies), peripherality (autonomous), bridge role (connects silos)
4. **Analyze tenure and trajectory** — time in role, time at company, promotion pace, lateral moves, team transfers
5. **Incorporate PM's observations** — internal reputation, known alliances, communication style observed internally, decision authority observed
6. **Identify organizational leverage points** — what this person controls (budget, headcount, technical decisions, customer relationships, process gates)
7. **Map to PM's product area** — how this person's role intersects with PM's scope, potential friction points, alignment opportunities
8. **Generate persona with internal dynamics emphasis**

## Output Format
```markdown
# [Name] — Internal Persona
**Role**: … | **Level**: … | **Team**: … | **Manager**: …
**Location**: … | **Tenure**: … years | **Last updated**: [date]

## Organizational Position
- Reporting chain: [Name] → [Manager] → [Skip-level]
- Dotted lines: …
- Key cross-functional relationships: …

## Internal Influence Map
- **Controls**: [budget, headcount, technical decisions, etc.]
- **Dependencies**: [who depends on them, who they depend on]
- **Network position**: [bridge, hub, peripheral]

## Observed Working Style
## Internal Reputation & Standing
## Intersection with PM's Product Area
## Political Dynamics & Considerations
## Recommended Internal Approach

## PM's Raw Notes (preserved)
> [Original observations preserved for context]

## Confidence Assessment
- Organizational facts: HIGH (directory data)
- Working style: [confidence level based on source]
- Political dynamics: [confidence level]
```

## Quality Standards
- Clearly distinguish directory facts from PM's subjective observations
- Organizational positioning goes beyond org chart — surfaces real influence
- Identifies specific intersection points with PM's product area
- Political dynamics are handled sensitively and factually
- **Anti-patterns**: Over-indexing on title/level as proxy for influence; ignoring informal power structures; treating PM's observations as objective truth

## Framework References
- Organizational network analysis (hub, bridge, peripheral roles)
- Power mapping (formal authority vs informal influence)
- Persona Builder core skill for full framework

## Formatting Guidelines
- Lead with organizational facts in frontmatter style
- Use hierarchical arrows (→) for reporting chains
- Preserve PM's raw notes in blockquote for traceability
- Flag political dynamics section as sensitive/confidential

## Example
From input: "Director of Platform Eng, L7, reports to VP Infra (Sarah Chen), been here 6 years, controls all API gateway decisions, known as the person who blocks things that aren't production-ready, moved from SRE 2 years ago" → persona highlights: technical gatekeeper role, quality-first values, long tenure = deep institutional knowledge, influence approach should demonstrate production readiness and operational impact.
