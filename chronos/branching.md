---
title: "CHRONOS — Branching and Inheritance"
description: "Every topology CHRONOS supports — Flat Star, Linear Chain, Custom Tree, and Multiple Main Branches. With node graphs."
---

# Branching and Inheritance

Every variation system in CHRONOS is a tree. This page shows every shape that tree can take — with diagrams — and explains when to use each one.

<hr class="sep-accent">

## The Two Inheritance Modes

Every Generation in CHRONOS has a parent and a mode. The mode determines how the child relates to that parent.

---

### Link — Live Inheritance

A Linked Generation starts empty. Nothing is copied at creation. When a Variable's value is read, CHRONOS walks up the parent chain and borrows the value from the nearest ancestor that has it.

Override a Variable locally — that value is stored in the child, masking the parent. Leave it untouched — the child always reflects whatever the parent holds. Change the parent's value: every Linked child that hasn't locally overridden it updates automatically.

**The rule:** A Linked Generation only stores what it explicitly overrides. One edit to a parent can propagate to an entire downstream tree.

> Use for: variant families, colour rounds, any set of Generations that share a foundation and differ in specific ways.

![Linked Generation with local overrides]({{ '/assets/screenshots/ss_03_linked_generation.png' | relative_url }})
*LINK checked, Parent set — orange Variable names are local overrides, plain names inherit live from the parent.*

---

### Bake — Frozen Snapshot

A Baked Generation captures the fully resolved state of its parent at creation — every Variable value, traced through the entire parent chain from the selected parent up to the nearest Blueprint or Baked root. All those resolved values are written into the new Generation permanently.

From that point it is sealed. No parent change can reach it. The inheritance chain stops here — a **lineage firewall**.

> Use for: client-approved shots, locked deliverables, archive states, or any point where "this must never change." Also used to create independent sub-branches within a Context.

![Baked Generation — sealed at creation]({{ '/assets/screenshots/ss_04_baked_generation.png' | relative_url }})
*BAKE checked, LINK unchecked — every Variable holds an explicit baked-in value. The lineage firewall is active.*

<hr class="sep-major">
<hr class="sep-accent">

## The Four Topologies

---

### 1 — Flat Star

All Generations link directly from the Blueprint. No children of children. Every Generation is a sibling.

<div class="diagram topology-diagram">
<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp { fill: var(--text); stroke: var(--text); }
    .n-lk { fill: var(--surface); stroke: var(--text); stroke-width: 1.5; }
    .e-lk  { stroke: var(--text); stroke-width: 1.5; stroke-dasharray: 5,3; fill: none; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: var(--text); text-anchor: middle; }
    .lbl-i { font-family: 'Space Grotesk', sans-serif; fill: var(--bg); font-size: 11px; text-anchor: middle; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: var(--muted); text-anchor: middle; }
  </style>
  <!-- Blueprint -->
  <circle cx="260" cy="40" r="26" class="n-bp"/>
  <text x="260" y="44" class="lbl-i" font-weight="700">Blueprint</text>
  <!-- Edges -->
  <line x1="260" y1="66" x2="60"  y2="148" class="e-lk"/>
  <line x1="260" y1="66" x2="160" y2="148" class="e-lk"/>
  <line x1="260" y1="66" x2="260" y2="148" class="e-lk"/>
  <line x1="260" y1="66" x2="360" y2="148" class="e-lk"/>
  <line x1="260" y1="66" x2="460" y2="148" class="e-lk"/>
  <!-- Child nodes -->
  <rect x="10"  y="148" width="100" height="30" rx="2" class="n-lk"/>
  <text x="60"  y="168" class="lbl">Hero_Lighting</text>
  <rect x="110" y="148" width="100" height="30" rx="2" class="n-lk"/>
  <text x="160" y="168" class="lbl">Turntable_White</text>
  <rect x="210" y="148" width="100" height="30" rx="2" class="n-lk"/>
  <text x="260" y="168" class="lbl">Dark_Mood</text>
  <rect x="310" y="148" width="100" height="30" rx="2" class="n-lk"/>
  <text x="360" y="168" class="lbl">Ecom_Flat</text>
  <rect x="410" y="148" width="100" height="30" rx="2" class="n-lk"/>
  <text x="460" y="168" class="lbl">Client_v1</text>
  <!-- Caption -->
  <text x="260" y="195" class="cap">All Generations inherit directly from Blueprint — simple, independent, parallel</text>
</svg>
</div>

**When to use:** Simple projects with independent variations. A change to the Blueprint propagates to all children simultaneously. Good default starting point.

---

### 2 — Linear Chain

Each Generation inherits from the previous one. A revision history — each round builds on the last.

<div class="diagram topology-diagram">
<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp { fill: var(--text); stroke: var(--text); }
    .n-lk { fill: var(--surface); stroke: var(--text); stroke-width: 1.5; }
    .e-lk  { stroke: var(--text); stroke-width: 1.5; stroke-dasharray: 5,3; fill: none; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: var(--text); text-anchor: middle; }
    .lbl-i { font-family: 'Space Grotesk', sans-serif; fill: var(--bg); font-size: 11px; text-anchor: middle; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: var(--muted); text-anchor: middle; }
  </style>
  <!-- Nodes -->
  <circle cx="40"  cy="50" r="24" class="n-bp"/>
  <text x="40"  y="54" class="lbl-i" font-weight="700">BP</text>
  <rect x="85"  y="35" width="100" height="30" rx="2" class="n-lk"/>
  <text x="135" y="55" class="lbl">Round_1</text>
  <rect x="205" y="35" width="100" height="30" rx="2" class="n-lk"/>
  <text x="255" y="55" class="lbl">Round_2</text>
  <rect x="325" y="35" width="100" height="30" rx="2" class="n-lk"/>
  <text x="375" y="55" class="lbl">Round_3</text>
  <rect x="445" y="35" width="65" height="30" rx="2" class="n-lk"/>
  <text x="477" y="55" class="lbl">Final</text>
  <!-- Edges -->
  <line x1="64"  y1="50" x2="85"  y2="50" class="e-lk"/>
  <line x1="185" y1="50" x2="205" y2="50" class="e-lk"/>
  <line x1="305" y1="50" x2="325" y2="50" class="e-lk"/>
  <line x1="425" y1="50" x2="445" y2="50" class="e-lk"/>
  <!-- Caption -->
  <text x="260" y="100" class="cap">Each Generation inherits from the previous — iterative refinement, full revision history preserved</text>
</svg>
</div>

**When to use:** Client revision rounds, iterative workflows where each pass builds on the last. You always know what changed between rounds.

---

### 3 — Custom Tree

Mix Link and Bake freely. A parent drives multiple live children; some children become sealed deliverables at a fork point.

<div class="diagram topology-diagram">
<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp  { fill: var(--text); stroke: var(--text); }
    .n-lk  { fill: var(--surface); stroke: var(--text); stroke-width: 1.5; }
    .n-bk  { fill: var(--surface); stroke: var(--accent); stroke-width: 2.5; }
    .e-lk  { stroke: var(--text); stroke-width: 1.5; stroke-dasharray: 5,3; fill: none; }
    .e-bk  { stroke: var(--accent); stroke-width: 2; fill: none; }
    .seal  { fill: none; stroke: var(--accent); stroke-width: 1; stroke-dasharray: 3,3; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: var(--text); text-anchor: middle; }
    .lbl-i { font-family: 'Space Grotesk', sans-serif; fill: var(--bg); font-size: 11px; text-anchor: middle; }
    .lbl-a { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: var(--accent); text-anchor: middle; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: var(--muted); text-anchor: middle; }
    .tag   { font-family: 'IBM Plex Mono', monospace; font-size: 8px; fill: var(--muted); text-anchor: middle; }
  </style>
  <!-- Blueprint -->
  <circle cx="280" cy="36" r="26" class="n-bp"/>
  <text x="280" y="40" class="lbl-i" font-weight="700">Blueprint</text>
  <!-- Level 1 -->
  <line x1="280" y1="62" x2="130" y2="118" class="e-lk"/>
  <line x1="280" y1="62" x2="430" y2="118" class="e-lk"/>
  <rect x="60"  y="118" width="140" height="30" rx="2" class="n-lk"/>
  <text x="130" y="138" class="lbl">Product_Line_Base</text>
  <text x="130" y="108" class="tag">Linked</text>
  <rect x="360" y="118" width="140" height="30" rx="2" class="n-lk"/>
  <text x="430" y="138" class="lbl">Turntable_White</text>
  <text x="430" y="108" class="tag">Linked</text>
  <!-- Level 2 from Product_Line_Base -->
  <line x1="130" y1="148" x2="60"  y2="208" class="e-lk"/>
  <line x1="130" y1="148" x2="160" y2="208" class="e-lk"/>
  <line x1="130" y1="148" x2="260" y2="208" class="e-lk"/>
  <rect x="10"  y="208" width="100" height="30" rx="2" class="n-lk"/>
  <text x="60"  y="228" class="lbl">Colour_Red</text>
  <text x="60"  y="198" class="tag">Linked</text>
  <rect x="110" y="208" width="100" height="30" rx="2" class="n-lk"/>
  <text x="160" y="228" class="lbl">Colour_Blue</text>
  <text x="160" y="198" class="tag">Linked</text>
  <rect x="210" y="208" width="100" height="30" rx="2" class="n-lk"/>
  <text x="260" y="228" class="lbl">Colour_Gold</text>
  <text x="260" y="198" class="tag">Linked</text>
  <!-- Bake from Colour_Gold -->
  <line x1="260" y1="238" x2="260" y2="272" class="e-bk"/>
  <rect x="210" y="272" width="100" height="32" rx="2" class="n-bk"/>
  <rect x="206" y="268" width="108" height="40" rx="4" class="seal"/>
  <text x="260" y="293" class="lbl" font-weight="600">Gold_Approved</text>
  <text x="260" y="264" class="lbl-a">Baked — sealed</text>
  <!-- Fork point label -->
  <text x="310" y="258" class="tag" font-style="italic">← fork point</text>
  <!-- Caption -->
  <text x="280" y="316" class="cap">Live children from a shared parent — one seals into a deliverable at the fork point</text>
</svg>
</div>

**Reading this diagram:** `Product_Line_Base` drives three live colour variants — update its shared lighting once and all three reflect it. At the fork point, `Colour_Gold` produces `Gold_Approved` via Bake — that deliverable is sealed. The live `Colour_Gold` continues to evolve; `Gold_Approved` does not.

**When to use:** Complex projects with multiple variant families. Mix freely — no topology is wrong.

---

### 4 — Multiple Main Branches (Baked Root Workaround)

Cinema 4D's architecture means CHRONOS V1 has one root Context — the Main Take. But you can create multiple independent variation systems within that Context by using a Baked Generation as a secondary branch root.

<div class="diagram topology-diagram">
<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp  { fill: var(--text); stroke: var(--text); }
    .n-lk  { fill: var(--surface); stroke: var(--text); stroke-width: 1.5; }
    .n-bk  { fill: var(--surface); stroke: var(--accent); stroke-width: 2.5; }
    .e-lk  { stroke: var(--text); stroke-width: 1.5; stroke-dasharray: 5,3; fill: none; }
    .e-bk  { stroke: var(--accent); stroke-width: 2; fill: none; }
    .seal  { fill: none; stroke: var(--accent); stroke-width: 1; stroke-dasharray: 3,3; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: var(--text); text-anchor: middle; }
    .lbl-i { font-family: 'Space Grotesk', sans-serif; fill: var(--bg); font-size: 11px; text-anchor: middle; }
    .lbl-a { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: var(--accent); text-anchor: middle; }
    .tag   { font-family: 'IBM Plex Mono', monospace; font-size: 8px; fill: var(--muted); text-anchor: middle; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: var(--muted); text-anchor: middle; }
  </style>
  <!-- Blueprint -->
  <circle cx="280" cy="36" r="26" class="n-bp"/>
  <text x="280" y="40" class="lbl-i" font-weight="700">Blueprint</text>
  <!-- Branch A (left) — linked chain -->
  <line x1="280" y1="62" x2="120" y2="108" class="e-lk"/>
  <rect x="50" y="108" width="140" height="30" rx="2" class="n-lk"/>
  <text x="120" y="128" class="lbl">Main_Branch_A</text>
  <text x="120" y="98" class="tag">Linked</text>
  <line x1="120" y1="138" x2="70"  y2="188" class="e-lk"/>
  <line x1="120" y1="138" x2="170" y2="188" class="e-lk"/>
  <rect x="20"  y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="70"  y="208" class="lbl">A_Variant_1</text>
  <rect x="120" y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="170" y="208" class="lbl">A_Variant_2</text>
  <!-- Baked secondary root (right) -->
  <line x1="280" y1="62" x2="420" y2="108" class="e-bk"/>
  <rect x="350" y="108" width="140" height="32" rx="2" class="n-bk"/>
  <rect x="346" y="104" width="148" height="40" rx="4" class="seal"/>
  <text x="420" y="129" class="lbl" font-weight="600">Branch_B_Root</text>
  <text x="420" y="98" class="lbl-a">Baked — branch root</text>
  <!-- Branch B children -->
  <line x1="420" y1="144" x2="370" y2="188" class="e-lk"/>
  <line x1="420" y1="144" x2="470" y2="188" class="e-lk"/>
  <rect x="320" y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="370" y="208" class="lbl">B_Variant_1</text>
  <rect x="420" y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="470" y="208" class="lbl">B_Variant_2</text>
  <!-- Labels -->
  <text x="100" y="250" class="tag">Main branch — inherits from Blueprint</text>
  <text x="430" y="250" class="tag">Independent branch — sealed from Main</text>
  <text x="280" y="270" class="cap">A Baked Generation as a secondary root creates a fully independent sub-tree within the same Context</text>
</svg>
</div>

**How this works:** `Branch_B_Root` is created by Baking from the Blueprint at a specific moment — it captures the full state and is sealed. From that root, you can build an entire tree of Linked Generations that inherit from `Branch_B_Root` but are completely isolated from Main Branch A. Changes to Main Branch A cannot reach Branch B.

This is the current workaround for the V1 single-root limitation. V3 introduces native multi-root Context support.

<hr class="sep-major">

## What Happens on a Generation Switch

When you click a different Generation in the dashboard, CHRONOS:

1. Walks the active Generation's parent chain — collecting the resolved value for every Variable at each level
2. Stops at the nearest Baked Generation or Blueprint (the lineage firewall)
3. Applies all resolved values to the scene in one controlled pass — no partial states, no flickering

The result: an instant, clean state switch. No undo required. The history of every Variable is preserved.

<hr class="sep-thin">

## Forward Rollback

If you've overridden a Variable in a Linked child and want to return it to the inherited value, CHRONOS does not delete the override. It performs a **Forward Rollback**:

1. Resolves the current inherited value from the parent chain
2. Writes that resolved value explicitly into the child as a new historical entry
3. History always grows forward — nothing is erased

"Revert" is just another write. You can always reconstruct the full history of any Variable in any Generation.

---

<div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:2rem;">
  <a href="{{ '/chronos/workflow/' | relative_url }}" class="btn btn-outline">How It Works →</a>
  <a href="{{ '/chronos/get-it/' | relative_url }}" class="btn btn-accent">Get CHRONOS →</a>
</div>
