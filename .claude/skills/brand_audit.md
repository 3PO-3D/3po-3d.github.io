---
name: brand_audit
description: >
  Validate any page or stylesheet against the 3PO brand guide. Checks hex color
  values, font-family declarations, tone of voice rules, and heading hierarchy.
  Returns a structured pass/fail report.
used_by: ui_validator
---

# Skill: brand_audit

## Purpose
Ensure all site output complies with the 3PO brand guide (`09_PUBLISH/brand_guide.md`).

## Brand Reference

### Allowed Color Palette

| Role | Hex | Context |
|---|---|---|
| Background | `#F0EAE0` | Page bg (light themes) |
| Surface | `#FAFAF5` / `#FAF7F0` | Cards, panels |
| Text Primary | `#713A23` / `#663333` | Headlines, body |
| Text Muted | `#8C5C3E` / `#8C6B52` | Secondary text |
| 3PO Accent | `#40E0C0` | Retro Mint |
| CHRONOS Accent | `#DDAA33` / `#C49A2A` | Harvest Gold / Muted Gold |
| Badge Green | `#2D7A4A` | "Live" status badge only |
| Dark theme bgs | `#0F1419`, `#1A1210`, `#140E0E` | Theme-specific |
| Dark theme text | `#D4C5B0`, `#E8DDD0`, `#E0D4C8` | Theme-specific |

Any hex value not in this list should be flagged.

### Allowed Fonts

| Role | Font | Source |
|---|---|---|
| Body | `DM Sans` | Google Fonts |
| Headings | `Space Grotesk` | Google Fonts |
| Code/UI | `IBM Plex Mono` | Google Fonts |

No serif fonts. No system-only fonts for visible text.

### Tone Rules

| Rule | Check |
|---|---|
| No filler words | Grep for "In order to", "It should be noted", "basically", "simply" |
| No "easy"/"powerful" | Grep for these words in product copy |
| No exclamation marks | Grep for `!` in .md content (exclude code blocks) |
| Problem first | First sentence of each feature description states the problem |
| Benefit last | Last sentence of each feature description states the benefit |
| Direct voice | No passive voice in CTAs or feature titles |

### Border Radius
`2px` only. No rounded corners (`border-radius > 2px`).

### Border Width
`1.5px` standard. Check for inconsistencies.

## Procedure

1. Read `brand_guide.md` from vault (always fresh — it may have been updated)
2. Grep `style.scss` for all hex values — compare against allowed palette
3. Grep `style.scss` for `font-family` declarations — verify only 3 allowed
4. Grep `style.scss` for `border-radius` — verify all are `2px` or `$radius`
5. Grep all `.md` content files for tone violations
6. Check heading hierarchy in each content page (h1 once, then h2, h3 — no skips)

## Output

```
BRAND AUDIT
═══════════
Colors:     [PASS | FAIL — N violations]
Fonts:      [PASS | FAIL — N violations]
Tone:       [PASS | FAIL — N violations]
Borders:    [PASS | FAIL — N violations]
Headings:   [PASS | FAIL — N violations]

Details:
  [file:line] — [violation description]
```
