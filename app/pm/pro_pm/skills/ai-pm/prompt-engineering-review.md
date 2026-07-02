# Prompt Engineering Review

## Purpose
Review and improve prompts used in product features. Assess clarity, specificity, output quality, edge case handling, injection prevention, cost optimization, and consistency. Establish evaluation methodology and versioning practices for prompts that are treated as production code.

## Auto-Trigger Patterns
- "Review this prompt"
- "Improve my prompt"
- "Prompt engineering review"
- "Why is my prompt giving bad results"
- "Optimize this prompt"
- "Prompt quality check"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Prompt(s) to review** (required) — system prompt, user prompt template, few-shot examples
- **Expected output** (required) — what good output looks like
- **Current issues** (optional) — quality problems, edge cases, inconsistencies
- **Model being used** (optional) — which LLM (GPT-4, Claude, Llama, etc.)
- **Cost constraints** (optional) — token budget, latency requirements
- **Safety requirements** (optional) — content filters, injection concerns

## Process
1. **Assess clarity** — is the intent unambiguous? Would a new reader understand the goal?
2. **Evaluate specificity** — are output format, length, tone, and constraints well-defined?
3. **Check edge cases** — how does the prompt handle: empty input, very long input, adversarial input, ambiguous input, multi-language input
4. **Test injection resistance** — can user input manipulate the system prompt behavior?
5. **Review few-shot examples** — are they representative, diverse, and consistent?
6. **Assess cost efficiency** — are tokens being wasted on unnecessary context or verbose instructions?
7. **Evaluate consistency** — does the same input produce consistent quality output?
8. **Design evaluation methodology** — how to systematically measure prompt quality
9. **Recommend improvements** with before/after examples

## Output Format
```markdown
# Prompt Review: [Feature/Use Case]
**Model**: … | **Date**: … | **Reviewer**: …

## Current Prompt Assessment

### Clarity — [Score: X/5]
- [Specific findings]
- Ambiguous areas: …

### Specificity — [Score: X/5]
- Output format: [defined / vague]
- Length guidance: [defined / missing]
- Tone: [defined / inconsistent]
- Constraints: [defined / missing]

### Edge Case Handling — [Score: X/5]
| Edge Case | Current Behavior | Desired Behavior | Fix |
|-----------|-----------------|-----------------|-----|
| Empty input | [What happens] | [What should happen] | [Fix] |
| Very long input | | | |
| Adversarial input | | | |

### Injection Resistance — [Score: X/5]
- Tested attacks: [list]
- Vulnerabilities found: [list]
- Mitigations: [recommendations]

### Cost Efficiency — [Score: X/5]
- Current token usage: ~X tokens/request
- Optimization opportunities: …
- Estimated savings: X%

### Consistency — [Score: X/5]
- Tested with X identical inputs
- Consistency rate: X%
- Variance areas: …

## Improved Prompt

### Before
```
[Original prompt]
```

### After
```
[Improved prompt with annotations]
```

### Changes Made
| Change | Rationale | Expected Impact |
|--------|----------|----------------|

## Evaluation Methodology
### Test Dataset
- [X representative inputs covering normal cases and edge cases]

### Automated Eval Criteria
| Criterion | How to Measure | Pass Threshold |
|-----------|---------------|---------------|

### Human Eval Rubric
| Dimension | 1 (Poor) | 3 (Adequate) | 5 (Excellent) |
|-----------|----------|-------------|---------------|

## Versioning Recommendation
- Treat prompts as code: version control, review process, rollback capability
- A/B test prompt changes before full rollout
- Monitor output quality continuously

## Cost Analysis
| Configuration | Tokens/Request | Cost/Request | Monthly Estimate |
|--------------|---------------|-------------|-----------------|
| Current | | | |
| Optimized | | | |
```

## Quality Standards
- Review tests actual prompt behavior, not just reads the text
- Injection testing uses known attack patterns, not just obvious attempts
- Cost analysis includes realistic volume projections
- Improved prompt is tested against the same edge cases
- **Anti-patterns**: Reviewing prompts without testing them; ignoring injection risks; optimizing for cost at expense of quality; no versioning or rollback plan

## Framework References
- Prompt engineering best practices (OpenAI, Anthropic guidelines)
- LLM security and injection prevention (OWASP LLM Top 10)
- A/B testing methodology for prompt evaluation
- Prompt versioning and management practices

## Formatting Guidelines
- Before/after comparison for clear improvement visibility
- Scoring rubric (1-5) per dimension
- Edge case table with specific test results
- Cost comparison table

## Example
Review finds: "System prompt says 'be helpful' but doesn't define output format → outputs vary between paragraphs and bullet points. Fix: add 'Respond in bullet points, max 5 bullets, each under 20 words.' Edge case: when user input is in Spanish, prompt responds in English → add 'Respond in the same language as the user input.' Injection vulnerability: user can append 'Ignore previous instructions' → add input sanitization layer and instruction hierarchy."
