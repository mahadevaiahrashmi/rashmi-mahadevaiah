# Advisory Board Consult

## Purpose
Invoke the full cross-functional Advisory Board by presenting a decision, proposal, or problem and receiving perspectives from all relevant stakeholder personas. Each persona responds in character — surfacing concerns, opportunities, and recommendations from their functional perspective — giving the PM a multi-dimensional analysis before the real conversations happen.

## Auto-Trigger Patterns
- "What would my stakeholders think about…"
- "Advisory board review"
- "Get cross-functional perspectives on…"
- "How would [function] react to…"
- "Simulate stakeholder reactions"
- "Multi-perspective analysis of…"
- "What am I missing on this decision"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Decision or proposal** (required) — what is being decided, proposed, or considered
- **Stakeholder personas** (required) — `context/people/[name]/persona.md` for all relevant stakeholders
- **Supporting materials** (optional) — PRD, analysis, data supporting the proposal
- **Specific concerns** (optional) — areas where PM wants focused feedback

## Process
1. **Identify relevant board members** — based on the decision, select all personas whose function is impacted
2. **For each persona, generate in-character response**:
   - Their primary reaction (support, concern, question)
   - Their top priority related to this decision
   - Specific questions they would ask
   - Risks they would flag
   - Conditions for their support
3. **Synthesize across perspectives** — identify where perspectives align, where they conflict, and where blind spots exist
4. **Generate consensus view** — what do most perspectives agree on
5. **Map the debate** — key disagreements and the underlying tensions
6. **Recommend path forward** — how to navigate the diverse perspectives

## Output Format
```markdown
# Advisory Board Consult: [Decision/Proposal]
**Board Members Consulted**: [list of personas invoked]

## Executive Summary
[2-3 sentence synthesis of cross-functional reaction]

## Individual Perspectives

### [Name] — [Role/Function] 🟢/🟡/🔴
**Reaction**: [Support / Conditional Support / Concern / Opposition]
**In their words**: "[Simulated response in their communication style]"
**Key questions**: 
- "…"
**Conditions for support**: …
**Risk they flag**: …

### [Name] — [Role/Function]
…

## Synthesis

### Points of Alignment
- [What most perspectives agree on]

### Key Tensions
| Tension | Side A | Side B | Underlying Issue |
|---------|--------|--------|-----------------|

### Blind Spots Identified
- [Perspectives or impacts not represented]

## Recommended Approach
1. [How to navigate the diverse perspectives]
2. [Who to engage first and why]
3. [Compromises that might bridge tensions]

## Decision Readiness
- **Ready to decide**: [Yes/No]
- **Needs more input from**: [who, on what]
- **Key risk to mitigate first**: …
```

## Quality Standards
- Each persona response is authentically in character — reflects their documented communication style, priorities, and decision patterns
- Synthesis identifies genuine tensions, not false consensus
- Blind spots section adds value by surfacing what the board doesn't cover
- Recommended approach is pragmatic and sequenced
- **Anti-patterns**: All personas agreeing (too easy); caricaturing personas; substituting PM's views for persona perspectives; ignoring organizational dynamics between board members

## Framework References
- Red team / pre-mortem thinking for challenge perspectives
- Cross-functional decision-making frameworks
- Stakeholder personas (persona.md, influence-playbook.md)
- Six Thinking Hats (adapted to functional perspectives)

## Formatting Guidelines
- Traffic light emoji for quick reaction scanning
- "In their words" in quotes for authentic voice
- Synthesis section clearly separated from individual perspectives
- Tensions table to map disagreements structurally

## Example
Proposal to sunset a legacy API: "Eng VP (🟢): 'Finally. Maintenance cost is killing us. I want a clear migration timeline.' Sales Director (🔴): 'Three enterprise customers rely on this. I need 12 months minimum and a migration support package.' Customer Success (🟡): 'Supportable if we communicate proactively. I want to be in the room when we tell customers.' Legal (🟡): 'Check contract commitments before setting timelines.' Tension: Eng wants speed, Sales wants time. Bridge: phased deprecation with dedicated migration support."
