#!/usr/bin/env python3
"""Build/merge _data/forge_material_ids.json — a { "<exact SKU name>": "<Notion page id>" }
map used by gen_forge_materials.py to stamp each picker material with its Inventory page
id (so the order form sends material_id and Make sets the relation directly, no search).

Two ways to feed it rows from the Notion Inventory data source
(collection://2e40f4e2-8881-80e7-a76a-000ba1cf9a9d), Category = Filament:
    SELECT url, "Name" FROM "<collection>" WHERE "Category" = 'Filament' ORDER BY "Name"

  1. Pipe query results on stdin (MERGES into the existing map — paginate page by page):
         python _data/gen_forge_material_ids.py < page.json
     Accepts the full MCP envelope {"results":[...]} or a bare [...] array.
  2. With no stdin, rebuilds from _data/_inventory_raw.json (full replace).

Each url is https://app.notion.com/<32 hex>; the hex is the page id. Re-run after
inventory rows change, then run gen_forge_materials.py. Missing names get id "".
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "_data", "_inventory_raw.json")
DEST = os.path.join(ROOT, "_data", "forge_material_ids.json")


def dash(page_hex):
    """32-char hex (no dashes) -> canonical 8-4-4-4-12 UUID."""
    h = page_hex.strip().lower()
    return "%s-%s-%s-%s-%s" % (h[0:8], h[8:12], h[12:16], h[16:20], h[20:32])


def page_id(url):
    m = re.search(r"([0-9a-fA-F]{32})", url or "")
    return dash(m.group(1)) if m else ""


def rows_of(data):
    return data.get("results", data) if isinstance(data, dict) else data


# Start from existing map when merging from stdin; start clean when rebuilding from RAW.
piped = not sys.stdin.isatty()
out = {}
if piped and os.path.isfile(DEST):
    with open(DEST, encoding="utf-8") as f:
        out = json.load(f)

if piped:
    rows = rows_of(json.load(sys.stdin))
else:
    with open(RAW, encoding="utf-8") as f:
        rows = rows_of(json.load(f))

added = 0
for r in rows:
    name = (r.get("Name") or "").strip()
    if not name or name.startswith("DELETED"):
        continue
    pid = page_id(r.get("url"))
    if pid and out.get(name) != pid:
        out[name] = pid
        added += 1

with open(DEST, "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=0, sort_keys=True)
print("merged %d, total %d ids -> %s" % (added, len(out), DEST))
