# Customer Interview Debrief

## Purpose
Transform raw interview notes into structured insights within 24 hours of the conversation. A disciplined debrief prevents memory decay, separates observation from interpretation, and builds a searchable evidence library that compounds across interviews.

## Auto-Trigger Patterns
- "debrief this interview"
- "summarize my customer interview"
- "what did we learn from [customer]"
- "extract insights from interview notes"
- "process these interview notes"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Interview notes or transcript | Yes | User prompt |
| Original discussion guide / hypotheses | Recommended | Prior interview prep output |
| Customer profile | Optional | `context/products/*/customers.md` |
| Product context | Optional | `context/products/*/overview.md` |

## Process
1. **Capture raw observations** — Separate direct quotes from interviewer interpretations. Tag each observation with a timestamp or topic marker.
2. **Extract key quotes** — Pull 5-10 verbatim quotes that capture emotion, pain, or surprise. Preserve the customer's exact language.
3. **Identify pain points** — List every friction, frustration, or unmet need mentioned. Rate severity (mentioned in passing vs. visibly emotional).
4. **Map to hypotheses** — For each pre-interview hypothesis, note whether evidence confirmed, invalidated, or was inconclusive. Cite specific quotes.
5. **Flag surprises** — Capture anything unexpected — behaviors, workarounds, adjacent needs, competitive mentions.
6. **Note context signals** — Role, company size, tech stack, decision-making process, budget authority — anything that enriches the customer profile.
7. **Draft atomic insights** — Write 3-5 standalone insight statements in the format: "[Customer type] needs [outcome] because [reason], evidenced by [quote/behavior]."
8. **Cross-reference** — Check against `context/products/*/customers.md` for pattern alignment with known segments.

## Output Format
```
## Interview Debrief: [Customer Name / ID] — [Date]

### Participant Profile
| Field | Detail |
|-------|--------|
| Role | ... |
| Company size | ... |
| Segment | ... |
| Product usage | ... |

### Key Quotes
> "[Verbatim quote]" — on [topic]
> "[Verbatim quote]" — on [topic]

### Pain Points
| Pain Point | Severity | Frequency (if known) |
|-----------|----------|---------------------|
| ... | High/Med/Low | ... |

### Hypothesis Check
| Hypothesis | Verdict | Evidence |
|-----------|---------|----------|
| H1: ... | Confirmed / Invalidated / Inconclusive | ... |

### Surprises & New Signals
- ...

### Atomic Insights
1. ...
2. ...

### Follow-Up Actions
- [ ] ...
```

## Quality Standards
- Quotes are verbatim, not paraphrased.
- Pain points include severity, not just existence.
- Hypotheses have a clear verdict with cited evidence.
- Insights are atomic: one claim, one evidence chain.
- Debrief is completed within 24 hours of the interview.

**Anti-patterns:** Confirmation bias (only recording evidence that supports hypotheses), editorializing quotes, conflating multiple participants, skipping the "surprises" section.

## Framework References
- **JTBD** — Categorize pain points as functional, emotional, or social job failures.
- **Problem-Interview Fit** — Assess whether the problem is validated at the Must-Have level.

## Formatting Guidelines
- Use blockquotes (`>`) for all verbatim quotes.
- Tables for structured data (profile, pain points, hypotheses).
- Checkboxes for follow-up actions.
- Keep the debrief to one page of dense content.

## Example
**Scenario:** Debriefing an interview with a data analyst at a mid-market e-commerce company.

**Key quote:** "I spend two hours every Monday morning just copying numbers from three dashboards into a spreadsheet so my VP can see the full picture."

**Atomic insight:** "Mid-market analysts need a unified view across data sources because manual consolidation wastes 8+ hours/month and delays decisions, evidenced by the Monday morning ritual described above."
