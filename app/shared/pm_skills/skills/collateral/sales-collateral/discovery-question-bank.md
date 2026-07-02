# Discovery Question Bank

## Purpose
Creates a comprehensive library of sales discovery questions organized by stage (qualification, discovery, evaluation, negotiation), by persona, and by use case. Questions are open-ended and designed to generate insights that shape the deal strategy—not just collect facts.

## Auto-Trigger Patterns
- "Create a discovery question bank for [product/segment]"
- "Build sales discovery questions"
- "I need discovery questions for [persona/stage]"
- "Help me improve our sales discovery process"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product value proposition, target personas, key pain points, deal stages
- **Optional:** Win/loss analysis themes, successful rep techniques, competitor landscape, buyer journey map
- **Reference files:** product-brief.md, sales-pitch-deck.md, customer-insights-report.md

## Process
1. **Map the buyer journey** — What information do we need at each stage to advance the deal?
2. **Write by persona** — Different roles care about different things. Tailor accordingly.
3. **Prioritize insight questions** — Questions that reveal pain, urgency, and decision dynamics > fact-gathering.
4. **Include follow-up prompts** — The best questions come from listening to the first answer.
5. **Test with top reps** — Validate that questions open conversations, not shut them down.
6. **Train on listening** — The bank should remind reps that questions are for listening, not leading.

## Output Format
```
# Discovery Question Bank: [Product/Market]

## How to Use This Guide
[Discovery principles. Ask open questions. Listen more than talk.
Adapt to the conversation—don't read from a list.]

## By Stage

### Qualification (Is this a real opportunity?)
- "[Question about problem severity and urgency]"
- "[Question about budget and decision timeline]"
- "[Question about decision-making process]"
- "[Question about current solution and satisfaction]"

### Discovery (What do we need to know to win?)
- "[Question about pain point depth and business impact]"
- "[Question about current workflow and workarounds]"
- "[Question about success criteria and measurement]"
- "[Question about stakeholders and champions]"

### Evaluation (How do we differentiate?)
- "[Question about evaluation criteria and weighting]"
- "[Question about competitive alternatives being considered]"
- "[Question about must-haves vs nice-to-haves]"
- "[Question about technical requirements and integration]"

### Negotiation (How do we close?)
- "[Question about approval process and timeline]"
- "[Question about implementation readiness]"
- "[Question about concerns or blockers]"

## By Persona

### [Technical Buyer]
- "[Technical depth questions]"
- "[Integration and architecture questions]"

### [Business Buyer]
- "[ROI and business impact questions]"
- "[Strategic alignment questions]"

### [Executive Sponsor]
- "[Strategic vision questions]"
- "[Risk and timeline questions]"

## By Use Case

### [Use Case 1]
- "[Pain-specific questions]"
- "[Outcome-specific questions]"

## Follow-Up Prompts
After they answer, go deeper:
- "Can you tell me more about that?"
- "What happens when that goes wrong?"
- "How does that affect [their stated goal]?"
- "What have you tried so far?"
```

## Quality Standards
- Questions are genuinely open-ended—no leading or yes/no questions.
- Every question has a strategic purpose (advancing the deal, qualifying, or differentiating).
- Follow-up prompts are included because first answers are rarely the real answer.
- **Anti-patterns:** Leading questions, interrogation-style lists, fact-gathering without insight, same questions for every persona.

## Audience
Sales reps conducting discovery calls. Junior reps will rely on the bank more heavily; senior reps will cherry-pick. The bank teaches a methodology, not just provides a list.

## Formatting Guidelines
- Organized by stage, then persona, then use case.
- 5-8 questions per category (not exhaustive—curated best questions).
- Include 1-2 "power questions" per section that consistently open up conversations.
- Mark the highest-impact questions with a ⭐.

## Example
**Discovery — Pain depth:** "⭐ Walk me through what happens today when [the problem] occurs. What's the immediate impact, and what's the ripple effect across the team?" Follow-up: "How often does that happen? What does it cost you—in time, money, or team frustration?" Insight goal: Quantify the pain and identify emotional drivers alongside financial ones.
