# Write API Requirements

## Purpose
Define API requirements from the product perspective — capturing use cases, data needs, operations, and developer experience expectations without dictating implementation. This gives eng and API designers the product context needed to build APIs that developers actually want to use.

## Auto-Trigger Patterns
- "write API requirements"
- "define API needs for [feature]"
- "what should this API support"
- "help me spec an API from the PM side"
- "document API use cases"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature or integration description | Yes | User prompt |
| Target API consumers (internal/external) | Yes | User prompt |
| Technical context | No | `context/products/*/tech-context.md` |
| Existing API patterns | Optional | `context/products/*/tech-context.md` |
| Partner/developer feedback | Optional | User prompt |
| Security/compliance requirements | Optional | `context/company/processes.md` |

## Process
1. **Identify consumers** — Who will call this API? Internal services, third-party developers, partners? Each has different needs.
2. **Map use cases** — For each consumer, list the jobs they'll use the API to accomplish. Be specific about workflows.
3. **Define data requirements** — What data needs to flow in and out? What entities, relationships, filters?
4. **Specify operations** — CRUD operations, bulk operations, search, aggregation. What actions must be possible?
5. **Set experience expectations** — Rate limits, latency, pagination, error handling clarity, documentation standards.
6. **Address lifecycle** — Versioning strategy, deprecation policy, backward compatibility requirements.
7. **Flag security needs** — Authentication, authorization scopes, data sensitivity, audit logging.
8. **Quality-check** — Use cases fully covered, no contradictions, security addressed, developer experience considered.

## Output Format
```
## API Requirements: [API Name]
**Author:** [PM] | **Consumers:** [Who] | **Date:** [Date]

### Target Consumers
| Consumer | Use Case | Priority |
|----------|----------|----------|

### Use Cases
#### UC-1: [Use Case Name]
**As a** [consumer], **I need to** [operation] **so that** [outcome].
**Data needed:** [Fields, relationships]
**Expected volume:** [Calls/day or calls/second]

### Data Requirements
| Entity | Key Fields | Relationships | Sensitivity |
|--------|-----------|---------------|-------------|

### Operations
| Operation | Consumer | Priority | Notes |
|-----------|----------|----------|-------|

### Experience Requirements
| Requirement | Target | Rationale |
|-------------|--------|-----------|
| Latency (p95) | ... | ... |
| Rate limit | ... | ... |
| Pagination | ... | ... |

### Security & Access
[Auth model, scopes, data classification]

### Versioning & Lifecycle
[Compatibility expectations, deprecation policy]
```

## Quality Standards
- Every operation maps to a real use case, not speculative functionality.
- Rate limits and latency targets have rationale tied to user experience.
- Security requirements match data sensitivity levels.
- Developer experience is explicitly considered (error messages, docs, SDKs).

**Anti-patterns:** Designing the API (that's eng's job), ignoring rate limits, no versioning strategy, building for hypothetical consumers.

## Framework References
- **API-First Design** — Define the contract before implementation.
- **Developer Experience (DX)** — Treat API consumers as users with their own JTBD.

## Formatting Guidelines
- Use tables for operations and requirements.
- Group use cases by consumer type.
- Include data sensitivity labels in entity tables.
- Keep each use case to 3-5 lines.

## Example
**Use Case:** "As a *partner integration developer*, I need to *retrieve order status by order ID* so that *I can display real-time tracking in my app*. Expected volume: 50K calls/day. Latency target: <150ms p95."
