---
layout: chronos-home
title: "CHRONOS — Scene Variation Management for Cinema 4D"
description: "One scene file. Every lighting setup, material state, and configuration your project needs — named, switchable, and permanent."
---

<section class="hero-chronos">
  <div class="container">
    <p class="hero-product-label">A 3PO Project &mdash; Cinema 4D Plugin</p>
    <h1>One scene.<br>Every variation.<br>Nothing lost.</h1>
    <p class="lead">C.H.R.O.N.O.S. lets you manage multiple versions of your scene — lighting setups, material states, object configurations, camera angles — as named, switchable Generations, all inside a single .c4d file. No duplicates. No manual tracking. No destructive changes.</p>
    <div class="acronym-block">
      <p class="acronym-line"><span class="acronym-char">C</span>ontextual</p>
      <p class="acronym-line"><span class="acronym-char">H</span>ierarchy for</p>
      <p class="acronym-line"><span class="acronym-char">R</span>endering</p>
      <p class="acronym-line"><span class="acronym-char">O</span>verrides,</p>
      <p class="acronym-line"><span class="acronym-char">N</span>on-destructive</p>
      <p class="acronym-line"><span class="acronym-char">O</span>perations &amp;</p>
      <p class="acronym-line"><span class="acronym-char">S</span>cene-management</p>
    </div>
    <div class="hero-cta">
      <a href="{{ '/chronos/get-it/' | relative_url }}" class="btn btn-accent">Get C.H.R.O.N.O.S.</a>
      <a href="{{ '/chronos/workflow/' | relative_url }}" class="btn btn-outline">See How It Works</a>
    </div>
  </div>
</section>

<div class="container">
  <div class="page-content">

## What Sets It Apart

Most variation tools force you to choose between "everything linked" or "everything copied." CHRONOS gives you both — on a per-Generation basis, in the same project.

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">⟳</div>
    <h3>Link</h3>
    <p>A Generation lives inside its parent's value stream. Change the parent — every child that hasn't overridden that value updates automatically. One edit. Infinite downstream reach.</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">◼</div>
    <h3>Bake</h3>
    <p>A Generation captures a fully resolved state and freezes it. Nothing the parent does can change it. A lineage firewall for approved deliverables and client handoffs.</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">⬡</div>
    <h3>Any Topology</h3>
    <p>Flat star, linear chain, or a custom tree. CHRONOS doesn't prescribe the shape of your variation system — you decide what makes sense for the project.</p>
  </div>
  <div class="feature-card">
    <div class="feature-icon">◈</div>
    <h3>Built Into C4D</h3>
    <p>A dockable panel inside Cinema 4D. No external apps, no browser tabs, no round-tripping. Your scene and your variation system in the same place, at the same time.</p>
  </div>
</div>

---

## The Core System

| | |
|---|---|
| **Context** | The active Take in Cinema 4D — C.H.R.O.N.O.S. reads from and writes to the active context |
| **Registry** | Where you register the Variables you want to track — the global list of parameters C.H.R.O.N.O.S. manages |
| **Variables** | Individual tracked parameters (numbers, colours, vectors, booleans, strings, object references) registered in the Registry |
| **Branches** | Subtrees of Generations — a Branch root is either a Blueprint (immutable default) or a Baked parent (frozen snapshot) |
| **Generations** | Named variation states — each Generation can override any registered Variable |
| **Blueprint** | The immutable root Generation auto-created per Context — the source of truth all Generations trace back to |
| **Link** | A Generation that inherits live from its parent — changes flow downstream automatically |
| **Bake** | A Generation that captures its parent's resolved state and freezes it permanently — a sealed deliverable |

Everything is stored alongside your `.c4d` file. One project, one file, complete history.

---

<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 2.5rem;">
  <a href="{{ '/chronos/features/' | relative_url }}" class="btn btn-primary">All Features →</a>
  <a href="{{ '/chronos/workflow/' | relative_url }}" class="btn btn-outline">How It Works →</a>
  <a href="{{ '/chronos/branching/' | relative_url }}" class="btn btn-outline">Branching & Inheritance →</a>
  <a href="{{ '/chronos/roadmap/' | relative_url }}" class="btn btn-outline">Roadmap →</a>
</div>

  </div>
</div>
