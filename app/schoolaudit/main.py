# agent-notes: { ctx: "FastAPI sub-app: government school audit reporting (client-side)", deps: [], state: active, last: "claude@2026-08-13" }
"""FastAPI sub-app: Government School Audit.

Mounted under /school-audit. A citizen-reporting tool for the state of a
government school — modelled on open-urban-eyesore (the blr-potholes codebase),
but auditing schools instead of roads across four areas: water & toilets,
electricity & classrooms, boundary wall & safety, and meals & attendance.

There's no LLM and no server secrets, so this only serves the static shell.
Photo capture, GPS, scoring, the public feed, and the responsible-officer /
days-pending accountability layer all run client-side and persist in the
browser's localStorage. (A real deployment would sync submissions to a shared
public store — e.g. GitHub Issues/Gists, as the original does.)
"""
from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Government School Audit")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )
