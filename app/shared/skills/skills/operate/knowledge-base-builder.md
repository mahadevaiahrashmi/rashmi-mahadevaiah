# Knowledge Base Builder

## Purpose
Design and build a structured team or product knowledge base. Define taxonomy, identify key pages to create, select templates, establish governance, and optimize for discoverability. Turn scattered tribal knowledge into an organized, searchable, maintainable resource that reduces repetitive questions and accelerates onboarding.

## Auto-Trigger Patterns
- "Build a knowledge base"
- "Organize our documentation"
- "Create a wiki for…"
- "Knowledge management for…"
- "Documentation structure for…"
- "Where should we put our docs"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Scope** (required) — team, product, or organizational knowledge base
- **Existing documentation** (optional) — what docs exist, where they live, what state they're in
- **Audience** (required) — who will read and contribute (PMs, engineers, designers, stakeholders)
- **Tools** (optional) — available platforms (Confluence, Notion, GitBook, etc.)
- **Pain points** (optional) — current documentation problems

## Process
1. **Audit existing docs** — catalog what exists, assess quality, identify gaps and redundancy
2. **Define information architecture** — top-level categories, hierarchy depth, navigation model
3. **Design taxonomy** — consistent naming, tagging, and categorization system
4. **Identify key pages** — starter set of essential documents to create first
5. **Select templates** — standard formats for common document types (decision records, how-tos, runbooks)
6. **Establish governance** — who creates, who reviews, who archives, how often
7. **Define contribution guidelines** — formatting standards, review process, update cadence
8. **Optimize for search** — tagging strategy, keyword conventions, cross-linking

## Output Format
```markdown
# Knowledge Base Design: [Scope]
**Platform**: … | **Audience**: … | **Owner**: …

## Information Architecture
```
📁 [Top Level]
├── 📁 Product
│   ├── 📄 Product Overview
│   ├── 📁 Features
│   └── 📁 Roadmap
├── 📁 Engineering
│   ├── 📁 Architecture
│   └── 📁 Runbooks
├── 📁 Process
│   ├── 📁 How-Tos
│   └── 📁 Decision Records
└── 📁 People
    ├── 📁 Onboarding
    └── 📁 Team Agreements
```

## Key Pages to Create (Priority Order)
| Page | Category | Template | Owner | Priority |
|------|----------|----------|-------|----------|

## Templates
### Decision Record Template
### How-To Template
### Runbook Template
### Meeting Notes Template

## Governance Model
- **Creation**: Anyone can draft; [role] reviews before publishing
- **Review cadence**: Quarterly accuracy review
- **Archival**: Pages untouched for 6 months flagged for review
- **Ownership**: Every page has a named owner

## Contribution Guidelines
- Formatting standards: …
- Naming conventions: …
- Tagging taxonomy: …
- Review process: …

## Search Optimization
- Required tags per page: …
- Cross-linking guidelines: …
- Keyword conventions: …

## Migration Plan (if applicable)
| Source | Destination | Owner | Deadline |
|--------|------------|-------|---------|

## Success Metrics
- Reduced repeat questions: …
- Onboarding time reduction: …
- Contribution rate: …
```

## Quality Standards
- Information architecture is intuitive for the primary audience, not the creator
- Templates are practical and include examples, not just empty structures
- Governance prevents documentation rot without creating bureaucracy
- Key pages list is prioritized by value to readers, not ease of creation
- **Anti-patterns**: Building a knowledge base nobody uses; over-organizing with too many categories; no governance leading to stale content; perfectionism preventing initial launch

## Framework References
- Information architecture principles (card sorting, tree testing)
- Documentation-as-code practices
- Knowledge management lifecycle (create, curate, archive)

## Formatting Guidelines
- Tree diagram for information architecture
- Templates as practical examples, not abstract structures
- Governance as lightweight rules, not policy documents
- Migration plan as actionable checklist

## Example
For a product team knowledge base: "Top-level: Product (vision, roadmap, specs), Engineering (architecture, APIs, runbooks), Process (decision records, how-tos, templates), People (onboarding, team charter). First 5 pages to create: Product Overview, Architecture Diagram, Onboarding Guide, Decision Record Template, Sprint Process How-To. Governance: all pages require quarterly review, stale pages auto-flagged after 90 days without edit."
