# API Design Input

## Purpose
Provide structured PM input for API design discussions — capturing use cases, developer personas, expected usage patterns, and experience expectations without prescribing the technical design.

## Auto-Trigger Patterns
- "prepare API design input"
- "PM perspective for API design"
- "developer experience requirements for API"
- "API design discussion prep"
- "what should the API feel like for developers"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| API purpose or feature | Yes | User prompt |
| Developer personas | Yes | User prompt |
| Existing API patterns | Optional | `context/products/*/tech-context.md` |
| Competitive APIs | Optional | `context/products/*/competitors.md` |
| Developer feedback | Optional | User prompt |

## Process
1. **Define developer personas** — Who will use this API? Skill level, language preferences, use cases.
2. **Map use cases** — Specific workflows developers will build.
3. **Describe expected patterns** — Call frequency, payload sizes, latency sensitivity.
4. **State experience preferences** — Naming, consistency, discoverability, error quality.
5. **Define documentation needs** — Quickstart, reference docs, samples, SDKs, sandbox.
6. **Set versioning expectations** — Change frequency, backward compatibility, deprecation policy.
7. **Capture developer feedback** — Patterns from existing API feedback.
8. **Quality-check** — Use cases grounded in real developer workflows.

## Output Format
```
## API Design Input: [API Name]
**Author:** [PM] | **Date:** [Date]

### Developer Personas
| Persona | Skill Level | Language | Primary Use Case |
|---------|------------|---------|-----------------|

### Use Cases
#### UC-1: [Use Case]
**Developer goal:** [What they're building]
**Workflow:** [Step-by-step API usage]
**Frequency:** [Calls/day]

### Expected Usage Patterns
| Pattern | Expectation | Rationale |
|---------|------------|-----------|

### Developer Experience Preferences
| Aspect | Preference | Reasoning |
|--------|-----------|-----------|

### Documentation Requirements
| Asset | Priority | Owner |
|-------|----------|-------|

### Versioning & Lifecycle
[Compatibility expectations, deprecation policy]

### Competitive Reference
| Competitor API | Strength | Improvement Area |
|---------------|----------|-----------------|
```

## Quality Standards
- Use cases represent real developer workflows.
- Experience preferences reference existing API patterns.
- Documentation requirements are prioritized with owners.
- Competitive reference is specific.

**Anti-patterns:** Prescribing endpoint design, ignoring existing API conventions, no developer persona, documentation as afterthought.

## Framework References
- **Developer Experience (DX)** — Treat developers as users with JTBD.
- **API-First Design** — Define contract and experience before implementation.

## Formatting Guidelines
- Tables for personas, patterns, requirements.
- Keep use cases concrete with step-by-step workflows.
- Separate "what PM cares about" from "what eng decides."

## Example
**Use Case:** "A partner developer building a Slack integration needs to subscribe to order status changes via webhook."

**DX Preference:** "Error responses should include: error code, human-readable message, docs link, and request ID."
