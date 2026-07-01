"use strict";

const UNITS = window.UNITS || [];
const KEY = "learnai-progress";
const $ = (id) => document.getElementById(id);

// --- Analytics: thin wrapper so the app works with or without PostHog. ---
function track(event, props) {
  if (window.ANALYTICS_ON && window.posthog) {
    try { window.posthog.capture(event, props || {}); } catch (_) { /* no-op */ }
  }
}

// --- Persistent state (localStorage) ---
const today = () => new Date().toISOString().slice(0, 10);
const defaultState = () => ({ xp: 0, streak: 0, lastDay: null, hearts: 5, heartsDay: today(), done: {} });

let state = defaultState();
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || "null");
  if (saved) state = Object.assign(defaultState(), saved);
} catch (_) { /* ignore */ }

// Hearts refill each new day.
if (state.heartsDay !== today()) { state.hearts = 5; state.heartsDay = today(); }

function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

// Flat list of lessons in order, so "next lesson" logic is simple.
const FLAT = [];
UNITS.forEach((u, ui) => u.lessons.forEach((l, li) => FLAT.push({ unit: u, lesson: l, ui, li, key: `${u.id}/${l.id}` })));

const isDone = (k) => !!state.done[k];
function firstUndoneIndex() {
  const i = FLAT.findIndex((f) => !isDone(f.key));
  return i === -1 ? FLAT.length : i;
}

function updateHud() {
  $("streak").textContent = state.streak;
  $("xp").textContent = state.xp;
  $("hearts").textContent = state.hearts;
}

// --- Home / path ---
function renderHome() {
  $("lesson").classList.add("hidden");
  $("result").classList.add("hidden");
  const home = $("home");
  home.classList.remove("hidden");
  const currentIdx = firstUndoneIndex();
  let flatIdx = 0;

  home.innerHTML = UNITS.map((u) => {
    const nodes = u.lessons.map((l) => {
      const key = `${u.id}/${l.id}`;
      const idx = flatIdx++;
      let cls = "locked", label = "🔒";
      if (isDone(key)) { cls = "done"; label = "✓"; }
      else if (idx === currentIdx) { cls = "current"; label = "★"; }
      const disabled = cls === "locked";
      return `
        <div class="node-wrap">
          <button class="node ${cls}" data-key="${key}" ${disabled ? "disabled" : ""} title="${l.title}">${label}</button>
          <div class="node-label">${l.title}</div>
        </div>`;
    }).join('<div class="connector"></div>');
    return `
      <div class="unit">
        <div class="unit-head"><span class="icon">${u.icon}</span>
          <div><h2>${u.title}</h2><span class="u-sub">${u.lessons.length} lessons</span></div>
        </div>
        <div class="path">${nodes}</div>
      </div>`;
  }).join("");

  home.querySelectorAll(".node:not(.locked)").forEach((n) =>
    n.addEventListener("click", () => startLesson(n.dataset.key))
  );
  updateHud();
}

// --- Lesson player ---
let session = null;

function startLesson(key) {
  const entry = FLAT.find((f) => f.key === key);
  if (!entry) return;
  if (state.hearts <= 0) {
    alert("You're out of hearts! They refill tomorrow — come back to keep your streak going.");
    return;
  }
  session = { entry, i: 0, correct: 0, selected: null, answered: false, startHearts: state.hearts };
  track("lesson_started", { unit: entry.unit.id, lesson: entry.lesson.id });
  $("home").classList.add("hidden");
  $("result").classList.add("hidden");
  $("lesson").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const { entry, i } = session;
  const qs = entry.lesson.questions;
  const q = qs[i];
  session.selected = null;
  session.answered = false;

  $("lprogress-bar").style.width = `${(i / qs.length) * 100}%`;
  $("lesson-hearts").textContent = state.hearts;
  $("q-count").textContent = `Question ${i + 1} of ${qs.length}`;
  $("q-text").textContent = q.q;

  const opts = $("options");
  opts.innerHTML = q.options.map((o, idx) =>
    `<button class="opt" data-idx="${idx}">${escapeHtml(o)}</button>`
  ).join("");
  opts.querySelectorAll(".opt").forEach((b) =>
    b.addEventListener("click", () => selectOption(Number(b.dataset.idx)))
  );

  const fb = $("feedback");
  fb.className = "feedback";
  fb.innerHTML = "";
  $("check-btn").classList.remove("hidden");
  $("check-btn").disabled = true;
  $("continue-btn").classList.add("hidden");
}

function selectOption(idx) {
  if (session.answered) return;
  session.selected = idx;
  document.querySelectorAll(".opt").forEach((b) =>
    b.classList.toggle("selected", Number(b.dataset.idx) === idx)
  );
  $("check-btn").disabled = false;
}

function checkAnswer() {
  if (session.answered || session.selected == null) return;
  session.answered = true;
  const { entry, i } = session;
  const q = entry.lesson.questions[i];
  const correct = session.selected === q.answer;

  document.querySelectorAll(".opt").forEach((b) => {
    const bi = Number(b.dataset.idx);
    b.disabled = true;
    if (bi === q.answer) b.classList.add("correct");
    else if (bi === session.selected) b.classList.add("wrong");
  });

  const fb = $("feedback");
  fb.classList.add("show", correct ? "good" : "bad");
  fb.innerHTML = `<div class="fb-title">${correct ? "✓ Correct!" : "✗ Not quite"}</div>${escapeHtml(q.explain)}`;

  if (correct) {
    session.correct++;
  } else {
    state.hearts = Math.max(0, state.hearts - 1);
    save();
    updateHud();
    $("lesson-hearts").textContent = state.hearts;
  }
  track("question_answered", { unit: entry.unit.id, lesson: entry.lesson.id, concept: q.concept, correct });

  $("check-btn").classList.add("hidden");
  const cont = $("continue-btn");
  cont.classList.remove("hidden");
  cont.textContent = (i + 1 >= entry.lesson.questions.length) ? "Finish" : "Continue";

  if (state.hearts <= 0) finishLesson(false);
}

function nextQuestion() {
  const { entry } = session;
  session.i++;
  if (session.i >= entry.lesson.questions.length) finishLesson(true);
  else renderQuestion();
}

function finishLesson(completed) {
  const { entry } = session;
  const qs = entry.lesson.questions;
  const accuracy = Math.round((session.correct / qs.length) * 100);

  if (completed) {
    const xpGain = session.correct * 10 + 20; // per-correct + completion bonus
    state.xp += xpGain;
    if (!isDone(entry.key)) state.done[entry.key] = true;
    // Streak: increment once per calendar day of activity.
    if (state.lastDay !== today()) {
      const y = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      state.streak = state.lastDay === y ? state.streak + 1 : 1;
      state.lastDay = today();
      track("streak_incremented", { streak: state.streak });
    }
    save();
    track("lesson_completed", { unit: entry.unit.id, lesson: entry.lesson.id, xp: xpGain, accuracy, hearts_left: state.hearts });
    showResult(true, xpGain, accuracy);
  } else {
    save();
    track("lesson_failed", { unit: entry.unit.id, lesson: entry.lesson.id, accuracy });
    showResult(false, 0, accuracy);
  }
}

function showResult(passed, xpGain, accuracy) {
  $("lesson").classList.add("hidden");
  const r = $("result");
  r.classList.remove("hidden");
  updateHud();
  r.innerHTML = passed
    ? `<div style="font-size:3rem">🎉</div>
       <h2>Lesson complete!</h2>
       <p class="sub">Nice work — that concept is locked in.</p>
       <div class="stats">
         <div class="stat xp"><div class="v">+${xpGain}</div><div class="l">XP</div></div>
         <div class="stat acc"><div class="v">${accuracy}%</div><div class="l">Accuracy</div></div>
         <div class="stat"><div class="v">🔥 ${state.streak}</div><div class="l">Streak</div></div>
       </div>
       <button class="btn primary" id="back-home">Continue</button>`
    : `<div style="font-size:3rem">💔</div>
       <h2>Out of hearts</h2>
       <p class="sub">You ran out this round. Hearts refill tomorrow — or review and try again.</p>
       <button class="btn primary" id="back-home">Back to path</button>`;
  $("back-home").addEventListener("click", renderHome);
}

function quitLesson() {
  if (session && !confirmQuit()) return;
  renderHome();
}
function confirmQuit() { return window.confirm("Quit this lesson? Your progress on it won't be saved."); }

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

document.addEventListener("DOMContentLoaded", () => {
  $("check-btn").addEventListener("click", checkAnswer);
  $("continue-btn").addEventListener("click", nextQuestion);
  $("quit-btn").addEventListener("click", quitLesson);
  track("app_opened", { units: UNITS.length });
  renderHome();
});
