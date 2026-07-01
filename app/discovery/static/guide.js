"use strict";

// Served under a path prefix (/product-discovery); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";
const MODULES = window.MODULES || [];
const KEY = "pd-guide-progress";

let current = 0;
let completed = new Set();

// Restore progress from a previous visit.
try {
  const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
  if (Number.isInteger(saved.current)) current = Math.min(saved.current, MODULES.length - 1);
  if (Array.isArray(saved.completed)) completed = new Set(saved.completed);
} catch (_) { /* ignore */ }

function save() {
  localStorage.setItem(KEY, JSON.stringify({ current, completed: [...completed] }));
}

const $ = (id) => document.getElementById(id);

function buildStepper() {
  const nav = $("stepper");
  nav.innerHTML = "";
  MODULES.forEach((m, i) => {
    const b = document.createElement("button");
    b.className = "step-pill";
    b.textContent = `${i + 1}. ${m.title}`;
    b.addEventListener("click", () => goTo(i));
    nav.appendChild(b);
  });
}

function render() {
  const total = MODULES.length;
  const onDone = current >= total;

  $("done-card").classList.toggle("hidden", !onDone);
  document.querySelector(".lesson-card").classList.toggle("hidden", onDone);
  document.querySelector(".nav-row").classList.toggle("hidden", onDone);

  // Progress bar reflects completed lessons.
  $("progress-bar").style.width = `${(completed.size / total) * 100}%`;

  // Stepper states.
  [...$("stepper").children].forEach((pill, i) => {
    pill.classList.toggle("active", i === current && !onDone);
    pill.classList.toggle("done", completed.has(MODULES[i].id));
  });

  if (onDone) { save(); return; }

  const m = MODULES[current];
  $("step-num").textContent = current + 1;
  $("step-total").textContent = total;
  $("step-title").textContent = m.title;
  $("lesson").innerHTML = m.lesson;
  $("example").textContent = m.example;
  $("practice-prompt").textContent = m.practice;
  $("answer").value = "";
  $("coach-output").classList.add("hidden");
  $("coach-output").innerHTML = "";
  $("coach-status").textContent = "";

  $("prev-btn").disabled = current === 0;
  $("next-btn").textContent = current === total - 1 ? "Finish ✓" : "Next →";

  window.scrollTo({ top: 0, behavior: "smooth" });
  save();
}

function goTo(i) {
  current = Math.max(0, Math.min(i, MODULES.length));
  render();
}

function next() {
  // Advancing marks the current lesson complete.
  if (current < MODULES.length) completed.add(MODULES[current].id);
  current += 1;
  render();
}

async function getFeedback() {
  const answer = $("answer").value.trim();
  if (!answer) { $("coach-status").textContent = "Write a short answer first."; return; }
  const btn = $("coach-btn");
  btn.disabled = true;
  $("coach-status").textContent = "Coach is thinking…";

  const data = new FormData();
  data.set("module_id", MODULES[current].id);
  data.set("answer", answer);

  try {
    const res = await fetch(ROOT + "/coach", { method: "POST", body: data });
    const payload = await res.json();
    const out = $("coach-output");
    out.innerHTML = "";
    const head = document.createElement("div");
    head.className = "coach-head";
    head.textContent = payload.ai === false ? "Coach (offline tip)" : "Coach feedback";
    const body = document.createElement("div");
    body.textContent = payload.feedback || "No feedback.";
    out.append(head, body);
    out.classList.remove("hidden");
    $("coach-status").textContent = "";
    // Practicing counts as completing the step (update pills + bar in place).
    completed.add(MODULES[current].id);
    [...$("stepper").children].forEach((pill, i) =>
      pill.classList.toggle("done", completed.has(MODULES[i].id))
    );
    $("progress-bar").style.width = `${(completed.size / MODULES.length) * 100}%`;
    save();
  } catch (err) {
    $("coach-status").textContent = "Network error — try again.";
  } finally {
    btn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildStepper();
  $("next-btn").addEventListener("click", next);
  $("prev-btn").addEventListener("click", () => goTo(current - 1));
  $("coach-btn").addEventListener("click", getFeedback);
  $("restart-btn").addEventListener("click", () => { current = 0; completed = new Set(); save(); render(); });
  render();
});
