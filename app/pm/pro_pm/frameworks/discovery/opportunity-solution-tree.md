# Opportunity Solution Tree

## What It Is
The Opportunity Solution Tree (OST), created by Teresa Torres, is a visual tool that maps the path from a desired outcome to specific experiments. It creates a structured hierarchy: Outcome → Opportunities → Solutions → Experiments. It prevents teams from jumping straight to solutions and ensures every feature can be traced back to a customer opportunity and business outcome.

## When to Use
- Continuous discovery to organize what you're learning from customer interviews
- Connecting product work to business outcomes in a traceable way
- When the team has too many ideas and needs a framework for choosing
- Aligning stakeholders on *why* you're building something, not just *what*

## When NOT to Use
- Urgent bug fixes or production issues that bypass normal discovery
- When you have a single, obvious solution to a well-understood problem
- As a replacement for customer interviews — the tree organizes research, it doesn't replace it

## How to Apply
1. **Set the desired outcome**: What business/product metric are you trying to move? (e.g., "Increase 14-day retention from 35% to 50%")
2. **Map opportunities**: From customer interviews, identify opportunities (unmet needs, pain points, desires). Organize as a hierarchy — big opportunities break into smaller ones
3. **Generate solutions**: For each opportunity, brainstorm multiple possible solutions. Resist picking one immediately
4. **Design experiments**: For each promising solution, define the smallest experiment to test the riskiest assumption
5. **Compare and choose**: Use assumption testing results to select the best path
6. **Update continuously**: Add new opportunities from ongoing interviews; prune dead ends

## Template
```
Desired Outcome: [Metric + target]
├── Opportunity A: [Customer need/pain]
│   ├── Solution A1 → Experiment: [test description]
│   └── Solution A2 → Experiment: [test description]
├── Opportunity B: [Customer need/pain]
│   ├── Solution B1 → Experiment: [test description]
│   └── Solution B2 → Experiment: [test description]
└── Opportunity C: [Customer need/pain]
    └── Solution C1 → Experiment: [test description]
```

## Example
**Outcome**: Increase trial-to-paid conversion from 8% to 15%
- **Opportunity**: Users don't experience core value during trial
  - Solution: Guided onboarding wizard → Experiment: A/B test wizard vs. current flow
  - Solution: Pre-populated sample data → Experiment: Prototype test with 10 trial users
- **Opportunity**: Users forget about the product after signup
  - Solution: Drip email with use-case tips → Experiment: Measure re-engagement rate
  - Solution: In-app progress tracker → Experiment: Painted door test

## Key Pitfalls
- Jumping straight to solutions without mapping opportunities — defeats the purpose
- Having only one solution per opportunity — always generate at least 2–3 alternatives
- Not connecting the tree to actual customer interviews — opportunities should come from research
- Treating the tree as static — it should be a living artifact updated weekly

## Related Frameworks
- **Continuous Discovery** — the broader practice that uses OSTs
- **Assumption Mapping** — for deciding which experiments to run first
- **Lean Experimentation** — methodology for designing the experiments at the tree's leaves
- **OKRs** — the desired outcome often comes from an OKR
