"use strict";
// agent-notes: { ctx: "GlassChat UI: login, 1-4 compare panels, chat loop, token/cost inspector", deps: [style.css], state: active, last: "claude@2026-07-02" }
//
// Ported from the standalone GlassChat (vanilla-JS reference) into a single
// non-module script served by the FastAPI sub-app. Talks to OpenRouter via our
// own /chat endpoint, which returns real token usage for the 👁 inspector.

// Served under a path prefix (/glass-chat); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";

// ─────────────────────────── Model catalog + cost math ───────────────────────────
// `in`/`out` are US dollars per 1,000,000 tokens (OpenRouter list prices, approx).
// Used only to ESTIMATE cost for learning — a real bill is whatever you're charged.
// All FREE models on OpenRouter (price 0). Mistral has no free models there, so
// this is a curated free set from other makers — every reply costs $0.
const MODELS = [
  { id: "openai/gpt-oss-20b:free", label: "GPT-OSS 20B (free)", blurb: "OpenAI's open model — reliable.", price: { in: 0, out: 0 } },
  { id: "google/gemma-4-31b-it:free", label: "Gemma 4 31B (free)", blurb: "Google's open model.", price: { in: 0, out: 0 } },
  { id: "openai/gpt-oss-120b:free", label: "GPT-OSS 120B (free)", blurb: "OpenAI's largest open model here.", price: { in: 0, out: 0 } },
  { id: "liquid/lfm-2.5-1.2b-instruct:free", label: "Liquid LFM 1.2B (free)", blurb: "Tiny 1.2B — great size contrast.", price: { in: 0, out: 0 } },
];
function getModel(id) { return MODELS.find((m) => m.id === id) || MODELS[0]; }
function costOf(model, promptTokens = 0, completionTokens = 0) {
  const inCost = (promptTokens / 1_000_000) * model.price.in;
  const outCost = (completionTokens / 1_000_000) * model.price.out;
  return { in: inCost, out: outCost, total: inCost + outCost };
}
function formatUSD(amount) {
  if (amount === 0) return "$0.00";
  if (amount < 0.01) return "$" + amount.toFixed(6);
  if (amount < 1) return "$" + amount.toFixed(4);
  return "$" + amount.toFixed(2);
}

// ─────────────────────────── Token estimator (for the context breakdown) ───────────────────────────
// Real tokenization needs a big table; for a learning toy we approximate (~4
// chars/token). Authoritative totals come from the provider's `usage` numbers.
function estimateTokens(text) {
  if (!text) return 0;
  const byChars = text.length / 4;
  const byWords = text.trim().split(/\s+/).filter(Boolean).length * 1.33;
  return Math.max(1, Math.round((byChars + byWords) / 2));
}
const PER_MESSAGE_OVERHEAD = 4;
function breakdown(messages) {
  const rows = messages.map((m) => ({
    role: m.role,
    text: m.content,
    tokens: estimateTokens(m.content) + PER_MESSAGE_OVERHEAD,
  }));
  const total = rows.reduce((sum, r) => sum + r.tokens, 0);
  return { rows, total };
}

// ─────────────────────────── API wrapper ───────────────────────────
async function sendChat({ password, model, messages }) {
  const res = await fetch(ROOT + "/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, model, messages }),
  });
  let data;
  try { data = await res.json(); }
  catch { throw new Error(`Server returned an unreadable response (HTTP ${res.status}).`); }
  if (!res.ok) {
    const err = new Error(data.error || `Request failed (HTTP ${res.status}).`);
    err.status = res.status;
    throw err;
  }
  return data; // { reply, usage, model }
}

const SYSTEM_PROMPT =
  "You are GlassChat, a friendly, concise assistant helping someone learn how chat AIs work. Keep answers clear and not too long.";

const app = document.getElementById("app");

// ─────────────────────────── State ───────────────────────────
// A "panel" is one independent conversation column. Compare mode shows up to 4
// side by side, each with its own model, memory setting, history, and totals —
// one shared prompt feeds them all.
function makePanel(model) {
  return { model, memory: true, messages: [], totals: { prompt: 0, completion: 0, total: 0, cost: 0 }, busy: false };
}
const MAX_PANELS = 4;
const TAGS = ["A", "B", "C", "D"];
const MODEL_ROTATION = MODELS.map((m) => m.id);
const state = {
  password: "",
  panels: [makePanel("openai/gpt-oss-20b:free"), makePanel("google/gemma-4-31b-it:free")],
};
const activePanels = () => state.panels.map((_, i) => i);
const anyBusy = () => state.panels.some((p) => p.busy);
function nextModel() {
  const used = new Set(state.panels.map((p) => p.model));
  return MODEL_ROTATION.find((m) => !used.has(m)) || MODEL_ROTATION[0];
}

// ─────────────────────────── Tiny helpers ───────────────────────────
function h(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function formatMessage(text) {
  const parts = text.split(/```/);
  return parts
    .map((part, i) => {
      if (i % 2 === 1) return `<pre><code>${escapeHtml(part.replace(/^\n/, ""))}</code></pre>`;
      const safe = escapeHtml(part).replace(/`([^`]+)`/g, "<code>$1</code>");
      return safe.split(/\n{2,}/).filter((p) => p.trim()).map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
    })
    .join("");
}

// ─────────────────────────── Login screen ───────────────────────────
function mountLogin(errorMsg = "") {
  app.innerHTML = "";
  const view = h(`
    <div class="login-wrap">
      <div class="login-card">
        <div class="logo">🔮</div>
        <h1>GlassChat</h1>
        <p>A see-through LLM chat. Watch your tokens, context, and cost in real time.</p>
        <form class="field" id="login-form">
          <input type="password" id="pw" placeholder="Enter password" autocomplete="off" autofocus />
          <button class="btn" type="submit">Unlock →</button>
        </form>
        <div class="error">${escapeHtml(errorMsg)}</div>
        <div class="hint">The password is set by the site owner in the server's environment.</div>
        <div class="hint"><a class="back-link" href="/#projects">← Back to portfolio</a></div>
      </div>
    </div>
  `);
  view.querySelector("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = view.querySelector("#pw").value;
    if (!pw) return;
    state.password = pw;
    mountChat();
  });
  app.appendChild(view);
}

// ─────────────────────────── Chat shell ───────────────────────────
function mountChat() {
  app.innerHTML = "";
  const view = h(`
    <div class="shell">
      <header class="topbar">
        <div class="brand"><span class="dot">🔮</span><span class="full">GlassChat</span></div>
        <button class="ghost-btn" id="add-model" title="Add another model to compare (up to 4)">＋ Add window</button>
        <button class="ghost-btn" id="new-chat">＋ New chat</button>
        <a class="back-link" href="/#projects">← Portfolio</a>
      </header>
      <div class="panels" id="panels"></div>
      <div class="composer">
        <div class="composer-inner">
          <textarea id="input" rows="1" placeholder="Message GlassChat…"></textarea>
          <button class="send" id="send" title="Send (Enter)">➤</button>
        </div>
        <div class="composer-note" id="note"></div>
      </div>
    </div>
  `);
  app.appendChild(view);

  view.querySelector("#add-model").addEventListener("click", () => {
    if (anyBusy() || state.panels.length >= MAX_PANELS) return;
    state.panels.push(makePanel(nextModel()));
    renderShell();
  });
  view.querySelector("#new-chat").addEventListener("click", () => {
    if (anyBusy()) return;
    state.panels.forEach((p) => {
      p.messages = [];
      p.totals = { prompt: 0, completion: 0, total: 0, cost: 0 };
    });
    activePanels().forEach(renderPanelStream);
    activePanels().forEach(updatePanelMeter);
  });

  const input = view.querySelector("#input");
  input.addEventListener("input", autoGrow);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });
  view.querySelector("#send").addEventListener("click", handleSend);

  renderShell();
  input.focus();
}

function renderShell() {
  const wrap = document.getElementById("panels");
  wrap.dataset.count = state.panels.length;
  wrap.innerHTML = "";
  activePanels().forEach((i) => wrap.appendChild(buildPanel(i)));
  activePanels().forEach((i) => { wirePanelControls(i); renderPanelStream(i); updatePanelMeter(i); });
  const add = document.getElementById("add-model");
  if (add) add.disabled = state.panels.length >= MAX_PANELS;
  updateNote();
}

function buildPanel(i) {
  const p = state.panels[i];
  const modelOptions = MODELS.map(
    (m) => `<option value="${m.id}" ${m.id === p.model ? "selected" : ""}>${m.label}</option>`
  ).join("");
  const removable = state.panels.length > 1;
  return h(`
    <section class="panel" data-panel="${i}">
      <div class="panel-head">
        <span class="panel-tag">${TAGS[i]}</span>
        <select class="p-model" title="Which model answers in this window">${modelOptions}</select>
        <label class="control" title="Memory ON resends the whole conversation each turn. OFF sends only the latest message.">
          <span class="switch"><input type="checkbox" class="p-memory" ${p.memory ? "checked" : ""}><span class="slider"></span></span>
          <b class="p-mem-label">${p.memory ? "On" : "Off"}</b>
        </label>
        <div class="meter" title="Everything spent in this window so far">
          <span>Σ</span><b class="p-tokens">0</b><span>·</span><b class="p-cost">$0.00</b>
        </div>
        ${removable ? '<button class="p-remove" title="Remove this window" aria-label="Remove window">×</button>' : ""}
      </div>
      <div class="stream"><div class="stream-inner"></div></div>
    </section>
  `);
}

function panelNode(i) { return document.querySelector(`.panel[data-panel="${i}"]`); }

function wirePanelControls(i) {
  const node = panelNode(i);
  const p = state.panels[i];
  node.querySelector(".p-model").addEventListener("change", (e) => { p.model = e.target.value; updateNote(); });
  node.querySelector(".p-memory").addEventListener("change", (e) => {
    p.memory = e.target.checked;
    node.querySelector(".p-mem-label").textContent = p.memory ? "On" : "Off";
    updateNote();
  });
  const rm = node.querySelector(".p-remove");
  if (rm) rm.addEventListener("click", () => { if (anyBusy()) return; state.panels.splice(i, 1); renderShell(); });
}

function autoGrow(e) {
  const el = e.target;
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 180) + "px";
}

function updateNote() {
  const note = document.getElementById("note");
  if (!note) return;
  const labels = state.panels.map((p) => `<b>${getModel(p.model).label}</b>`);
  const scope = state.panels.length === 1 ? "this window" : `all ${state.panels.length} windows`;
  note.innerHTML = `One prompt runs through ${scope} — ${labels.join(" vs ")}. Click 👁 on any reply to see the tokens &amp; cost behind it.`;
}

// ─────────────────────────── Rendering messages ───────────────────────────
function renderPanelStream(i) {
  const node = panelNode(i);
  if (!node) return;
  const inner = node.querySelector(".stream-inner");
  const p = state.panels[i];
  inner.innerHTML = "";

  if (p.messages.length === 0) {
    inner.appendChild(h(`
      <div class="empty">
        <div class="logo">🔮</div>
        <h2>Ask anything — and watch the tokens</h2>
        ${i === 0
          ? `<div class="chips">
               <button class="chip">Explain tokens like I'm five</button>
               <button class="chip">Write a haiku about the sea</button>
               <button class="chip">What is a context window?</button>
             </div>`
          : `<p class="empty-sub">Same prompt, a different model.</p>`}
      </div>`));
    inner.querySelectorAll(".chip").forEach((c) =>
      c.addEventListener("click", () => {
        const input = document.getElementById("input");
        input.value = c.textContent;
        input.focus();
        autoGrow({ target: input });
      }));
    return;
  }

  p.messages.forEach((msg, mi) => inner.appendChild(renderMessage(msg, i, mi)));
  scrollDown(i);
}

function renderMessage(msg, panelIndex, msgIndex) {
  const isUser = msg.role === "user";
  const node = h(`
    <div class="msg ${msg.role}">
      <div class="msg-row">
        <div class="avatar">${isUser ? "🧑" : "🔮"}</div>
        <div class="bubble">${msg.pending ? typingDots() : formatMessage(msg.content)}</div>
      </div>
      <div class="msg-foot"></div>
    </div>
  `);
  const foot = node.querySelector(".msg-foot");
  if (!msg.pending) {
    const eye = h(`<button class="eye" title="Inspect tokens & cost">👁 <span></span></button>`);
    if (msg.role === "assistant" && msg.meta?.usage) {
      const m = getModel(msg.meta.model);
      const cost = costOf(m, msg.meta.usage.prompt_tokens, msg.meta.usage.completion_tokens);
      eye.querySelector("span").textContent = `${msg.meta.usage.total_tokens} tok · ${formatUSD(cost.total)}`;
    } else {
      eye.querySelector("span").textContent = "inspect";
    }
    eye.addEventListener("click", () => openInspector(panelIndex, msgIndex));
    foot.appendChild(eye);
    if (msg.note) {
      const n = document.createElement("span");
      n.className = "fell-back";
      n.textContent = msg.note;
      foot.appendChild(n);
    }
  }
  return node;
}

function typingDots() { return `<span class="typing"><i></i><i></i><i></i></span>`; }
function scrollDown(i) { const s = panelNode(i)?.querySelector(".stream"); if (s) s.scrollTop = s.scrollHeight; }

function updatePanelMeter(i) {
  const node = panelNode(i);
  if (!node) return;
  const p = state.panels[i];
  node.querySelector(".p-tokens").textContent = p.totals.total.toLocaleString();
  node.querySelector(".p-cost").textContent = formatUSD(p.totals.cost);
}

// ─────────────────────────── The send loop ───────────────────────────
function buildRequestMessages(p, newUserContent) {
  const sys = { role: "system", content: SYSTEM_PROMPT };
  if (p.memory) {
    const history = p.messages.filter((m) => !m.pending).map((m) => ({ role: m.role, content: m.content }));
    return [sys, ...history, { role: "user", content: newUserContent }];
  }
  return [sys, { role: "user", content: newUserContent }];
}

async function handleSend() {
  if (anyBusy()) return;
  const input = document.getElementById("input");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  input.style.height = "auto";
  setSendEnabled(false);
  await Promise.all(activePanels().map((i) => sendToPanel(i, text)));
  setSendEnabled(true);
  const inp = document.getElementById("input");
  if (inp) inp.focus();
}

async function sendToPanel(i, text) {
  const p = state.panels[i];
  const sentContext = buildRequestMessages(p, text); // snapshot BEFORE mutating

  p.messages.push({ role: "user", content: text });
  const pending = { role: "assistant", content: "", pending: true };
  p.messages.push(pending);
  p.busy = true;
  renderPanelStream(i);

  try {
    const { reply, usage, model, fell_back } = await sendChat({ password: state.password, model: p.model, messages: sentContext });
    pending.pending = false;
    pending.content = reply;
    pending.meta = { sentContext, usage, model, memory: p.memory };
    if (fell_back) pending.note = `↳ your pick was busy — answered by ${getModel(model).label}`;
    if (usage) {
      const m = getModel(model);
      const cost = costOf(m, usage.prompt_tokens, usage.completion_tokens);
      p.totals.prompt += usage.prompt_tokens;
      p.totals.completion += usage.completion_tokens;
      p.totals.total += usage.total_tokens;
      p.totals.cost += cost.total;
    }
    p.busy = false;
    renderPanelStream(i);
    updatePanelMeter(i);
  } catch (err) {
    p.busy = false;
    p.messages = p.messages.filter((m) => m !== pending);
    if (err.status === 401) {
      state.password = "";
      state.panels.forEach((pp) => { pp.messages = []; pp.totals = { prompt: 0, completion: 0, total: 0, cost: 0 }; });
      mountLogin("Wrong password. Try again.");
      return;
    }
    p.messages.push({ role: "assistant", content: `⚠️ ${err.message}` });
    renderPanelStream(i);
  }
}

function setSendEnabled(on) { const btn = document.getElementById("send"); if (btn) btn.disabled = !on; }

// ─────────────────────────── Token inspector drawer ───────────────────────────
function openInspector(panelIndex, msgIndex) {
  const p = state.panels[panelIndex];
  const msg = p.messages[msgIndex];
  closeInspector();

  const scrim = h(`<div class="scrim"></div>`);
  const label = state.panels.length > 1 ? ` · Window ${TAGS[panelIndex]}` : "";
  const drawer = h(`
    <aside class="drawer" role="dialog" aria-label="Token inspector">
      <div class="drawer-head"><h3>👁 Token inspector${label}</h3><button class="x" aria-label="Close">×</button></div>
      <div class="drawer-body"></div>
    </aside>
  `);
  document.body.append(scrim, drawer);

  const body = drawer.querySelector(".drawer-body");
  if (msg.role === "assistant" && msg.meta) body.appendChild(assistantInspector(msg, p));
  else body.appendChild(userInspector(msg));

  const close = () => closeInspector();
  scrim.addEventListener("click", close);
  drawer.querySelector(".x").addEventListener("click", close);
  document.addEventListener("keydown", escClose);
  requestAnimationFrame(() => { scrim.classList.add("open"); drawer.classList.add("open"); });
}
function escClose(e) { if (e.key === "Escape") closeInspector(); }
function closeInspector() {
  document.removeEventListener("keydown", escClose);
  document.querySelectorAll(".scrim, .drawer").forEach((el) => el.remove());
}

function userInspector(msg) {
  const { rows, total } = breakdown([{ role: "user", content: msg.content }]);
  const r = rows[0];
  return h(`
    <div>
      <div class="callout">This is one message you typed. On its own it's ≈ <b>${r.tokens}</b> tokens.
      What it actually costs depends on the model — and, if <b>memory is on</b>, it gets re-sent with every future turn too.</div>
      <div class="section-label">This message</div>
      <div class="ctx-row">
        <div class="ctx-top"><span class="ctx-role user">You</span><span class="ctx-tok">≈ ${r.tokens} tokens</span></div>
        <div class="bar"><i style="width:100%"></i></div>
        <div class="ctx-preview">${escapeHtml(msg.content.slice(0, 120))}</div>
      </div>
      <div class="section-label">Total</div>
      <div class="stat"><div class="k">Estimated tokens</div><div class="v">${total}</div></div>
    </div>
  `);
}

function assistantInspector(msg, panel) {
  const { sentContext, usage, model, memory } = msg.meta;
  const m = getModel(model);
  const { rows, total: estTotal } = breakdown(sentContext);
  const maxTok = Math.max(...rows.map((r) => r.tokens), 1);

  const ctxRows = rows.map((r) => {
    const label = r.role === "user" ? "You" : r.role === "assistant" ? "AI (past reply)" : "System prompt";
    return `
      <div class="ctx-row">
        <div class="ctx-top"><span class="ctx-role ${r.role}">${label}</span><span class="ctx-tok">≈ ${r.tokens} tok</span></div>
        <div class="bar"><i style="width:${Math.round((r.tokens / maxTok) * 100)}%"></i></div>
        <div class="ctx-preview">${escapeHtml(r.text.slice(0, 120)) || "—"}</div>
      </div>`;
  }).join("");

  const cost = usage ? costOf(m, usage.prompt_tokens, usage.completion_tokens) : { in: 0, out: 0, total: 0 };
  const memNote = memory
    ? `Because <b>memory was ON</b>, all <b>${rows.length}</b> items below were sent to the model just to answer this one turn. The longer the chat, the more you re-send every time.`
    : `<b>Memory was OFF</b>, so only the system prompt + your latest message were sent — the model saw none of the earlier chat.`;

  return h(`
    <div>
      <div class="callout ${memory ? "" : "warn"}">${memNote}</div>
      <div class="section-label">What was sent as context (${rows.length} items · ≈ ${estTotal} tok est.)</div>
      ${ctxRows}
      <div class="section-label">Actual usage (from the provider · model: ${escapeHtml(m.label)})</div>
      <div class="stat-grid">
        <div class="stat"><div class="k">Input (prompt)</div><div class="v">${usage ? usage.prompt_tokens : "—"}</div></div>
        <div class="stat"><div class="k">Output (reply)</div><div class="v">${usage ? usage.completion_tokens : "—"}</div></div>
      </div>
      <div class="stat" style="margin-top:10px"><div class="k">Total tokens this turn</div><div class="v">${usage ? usage.total_tokens : "—"}</div></div>
      <div class="section-label">Cost of this message</div>
      <div class="kv"><span>Input · ${usage ? usage.prompt_tokens : 0} tok × $${m.price.in}/1M</span><b>${formatUSD(cost.in)}</b></div>
      <div class="kv"><span>Output · ${usage ? usage.completion_tokens : 0} tok × $${m.price.out}/1M</span><b>${formatUSD(cost.out)}</b></div>
      <div class="kv"><span><b>This message total</b></span><b class="cost" style="color:var(--good)">${formatUSD(cost.total)}</b></div>
      <div class="section-label">This window so far</div>
      <div class="kv"><span>Total tokens</span><b>${panel.totals.total.toLocaleString()}</b></div>
      <div class="kv"><span>Total cost</span><b style="color:var(--good)">${formatUSD(panel.totals.cost)}</b></div>
    </div>
  `);
}

// ─────────────────────────── Boot ───────────────────────────
mountLogin();
