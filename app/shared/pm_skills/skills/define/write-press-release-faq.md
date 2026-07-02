# Write Press Release / FAQ

## Purpose
Apply Amazon's Working Backwards method — write the press release announcing the feature as if it has already shipped, then draft the FAQ. This forces clarity on customer value, surfaces weak thinking early, and creates an alignment artifact that's far more compelling than a feature list. If you can't write a compelling press release, the feature isn't ready.

## Auto-Trigger Patterns
- "write a press release for [feature]"
- "working backwards for [idea]"
- "PR/FAQ for [initiative]"
- "write an internal press release"
- "help me do a working backwards exercise"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature or initiative description | Yes | User prompt |
| Target customer | No | `context/products/*/customers.md` |
| Problem being solved | Yes | User prompt |
| Strategic context | Optional | `context/company/overview.md` |
| Competitive context | Optional | `context/products/*/competitors.md` |

## Process
1. **Write the headline** — One sentence that captures the customer benefit. No jargon.
2. **Write the subheadline** — Expand on who benefits and what changes for them.
3. **Describe the problem** — What's painful today? Ground it in the customer's world.
4. **Present the solution** — How the product solves it. Focus on experience, not features.
5. **Include a customer quote** — A fictional but realistic quote from a delighted user.
6. **Include an executive quote** — Why this matters to the company's mission.
7. **Add the call to action** — How customers get started.
8. **Draft the FAQ** — Anticipated questions from customers, stakeholders, press, and skeptics.
9. **Quality-check** — Would a customer care? Is the press release believable? Does the FAQ address hard questions honestly?

## Output Format
```
## Press Release: [Feature Name]

### [Headline — customer benefit in one sentence]
#### [Subheadline — who benefits and how]

**[City, Date]** — [Company] today announced [feature], which [benefit].

[Solution paragraph — how the product changes the customer experience.]

"[Customer quote]," said [Name, Title, Company].

[Additional detail paragraph.]

"[Executive quote]," said [Name, Title].

[Feature] is available [when/how]. To get started, [call to action].

---

### Frequently Asked Questions

**Customer FAQ**
**Q: [Question]**  A: [Answer]

**Stakeholder FAQ**
**Q: [Question]**  A: [Answer]

**Skeptic FAQ**
**Q: [Hard question]**  A: [Honest answer]
```

## Quality Standards
- Headline is benefit-driven, not feature-driven.
- Customer quote is specific and credible — not generic praise.
- FAQ addresses the hard questions, not just softballs.
- A non-technical person can understand the entire document.

**Anti-patterns:** Technical jargon, internal-facing language, avoiding hard questions in FAQ, customer quote that no real person would say.

## Framework References
- **Working Backwards (Amazon)** — Start from the desired customer experience and work backward.
- **JTBD** — Frame the problem in terms of the job customers are trying to do.

## Formatting Guidelines
- Follow actual press release formatting conventions.
- Quotes in quotation marks.
- FAQ organized by audience: customers, stakeholders, skeptics.
- Keep the press release under 500 words.

## Example
**Headline:** "Acme Analytics Now Connects to Your Data in 60 Seconds — No Engineering Required"

**Customer Quote:** "I used to spend two days every quarter just getting our Salesforce data into the analytics tool. Now I click 'Connect' and it's done before my coffee gets cold." — Sarah Chen, RevOps Lead at TechCorp.
