"use strict";

// Served under a path prefix (/pm-agent); use it for fetch() calls.
const ROOT = window.APP_ROOT || "";
const $ = (id) => document.getElementById(id);

// Conversation the browser keeps and sends each turn.
const history = [];
let busy = false;

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// --- Lightweight, safe markdown -> HTML (escape first, then format) ---
function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
}

function renderMarkdown(md) {
  const lines = md.replace(/\r/g, "").split("\n");
  let html = "", i = 0;
  const flushListState = { ul: false, ol: false };
  const closeLists = () => {
    if (flushListState.ul) { html += "</ul>"; flushListState.ul = false; }
    if (flushListState.ol) { html += "</ol>"; flushListState.ol = false; }
  };

  while (i < lines.length) {
    let line = lines[i];

    // Fenced code block
    if (/^```/.test(line)) {
      closeLists();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++;
      html += `<pre><code>${esc(buf.join("\n"))}</code></pre>`;
      continue;
    }

    // Table (a header row of pipes followed by a |---| separator)
    if (/\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) && /-/.test(lines[i + 1])) {
      closeLists();
      const cells = (row) => row.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map((c) => c.trim());
      const head = cells(line);
      i += 2;
      let t = "<table><thead><tr>" + head.map((h) => `<th>${inline(h)}</th>`).join("") + "</tr></thead><tbody>";
      while (i < lines.length && /\|/.test(lines[i]) && lines[i].trim()) {
        const row = cells(lines[i]);
        t += "<tr>" + row.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>";
        i++;
      }
      html += t + "</tbody></table>";
      continue;
    }

    // Headings
    let m;
    if ((m = line.match(/^#{1,3}\s+(.*)$/))) { closeLists(); html += `<h3>${inline(m[1])}</h3>`; i++; continue; }
    if ((m = line.match(/^#{4,6}\s+(.*)$/))) { closeLists(); html += `<h4>${inline(m[1])}</h4>`; i++; continue; }

    // Ordered list
    if ((m = line.match(/^\s*\d+\.\s+(.*)$/))) {
      if (!flushListState.ol) { closeLists(); html += "<ol>"; flushListState.ol = true; }
      html += `<li>${inline(m[1])}</li>`; i++; continue;
    }
    // Unordered list
    if ((m = line.match(/^\s*[-*]\s+(.*)$/))) {
      if (!flushListState.ul) { closeLists(); html += "<ul>"; flushListState.ul = true; }
      html += `<li>${inline(m[1])}</li>`; i++; continue;
    }

    closeLists();
    if (line.trim() === "") { i++; continue; }
    // Gather a paragraph
    const para = [line];
    i++;
    while (i < lines.length && lines[i].trim() !== "" && !/^(#{1,6}\s|```|\s*[-*]\s|\s*\d+\.\s)/.test(lines[i]) && !/\|/.test(lines[i])) {
      para.push(lines[i]); i++;
    }
    html += `<p>${para.map(inline).join("<br>")}</p>`;
  }
  closeLists();
  return html;
}

function addMessage(role, content, opts = {}) {
  const wrap = document.createElement("div");
  wrap.className = "msg " + role;
  const bubble = document.createElement("div");
  bubble.className = "bubble" + (opts.thinking ? " thinking" : "");
  if (role === "agent" && !opts.thinking) bubble.innerHTML = renderMarkdown(content);
  else bubble.textContent = content;
  wrap.appendChild(bubble);
  $("messages").appendChild(wrap);
  $("messages").scrollTop = $("messages").scrollHeight;
  return wrap;
}

async function send(text) {
  if (busy) return;
  const msg = text.trim();
  if (!msg) return;
  busy = true;
  $("send").disabled = true;
  $("input").value = "";
  autoGrow();

  addMessage("user", msg);
  history.push({ role: "user", content: msg });
  const thinking = addMessage("agent", "Thinking…", { thinking: true });

  try {
    const fd = new FormData();
    fd.set("messages", JSON.stringify(history));
    const res = await fetch(ROOT + "/chat", { method: "POST", body: fd });
    const payload = await res.json();
    thinking.remove();
    if (!payload.ok) { addMessage("agent", payload.error || "Something went wrong."); }
    else {
      const el = addMessage("agent", payload.reply);
      if (Array.isArray(payload.skills_used) && payload.skills_used.length) {
        const s = document.createElement("div");
        s.className = "skills-used";
        s.textContent = "🧰 Pro-PM skills used: " + payload.skills_used.join(" · ");
        el.querySelector(".bubble").appendChild(s);
      }
      history.push({ role: "assistant", content: payload.reply });
    }
  } catch (err) {
    thinking.remove();
    addMessage("agent", "Network error — please try again.");
  } finally {
    busy = false;
    $("send").disabled = false;
    $("input").focus();
  }
}

function autoGrow() {
  const t = $("input");
  t.style.height = "auto";
  t.style.height = Math.min(t.scrollHeight, 160) + "px";
}

document.addEventListener("DOMContentLoaded", () => {
  const input = $("input");
  input.addEventListener("input", autoGrow);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input.value); }
  });
  $("send").addEventListener("click", () => send(input.value));
  $("quick").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    input.value = chip.dataset.q;
    input.focus();
    autoGrow();
  });
  input.focus();
});
