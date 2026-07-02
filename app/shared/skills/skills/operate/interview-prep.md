# Interview Prep

## Purpose
Prepare the PM for either side of the interview process. For conducting interviews: build a competency-based question bank, evaluation rubric, and panel coordination plan. For being interviewed: prepare STAR stories, product case frameworks, metric analysis approaches, and strategy case structures.

## Auto-Trigger Patterns
- "Help me prepare for an interview"
- "Interview questions for PM role"
- "PM interview prep"
- "I'm interviewing for…"
- "Help me interview candidates for…"
- "Product case prep"
- "STAR stories for…"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Direction** (required) — conducting or being interviewed
- **Role level** (required for conducting) — junior PM, PM, senior PM, GPM, VP
- **Job description** (optional) — specific role requirements
- **PM's experience** (required for being interviewed) — background, key accomplishments, product areas
- **Company context** (optional for being interviewed) — target company, product, culture

## Process
### Conducting Interviews
1. **Define competencies to assess** — product sense, analytical, execution, leadership, collaboration, technical
2. **Design question bank** by competency — behavioral (STAR), case, and situational questions
3. **Create evaluation rubric** — what great/good/adequate/poor looks like for each competency
4. **Plan interview panel** — who covers which competencies, avoid redundancy
5. **Prepare calibration guide** — how to align interviewers on standards

### Being Interviewed
1. **Audit PM's experience** — identify strongest accomplishments across product, analytical, leadership, and collaboration
2. **Build STAR stories** — for each key competency, prepare Situation-Task-Action-Result narratives
3. **Practice product cases** — product design, improvement, strategy, estimation
4. **Practice metric cases** — define success metrics, diagnose metric changes, design experiments
5. **Prepare questions to ask** — thoughtful questions that demonstrate product thinking

## Output Format
```markdown
# Interview Prep: [Conducting / Being Interviewed]

---
## FOR CONDUCTING

### Competency Assessment Plan
| Competency | Interviewer | Time | Question Type |
|-----------|------------|------|--------------|

### Question Bank
#### Product Sense
- "Tell me about a time you identified a customer need that wasn't obvious…"
- Case: "How would you improve [product]?"

#### Analytical
- "Walk me through how you'd define success metrics for…"
- Case: "Metric X dropped 20%. How would you diagnose?"

#### Execution
- "Tell me about a time you shipped under tight constraints…"

#### Leadership & Collaboration
- "Describe a time you influenced without authority…"

### Evaluation Rubric
| Competency | Strong Hire | Hire | No Hire | Strong No Hire |
|-----------|-----------|------|---------|---------------|

### Panel Coordination
| Round | Interviewer | Focus | Duration |
|-------|------------|-------|---------|

---
## FOR BEING INTERVIEWED

### STAR Story Bank
| Competency | Story Title | Situation | Task | Action | Result |
|-----------|------------|-----------|------|--------|--------|
| Product Sense | "[Title]" | … | … | … | … |

### Product Case Framework
1. Clarify: users, goals, constraints
2. Structure: user segments, use cases, prioritization
3. Solution: propose, evaluate trade-offs
4. Metrics: define success, measurement plan
5. Risks: anticipate and mitigate

### Metric Case Framework
1. Clarify the metric definition
2. Segment: by user type, platform, geography, time
3. Hypothesize: external vs internal causes
4. Investigate: what data to look at
5. Act: recommend based on findings

### Questions to Ask
- "[Thoughtful question about product strategy]"
- "[Question about team culture and PM empowerment]"

### Preparation Checklist
- [ ] Research company product and recent news
- [ ] Prepare 5+ STAR stories covering key competencies
- [ ] Practice 3 product cases out loud
- [ ] Prepare 5+ questions to ask
```

## Quality Standards
- Questions assess actual PM competencies, not trivia or gotchas
- STAR stories have quantified results where possible
- Evaluation rubric distinguishes signal from noise
- Case frameworks are structures, not memorized answers
- **Anti-patterns**: Brainteaser questions; vague rubrics ("is smart"); identical questions for all levels; unpracticed STAR stories that ramble

## Framework References
- Competency-based interviewing methodology
- STAR (Situation-Task-Action-Result) framework
- PM competency models (product sense, execution, strategic thinking, leadership)
- Case interview structures for product roles

## Formatting Guidelines
- Question bank organized by competency with suggested probes
- STAR stories as structured rows for quick reference
- Case frameworks as numbered steps for in-interview use
- Rubric with clear behavioral anchors at each level

## Example
STAR story: "Competency: Influence without authority. Situation: Needed eng team to prioritize security fix but no authority over their backlog. Task: Get critical vulnerability addressed within 2 weeks. Action: Quantified customer churn risk ($500K ARR), presented to eng director with data, proposed scope reduction to fit in sprint. Result: Fix shipped in 10 days, prevented 3 enterprise customers from churning."
