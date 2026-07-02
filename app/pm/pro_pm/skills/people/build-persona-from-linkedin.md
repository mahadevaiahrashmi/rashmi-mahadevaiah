# Build Persona from LinkedIn

## Purpose
Generate a stakeholder persona when the PM's primary input is a LinkedIn profile URL or pasted profile text. Extract career trajectory, domain expertise, seniority signals, and likely professional priorities to produce communication style hypotheses and an influence approach — even before the first interaction.

## Auto-Trigger Patterns
- "Here's their LinkedIn…"
- "Build persona from LinkedIn"
- "Check out this profile…"
- PM pastes a LinkedIn URL or profile text block
- "What can I learn about [name] from their background"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **LinkedIn profile text or URL** (required) — full profile content including headline, summary, experience, education, skills, endorsements, activity
- **Context for relationship** (optional) — why this person matters to the PM (e.g., "new VP of Engineering," "potential partner at vendor")
- **PM's initial observations** (optional) — anything already known from other sources

## Process
1. **Parse profile structure** — extract: current role & company, headline positioning, career timeline, education, skills/endorsements, certifications, publications, activity/posts
2. **Analyze career trajectory** — direction (IC→leadership, specialist→generalist, startup→enterprise), pace of progression, industry shifts, domain depth
3. **Assess seniority signals** — title level, scope of roles, team/org size indicators, board/advisory positions, speaking/publishing activity
4. **Infer domain expertise** — technical depth areas, business domain knowledge, cross-functional breadth, industry-specific experience
5. **Hypothesize priorities based on role** — what a person in this role/level typically optimizes for (e.g., VP Eng: technical excellence + team scaling + delivery velocity)
6. **Generate communication style hypotheses** — based on headline framing (metric-driven vs vision-driven), post style, career pattern
7. **Build influence approach** — leverage shared connections, speak to their domain, reference their published perspectives
8. **Clearly flag all outputs as hypotheses** requiring validation through interaction

## Output Format
```markdown
# [Name] — LinkedIn-Based Persona (Pre-Interaction)
⚠️ *This persona is hypothesis-based. Validate through direct interaction.*

## Profile Summary
**Current Role**: … | **Company**: … | **Tenure**: …
**Headline**: …

## Career Trajectory
- [Timeline with key transitions and pattern analysis]

## Domain Expertise
- **Deep**: [areas of repeated focus]
- **Broad**: [cross-functional exposure]
- **Emerging**: [recent skill additions or pivots]

## Seniority & Influence Indicators
## Likely Priorities (role-based hypothesis)
## Communication Style Hypothesis
## Recommended Approach for First Interaction
## Shared Context & Conversation Starters
## Confidence Assessment
```

## Quality Standards
- Every inference is explicitly labeled as hypothesis with confidence level
- Career trajectory analysis identifies patterns, not just lists jobs
- Priorities are derived from role + industry + trajectory, not generic
- First interaction approach is specific and actionable
- **Anti-patterns**: Treating LinkedIn data as ground truth; ignoring that profiles are self-curated; making personality claims from job titles alone

## Framework References
- Career trajectory analysis (IC/management, specialist/generalist tracks)
- Role-based priority frameworks (what each level typically optimizes for)
- Persona Builder core skill for full framework

## Formatting Guidelines
- Lead with confidence warning banner
- Use timeline format for career trajectory
- Bold hypothesis labels to distinguish from facts
- Include a "Validate These Assumptions" checklist at the end

## Example
A VP of Product at a Series C startup with 3 years tenure, previously Director at a large enterprise, published articles on PLG → hypothesis: values data-driven growth, comfortable with ambiguity, likely frustrated by slow processes, communication style favors metrics and outcomes over process, influence approach should lead with growth impact and market data.
