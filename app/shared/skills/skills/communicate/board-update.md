# Board Update

## Purpose
Prepare a board-level product update that is data-rich, strategically framed, and concise. Covers strategic context, key metrics with trends, competitive positioning, major wins and risks, resource asks, and forward-looking outlook. Designed for board members who need strategic altitude, not operational detail.

## Auto-Trigger Patterns
- "Write a board update" / "board deck product section"
- "Prepare the product update for the board"
- "Board-level summary of product progress"
- "What should I present to the board?"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Key product metrics (with historical trend), strategic initiatives status, competitive landscape updates
- **Optional:** Board member profiles, prior board update for continuity, financial context, fundraising context
- **Reference:** `context/initiatives/` for strategic initiative status, `context/products/` for competitive data

## Process
1. **Frame strategically** — Board cares about: Are we winning the market? Are we building defensible value? Are we allocating resources well? Every point should connect to one of these.
2. **Lead with metrics** — 5-7 key metrics with quarter-over-quarter and year-over-year trend. Annotate inflection points.
3. **Contextualize competitively** — Where are we gaining/losing ground? What are competitors doing that matters?
4. **Highlight strategic wins** — 2-3 wins that demonstrate strategic progress, not just feature output.
5. **Surface risks honestly** — Board members hate surprises. Present risks with mitigation plans and help-needed signals.
6. **Frame resource asks** — Connect asks to strategic outcomes. "We need X to capture Y opportunity."
7. **Paint the forward view** — Next quarter's priorities and how they connect to annual/multi-year strategy.
8. **Compress ruthlessly** — Board updates should be dense with signal. Every sentence carries weight.

## Output Format
```
## Product Update — [Quarter/Period]

### Strategic Context
[2-3 sentences on market position and strategic direction]

### Key Metrics
| Metric | Current | QoQ | YoY | Target | Status |
|--------|---------|-----|-----|--------|--------|
| ...    | ...     | ...%| ...%| ...    | 🟢/🟡/🔴 |

### Strategic Wins
1. **[Win]** — [Impact and strategic significance]
2. **[Win]** — [Impact and strategic significance]

### Competitive Position
- [Key competitive dynamic and our response]

### Risks & Mitigations
| Risk | Severity | Mitigation | Board Help Needed |
|------|----------|------------|-------------------|
| ...  | ...      | ...        | Yes/No — [detail] |

### Resource Asks
- [Ask tied to strategic outcome]

### Forward Look
[Next quarter priorities and how they advance the strategy]
```

## Quality Standards
- Every metric has trend context (QoQ, YoY). Isolated numbers are meaningless to a board.
- Competitive analysis is specific ("Competitor X launched Y, we respond with Z") not generic ("competitive landscape is intensifying").
- Risks are pre-mitigated — present the problem and your plan, not just the problem.
- **Anti-patterns:** Feature lists instead of strategic outcomes, hiding bad news, requesting resources without strategic justification, too much operational detail, metrics without benchmarks.

## Framework References
- Strategic narrative (Where we are → Where we're going → How we get there)
- Porter's Five Forces for competitive framing
- Balanced Scorecard for metric selection

## Formatting Guidelines
- Tables for metrics and risks. Prose for strategic narrative.
- Bold status indicators. Use RAG colors sparingly but consistently.
- Target 2-3 pages maximum. Board members pre-read; don't repeat the pre-read verbatim.
- Include appendix reference for deep-dive data if needed.

## Example
> **Strategic Context:** We've established product-market fit in the mid-market segment and are now executing on enterprise expansion. API platform adoption is our primary growth lever, with 3 of top-10 target accounts in active pilots.
>
> **Key Metric:** Net Revenue Retention hit 118% (↑ from 109% YoY), driven by expansion in accounts using the API platform. This exceeds our 115% target and positions us favorably against the 110% median for our stage.
