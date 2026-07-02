# Build Persona from Interactions

## Purpose
Generate a stakeholder persona by analyzing actual communication artifacts — email threads, Slack exchanges, meeting notes, and recorded interactions. This skill extracts behavioral patterns, decision-making style, priorities, and interpersonal dynamics from how someone actually communicates rather than how they present themselves on paper.

## Auto-Trigger Patterns
- "Here's an email thread with…"
- "Analyze these Slack messages from…"
- "Based on our meetings, build a persona for…"
- PM pastes communication artifacts
- "What patterns do you see in how [name] communicates"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Communication artifacts** (required) — email threads, Slack messages, meeting notes, chat transcripts, written feedback
- **Name and role** (required) — who these interactions are with
- **Relationship context** (optional) — PM's relationship to this person, how long they've interacted
- **Existing persona** (optional) — `context/people/[name]/persona.md` to enrich

## Process
1. **Catalog interaction data** — type (email, Slack, meeting), volume, time span, topics covered
2. **Analyze communication patterns**:
   - Response time and availability patterns
   - Message length and formality level
   - Question-asking vs statement-making ratio
   - Use of data/evidence vs opinion/intuition
   - Emoji/tone indicators
3. **Extract decision-making style**:
   - How they evaluate options (criteria, process)
   - Speed of decisions
   - Comfort with ambiguity
   - Consensus-seeking vs directive
4. **Identify priorities and values**:
   - What topics they initiate vs respond to
   - Where they push back vs where they defer
   - What triggers strong reactions (positive or negative)
5. **Map hot buttons and sensitivities**:
   - Topics that generate friction
   - Framing that gets rejected
   - Patterns in what they escalate
6. **Assess relationship dynamics**:
   - Trust level indicators
   - Power dynamics in communication
   - Collaboration quality signals
7. **Generate interaction-based persona with evidence**

## Output Format
```markdown
# [Name] — Interaction-Based Persona
**Based on**: [X emails, Y Slack threads, Z meetings] over [timeframe]
**Last updated**: [date]

## Communication Patterns
- **Preferred channel**: …
- **Response style**: [speed, length, formality]
- **Active hours**: …

## Decision-Making Style
- **Approach**: [data-driven / intuitive / consensus / directive]
- **Speed**: [fast / deliberate / varies by stakes]
- **Evidence**: "[Quote from interaction demonstrating pattern]"

## Priorities (observed)
- Consistently raises: …
- Pushes back on: …
- Defers on: …

## Hot Buttons ⚠️
- **Triggers friction**: …
- **Triggers enthusiasm**: …
- **Evidence**: "[Quote or paraphrase]"

## Relationship Dynamics with PM
- **Trust level**: [building / established / needs repair]
- **Communication quality**: …
- **Areas of alignment / tension**: …

## Behavioral Evidence Log
| Pattern | Evidence | Confidence |
|---------|----------|------------|

## Communication Recommendations
- **Do**: …
- **Don't**: …
- **Best approach for difficult topics**: …
```

## Quality Standards
- Every claim is backed by specific behavioral evidence from the interactions
- Patterns are identified from multiple data points, not single incidents
- Hot buttons section is specific and actionable
- Clearly flags when sample size is too small for confident patterns
- **Anti-patterns**: Psychoanalyzing from limited data; confusing situational behavior with personality traits; ignoring context of interactions (bad day vs pattern)

## Framework References
- Behavioral analysis (observable patterns vs inferred traits)
- Communication accommodation theory
- Transactional analysis for relationship dynamics

## Formatting Guidelines
- Include direct quotes (anonymized if needed) as evidence
- Use evidence tables for pattern-to-proof traceability
- Confidence ratings on each major claim
- Warning callouts for thin-data inferences

## Example
From 15 emails and 3 meeting notes: "[Name] responds to data-heavy emails within 2 hours but takes 2+ days on strategic/opinion requests. In meetings, asks 'what does the data show' before discussing options. Pushed back twice on proposals lacking competitive analysis. Hot button: presenting recommendations without alternatives." → Communication guide: lead with data, always present 2-3 options, send data-heavy content via email for async processing.
