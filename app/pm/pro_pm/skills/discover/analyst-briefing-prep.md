# Analyst Briefing Prep

## Purpose
Prepare for analyst briefings with firms like Gartner, Forrester, and IDC by crafting a structured narrative that positions the company, product strategy, competitive differentiation, and customer evidence. Strong analyst relationships influence market perception, buyer decisions, and category positioning (Magic Quadrants, Waves, MarketScapes).

## Auto-Trigger Patterns
- "prepare for analyst briefing"
- "analyst briefing with [Gartner/Forrester/IDC]"
- "analyst prep for [firm]"
- "MQ / Wave / MarketScape preparation"
- "how to brief [analyst name]"
- "AR strategy"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Analyst firm and analyst name | Yes | User prompt |
| Briefing topic or evaluation context | Yes | User prompt |
| Product positioning and strategy | No | `context/products/*/overview.md` |
| Competitive landscape | Recommended | `context/products/*/competitors.md` |
| Customer references and evidence | Recommended | `context/products/*/customers.md` |
| Prior analyst interactions | Optional | User prompt |

## Process
1. **Research the analyst** — Understand their coverage area, recent publications, known perspectives, and evaluation criteria. Align messaging to their framework.
2. **Define the briefing objective** — What do we want the analyst to understand, believe, and do after this briefing? Be specific.
3. **Craft the narrative arc:**
   - *Market context* (2-3 min): How we see the market evolving. Show strategic thinking.
   - *Company and product strategy* (5-7 min): Vision, differentiation, unique approach. Tie to market trends.
   - *Product capabilities* (5-7 min): Key capabilities mapped to analyst evaluation criteria.
   - *Customer evidence* (5 min): 3-4 customer stories with metrics. Match to analyst's evaluation criteria.
   - *Roadmap signals* (3-5 min): Future direction without overcommitting. Show awareness of gaps.
4. **Prepare the competitive positioning** — Know where the analyst places competitors. Articulate differentiation without bashing.
5. **Anticipate tough questions** — Draft 8-10 likely questions based on analyst perspective and known gaps. Prepare concise, honest responses.
6. **Build supporting materials** — Deck outline (10-12 slides max), one-pager leave-behind, customer reference list.
7. **Plan the conversation** — Analyst briefings are dialogues, not presentations. Plan for 50% Q&A time.
8. **Identify follow-up actions** — Customer reference calls, demos, data to share post-briefing.

## Output Format
```
## Analyst Briefing Prep: [Firm] — [Analyst Name]

### Briefing Details
| Detail | Value |
|--------|-------|
| Analyst firm | ... |
| Analyst name | ... |
| Date | ... |
| Duration | ... |
| Evaluation context | ... |

### Briefing Objective
[What we want the analyst to understand, believe, and do]

### Narrative Arc
| Section | Time | Key Messages |
|---------|------|-------------|
| Market context | 2-3 min | ... |
| Product strategy | 5-7 min | ... |
| Capabilities | 5-7 min | ... |
| Customer evidence | 5 min | ... |
| Roadmap | 3-5 min | ... |
| Q&A buffer | 10-15 min | — |

### Key Messages (3-4)
1. **[Message]** — Supporting evidence: ...
2. **[Message]** — Supporting evidence: ...

### Customer Evidence
| Customer | Use Case | Key Metric | Available for Reference? |
|----------|---------|------------|------------------------|
| ... | ... | ... | Yes/No |

### Competitive Positioning
| Competitor | Their Claim | Our Counter | Evidence |
|-----------|-------------|-------------|----------|
| ... | ... | ... | ... |

### Anticipated Questions & Responses
| Question | Response | Supporting Data |
|----------|----------|----------------|
| "How do you compare to [Comp]?" | ... | ... |
| "What about [gap area]?" | ... | ... |

### Deck Outline (10-12 slides)
1. Market landscape and trends
2. Company overview and vision
3-5. Key capabilities (mapped to eval criteria)
6-7. Customer stories with metrics
8. Roadmap direction
9. Summary / key takeaways

### Follow-Up Actions
- [ ] ...

### Do's and Don'ts
| Do | Don't |
|----|-------|
| Show strategic thinking | Read slides verbatim |
| Acknowledge gaps honestly | Bash competitors |
| Bring customer data | Over-promise on roadmap |
```

## Quality Standards
- Messaging maps directly to the analyst's evaluation criteria.
- Customer evidence includes concrete metrics, not just logos.
- Competitive positioning is honest — analysts see through spin.
- Q&A responses address known gaps transparently.
- Briefing fits the time slot with 40-50% Q&A buffer.

**Anti-patterns:** Treating it as a sales pitch, reading a slide deck, avoiding tough questions, making vague roadmap promises, ignoring the analyst's published perspective, overwhelming with details.

## Framework References
- **Analyst Relations** — Best practices for Gartner MQ, Forrester Wave, IDC MarketScape interactions.
- **Competitive Positioning** — Differentiation narrative aligned to evaluation criteria.

## Formatting Guidelines
- Tables for narrative arc timing and Q&A preparation.
- Deck outline as a numbered list with purpose per slide.
- Do's and Don'ts table for quick pre-briefing reference.
- Keep the prep document to 2-3 pages (this is a prep tool, not the briefing itself).

## Example
**Scenario:** Preparing for a Gartner Magic Quadrant briefing for the data integration market.

**Anticipated question:** "Your competitors all claim AI-powered transformation now. What's actually different about your approach?"
**Response:** "Most vendors added AI as a co-pilot layer on top of existing architectures. We rebuilt the transformation engine with AI as the primary interface — our customers write 60% fewer transformation rules, and we can show you the benchmarks. [Customer X] reduced their pipeline development time by 70% compared to their previous tool. We'd be happy to set up a reference call."
