# agent-notes: { ctx: "FastAPI sub-app: passkey-gated democracy-proposals page", deps: [], state: active, last: "claude@2026-08-11" }
"""FastAPI sub-app: Accountability.

Mounted under /accountability. A passkey-gated page of citizen proposals for a
more effective democracy in India. The passkey is checked server-side against
the ACCOUNTABILITY_PASSCODE env var (falls back to a default for local dev), and
the page content itself is ONLY rendered and sent after a correct passkey — so
it never ships in the page source to un-authed visitors.
"""
from __future__ import annotations

import os
from pathlib import Path

from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

# Never let a browser or proxy cache the gated page — a stale copy is exactly
# what breaks the unlock flow.
_NO_CACHE = {"Cache-Control": "no-store, max-age=0", "Pragma": "no-cache"}

BASE = Path(__file__).resolve().parent

app = FastAPI(title="Accountability")
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")
templates = Jinja2Templates(directory=str(BASE / "templates"))

PASSCODE = os.environ.get("ACCOUNTABILITY_PASSCODE", "42jaibhim")

# Union ministries & independent departments of the Government of India
# (official roster; Education is the accountability-tracking pilot).
MINISTRIES = [
    "Agriculture and Farmers' Welfare", "Ayush", "Chemicals and Fertilizers",
    "Civil Aviation", "Coal", "Commerce and Industry", "Communications",
    "Consumer Affairs, Food and Public Distribution", "Co-operation",
    "Corporate Affairs", "Culture", "Defence", "Department of Atomic Energy",
    "Department of Space", "Development of North Eastern Region", "Earth Sciences",
    "Education", "Electronics and Information Technology",
    "Environment, Forests and Climate Change", "External Affairs", "Finance",
    "Fisheries, Animal Husbandry and Dairying", "Food Processing Industries",
    "Health and Family Welfare", "Heavy Industries", "Home Affairs",
    "Housing and Urban Affairs", "Information and Broadcasting", "Jal Shakti",
    "Labour and Employment", "Law and Justice",
    "Micro, Small and Medium Enterprises", "Mines", "Minority Affairs",
    "New and Renewable Energy", "Panchayati Raj", "Parliamentary Affairs",
    "Personnel, Public Grievances and Pensions", "Petroleum and Natural Gas",
    "Planning", "Ports, Shipping and Waterways", "Power",
    "Prime Minister's Office", "Railways", "Road Transport and Highways",
    "Rural Development", "Science and Technology",
    "Skill Development and Entrepreneurship", "Social Justice and Empowerment",
    "Statistics and Programme Implementation", "Steel", "Textiles", "Tourism",
    "Tribal Affairs", "Women and Child Development", "Youth Affairs and Sports",
]


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    """Show the passkey gate. No JavaScript — the form posts natively to /unlock."""
    return templates.TemplateResponse(
        request,
        "index.html",
        {"root_path": request.scope.get("root_path", ""), "unlocked": False, "error": ""},
        headers=_NO_CACHE,
    )


@app.get("/unlock")
def unlock_get(request: Request):
    # A reload of the post-unlock URL lands here — send it back to the gate.
    return RedirectResponse(request.scope.get("root_path", "") + "/", status_code=303)


@app.post("/unlock", response_class=HTMLResponse)
def unlock(request: Request, passcode: str = Form("")):
    """Check the passkey server-side. On success, render the full page (content is
    only ever included in the response for a correct passkey)."""
    root = request.scope.get("root_path", "")
    if passcode.strip() == PASSCODE:
        return templates.TemplateResponse(
            request,
            "index.html",
            {"root_path": root, "unlocked": True, "ministries": MINISTRIES},
            headers=_NO_CACHE,
        )
    return templates.TemplateResponse(
        request,
        "index.html",
        {"root_path": root, "unlocked": False, "error": "Wrong passkey. Try again."},
        headers=_NO_CACHE,
    )
