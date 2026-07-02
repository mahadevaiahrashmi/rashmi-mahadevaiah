# Partner Enablement

## Purpose
Create enablement materials for partners and channel relationships — including a partner briefing, integration guide, co-selling playbook, partner FAQ, joint marketing opportunities, and support escalation paths. Ensures partners can effectively sell, integrate, and support the product alongside your team.

## Auto-Trigger Patterns
- "partner enablement for [feature/launch]"
- "partner briefing for [product]"
- "channel partner materials"
- "co-selling playbook for [partner]"
- "partner integration guide"
- "enable partners on [feature]"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature / product details | Yes | User prompt |
| Partner types / names | Recommended | User prompt |
| Integration details | Recommended | User prompt or tech docs |
| Partner program structure | Optional | User prompt |
| Joint customer scenarios | Optional | User prompt |

## Process
1. **Identify partner types** — Technology partners (integration), channel partners (resell), consulting partners (implement), strategic partners (co-develop). Each needs different enablement.
2. **Create the partner briefing** — What's launching, why it matters to their customers, what's in it for them (revenue, stickiness, differentiation).
3. **Build integration guide** — Technical details for technology partners: APIs, authentication, data flow, testing, certification process.
4. **Develop co-selling playbook** — For channel/strategic partners: joint value proposition, target customers, qualification criteria, sales process, revenue sharing.
5. **Write partner FAQ** — Common questions from partners and their customers, with approved answers.
6. **Identify joint marketing opportunities** — Co-branded content, joint webinars, case studies, marketplace listings. With timeline and owners.
7. **Define support escalation** — How partners escalate issues. Tiers, SLAs, contacts, tooling access.
8. **Set partner success metrics** — How to measure partner program effectiveness for this launch.

## Output Format
```
## Partner Enablement: [Feature/Product]
**Launch Date:** [date]  |  **Partner Lead:** [name]

### Partner Briefing
**What's Launching:** [1-paragraph summary]
**Why It Matters to Partners:** [Revenue opportunity, customer value, stickiness]
**Key Dates:** [Timeline for partner preparation]

### Partner Types & Enablement
| Type | Partners | Enablement Needed | Priority |
|------|----------|------------------|----------|
| Technology | [Names] | Integration guide, API docs | P0 |
| Channel | [Names] | Co-sell playbook, demo env | P0 |
| Consulting | [Names] | Implementation guide | P1 |

### Integration Guide (Technology Partners)
- **API endpoints:** [Key integration points]
- **Authentication:** [How partner apps authenticate]
- **Data flow:** [What data moves where]
- **Testing:** [Sandbox environment, test accounts]
- **Certification:** [Process to become certified integration]

### Co-Selling Playbook (Channel Partners)
- **Joint value prop:** [Why customers buy the combination]
- **Target customers:** [Joint ICP]
- **Qualification:** [When to bring in partner vs. sell solo]
- **Revenue model:** [Referral fee / resale margin / influenced]

### Partner FAQ
| Question | Answer |
|----------|--------|
| [Common partner question] | [Approved answer] |

### Joint Marketing Opportunities
| Activity | Type | Timeline | Owner |
|----------|------|----------|-------|
| [Co-branded blog post] | Content | [Date] | [Us / Partner] |
| [Joint webinar] | Event | [Date] | [Joint] |
| [Marketplace listing] | Listing | [Date] | [Partner] |

### Support Escalation
| Tier | Scope | SLA | Contact |
|------|-------|-----|---------|
| L1 | [Partner handles] | [Response time] | [Partner team] |
| L2 | [Joint triage] | [Response time] | [Our partner support] |
| L3 | [Our engineering] | [Response time] | [Escalation process] |

### Partner Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Partner-sourced leads | [N] | [CRM tracking] |
| Integration adoption | [X%] | [API usage data] |
| Joint revenue | [$X] | [Revenue attribution] |
```

## Quality Standards
- Different partner types get materially different enablement — not one-size-fits-all.
- Integration guide is specific enough for a partner engineer to build against.
- Co-selling playbook defines clear rules of engagement — when to collaborate vs. compete.
- Support escalation has defined SLAs, not just "contact us."

**Anti-patterns:** Treating all partners identically, vague integration documentation, no revenue model clarity, missing support escalation paths.

## Framework References
- **Partner ecosystem management** — Tiered partner engagement model.
- **Channel sales** — Co-sell vs. resell vs. referral models.

## Formatting Guidelines
- Separate sections per partner type (tailored content).
- Tables for FAQ and marketing opportunities (structured reference).
- Support escalation in tiered table (clear SLAs).
- Integration guide with technical specificity.

## Example
**Joint value prop:** "When customers use [Partner] CRM with our analytics, they see 35% faster lead-to-close times because sales reps get in-product usage signals directly in their CRM workflow. Neither product alone delivers this insight — it's the integration that creates the value."
