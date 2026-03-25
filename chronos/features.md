---
title: "CHRONOS — Features"
description: "Everything CHRONOS V1 ships with — Generations, Branches, Variables, Dynamic Inheritance, Isolated Snapshots."
---

# Features

## Generations — Named Scene States

A **Generation** is a named variation context. Think of it as a named preset that knows about every parameter you've told it to track — and remembers each one independently.

Create as many as your project needs. Name them for what they represent: `Hero_Lighting`, `Ecom_White`, `Dark_Mood`, `Client_v3`. Switch between them instantly inside Cinema 4D. Each Generation holds its own complete state. Switching never overwrites anything. You can always go back.

> **Why it matters:** The days of `scene_hero_FINAL_v4.c4d` sitting next to `scene_turntable_v2_USE_THIS.c4d` are over. Every version lives in one file — named, switchable, and permanent.

---

## Branches and Variables — Track What You Choose

A **Branch** is a named grouping, typically mapped to one system in your scene: a light rig, a material set, a camera configuration.

Inside each Branch, you register **Variables** — the individual parameters you want CHRONOS to manage. Each Variable has a name, a type, and a value that is stored per-Generation.

**Supported Variable types:**

- Numbers (integers and floats)
- Colours
- Vectors
- Booleans (on/off)
- Strings
- Object references

> **Why it matters:** CHRONOS doesn't try to capture your entire scene. You decide what's tracked. That keeps the system fast, intentional, and under your control.

---

## Dynamic Inheritance — Live Parent–Child Relationships

A Generation can be set as a child of any other Generation. In **Dynamic** mode, the child starts empty — nothing is copied at creation. Instead, values are resolved live from the parent chain at read time.

Edit a Variable in the child — that value is stored locally, masking the parent. Leave it untouched — and the child always reflects whatever the parent holds. Change the parent's value: every child that hasn't overridden it updates automatically.

> **Why it matters:** A "Product Line" Generation can drive 12 colour variants. Update the base lighting once — all 12 children reflect it instantly. No batch editing. No manual sync.

---

## Isolated Snapshots — Frozen Deliverables

In **Isolated** mode, a new Generation captures the fully resolved state of its parent at creation time — every value, traced through the entire inheritance chain — and bakes it in permanently.

From that point, it is sealed. No parent change can reach it. It is a self-contained, frozen record of exactly what the scene looked like at that moment.

> **Why it matters:** Client-approved shots, archive states, and locked deliverables need to stay exactly as they were. Isolated Snapshots give you a lineage firewall — a hard cut between "live" and "approved."

---

## Any Topology — Your Choice

CHRONOS does not prescribe how you build your Generation tree. The shape is entirely yours.

| Topology | Description | When to Use |
|---|---|---|
| **Flat Star** | All Generations inherit directly from the base | Simple projects, independent variations |
| **Linear Chain** | Each Generation inherits from the previous | Iterative workflows, client revision rounds |
| **Custom Tree** | Mix freely — branch wherever you need | Complex projects with multiple variant families |

> **Why it matters:** The system adapts to the project, not the other way around.

---

## Non-Destructive by Design

CHRONOS never modifies your scene objects directly during a Generation switch. All state is managed through a controlled write layer that reads the active Generation's values and applies them to the scene in one single pass.

Your undo history stays clean. Your objects stay exactly as you placed them. CHRONOS is the only thing that changes — and it always changes intentionally.

> **Why it matters:** A tool that can't be trusted not to corrupt your scene isn't a tool — it's a liability. CHRONOS is infrastructure. It stays out of your way until you need it.

---

## Single File — Everything Included

Every Generation, every Branch, every Variable value — stored alongside your `.c4d` file. One project. One file. Nothing scattered across folders. Move the `.c4d` file — the CHRONOS data moves with it.

---

## V1 Feature Status

| Feature | Status |
|---|---|
| Generation create, switch, delete, rename | ✅ Live |
| Dynamic Inheritance — live parent–child | ✅ Live |
| Isolated Snapshots — sealed, frozen | ✅ Live |
| Variable types: Number, Colour, Vector, Bool, String | ✅ Live |
| Branch grouping and nesting | ✅ Live |
| Custom topology — flat, chain, or tree | ✅ Live |
| CHRONOS Dashboard — dockable C4D panel | ✅ Live |
| Non-destructive write layer | ✅ Live |
| macOS and Windows support | ✅ Live |
| Import / Export presets | 🔵 V1.1 |
| Standalone desktop dashboard | 🔵 V3 |
| Omniverse / USD Bridge | 🔵 V3 |

---

[See how it works in practice →]({{ '/chronos/workflow/' | relative_url }})
&nbsp;&nbsp;[Branching and Inheritance in depth →]({{ '/chronos/branching/' | relative_url }})
&nbsp;&nbsp;[Get CHRONOS →]({{ '/chronos/get-it/' | relative_url }})
