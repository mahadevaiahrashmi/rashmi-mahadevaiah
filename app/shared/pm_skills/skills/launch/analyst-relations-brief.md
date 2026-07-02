# Analyst Relations Brief

## Purpose
Prepare briefing materials for industry analyst meetings around a launch — crafting key messages, positioning within the market landscape, articulating competitive differentiation with evidence, presenting customer proof points, teasing roadmap direction, and preparing for challenging Q&A. Ensures analyst interactions build credibility and influence market perception.

## Auto-Trigger Patterns
- "analyst briefing for [launch]"
- "prepare for [Gartner/Forrester/IDC] meeting"
- "analyst relations materials"
- "AR brief for [product]"
- "analyst Q&A prep"
- "market positioning for analyst"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Product / feature for briefing | Yes | User prompt |
| Market positioning | Recommended | `context/products/*/overview.md` |
| Competitive landscape | Recommended | `context/products/*/competitors.md` |
| Customer evidence | Recommended | User prompt |
| Roadmap highlights | Optional | User prompt |
| Analyst firm / name | Optional | User prompt |

## Process
1. **Define briefing objectives** — What do you want the analyst to think, feel, and do after the meeting? Influence report positioning, earn a inquiry call, correct a misperception.
2. **Craft key messages** — 3-5 messages that define your narrative. These should align with how you want to appear in the analyst's framework (MQ, Wave, MarketScape).
3. **Position in market landscape** — Where do you sit in the market? How has your position changed? What market trends support your approach?
4. **Articulate differentiation** — Specific, evidence-backed differentiators. Analysts see through hand-waving — bring data and customer proof.
5. **Prepare customer evidence** — Named customers (with permission), metrics, use cases. Analysts weight customer validation heavily.
6. **Tease roadmap** — Share directional vision without committing to specific dates. Show strategic thinking and market awareness.
7. **Prepare Q&A** — Anticipate tough questions based on known analyst opinions, competitive dynamics, and your weaknesses. Prepare honest, thoughtful responses.
8. **Design meeting flow** — Structure the briefing: context (5 min), demo/product (15 min), customer stories (10 min), roadmap (5 min), Q&A (10 min).

## Output Format
```
## Analyst Brief: [Product/Launch]
**Analyst Firm:** [Name]  |  **Analyst:** [Name, if known]
**Meeting Date:** [date]  |  **Duration:** [X min]

### Briefing Objectives
1. [What you want the analyst to think]
2. [What you want the analyst to do]

### Key Messages
1. **[Message]** — [Supporting evidence]
2. **[Message]** — [Supporting evidence]
3. **[Message]** — [Supporting evidence]

### Market Positioning
- **Category:** [How you define your category]
- **Position:** [Leader / Challenger / Niche — and why]
- **Trend alignment:** [Market trends that support your approach]

### Competitive Differentiation
| Dimension | Our Position | Key Competitor | Evidence |
|-----------|-------------|---------------|----------|
| [Capability] | [Our approach] | [Their approach] | [Proof point] |

### Customer Evidence
| Customer | Use Case | Result | Quotable? |
|----------|---------|--------|-----------|
| [Name] | [How they use it] | [Quantified outcome] | Yes / No |

### Roadmap Highlights (Shareable)
- **Near-term:** [What's coming soon — directional]
- **Mid-term:** [Strategic investments]
- **Vision:** [Where you're heading]
⚠️ **Do not share:** [Items under NDA or not yet public]

### Anticipated Q&A
| Question | Prepared Response |
|----------|-----------------|
| "How do you compete with [leader]?" | [Honest, strategic answer] |
| "What about [known weakness]?" | [Acknowledge + mitigation + roadmap] |
| "How large is your customer base?" | [What you can share] |

### Meeting Agenda
| Time | Topic | Presenter | Materials |
|------|-------|-----------|-----------|
| 0-5 min | Context & company update | [Exec] | [Slides] |
| 5-20 min | Product demo | [PM] | [Demo env] |
| 20-30 min | Customer stories | [PM/Sales] | [Case studies] |
| 30-35 min | Roadmap direction | [PM] | [Slides] |
| 35-45 min | Q&A | [All] | — |
```

## Quality Standards
- Key messages map to how analysts evaluate and categorize products.
- Customer evidence includes quantified outcomes, not just logos.
- Q&A prep addresses known weaknesses honestly — analysts respect candor.
- Roadmap is directional, not committal — protect optionality.

**Anti-patterns:** Feature demos without market context, dismissing competitors, vague differentiation claims, sharing dates on roadmap, being defensive about weaknesses.

## Framework References
- **Analyst relations best practices** — Structured briefing methodology.
- **Market positioning** — Category creation and competitive framing.

## Formatting Guidelines
- Key messages numbered with supporting evidence (structured narrative).
- Customer evidence in table with quotability flag.
- Q&A in two-column format (rehearsable).
- Meeting agenda with time allocations and presenters.

## Example
**Q&A prep:** "If asked about our smaller customer base vs. [Leader]: 'We have 200+ customers including [named logos]. Our growth rate is 3x year-over-year, and our NPS of 72 is significantly higher than industry average. We're winning in [specific segment] because [specific differentiator]. We believe the market is shifting toward [our approach] and our growth trajectory supports that.'"
