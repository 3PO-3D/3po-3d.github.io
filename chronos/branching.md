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
<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp  { fill: #DDAA33; stroke: #C49A2A; stroke-width: 2; }
    .n-lk  { fill: #F1EBDD; stroke: #F1EBDD; stroke-width: 1.5; }
    .e-lk  { stroke: #F1EBDD; stroke-width: 1.5; fill: none; }
    .e-bk  { stroke: #DDAA33; stroke-width: 2; stroke-dasharray: 5,3; fill: none; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: #1A0F0A; text-anchor: middle; }
    .lbl-bp{ font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: #1A0F0A; text-anchor: middle; font-weight: 700; }
    .lbl-a { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: #DDAA33; text-anchor: middle; }
    .tag   { font-family: 'IBM Plex Mono', monospace; font-size: 8px; fill: rgba(241,235,221,0.6); text-anchor: middle; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: rgba(241,235,221,0.5); text-anchor: middle; }
    .legend-line { font-family: 'IBM Plex Mono', monospace; font-size: 8px; fill: rgba(241,235,221,0.6); }
  </style>
  <!-- Blueprint node -->
  <rect x="210" y="18" width="100" height="30" rx="4" class="n-bp"/>
  <text x="260" y="38" class="lbl-bp">BLUEPRINT</text>
  <!-- Link edges (solid) -->
  <line x1="260" y1="48" x2="60"  y2="130" class="e-lk"/>
  <line x1="260" y1="48" x2="160" y2="130" class="e-lk"/>
  <line x1="260" y1="48" x2="260" y2="130" class="e-lk"/>
  <line x1="260" y1="48" x2="360" y2="130" class="e-lk"/>
  <line x1="260" y1="48" x2="460" y2="130" class="e-lk"/>
  <!-- Link tags -->
  <text x="148" y="88" class="tag" transform="rotate(-33,148,88)">Link</text>
  <text x="210" y="92" class="tag" transform="rotate(-16,210,92)">Link</text>
  <text x="262" y="90" class="tag">Link</text>
  <text x="314" y="92" class="tag" transform="rotate(16,314,92)">Link</text>
  <text x="376" y="88" class="tag" transform="rotate(33,376,88)">Link</text>
  <!-- Child nodes -->
  <rect x="10"  y="130" width="100" height="30" rx="2" class="n-lk"/>
  <text x="60"  y="150" class="lbl">Hero_Lighting</text>
  <rect x="110" y="130" width="100" height="30" rx="2" class="n-lk"/>
  <text x="160" y="150" class="lbl">Turntable_White</text>
  <rect x="210" y="130" width="100" height="30" rx="2" class="n-lk"/>
  <text x="260" y="150" class="lbl">Dark_Mood</text>
  <rect x="310" y="130" width="100" height="30" rx="2" class="n-lk"/>
  <text x="360" y="150" class="lbl">Ecom_Flat</text>
  <rect x="410" y="130" width="100" height="30" rx="2" class="n-lk"/>
  <text x="460" y="150" class="lbl">Client_v1</text>
  <!-- Caption -->
  <text x="260" y="178" class="cap">All Generations link directly from Blueprint — live inheritance, parallel siblings</text>
  <!-- Legend -->
  <line x1="160" y1="194" x2="190" y2="194" stroke="#F1EBDD" stroke-width="1.5"/>
  <text x="195" y="197" class="legend-line">Link (live data flow)</text>
  <line x1="310" y1="194" x2="330" y2="194" stroke="#DDAA33" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="335" y="197" class="legend-line">Bake (snapshot, no flow)</text>
</svg>
</div>

**When to use:** Simple projects with independent variations. A change to the Blueprint propagates to all children simultaneously. Good default starting point.

---

### 2 — Linear Chain

Each Generation inherits from the previous one. A revision history — each round builds on the last.

<div class="diagram topology-diagram">
<svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp  { fill: #DDAA33; stroke: #C49A2A; stroke-width: 2; }
    .n-lk  { fill: #F1EBDD; stroke: #F1EBDD; stroke-width: 1.5; }
    .e-lk  { stroke: #F1EBDD; stroke-width: 1.5; fill: none; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: #1A0F0A; text-anchor: middle; }
    .lbl-bp{ font-family: 'Space Grotesk', sans-serif; font-size: 10px; fill: #1A0F0A; text-anchor: middle; font-weight: 700; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: rgba(241,235,221,0.5); text-anchor: middle; }
    .tag   { font-family: 'IBM Plex Mono', monospace; font-size: 8px; fill: rgba(241,235,221,0.6); text-anchor: middle; }
  </style>
  <!-- Blueprint -->
  <rect x="4" y="35" width="72" height="30" rx="4" class="n-bp"/>
  <text x="40" y="54" class="lbl-bp">BLUEPRINT</text>
  <!-- Link edges (solid) -->
  <line x1="76"  y1="50" x2="96"  y2="50" class="e-lk"/>
  <line x1="216" y1="50" x2="236" y2="50" class="e-lk"/>
  <line x1="336" y1="50" x2="356" y2="50" class="e-lk"/>
  <line x1="456" y1="50" x2="476" y2="50" class="e-lk"/>
  <!-- Link labels -->
  <text x="86"  y="45" class="tag">Link</text>
  <text x="226" y="45" class="tag">Link</text>
  <text x="346" y="45" class="tag">Link</text>
  <text x="466" y="45" class="tag">Link</text>
  <!-- Generation nodes -->
  <rect x="96"  y="35" width="120" height="30" rx="2" class="n-lk"/>
  <text x="156" y="55" class="lbl">Round_1</text>
  <rect x="236" y="35" width="120" height="30" rx="2" class="n-lk"/>
  <text x="296" y="55" class="lbl">Round_2</text>
  <rect x="356" y="35" width="100" height="30" rx="2" class="n-lk"/>
  <text x="406" y="55" class="lbl">Round_3</text>
  <rect x="476" y="35" width="40" height="30" rx="2" class="n-lk"/>
  <text x="496" y="55" class="lbl">...</text>
  <!-- Caption -->
  <text x="260" y="96" class="cap">Each Generation links from the previous — live chain, every ancestor's values flow through</text>
</svg>
</div>

**When to use:** Client revision rounds, iterative workflows where each pass builds on the last. You always know what changed between rounds.

---

### 3 — Custom Tree

Mix Link and Bake freely. A parent drives multiple live children; some children become sealed deliverables at a fork point.

<div class="diagram topology-diagram">
<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp  { fill: #DDAA33; stroke: #C49A2A; stroke-width: 2; }
    .n-lk  { fill: #F1EBDD; stroke: #F1EBDD; stroke-width: 1.5; }
    .n-bk  { fill: #F1EBDD; stroke: #DDAA33; stroke-width: 2.5; }
    .e-lk  { stroke: #F1EBDD; stroke-width: 1.5; fill: none; }
    .e-bk  { stroke: #DDAA33; stroke-width: 2; stroke-dasharray: 5,3; fill: none; }
    .seal  { fill: none; stroke: #DDAA33; stroke-width: 1; stroke-dasharray: 3,3; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: #1A0F0A; text-anchor: middle; }
    .lbl-bp{ font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: #1A0F0A; text-anchor: middle; font-weight: 700; }
    .lbl-a { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: #DDAA33; text-anchor: middle; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: rgba(241,235,221,0.5); text-anchor: middle; }
    .tag   { font-family: 'IBM Plex Mono', monospace; font-size: 8px; fill: rgba(241,235,221,0.6); text-anchor: middle; }
  </style>
  <!-- Blueprint -->
  <rect x="230" y="18" width="100" height="30" rx="4" class="n-bp"/>
  <text x="280" y="38" class="lbl-bp">BLUEPRINT</text>
  <!-- Level 1: solid Link edges -->
  <line x1="280" y1="48" x2="130" y2="118" class="e-lk"/>
  <line x1="280" y1="48" x2="430" y2="118" class="e-lk"/>
  <text x="192" y="82" class="tag">Link</text>
  <text x="368" y="82" class="tag">Link</text>
  <rect x="60"  y="118" width="140" height="30" rx="2" class="n-lk"/>
  <text x="130" y="138" class="lbl">Product_Line_Base</text>
  <rect x="360" y="118" width="140" height="30" rx="2" class="n-lk"/>
  <text x="430" y="138" class="lbl">Turntable_White</text>
  <!-- Level 2: solid Link edges -->
  <line x1="130" y1="148" x2="60"  y2="208" class="e-lk"/>
  <line x1="130" y1="148" x2="160" y2="208" class="e-lk"/>
  <line x1="130" y1="148" x2="260" y2="208" class="e-lk"/>
  <text x="82"  y="182" class="tag">Link</text>
  <text x="148" y="180" class="tag">Link</text>
  <text x="204" y="178" class="tag">Link</text>
  <rect x="10"  y="208" width="100" height="30" rx="2" class="n-lk"/>
  <text x="60"  y="228" class="lbl">Colour_Red</text>
  <rect x="110" y="208" width="100" height="30" rx="2" class="n-lk"/>
  <text x="160" y="228" class="lbl">Colour_Blue</text>
  <rect x="210" y="208" width="100" height="30" rx="2" class="n-lk"/>
  <text x="260" y="228" class="lbl">Colour_Gold</text>
  <!-- Bake edge (dashed gold) -->
  <line x1="260" y1="238" x2="260" y2="272" class="e-bk"/>
  <text x="300" y="258" class="tag">Bake ← fork</text>
  <!-- Baked node + seal -->
  <rect x="210" y="272" width="100" height="32" rx="2" class="n-bk"/>
  <rect x="206" y="268" width="108" height="40" rx="4" class="seal"/>
  <text x="260" y="293" class="lbl" font-weight="600">Gold_Approved</text>
  <text x="260" y="264" class="lbl-a">sealed</text>
  <!-- Caption -->
  <text x="280" y="324" class="cap">Solid lines = live data flows. Dashed gold = snapshot taken, lineage firewall active.</text>
</svg>
</div>

**Reading this diagram:** `Product_Line_Base` drives three live colour variants — update its shared lighting once and all three reflect it. At the fork point, `Colour_Gold` produces `Gold_Approved` via Bake — that deliverable is sealed. The live `Colour_Gold` continues to evolve; `Gold_Approved` does not.

**When to use:** Complex projects with multiple variant families. Mix freely — no topology is wrong.

---

### 4 — Multiple Main Branches (Baked Root Workaround)

Cinema 4D's architecture means CHRONOS V1 has one root Context — the Main Take. But you can create multiple independent variation systems within that Context by using a Baked Generation as a secondary branch root.

<div class="diagram topology-diagram">
<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg">
  <style>
    .n-bp  { fill: #DDAA33; stroke: #C49A2A; stroke-width: 2; }
    .n-lk  { fill: #F1EBDD; stroke: #F1EBDD; stroke-width: 1.5; }
    .n-bk  { fill: #F1EBDD; stroke: #DDAA33; stroke-width: 2.5; }
    .e-lk  { stroke: #F1EBDD; stroke-width: 1.5; fill: none; }
    .e-bk  { stroke: #DDAA33; stroke-width: 2; stroke-dasharray: 5,3; fill: none; }
    .seal  { fill: none; stroke: #DDAA33; stroke-width: 1; stroke-dasharray: 3,3; }
    .lbl   { font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: #1A0F0A; text-anchor: middle; }
    .lbl-bp{ font-family: 'Space Grotesk', sans-serif; font-size: 11px; fill: #1A0F0A; text-anchor: middle; font-weight: 700; }
    .lbl-a { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: #DDAA33; text-anchor: middle; }
    .tag   { font-family: 'IBM Plex Mono', monospace; font-size: 8px; fill: rgba(241,235,221,0.6); text-anchor: middle; }
    .cap   { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: rgba(241,235,221,0.5); text-anchor: middle; }
  </style>
  <!-- Blueprint -->
  <rect x="230" y="18" width="100" height="30" rx="4" class="n-bp"/>
  <text x="280" y="38" class="lbl-bp">BLUEPRINT</text>
  <!-- Left: solid Link edge to Branch A -->
  <line x1="250" y1="48" x2="120" y2="108" class="e-lk"/>
  <text x="172" y="76" class="tag">Link</text>
  <!-- Right: dashed Bake edge to Branch_B_Root -->
  <line x1="310" y1="48" x2="420" y2="108" class="e-bk"/>
  <text x="380" y="76" class="tag">Bake</text>
  <!-- Branch A node -->
  <rect x="50" y="108" width="140" height="30" rx="2" class="n-lk"/>
  <text x="120" y="128" class="lbl">Main_Branch_A</text>
  <!-- Branch A children: solid Link edges -->
  <line x1="100" y1="138" x2="70"  y2="188" class="e-lk"/>
  <line x1="140" y1="138" x2="170" y2="188" class="e-lk"/>
  <text x="74"  y="166" class="tag">Link</text>
  <text x="162" y="166" class="tag">Link</text>
  <rect x="20"  y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="70"  y="208" class="lbl">A_Variant_1</text>
  <rect x="120" y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="170" y="208" class="lbl">A_Variant_2</text>
  <!-- Branch_B_Root: baked node + seal -->
  <rect x="350" y="108" width="140" height="32" rx="2" class="n-bk"/>
  <rect x="346" y="104" width="148" height="40" rx="4" class="seal"/>
  <text x="420" y="129" class="lbl" font-weight="600">Branch_B_Root</text>
  <text x="420" y="100" class="lbl-a">Baked — firewall</text>
  <!-- Branch B children: solid Link edges -->
  <line x1="390" y1="144" x2="370" y2="188" class="e-lk"/>
  <line x1="450" y1="144" x2="470" y2="188" class="e-lk"/>
  <text x="372" y="169" class="tag">Link</text>
  <text x="468" y="169" class="tag">Link</text>
  <rect x="320" y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="370" y="208" class="lbl">B_Variant_1</text>
  <rect x="420" y="188" width="100" height="30" rx="2" class="n-lk"/>
  <text x="470" y="208" class="lbl">B_Variant_2</text>
  <!-- Divider line -->
  <line x1="280" y1="108" x2="280" y2="230" stroke="rgba(241,235,221,0.25)" stroke-width="0.5" stroke-dasharray="3,4"/>
  <!-- Zone labels -->
  <text x="120" y="248" class="tag">Branch A — live from Blueprint</text>
  <text x="420" y="248" class="tag">Branch B — isolated from A</text>
  <!-- Caption -->
  <text x="280" y="268" class="cap">Dashed gold = snapshot taken, no flow. Solid = live. Branch B cannot see Branch A changes.</text>
  <text x="280" y="282" class="cap">Both branches have their own live Link trees beneath their respective roots.</text>
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
