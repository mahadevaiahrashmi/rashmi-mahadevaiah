# Customer Onboarding Guide

## Purpose
Creates a post-sale onboarding guide covering welcome experience, setup steps, milestone plan, training resources, success criteria, support contacts, and the path to first value delivery. Ensures new customers achieve their desired outcome quickly and build confidence in the product.

## Auto-Trigger Patterns
- "Create a customer onboarding guide"
- "Build an onboarding playbook for new customers"
- "I need to document our customer onboarding process"
- "Help me design the post-sale customer journey"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product setup steps, key milestones to first value, training resources, support channels
- **Optional:** Segment-specific onboarding paths, success metrics, common onboarding issues, champion enablement materials
- **Reference files:** product-brief.md, integration-guide.md, technical-documentation.md, success-plan-template.md

## Process
1. **Define "first value"** — What specific outcome marks the customer as successfully onboarded?
2. **Map the journey** — Day 1, Week 1, Month 1, Quarter 1 milestones.
3. **Remove friction** — For every step, ask: can we make this easier or eliminate it?
4. **Build training** — Self-serve resources for most, high-touch for strategic accounts.
5. **Set expectations** — Clear timeline and what's needed from the customer's side.
6. **Plan check-ins** — Scheduled touchpoints to catch issues before they become problems.

## Output Format
```
# Welcome to [Product Name]! 🎉
## Your Onboarding Guide

## Welcome
[Personal welcome. What to expect. Who your contacts are.]

## Your Onboarding Timeline
| Milestone | Timeline | Activities | Success Criteria |
|-----------|----------|-----------|-----------------|
| Setup Complete | Day 1-3 | Account config, SSO, integrations | Users can log in |
| First Use Case | Week 1 | Core workflow, training | Team completes first [task] |
| Team Adoption | Week 2-4 | Rollout, advanced training | [X]% of users active |
| Value Delivered | Month 1-2 | Optimization, reporting | [Success metric] achieved |

## Day 1: Getting Started
### Step 1: Account Setup
[Detailed instructions with screenshots]
### Step 2: Invite Your Team
[How to add users, set permissions]
### Step 3: Connect Your Tools
[Integration setup for key tools]
### Step 4: Your First [Task]
[Guided walkthrough of the core workflow]

## Week 1: Building Confidence
- [ ] Complete the product tour
- [ ] Set up your first [workflow/project/dashboard]
- [ ] Invite 3+ team members
- [ ] Attend the live onboarding session (or watch recording)

## Week 2-4: Team Rollout
[Rollout best practices. Change management tips.
Communication template for internal announcement.]

## Training Resources
| Resource | Format | Duration | Link |
|----------|--------|----------|------|
| Getting Started | Video | 5 min | [link] |
| Core Workflow | Interactive | 15 min | [link] |
| Advanced Features | Webinar | 45 min | [link] |
| Best Practices | Guide | 10 min read | [link] |

## Your Support Team
- **CSM:** [Name, email, calendar link]
- **Support:** [Channel, hours, SLA]
- **Community:** [Forum/Slack link]
- **Emergency:** [Escalation path]

## Success Criteria
[What "successful onboarding" looks like. Metrics we'll track together.]
```

## Quality Standards
- A customer can self-serve through 80%+ of onboarding without contacting support.
- Each milestone has clear success criteria—both sides know when it's achieved.
- Support contacts are specific people, not generic emails.
- **Anti-patterns:** No clear timeline, setup that requires support tickets, no success criteria, overwhelming day-1 training.

## Audience
New customers in their first 30-90 days. They've made a purchase decision and now need to justify it by showing value. Their anxiety is highest in the first week—address it with clarity, support, and quick wins.

## Formatting Guidelines
- Welcoming tone. Milestone-driven structure.
- Checklists for accountability. Estimated time per activity.
- Include both self-serve (links, videos) and high-touch (CSM, calls) paths.
- Living document: update based on common onboarding friction points.

## Example
**Day 1 — Step 4:** "Your First Analysis: Let's create your first automated analysis to see the product in action. Click 'New Analysis' → Select your data source (we recommend starting with the sample dataset) → Choose the 'Quick Insights' template → Click 'Run.' In about 30 seconds, you'll see your first AI-generated insights report. Congratulations! From here, try connecting your own data source to see results that matter to your business."
