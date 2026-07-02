# Conflict Resolution

## Purpose
Help the PM navigate interpersonal or cross-team conflicts by understanding each side's interests (not just positions), identifying root causes, designing a mediation approach, generating resolution options, and planning follow-up to prevent recurrence. Applicable to PM-to-stakeholder conflicts, team internal friction, and cross-team disputes.

## Auto-Trigger Patterns
- "There's a conflict between…"
- "How do I resolve this disagreement"
- "[Name] and [name] are at odds over…"
- "Cross-team friction"
- "Navigate this conflict"
- "Mediation approach for…"
- "We're stuck in a disagreement about…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Conflict description** (required) — what the disagreement is about, who is involved
- **Personas** (optional) — `context/people/[name]/persona.md` for involved parties
- **PM's role** (required) — party to the conflict, mediator, or affected bystander
- **History** (optional) — how long, previous attempts to resolve, escalation status
- **Stakes** (optional) — what's at risk if unresolved

## Process
1. **Map the conflict** — who is involved, what are the stated positions, what is the observable friction
2. **Separate positions from interests**:
   - Position: what each side says they want
   - Interest: why they want it (the underlying need)
   - Often interests are compatible even when positions seem opposed
3. **Identify root cause** — is this about:
   - Resources (competing for same budget/people/time)
   - Values (different definitions of quality/speed/risk)
   - Process (disagreement on how to work)
   - Information (different data or interpretations)
   - Relationships (trust deficit, past grievances)
4. **Assess escalation level** — productive disagreement, heated conflict, entrenched positions, organizational damage
5. **Design resolution approach** based on PM's role:
   - As party: interest-based negotiation
   - As mediator: structured facilitation
   - As bystander: coaching or escalation recommendation
6. **Generate resolution options** — at least 3 options including compromises and creative alternatives
7. **Plan implementation and follow-up**

## Output Format
```markdown
# Conflict Resolution: [Brief Description]
**Parties**: [who] | **PM's Role**: [party / mediator / bystander]
**Escalation Level**: [productive / heated / entrenched]

## Conflict Map
### Side A: [Name/Team]
- **Position**: "We want…"
- **Interest (underlying)**: They need…
- **Pressure**: What's driving their stance

### Side B: [Name/Team]
- **Position**: "We want…"
- **Interest (underlying)**: They need…
- **Pressure**: What's driving their stance

## Root Cause Analysis
- **Primary driver**: [resources / values / process / information / relationship]
- **Contributing factors**: …
- **History**: …

## Interest Compatibility Assessment
| Interest (A) | Interest (B) | Compatible? | Bridge |
|--------------|-------------|-------------|--------|

## Resolution Options
### Option 1: [Compromise]
- A gets: … | A gives up: …
- B gets: … | B gives up: …
- Feasibility: …

### Option 2: [Creative Alternative]
- Reframes the problem to satisfy both interests differently

### Option 3: [Escalation Path]
- If direct resolution fails, structured escalation approach

## Recommended Approach
1. **Preparation**: [Conversations to have before bringing parties together]
2. **Facilitation**: [How to structure the resolution conversation]
3. **Agreement**: [How to formalize the resolution]
4. **Follow-up**: [How to monitor and prevent recurrence]

## Conversation Guide
- Opening: "I've noticed tension around [topic]. I'd like to understand both perspectives…"
- Ground rules: [For mediated conversations]
- Questions to each side: …
- Bridging statement: "It sounds like you both care about [shared interest]…"

## Prevention Plan
- What structural changes prevent recurrence
- Communication agreements going forward
```

## Quality Standards
- Interests are genuinely different from positions — shows real analysis
- Root cause goes beyond symptoms to systemic or structural drivers
- Resolution options include at least one creative alternative, not just split-the-difference
- Conversation guide is practical and uses neutral language
- **Anti-patterns**: Taking sides; treating conflict as always negative; focusing only on surface-level compromise; ignoring relationship repair

## Framework References
- Interest-Based Negotiation (Fisher & Ury — Getting to Yes)
- Thomas-Kilmann Conflict Modes (competing, collaborating, compromising, avoiding, accommodating)
- Nonviolent Communication (Rosenberg)
- Mediation frameworks

## Formatting Guidelines
- Side-by-side position/interest mapping for clear comparison
- Compatibility matrix to find bridges
- Resolution options as distinct alternatives, not variations
- Conversation guide as practical script

## Example
Conflict between PM and Eng Lead over release scope: "Position: PM wants all 5 features shipped. Eng Lead wants only 3. Interest: PM needs to hit Q3 commitment to VP. Eng Lead needs to protect quality and team morale. Bridge: both care about credibility. Option: ship 3 core features with high quality (protects eng credibility) plus a concrete plan for remaining 2 in early Q4 (protects PM credibility with VP)."
