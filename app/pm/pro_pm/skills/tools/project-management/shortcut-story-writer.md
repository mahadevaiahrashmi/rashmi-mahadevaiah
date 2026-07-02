# Shortcut Story Writer

## Purpose
Writes Shortcut (formerly Clubhouse) stories following the platform's conventions — concise names, structured descriptions, proper story types, estimates, and project/label organization for engineering-focused teams.

## Auto-Trigger Patterns
- "Write a Shortcut story"
- "Create a Clubhouse ticket"
- "Draft stories in Shortcut format"
- "Add this to Shortcut"
- Any request targeting Shortcut as the project tool

## Tool Configuration
Requires `context/integrations/shortcut.md` with: Shortcut organization slug, API token. Auth: API token generated from Shortcut settings. Requires team membership.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Feature or bug description, story type (Feature, Bug, Chore)
- **Optional:** Epic, project, iteration, estimate, labels, assignee(s), requester, external links, tasks

## Process
1. Select story type: Feature (user-facing value), Bug (defect), Chore (tech/ops work).
2. Write a concise name — Shortcut favors brief, clear titles.
3. Build the description using markdown: context, requirements, technical notes.
4. Set estimate using the team's point scale (typically 1/2/3/5/8).
5. Assign to the correct Project (maps to team/area) and Epic (maps to initiative).
6. Add labels for categorization (platform, area, type tags).
7. Create Tasks within the story for discrete implementation steps.
8. Link to related stories and external resources.
9. Assign to iteration (sprint) if timing is known.

## Output Format
```
Name: [Brief action-oriented title]
Type: [Feature | Bug | Chore]
Project: [Project name]
Epic: [Epic name]
Iteration: [Iteration name]
Estimate: [1|2|3|5|8]
Labels: [comma-separated]
Requester: [Name]
Owner(s): [Name(s)]

Description:
[Brief context — 1-2 sentences]

### Requirements
- [Specific requirement]
- [Specific requirement]

### Acceptance Criteria
- [ ] [Testable criterion]
- [ ] [Testable criterion]

### Technical Notes
[Implementation hints, relevant code areas, API references]

### Tasks
- [ ] [Implementation step 1]
- [ ] [Implementation step 2]

### Links
- Design: [URL]
- Related: [Story reference]
```

## Quality Standards
- Names are scannable in Shortcut's story list — 50 characters or fewer preferred.
- Story type accurately reflects the nature of work (features deliver user value, chores do not).
- Estimates are relative and consistent with the team's calibration.
- Tasks break down the story into reviewable/deployable chunks.
- Labels are from the team's controlled set — no ad hoc label creation.

## Permissions Required
Organization member with story creation access. Project membership for project assignment.

## Example
```
Name: Add two-factor auth to login
Type: Feature
Project: Identity
Epic: Security Hardening
Iteration: Sprint 22
Estimate: 5
Labels: security, auth, backend
Requester: PM Name
Owner(s): Dev Name

Description:
Users need the option to enable TOTP-based 2FA for login. This
addresses the top security request from enterprise customers.

### Requirements
- Support TOTP via authenticator apps (Google Authenticator, Authy)
- QR code setup flow with manual key fallback
- Recovery codes generated on enrollment (10 single-use codes)

### Acceptance Criteria
- [ ] User can enable 2FA from account settings
- [ ] Login prompts for TOTP code when 2FA is active
- [ ] Recovery codes allow login when authenticator is unavailable

### Tasks
- [ ] TOTP secret generation and storage
- [ ] QR code enrollment UI
- [ ] Login flow 2FA challenge step
- [ ] Recovery code generation and validation
```
