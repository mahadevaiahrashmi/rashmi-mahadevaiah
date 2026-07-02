# Integration Guide

## Purpose
Creates a step-by-step guide for integrating with your product, covering prerequisites, authentication setup, configuration steps, code examples, testing procedures, troubleshooting, and support resources. Gets developers from zero to working integration as quickly and smoothly as possible.

## Auto-Trigger Patterns
- "Write an integration guide for [product/service]"
- "Create a setup guide for [integration]"
- "I need to document how to integrate with [system]"
- "Help me build an integration tutorial"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Integration target (what they're connecting to), authentication method, setup steps, code examples
- **Optional:** Architecture diagram, common configuration variations, testing tools, support channels
- **Reference files:** product-brief.md, api-documentation-outline.md, technical-documentation.md

## Process
1. **Map the happy path** — Document the simplest successful integration first.
2. **List prerequisites** — Everything needed before starting: accounts, tools, permissions, versions.
3. **Write step-by-step** — Numbered steps with expected outcomes at each stage.
4. **Provide code examples** — Complete, working snippets in the most common languages.
5. **Include verification** — How to confirm each step worked. What success looks like.
6. **Anticipate problems** — Common issues and their solutions based on support ticket data.

## Output Format
```
# Integrating [Product] with [Target System]

## Overview
What this integration enables. Architecture diagram.
Estimated time: [X minutes/hours]

## Prerequisites
- [ ] [Account/access requirement]
- [ ] [Software/version requirement]
- [ ] [Permission/role requirement]
- [ ] [API key/credential setup]

## Step 1: Authentication Setup
[Detailed steps with screenshots/code]
**Verify:** [How to confirm this step succeeded]

## Step 2: Configuration
[Settings, environment variables, connection details]
**Verify:** [Expected output]

## Step 3: First Data Exchange
[Code example for the first API call or data sync]
**Verify:** [Expected response]

## Step 4: Production Setup
[Additional configuration for production use]
[Security considerations. Performance tuning.]

## Testing Your Integration
[How to test. Test endpoints. Sample data.]
[Checklist of things to verify before going live.]

## Troubleshooting
### [Common Issue 1]
**Symptom:** [What you see]
**Cause:** [Why it happens]
**Fix:** [How to resolve]

### [Common Issue 2-5: Same structure]

## Support & Resources
[API reference link. Community forum. Support email. Status page.]
```

## Quality Standards
- A developer can complete the integration following the guide without external help.
- Every step includes verification—the developer knows they succeeded before moving on.
- Troubleshooting covers the top 5 issues from actual support tickets.
- **Anti-patterns:** Missing prerequisites, steps that assume knowledge, no verification steps, troubleshooting that just says "contact support."

## Audience
Developers and technical implementers who need to connect your product to their systems. They range from experienced integrators to first-timers. Write for the first-timer; experienced developers will skip ahead.

## Formatting Guidelines
- Numbered steps with clear checkpoints. Collapsible sections for advanced options.
- Code examples: complete and copy-pasteable. Multiple language tabs.
- Estimated time for each major section.
- Include a "Quick Start" path for experienced developers.

## Example
**Step 3 excerpt:** "Make your first API call to verify the connection: ```python\nimport requests\nresponse = requests.get('https://api.example.com/v1/status', headers={'Authorization': f'Bearer {API_KEY}'})\nprint(response.json())\n``` Expected output: `{\"status\": \"connected\", \"organization\": \"your-org-name\"}`. If you see `{\"error\": \"unauthorized\"}`, verify your API key in Step 1."
