"""Vercel Python entrypoint for the embedded Resume Tailor app.

The portfolio (static Vite site) is served at `/`. This function serves the
FastAPI Resume Tailor app under `/resume-tailor` — we mount it on a tiny parent
ASGI app so Starlette strips the prefix and the child routes stay unchanged.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from fastapi import FastAPI  # noqa: E402
from app.main import app as tailor_app  # noqa: E402

app = FastAPI()
app.mount("/resume-tailor", tailor_app)

__all__ = ["app"]
