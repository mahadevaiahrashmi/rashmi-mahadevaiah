# Service Blueprint

## What It Is
A Service Blueprint is a diagram that visualizes the entire service delivery process by mapping five layers: Customer Actions, Frontstage (visible to customer), Backstage (invisible to customer), Support Processes, and Physical Evidence. Originally developed by G. Lynn Shostack (1984), it reveals the full system behind a customer experience, including the internal operations customers never see.

## When to Use
- Designing or redesigning end-to-end service experiences
- Identifying operational bottlenecks, failures, and handoff points
- When customer experience problems stem from backstage process issues
- Cross-functional alignment on how a service actually works (vs. how people think it works)

## When NOT to Use
- Feature-level design — service blueprints are for the full service, not individual features
- When you only need the customer-facing journey — use a simpler customer journey map
- Quick, tactical decisions — blueprints require time and cross-functional input

## How to Apply
1. **Define scope**: Which service scenario are you mapping? (e.g., "new customer onboarding")
2. **Map Customer Actions** (top row): What does the customer do at each step?
3. **Draw the Line of Interaction**: Separates customer from frontstage
4. **Map Frontstage Actions**: What the customer sees and interacts with (UI, emails, support agents)
5. **Draw the Line of Visibility**: Separates what customer sees from what they don't
6. **Map Backstage Actions**: Internal processes triggered by customer actions (data processing, routing, provisioning)
7. **Draw the Line of Internal Interaction**: Separates direct service from support
8. **Map Support Processes**: Systems, databases, third-party services that enable backstage actions
9. **Add Physical Evidence** (top): Tangible artifacts the customer encounters (emails, invoices, UI screens)
10. **Identify failure points, wait times, and improvement opportunities**

## Template
```
Physical Evidence: │ Landing page │ Welcome email │ Dashboard │ Invoice │
───────────────────┼──────────────┼──────────────┼───────────┼─────────┤
Customer Actions:  │ Signs up     │ Opens email   │ Uses app  │ Pays    │
═══════════════════╪══════════════╪══════════════╪═══════════╪═════════╡ Line of Interaction
Frontstage:        │ Signup form  │ Email system  │ App UI    │ Payment │
───────────────────┼──────────────┼──────────────┼───────────┼─────────┤ Line of Visibility
Backstage:         │ Provision    │ Drip engine   │ API/DB    │ Billing │
───────────────────┼──────────────┼──────────────┼───────────┼─────────┤ Line of Internal Interaction
Support Processes: │ Auth service │ CRM update    │ CDN/Infra │ Stripe  │
```

## Example
**Service**: SaaS trial → paid conversion
- **Failure Point**: 48-hour gap between signup and first meaningful action — backstage investigation reveals welcome email has 12% open rate (buried in spam)
- **Wait Time**: Account provisioning takes 30 seconds — customer sees blank screen
- **Improvement**: Add instant sample data (backstage change) + loading animation (frontstage change) to eliminate perceived wait

## Key Pitfalls
- Mapping only the happy path — include error states, edge cases, and failure points
- Not involving backstage teams (ops, engineering, support) — they know the real process
- Making it too detailed — focus on the level that reveals actionable insights
- Creating the blueprint and never updating it — services change; revisit quarterly

## Related Frameworks
- **Customer Journey Map** — simpler, customer-only view (no backstage)
- **Story Mapping** — complements with detailed user story organization
- **Design Thinking** — blueprints support the Define and Prototype phases
- **Value Chain Analysis** — similar internal analysis at the strategic level
