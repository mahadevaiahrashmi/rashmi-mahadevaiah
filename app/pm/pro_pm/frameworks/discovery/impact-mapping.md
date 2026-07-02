# Impact Mapping

## What It Is
Impact Mapping, created by Gojko Adzic (2012), is a strategic planning technique that connects deliverables to business goals through a four-level mind map: Goal → Actors → Impacts → Deliverables. It prevents teams from losing sight of *why* they're building something and helps identify the highest-leverage activities.

## When to Use
- Strategic planning to connect product work to business outcomes
- When stakeholders request features without clear business justification
- Prioritizing deliverables by their expected impact on goals
- Identifying which user behaviors to change to achieve a goal

## When NOT to Use
- Detailed sprint planning — impact maps are strategic, not tactical
- When the goal is unclear — define the goal first
- As a replacement for user research — impact maps organize strategic thinking, not user insights

## How to Apply
1. **Goal** (center): Define the measurable business goal. "Why are we doing this?"
   - Must be SMART: specific, measurable, achievable, relevant, time-bound
2. **Actors** (first level): Who can influence the goal? Include users, customers, internal stakeholders, and even adversaries
3. **Impacts** (second level): How should each actor's behavior change? What should they start/stop/do more/less?
4. **Deliverables** (third level): What can we do to create those behavioral changes? Features, campaigns, processes
5. **Prioritize**: Which actor-impact-deliverable path has the highest leverage?
6. **Measure**: Track whether deliverables actually create the intended impacts

## Template
```
GOAL: [Measurable business outcome]
├── Actor 1: [Who]
│   ├── Impact: [Behavior change]
│   │   ├── Deliverable A
│   │   └── Deliverable B
│   └── Impact: [Behavior change]
│       └── Deliverable C
├── Actor 2: [Who]
│   └── Impact: [Behavior change]
│       └── Deliverable D
```

| Goal | Actor | Impact (Behavior Change) | Deliverable | Priority |
|------|-------|------------------------|-------------|----------|
|      |       |                        |             |          |

## Example
**Goal**: Increase monthly active users from 10K to 25K in 6 months
- **Actor: New users** → Impact: Complete onboarding within first session → Deliverable: Interactive onboarding wizard, sample project template
- **Actor: Existing users** → Impact: Invite teammates more frequently → Deliverable: In-app "invite team" prompt, team activity feed
- **Actor: Churned users** → Impact: Return to the product → Deliverable: Win-back email campaign with new feature highlights
- **Actor: Marketing team** → Impact: Drive more qualified traffic → Deliverable: SEO-optimized landing pages, case studies

→ Highest leverage: existing users inviting teammates (viral loop) — prioritize invite features.

## Key Pitfalls
- Setting vague goals ("improve user experience") — goals must be measurable
- Listing deliverables without connecting them to behavioral changes — that's just a feature list
- Ignoring non-obvious actors (internal teams, partners, competitors)
- Not measuring whether deliverables actually created the intended impact

## Related Frameworks
- **OKRs** — goals at the center of impact maps often come from OKRs
- **Opportunity Solution Tree** — similar structure but focused on opportunities rather than actors
- **Story Mapping** — complements impact mapping with detailed user journey planning
- **North Star Framework** — defines the metric that impact maps should target
