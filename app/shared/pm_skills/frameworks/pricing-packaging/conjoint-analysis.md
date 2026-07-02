# Conjoint Analysis

## What It Is
Conjoint Analysis is a statistical technique that measures how customers value different features and price combinations by presenting trade-off scenarios. Instead of asking "how much would you pay for X?", it shows bundled options and asks which they'd choose — revealing implicit willingness to pay for each attribute. It's the gold standard for pricing research.

## When to Use
- Optimizing feature-price bundles for tiered packaging
- Understanding willingness to pay for specific features
- Making build/cut decisions based on feature value to customers
- When you need rigorous, quantitative pricing data

## When NOT to Use
- Quick directional pricing — Van Westendorp is faster and cheaper
- Products with only one or two configurable attributes — conjoint is overkill
- When you can't invest in proper survey design and statistical analysis (need expertise)

## How to Apply
1. **Define attributes and levels**: Features, price points, support tiers, etc. (4–6 attributes, 2–4 levels each)
2. **Design choice sets**: Create combinations using experimental design (tools: Sawtooth, Qualtrics, SurveyGizmo)
3. **Survey**: Present respondents with 8–12 choice scenarios, each showing 2–3 options. "Which would you choose?"
4. **Analyze**: Use statistical methods (HB estimation) to calculate part-worth utilities for each attribute level
5. **Simulate**: Model different packaging configurations and predict market share
6. **Decide**: Build packages that maximize value capture while serving different segments

## Template
**Attributes and Levels**:
| Attribute | Level 1 | Level 2 | Level 3 |
|-----------|---------|---------|---------|
| Feature A | Basic | Advanced | Premium |
| Feature B | Included | Not included | |
| Support | Email | Chat | Dedicated |
| Price | $X | $Y | $Z |

**Key Outputs**:
| Feature/Level | Relative Importance | WTP |
|--------------|--------------------|----|
| | | $ |

## Example
**Product**: Project management SaaS (surveyed 300 users)
- **Attributes**: Automations (none/basic/advanced), Storage (5GB/50GB/unlimited), Support (email/chat/dedicated), Integrations (5/20/unlimited), Price ($10/$25/$50/month)
- **Key Finding**: Users value unlimited integrations ($18 WTP) more than advanced automations ($12 WTP) — contrary to team assumptions
- **Package Decision**: Move integrations to mid-tier (instead of top-tier only), move automations to top-tier
- **Predicted Impact**: 15% increase in mid-tier conversions based on simulation

## Key Pitfalls
- Too many attributes overwhelm respondents — keep it to 4–6
- Unrealistic combinations — don't show packages that wouldn't exist in reality
- Not enough respondents — need 200+ for reliable HB estimation
- Ignoring segment differences — run analysis per segment for actionable insights
- DIY without statistical expertise — poorly designed conjoint produces misleading results

## Related Frameworks
- **Van Westendorp** — simpler price range analysis without feature trade-offs
- **Value-Based Pricing** — strategic pricing philosophy that conjoint data supports
- **Tiered Packaging** — designing Good/Better/Best tiers using conjoint insights
- **Feature Gating** — using conjoint data to decide what goes behind the paywall
