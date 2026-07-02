# Pitch Deck Builder

## Purpose
Creates pitch/investor deck structures with a compelling narrative arc, strategic slide sequencing, data visualization guidance, and appendix organization — designed to persuade stakeholders, secure buy-in, or raise investment.

## Auto-Trigger Patterns
- "Build a pitch deck"
- "Create an investor presentation"
- "Pitch slides for…"
- "Fundraising deck"
- "Executive pitch for…"
- "Stakeholder buy-in presentation"

## Tool Configuration
No specific integration required — output is tool-agnostic and can be built in Google Slides, PowerPoint, Keynote, or Pitch. Reference `context/style/presentation-guidelines.md` for brand standards.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Business/product/feature being pitched, audience (investor, exec, board, partner), ask (funding, approval, partnership)
- **Optional:** Financial data, market data, traction metrics, competitive landscape, team info

## Process
1. Define the pitch objective: what decision you want the audience to make.
2. Structure the narrative arc: Problem → Solution → Why Now → Why Us → Ask.
3. Sequence slides following proven pitch frameworks (adapted to context).
4. Write concise slide content — one message per slide.
5. Plan data visualizations for key proof points.
6. Build the appendix with supporting detail.
7. Optimize for the presentation context (in-person, send-ahead, video call).
8. Prepare for Q&A by anticipating objections.

## Output Format
```
# Pitch Deck: [Company/Product/Feature]

## Deck Metadata
- **Audience:** [Investor | Executive | Board | Partner]
- **Ask:** [What you're requesting — funding, approval, resources]
- **Duration:** [X minutes presenting + X minutes Q&A]
- **Format:** [In-person | Video call | Send-ahead]
- **Total Slides:** [N main + N appendix]

## Slide Sequence

### 1. Title
"[Company/Product Name]"
[One-line tagline that captures the value proposition]

### 2. Problem
- [The pain point — make the audience feel it]
- [Quantify the problem: cost, time, frequency]
- [Who has this problem and how many]

### 3. Solution
- [Your solution in one clear sentence]
- [Product screenshot or visual]
- [How it works in 3 steps or fewer]

### 4. Demo / Product
- [Key screens or workflow]
- [Before/after comparison]
- [User testimonial or case study]

### 5. Market Opportunity
- [TAM / SAM / SOM with methodology]
- [Market growth trend]
- [Why this market, why now]

### 6. Traction
- [Key metrics: revenue, users, growth rate]
- [Customer logos or count]
- [Trend chart showing trajectory]

### 7. Business Model
- [How you make money]
- [Pricing tiers or unit economics]
- [LTV/CAC if available]

### 8. Competition / Differentiation
- [2x2 matrix or comparison table]
- [Your unique advantage — defensible moat]
- [Why existing solutions fall short]

### 9. Go-to-Market
- [Acquisition strategy]
- [Key channels and partnerships]
- [Sales motion (self-serve, sales-led, PLG)]

### 10. Team
- [Key team members with relevant experience]
- [Why this team wins in this market]
- [Key hires planned]

### 11. Financials
- [Revenue projections (3-year)]
- [Key assumptions]
- [Path to profitability or next milestone]

### 12. The Ask
- [Specific ask: amount, timeline, terms overview]
- [Use of funds breakdown]
- [Next milestones this enables]

## Appendix Slides
- Detailed financial model
- Full competitive landscape
- Customer case studies
- Product roadmap detail
- Technical architecture (if relevant)
- Team bios (full)

## Data Visualization Guide
| Slide | Data Point | Chart Type | Key Message |
|---|---|---|---|
| Market | TAM/SAM/SOM | Concentric circles | Market is large and growing |
| Traction | Growth | Line chart (up and right) | Strong momentum |
| Financials | Revenue projection | Bar chart | Clear path to scale |
| Competition | Positioning | 2x2 matrix | Unique quadrant ownership |

## Presentation Tips
- Spend 60% of time on Problem + Solution + Traction
- Lead with the strongest proof points
- Anticipate and prepare for: [Top 3 likely objections]
- Send-ahead version: add more text; presenting version: minimal text
```

## Quality Standards
- Every slide advances the narrative — no "nice to have" slides.
- Data is specific and sourced — no vague claims.
- Competition slide is honest — acknowledging competitors builds credibility.
- The Ask is specific — "We're raising $X at $Y valuation" not "We need funding."
- Appendix supports Q&A without cluttering the main deck.
- Send-ahead vs present versions are different — present decks are visual; send-ahead decks have more text.

## Permissions Required
No specific tool permissions — output adapts to any presentation platform.

## Example
A Series A pitch deck with 12 main slides + 6 appendix: opens with customer pain point (47% of PMs spend 10+ hours/week on manual reporting), solution demo (3 key screens), traction ($1.2M ARR, 150% YoY growth, 45 enterprise customers), $8M TAM with 35% CAGR, 2x2 competitive matrix showing unique positioning, team with 2 prior exits, asking for $15M Series A with 18-month runway to $5M ARR milestone.
