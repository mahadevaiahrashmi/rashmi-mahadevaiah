# Swagger / OpenAPI Spec Review

## Purpose
Reviews OpenAPI (Swagger) specifications — evaluating endpoint coverage, schema validation, naming consistency, documentation completeness, and security definitions — helping PMs ensure API specs are complete and developer-friendly.

## Auto-Trigger Patterns
- "Review the API spec"
- "Check our OpenAPI/Swagger spec"
- "API documentation review"
- "Is our API spec complete?"
- "Swagger spec quality check"

## Tool Configuration
Requires `context/integrations/api-docs.md` with: OpenAPI spec file path or URL. Auth: Access to the spec repository or API documentation portal.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** OpenAPI spec file (YAML or JSON)
- **Optional:** PRD/requirements for coverage check, API guidelines, previous spec version for diff

## Process
1. Validate spec syntax against OpenAPI 3.x schema.
2. Review endpoint coverage: are all planned endpoints documented?
3. Check naming consistency: paths, operations, parameters, schemas.
4. Evaluate schema definitions: completeness, types, required fields, examples.
5. Review security scheme definitions and per-endpoint requirements.
6. Assess documentation: descriptions, summaries, examples, error responses.
7. Check for common issues: missing error codes, inconsistent patterns.
8. Generate a review report with findings and recommendations.

## Output Format
```
# OpenAPI Spec Review: [API Name]
**Spec Version:** [OpenAPI 3.x] | **File:** [path]
**Review Date:** [Date] | **Reviewer:** [Name]

## Summary
- **Endpoints:** [X total] ([Y documented, Z missing])
- **Schemas:** [X defined]
- **Overall Quality:** [Good | Needs Work | Incomplete]

## Endpoint Coverage
| Endpoint | Method | Documented | Issues |
|---|---|---|---|
| /users | GET | ✅ | — |
| /users | POST | ✅ | Missing 409 response |
| /users/{id} | DELETE | ❌ | Not in spec |

## Naming Consistency
| Category | Convention | Violations |
|---|---|---|
| Paths | kebab-case, plural nouns | `/getUserData` should be `/users/{id}` |
| Operations | camelCase operationId | `get_users` should be `getUsers` |
| Parameters | camelCase | `user_id` should be `userId` |
| Schemas | PascalCase | `user_response` should be `UserResponse` |

## Schema Review
| Schema | Fields | Required | Examples | Issues |
|---|---|---|---|---|
| User | 8 | 5 defined | ✅ | Missing email format validation |
| Project | 6 | 3 defined | ❌ | No examples provided |

## Security
| Finding | Severity | Recommendation |
|---|---|---|
| No security scheme defined | High | Add OAuth2 or API key scheme |
| /admin endpoints lack auth | High | Add security requirement |
| Missing rate limit headers | Medium | Document X-RateLimit-* headers |

## Documentation Quality
| Aspect | Status | Notes |
|---|---|---|
| Endpoint descriptions | Partial | 8 of 12 have descriptions |
| Parameter descriptions | Missing | Only 3 of 15 documented |
| Response examples | Partial | Success examples only |
| Error responses | Incomplete | Missing 401, 403, 429 on most endpoints |

## Common Error Responses Needed
| Code | Description | Where Missing |
|---|---|---|
| 400 | Bad Request (validation errors) | 4 POST/PUT endpoints |
| 401 | Unauthorized | 6 protected endpoints |
| 404 | Not Found | All /{id} endpoints |
| 429 | Rate Limited | All endpoints |

## Recommendations
| Priority | Finding | Action |
|---|---|---|
| P1 | Missing security definitions | Add OAuth2 security scheme |
| P1 | Incomplete error responses | Add 400/401/404/429 to all endpoints |
| P2 | Naming inconsistencies | Standardize to convention |
| P3 | Missing examples | Add request/response examples |
```

## Quality Standards
- Review covers all aspects: syntax, coverage, naming, schemas, security, docs.
- Naming convention violations are specific with correction suggestions.
- Missing error responses are identified per endpoint.
- Security review checks both scheme definition and per-endpoint requirements.
- Recommendations are prioritized by impact on API consumers.

## Permissions Required
Read access to the OpenAPI spec file and associated repository.

## Example
A review of a 15-endpoint REST API spec reveals: 2 undocumented endpoints, 4 naming convention violations, missing security scheme, 8 endpoints without error response documentation, 3 schemas without examples, and inconsistent parameter naming. Top priority: add security definitions and document standard error responses. Overall quality: Needs Work, with 12 specific improvements identified.
