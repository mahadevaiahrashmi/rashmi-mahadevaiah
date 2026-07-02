# PM Hiring Rubric

## Purpose
Creates a structured candidate evaluation rubric with competency scoring (1-5), level calibration benchmarks, red flags, green flags, and an overall recommendation framework. Ensures consistent, fair, and calibrated hiring decisions across all interviewers and candidates.

## Auto-Trigger Patterns
- "Create a PM hiring rubric"
- "Build a candidate evaluation scorecard"
- "I need a scoring framework for PM interviews"
- "Help me calibrate PM hiring decisions"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** PM level being hired, competencies to evaluate, scoring scale
- **Optional:** Existing rubrics, calibration data from past hires, company values, level definitions
- **Reference files:** hiring-interview-questions.md, product-charter.md, training-materials.md

## Process
1. **Define competencies** — Select 5-7 competencies critical for the level.
2. **Build the scoring scale** — Behavioral descriptions for each score level per competency.
3. **Calibrate to level** — A "4" for an APM looks different from a "4" for a Director.
4. **Identify signals** — Green flags (strong hire signals) and red flags (concerns) per competency.
5. **Design the recommendation framework** — How scores translate to hire/no-hire decisions.
6. **Test with past candidates** — Retroactively score known good and bad hires to calibrate.

## Output Format
```
# PM Hiring Rubric: [Level]

## Competency Scoring (1-5 Scale)
1 = Well below bar | 2 = Below bar | 3 = Meets bar | 4 = Exceeds bar | 5 = Exceptional

### Product Sense
| Score | Behavioral Description |
|-------|----------------------|
| 5 | [Exceptional: innovative thinking, deep user empathy, elegant trade-offs] |
| 4 | [Strong: clear framework, multiple perspectives, good prioritization] |
| 3 | [Meets bar: solid approach, reasonable trade-offs, some structure] |
| 2 | [Below: surface-level, missing user perspective, weak prioritization] |
| 1 | [Well below: no framework, feature listing, no trade-offs] |

### Analytical Thinking
[Same structure]

### Execution & Delivery
[Same structure]

### Communication
[Same structure]

### Leadership & Influence
[Same structure]

### Strategic Thinking (Senior+ only)
[Same structure]

## Green Flags 🟢
- [Specific positive signal 1]
- [Specific positive signal 2]
- [Specific positive signal 3]

## Red Flags 🔴
- [Specific concern 1]
- [Specific concern 2]
- [Specific concern 3]

## Level Calibration
| Competency | APM Bar (3) | PM Bar (3) | Senior Bar (3) | Director Bar (3) |
|------------|------------|-----------|----------------|------------------|
| Product Sense | [Description] | [Description] | [Description] | [Description] |

## Overall Recommendation Framework
- **Strong Hire:** Average ≥4.0, no competency below 3, at least one 5.
- **Hire:** Average ≥3.5, no competency below 2, majority at 3+.
- **Lean No:** Average 3.0-3.4 OR one critical competency below 3.
- **Strong No:** Average <3.0 OR two+ competencies below 2 OR any red flag.

## Debrief Template
[Structure for post-interview discussion. Evidence-based decisions.]
```

## Quality Standards
- Behavioral descriptions are specific enough that two interviewers would score the same answer similarly.
- Level calibration shows how expectations change from APM to Director.
- Red flags are specific and evidence-based, not gut feelings.
- **Anti-patterns:** Vague scoring criteria, no level calibration, rubric not used in practice, green/red flags based on pattern matching instead of evidence.

## Audience
Hiring managers, interview panel members, and recruiters involved in PM hiring. The rubric ensures consistency across interviewers and provides a defensible basis for hiring decisions.

## Formatting Guidelines
- One page per competency (for detailed version). One-page summary scorecard.
- Behavioral descriptions use observable signals, not trait labels.
- Include a debrief discussion template.
- Update annually based on hiring outcome data.

## Example
**Analytical Thinking — Score 4:** "Candidate independently identified that the right metric wasn't the one asked about, reframed the problem, and proposed a measurement framework with leading and lagging indicators. Used mental math confidently to estimate market size. Asked clarifying questions about data availability rather than assuming. Acknowledged uncertainty in estimates and suggested how to validate."
