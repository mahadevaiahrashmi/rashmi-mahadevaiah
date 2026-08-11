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
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

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
    return templates.TemplateResponse(
        request, "index.html", {"root_path": request.scope.get("root_path", "")}
    )


@app.post("/unlock")
def unlock(request: Request, passcode: str = Form(...)):
    if passcode.strip() == PASSCODE:
        # Render the gated content to a string only now — it is never sent to
        # visitors who haven't entered the correct passkey.
        html = templates.env.get_template("content.html").render(
            root_path=request.scope.get("root_path", ""),
            ministries=MINISTRIES,
        )
        return {"ok": True, "html": html}
    return JSONResponse({"ok": False, "error": "Wrong passkey."}, status_code=401)
