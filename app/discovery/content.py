"""Original teaching content for the Product Discovery interactive guide.

Each module has: a short lesson (HTML), a concrete example, a practice prompt
shown to the learner, and `coach_focus` — a hidden instruction telling the AI
coach what to look for when giving feedback on the learner's practice answer.
"""

MODULES = [
    {
        "id": "discovery-vs-delivery",
        "title": "Discovery vs Delivery",
        "lesson": (
            "<p><strong>Product discovery is the work of deciding what to build "
            "<em>before</em> you build it.</strong> Delivery is building the thing "
            "right; discovery is making sure it's the right thing at all.</p>"
            "<p>Most wasted engineering effort isn't buggy code — it's shipping "
            "features nobody wanted. Discovery de-risks that by turning opinions "
            "into evidence: talking to users, testing assumptions, and killing bad "
            "ideas while they're still cheap to kill.</p>"
            "<p>The goal isn't to plan more. It's to <strong>learn fast and be wrong "
            "cheaply</strong>, so that by the time you write production code, you're "
            "confident it matters.</p>"
        ),
        "example": (
            "A team spent 3 months building an analytics dashboard nobody opened. "
            "A week of discovery — five user interviews — would have revealed that "
            "users wanted an alert, not a dashboard. Same goal, 12x cheaper."
        ),
        "practice": "In one sentence, what's a feature or product you're considering building — and how would you know if it's worth building?",
        "coach_focus": "Assess whether they separated 'the thing' from 'evidence it's worth it'. Nudge them toward a concrete signal (a user behavior, a metric, a request) rather than a gut feeling. Be specific and encouraging.",
    },
    {
        "id": "frame-the-problem",
        "title": "Frame the Problem",
        "lesson": (
            "<p><strong>Start with the problem, not the solution.</strong> The most "
            "common discovery mistake is falling in love with a feature before you "
            "understand the pain it's meant to relieve.</p>"
            "<p>A good problem statement names <strong>who</strong> has the problem, "
            "<strong>what</strong> they're struggling to do, and <strong>why it "
            "matters</strong> to them — with no solution baked in. If your statement "
            "already contains the answer (\"users need a button that…\"), you've "
            "skipped the thinking.</p>"
            "<p>Frame it as a struggle: <em>\"When [situation], [user] wants to "
            "[goal], but [obstacle].\"</em></p>"
        ),
        "example": (
            "Solution-first: \"We need a CSV export button.\" "
            "Problem-first: \"When finance closes the month, they want the quarter's "
            "numbers in their own spreadsheet, but copying rows by hand takes an "
            "afternoon and introduces errors.\" The second reveals the real target: "
            "speed and accuracy — export is just one option."
        ),
        "practice": "Write a one-sentence problem statement for your idea using the shape: \"When [situation], [user] wants to [goal], but [obstacle].\"",
        "coach_focus": "Check that the statement describes a problem, not a disguised solution; that it names a specific user and a real obstacle. If a solution snuck in, point it out and rewrite it problem-first as an example.",
    },
    {
        "id": "know-your-users",
        "title": "Know Your Users",
        "lesson": (
            "<p><strong>You are not your user.</strong> Discovery replaces "
            "assumptions about people with observations of them.</p>"
            "<p>The sharpest tool here is <strong>Jobs to Be Done</strong>: people "
            "don't want your product, they \"hire\" it to make progress in their "
            "lives. Ask what job they're trying to get done and what they use today "
            "(including spreadsheets, sticky notes, and doing nothing).</p>"
            "<p>In interviews, <strong>ask about the past, not the future.</strong> "
            "\"Would you use this?\" gets polite lies. \"Tell me about the last time "
            "you faced this\" gets the truth — real behavior beats stated opinion.</p>"
        ),
        "example": (
            "\"Would you pay for a meal-planning app?\" → everyone says yes. "
            "\"Walk me through how you decided dinner last night\" → you learn they "
            "reheat leftovers on weeknights and only plan on Sundays. Now you know "
            "when the product actually needs to show up."
        ),
        "practice": "Who is the single most important user for your idea, and what's one question you could ask them about their PAST behavior (not their opinion of your idea)?",
        "coach_focus": "Reward a specific, narrow user over 'everyone'. Check the question probes past behavior rather than future intent or opinion. Offer a sharper past-tense question if theirs is hypothetical.",
    },
    {
        "id": "riskiest-assumption",
        "title": "Find the Riskiest Assumption",
        "lesson": (
            "<p>Every idea rests on a stack of assumptions that all have to be true "
            "for it to work: that the problem is real, that people will switch, that "
            "you can reach them, that they'll pay.</p>"
            "<p><strong>The riskiest assumption is the one that is both most "
            "uncertain and most fatal if wrong.</strong> That's what discovery should "
            "attack first — not the fun stuff you're already confident about.</p>"
            "<p>List your assumptions, then plot each on two axes: <em>how sure am I?</em> "
            "and <em>how badly does it hurt if I'm wrong?</em> The top-right corner is "
            "where you start.</p>"
        ),
        "example": (
            "For a paid dog-walking marketplace, the riskiest assumption usually "
            "isn't \"can we build the app\" — it's \"will enough vetted walkers sign "
            "up in one neighborhood to make bookings reliable.\" Test that before "
            "writing a line of the booking flow."
        ),
        "practice": "List 2–3 things that must be true for your idea to work, then name which single one would hurt the most if it turned out false.",
        "coach_focus": "Check they surfaced real assumptions (demand, reachability, willingness to pay, feasibility) and picked one that is both uncertain and fatal — not a safe or trivial one. If they picked something low-risk, challenge them toward a scarier one.",
    },
    {
        "id": "test-it-cheaply",
        "title": "Test It Cheaply",
        "lesson": (
            "<p>Once you know your riskiest assumption, design the <strong>smallest "
            "experiment that could prove you wrong.</strong> The aim is a strong "
            "signal for the least time and money.</p>"
            "<p>A ladder of cheap tests: <strong>interviews</strong> (is the problem "
            "real?), <strong>a landing page or fake-door</strong> (will they click / "
            "sign up?), <strong>a concierge or Wizard-of-Oz</strong> (deliver the "
            "value manually before automating it), and only then a "
            "<strong>prototype or MVP</strong>.</p>"
            "<p>Decide your <strong>pass/fail bar before you run it</strong> — e.g. "
            "\"if fewer than 10 of 100 visitors sign up, the pull isn't there.\" "
            "Otherwise you'll rationalize whatever happens.</p>"
        ),
        "example": (
            "Before building, Dropbox tested demand with a 3-minute demo video and a "
            "signup page. Overnight the waitlist jumped from 5,000 to 75,000 — enough "
            "signal to justify the build, at the cost of a weekend."
        ),
        "practice": "Describe the smallest, fastest experiment you could run this week to test your riskiest assumption — and what result would count as a fail.",
        "coach_focus": "Check the experiment is genuinely small/fast (days, not months) and actually tests the riskiest assumption. Insist on a concrete, pre-committed pass/fail threshold. Suggest a cheaper test if theirs is really just 'build it'.",
    },
    {
        "id": "decide-with-evidence",
        "title": "Decide with Evidence",
        "lesson": (
            "<p>Discovery ends in a decision: <strong>persevere, pivot, or kill.</strong> "
            "The point of all that testing is to make this call on evidence instead of "
            "sunk cost or the loudest voice in the room.</p>"
            "<p>Separate <strong>leading indicators</strong> (early behavior that "
            "predicts success — signups, activation, repeat use) from <strong>lagging "
            "indicators</strong> (revenue, retention) that arrive too late to steer by.</p>"
            "<p>Killing an idea isn't failure — it's discovery <em>working</em>. Every "
            "bad idea you stop early frees the team for a better one. Write down what "
            "you learned so the next bet starts smarter.</p>"
        ),
        "example": (
            "After a fake-door test, only 2% clicked through and none completed "
            "signup. Instead of shipping anyway, the team pivoted the angle, re-tested, "
            "and hit 18% — the discipline of a pre-set bar saved a quarter of building "
            "the wrong thing."
        ),
        "practice": "For your idea, what's ONE leading indicator you'd watch, and what result would make you honestly decide to pivot or stop?",
        "coach_focus": "Check they chose a true leading indicator (early behavior) not a lagging one, and that they named a threshold that would actually change their mind. Praise willingness to kill/pivot; challenge vague 'we'll see how it goes' answers.",
    },
]

# Sanity: ids are unique and used by the client + coach endpoint.
MODULE_IDS = {m["id"] for m in MODULES}
