# PM Hiring Loop

## Purpose
Design and run a comprehensive PM hiring loop: craft the job description, define screening criteria, plan interview rounds by competency, create question sets, build evaluation rubrics, guide calibration, and facilitate the debrief. Ensure consistent, fair, competency-based hiring decisions.

## Auto-Trigger Patterns
- "We're hiring a PM"
- "Set up a PM hiring loop"
- "Interview plan for PM role"
- "PM job description for…"
- "Hiring loop for [level] PM"
- "Debrief facilitation guide"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Role details** (required) — level, product area, team, scope
- **Key competencies** (required) — what matters most for this specific role
- **Team context** (optional) — current team composition, gaps, culture
- **Hiring manager preferences** (optional) — must-haves, deal-breakers
- **Company hiring process** (optional) — existing interview framework

## Process
1. **Define role requirements** — must-have vs nice-to-have skills, experience, and attributes
2. **Write job description** — compelling, specific, and inclusive
3. **Design screening criteria** — resume screen rubric, phone screen questions
4. **Plan interview rounds** — assign competencies to rounds, avoid redundancy
5. **Create question sets** — behavioral, case, and situational per round
6. **Build evaluation rubric** — clear behavioral anchors for each rating level
7. **Prepare calibration guide** — align interviewers on standards and expectations
8. **Design debrief process** — structured format to reduce bias

## Output Format
```markdown
# PM Hiring Loop: [Role Title]
**Level**: … | **Product Area**: … | **Hiring Manager**: …

## Job Description
### About the Role
### Responsibilities
### Requirements (must-have)
### Preferred (nice-to-have)
### What We Offer

## Screening Criteria
### Resume Screen
| Criteria | Signal | Pass/Fail |
|----------|--------|-----------|

### Phone Screen (30 min)
| Question | What to Listen For |
|----------|-------------------|

## Interview Plan
| Round | Interviewer | Competency | Duration | Format |
|-------|------------|-----------|----------|--------|
| 1 | [Name] | Product Sense | 45 min | Case + Behavioral |
| 2 | [Name] | Analytical | 45 min | Metric Case |
| 3 | [Name] | Execution | 45 min | Behavioral |
| 4 | [Name] | Leadership | 45 min | Behavioral + Situational |
| 5 | [Name] | Culture Add | 30 min | Conversational |

## Question Bank by Competency

### Product Sense
- Behavioral: "Tell me about a product decision you're most proud of…"
- Case: "How would you approach [relevant product challenge]?"
- Probes: …

### Analytical
…

## Evaluation Rubric
| Rating | Product Sense | Analytical | Execution | Leadership |
|--------|-------------|-----------|-----------|------------|
| Strong Hire | [Behavioral anchor] | | | |
| Hire | | | | |
| No Hire | | | | |
| Strong No Hire | | | | |

## Calibration Guide
- **This role vs others**: How this role differs from generic PM
- **Level expectations**: What distinguishes [level] from [level-1]
- **Common pitfalls**: [Biases to watch for in evaluation]

## Debrief Facilitation
1. Each interviewer shares rating independently (no anchoring)
2. Round-robin: evidence first, then rating
3. Discuss disagreements — seek understanding, not consensus
4. Hiring manager makes final call with stated rationale
5. Document decision and reasoning

## Candidate Experience
- Timeline communication: [when to respond at each stage]
- Rejection approach: [constructive, timely]
- Offer approach: [competitive, personalized]
```

## Quality Standards
- Interview rounds have no competency overlap — each round assesses distinct areas
- Rubric uses behavioral anchors, not vague descriptions
- Debrief process reduces anchoring and groupthink biases
- Job description is specific enough to attract the right candidates
- **Anti-patterns**: All interviewers asking the same questions; rubric with only "good/bad"; no calibration leading to inconsistent evaluation; debrief where loudest voice wins

## Framework References
- Structured interviewing methodology
- Competency-based assessment frameworks
- Bias reduction in hiring (structured rubrics, independent scoring)

## Formatting Guidelines
- Interview plan as single table for quick reference
- Question bank organized by competency with probing follow-ups
- Rubric with specific behavioral examples at each level
- Debrief process as numbered steps

## Example
For a Senior PM (Growth) hire: "Round 1: Product Sense — 'Design a feature to improve activation for [our product].' Round 2: Analytical — 'Our sign-up conversion dropped 15%. Walk me through your investigation.' Round 3: Execution — 'Tell me about a time you shipped under ambiguous requirements.' Calibration note: For senior level, we expect candidates to proactively frame the problem before solving, demonstrate cross-functional influence, and think at strategy level not just feature level."
