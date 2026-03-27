---
title: "CHRONOS — Branching and Inheritance"
description: "How Generations, Link and Bake inheritance work — and how to choose the right topology for your project."
---

# Branching and Inheritance

The feature that defines C.H.R.O.N.O.S. is also the one that takes the most explaining. This page is a full breakdown — how the system thinks about Generations, what Link and Bake mean in practice, and how to choose the right tree structure for your project.

---

## Every Project Has a Root

When C.H.R.O.N.O.S. activates on a scene, it creates a Context from the active Take and auto-generates the **Blueprint** — the immutable root Generation. This is the source of truth that all Generations trace back to. You never edit the Blueprint directly. It exists to anchor everything else.

Every Generation you create is a child of something. At minimum, it's a child of the Blueprint. A subtree of Generations rooted at a Blueprint (or a Baked parent) is called a **Branch**.

```
Base (Blueprint)
├── Hero_Lighting
├── Turntable_White
└── Dark_Mood
```

---

## Two Inheritance Modes

When you create a new Generation, you choose how it relates to its parent.

---

### Link — Live Inheritance

Click **Link** when creating a child Generation. The child starts empty — nothing is copied. Instead, at the moment any value is read, C.H.R.O.N.O.S. walks up the parent chain and borrows the inherited value.

```
Base
│   Intensity = 800
│   Colour = #FFF5E0
│
└── Hero_Lighting        ← Linked child
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

**The rule:** A Linked child only stores what it explicitly overrides. Everything else is always live from the parent. This makes the system fast and lightweight — even with dozens of Generations.

> **When to use:** Variant families. Colour rounds. Any set of Generations that share a common foundation and differ in specific ways. One parent edit propagates to every child that hasn't overridden it.

---

### Bake — Frozen Snapshot

Click **Bake** when creating a child Generation. The new Generation captures the fully resolved state of its parent at creation — every value, traced through the entire chain — and writes it in permanently.

```
Base
│   Intensity = 800
│   Colour = #FFF5E0
│
└── Client_Approved_v2   ← Baked snapshot
        Intensity = 800      ← captured at creation
        Colour = #FFF5E0     ← captured at creation
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

A Baked Generation is a **lineage firewall**. The inheritance chain stops there — no parent change can cross the seal.

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
Base (Blueprint)
├── Product_Line_Base
│   ├── Colour_Red         ← Linked
│   ├── Colour_Blue        ← Linked
│   └── Colour_Gold        ← Linked
│       └── Gold_Approved  ← Baked (sealed)
└── Turntable_White        ← Linked
```

`Product_Line_Base` drives the three colour variants. Update the shared lighting once — all three reflect it. `Gold_Approved` is Baked — it captured the final approved state and will not change. The point where `Colour_Gold` branches into `Gold_Approved` is a **fork point** — where live work splits from a sealed deliverable.

---

## What Happens on a Generation Switch

When you click a different Generation in the dashboard, CHRONOS:

1. Walks the active Generation's parent chain to resolve every Variable's current value
2. Applies all resolved values to the scene in a single controlled pass
3. Nothing is written to scene objects until resolution is complete — no partial states, no flickering

The result is an instant, clean state switch. No undo required. Click a different Generation and you're there.

---

## Reverting an Override

If you've overridden a Variable in a Linked child and want to go back to the inherited value, C.H.R.O.N.O.S. does not delete your override. Instead, it performs a **Forward Rollback**:

1. Resolves the current inherited value from the parent chain
2. Writes that value explicitly into the child Generation as a new entry
3. Your history is preserved — nothing is erased

This means "revert" is just another write. History always grows forward, never backwards. You can always trace back to see what the value was, what it was changed to, and when.

> **Why it matters:** Destructive rollback creates gaps in your audit trail. Forward Rollback means you can always reconstruct the full history of any value in any Generation.

---

## The Inheritance Tree — Visual Reference

<div class="diagram" style="text-align: center; padding: 2.5rem;">
<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" style="max-width: 560px; width: 100%;">
  <style>
    .node-linked { fill: var(--surface, #FAFAF5); stroke: var(--text, #713A23); stroke-width: 1.5; }
    .node-baked { fill: var(--surface, #FAFAF5); stroke: var(--accent, #DDAA33); stroke-width: 2.5; }
    .node-base { fill: var(--text, #713A23); stroke: var(--text, #713A23); stroke-width: 1.5; }
    .edge-linked { stroke: var(--text, #713A23); stroke-width: 1.5; stroke-dasharray: 6,4; fill: none; }
    .edge-baked { stroke: var(--accent, #DDAA33); stroke-width: 2; fill: none; }
    .label { font-family: 'Space Grotesk', sans-serif; font-size: 13px; fill: var(--text, #713A23); }
    .label-base { font-family: 'Space Grotesk', sans-serif; font-size: 13px; fill: var(--bg, #F0EAE0); }
    .label-sm { font-family: 'IBM Plex Mono', monospace; font-size: 10px; fill: var(--muted, #8C5C3E); }
    .label-bake { font-family: 'IBM Plex Mono', monospace; font-size: 10px; fill: var(--accent, #DDAA33); }
    .seal { fill: none; stroke: var(--accent, #DDAA33); stroke-width: 1; stroke-dasharray: 3,3; }
  </style>

  <!-- Edges -->
  <path class="edge-linked" d="M300,60 L150,150"/>
  <path class="edge-linked" d="M300,60 L450,150"/>
  <path class="edge-linked" d="M150,170 L80,260"/>
  <path class="edge-linked" d="M150,170 L220,260"/>
  <path class="edge-baked" d="M220,280 L220,360"/>

  <!-- Base node -->
  <circle cx="300" cy="45" r="28" class="node-base"/>
  <text x="300" y="50" text-anchor="middle" class="label-base" font-weight="700">Base</text>
  <text x="300" y="10" text-anchor="middle" class="label-sm">Blueprint (immutable)</text>

  <!-- Product_Line_Base -->
  <rect x="75" y="135" width="150" height="36" rx="2" class="node-linked"/>
  <text x="150" y="158" text-anchor="middle" class="label">Product_Line_Base</text>
  <text x="150" y="125" text-anchor="middle" class="label-sm">Linked</text>

  <!-- Turntable_White -->
  <rect x="375" y="135" width="150" height="36" rx="2" class="node-linked"/>
  <text x="450" y="158" text-anchor="middle" class="label">Turntable_White</text>
  <text x="450" y="125" text-anchor="middle" class="label-sm">Linked</text>

  <!-- Colour_Red -->
  <rect x="10" y="245" width="130" height="36" rx="2" class="node-linked"/>
  <text x="75" y="268" text-anchor="middle" class="label">Colour_Red</text>
  <text x="75" y="235" text-anchor="middle" class="label-sm">Linked</text>

  <!-- Colour_Gold -->
  <rect x="155" y="245" width="130" height="36" rx="2" class="node-linked"/>
  <text x="220" y="268" text-anchor="middle" class="label">Colour_Gold</text>
  <text x="220" y="235" text-anchor="middle" class="label-sm">Linked</text>

  <!-- Gold_Approved (Baked) -->
  <rect x="152" y="345" width="136" height="40" rx="2" class="node-baked"/>
  <rect x="148" y="341" width="144" height="48" rx="4" class="seal"/>
  <text x="220" y="370" text-anchor="middle" class="label" font-weight="700">Gold_Approved</text>
  <text x="220" y="335" text-anchor="middle" class="label-bake">Baked (sealed)</text>

  <!-- Legend -->
  <line x1="380" y1="280" x2="420" y2="280" class="edge-linked"/>
  <text x="425" y="284" class="label-sm">Link (live inheritance)</text>
  <line x1="380" y1="300" x2="420" y2="300" class="edge-baked"/>
  <text x="425" y="304" class="label-sm">Bake (frozen snapshot)</text>
  <rect x="380" y="315" width="14" height="14" rx="2" class="seal"/>
  <text x="400" y="326" class="label-sm">Lineage firewall</text>
  <text x="385" y="350" class="label-sm" font-style="italic">Fork point: where</text>
  <text x="385" y="362" class="label-sm" font-style="italic">live work splits from</text>
  <text x="385" y="374" class="label-sm" font-style="italic">a sealed deliverable</text>
</svg>
</div>

**Reading the diagram:**
- **Dashed lines** = Link (live inheritance). Values flow from parent to child. Parent changes propagate.
- **Solid gold lines** = Bake. Values were captured at creation. The line is a one-time transfer.
- **Double border** = Lineage firewall. Nothing from above can change this Generation.
- **Fork point** = Where `Colour_Gold` (live) branches into `Gold_Approved` (sealed). This is the boundary between active work and locked output.

---

[Back to Features →]({{ '/chronos/features/' | relative_url }})
&nbsp;&nbsp;[See the step-by-step workflow →]({{ '/chronos/workflow/' | relative_url }})
