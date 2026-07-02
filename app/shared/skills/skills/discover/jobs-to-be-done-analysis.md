# Jobs-to-Be-Done Analysis

## Purpose
Conduct a full JTBD analysis — identifying functional, emotional, and social jobs customers are hiring your product to do, mapping job steps, and scoring underserved needs using the importance vs. satisfaction framework (Outcome-Driven Innovation). JTBD analysis shifts product thinking from features to customer outcomes and reveals the highest-value innovation opportunities.

## Auto-Trigger Patterns
- "JTBD analysis"
- "jobs to be done for [product/segment]"
- "what job does [product] do for customers"
- "outcome-driven innovation"
- "identify underserved needs"
- "customer jobs analysis"
- "job mapping for [area]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Product area or customer segment | Yes | User prompt |
| Customer research (interviews, observations) | Recommended | Prior research outputs |
| Customer profiles | Optional | `context/products/*/customers.md` |
| Competitive context | Optional | `context/products/*/competitors.md` |
| Product capabilities | Optional | `context/products/*/overview.md` |

## Process
1. **Identify the core job** — Define the main job the customer is trying to get done. Use the format: "[Verb] + [object of the verb] + [contextual clarifier]." Example: "Monitor the health of my production systems in real-time."
2. **Decompose into job types:**
   - **Functional jobs** — The practical task the customer needs to accomplish.
   - **Emotional jobs** — How the customer wants to feel (or avoid feeling) while doing the job.
   - **Social jobs** — How the customer wants to be perceived by others.
3. **Map the job steps** — Break the core functional job into its universal process steps:
   - Define → Locate → Prepare → Confirm → Execute → Monitor → Modify → Conclude.
   - Not every job has all steps. Identify which are relevant.
4. **Identify desired outcomes per step** — For each job step, list what the customer wants to achieve. Use the format: "[Minimize/Maximize] + [metric] + [context]." Example: "Minimize the time it takes to identify which system is causing an alert."
5. **Survey importance and satisfaction** — Rate each outcome on a 1-10 scale for:
   - Importance: How critical is this outcome to the customer?
   - Satisfaction: How well do current solutions deliver on this outcome?
6. **Calculate opportunity scores** — Opportunity = Importance + max(Importance - Satisfaction, 0). Scores > 10 indicate underserved needs.
7. **Map the opportunity landscape** — Plot outcomes on an importance vs. satisfaction grid. Identify:
   - Underserved (high importance, low satisfaction) — Innovation opportunity.
   - Overserved (low importance, high satisfaction) — Potential to simplify.
   - Table-stakes (high importance, high satisfaction) — Must maintain.
8. **Generate strategic recommendations** — Prioritize the top underserved outcomes. Identify solution hypotheses for each.

## Output Format
```
## JTBD Analysis: [Product / Segment]

### Core Job Statement
> [Verb] + [object] + [contextual clarifier]

### Job Types
| Type | Job Statement |
|------|--------------|
| Functional | ... |
| Emotional | ... |
| Social | ... |

### Related Jobs
- [Adjacent job 1]
- [Adjacent job 2]

### Job Map
| Step | Description | Key Outcomes |
|------|------------|-------------|
| 1. Define | ... | ... |
| 2. Locate | ... | ... |
| 3. Prepare | ... | ... |
| 4. Confirm | ... | ... |
| 5. Execute | ... | ... |
| 6. Monitor | ... | ... |
| 7. Modify | ... | ... |
| 8. Conclude | ... | ... |

### Desired Outcomes (Scored)
| # | Outcome | Job Step | Importance | Satisfaction | Opportunity |
|---|---------|----------|-----------|-------------|-------------|
| 1 | Minimize the time to... | Execute | 9 | 4 | 14 |
| 2 | Minimize the likelihood of... | Monitor | 8 | 7 | 9 |

### Opportunity Landscape
```
High Importance
    |
    |  UNDERSERVED        TABLE STAKES
    |  (Innovate here)    (Maintain)
    |
    +--------------------------
    |
    |  LOW PRIORITY       OVERSERVED
    |  (Ignore)           (Simplify)
    |
Low Importance
    Low Satisfaction  →  High Satisfaction
```

### Top Underserved Needs
| Rank | Outcome | Score | Solution Hypothesis |
|------|---------|-------|-------------------|
| 1 | ... | 14 | ... |
| 2 | ... | 13 | ... |

### Overserved Opportunities (Simplify/Reduce)
| Outcome | Score | Simplification Idea |
|---------|-------|--------------------|
| ... | ... | ... |

### JTBD Canvas Summary
| Dimension | Detail |
|-----------|--------|
| Core job | ... |
| Job executor | ... |
| Current solutions | ... |
| Biggest unmet need | ... |
| Innovation opportunity | ... |
```

## Quality Standards
- Job statements are solution-agnostic — they describe what the customer needs to accomplish, not how.
- Outcomes use the minimize/maximize format for measurability.
- Opportunity scores are calculated consistently using the ODI formula.
- Emotional and social jobs are captured, not just functional ones.
- Analysis distinguishes between jobs the customer is trying to do and features the product currently has.

**Anti-patterns:** Writing job statements that embed solutions ("use our dashboard to..."), confusing features with outcomes, skipping emotional/social jobs, scoring without customer input (team assumptions only), treating all outcomes as equally important.

## Framework References
- **Jobs-to-Be-Done** — Christensen's framework for understanding why customers "hire" products.
- **Outcome-Driven Innovation (ODI)** — Ulwick's quantitative approach to JTBD with opportunity scoring.
- **Job Mapping** — Universal job process steps from Define through Conclude.

## Formatting Guidelines
- Use blockquote for the core job statement to make it prominent.
- Job map as a sequential table.
- Outcomes table sorted by opportunity score (descending).
- Opportunity landscape as a simple 2×2 grid.
- Bold the top 3 underserved needs.

## Example
**Scenario:** JTBD analysis for a DevOps monitoring product.

**Core job:** "Monitor the health of my production systems so I can detect and resolve issues before they impact customers."

**Top underserved outcome:** "Minimize the time it takes to identify the root cause of a cascading failure across microservices" — Importance: 9.5, Satisfaction: 3.2, Opportunity Score: 15.8.

**Solution hypothesis:** AI-powered root cause analysis that traces cascading failures across service dependencies and presents the likely origin point within 30 seconds of alert trigger.
