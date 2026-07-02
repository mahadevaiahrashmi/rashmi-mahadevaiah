# Landing Page Copy

## Purpose
Creates complete web landing page copy including headline, subheadline, hero section, value propositions, feature sections, social proof, CTA, FAQ, and SEO considerations. Designed to convert visitors into leads or trial users through clear, compelling, benefit-driven messaging.

## Auto-Trigger Patterns
- "Write landing page copy for [product/feature]"
- "Create a web page for [launch/campaign]"
- "I need copy for a product landing page"
- "Help me write a conversion-focused web page"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/feature, target audience, primary CTA, key value propositions (3-4), unique differentiators
- **Optional:** SEO keywords, existing brand voice guidelines, customer testimonials, competitive positioning
- **Reference files:** product-brief.md, product-datasheet.md, solution-brief.md

## Process
1. **Define the conversion goal** — What is the single action you want visitors to take?
2. **Write the headline** — State the primary benefit. Test: would someone click if they only saw this?
3. **Build the value stack** — Hero → value props → features → proof → CTA. Each section reduces friction.
4. **Write for scanners** — Most visitors skim. Headlines, subheadlines, and CTAs carry the message alone.
5. **Add social proof** — Logos, testimonials, metrics. Place near decision points.
6. **Optimize for SEO** — Target keyword in H1, meta description, and first paragraph.
7. **Write the FAQ** — Address buying objections disguised as questions.

## Output Format
```
# Landing Page Copy: [Product/Feature Name]

## SEO Metadata
- **Title tag:** [60 chars max]
- **Meta description:** [155 chars max]
- **Target keywords:** [primary, secondary]

## Hero Section
**Headline:** [Primary benefit, 6-10 words]
**Subheadline:** [Supporting detail, 15-25 words]
**CTA Button:** [Action-oriented, 2-4 words]
**Social proof line:** [e.g., "Trusted by 500+ teams"]

## Value Propositions (3-4 sections)
### [Value Prop 1 Headline]
[2-3 sentences. Benefit → feature → proof.]
[Supporting visual description]

### [Value Prop 2-4: Same structure]

## Feature Sections (2-3 detailed features)
### [Feature Name]
**Headline:** [Benefit-framed]
**Body:** [How it works, why it matters]
**Visual:** [Screenshot, diagram, or animation description]

## Social Proof Section
**Headline:** [e.g., "Trusted by industry leaders"]
**Customer logos:** [List]
**Testimonial 1:** "[Quote]" — Name, Title, Company
**Key metric:** [e.g., "95% customer satisfaction"]

## CTA Section
**Headline:** [Reinforce primary value]
**CTA Button:** [Same as hero or variant]
**Friction reducer:** [e.g., "No credit card required"]

## FAQ (5-7 questions)
Q: [Buying objection as question]
A: [Direct, honest answer]
```

## Quality Standards
- Above-the-fold content (hero) communicates value in under 5 seconds.
- Every section has a clear purpose in the conversion funnel.
- Social proof is specific (named customers, real numbers) not generic.
- **Anti-patterns:** Feature-led headlines, walls of text, multiple competing CTAs, generic testimonials, no FAQ.

## Audience
Website visitors—a mix of organic search, paid ads, referrals, and direct traffic. They have varying intent levels. The page must serve quick scanners (hero + CTA) and careful evaluators (full page read) simultaneously.

## Formatting Guidelines
- Copy is written for web: short paragraphs, scannable headers, bullet points.
- One primary CTA repeated 2-3 times. Secondary CTAs (e.g., "Learn more") are subtle.
- Mobile-first: content works on a phone screen.
- Include visual direction notes for the designer/developer.

## Example
**Hero:** Headline: "Ship compliant software without slowing down." Subheadline: "Automated compliance checks integrated into your CI/CD pipeline. Catch issues before they reach production." CTA: "Start Free Trial" | Subtext: "No credit card required. Setup in 5 minutes."
