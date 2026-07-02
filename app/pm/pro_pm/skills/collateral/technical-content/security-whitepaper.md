# Security Whitepaper

## Purpose
Creates a comprehensive security posture document covering architecture, encryption, access control, compliance certifications, incident response, data handling policies, and audit trail capabilities. Designed to satisfy enterprise security reviews and build trust with security-conscious buyers.

## Auto-Trigger Patterns
- "Write a security whitepaper for [product]"
- "Create a security posture document"
- "I need to document our security practices for customers"
- "Help me prepare for an enterprise security review"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Security architecture, encryption details, access control model, compliance certifications, incident response plan
- **Optional:** Penetration test results (summary), SOC 2 report summary, bug bounty program, security team structure
- **Reference files:** product-brief.md, architecture-overview.md, technical-documentation.md

## Process
1. **Map to security frameworks** — Align content to common evaluation frameworks (SOC 2, CSA STAR, NIST).
2. **Document controls** — For each security domain, describe the control, implementation, and evidence.
3. **Be specific** — "AES-256-GCM" not "industry-standard encryption." Specificity builds trust.
4. **Address common concerns** — Data residency, multi-tenancy isolation, employee access, third parties.
5. **Include evidence** — Reference certifications, audit reports, and penetration test schedules.
6. **Review with security team** — Ensure accuracy and appropriate disclosure level.

## Output Format
```
# [Product] Security Whitepaper

## Executive Summary
[Security posture overview. Key certifications. Commitment statement.]

## 1. Security Architecture (2 pages)
Infrastructure security. Network segmentation. Multi-tenancy isolation.
Defense-in-depth approach.

## 2. Data Protection (2 pages)
### Encryption at Rest
[Algorithm, key management, rotation policy]
### Encryption in Transit
[TLS version, certificate management]
### Data Classification & Handling
[Classification levels, handling procedures per level]
### Data Retention & Deletion
[Policies, customer controls, verification]

## 3. Identity & Access Management (1-2 pages)
### Customer Authentication
[SSO, MFA, password policies supported]
### Authorization Model
[RBAC/ABAC, permission granularity]
### Internal Access Controls
[Employee access, least privilege, access reviews]

## 4. Application Security (1-2 pages)
[SDLC practices, code review, SAST/DAST, dependency scanning]

## 5. Infrastructure Security (1-2 pages)
[Cloud provider, hardening, patching, monitoring]

## 6. Compliance & Certifications (1 page)
[SOC 2, ISO 27001, HIPAA, GDPR, etc. Report availability.]

## 7. Incident Response (1 page)
[Process, notification timelines, customer communication]

## 8. Business Continuity (1 page)
[DR plan, RPO/RTO, backup strategy, geographic redundancy]

## 9. Vendor & Third-Party Management (0.5 page)
[Vendor assessment, subprocessor list, risk management]
```

## Quality Standards
- Every security claim is specific and verifiable, not marketing language.
- Addresses the actual questions enterprise security teams ask.
- Certification dates and report availability are current.
- **Anti-patterns:** Vague security claims, missing certifications, no incident response section, outdated information, over-sharing internal details.

## Audience
Enterprise security teams, CISOs, IT compliance officers, and procurement reviewers evaluating security risk. They're checking boxes on a security questionnaire and assessing real risk. They appreciate specificity, honesty about limitations, and evidence of continuous improvement.

## Formatting Guidelines
- 8-15 pages. Professional, structured, referenceable.
- Include a control matrix mapping to common frameworks.
- Date and version prominently. Offer to share SOC 2 report under NDA.
- FAQ section for common security review questions.

## Example
**Section 2 excerpt:** "All customer data at rest is encrypted using AES-256-GCM. Encryption keys are managed through AWS KMS with automatic rotation every 365 days. Each customer tenant has a unique data encryption key (DEK) wrapped by a tenant-specific key encryption key (KEK). Key access is logged and auditable. Customers on Enterprise plans can bring their own keys (BYOK) via AWS KMS or HashiCorp Vault integration."
