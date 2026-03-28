---
title: "CHRONOS — Features"
description: "Everything C.H.R.O.N.O.S. V1 ships with — Generations, Branches, Variables, Contexts, Link and Bake inheritance."
---

# Features

## Generations — Named Scene States

A **Generation** is a named variation state. It holds its own independent values for every Variable you've registered — and only stores the values you've actually changed from its parent. Everything else is inherited live. The exception is a Baked Generation, which stores the full resolved state at creation time and freezes it permanently.

Create as many as your project needs. Name them for what they represent: `Hero_Lighting`, `Ecom_White`, `Dark_Mood`, `Client_v3`. Switch between them instantly. Switching never overwrites anything. You can always go back.

> **Why it matters:** The days of `scene_hero_FINAL_v4.c4d` sitting next to `scene_turntable_v2_USE_THIS.c4d` are over. Every version lives in one file — named, switchable, and permanent.

---

## The Registry — Track What You Choose

The **Registry** is where you define what C.H.R.O.N.O.S. tracks. Register the **Variables** you want to manage — the individual parameters your Generations will override.

Each Variable has a name and a type. You can organise Variables into named groups to keep things tidy. Variables are registered globally — they exist across all Generations. Each Generation then decides which of those Variables to override.

**Supported Variable types:**

- Numbers (integers and floats)
- Colours
- Vectors
- Booleans (on/off)
- Strings
- Object references

> **Why it matters:** C.H.R.O.N.O.S. doesn't try to capture your entire scene. You register exactly the parameters you want to manage. That keeps the system fast, intentional, and under your control.

---

## Branches — Scene Systems, Organised

A **Branch** is a named grouping of Variables mapped to one system in your scene — a light rig, a material set, a camera configuration, a set of object properties. It is how you organise what CHRONOS tracks.

Inside a Branch, you register the Variables that belong to that system. Branches are independent of each other. One Context can hold as many Branches as your scene has systems worth tracking.

> **Why it matters:** Branches keep your Registry readable. Instead of a flat list of 40 variables, you have `Key_Light`, `Materials`, `Camera` — each a named grouping that maps to something real in your scene.

---

## Contexts — One Take, One Scope

A **Context** maps directly to a **Take** in Cinema 4D. When you switch Takes, C.H.R.O.N.O.S. switches with it — reading from and writing to whichever Context is active.

Each Context is a top-level scope. It automatically creates a **Blueprint** — an immutable root Generation that serves as the source of truth. All your Branches, Generations, and registered Variables live inside a Context.

C.H.R.O.N.O.S. doesn't replace Cinema 4D's Take system — it builds on top of it. Your existing Take workflow stays intact.

---

## Link — Live Parent–Child Inheritance

When you create a new Generation, you choose a parent and a mode. **Link** creates a live connection — the child starts empty. Nothing is copied at creation. Instead, values are resolved from the parent chain at read time.

Edit a Variable in the child — that value is stored locally, masking the parent. Leave it untouched — and the child always reflects whatever the parent holds. Change the parent's value: every Linked child that hasn't overridden it updates automatically.

Only overridden values are stored. Everything else is inherited live. This is what makes C.H.R.O.N.O.S. fast and lightweight — even with dozens of Generations.

> **Why it matters:** A "Product Line" Generation can drive 12 colour variants. Update the base lighting once — all 12 children reflect it instantly. No batch editing. No manual sync.

---

## Bake — Frozen Deliverables

**Bake** captures the fully resolved state of the parent at creation time — every value, traced through the entire inheritance chain — and writes it into the new Generation permanently.

From that point, it is sealed. No parent change can reach it. The inheritance chain stops here — a Baked Generation acts as a lineage firewall. It is a self-contained, frozen record of exactly what the scene looked like at that moment.

> **Why it matters:** Client-approved shots, archive states, and locked deliverables need to stay exactly as they were. Bake gives you a hard cut between "live work" and "approved output."

---

## Any Topology — Your Choice

CHRONOS does not prescribe how you build your Generation tree. The shape is entirely yours.

| Topology | Description | When to Use |
|---|---|---|
| **Flat Star** | All Generations inherit directly from the Blueprint | Simple projects, independent variations |
| **Linear Chain** | Each Generation inherits from the previous | Iterative workflows, client revision rounds |
| **Custom Tree** | Mix freely — branch wherever you need | Complex projects with multiple variant families |

The system adapts to the project, not the other way around.

---

## Non-Destructive by Design

CHRONOS never modifies your scene objects directly during a Generation switch. All state is managed through a controlled write layer that reads the active Generation's values and applies them to the scene in one single pass.

Your undo history stays clean. Your objects stay exactly as you placed them. CHRONOS is the only thing that changes — and it always changes intentionally.

---

## Per-Project Storage

CHRONOS stores all Generation data in its own data folder, separate from your `.c4d` file. Data is loaded automatically when you open the matching project. Nothing is embedded in the scene file itself — the two stay independent.

---

## V1 Feature Status

| Feature | Status |
|---|---|
| Generation create, switch, delete, rename | ✅ Live |
| Link — live parent–child inheritance | ✅ Live |
| Bake — sealed, frozen deliverables | ✅ Live |
| Variable types: Number, Colour, Vector, Bool, String, Object reference | ✅ Live |
| Registry — variable registration and grouping | ✅ Live |
| Custom topology — flat, chain, or tree | ✅ Live |
| CHRONOS Dashboard — dockable C4D panel | ✅ Live |
| Non-destructive write layer | ✅ Live |
| macOS and Windows support | ✅ Live |
| Import / Export presets | 🔵 V1.1 |
| Standalone Flutter dashboard | 🔵 V3 |
| Omniverse / USD Bridge | 🔵 V3 |

---

[See how it works in practice →]({{ '/chronos/workflow/' | relative_url }})
&nbsp;&nbsp;[Branching and Inheritance in depth →]({{ '/chronos/branching/' | relative_url }})
&nbsp;&nbsp;[Get CHRONOS →]({{ '/chronos/get-it/' | relative_url }})
