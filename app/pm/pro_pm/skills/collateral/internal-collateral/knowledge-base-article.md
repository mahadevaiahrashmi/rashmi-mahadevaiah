# Knowledge Base Article

## Purpose
Creates internal knowledge base articles with a clear title, summary, detailed content, related article links, ownership, last updated date, and feedback mechanism. Captures institutional knowledge in a findable, maintainable format that reduces repeated questions and accelerates team learning.

## Auto-Trigger Patterns
- "Write a knowledge base article about [topic]"
- "Create an internal KB article for [subject]"
- "I need to document [process/decision/knowledge]"
- "Help me capture institutional knowledge about [topic]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Topic, key information to capture, target audience, owner
- **Optional:** Related articles, source materials, FAQs, decision context
- **Reference files:** process-documentation.md, product-charter.md, team-onboarding-guide.md

## Process
1. **Identify the need** — What question does this answer? Who keeps asking it?
2. **Research and verify** — Gather accurate information from authoritative sources.
3. **Write for findability** — Title and summary should match how people search for this topic.
4. **Structure for scanning** — Headers, bullets, and callouts. Most readers scan, not read.
5. **Link related content** — Connect to related articles to build a knowledge graph.
6. **Assign ownership** — Someone is responsible for keeping this article accurate.
7. **Enable feedback** — Readers should be able to flag outdated or incorrect information.

## Output Format
```
# [Article Title — Descriptive, Searchable]
**Owner:** [Name/Team] | **Last Updated:** [Date] | **Status:** [Current/Needs Review]

## Summary
[2-3 sentence overview. Answers "what is this about?" for someone scanning.]

## Context
[Why this matters. When you'd need this information.]

## Detailed Content

### [Section 1: Key Information]
[Clear, structured content addressing the topic]

### [Section 2: How-To / Process / Details]
[Step-by-step or detailed explanation]

### [Section 3: Common Questions]
**Q: [Frequently asked question]**
A: [Clear answer]

**Q: [Another common question]**
A: [Clear answer]

## Key Decisions & Rationale
[If this documents a decision: what was decided, why, alternatives considered]

## Related Articles
- [Related Article 1](link) — [One-line description of relevance]
- [Related Article 2](link) — [One-line description of relevance]

## Feedback
[How to suggest corrections or updates to this article.
e.g., "Comment on this doc or ping #product-ops in Slack"]

---
**Metadata**
- Created: [Date] by [Author]
- Last reviewed: [Date] by [Reviewer]
- Review schedule: [Quarterly / As needed / After each [event]]
- Tags: [searchable tags]
```

## Quality Standards
- The article answers the question someone actually has, not the question you wish they'd ask.
- Title matches how people search ("How do I..." or "What is..." or "[Topic Name]").
- Content is accurate and current—outdated KB articles are worse than no article.
- **Anti-patterns:** Articles that nobody can find, no ownership (becomes stale), too long (should be multiple articles), no update mechanism.

## Audience
Internal team members who need specific knowledge to do their jobs. They're searching for an answer to a specific question. Time-pressed and impatient—get to the point fast. Different team members may find the same article for different reasons.

## Formatting Guidelines
- Title: descriptive and searchable. Match common search queries.
- Summary: 2-3 sentences at the top. Answer the question immediately if possible.
- Use headers, bullets, and callout boxes for scanability.
- Keep articles focused—one topic per article. Link to related content.
- Include metadata: owner, date, tags, review schedule.

## Example
**Article:** "How We Make Pricing Decisions. Summary: This article explains our pricing decision framework, who has authority to change pricing, and how to request a pricing change. Context: Pricing questions come up in sales deals, product launches, and competitive responses. This captures our standard approach. Section 1: Pricing decisions are owned by the Product Lead in partnership with Finance. Changes to published pricing require VP Product approval. Custom deal pricing follows the CPQ process (see related article). Key Decision: In Q2 2025, we moved from per-seat to usage-based pricing for the API product. Rationale: Customer feedback showed seat-based pricing penalized adoption (see Customer Insights Report Q1). Related: CPQ Process, Pricing Tiers, Discount Approval Matrix."
