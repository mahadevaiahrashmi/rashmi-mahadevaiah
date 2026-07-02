# Migration Guide

## Purpose
Creates a step-by-step migration guide for customers moving from a competitor or legacy system, covering process overview, data migration, feature mapping, timeline, support resources, and rollback options. Reduces migration friction and builds confidence in the transition.

## Auto-Trigger Patterns
- "Write a migration guide from [competitor/legacy system]"
- "Create a switching guide for [product]"
- "I need to document the migration process from [system]"
- "Help me reduce friction for customers switching to us"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Source system (competitor/legacy), data types to migrate, feature mapping, migration process steps
- **Optional:** Migration tools available, common migration issues, customer migration case studies, rollback procedures
- **Reference files:** product-brief.md, product-comparison-guide.md, integration-guide.md, customer-onboarding-guide.md

## Process
1. **Map the source system** — What data, configurations, and workflows exist in the current system?
2. **Build feature mapping** — Source feature → our equivalent. Gaps and workarounds documented.
3. **Design the migration path** — Pre-migration → migration → validation → cutover → post-migration.
4. **Create data migration plan** — What data transfers, format conversions, and validation steps are needed.
5. **Document rollback** — At every stage, how can the customer safely go back if needed?
6. **Test the guide** — Run through the migration with a test account. Time each step.

## Output Format
```
# Migrating from [Source System] to [Your Product]

## Overview
[What this guide covers. Estimated timeline. Support available.]

## Pre-Migration Checklist
- [ ] [Export data from source system]
- [ ] [Verify account setup in destination]
- [ ] [Map users and permissions]
- [ ] [Identify custom configurations]
- [ ] [Plan communication to users]

## Feature Mapping
| [Source] Feature | [Your Product] Equivalent | Notes |
|------------------|--------------------------|-------|
| [Feature A] | [Our Feature A] | Direct match |
| [Feature B] | [Our Feature B+] | Enhanced |
| [Feature C] | [Workaround] | Planned for Q3 |

## Migration Process

### Step 1: Data Export
[How to export from source. Formats. Tools.]
**Estimated time:** [X hours]

### Step 2: Data Preparation
[Format conversion. Data cleaning. Validation.]

### Step 3: Import
[Import process. Tools. Verification.]

### Step 4: Configuration
[Recreating settings, workflows, permissions.]

### Step 5: User Migration
[Account setup. SSO transition. Communication template.]

### Step 6: Validation
[Checklist to verify everything migrated correctly.]

### Step 7: Cutover
[Switching production traffic. DNS changes if applicable.]

## Rollback Plan
[At each stage, how to revert. Data preservation guarantees.]

## Post-Migration
[First week checklist. Monitoring. Support resources.]

## Timeline
| Phase | Duration | Activities |
|-------|----------|-----------|

## Support Resources
[Migration support team. Office hours. Escalation path.]
```

## Quality Standards
- A customer can follow this guide to migrate without white-glove support (though support should be available).
- Feature mapping is honest about gaps and includes workarounds or timelines.
- Rollback options are available at every stage—customers need confidence they can go back.
- **Anti-patterns:** Hiding feature gaps, no rollback plan, unrealistic timelines, migration that requires downtime without warning.

## Audience
Technical implementers and project managers at customer organizations planning a migration. They need clarity, confidence, and realistic expectations. The migration is a high-stress moment—the guide should reduce anxiety.

## Formatting Guidelines
- Checklist-driven format. Clear phase markers.
- Estimated times for each step. Total timeline summary.
- Include troubleshooting for each phase.
- Provide a communication template for the customer to share internally.

## Example
**Step 3 excerpt:** "Import your data using our CLI migration tool: `product-cli migrate --source salesforce --file export.csv --map mappings.json`. Expected output: `Migrated 15,234 records. 3 records skipped (see errors.log).` Verify: Open the dashboard and confirm record counts match. Check 5 random records for data accuracy. If counts don't match, review errors.log—common causes: date format mismatches (fix: add `--date-format 'MM/DD/YYYY'` flag)."
