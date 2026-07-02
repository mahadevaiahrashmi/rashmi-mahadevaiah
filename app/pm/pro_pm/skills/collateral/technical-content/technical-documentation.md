# Technical Documentation

## Purpose
Creates user-facing technical documentation following the Divio documentation system—organizing content into tutorials, how-to guides, explanations, and reference materials. Covers getting started, core concepts, practical guides, API reference structure, troubleshooting, and best practices.

## Auto-Trigger Patterns
- "Write technical documentation for [product/feature]"
- "Create user-facing docs for [product]"
- "I need to structure our product documentation"
- "Help me build a documentation site outline"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product capabilities, target developer/user persona, key workflows, API surface (if applicable)
- **Optional:** Existing docs, support ticket themes, user research on docs, competitive docs for reference
- **Reference files:** product-brief.md, api-documentation-outline.md, developer-quickstart.md

## Process
1. **Audit existing content** — What exists? What's outdated? What's missing?
2. **Map user journeys** — New user → beginner → intermediate → advanced. What do they need at each stage?
3. **Apply Divio framework** — Categorize all content as Tutorial, How-To, Explanation, or Reference.
4. **Draft information architecture** — Organize by user task, not product feature.
5. **Write content** — Start with getting started (highest impact). Use consistent templates.
6. **Test with users** — Can a new user complete the tutorial without help?

## Output Format
```
# [Product Name] Documentation

## Getting Started
### Quick Start (5 minutes to first value)
### Installation & Setup
### Your First [Task]

## Tutorials (Learning-oriented)
### Tutorial 1: [Build a complete example end-to-end]
### Tutorial 2: [Explore a key workflow]

## How-To Guides (Task-oriented)
### How to [Common Task 1]
### How to [Common Task 2]
### How to [Advanced Task]

## Concepts (Understanding-oriented)
### [Core Concept 1]: What it is and why it matters
### [Core Concept 2]: How [Product] approaches this
### Architecture Overview

## Reference (Information-oriented)
### API Reference
### Configuration Options
### CLI Commands
### Error Codes

## Troubleshooting
### Common Issues
### FAQs
### Debug Guide

## Best Practices
### Recommended Patterns
### Performance Tips
### Security Considerations
```

## Quality Standards
- A new user can go from zero to working product in under 15 minutes using the Quick Start.
- Every how-to guide starts with the user's goal, not the feature name.
- Code examples are complete, copy-pasteable, and tested.
- **Anti-patterns:** Organizing by product feature instead of user task, untested code examples, jargon without explanation, docs that describe UI elements instead of workflows.

## Audience
Developers, technical users, and administrators who need to use the product. Ranges from beginners (need hand-holding) to experts (need reference). Write for the beginner but make it easy for experts to skip ahead.

## Formatting Guidelines
- Use the Divio four-quadrant system consistently.
- Code examples in every section. Tested and versioned.
- Progressive disclosure: simple first, advanced details expandable.
- Include "What you'll learn" and "Prerequisites" at the top of each guide.

## Example
**How-To Guide structure:** "**How to Set Up SSO with SAML** — Prerequisites: Admin access, SAML IdP (Okta, Azure AD, etc.). Steps: (1) Navigate to Settings → Security → SSO, (2) Select SAML 2.0, (3) Enter your IdP metadata URL, (4) Map user attributes [table of mappings], (5) Test with a single user, (6) Enable for your organization. Troubleshooting: If users see 'Invalid assertion'... Related: How to Set Up SCIM Provisioning."
