"use strict";

// The app may be served under a path prefix (e.g. "/resume-tailor"); the server
// injects it as window.APP_ROOT so fetch() calls resolve to the right place.
const ROOT = window.APP_ROOT || "";

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

function setStatus(kind, msg) {
  const s = document.getElementById("status");
  s.className = "status " + kind;
  s.textContent = msg;
}

function renderDownloads(files) {
  const wrap = document.getElementById("download-buttons");
  wrap.innerHTML = "";
  files.forEach((f) => {
    const a = el("a", null, f.label);
    a.href = f.url;
    a.setAttribute("download", f.name || "");
    wrap.appendChild(a);
  });
  document.getElementById("downloads").classList.remove("hidden");
}

function sectionTitle(parent, text) {
  parent.appendChild(el("div", "sec", text));
}

function renderResume(container, r) {
  container.innerHTML = "";
  container.appendChild(el("h3", null, r.contact.name || "—"));
  const bits = [r.contact.email, r.contact.phone, ...(r.contact.links || [])].filter(Boolean);
  container.appendChild(el("div", "contact", bits.join("   |   ")));

  if (r.summary) {
    sectionTitle(container, "Summary");
    container.appendChild(el("p", null, r.summary));
  }
  if (r.skills && r.skills.length) {
    sectionTitle(container, "Technical Skills");
    r.skills.forEach((s) => {
      const p = el("p", "skill");
      const b = el("b", null, s.label + ": ");
      p.appendChild(b);
      p.appendChild(document.createTextNode(s.items));
      container.appendChild(p);
    });
  }
  if (r.experience && r.experience.length) {
    sectionTitle(container, "Experience");
    r.experience.forEach((e) => {
      const role = el("div", "role");
      const left = e.company + (e.title ? "  —  " + e.title : "");
      role.appendChild(el("span", null, left));
      role.appendChild(el("span", "dates", e.dates || ""));
      container.appendChild(role);
      if (e.bullets && e.bullets.length) {
        const ul = el("ul");
        e.bullets.forEach((b) => ul.appendChild(el("li", null, b)));
        container.appendChild(ul);
      }
    });
  }
  if (r.education && r.education.length) {
    sectionTitle(container, "Education");
    r.education.forEach((line) => container.appendChild(el("p", null, line)));
  }
}

function renderCover(container, cl, contact) {
  container.innerHTML = "";
  container.appendChild(el("h3", null, contact.name || "—"));
  const bits = [contact.email, contact.phone, ...(contact.links || [])].filter(Boolean);
  container.appendChild(el("div", "contact", bits.join("   |   ")));
  if (cl.date) container.appendChild(el("p", null, cl.date));
  (cl.recipient || []).filter(Boolean).forEach((r) => container.appendChild(el("p", null, r)));
  if (cl.salutation) container.appendChild(el("p", null, cl.salutation));
  (cl.paragraphs || []).forEach((p) => container.appendChild(el("p", null, p)));
  if (cl.closing) container.appendChild(el("p", null, cl.closing));
  container.appendChild(el("p", null, cl.signature || contact.name || ""));
}

function switchTab(which) {
  document.querySelectorAll(".tab").forEach((t) =>
    t.classList.toggle("active", t.dataset.tab === which)
  );
  document.getElementById("preview-resume").classList.toggle("hidden", which !== "resume");
  document.getElementById("preview-cover").classList.toggle("hidden", which !== "cover");
}

async function onSubmit(ev) {
  ev.preventDefault();
  const form = ev.target;
  const btn = document.getElementById("go");
  const data = new FormData(form);

  btn.disabled = true;
  setStatus("working", "Generating… this can take a few seconds.");
  document.getElementById("downloads").classList.add("hidden");
  document.getElementById("preview").classList.add("hidden");

  try {
    const res = await fetch(ROOT + "/generate", { method: "POST", body: data });
    const payload = await res.json();
    if (!res.ok) {
      setStatus("error", payload.detail || "Generation failed.");
      return;
    }
    renderDownloads(payload.files);
    renderResume(document.getElementById("preview-resume"), payload.preview.resume);
    renderCover(
      document.getElementById("preview-cover"),
      payload.preview.cover_letter,
      payload.preview.resume.contact
    );
    switchTab("resume");
    document.getElementById("preview").classList.remove("hidden");
    setStatus("done", "Done. Download your 1-page resume and cover letter below.");
  } catch (err) {
    setStatus("error", "Network error: " + err.message);
  } finally {
    btn.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tailor-form").addEventListener("submit", onSubmit);
  document.querySelectorAll(".tab").forEach((t) =>
    t.addEventListener("click", () => switchTab(t.dataset.tab))
  );
});
