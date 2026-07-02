# User Story Mapping

## What It Is
User Story Mapping, created by Jeff Patton (2014), is a visual technique for organizing user stories in two dimensions. The horizontal axis shows the user journey (activities and tasks in sequence), and the vertical axis shows priority (most essential on top). This creates a "map" that makes it easy to see the big picture, plan releases, and identify gaps.

## When to Use
- Release planning — defining what's in/out for each release along the user journey
- When the backlog is a flat list and the team has lost sight of the user experience
- Aligning the team on the end-to-end user flow before slicing into stories
- Identifying missing stories or gaps in the user journey

## When NOT to Use
- Purely technical work with no user journey (infrastructure, migrations)
- When you already have a well-understood, stable backlog
- As a replacement for customer research — story maps organize known stories

## How to Apply
1. **Map the backbone** (top row): User activities in chronological order (left to right). These are the big steps in the user journey
2. **Add tasks** under each activity: Break each activity into the specific tasks users perform
3. **Add stories** under each task: User stories that implement each task. Place most important at top
4. **Draw release lines** horizontally: Everything above the line = Release 1 (MVP), next section = Release 2, etc.
5. **Walk the map**: Read it left-to-right at each release level. Does each release tell a coherent user story?
6. **Identify gaps**: Are there activities with no stories? Tasks without essential stories above the release line?

## Template
```
Activities: │ Sign Up │ Configure │ Use Core │ Collaborate │ Report │
            │─────────│───────────│──────────│─────────────│────────│
Tasks:      │ Create  │ Set       │ Do main  │ Share with  │ Export │
            │ account │ prefs     │ action   │ team        │ data   │
────────────┼─────────┼───────────┼──────────┼─────────────┼────────┤ Release 1
Stories:    │ Email   │ Basic     │ Core     │ Invite      │ CSV    │
            │ signup  │ settings  │ feature  │ by email    │ export │
────────────┼─────────┼───────────┼──────────┼─────────────┼────────┤ Release 2
            │ SSO     │ Advanced  │ Advanced │ Real-time   │ PDF    │
            │ login   │ config    │ features │ collab      │ report │
```

## Example
**Product**: Onboarding flow for a project management tool
- **Activities**: Sign Up → Create Project → Add Tasks → Invite Team → Track Progress
- **Release 1 (MVP)**: Email signup, create project with name, add basic tasks, invite by email, simple list view
- **Release 2**: SSO, project templates, task assignments and due dates, role-based permissions, Gantt view
- **Gap Found**: No story for "learn how to use the tool" between Sign Up and Create Project → add onboarding walkthrough

## Key Pitfalls
- Making the map too detailed — it should be a high-level view, not every acceptance criterion
- Not walking the map as a user — reading left-to-right should tell a coherent story at each release
- Building it alone — story mapping is a collaborative team exercise
- Drawing the release line too high — MVP should be the thinnest possible slice across the full journey

## Related Frameworks
- **MoSCoW** — can be used within story mapping to classify story priority
- **Impact Mapping** — connects stories to goals and actors
- **Design Thinking** — the user journey from story mapping relates to the Empathize/Define phases
- **Shape Up** — alternative approach to scoping work into meaningful chunks
