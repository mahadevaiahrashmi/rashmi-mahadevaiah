# Persona Builder

## Purpose
Build a comprehensive stakeholder persona from any freeform input — meeting notes, email samples, LinkedIn profiles, casual observations, or internal directory data. This is the core persona intelligence skill that synthesizes raw signals into structured persona files, communication guides, and influence playbooks stored in `context/people/[name]/`.

## Auto-Trigger Patterns
- "Build a persona for…"
- "Create a stakeholder profile"
- "Help me understand [name]"
- "What do I know about [name]"
- "Add persona for…"
- Any request to create files in `context/people/`

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Name and role** (required) — who this persona is about
- **Raw input** (required) — any combination of: freeform notes, LinkedIn text, email threads, meeting observations, Slack messages, internal directory info
- **Existing persona** (optional) — `context/people/[name]/persona.md` for updates
- **Interaction log** (optional) — `context/people/[name]/interaction-log.md`

## Process
1. **Extract signals** from raw input — identify facts (role, tenure, domain) vs inferences (priorities, style, motivations)
2. **Classify communication style** — analytical, driver, expressive, amiable (DISC or Social Styles mapping)
3. **Identify decision-making patterns** — data-driven vs intuition, consensus vs directive, fast vs deliberate
4. **Map priorities and motivations** — what they optimize for (speed, quality, cost, risk, innovation, visibility)
5. **Assess influence dynamics** — formal authority, informal capital, network position, organizational leverage
6. **Generate three output files**:
   - `persona.md` — structured profile with all dimensions
   - `communication-guide.md` — how to communicate effectively with this person
   - `influence-playbook.md` — how to get their support for initiatives
7. **Flag low-confidence inferences** — clearly mark what is observed fact vs hypothesis

## Output Format
### persona.md
```markdown
# [Name] — Persona
**Role**: … | **Reports to**: … | **Tenure**: …
**Last updated**: [date]

## Professional Profile
## Communication Style
## Decision-Making Pattern
## Priorities & Motivations
## Hot Buttons (avoid)
## Relationship to PM
## Confidence Notes
```

### communication-guide.md
```markdown
# Communicating with [Name]
## Preferred Channels & Timing
## Message Framing (do/don't)
## Meeting Approach
## Written Communication Tips
## Escalation Style
```

### influence-playbook.md
```markdown
# Influencing [Name]
## What They Care About
## Evidence They Find Compelling
## Framing That Resonates
## Timing & Setting
## Common Objections & Responses
## Allies Who Can Help
```

## Quality Standards
- Clearly separate observed facts from inferred hypotheses
- Communication guide contains actionable "do this / not that" pairs
- Influence playbook is specific to this person, not generic advice
- All three files are internally consistent
- **Anti-patterns**: Making confident claims from thin data; generic personality descriptions; ignoring organizational context

## Framework References
- DISC behavioral model for communication style
- Social Styles (analytical, driver, expressive, amiable)
- Cialdini's influence principles mapped to individual preferences

## Formatting Guidelines
- Use frontmatter-style metadata at top of persona
- Bold key dimensions for scanability
- Use callout blocks for low-confidence inferences
- Keep each file independently readable

## Example
From input "Sarah always asks for data in meetings, sends short emails, pushed back on last timeline, has been at company 8 years, eng background" → persona identifies analytical style, data-driven decision maker, values precision over speed, hot button is unfounded claims, influence approach is lead with evidence and benchmarks.
