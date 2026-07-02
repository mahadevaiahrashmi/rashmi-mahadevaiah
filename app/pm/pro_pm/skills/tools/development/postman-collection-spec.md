# Postman Collection Spec

## Purpose
Specifies Postman collection structures — request templates, environment variables, test scripts, and documentation — enabling PMs to define API interaction patterns for testing, documentation, and developer onboarding.

## Auto-Trigger Patterns
- "Create a Postman collection"
- "Postman spec for our API"
- "API testing setup in Postman"
- "Document APIs in Postman"
- "Postman environment for…"

## Tool Configuration
Requires `context/integrations/postman.md` with: Postman workspace, collection ID, API key. Auth: Postman API key for programmatic access. Team workspace for shared collections.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** API endpoints to document, authentication method
- **Optional:** Environment variables, test scripts, example responses, folder structure

## Process
1. Design the collection folder structure matching API resource hierarchy.
2. Create request templates for each endpoint with method, URL, headers, body.
3. Define environment variables for base URL, tokens, and test data.
4. Write pre-request scripts for authentication and dynamic data.
5. Add test scripts for response validation.
6. Include example responses for documentation.
7. Write collection-level documentation.
8. Configure collection runner settings for automated testing.

## Output Format
```
# Postman Collection: [API Name]

## Collection Structure
📁 [API Name]
├── 📁 Authentication
│   ├── POST Login
│   └── POST Refresh Token
├── 📁 Users
│   ├── GET List Users
│   ├── GET Get User
│   ├── POST Create User
│   ├── PUT Update User
│   └── DELETE Delete User
├── 📁 Projects
│   ├── GET List Projects
│   └── POST Create Project
└── 📁 Health
    └── GET Health Check

## Environments
### Development
| Variable | Value | Description |
|---|---|---|
| base_url | https://api-dev.example.com | Dev API base |
| api_version | v2 | API version |
| auth_token | (dynamic) | Set by login script |

### Production (Read-Only)
| Variable | Value | Description |
|---|---|---|
| base_url | https://api.example.com | Prod API base |

## Request Templates

### POST Login
- **URL:** `{{base_url}}/{{api_version}}/auth/login`
- **Headers:** Content-Type: application/json
- **Body:**
  ```json
  {
    "email": "{{test_email}}",
    "password": "{{test_password}}"
  }
  ```
- **Tests:**
  ```javascript
  pm.test("Login successful", () => {
    pm.response.to.have.status(200);
    const token = pm.response.json().access_token;
    pm.environment.set("auth_token", token);
  });
  ```

### GET List Users
- **URL:** `{{base_url}}/{{api_version}}/users?page={{page}}&limit={{limit}}`
- **Headers:** Authorization: Bearer {{auth_token}}
- **Tests:**
  ```javascript
  pm.test("Returns user list", () => {
    pm.response.to.have.status(200);
    const data = pm.response.json();
    pm.expect(data.users).to.be.an("array");
    pm.expect(data.total).to.be.a("number");
  });
  ```

## Pre-Request Scripts (Collection Level)
```javascript
if (!pm.environment.get("auth_token")) {
  console.log("No token — run Login request first");
}
```

## Collection Runner Config
- **Iteration count:** 1
- **Delay:** 200ms between requests
- **Order:** Authentication first, then CRUD operations
- **Data file:** [CSV/JSON for parameterized runs]
```

## Quality Standards
- Environment variables prevent hardcoded URLs and credentials.
- Test scripts validate status codes, response structure, and key fields.
- Authentication flow is automated via pre-request scripts.
- Collection folder structure mirrors the API resource hierarchy.
- Example responses are included for documentation consumers.
- No secrets are stored in collection variables — only in environments (and not committed).

## Permissions Required
Postman team member for collection creation. Workspace admin for environment management.

## Example
A REST API collection with: 4 folders (Auth, Users, Projects, Health), 12 requests, 3 environments (dev, staging, prod), automated auth token management via login pre-request script, test scripts validating response schemas on all endpoints, and collection-level documentation for developer onboarding.
