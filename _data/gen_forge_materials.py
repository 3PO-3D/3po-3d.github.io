#!/usr/bin/env python3
"""Generate _data/forge_materials.json from the swatch images in assets/img/materials/<TYPE>/.
Run from the repo root:  python _data/gen_forge_materials.py
The picker (forge/services.md) reads site.data.forge_materials."""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_ROOT = os.path.join(ROOT, "assets", "img", "materials")
GROUPS = ["PLA", "PETG", "ABS", "TPU"]
TYPE_KW = ["PCTG", "PETG", "PLA", "ASA", "ABS", "TPU"]  # order matters: longest/specific first

def detect_type(name, folder):
    up = name.upper()
    if "ASA" in up:
        return "ASA"
    if "PCTG" in up or "PETG" in up or "PET-" in up:
        return "PETG"
    if "PLA" in up:
        return "PLA"
    if "TPU" in up or folder == "TPU":
        return "TPU"
    if "ABS" in up:
        return "ABS"
    return folder

def detect_colour(name):
    toks = name.split()
    last_type_idx = -1
    for i, t in enumerate(toks):
        tu = t.upper()
        if any(kw in tu for kw in TYPE_KW):
            last_type_idx = i
    if 0 <= last_type_idx < len(toks) - 1:
        return " ".join(toks[last_type_idx + 1:])
    return " ".join(toks[-2:]) if len(toks) >= 2 else name

# In-stock material names live in _data/instock.txt (one full SKU name per line).
# Until the live Inventory sync exists, edit that file to mark what's on the shelf;
# anything listed there renders highlighted and skips the "+1.5 weeks" note.
instock = set()
instock_path = os.path.join(ROOT, "_data", "instock.txt")
if os.path.isfile(instock_path):
    with open(instock_path, encoding="utf-8") as f:
        instock = {ln.strip() for ln in f if ln.strip() and not ln.startswith("#")}

# Notion Inventory page ids, keyed by exact SKU name → forge_material_ids.json
# ({ "3DJAKE ecoPLA Black": "3880f4e2-...", ... }). Lets the form send material_id
# so Make sets the inventory relation directly instead of searching by name.
# Regenerate the map with gen_forge_material_ids.py. Missing names just get id "".
ids = {}
ids_path = os.path.join(ROOT, "_data", "forge_material_ids.json")
if os.path.isfile(ids_path):
    with open(ids_path, encoding="utf-8") as f:
        ids = json.load(f)

items = []
for folder in GROUPS:
    d = os.path.join(IMG_ROOT, folder)
    if not os.path.isdir(d):
        continue
    for fn in sorted(os.listdir(d)):
        if not re.search(r"\.(png|jpe?g|webp)$", fn, re.I):
            continue
        stem = re.sub(r"\.(png|jpe?g|webp)$", "", fn, flags=re.I)
        name = stem.replace("_", " ").strip()
        items.append({
            "group": folder,                         # which tab it lives under
            "type": detect_type(name, folder),       # maps to Notion Material select
            "name": name,                            # full SKU name (used for the inventory relation)
            "colour": detect_colour(name),           # short colour label
            "img": "/assets/img/materials/%s/%s" % (folder, fn),
            "in_stock": name in instock,             # highlight + skip lead-time note when true
            "id": ids.get(name, ""),                 # Notion Inventory page id (relation), "" if none
        })

out = os.path.join(ROOT, "_data", "forge_materials.json")
with open(out, "w", encoding="utf-8") as f:
    json.dump(items, f, ensure_ascii=False, indent=0)
print("wrote %d materials to %s" % (len(items), out))
by = {}
for it in items:
    by[it["group"]] = by.get(it["group"], 0) + 1
print("by group:", by)
