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

The dashboard opens in its empty state, waiting to connect to your scene. Click **Activate**. C.H.R.O.N.O.S. connects to your active `.c4d` file, creates a Context from your active Take, and auto-generates the **Blueprint** — the immutable root that anchors everything. From here, you're live.

> **Benefit:** No project setup files. No configuration wizards. C.H.R.O.N.O.S. is live in 10 seconds.

---

## Step 2 — Register Variables

Open the **Registry** panel. This is where you tell C.H.R.O.N.O.S. what to track. Register the **Variables** — the specific parameters you want to manage across Generations:

- `Intensity` — Float
- `Colour` — Colour
- `Enabled` — Boolean

Organise Variables into named groups (`Key_Light`, `Materials`, `Camera`) to keep the Registry tidy. Variables are registered globally — every Generation in the Context can see and override them.

> **Benefit:** You only track what matters. C.H.R.O.N.O.S. doesn't auto-capture your whole scene — you register exactly the parameters you want to manage. Fast, lightweight, and in your control.

---

## Step 3 — Create Generations

A **Generation** is a named variation state. Create one from the Blueprint — choose **Link** to inherit live, or **Bake** to capture a frozen snapshot.

Create a Generation called `Hero_Lighting`. Override the Variables you want different from the Blueprint — set a warm key light, high intensity, rich colour. Everything you don't override stays inherited from the parent. The viewport reflects the active Generation live.

> **Benefit:** Each Generation only stores what you've changed. Values are stored, not applied destructively. You can always return to any state, instantly.

---

## Step 4 — Switch and Iterate

Click `Turntable_White` in the dashboard. CHRONOS applies all values to the scene in one clean pass. No undo, no manual reset — just a different state, immediately.

Need a variation of a variation? Choose a parent Generation and click **Link**. The new child starts empty — it inherits live from the parent and only stores what you override.

Override a single value in the child — swap the key light colour from gold to blue. Everything else still follows the parent. Change a value on the parent: every Linked child that hasn't explicitly overridden it updates automatically.

Need to lock a state? Click **Bake** instead. The child captures the parent's full resolved state and freezes it. From that point, nothing upstream can change it — a sealed deliverable.

> **Benefit:** Manage 12 colour variants from a single parent. Change the base lighting once — everything downstream updates. What used to take an hour takes one click.

---

## The Full Dashboard

A working CHRONOS session: multiple Branches, multiple Generations, a complete variation system inside one clean panel.

The critical point — your Cinema 4D scene stays **completely clean**. No duplicated objects. No hidden layers. No workarounds. Just one file, managed by CHRONOS.

---

## Key Concepts

| Concept | What It Is |
|---|---|
| **Context** | The active Take in Cinema 4D — C.H.R.O.N.O.S. reads from and writes to the active Context |
| **Blueprint** | The immutable root Generation, auto-created per Context — the source of truth everything traces back to |
| **Registry** | The panel where you register and organise the Variables that C.H.R.O.N.O.S. tracks |
| **Variable** | A single tracked parameter with a name and type — registered globally, overridden per-Generation |
| **Generation** | A named variation state — overrides only the Variables you change, inherits the rest |
| **Branch** | A subtree of Generations — rooted at a Blueprint or a Baked parent |
| **Link** | A child Generation that inherits live from its parent — parent changes flow downstream automatically |
| **Bake** | A child Generation that captures its parent's resolved state and freezes it permanently |

---

[Get CHRONOS →]({{ '/chronos/get-it/' | relative_url }})
&nbsp;&nbsp;[Branching & Inheritance in depth →]({{ '/chronos/branching/' | relative_url }})
