"""Retrieval over the vendored Pro-PM skill library.

The PM agent can't fit 500+ skill files in one prompt, so per message we retrieve
the few most relevant Pro-PM docs (skills / agents / playbooks / templates /
frameworks) by lightweight lexical matching and load their full text into context.

No heavy deps — pure-Python keyword scoring so it runs on serverless.
Source: https://github.com/rahulgoyal1001/Pro-PM (MIT).
"""
from __future__ import annotations

import re
from pathlib import Path

PPM = Path(__file__).resolve().parent / "pro_pm"
CATEGORIES = ["skills", "agents", "playbooks", "templates", "frameworks"]

_TOKEN = re.compile(r"[a-z0-9]+")
_STOP = set(
    "the a an and or to of for in on with your you it is are be as at by from "
    "this that these those i we they what how why when who can do does my me our "
    "help make write draft create build plan get set use into out up".split()
)

_INDEX = None


def _tokens(s: str) -> set[str]:
    return {t for t in _TOKEN.findall(s.lower()) if len(t) > 2 and t not in _STOP}


def _title(text: str, path: Path) -> str:
    m = re.search(r"^#\s+(.+)$", text, re.M)
    return m.group(1).strip() if m else path.stem.replace("-", " ").title()


def _build():
    idx = []
    for cat in CATEGORIES:
        d = PPM / cat
        if not d.is_dir():
            continue
        for p in sorted(d.rglob("*.md")):
            if p.name.lower() == "readme.md":
                continue
            try:
                text = p.read_text(encoding="utf-8", errors="ignore")
            except OSError:
                continue
            title = _title(text, p)
            head = text[:1800]  # title + Purpose + Auto-Trigger live up top
            idx.append(
                {
                    "path": str(p),
                    "title": title,
                    "cat": cat,
                    "title_toks": _tokens(title),
                    "toks": _tokens(title + "\n" + head),
                }
            )
    return idx


def index():
    global _INDEX
    if _INDEX is None:
        _INDEX = _build()
    return _INDEX


def count() -> int:
    return len(index())


def retrieve(query: str, k: int = 3):
    """Return up to k best-matching docs [{path,title,cat}, …] for the query."""
    qtoks = _tokens(query or "")
    if not qtoks:
        return []
    scored = []
    for doc in index():
        overlap = len(qtoks & doc["toks"])
        if overlap == 0:
            continue
        # Title matches are worth more than body matches.
        score = overlap + 3 * len(qtoks & doc["title_toks"])
        scored.append((score, doc))
    scored.sort(key=lambda x: x[0], reverse=True)
    return [
        {"path": d["path"], "title": d["title"], "cat": d["cat"]}
        for s, d in scored[:k]
        if s >= 2
    ]


def load(path: str, cap: int = 4000) -> str:
    try:
        return Path(path).read_text(encoding="utf-8", errors="ignore")[:cap]
    except OSError:
        return ""
