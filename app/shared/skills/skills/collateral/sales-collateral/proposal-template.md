# Proposal Template

## Purpose
Creates a customer proposal document with executive summary, understanding of needs, proposed solution, implementation plan, pricing, terms, team introduction, timeline, and next steps. Designed to serve as the formal response to a buying opportunity that reflects the specific customer's context.

## Auto-Trigger Patterns
- "Create a proposal for [customer]"
- "Build a customer proposal template"
- "I need a proposal document for [deal]"
- "Help me write a proposal for [opportunity]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Customer name, their stated needs/requirements, proposed solution, pricing, implementation approach
- **Optional:** RFP document, prior customer interactions, competitive context, customer's org structure
- **Reference files:** product-brief.md, solution-brief.md, customer-case-study.md, customer-onboarding-guide.md

## Process
1. **Mirror the customer** — Demonstrate understanding of THEIR needs, not your product capabilities.
2. **Connect needs to solution** — Every proposed capability maps to a stated requirement.
3. **Be transparent on pricing** — Clear, understandable pricing with no surprises.
4. **Show the implementation path** — Realistic timeline with milestones they can evaluate.
5. **Reduce risk** — Warranties, SLAs, references, and success guarantees where possible.
6. **Make the next step easy** — One clear action to move forward.

## Output Format
```
# Proposal: [Solution] for [Customer Name]
**Prepared by:** [Your name/team] | **Date:** [Date] | **Valid until:** [Date]

## 1. Executive Summary (1 page)
[One-page overview: their challenge, our solution, expected value,
investment required. Decision-ready standalone section.]

## 2. Understanding Your Needs (1-2 pages)
[Demonstrate deep understanding of their specific situation.
Reference their words from discovery. Map their requirements.]

## 3. Proposed Solution (2-3 pages)
[How our product addresses each requirement.
Capabilities mapped to their needs. Architecture fit.
What's included. What's optional.]

## 4. Implementation Plan (1-2 pages)
| Phase | Timeline | Activities | Deliverables | Milestones |
[Realistic phases with clear ownership and checkpoints.]

## 5. Team (0.5 page)
[Key team members assigned. Relevant experience. Support model.]

## 6. Pricing (1 page)
| Component | Description | Price |
[Clear, itemized pricing. Subscription + services.
Payment terms. What's included/excluded.]

## 7. Success Metrics & SLAs (0.5 page)
[How we'll measure success. SLA commitments. Review cadence.]

## 8. Customer References (0.5 page)
[2-3 similar customers willing to be contacted.]

## 9. Terms & Conditions (summary)
[Key terms. Contract duration. Termination. Data handling.]

## 10. Next Steps
[Single, clear action with contact and timeline.]

## Appendix
[Technical specifications. Security documentation. Case studies.]
```

## Quality Standards
- Executive summary is self-contained—a decision-maker can review it standalone.
- Customer's needs are reflected back in their own language before solutions are presented.
- Pricing is transparent with no hidden costs or surprise line items.
- **Anti-patterns:** Generic proposal not customized to customer, leading with product features, ambiguous pricing, unrealistic timelines, no references.

## Audience
Customer's evaluation team, economic buyer, and procurement. Each stakeholder reads different sections—executives read the summary, practitioners read the solution, finance reads pricing, legal reads terms. Structure for all.

## Formatting Guidelines
- 8-15 pages. Professional layout. Customer's logo alongside yours.
- Executive summary on page 1—always.
- Tables for implementation timeline, pricing, and feature mapping.
- Include document version and validity date.

## Example
**Section 2 excerpt:** "Based on our conversations with your team on March 12 and April 3, we understand that your primary challenges are: (1) Manual compliance checks consuming 15+ hours per analyst per week, (2) Inconsistent audit trail across your three reporting systems, and (3) Upcoming SOX compliance requirements by Q4 that your current tools cannot support. This proposal addresses all three requirements with a phased approach that prioritizes your Q4 deadline."
