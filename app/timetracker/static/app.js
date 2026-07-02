"use strict";
// agent-notes: { ctx: "time tracker logic: live timer, projects, entries, stats, localStorage", deps: [style.css], state: active, last: "claude@2026-07-02" }

const $ = (id) => document.getElementById(id);
const PALETTE = ["#5b8def", "#22d3ee", "#34d399", "#fbbf24", "#f0616d", "#a78bfa", "#f472b6", "#facc15"];

// ─────────────────────────── Persistence ───────────────────────────
const KEY = "timetracker.v1";
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {
      projects: Array.isArray(raw.projects) ? raw.projects : null,
      entries: Array.isArray(raw.entries) ? raw.entries : [],
      running: raw.running || null,
    };
  } catch {
    return { projects: null, entries: [], running: null };
  }
}
function save() {
  localStorage.setItem(KEY, JSON.stringify({ projects: state.projects, entries: state.entries, running: state.running }));
}

const state = load();
if (!state.projects) {
  // Seed a few starter projects on first run.
  state.projects = [
    { id: uid(), name: "Deep Work", color: PALETTE[0] },
    { id: uid(), name: "Meetings", color: PALETTE[1] },
    { id: uid(), name: "Learning", color: PALETTE[2] },
  ];
  save();
}

// ─────────────────────────── Helpers ───────────────────────────
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function projectById(id) { return state.projects.find((p) => p.id === id); }

function fmtClock(ms) {
  const s = Math.floor(ms / 1000);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}
function fmtDur(ms) {
  const mins = Math.round(ms / 60000);
  const h = Math.floor(mins / 60), m = mins % 60;
  return h ? `${h}h ${m}m` : `${m}m`;
}
function fmtTime(ms) {
  return new Date(ms).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function dayKey(ms) { const d = new Date(ms); return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; }
function startOfToday() { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); }
function startOfWeek() {
  const d = new Date(); d.setHours(0, 0, 0, 0);
  const dow = (d.getDay() + 6) % 7; // Monday = 0
  d.setDate(d.getDate() - dow);
  return d.getTime();
}
function dayHeading(ms) {
  const k = dayKey(ms);
  if (k === dayKey(Date.now())) return "Today";
  if (k === dayKey(Date.now() - 86400000)) return "Yesterday";
  return new Date(ms).toLocaleDateString([], { weekday: "long", month: "short", day: "numeric" });
}

// ─────────────────────────── Live timer ───────────────────────────
let tick = null;
function renderClock() {
  const clock = $("clock");
  if (state.running) {
    clock.textContent = fmtClock(Date.now() - state.running.start);
    clock.classList.add("running");
  } else {
    clock.textContent = "00:00:00";
    clock.classList.remove("running");
  }
}
function startTicking() { stopTicking(); tick = setInterval(renderClock, 1000); }
function stopTicking() { if (tick) { clearInterval(tick); tick = null; } }

function syncToggle() {
  const btn = $("toggle");
  if (state.running) {
    btn.textContent = "Stop";
    btn.className = "stop";
    $("task").value = state.running.task || "";
    $("project").value = state.running.projectId;
  } else {
    btn.textContent = "Start";
    btn.className = "start";
  }
}

function startTimer() {
  const projectId = $("project").value || (state.projects[0] && state.projects[0].id);
  if (!projectId) return;
  state.running = { projectId, task: $("task").value.trim(), start: Date.now() };
  save();
  syncToggle();
  renderClock();
  startTicking();
}
function stopTimer() {
  const r = state.running;
  if (!r) return;
  const end = Date.now();
  if (end - r.start >= 1000) {
    state.entries.unshift({ id: uid(), projectId: r.projectId, task: r.task, start: r.start, end });
  }
  state.running = null;
  save();
  stopTicking();
  syncToggle();
  renderClock();
  $("task").value = "";
  renderAll();
}

// ─────────────────────────── Projects ───────────────────────────
function renderProjectSelect() {
  const sel = $("project");
  const cur = sel.value;
  sel.innerHTML = state.projects.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join("");
  if (state.running) sel.value = state.running.projectId;
  else if (cur) sel.value = cur;
}

// ─────────────────────────── Stats ───────────────────────────
function durationsSince(fromMs) {
  // Map projectId -> total ms of entries that started on/after fromMs, incl. running.
  const totals = {};
  let grand = 0;
  state.entries.forEach((e) => {
    if (e.start >= fromMs) {
      const d = e.end - e.start;
      totals[e.projectId] = (totals[e.projectId] || 0) + d;
      grand += d;
    }
  });
  if (state.running && state.running.start >= fromMs) {
    const d = Date.now() - state.running.start;
    totals[state.running.projectId] = (totals[state.running.projectId] || 0) + d;
    grand += d;
  }
  return { totals, grand };
}

function renderStats() {
  const today = durationsSince(startOfToday());
  const week = durationsSince(startOfWeek());
  $("stat-today").textContent = fmtDur(today.grand);
  $("stat-week").textContent = fmtDur(week.grand);

  const bars = $("stat-bars");
  const rows = Object.entries(week.totals).sort((a, b) => b[1] - a[1]);
  const max = rows.length ? rows[0][1] : 1;
  if (!rows.length) {
    bars.innerHTML = `<div class="bars-empty">No time tracked this week yet — hit Start above.</div>`;
    return;
  }
  bars.innerHTML = rows.map(([pid, ms]) => {
    const p = projectById(pid) || { name: "—", color: "#888" };
    const pct = Math.max(3, Math.round((ms / max) * 100));
    return `<div class="bar-row">
      <span class="name"><span class="cdot" style="background:${p.color};width:10px;height:10px;border-radius:50%;display:inline-block"></span>${esc(p.name)}</span>
      <span class="bar-track"><span class="bar-fill" style="width:${pct}%;background:${p.color}"></span></span>
      <span class="dur">${fmtDur(ms)}</span>
    </div>`;
  }).join("");
}

// ─────────────────────────── Entries list ───────────────────────────
function renderEntries() {
  const wrap = $("entries-list");
  if (!state.entries.length) {
    wrap.innerHTML = `<div class="empty">No entries yet. Start the timer or add one manually.</div>`;
    return;
  }
  const groups = {};
  const order = [];
  state.entries.forEach((e) => {
    const k = dayKey(e.start);
    if (!groups[k]) { groups[k] = []; order.push(k); }
    groups[k].push(e);
  });
  wrap.innerHTML = order.map((k) => {
    const list = groups[k];
    const total = list.reduce((s, e) => s + (e.end - e.start), 0);
    const rows = list.map((e) => {
      const p = projectById(e.projectId) || { name: "—", color: "#888" };
      return `<div class="entry" data-id="${e.id}">
        <span class="cdot" style="background:${p.color}"></span>
        <div class="meta">
          <div class="task">${esc(e.task || "(no description)")}</div>
          <div class="sub">${esc(p.name)} · ${fmtTime(e.start)} – ${fmtTime(e.end)}</div>
        </div>
        <span class="dur">${fmtDur(e.end - e.start)}</span>
        <button class="del" title="Delete" aria-label="Delete entry">🗑</button>
      </div>`;
    }).join("");
    return `<div class="day-group">
      <div class="day-label"><span>${esc(dayHeading(list[0].start))}</span><span>${fmtDur(total)}</span></div>
      ${rows}
    </div>`;
  }).join("");
}

function renderAll() {
  renderProjectSelect();
  renderStats();
  renderEntries();
}

// ─────────────────────────── Modals ───────────────────────────
function openModal(html) {
  closeModal();
  const scrim = document.createElement("div");
  scrim.className = "scrim";
  scrim.innerHTML = `<div class="modal">${html}</div>`;
  scrim.addEventListener("click", (e) => { if (e.target === scrim) closeModal(); });
  document.body.appendChild(scrim);
  return scrim;
}
function closeModal() { document.querySelectorAll(".scrim").forEach((s) => s.remove()); }

function addProjectModal() {
  let color = PALETTE[state.projects.length % PALETTE.length];
  const scrim = openModal(`
    <h3>New project</h3>
    <label>Name</label>
    <input type="text" id="np-name" placeholder="e.g. Client work" autofocus />
    <label>Color</label>
    <div class="swatches" id="np-swatches">
      ${PALETTE.map((c) => `<div class="swatch ${c === color ? "sel" : ""}" data-c="${c}" style="background:${c}"></div>`).join("")}
    </div>
    <div class="modal-actions">
      <button class="ghost" id="np-cancel">Cancel</button>
      <button class="btn-primary" id="np-save">Add project</button>
    </div>
  `);
  scrim.querySelectorAll(".swatch").forEach((sw) =>
    sw.addEventListener("click", () => {
      color = sw.dataset.c;
      scrim.querySelectorAll(".swatch").forEach((x) => x.classList.remove("sel"));
      sw.classList.add("sel");
    }));
  scrim.querySelector("#np-cancel").addEventListener("click", closeModal);
  scrim.querySelector("#np-save").addEventListener("click", () => {
    const name = scrim.querySelector("#np-name").value.trim();
    if (!name) return;
    const p = { id: uid(), name, color };
    state.projects.push(p);
    save();
    closeModal();
    renderProjectSelect();
    $("project").value = p.id;
    renderStats();
  });
  scrim.querySelector("#np-name").focus();
}

function addManualModal() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const scrim = openModal(`
    <h3>Add entry</h3>
    <label>Description</label>
    <input type="text" id="me-task" placeholder="What did you do?" autofocus />
    <label>Project</label>
    <select id="me-proj">${state.projects.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join("")}</select>
    <label>Date</label>
    <input type="date" id="me-date" value="${dateStr}" />
    <div class="modal-row">
      <div><label>Start</label><input type="time" id="me-start" value="09:00" /></div>
      <div><label>End</label><input type="time" id="me-end" value="10:00" /></div>
    </div>
    <div class="modal-actions">
      <button class="ghost" id="me-cancel">Cancel</button>
      <button class="btn-primary" id="me-save">Add</button>
    </div>
  `);
  scrim.querySelector("#me-cancel").addEventListener("click", closeModal);
  scrim.querySelector("#me-save").addEventListener("click", () => {
    const task = scrim.querySelector("#me-task").value.trim();
    const projectId = scrim.querySelector("#me-proj").value;
    const date = scrim.querySelector("#me-date").value;
    const st = scrim.querySelector("#me-start").value;
    const en = scrim.querySelector("#me-end").value;
    if (!date || !st || !en) return;
    const start = new Date(`${date}T${st}`).getTime();
    let end = new Date(`${date}T${en}`).getTime();
    if (isNaN(start) || isNaN(end)) return;
    if (end <= start) end += 86400000; // wrapped past midnight
    state.entries.push({ id: uid(), projectId, task, start, end });
    state.entries.sort((a, b) => b.start - a.start);
    save();
    closeModal();
    renderAll();
  });
  scrim.querySelector("#me-task").focus();
}

// ─────────────────────────── Wire up ───────────────────────────
$("toggle").addEventListener("click", () => (state.running ? stopTimer() : startTimer()));
$("task").addEventListener("keydown", (e) => { if (e.key === "Enter" && !state.running) startTimer(); });
$("task").addEventListener("input", () => { if (state.running) { state.running.task = $("task").value.trim(); save(); } });
$("project").addEventListener("change", () => { if (state.running) { state.running.projectId = $("project").value; save(); renderStats(); } });
$("add-proj").addEventListener("click", addProjectModal);
$("add-manual").addEventListener("click", addManualModal);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
$("entries-list").addEventListener("click", (e) => {
  const del = e.target.closest(".del");
  if (!del) return;
  const id = del.closest(".entry").dataset.id;
  state.entries = state.entries.filter((x) => x.id !== id);
  save();
  renderAll();
});

// Boot
renderProjectSelect();
syncToggle();
renderClock();
renderAll();
if (state.running) startTicking();
// Keep week/today stats fresh while a timer runs.
setInterval(() => { if (state.running) renderStats(); }, 30000);
