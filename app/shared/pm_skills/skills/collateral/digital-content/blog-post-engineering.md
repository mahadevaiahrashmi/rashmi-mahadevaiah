# Blog Post — Engineering

## Purpose
Creates a technical blog post detailing the engineering behind a feature or system—the challenge, the approach, trade-offs made, results achieved, and lessons learned. Written for a technical audience to build engineering brand and attract talent.

## Auto-Trigger Patterns
- "Write an engineering blog post about [feature/system]"
- "Create a technical deep-dive post"
- "I need a behind-the-scenes engineering post"
- "Help me write about how we built [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Technical challenge, approach taken, trade-offs, results, key learnings
- **Optional:** Architecture diagrams, performance benchmarks, code snippets, team context, open source components
- **Reference files:** product-brief.md, architecture-overview.md, post-mortem-report.md

## Process
1. **Find the interesting problem** — What made this technically challenging or novel?
2. **Explain the context** — Why did this matter? What were the constraints?
3. **Walk through the approach** — Design decisions, alternatives considered, why this path was chosen.
4. **Show the trade-offs** — What did you sacrifice? What would you do differently?
5. **Share results** — Performance data, reliability improvements, user impact.
6. **Extract learnings** — What did the team learn that others can apply?

## Output Format
```
# [Title: The Technical Challenge, Stated Clearly]

**Author:** [Engineer name and title]

[Opening: The problem that kicked this off. Why it was interesting.]

## The Challenge
[Technical context. Scale. Constraints. Why naive approaches fail.]

## Approaches We Considered
[Option A: Pros/cons. Option B: Pros/cons. Why we chose what we chose.]

## Our Approach
[Detailed walkthrough. Architecture decisions. Key algorithms or patterns.]
[Code snippets where they illuminate the approach.]
[Diagrams for complex system interactions.]

## Trade-offs
[What we gained. What we gave up. What we'd do differently.]

## Results
[Before/after benchmarks. Reliability data. User impact metrics.]

## Lessons Learned
[Generalizable insights for other engineers facing similar challenges.]

## What's Next
[Future improvements. Open questions. Related work.]
```

## Quality Standards
- The post teaches something transferable—another engineer should learn from it.
- Trade-offs are discussed honestly, not just the successful parts.
- Technical depth is sufficient for a peer engineer to understand and evaluate the approach.
- **Anti-patterns:** Marketing dressed as engineering, no trade-offs discussed, code without context, too shallow for the technical audience.

## Audience
Software engineers, architects, and technical leaders—both potential hires and the broader technical community. They value intellectual honesty, technical depth, and practical learnings. Great engineering posts attract great engineers.

## Formatting Guidelines
- 1000-2000 words. Code blocks, architecture diagrams, and performance charts.
- Author byline with engineering title.
- Conversational but technically precise tone.
- Cross-post to Hacker News, engineering subreddits, or relevant communities.

## Example
**Opening:** "When we hit 10,000 concurrent WebSocket connections, our notification system started dropping messages. Not many—about 0.3%—but enough that users noticed. This is the story of how we rebuilt our real-time pipeline to handle 100x that load while actually reducing our infrastructure costs by 40%."
