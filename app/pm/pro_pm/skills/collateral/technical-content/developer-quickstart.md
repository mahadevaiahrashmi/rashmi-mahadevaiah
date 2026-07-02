# Developer Quickstart

## Purpose
Creates a 5-minute getting-started guide that takes a developer from zero to their first successful API call or working sample app. Covers prerequisites, installation, authentication, first API call, sample application, and next steps with community and support links.

## Auto-Trigger Patterns
- "Write a developer quickstart for [product]"
- "Create a getting started guide for developers"
- "I need a 5-minute quickstart tutorial"
- "Help me build a developer onboarding guide"

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Product/API, installation method, authentication setup, first API call example, sample app
- **Optional:** Multiple language examples, sandbox/test environment, video walkthrough, community links
- **Reference files:** product-brief.md, api-documentation-outline.md, integration-guide.md

## Process
1. **Ruthlessly minimize** — What is the absolute minimum a developer needs to see value? Cut everything else.
2. **Test the clock** — Actually time a new developer going through the guide. Target: under 5 minutes.
3. **Remove all friction** — Pre-filled values, copy buttons, test credentials, instant feedback.
4. **Celebrate success** — When the first call works, acknowledge it. "You just created your first analysis."
5. **Point forward** — Clear next steps for going deeper. Don't end on a dead end.

## Output Format
```
# [Product] Developer Quickstart
**Time to complete: ~5 minutes**

## Prerequisites
- [Language/runtime version]
- [Account — link to sign up]

## Step 1: Install
[Single command installation]
```bash
pip install product-sdk  # or npm, etc.
```

## Step 2: Get Your API Key
[Where to find it. Screenshot or link. Copy button.]

## Step 3: Your First API Call
[Complete, working example]
```python
from product import Client

client = Client(api_key="YOUR_API_KEY")
result = client.analyze(text="Hello, world!")
print(result)
# Output: {"sentiment": "positive", "confidence": 0.94}
```

## Step 4: Try the Sample App
[Clone and run a sample application]
```bash
git clone https://github.com/product/quickstart-app
cd quickstart-app
cp .env.example .env  # Add your API key
python app.py
# Open http://localhost:3000
```

## You're In! 🎉
You just [accomplished the key task]. Here's what to explore next:

## Next Steps
- 📖 [Full API Reference](/docs/api)
- 🏗️ [Build a complete app](/tutorials/first-app)
- 💬 [Join the community](/community)
- 🆘 [Get support](/support)
```

## Quality Standards
- A developer with no prior context can complete the quickstart in under 5 minutes.
- Every code example is complete, tested, and produces the shown output.
- Zero ambiguity: every step has one way to do it and a clear success signal.
- **Anti-patterns:** More than 5 steps, requiring account approval delays, broken code examples, no next steps, requiring complex setup.

## Audience
Developers evaluating the product for the first time. They're forming an opinion in the first 5 minutes. Make that experience delightful, fast, and confidence-building. Assume intelligence but no prior knowledge of your product.

## Formatting Guidelines
- Single page. Numbered steps. Large code blocks with copy buttons.
- Prerequisites as a short checklist. No prose paragraphs.
- Include expected output for every command.
- End with clear, categorized next steps.

## Example
**Step 3 output:** "Run this code and you'll see: `{\"sentiment\": \"positive\", \"confidence\": 0.94}`. Congratulations—you just made your first API call! The API analyzed the sentiment of your text and returned a confidence score. Try changing the text to see different results."
