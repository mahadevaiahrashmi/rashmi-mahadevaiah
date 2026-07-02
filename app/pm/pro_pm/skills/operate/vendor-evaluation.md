# Vendor Evaluation

## Purpose
Systematically evaluate tools, platforms, or vendors against structured criteria. Produce a weighted requirements matrix, side-by-side comparison, reference check questions, total cost analysis, and a clear recommendation with rationale. Remove bias and FOMO from vendor selection.

## Auto-Trigger Patterns
- "Evaluate [tool/vendor]"
- "Compare [vendor A] vs [vendor B]"
- "Should we use [tool]"
- "Vendor evaluation for…"
- "Tool selection for…"
- "Buy vs build for [capability]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Need description** (required) — what capability or problem the tool/vendor should address
- **Candidates** (optional) — specific vendors to evaluate, or ask system to suggest
- **Requirements** (required) — must-haves, nice-to-haves, deal-breakers
- **Budget** (optional) — available budget and approval thresholds
- **Team context** (optional) — technical stack, team size, existing tools, integration needs
- **Timeline** (optional) — when decision is needed, implementation timeline

## Process
1. **Define evaluation criteria** — categorize as: functional requirements, technical requirements, vendor viability, cost, support, security/compliance
2. **Weight criteria** — assign importance weights (e.g., 1-5) based on actual priorities
3. **Research candidates** — gather information on each vendor/tool
4. **Score each candidate** against criteria (1-5 scale)
5. **Calculate weighted scores** — identify top candidates
6. **Deep-dive top candidates** — reference checks, POC recommendations, contract review
7. **Total cost analysis** — licensing, implementation, maintenance, switching costs
8. **Generate recommendation** with rationale, risks, and implementation plan

## Output Format
```markdown
# Vendor Evaluation: [Capability Needed]
**Decision needed by**: … | **Budget**: …
**Candidates evaluated**: [list]

## Requirements Matrix
| Requirement | Category | Weight | Must-Have? |
|-------------|----------|--------|-----------|

## Evaluation Scorecard
| Criteria | Weight | [Vendor A] | [Vendor B] | [Vendor C] |
|----------|--------|-----------|-----------|-----------|
| [Req 1]  | 5      | 4 (20)    | 3 (15)    | 5 (25)    |
| **Total** |       | **XX**    | **XX**    | **XX**    |

## Detailed Comparison
### [Vendor A]
- **Strengths**: …
- **Weaknesses**: …
- **Best for**: …

### [Vendor B]
…

## Total Cost Analysis (3-year)
| Cost Component | [Vendor A] | [Vendor B] | [Vendor C] |
|---------------|-----------|-----------|-----------|
| License/subscription | | | |
| Implementation | | | |
| Training | | | |
| Ongoing maintenance | | | |
| Switching cost | | | |
| **Total** | | | |

## Reference Check Questions
1. "How long did implementation take vs what was promised?"
2. "What's your biggest frustration with the tool?"
3. "Would you choose it again knowing what you know now?"
4. …

## Risk Assessment
| Vendor | Key Risk | Likelihood | Mitigation |
|--------|----------|-----------|------------|

## Recommendation
**Recommended**: [Vendor] — [1-2 sentence rationale]
**Runner-up**: [Vendor] — [When this would be better]
**Implementation plan**: [High-level timeline]
```

## Quality Standards
- Criteria weights reflect actual priorities, not equal weighting
- Scores are justified with specific evidence, not gut feelings
- Total cost includes hidden costs (implementation, training, switching)
- Recommendation includes conditions under which runner-up would be better
- **Anti-patterns**: Feature-checklist comparison without weighting; ignoring total cost of ownership; vendor demo bias; not checking references

## Framework References
- Weighted decision matrix methodology
- Total Cost of Ownership (TCO) analysis
- Gartner Magic Quadrant style vendor viability assessment

## Formatting Guidelines
- Scorecard table with weighted scores calculated
- Cost comparison as structured table with all components
- Reference check questions as ready-to-use list
- Recommendation as clear, concise statement with rationale

## Example
Evaluating analytics tools: "Requirement: self-serve analytics for product team. Weight: ease of use (5), SQL support (4), cost (3), integrations (5). Amplitude scores 92/100 (strong UX, weak SQL), Mixpanel scores 87/100 (good SQL, higher cost), PostHog scores 78/100 (open-source, requires more setup). Recommendation: Amplitude for non-technical team, PostHog if engineering capacity available for setup."
