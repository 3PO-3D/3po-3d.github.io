---
layout: default
nav_key: chronos
wordmark: "CHRONOS"
subnav: true
title: "CHRONOS — Scene Variation Management for Cinema 4D"
description: "One scene file. Every lighting setup, material state, and configuration — named, switchable, and permanent."
---

{% include chronos-subnav.html %}

<section class="hero-chronos hero-dots">
  <div class="container">
    <p class="hero-product-label">A 3PO Project — Cinema 4D Plugin</p>
    <h1>One scene.<br>Every variation.<br>Nothing lost.</h1>
    <p class="lead">C.H.R.O.N.O.S. lets you manage multiple versions of your scene — lighting setups, material states, object configurations, camera angles — as named, switchable Generations, all inside a single .c4d file. No duplicates. No manual tracking. No destructive changes.</p>
    <div class="hero-bottom">
      <div class="acronym-block">
        <p class="acronym-line"><span class="acronym-char">C</span>ontextual</p>
        <p class="acronym-line"><span class="acronym-char">H</span>ierarchy for</p>
        <p class="acronym-line"><span class="acronym-char">R</span>endering</p>
        <p class="acronym-line"><span class="acronym-char">O</span>verrides,</p>
        <p class="acronym-line"><span class="acronym-char">N</span>on-destructive</p>
        <p class="acronym-line"><span class="acronym-char">O</span>perations &amp;</p>
        <p class="acronym-line"><span class="acronym-char">S</span>cene-management</p>
      </div>
      <div class="hero-cta-col">
        <a href="{{ '/chronos/get-it/' | relative_url }}" class="btn btn-accent">Get C.H.R.O.N.O.S.</a>
        <a href="{{ '/chronos/workflow/' | relative_url }}" class="btn btn-outline">See How It Works</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="section-heading">One root. Infinite variations.</h2>
    <p class="lead" style="max-width:640px;">Start from a Blueprint — the immutable source of truth. Branch out into Generations that inherit live from their parent, or freeze them into sealed deliverables. The topology is yours to decide.</p>
    <div class="feature-grid feature-grid--2col">
      <div class="feature-card"><div class="feature-icon">⬡</div><h3>Flat or Deep</h3><p>All Generations from one root — a star. Each inheriting from the last — a chain. Both at once, for different parts of the scene — a tree.</p></div>
      <div class="feature-card"><div class="feature-icon">◆</div><h3>Blueprint</h3><p>The immutable starting point, auto-created for every scene context. Every Generation traces its lineage back here. It never changes — that's the point.</p></div>
      <div class="feature-card"><div class="feature-icon">⟳</div><h3>Link</h3><p>A Generation that lives inside its parent's value stream. Change the parent — every child that hasn't overridden that value updates automatically.</p></div>
      <div class="feature-card"><div class="feature-icon">◼</div><h3>Bake</h3><p>A Generation that captures a fully resolved state and freezes it. A lineage firewall for approved deliverables and client handoffs.</p></div>
    </div>
  </div>
</section>

<section class="section" id="concepts">
  <div class="container">
    <h2 class="section-heading">The Core Concepts</h2>
    <div class="glossary-stack">
      <div class="glossary-card"><span class="glossary-term">CONTEXT</span><span class="glossary-def">The active Cinema 4D Take — CHRONOS reads from and writes to whichever Take is open.</span></div>
      <div class="glossary-card"><span class="glossary-term">BLUEPRINT</span><span class="glossary-def">The immutable root Generation per Context — the source of truth every other Generation traces back to.</span></div>
      <div class="glossary-card"><span class="glossary-term">GENERATION</span><span class="glossary-def">A named variation state — each one can override any registered Variable independently.</span></div>
      <div class="glossary-card"><span class="glossary-term">VARIABLE</span><span class="glossary-def">A single tracked parameter: a number, colour, vector, boolean, or object reference.</span></div>
      <div class="glossary-card"><span class="glossary-term">BRANCH</span><span class="glossary-def">A lineage of Generations continuously inheriting from one another, up to a branch root.</span></div>
      <div class="glossary-card"><span class="glossary-term">LINK</span><span class="glossary-def">A Generation with live inheritance — parent changes flow through automatically.</span></div>
      <div class="glossary-card"><span class="glossary-term">BAKE</span><span class="glossary-def">A Generation frozen at creation — permanently sealed from its parent lineage.</span></div>
    </div>
  </div>
</section>

<section class="section" id="shots">
  <div class="container">
    <p class="mono-label" style="margin-bottom:1.25rem;">Inside the plugin</p>
    <h2 class="section-heading">Built for the way you actually work.</h2>
    <div class="shot-grid">
      <img src="{{ '/assets/screenshots/ss_01_dashboard_overview.png' | relative_url }}" alt="Dashboard overview">
      <img src="{{ '/assets/screenshots/ss_02_generation_list.png' | relative_url }}" alt="Generation list">
      <img src="{{ '/assets/screenshots/ss_03_linked_generation.png' | relative_url }}" alt="Linked generation">
      <img src="{{ '/assets/screenshots/ss_05_blueprint.png' | relative_url }}" alt="Blueprint">
    </div>
    <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:2rem;">
      <a href="{{ '/chronos/features/' | relative_url }}" class="btn btn-primary">All Features →</a>
      <a href="{{ '/chronos/branching/' | relative_url }}" class="btn btn-outline">Branching &amp; Inheritance →</a>
      <a href="{{ '/chronos/roadmap/' | relative_url }}" class="btn btn-outline">Roadmap →</a>
    </div>
  </div>
</section>
