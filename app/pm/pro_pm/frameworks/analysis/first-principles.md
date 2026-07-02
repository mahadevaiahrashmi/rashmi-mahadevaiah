# First Principles Thinking

## What It Is
First Principles Thinking is a problem-solving approach that breaks down complex problems to their most fundamental truths and reasons up from there, rather than reasoning by analogy ("how have others done this?"). Popularized in the modern context by Elon Musk, the concept dates to Aristotle. It challenges assumptions and conventions to find novel, often better solutions.

## When to Use
- When industry conventions are leading to suboptimal solutions
- Challenging "that's how it's always been done" thinking
- Designing pricing, architecture, or strategy from scratch
- When incremental thinking has hit a wall and breakthrough innovation is needed

## When NOT to Use
- When proven solutions exist and work well — not every problem needs reinvention
- Under time pressure — first principles analysis takes time
- For execution details — this is a strategic thinking tool, not a project management method
- When the team lacks domain knowledge to evaluate fundamental truths

## How to Apply
1. **Define the problem**: State what you're trying to solve clearly
2. **List assumptions**: What do you currently believe about this problem? What does the industry assume?
3. **Challenge each assumption**: Is this actually true? Or is it convention? Ask: "What would I do if this assumption didn't exist?"
4. **Identify fundamental truths**: What are the physics, economics, or human behaviors that can't be argued with?
5. **Reason up**: From those truths, what solution would you design if you had no knowledge of existing solutions?
6. **Compare**: How does your first-principles solution differ from the conventional one? Where is the conventional approach unnecessarily constrained?

## Template
**Problem**: ___

| Assumption | Is it true? | Fundamental Truth Instead |
|-----------|-------------|--------------------------|
| 1. | | |
| 2. | | |
| 3. | | |

**First Principles Solution**: ___
**vs. Conventional Approach**: ___
**Key Insight**: ___

## Example
**Problem**: "Cloud monitoring is too expensive for startups"
- **Assumption 1**: You need to store all metrics at high resolution → **Truth**: 95% of queries are on recent data; older data can be downsampled
- **Assumption 2**: You need a dedicated monitoring product → **Truth**: You need answers about your system's health; the product is optional
- **Assumption 3**: Pricing should be per-host/per-metric → **Truth**: Value is in insights, not volume; price on value delivered
- **First Principles Solution**: Auto-downsample old data (10x cost reduction), focus on automated insights (not dashboards), price per "answered question" or per team instead of per metric
- **Key Insight**: Industry prices on input volume (metrics), but customers value output (insights)

## Key Pitfalls
- First principles thinking can be slow — use it for big decisions, not daily work
- Confusing "I disagree with convention" with "I've reasoned from fundamentals" — do the actual analysis
- Ignoring valid reasons conventions exist — some constraints are real (regulation, physics)
- Using first principles as an excuse to ignore domain expertise and lessons learned

## Related Frameworks
- **Inversion** — complementary: reason backwards from failure
- **Blue Ocean Strategy** — eliminate/reduce/raise/create is a structured version of questioning assumptions
- **Second-Order Thinking** — extends first principles by considering downstream consequences
- **Pre-mortem** — identifies which first principles might be wrong
