# agent-notes: { ctx: "FastAPI sub-app: modern time tracker (static shell; logic is client-side localStorage)", deps: [], state: active, last: "claude@2026-07-02" }
"""FastAPI sub-app: Modern Time Tracker.

Mounted under /time-tracker. There's no backend logic or secrets — a time
tracker needs no LLM and no server state — so this only serves the static shell.
All tracking (projects, entries, the live timer) runs client-side and persists
in the browser's localStorage.
"""
from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Time Tracker")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )
