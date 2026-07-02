# API Documentation Outline

## Purpose
Creates a comprehensive API documentation structure covering overview, authentication, endpoints, request/response examples, error codes, rate limits, SDK references, and changelog. Developer-friendly, with working code examples and interactive elements where possible.

## Auto-Trigger Patterns
- "Create API documentation for [product/service]"
- "Build an API reference outline"
- "I need to document our API endpoints"
- "Help me structure API docs for developers"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** API endpoints, authentication mechanism, request/response schemas, error codes
- **Optional:** OpenAPI/Swagger spec, SDK details, rate limit policies, versioning strategy, webhook documentation
- **Reference files:** product-brief.md, technical-documentation.md, developer-quickstart.md

## Process
1. **Start with the developer journey** — What does a developer need to do first? Authentication → first API call → common workflows.
2. **Document every endpoint** — Method, path, parameters, request body, response, errors. Consistent format.
3. **Write real examples** — Complete, working code in multiple languages. Copy-paste ready.
4. **Document errors clearly** — Every error code with cause, meaning, and resolution steps.
5. **Include rate limits** — Limits per tier, headers to check, handling of throttled requests.
6. **Keep it current** — Changelog for every API change. Versioning policy clearly stated.

## Output Format
```
# [Product] API Reference

## Overview
What the API does. Base URL. Versioning. Content types.

## Authentication
### API Keys
How to obtain, where to send (header), rotation.
### OAuth 2.0
Authorization flow. Token endpoints. Scopes.
### Example
```curl
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.example.com/v1/resource
```

## Endpoints

### [Resource Name]
#### List [Resources]
`GET /v1/resources`
**Parameters:** [query params table]
**Response:** [JSON example with field descriptions]
**Errors:** [Relevant error codes]

#### Create [Resource]
`POST /v1/resources`
**Request Body:** [JSON example]
**Response:** [JSON example]

### [Additional Resources...]

## Error Codes
| Code | Name | Description | Resolution |
|------|------|-------------|------------|

## Rate Limits
Limits by tier. Headers. Retry strategy.

## SDKs & Libraries
Available SDKs. Installation. Quick examples.

## Webhooks (if applicable)
Events. Payload format. Verification. Retry policy.

## Changelog
| Date | Version | Changes |
```

## Quality Standards
- Every endpoint has a working code example (curl at minimum, ideally 3+ languages).
- Error documentation explains WHY the error occurs and HOW to fix it.
- Authentication guide gets a developer from zero to authenticated in under 5 minutes.
- **Anti-patterns:** Auto-generated docs with no examples, missing error documentation, no authentication guide, outdated endpoints.

## Audience
Developers integrating with your API. Range from experienced API consumers who want quick reference to junior developers who need guidance. Prioritize practical examples over theoretical descriptions.

## Formatting Guidelines
- Interactive API explorer if possible (Swagger UI, Postman collection).
- Code examples in curl, Python, JavaScript, and language of target audience.
- Consistent endpoint documentation format across all resources.
- Searchable. Deep-linkable. Version-selectable.

## Example
**Endpoint documentation:** "`POST /v1/analyses` — Create a new analysis. Request body: `{\"name\": \"Q3 Review\", \"type\": \"comprehensive\", \"data_sources\": [\"crm\", \"analytics\"]}`. Response (201): `{\"id\": \"ana_7x92k\", \"status\": \"processing\", \"estimated_completion\": \"2025-03-15T10:30:00Z\"}`. Errors: 400 (invalid data_source), 402 (plan limit reached), 429 (rate limited)."
