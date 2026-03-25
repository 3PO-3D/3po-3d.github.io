---
title: "CHRONOS — Branching and Inheritance"
description: "How Generations, Dynamic Inheritance, and Isolated Snapshots work — and how to choose the right topology for your project."
---

# Branching and Inheritance

The most powerful feature in CHRONOS is also the one that takes the most explaining. This page is a full breakdown — how the system thinks about Generations, what inheritance means in practice, and how to choose the right structure for your project.

---

## Every Project Has a Root

When CHRONOS activates on a scene, it creates a root state: the **Base**. This is the source of truth — the original set of values that all Generations trace back to. Every Generation you create is a child of something. At minimum, it's a child of the Base.

```
Base
├── Hero_Lighting
├── Turntable_White
└── Dark_Mood
```

---

## Two Inheritance Modes

When you create a new Generation, you choose how it relates to its parent.

---

### Dynamic — Live Inheritance

The child starts empty. No values are copied. Instead, at the moment any value is read, CHRONOS walks up the parent chain and borrows the inherited value.

```
Base
│   Intensity = 800
│   Colour = #FFF5E0
│
└── Hero_Lighting        ← Dynamic child
        Intensity = ?    ← reads from Base: 800
        Colour = ?       ← reads from Base: #FFF5E0
```

Override one value locally in Hero_Lighting:

```
Base
│   Intensity = 800
│   Colour = #FFF5E0
│
└── Hero_Lighting
        Intensity = 1200     ← local override, stored here
        Colour = ?           ← still reads from Base: #FFF5E0
```

Change the Base's Colour — Hero_Lighting reflects it automatically, because it has no local override for that value.

**The rule:** A Dynamic child only stores what it explicitly overrides. Everything else is always live from the parent.

> **When to use:** Variant families. Colour rounds. Any set of Generations that share a common foundation and differ in specific ways. One parent edit propagates to every child that hasn't overridden it.

---

### Isolated — Frozen Snapshot

The new Generation captures the fully resolved state of its parent at creation — every value, traced through the entire chain — and bakes it in permanently.

```
Base
│   Intensity = 800
│   Colour = #FFF5E0
│
└── Client_Approved_v2   ← Isolated snapshot
        Intensity = 800      ← baked at creation
        Colour = #FFF5E0     ← baked at creation
```

After creation, the Base changes. `Client_Approved_v2` does not.

```
Base
│   Intensity = 1200     ← changed
│   Colour = #FF8844     ← changed
│
└── Client_Approved_v2
        Intensity = 800      ← sealed — unchanged
        Colour = #FFF5E0     ← sealed — unchanged
```

An Isolated Generation is a lineage firewall. The parent chain stops there.

> **When to use:** Client-approved shots, locked deliverables, archive states — any point where "this must never change."

---

## Choosing a Topology

CHRONOS does not prescribe how you build your Generation tree. You decide the shape.

---

### Flat Star

All Generations inherit directly from the Base. No children of children.

```
Base
├── Hero_Lighting
├── Turntable_White
├── Dark_Mood
└── Ecom_Flat
```

Simple. Predictable. A change to the Base flows to all simultaneously. Use this when your Generations are independent and you want global changes to propagate everywhere.

---

### Linear Chain

Each Generation inherits from the previous one — a revision history.

```
Base
└── Client_Round_1
    └── Client_Round_2
        └── Client_Round_3_APPROVED
```

Use this for iterative refinement — each round builds on the last, and the progression is preserved.

---

### Custom Tree

Mix both patterns freely. Build the shape your project actually needs.

```
Base
├── Product_Line_Base
│   ├── Colour_Red         ← Dynamic
│   ├── Colour_Blue        ← Dynamic
│   └── Colour_Gold        ← Dynamic
│       └── Gold_Approved  ← Isolated (sealed)
└── Turntable_White
```

`Product_Line_Base` drives the three colour variants. Update the shared lighting once — all three reflect it. `Gold_Approved` is frozen — it captured the final approved state and will not change.

---

## What Happens on a Generation Switch

When you click a different Generation in the dashboard, CHRONOS:

1. Walks the active Generation's parent chain to resolve every Variable's current value
2. Applies all resolved values to the scene in a single controlled pass
3. Nothing is written to scene objects until resolution is complete — no partial states, no flickering

The result is an instant, clean state switch. No undo required. Click a different Generation and you're there.

---

## Visual Reference

### Dynamic inheritance — value flows from parent

```
           Base
           │  Intensity = 800
           │  Colour = warm
           │
    ┌──────┴──────┐
    │             │
HeroLighting   Turntable
Intensity=1200  Intensity → 800
Colour → warm   Colour → warm
```

### Isolated snapshot — parent change cannot cross the seal

```
           Base
           │  Intensity = 1200  ← changed
           │
      ╔════╧═════════╗
      ║  Approved    ║  ← sealed
      ║ Intensity=800║  ← unchanged
      ╚══════════════╝
```

---

[Back to Features →]({{ '/chronos/features/' | relative_url }})
&nbsp;&nbsp;[See the step-by-step workflow →]({{ '/chronos/workflow/' | relative_url }})
