# Training Materials

## Purpose
Creates PM team training content including framework workshops, skill-building exercises, case studies for practice, a curated reading list, and mentorship program structure. Designed to develop PM competencies systematically and create a learning culture within the product team.

## Auto-Trigger Patterns
- "Create PM training materials"
- "Build a PM skill development program"
- "I need training content for the product team"
- "Help me design PM learning and development"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Team skill gaps, PM levels on the team, competencies to develop, available time for training
- **Optional:** External courses/certifications, industry best practices, team feedback on development needs
- **Reference files:** product-charter.md, hiring-rubric.md, team-onboarding-guide.md

## Process
1. **Assess gaps** — Survey the team on self-rated skills and development interests.
2. **Prioritize competencies** — Focus on 3-4 competencies per quarter that align with team needs.
3. **Design workshops** — Interactive sessions: teach the framework, practice with exercises, debrief.
4. **Create case studies** — Real or anonymized scenarios that practice specific skills.
5. **Curate resources** — Books, articles, courses, and talks organized by competency and level.
6. **Build mentorship** — Pair senior and junior PMs with structured goals and cadence.

## Output Format
```
# PM Development Program: [Team/Quarter]

## Competency Focus Areas
1. [Competency 1]: [Why this matters now]
2. [Competency 2]: [Why this matters now]
3. [Competency 3]: [Why this matters now]

## Workshop Series

### Workshop 1: [Framework Name]
- **Duration:** [60-90 minutes]
- **Facilitator:** [Name]
- **Objectives:** [What participants will be able to do after]
- **Format:**
  - Teach (15 min): [Framework explanation]
  - Practice (30 min): [Exercise description]
  - Debrief (15 min): [Discussion questions]
- **Pre-work:** [Reading or preparation]
- **Materials:** [Slides, handouts, exercises]

### Workshop 2-N: [Same structure]

## Case Studies

### Case Study 1: [Title]
**Scenario:** [Anonymized real situation]
**Skills practiced:** [Competency]
**Discussion questions:** [3-5 questions]
**Facilitator notes:** [Key teaching points]

## Reading List
| Level | Resource | Type | Competency | Time |
|-------|----------|------|-----------|------|
| All | [Book/Article] | [Book/Article/Course] | [Competency] | [Time] |

## Mentorship Program

### Structure
- **Pairing:** [How mentors and mentees are matched]
- **Cadence:** [Meeting frequency and format]
- **Goals:** [What each pair should achieve per quarter]
- **Topics:** [Suggested discussion areas by month]

### Mentor Responsibilities
[What's expected of mentors]

### Mentee Responsibilities
[What's expected of mentees]

## Quarterly Development Reviews
[How individuals assess progress and plan next quarter's learning]
```

## Quality Standards
- Workshops are interactive—at least 50% of time is practice, not lecture.
- Case studies are realistic and ambiguous enough to generate debate.
- Reading list is curated (not exhaustive) and includes estimated time.
- **Anti-patterns:** Lecture-only training, theoretical without practice, reading lists with 50+ items, mentorship without structure, no follow-up.

## Audience
PM team members at all levels who want to develop their skills, and PM managers who want to invest in their team's growth. The program should be aspirational but practical—people are busy.

## Formatting Guidelines
- One-page overview of the quarterly program.
- Detailed workshop plans for facilitators.
- Case studies as standalone documents.
- Reading list: 5-8 items per quarter maximum.

## Example
**Workshop exercise:** "Prioritization Under Constraints: You have 5 feature requests, 2 engineers, and 6 weeks. Here are the details for each request: [customer impact, effort estimate, strategic alignment, revenue potential, tech debt implications]. Rank them and present your rationale. You have 15 minutes. Then we'll compare approaches and discuss which frameworks people used and why results differ."
