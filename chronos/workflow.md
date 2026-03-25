---
title: "CHRONOS — How It Works"
description: "A step-by-step walkthrough of the CHRONOS workflow inside Cinema 4D."
---

# How It Works

## The Old Way vs. The CHRONOS Way

Before CHRONOS, managing scene variations in Cinema 4D meant one of two things: duplicate files or manual chaos.

| Without CHRONOS | With CHRONOS |
|---|---|
| `scene_hero_v1.c4d`, `scene_turntable_v3_FINAL.c4d`… | One `.c4d` file. All variations inside. |
| Copy, tweak manually, hope you remember which is which | Named Generations — switch in one click |
| Change shared lighting → update every file by hand | Change it once — all inheriting Generations update automatically |
| Undo history polluted with variation-switching | No undo needed. Click a different Generation. |
| Send 4 renders, lose track of which file matched which | Every variation is named, stored, and reproducible |

> **CHRONOS doesn't change how you work in Cinema 4D. It gives your work somewhere to live.**

---

## Step 1 — Open the Dashboard

Go to **Plugins → CHRONOS → Open Dashboard**. The panel docks inside Cinema 4D like any other panel. Pin it to the right side, drop it on a second monitor — wherever you work best.

The dashboard opens in its empty state, waiting to connect to your scene. Click **Activate**. CHRONOS connects to your active `.c4d` file and creates your first Generation — `Default` — automatically. Everything from here is live.

> **Benefit:** No project setup files. No configuration wizards. CHRONOS is live in 10 seconds.

---

## Step 2 — Define Branches and Variables

A **Branch** is how you tell CHRONOS what to track — a named group that maps to a system in your scene: a light rig, a material set, a camera.

Create a Branch called `Key_Light`. Inside it, add **Variables** — the specific parameters you want CHRONOS to remember per Generation:

- `Intensity` — Float
- `Colour` — Colour
- `Enabled` — Boolean

Add more Branches as you need them — one per light, one per material group, one per camera setting.

> **Benefit:** You only track what matters. CHRONOS doesn't auto-capture your whole scene — you tell it exactly what to manage. Fast, lightweight, and in your control.

---

## Step 3 — Create Generations

A **Generation** is a named variation context. Create as many as you need — each one holds its own independent set of Variable values.

Create a second Generation: `Turntable_White`. Set the values for `Hero_Lighting` — warm key light, high intensity, rich colour. The viewport reflects the state live.

> **Benefit:** Each Generation is self-contained. Values are stored, not applied destructively. You can always return to any state, instantly.

---

## Step 4 — Switch and Iterate

Click `Turntable_White` in the dashboard. CHRONOS applies all values to the scene in one clean pass. No undo, no manual reset — just a different state, immediately.

Need a variation of a variation? Use **Inheritance** — a child Generation starts with its parent's values and only overrides what's different.

Override a single value in the child — swap the key light colour from gold to blue. Everything else still follows the parent. Change a value on the parent: every child that hasn't explicitly overridden it updates automatically.

> **Benefit:** Manage 12 colour variants from a single parent. Change the base lighting once — everything downstream updates. What used to take an hour takes one click.

---

## The Full Dashboard

A working CHRONOS session: multiple Branches, multiple Generations, a complete variation system inside one clean panel.

The critical point — your Cinema 4D scene stays **completely clean**. No duplicated objects. No hidden layers. No workarounds. Just one file, managed by CHRONOS.

---

## Key Concepts

| Concept | What It Is |
|---|---|
| **Generation** | A named variation context — one possible state of your scene |
| **Branch** | A named grouping of Variables, typically one per scene system |
| **Variable** | A single tracked parameter with a name, type, and per-Generation value |
| **Inheritance** | A Generation can inherit from a parent, overriding only what it needs |

---

[Get CHRONOS →]({{ '/chronos/get-it/' | relative_url }})
&nbsp;&nbsp;[Branching & Inheritance in depth →]({{ '/chronos/branching/' | relative_url }})
