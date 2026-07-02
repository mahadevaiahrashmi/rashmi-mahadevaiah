# Competitive Battlecard

## Purpose
Create a sales-ready competitive battlecard that equips account executives to confidently handle competitive situations in real-time. Battlecards distill deep competitive analysis into a quick-reference format optimized for live conversations — win themes, objection responses, landmines to set, and proof points to cite.

## Auto-Trigger Patterns
- "create a battlecard for [competitor]"
- "competitive battlecard"
- "help sales compete against [competitor]"
- "objection handling for [competitor]"
- "how to win against [competitor]"
- "sales enablement for competitive deals"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Competitor name | Yes | User prompt |
| Our product positioning | No | `context/products/*/overview.md` |
| Competitive analysis | Recommended | Prior competitive analysis output |
| Win/loss data | Optional | `context/products/*/competitors.md` |
| Customer proof points | Optional | `context/products/*/customers.md` |

## Process
1. **Identify the competitive scenario** — When and why this competitor appears in deals. What triggers a competitive evaluation.
2. **Define win themes** — 3-4 core reasons customers choose us over this competitor. Each must be evidence-backed.
3. **Map our advantages** — Specific capabilities, outcomes, or attributes where we are objectively stronger. Include proof points (customer quotes, metrics, case studies).
4. **Acknowledge their strengths** — Honestly note where the competitor is strong. Sales reps lose credibility by dismissing competitors.
5. **Draft objection responses** — For each common competitor talking point, provide a concise acknowledge-redirect-prove response.
6. **Create landmines** — Questions the rep can plant early that expose competitor weaknesses (asked of the prospect, not about the competitor).
7. **List red flags** — Warning signs that a deal is trending toward the competitor. What to watch for.
8. **Add quick-reference positioning** — A 30-second elevator pitch for why us over them.

## Output Format
```
## Battlecard: Us vs. [Competitor]

### Quick Positioning (30-second pitch)
[Concise differentiation statement]

### When You'll See Them
[Typical competitive scenario — deal stage, segment, trigger]

### Win Themes
| # | Theme | Proof Point |
|---|-------|-------------|
| 1 | ... | [Customer] achieved [metric] |

### Our Strengths
| Advantage | What to Say | Evidence |
|-----------|-------------|----------|
| ... | "..." | ... |

### Their Strengths (Be Honest)
| Strength | How to Neutralize |
|----------|------------------|
| ... | ... |

### Objection Handling
| They Say | You Say |
|----------|--------|
| "[Competitor claim]" | "[Acknowledge]. [Redirect]. [Prove]." |

### Landmine Questions
Ask the prospect early:
- "How important is [area of competitor weakness] to your evaluation?"
- ...

### Red Flags (Deal Trending to Them)
- ...

### Do's and Don'ts
| Do | Don't |
|----|-------|
| ... | ... |
```

## Quality Standards
- Fits on one printed page (front and back maximum).
- Every claim has a proof point or evidence reference.
- Objection responses follow acknowledge-redirect-prove pattern.
- Honest about competitor strengths — credibility is paramount.
- Language is conversational, not marketing-speak.

**Anti-patterns:** Bashing the competitor, unsubstantiated claims, overly long format that won't be used in real-time, ignoring areas where the competitor genuinely excels.

## Framework References
- **Competitive Positioning** — Differentiation along dimensions that matter to the buyer.
- **SPIN Selling** — Landmine questions follow situation-problem-implication-need-payoff structure.

## Formatting Guidelines
- Two-column tables throughout for rapid scanning.
- Bold the "You Say" responses for quick reference.
- Keep each cell to 1-2 sentences maximum.
- Use a clear visual hierarchy: positioning → themes → objections → landmines.

## Example
**Scenario:** Battlecard for competing against a well-known PLG analytics tool.

**Objection:** "But [Competitor] has a free tier and faster time-to-value."
**Response:** "You're right — they're great for getting started quickly. The challenge our customers found is that once you need governance, role-based access, or compliance controls, you hit a wall. [Customer X] started on [Competitor] and switched to us when they reached 50 users because they couldn't control who saw what data. They were fully migrated in 3 weeks."
