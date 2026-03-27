---
title: "CHRONOS — Features"
description: "Everything C.H.R.O.N.O.S. V1 ships with — Generations, Branches, Variables, Contexts, Link and Bake inheritance."
---

# Features

## Generations — Named Scene States

A **Generation** is a named variation state. It can override any Variable you've registered in the Registry — and only stores the values you've actually changed. Everything else is inherited from its parent.

Create as many as your project needs. Name them for what they represent: `Hero_Lighting`, `Ecom_White`, `Dark_Mood`, `Client_v3`. Switch between them instantly inside Cinema 4D. Switching never overwrites anything. You can always go back.

> **Why it matters:** The days of `scene_hero_FINAL_v4.c4d` sitting next to `scene_turntable_v2_USE_THIS.c4d` are over. Every version lives in one file — named, switchable, and permanent.

---

## The Registry — Track What You Choose

The **Registry** is where you define what C.H.R.O.N.O.S. tracks. Open the Registry panel and register the **Variables** you want to manage — the individual parameters your Generations will override.

Each Variable has a name and a type. You can organise Variables into named groups (e.g., `Key_Light`, `Materials`, `Camera`) to keep things tidy. Variables are registered globally — they exist across all Generations. Each Generation then decides which of those Variables to override.

**Supported Variable types:**

- Numbers (integers and floats)
- Colours
- Vectors
- Booleans (on/off)
- Strings
- Object references

> **Why it matters:** C.H.R.O.N.O.S. doesn't try to capture your entire scene. You register exactly the parameters you want to manage. That keeps the system fast, intentional, and under your control.

---

## Branches — Bundles of Generations

A **Branch** is a subtree of Generations inside your Context. Every Branch has a root — either the **Blueprint** (the immutable default created automatically per Context) or a **Baked parent** (a frozen snapshot).

Branches let you organise your Generation tree. A single Context can contain multiple Branches, each rooted at a different point in the tree. Think of them as separate lineages — each with its own inheritance chain.

> **Why it matters:** Branches give you structure. One Branch for your client revisions, another for colour exploration, another for locked deliverables — all in the same Context, all independent.

---

## Contexts — One Take, One Scope

A **Context** maps directly to a **Take** in Cinema 4D. When you switch Takes, C.H.R.O.N.O.S. switches with it — reading from and writing to whichever Context is active.

Each Context is a top-level scope. It automatically creates a **Blueprint** — an immutable root Generation that serves as the source of truth. All your Branches, Generations, and registered Variables live inside a Context.

> **Why it matters:** C.H.R.O.N.O.S. doesn't replace Cinema 4D's Take system — it builds on top of it. Your existing Take workflow stays intact.

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
| Link — live parent–child inheritance | ✅ Live |
| Bake — sealed, frozen deliverables | ✅ Live |
| Variable types: Number, Colour, Vector, Bool, String | ✅ Live |
| Registry — variable registration and grouping | ✅ Live |
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
