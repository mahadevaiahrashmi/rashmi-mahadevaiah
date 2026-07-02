# Scope Negotiation

## Purpose
Generate structured scope options — MVP, MLP, and Full — that help PMs negotiate with stakeholders by making trade-offs explicit. Instead of defending a single scope, present choices with clear implications for timeline, risk, and customer impact. This turns scope conversations from arguments into decisions.

## Auto-Trigger Patterns
- "help me scope [feature]"
- "what's the MVP for [initiative]"
- "scope options for [project]"
- "negotiate scope with stakeholders"
- "help me cut scope"
- "MLP vs MVP for [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature requirements or PRD | Yes | User prompt or PRD |
| Timeline constraints | Yes | User prompt |
| Team capacity | Optional | `context/me/working-agreements.md` |
| Strategic priorities | Optional | `context/company/overview.md` |
| Customer feedback | Optional | `artifacts/research/` |

## Process
1. **List all requirements** — Inventory every feature, capability, and quality attribute requested.
2. **Classify by necessity** — Must-have (useless without it), Should-have (painful without it), Nice-to-have (delightful with it).
3. **Build MVP scope** — Minimum to be functional. What's the smallest thing that solves the core problem?
4. **Build MLP scope** — Minimum to be lovable. MVP + the elements that make it a good experience, not just a working one.
5. **Build Full scope** — Everything requested. The complete vision.
6. **Quantify trade-offs** — For each option: timeline, effort, risk profile, customer impact, revenue impact.
7. **Recommend** — State which option you'd recommend and why. Make the decision easy.
8. **Quality-check** — Each option is genuinely viable. Trade-offs are honest. The recommendation has clear rationale.

## Output Format
```
## Scope Options: [Feature Name]

### Requirements Inventory
| # | Requirement | Priority | MVP | MLP | Full |
|---|------------|----------|:---:|:---:|:----:|
| 1 | ... | Must | ✓ | ✓ | ✓ |
| 2 | ... | Should | | ✓ | ✓ |
| 3 | ... | Nice | | | ✓ |

### Option A: MVP (Minimum Viable)
**Includes:** [List]
**Excludes:** [List]
**Timeline:** [Estimate] | **Effort:** [T-shirt]
**Customer Impact:** [What they get and what they miss]
**Risk:** [What could go wrong at this scope]

### Option B: MLP (Minimum Lovable)
[Same structure]

### Option C: Full Scope
[Same structure]

### Trade-off Summary
| Dimension | MVP | MLP | Full |
|-----------|-----|-----|------|
| Timeline | | | |
| Effort | | | |
| Customer Satisfaction | | | |
| Risk | | | |
| Revenue Impact | | | |

### Recommendation
[Which option and why. Clear, defensible rationale.]
```

## Quality Standards
- MVP is genuinely minimal — it solves the core job, nothing more.
- MLP is meaningfully better than MVP — not just MVP with a label change.
- Trade-offs are quantified where possible, not vague.
- Recommendation is opinionated but honest about downsides.

**Anti-patterns:** MVP that's actually MLP, presenting options without a recommendation, hiding real trade-offs, scope options that aren't genuinely different.

## Framework References
- **MoSCoW** — Must/Should/Could/Won't prioritization for requirements.
- **Shape Up (Appetite)** — Fixed time, variable scope approach.

## Formatting Guidelines
- Use a single table showing all requirements mapped to each option.
- Check marks make inclusion/exclusion instantly scannable.
- Bold the recommended option.
- Keep trade-off summary to one comparison table.

## Example
**MVP:** "Users can connect one data source and see a basic dashboard. No customization, no sharing, no exports."

**MLP:** "Users can connect up to 3 data sources, customize the layout, and share via link. No scheduled reports or exports."

**Recommendation:** "Ship MLP. MVP doesn't clear the bar for enterprise customers — they'd try it and churn. MLP adds 2 weeks but doubles the retention probability."
