# Loom Video Script

## Purpose
Scripts Loom video recordings with a structured flow — hook, context, walkthrough, key points, and CTA — including screen share guidance and timing marks to create concise, engaging async video updates.

## Auto-Trigger Patterns
- "Write a Loom script"
- "Script a video update"
- "Create a Loom walkthrough"
- "Record a video for…"
- "Loom video plan for…"

## Tool Configuration
Requires `context/integrations/loom.md` with: Loom workspace URL, recording preferences. Auth: Loom account with recording permissions. Workspace plan for custom branding and CTAs.

## Inputs

**Zero-setup:** Only the user prompt is required. If context files are empty, use `context/_defaults.md` and label assumptions. See `skills/_GLOBAL-BEHAVIOR.md`.

- **Required:** Topic, audience, key message
- **Optional:** Screen share content, demo flow, time target, CTA, thumbnail description

## Process
1. Write the hook — first 10 seconds that tell the viewer why to keep watching.
2. Set context briefly — what the viewer needs to know before the walkthrough.
3. Plan the screen share sequence — what to show and in what order.
4. Script key talking points (not word-for-word — natural delivery).
5. Add timing marks to keep the video concise (target under 5 minutes).
6. End with a clear CTA — what the viewer should do next.
7. Plan the thumbnail and title for the Loom library.
8. Note any drawing/annotation moments during recording.

## Output Format
```
# Loom Video: [Title]

**Audience:** [Who is watching]
**Target Length:** [X minutes]
**Thumbnail:** [Description for thumbnail frame]

---

## Script

### 🎬 Hook (0:00-0:10)
**Show:** [Camera / Screen]
**Say:** "[Grab attention — state the value proposition of watching]"
*Example: "Here's a 3-minute walkthrough of the new dashboard
that ships next week — and what it means for your workflow."*

### 📋 Context (0:10-0:30)
**Show:** [Camera or relevant screen]
**Say:** "[Brief background — 2-3 sentences max]"
**Key Points:**
- [Context point 1]
- [Context point 2]

### 🖥️ Walkthrough (0:30-3:30)
**Screen Share:** [Application/prototype/doc]

**Segment 1 (0:30-1:30): [Topic]**
- Show: [What's on screen]
- Say: [Key talking points]
- Annotate: [Circle/highlight specific element]

**Segment 2 (1:30-2:30): [Topic]**
- Show: [What's on screen]
- Say: [Key talking points]
- Demo: [Specific interaction to demonstrate]

**Segment 3 (2:30-3:30): [Topic]**
- Show: [What's on screen]
- Say: [Key talking points]

### 🎯 Key Takeaways (3:30-4:00)
**Show:** [Camera]
**Say:** "The three things to remember are…"
1. [Takeaway 1]
2. [Takeaway 2]
3. [Takeaway 3]

### 📌 CTA (4:00-4:30)
**Show:** [Camera or relevant link]
**Say:** "[Specific ask — what the viewer should do next]"
**Loom CTA Button:** [Link text] → [URL]

---

## Recording Notes
- Start with camera only, then switch to screen share
- Use Loom's drawing tool to highlight [specific element] at [timestamp]
- Pause screen share at [timestamp] for camera-only emphasis
- Keep energy up — speak slightly faster than natural pace
- Thumbnail frame: [Describe the best frame to capture]
```

## Quality Standards
- Hook communicates value in under 10 seconds — viewers decide to stay or leave immediately.
- Total length is under 5 minutes for updates, under 10 for detailed walkthroughs.
- Talking points are bullet-form, not scripted word-for-word (keeps delivery natural).
- Screen share content is prepared and clean — close notifications, irrelevant tabs.
- CTA is specific and actionable — not "let me know what you think."
- Timing marks keep the recording on pace.

## Permissions Required
Loom account with recording access. Workspace admin for custom CTA buttons and branding.

## Example
A 4-minute product update Loom: Hook (10s) states the feature shipping next sprint, Context (20s) covers user research driving the decision, Walkthrough (3min) demos the prototype across 3 screens with annotations on key interactions, Takeaways (30s) summarizes the 3 things stakeholders should know, CTA (20s) asks viewers to comment with feedback by Friday. Thumbnail shows the main dashboard screen.
