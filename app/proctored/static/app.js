"use strict";
// agent-notes: { ctx: "AI proctor UI: setup, exam player, camera opt-in, integrity signals, results", deps: [style.css], state: active, last: "claude@2026-07-02" }

const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let state = {
  topic: "", questions: [], answers: [], i: 0,
  camera: false, stream: null,
  events: [], startTs: 0, timerId: null, submitted: false,
};

// ─────────────────────────── Camera opt-in (OFF by default) ───────────────────────────
$("cam-toggle").addEventListener("change", async (e) => {
  if (e.target.checked) {
    const ok = await enableCamera();
    if (!ok) { e.target.checked = false; return; }
    state.camera = true; $("cam-state").textContent = "on";
  } else {
    disableCamera(); state.camera = false; $("cam-state").textContent = "off";
  }
});
$("cam-close").addEventListener("click", () => {
  disableCamera(); state.camera = false; $("cam-state").textContent = "off"; $("cam-toggle").checked = false;
});

async function enableCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 }, audio: false });
    state.stream = stream;
    $("cam-video").srcObject = stream;
    $("cam").hidden = false;
    logEvent("Camera turned on");
    return true;
  } catch {
    alert("Couldn't access the camera. You can still take the exam without it.");
    return false;
  }
}
function disableCamera() {
  if (state.stream) { state.stream.getTracks().forEach((t) => t.stop()); state.stream = null; }
  $("cam").hidden = true;
  $("cam-video").srcObject = null;
}

// ─────────────────────────── Integrity signals (client-side) ───────────────────────────
function logEvent(what) {
  const t = state.startTs ? Math.round((Date.now() - state.startTs) / 1000) : 0;
  state.events.push(`${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")} — ${what}`);
  updateIntegrity();
}
function updateIntegrity() {
  const el = $("integrity");
  if (!el) return;
  const n = state.events.filter((e) => !e.includes("Camera turned on")).length;
  if (n === 0) { el.className = "integrity ok"; el.textContent = "🛡 Clean"; }
  else { el.className = "integrity flag"; el.textContent = `⚠ ${n} flag${n > 1 ? "s" : ""}`; }
}
function armProctoring() {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !state.submitted) logEvent("Left the exam tab");
  });
  window.addEventListener("blur", () => { if (!state.submitted) logEvent("Exam window lost focus"); });
  document.addEventListener("copy", () => { if (!state.submitted) logEvent("Copy attempt"); });
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && !state.submitted && state.i >= 0) logEvent("Exited full-screen");
  });
}

// ─────────────────────────── Start exam ───────────────────────────
$("start-btn").addEventListener("click", startExam);
async function startExam() {
  const topic = $("topic").value.trim();
  if (!topic) { $("topic").focus(); return; }
  const btn = $("start-btn"); btn.disabled = true;
  setStatus("setup-status", "🧠 Generating your exam…");
  try {
    const fd = new FormData();
    fd.set("topic", topic); fd.set("count", $("count").value);
    const data = await (await fetch(ROOT + "/generate", { method: "POST", body: fd })).json();
    if (!data.ok) { setStatus("setup-status", "⚠️ " + data.error); btn.disabled = false; return; }
    state.topic = data.topic;
    state.questions = data.questions;
    state.answers = new Array(data.questions.length).fill("");
    state.i = 0; state.events = []; state.submitted = false;
    $("setup").hidden = true; $("exam").hidden = false;
    state.startTs = Date.now();
    startTimer(); armProctoring(); renderQuestion();
  } catch {
    setStatus("setup-status", "⚠️ Network error — please try again."); btn.disabled = false;
  }
}

function startTimer() {
  const tick = () => {
    const s = Math.floor((Date.now() - state.startTs) / 1000);
    $("timer").textContent = `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };
  tick(); state.timerId = setInterval(tick, 1000);
}

// ─────────────────────────── Question player ───────────────────────────
function renderQuestion() {
  const q = state.questions[state.i];
  $("q-count").textContent = `Question ${state.i + 1} of ${state.questions.length}`;
  $("progress-bar").style.width = `${((state.i + 1) / state.questions.length) * 100}%`;
  $("q-text").textContent = q.text;
  const body = $("q-body");
  if (q.type === "mcq") {
    body.innerHTML = q.options.map((o) =>
      `<button class="opt${state.answers[state.i] === o ? " selected" : ""}" data-opt="${esc(o)}">${esc(o)}</button>`).join("");
    body.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => {
      state.answers[state.i] = b.dataset.opt;
      body.querySelectorAll(".opt").forEach((x) => x.classList.toggle("selected", x === b));
    }));
  } else {
    body.innerHTML = `<textarea class="answer" placeholder="Type your answer…">${esc(state.answers[state.i] || "")}</textarea>`;
    body.querySelector(".answer").addEventListener("input", (e) => { state.answers[state.i] = e.target.value; });
  }
  $("prev-btn").disabled = state.i === 0;
  $("next-btn").hidden = state.i >= state.questions.length - 1;
  $("submit-btn").hidden = state.i < state.questions.length - 1;
}
$("prev-btn").addEventListener("click", () => { if (state.i > 0) { state.i--; renderQuestion(); } });
$("next-btn").addEventListener("click", () => { if (state.i < state.questions.length - 1) { state.i++; renderQuestion(); } });
$("submit-btn").addEventListener("click", submitExam);

// ─────────────────────────── Submit + grade ───────────────────────────
async function submitExam() {
  state.submitted = true;
  clearInterval(state.timerId);
  $("submit-btn").disabled = true;
  $("exam").hidden = true;
  const res = $("result"); res.hidden = false;
  res.innerHTML = `<div class="card"><div class="status">📝 Grading your exam…</div></div>`;

  let graded;
  try {
    const fd = new FormData();
    fd.set("payload", JSON.stringify({ questions: state.questions, answers: state.answers }));
    graded = await (await fetch(ROOT + "/grade", { method: "POST", body: fd })).json();
  } catch { graded = { ok: false }; }
  if (!graded.ok) { res.innerHTML = `<div class="card"><div class="status">⚠️ Couldn't grade the exam — please try again.</div></div>`; return; }

  // AI integrity summary (non-blocking)
  let summary = "";
  try {
    const fd2 = new FormData();
    fd2.set("events", JSON.stringify(state.events.filter((e) => !e.includes("Camera turned on"))));
    fd2.set("camera", state.camera ? "on" : "off");
    summary = (await (await fetch(ROOT + "/assess", { method: "POST", body: fd2 })).json()).summary || "";
  } catch { /* ignore */ }

  disableCamera();
  renderResults(graded, summary);
}

function renderResults(g, summary) {
  const pct = g.percent;
  const grade = pct >= 80 ? "Excellent" : pct >= 60 ? "Good" : pct >= 40 ? "Keep practising" : "Needs work";
  const flags = state.events.filter((e) => !e.includes("Camera turned on"));
  const rows = state.questions.map((q, i) => {
    const r = g.results[i] || { score: 0, feedback: "" };
    const cls = r.score >= 1 ? "correct" : r.score > 0 ? "partial" : "wrong";
    const mark = r.score >= 1 ? "✓" : r.score > 0 ? "≈" : "✗";
    return `<div class="rrow ${cls}">
      <div class="rmark">${mark}</div>
      <div><div class="rq">${esc(q.text)}</div>
      <div class="ryour">Your answer: <b>${esc(state.answers[i] || "—")}</b></div>
      <div class="rfb">${esc(r.feedback || "")}</div></div>
    </div>`;
  }).join("");

  $("result").innerHTML = `
    <div class="card score-card">
      <div class="score-ring" style="--p:${pct}"><span>${pct}%</span></div>
      <div>
        <h2>${grade}</h2>
        <p class="sub">You scored <b>${g.earned}</b> / ${g.total} on <b>${esc(state.topic)}</b>.</p>
      </div>
    </div>

    <div class="card integrity-card">
      <h3>🛡 Proctoring report</h3>
      <p class="sub">Camera was <b>${state.camera ? "on" : "off"}</b> · <b>${flags.length}</b> integrity flag${flags.length !== 1 ? "s" : ""}.</p>
      ${summary ? `<p class="assess">${esc(summary)}</p>` : ""}
      ${flags.length ? `<ul class="flags">${flags.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : `<p class="clean">No suspicious activity detected. ✅</p>`}
    </div>

    <div class="card"><h3>Answers</h3>${rows}</div>

    <div class="card tutor-card">
      <h3>🎓 AI tutor</h3>
      <p class="sub">Ask about any answer — the tutor is grounded in this exam.</p>
      <div class="tutor-log" id="tutor-log"></div>
      <div class="tutor-input">
        <input id="tutor-msg" type="text" placeholder="e.g. Why was question 2 wrong?" />
        <button class="btn" id="tutor-send">Ask</button>
      </div>
    </div>

    <div class="again"><button class="btn" onclick="location.reload()">Take another exam</button></div>
  `;

  // Ground the tutor in the graded exam.
  state.tutorContext = {
    topic: state.topic,
    items: state.questions.map((q, i) => ({
      q: q.text, correct: q.answer, your: state.answers[i] || "", score: (g.results[i] || {}).score,
    })),
  };
  $("tutor-send").addEventListener("click", askTutor);
  $("tutor-msg").addEventListener("keydown", (e) => { if (e.key === "Enter") askTutor(); });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function askTutor() {
  const input = $("tutor-msg");
  const msg = input.value.trim();
  if (!msg) return;
  const log = $("tutor-log");
  input.value = "";
  $("tutor-send").disabled = true;
  log.insertAdjacentHTML("beforeend", `<div class="tmsg you">${esc(msg)}</div>`);
  const pending = document.createElement("div");
  pending.className = "tmsg tutor"; pending.textContent = "…";
  log.appendChild(pending); log.scrollTop = log.scrollHeight;
  try {
    const fd = new FormData();
    fd.set("context", JSON.stringify(state.tutorContext));
    fd.set("message", msg);
    const d = await (await fetch(ROOT + "/tutor", { method: "POST", body: fd })).json();
    pending.textContent = d.ok ? d.reply : (d.error || "The tutor couldn't answer that.");
  } catch {
    pending.textContent = "Network error — please try again.";
  } finally {
    $("tutor-send").disabled = false;
    log.scrollTop = log.scrollHeight;
    input.focus();
  }
}

// ─────────────────────────── helpers ───────────────────────────
function setStatus(id, msg) { const el = $(id); if (!el) return; el.hidden = !msg; el.textContent = msg || ""; }
