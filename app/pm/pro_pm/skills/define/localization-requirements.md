# Localization Requirements

## Purpose
Plan internationalization (i18n) and localization (l10n) — covering target locales, string externalization, RTL support, formatting rules, cultural considerations, and translation workflow. Getting localization right from the start prevents expensive retrofitting.

## Auto-Trigger Patterns
- "localization requirements for [feature]"
- "i18n plan for [product]"
- "prepare for international launch"
- "translation requirements"
- "RTL support requirements"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

| Input | Required | Source |
|---|---|---|
| Feature or product description | Yes | User prompt |
| Target markets / locales | Yes | User prompt or `context/company/overview.md` |
| Existing i18n infrastructure | Optional | `context/products/*/tech-context.md` |
| Content types | Optional | User prompt |

## Process
1. **Define target locales** — Markets, languages, locale codes. Prioritize by business impact.
2. **Audit content types** — UI strings, error messages, emails, docs. Each has different workflows.
3. **String externalization** — All user-facing strings in resource files. No hardcoded strings.
4. **Define formatting rules** — Date, time, number, currency, phone formats per locale.
5. **RTL assessment** — Layout mirroring for Arabic, Hebrew, Urdu.
6. **Cultural considerations** — Colors, imagery, icons, names that don't translate.
7. **Translation workflow** — Who translates, review process, tooling, turnaround.
8. **Testing plan** — Pseudo-localization, linguistic testing, functional testing per locale.
9. **Quality-check** — No hardcoded strings, all locales have formatting rules.

## Output Format
```
## Localization Requirements: [Feature Name]

### Target Locales
| Locale | Language | Region | Priority | Launch Date |
|--------|----------|--------|----------|-------------|

### Formatting Rules
| Data Type | Format by Locale |
|-----------|-----------------|

### RTL Requirements
| Aspect | Requirement |
|--------|-------------|

### Cultural Considerations
| Element | Concern | Resolution |
|---------|---------|------------|

### Translation Workflow
| Step | Owner | Tool | SLA |
|------|-------|------|-----|

### Testing Plan
| Test Type | Method | Coverage |
|-----------|--------|----------|
```

## Quality Standards
- No hardcoded user-facing strings.
- Text expansion accounted for (German +30%).
- RTL fully addressed if applicable.
- Cultural sensitivities identified proactively.

**Anti-patterns:** Hardcoded strings, ignoring text expansion, English-only date formats, literal translation without cultural adaptation.

## Framework References
- **ICU MessageFormat** — Standard for pluralization and parameterized messages.
- **CLDR** — Unicode Common Locale Data Repository.

## Formatting Guidelines
- Tables for locale lists and formatting rules.
- Include locale codes for precision.
- Note string freeze dates prominently.

## Example
**Formatting:** "In `de-DE`, display numbers as `1.234,56`. Currency: `1.234,56 €` (symbol after number)."
