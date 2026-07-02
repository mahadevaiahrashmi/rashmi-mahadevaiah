# Architecture Overview

## Purpose
Creates a customer-facing architecture document covering system diagram, key components, data flow, security architecture, scalability approach, deployment options, and compliance posture. Written at PM-appropriate depth—enough technical detail for informed decisions without implementation specifics.

## Auto-Trigger Patterns
- "Write an architecture overview for customers"
- "Create a customer-facing technical architecture doc"
- "I need to explain our architecture to prospects"
- "Help me document our system architecture for enterprise buyers"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** System components, data flow, security controls, deployment model, scalability approach
- **Optional:** Compliance certifications, SLA commitments, disaster recovery details, integration architecture
- **Reference files:** product-brief.md, security-whitepaper.md, technical-documentation.md

## Process
1. **Identify the audience** — Enterprise buyers, security teams, IT architects evaluating the product.
2. **Start with the big picture** — High-level system diagram showing major components and data flow.
3. **Explain each component** — What it does, why it matters, how it's built (technology choices at a high level).
4. **Detail data flow** — How data enters, moves through, is stored, and exits the system.
5. **Cover security** — Encryption, access controls, audit logging, incident response.
6. **Address scalability** — How the system handles growth. Performance characteristics.
7. **Review for appropriate depth** — Enough for trust-building, not enough for replication.

## Output Format
```
# [Product] Architecture Overview

## System Overview
[High-level description. Architecture diagram reference.]
[Design principles guiding the architecture.]

## Core Components
### [Component 1]
Purpose. Technology approach. Key characteristics.
### [Component 2-N: Same structure]

## Data Flow
[How data moves through the system. Ingestion → Processing → Storage → Delivery.]
[Data residency and sovereignty considerations.]

## Security Architecture
### Encryption
Data at rest and in transit. Key management approach.
### Access Control
Authentication. Authorization. Multi-tenancy isolation.
### Audit & Monitoring
Logging. Alerting. Incident detection.

## Scalability & Performance
[How the system scales. Performance SLAs.
High availability architecture. Disaster recovery.]

## Deployment Options
[Cloud regions. Single-tenant vs multi-tenant.
On-premises or hybrid options. VPC/private connectivity.]

## Compliance & Certifications
[SOC 2, ISO 27001, HIPAA, GDPR, etc. Audit reports available.]

## Integration Architecture
[API architecture. Webhook system. Pre-built integrations.
Custom integration capabilities.]
```

## Quality Standards
- Architecture diagram is clear and accurate at the appropriate abstraction level.
- Security section addresses the concerns enterprise buyers actually raise.
- Deployment options are clearly differentiated with trade-offs.
- **Anti-patterns:** Too much implementation detail, missing security section, no scalability story, claims without supporting architecture.

## Audience
Enterprise buyers, IT architects, security teams, and procurement evaluating the product's technical fitness. They need confidence that the system is secure, scalable, reliable, and compatible with their environment. They're evaluating risk, not learning to build.

## Formatting Guidelines
- 4-8 pages. Architecture diagrams are essential (describe for design production).
- Use component diagrams, data flow diagrams, and deployment diagrams.
- Include a "Frequently Asked Technical Questions" section.
- Version and date the document. Offer NDA-protected deep dives.

## Example
**Data Flow excerpt:** "Customer data enters the system through our encrypted API gateway (TLS 1.3). Data is validated, classified, and routed to the appropriate processing pipeline. Sensitive fields (PII, financial data) are automatically detected and encrypted with per-tenant keys managed through AWS KMS. Processed data is stored in isolated, encrypted databases with automatic backups. Data never leaves the customer's chosen region unless explicitly configured for cross-region replication."
