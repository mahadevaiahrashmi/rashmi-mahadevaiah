# PM Hiring Interview Questions

## Purpose
Provides a comprehensive library of PM interview questions organized by level (APM to Director) and competency (product sense, analytical, execution, leadership, strategy). Includes evaluation criteria per question to ensure consistent, calibrated hiring decisions across interviewers.

## Auto-Trigger Patterns
- "Create PM interview questions for [level]"
- "Build a PM interview question bank"
- "I need interview questions for a [APM/PM/Senior PM/Director] role"
- "Help me design a PM interview loop"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** PM level being hired, competencies to evaluate, interview format (phone, onsite, panel)
- **Optional:** Role-specific requirements, team context, existing interview process, calibration data
- **Reference files:** hiring-rubric.md, product-charter.md, team-onboarding-guide.md

## Process
1. **Define competencies for the level** — What skills matter most at this level?
2. **Select questions per competency** — 2-3 questions per competency, calibrated to level.
3. **Write evaluation criteria** — What does a great answer look like? Good? Weak?
4. **Design the interview loop** — Which interviewer covers which competency.
5. **Create scoring guidelines** — How to rate and calibrate across interviewers.
6. **Train interviewers** — Distribute questions with scoring criteria before the interview.

## Output Format
```
# PM Interview Question Bank

## By Level

### APM (0-2 years)
Focus: Product sense, analytical thinking, communication, learning velocity.

### PM (2-5 years)
Focus: Execution, prioritization, cross-functional leadership, customer empathy.

### Senior PM (5-8 years)
Focus: Strategy, influence without authority, ambiguity navigation, mentoring.

### Director (8+ years)
Focus: Vision, org building, executive communication, portfolio strategy.

## By Competency

### Product Sense
**Q1:** "[Design/improve a product for X users]"
- Great answer: [Shows user empathy, frameworks, creativity, trade-offs]
- Good answer: [Reasonable approach, some structure, basic trade-offs]
- Weak answer: [Feature listing, no user focus, no prioritization]
**Level adjustment:** APM: simpler product. Director: strategic product portfolio.

### Analytical Thinking
**Q1:** "[How would you measure success for X?]"
- Great: [Defines leading/lagging metrics, identifies risks, proposes experiments]
- Good: [Reasonable metrics, some structure]
- Weak: [Vanity metrics, no framework, can't define success]

### Execution
**Q1:** "[Tell me about a product you shipped. What went well/wrong?]"
- Great: [Clear narrative, honest about challenges, specific learnings]

### Leadership
**Q1:** "[How did you handle a disagreement with engineering/design?]"
- Great: [Empathy, data-driven resolution, preserved relationship]

### Strategy
**Q1:** "[How would you decide where to invest next year?]"
- Great: [Market analysis, customer data, strategic frameworks, trade-offs]

## Interview Loop Design
| Round | Interviewer | Competency | Duration |
|-------|------------|------------|----------|

## Scoring Guide
1 = Strong no hire | 2 = Lean no | 3 = Lean yes | 4 = Strong hire
```

## Quality Standards
- Questions are open-ended and allow candidates to demonstrate depth, not just knowledge.
- Evaluation criteria distinguish between great, good, and weak answers concretely.
- Level calibration ensures APM and Director candidates aren't asked the same depth of question.
- **Anti-patterns:** Gotcha questions, brain teasers, questions with one right answer, no scoring criteria, biased questions.

## Audience
Hiring managers and interview panel members who need to evaluate PM candidates consistently. Interviewers range from experienced to first-time—the guide should enable consistent evaluation regardless.

## Formatting Guidelines
- Organized by competency first, level second. 3-5 questions per competency.
- Evaluation criteria in bullet format: great/good/weak answer signals.
- Include follow-up probes for each question.
- One-page cheat sheet version for interviewers to bring to interviews.

## Example
**Product Sense (Senior PM):** "Your team has a product used by 50K users. Usage is growing 5% month-over-month, but NPS dropped from 62 to 48 in the last quarter. Walk me through how you'd diagnose and address this." Great: Segments the data (which users, which features), proposes investigation plan, considers multiple hypotheses, suggests quick wins and structural fixes. Follow-up: "What if the data shows that your newest feature is loved by new users but frustrates power users?"
