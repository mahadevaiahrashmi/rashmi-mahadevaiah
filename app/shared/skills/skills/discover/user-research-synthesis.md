# User Research Synthesis

## Purpose
Synthesize findings from multiple interviews, surveys, or research sessions into thematic patterns and actionable insights. Moves from individual data points to strategic conclusions that inform product decisions, using an affinity mapping approach to surface non-obvious connections.

## Auto-Trigger Patterns
- "synthesize research findings"
- "what patterns do you see across interviews"
- "combine these interview debriefs"
- "create a research synthesis"
- "analyze research across [N] interviews"
- "affinity map these findings"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Multiple interview debriefs or raw notes | Yes | User prompt or prior debrief outputs |
| Research objective | Recommended | Original research plan |
| Customer segments | Optional | `context/products/*/customers.md` |
| Existing persona definitions | Optional | `context/products/*/customers.md` |

## Process
1. **Aggregate observations** — Collect all atomic insights, quotes, and pain points from individual debriefs into a flat list. Tag each with participant ID and segment.
2. **Affinity clustering** — Group related observations into natural themes. Let themes emerge from data rather than forcing pre-defined categories. Aim for 4-8 top-level themes.
3. **Quantify evidence strength** — For each theme, count: number of participants who mentioned it, number of segments represented, emotional intensity (high/medium/low).
4. **Identify patterns within themes** — Look for: causal chains, segment-specific variations, contradictions, and correlations with behaviors or attributes.
5. **Assess confidence** — Rate each finding: Strong (consistent across 70%+ of participants), Moderate (40-70%), Emerging (fewer, but with high signal). Flag where more research is needed.
6. **Derive implications** — Translate each theme into a "so what" for product strategy: what to build, what to stop, what to investigate further.
7. **Update personas** — Note any new behaviors, needs, or segments that should update existing persona definitions.
8. **Prioritize recommendations** — Rank themes by evidence strength × business impact. Identify the top 3 actions.

## Output Format
```
## Research Synthesis: [Topic] — [Date Range]

### Study Overview
| Detail | Value |
|--------|-------|
| Participants | N |
| Segments covered | ... |
| Research method | ... |
| Date range | ... |

### Theme Map
| # | Theme | Participants | Segments | Confidence | Priority |
|---|-------|-------------|----------|------------|----------|
| 1 | ... | 7/10 | 3/4 | Strong | High |

### Theme Deep-Dives

#### Theme 1: [Name]
**Summary:** ...
**Evidence:**
> "[Quote]" — P3, Segment A
> "[Quote]" — P7, Segment B
**Pattern:** ...
**Implication:** ...

### Contradictions & Open Questions
- ...

### Persona Updates
- ...

### Prioritized Recommendations
1. **[Action]** — Rationale: ... | Evidence: Theme 1, 3
2. ...

### Appendix: Participant Summary
| ID | Segment | Key contribution |
|----|---------|-----------------|
```

## Quality Standards
- Themes emerge from data, not imposed top-down.
- Every theme has at least 3 supporting data points from different participants.
- Contradictions are surfaced, not buried.
- Confidence levels are honest — "we don't know yet" is a valid finding.
- Recommendations are specific enough to act on.

**Anti-patterns:** Cherry-picking quotes that support a narrative, ignoring outliers, treating all themes as equal priority, synthesizing without quantifying evidence strength.

## Framework References
- **Affinity Mapping** — Bottom-up clustering of observations into themes.
- **JTBD** — Frame themes around jobs customers are trying to accomplish.
- **Outcome-Driven Innovation** — Use importance vs. satisfaction to identify underserved needs.

## Formatting Guidelines
- Summary table at top for executive scanning.
- Deep-dive sections with headers, evidence blocks, and implications.
- Use confidence badges: `Strong` / `Moderate` / `Emerging`.
- Appendix with participant-level detail for traceability.

## Example
**Scenario:** Synthesizing 12 interviews about collaboration pain points in a project management tool.

**Theme:** "Status update theater" (8/12 participants, Strong confidence)
**Summary:** Teams spend significant time creating status updates that nobody reads, but feel obligated to produce them.
**Implication:** Automate status generation from actual work activity rather than requiring manual reporting.
