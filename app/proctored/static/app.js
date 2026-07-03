"use strict";
// agent-notes: { ctx: "AI proctor UI: setup, exam player, camera opt-in, integrity signals, results", deps: [style.css], state: active, last: "claude@2026-07-02" }

const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const NOTICE_VERSION = "v1";           // versioned privacy notice (consent audit)
const SECONDS_PER_QUESTION = 90;       // FR-5: 90s/question, auto-submit at 0
const VISION_INTERVAL_MS = 8000;       // FR-6: sample a webcam frame every ~8s

let state = {
  topic: "", name: "", questions: [], answers: [], i: 0,
  camera: false, stream: null, consent: null, muted: false,
  events: [], startTs: 0, deadline: 0, timerId: null, visionId: null, submitted: false,
};

// ─────────────────────────── System check (camera optional, off by default) ───────────────────────────
function setCheck(id, text, ok, bad) {
  const el = $(id);
  if (!el) return;
  el.textContent = text;
  el.classList.toggle("on", !!ok);
  el.classList.toggle("bad", !!bad);
}
// Requests camera + mic like the original's System Check. Camera is used for the
// proctoring preview; the mic is only used to satisfy the check and is stopped
// immediately (no audio is recorded). Users can skip via "Take Without Camera".
async function requestProctoring() {
  setCheck("cam-check", "Checking…"); setCheck("mic-check", "Checking…");
  $("begin-btn").disabled = true;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 }, audio: true });
    stream.getAudioTracks().forEach((t) => t.stop()); // mic only for the check
    state.stream = stream;
    $("cam-video").srcObject = stream;
    $("cam").hidden = false;
    state.camera = true;
    setCheck("cam-check", "Granted ✓", true); setCheck("mic-check", "Granted ✓", true);
    // FR-12: require explicit consent behind the privacy notice before proctoring.
    $("consent-panel").hidden = false;
    $("begin-btn").disabled = !$("consent-box").checked;
    logEvent("Camera turned on");
  } catch {
    state.camera = false; state.consent = null;
    setCheck("cam-check", "Denied ✗", false, true); setCheck("mic-check", "Denied ✗", false, true);
    $("consent-panel").hidden = true;
    $("begin-btn").disabled = true; // must take the exam unproctored
  }
}
// Consent checkbox: record consent (timestamp + notice version) and enable Start.
$("consent-box").addEventListener("change", (e) => {
  if (e.target.checked && state.camera) {
    state.consent = { acceptedAt: new Date().toISOString(), notice: NOTICE_VERSION };
    $("begin-btn").disabled = false;
  } else {
    state.consent = null;
    $("begin-btn").disabled = true;
  }
});
$("cam-close").addEventListener("click", () => { disableCamera(); state.camera = false; });

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

// ─────────────────────────── Setup wizard (3 steps) ───────────────────────────
function showStep(n) {
  [0, 1, 2].forEach((s) => $("step-" + s).classList.toggle("hidden", s !== n));
  [...document.querySelectorAll("#steps .dot")].forEach((d, k) => {
    d.classList.toggle("on", k <= n); d.classList.toggle("done", k < n);
  });
}
// Step 0: enable the CTA only when name + topic are filled.
function checkStep0() { $("to-step-1").disabled = !($("name").value.trim() && $("topic").value.trim()); }
$("name").addEventListener("input", checkStep0);
$("topic").addEventListener("input", checkStep0);

// Step 0 → generate exam → Step 1 (instructions)
$("to-step-1").addEventListener("click", async () => {
  const topic = $("topic").value.trim(), name = $("name").value.trim();
  if (!topic || !name) return;
  const btn = $("to-step-1"); btn.disabled = true;
  setStatus("setup-status", "🧠 Generating your exam…");
  try {
    const fd = new FormData();
    fd.set("topic", topic); fd.set("count", $("count").value); fd.set("name", name);
    const data = await (await fetch(ROOT + "/generate", { method: "POST", body: fd })).json();
    if (!data.ok) { setStatus("setup-status", "⚠️ " + data.error); btn.disabled = false; return; }
    state.topic = data.topic; state.name = data.name || name;
    state.questions = data.questions;
    state.answers = new Array(data.questions.length).fill("");
    state.i = 0; state.events = []; state.submitted = false;
    setStatus("setup-status", "");
    $("instructions").textContent = data.instructions || "";
    showStep(1);
  } catch {
    setStatus("setup-status", "⚠️ Network error — please try again."); btn.disabled = false;
  }
});

// Step 1 → Step 2 (system check) — request camera + mic like the original.
$("to-step-2").addEventListener("click", () => { showStep(2); requestProctoring(); });

// Step 2 → begin the exam (proctored = camera granted + consent; or unproctored)
function beginExam() {
  const proctored = state.camera && state.consent;
  if (!proctored) { disableCamera(); state.camera = false; state.consent = null; }
  const badge = $("mode-badge");
  badge.textContent = proctored ? "🔴 Proctored" : "Unproctored";
  badge.classList.toggle("proctored", !!proctored);
  $("setup").hidden = true; $("exam").hidden = false;
  state.startTs = Date.now();
  startTimer(); armProctoring(); renderQuestion();
  if (proctored) startVisionProctoring();
}
$("begin-btn").addEventListener("click", beginExam);
$("unproctored-btn").addEventListener("click", () => { disableCamera(); state.camera = false; state.consent = null; beginExam(); });

// FR-5: total countdown (90s/question), auto-submits at zero.
function startTimer() {
  state.deadline = Date.now() + state.questions.length * SECONDS_PER_QUESTION * 1000;
  const tick = () => {
    const left = Math.max(0, Math.round((state.deadline - Date.now()) / 1000));
    const el = $("timer");
    el.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`;
    el.classList.toggle("low", left <= 30);
    if (left <= 0 && !state.submitted) {
      clearInterval(state.timerId);
      logEvent("Time expired — exam auto-submitted");
      submitExam();
    }
  };
  tick(); state.timerId = setInterval(tick, 1000);
}

// FR-6: sample a webcam frame and ask the vision model for violations.
function startVisionProctoring() {
  state.visionId = setInterval(sampleFrame, VISION_INTERVAL_MS);
}
let _lastVision = "";
async function sampleFrame() {
  if (state.submitted || !state.stream) return;
  const v = $("cam-video");
  if (!v.videoWidth) return;
  const c = document.createElement("canvas");
  c.width = 320; c.height = 240;
  c.getContext("2d").drawImage(v, 0, 0, 320, 240);
  let data;
  try { data = c.toDataURL("image/jpeg", 0.6); } catch { return; }
  try {
    const fd = new FormData(); fd.set("image", data);
    const r = await (await fetch(ROOT + "/proctor-frame", { method: "POST", body: fd })).json();
    (r.violations || []).forEach((vio) => {
      // avoid spamming the same violation every frame
      if (vio !== _lastVision) { logEvent("📷 " + vio); }
    });
    _lastVision = (r.violations || [])[0] || "";
  } catch { /* non-blocking */ }
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
// US-7: confirm before final submission.
$("submit-btn").addEventListener("click", () => {
  const answered = state.answers.filter((a) => a && a.trim()).length;
  showConfirm(
    `Submit your exam? You've answered ${answered} of ${state.questions.length} question${state.questions.length !== 1 ? "s" : ""}. You can't change answers after submitting.`,
    submitExam
  );
});

// ─────────────────────────── Submit + grade ───────────────────────────
async function submitExam() {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerId);
  clearInterval(state.visionId);
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
        <h2>${state.name ? esc(state.name) + " — " : ""}${grade}</h2>
        <p class="sub">You scored <b>${g.earned}</b> / ${g.total} on <b>${esc(state.topic)}</b>.</p>
      </div>
    </div>

    <div class="card integrity-card">
      <h3>🛡 Proctoring report</h3>
      ${state.camera
        ? `<p class="sub">Camera <b>on</b> — webcam proctoring active · <b>${flags.length}</b> integrity flag${flags.length !== 1 ? "s" : ""}.</p>`
        : `<p class="unproctored-label">⚠ Unproctored session — no camera monitoring was performed. Client-side signals only.</p>`}
      ${state.camera && state.consent
        ? `<p class="consent-audit">✅ Consent recorded: accepted ${esc(new Date(state.consent.acceptedAt).toLocaleString())} (privacy notice ${esc(state.consent.notice)}).</p>` : ""}
      ${summary ? `<p class="assess">${esc(summary)}</p>` : ""}
      ${flags.length ? `<ul class="flags">${flags.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : `<p class="clean">No suspicious activity detected. ✅</p>`}
    </div>

    <div class="card"><h3>Answers</h3>${rows}</div>

    <div class="card tutor-card">
      <div class="tutor-head">
        <h3>🎓 AI tutor</h3>
        <button class="ghost sm" id="tutor-mute" title="Mute / unmute spoken answers">🔊 Voice on</button>
      </div>
      <p class="sub">Ask about any answer — the tutor is grounded in this exam, and reads its replies aloud.</p>
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
  // US-11: spoken tutor via the browser's built-in voice, with a mute toggle.
  const muteBtn = $("tutor-mute");
  if (!("speechSynthesis" in window)) { muteBtn.hidden = true; state.muted = true; }
  muteBtn.addEventListener("click", () => {
    state.muted = !state.muted;
    muteBtn.textContent = state.muted ? "🔇 Voice off" : "🔊 Voice on";
    if (state.muted) window.speechSynthesis.cancel();
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function speak(text) {
  if (state.muted || !("speechSynthesis" in window) || !text) return;
  try {
    window.speechSynthesis.cancel(); // stop any prior reply
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.0; u.pitch = 1.0;
    window.speechSynthesis.speak(u);
  } catch { /* ignore */ }
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
    if (d.ok) speak(d.reply);
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

function showConfirm(message, onConfirm) {
  const scrim = document.createElement("div");
  scrim.className = "modal-scrim";
  scrim.innerHTML =
    `<div class="modal-box" role="dialog" aria-modal="true">
       <p>${esc(message)}</p>
       <div class="modal-actions">
         <button class="ghost" data-act="cancel">Cancel</button>
         <button class="btn" data-act="ok">Submit</button>
       </div>
     </div>`;
  const close = () => scrim.remove();
  scrim.addEventListener("click", (e) => {
    if (e.target === scrim || e.target.dataset.act === "cancel") close();
    else if (e.target.dataset.act === "ok") { close(); onConfirm(); }
  });
  document.body.appendChild(scrim);
}
