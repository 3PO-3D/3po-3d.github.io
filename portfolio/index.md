---
layout: default
nav_key: portfolio
site_accent: portfolio
wordmark: "PORTFOLIO"
subnav: true
footer_tagline: "Portfolio · 3D Art & Animation"
title: "PORTFOLIO — 3PO 3D Art"
description: "Motion graphics and product animation by a 3D generalist. Reel, selected work and look-dev."
permalink: /portfolio/
---

<style>
  .reel-hero { position: relative; border: var(--bw) solid var(--text); border-radius: var(--radius); overflow: hidden; background: var(--surface-2); }
  .reel-hero .media-grid-tex { opacity: 0.6; }
  .reel-hero .reel-play { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; text-decoration: none; color: var(--text); }
  .reel-hero .pbtn { width: 78px; height: 78px; border-radius: 50%; border: var(--bw) solid var(--text); background: rgba(var(--bg-rgb), 0.6); color: var(--accent); display: flex; align-items: center; justify-content: center; transition: transform .18s, background .18s; }
  .reel-hero:hover .pbtn { transform: scale(1.08); background: var(--accent); color: #fff; }
  .reel-hero .reel-cap { font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
  .play-tri { width: 0; height: 0; border-style: solid; border-width: 11px 0 11px 18px; border-color: transparent transparent transparent currentColor; margin-left: 4px; }
</style>

<nav class="sub-nav" id="sub-nav">
  <div class="container">
    <a href="#top" class="active">Overview</a>
    <a href="#work">Work</a>
    <a href="#reel">Reel</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<section class="hero hero-split hero-arcs">
  <div class="container">
    <div class="hero-text">
      <img class="hero-mark" src="{{ '/assets/img/logos/Portfolio/portfolio_head.svg' | relative_url }}" alt="Portfolio" style="height:64px;margin-bottom:1.6rem;">
      <p class="eyebrow-accent">3D Generalist — Motion &amp; Product Animation</p>
      <h1>Product stories, <span class="accent-text">in&nbsp;motion.</span></h1>
      <p class="lead">I&rsquo;m a 3D generalist working in advertising — modelling, look-dev, lighting and animation for product films and motion graphics. This is where the work lives.</p>
      <div class="hero-cta">
        <a href="#reel" class="btn btn-accent">Watch the Reel</a>
        <a href="#work" class="btn btn-outline">Browse Work</a>
      </div>
    </div>
    <a class="reel-hero ratio-4-3 reel-play" href="#reel">
      <div class="media-grid-tex"></div>
      <span class="pbtn"><span class="play-tri"></span></span>
      <span class="reel-cap">Showreel 2026 — placeholder</span>
    </a>
  </div>
</section>

<section class="section" id="work">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">Selected Work</p>
      <h2>Recent pieces.</h2>
      <p class="lead">Product animation, motion graphics and look-dev. Embedded from Behance for now — a cut-together showreel is coming.</p>
    </div>

    <div class="work-grid">
      <figure class="work-card">
        <div class="work-embed"><iframe src="https://www.behance.net/embed/project/251151509?ilo0=1" loading="lazy" allowfullscreen frameborder="0" allow="clipboard-write" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
        <figcaption class="work-cap"><span class="work-cat">Product Animation</span><h3>Casio VL-Tone VL-1</h3></figcaption>
      </figure>
      <figure class="work-card">
        <div class="work-embed"><iframe src="https://www.behance.net/embed/project/251018153?ilo0=1" loading="lazy" allowfullscreen frameborder="0" allow="clipboard-write" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
        <figcaption class="work-cap"><span class="work-cat">Motion Graphics</span><h3>Cosmetic Loop</h3></figcaption>
      </figure>
      <figure class="work-card">
        <div class="work-embed"><iframe src="https://www.behance.net/embed/project/251017395?ilo0=1" loading="lazy" allowfullscreen frameborder="0" allow="clipboard-write" referrerpolicy="strict-origin-when-cross-origin"></iframe></div>
        <figcaption class="work-cap"><span class="work-cat">Product Animation · made at 3PO FORGE</span><h3>Custom Orthopedic Insole</h3></figcaption>
      </figure>
    </div>

<style>
  .work-card { margin: 0; border: var(--bw) solid var(--text); border-radius: var(--radius); overflow: hidden; background: var(--surface); }
  .work-embed { position: relative; width: 100%; aspect-ratio: 404 / 316; background: var(--surface-2); }
  .work-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; display: block; }
  .work-cap { display: flex; flex-direction: column; gap: 0.2rem; padding: 1rem 1.2rem 1.2rem; border-top: var(--bw) solid var(--hairline); }
  .work-cap .work-cat { font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); }
  .work-cap h3 { font-size: 1.15rem; font-weight: 600; margin: 0; }
</style>

    <div style="margin-top:2.5rem; display:flex; flex-wrap:wrap; gap:0.5rem;">
      <span class="chip chip-accent">Motion Graphics</span>
      <span class="chip chip-accent">Product Animation</span>
      <span class="chip chip-accent">Look-dev &amp; Lighting</span>
      <span class="chip">Modelling</span>
      <span class="chip">Texturing</span>
      <span class="chip">Rendering</span>
    </div>
  </div>
</section>

<section class="section" id="reel">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">Showreel</p>
      <h2>The 60-second version.</h2>
    </div>
    <a class="reel-hero ratio-16-9 reel-play" href="#">
      <div class="media-grid-tex"></div>
      <span class="pbtn"><span class="play-tri"></span></span>
      <span class="reel-cap">Drop your showreel here — placeholder</span>
    </a>
    <div class="client-strip" style="margin-top:2.5rem;">
      <span class="mono-label" style="width:100%;">Selected Clients — placeholder</span>
      <span class="cl">CLIENT</span><span class="cl">AGENCY</span><span class="cl">STUDIO</span><span class="cl">BRAND</span><span class="cl">LABEL</span>
    </div>
  </div>
</section>

<section class="section" id="about">
  <div class="container">
    <div style="display:grid; grid-template-columns: 0.8fr 1.2fr; gap:3.5rem; align-items:start;" class="about-cols">
      <div class="media ratio-3-4" data-label="Portrait — placeholder" style="max-width:320px;"><div class="media-grid-tex"></div></div>
      <div>
        <p class="mono-label" style="margin-bottom:1rem;">About</p>
        <h2 style="margin-bottom:1.25rem;">3D generalist for the advertising industry.</h2>
        <p class="lead" style="max-width:60ch;">I cover the full pipeline — modelling, look-dev, lighting, animation and rendering — mostly for product films and motion graphics. <em>Bio, tools and experience to be filled in.</em></p>
        <div class="spec-stack" style="margin-top:1.75rem; max-width:520px;">
          <div class="spec-card"><span class="k">Focus</span><span class="v">Product animation · Motion graphics</span></div>
          <div class="spec-card"><span class="k">Pipeline</span><span class="v">Model → Look-dev → Light → Render</span></div>
          <div class="spec-card"><span class="k">Also at 3PO</span><span class="v">FORGE 3D printing · CHRONOS for C4D</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="contact">
  <div class="container">
    <div class="order-band">
      <div>
        <p class="ob-label">Contact</p>
        <h3>Have a product that needs to move?</h3>
        <p>Available for product animation, motion graphics and look-dev — freelance or contract.</p>
      </div>
      <div class="hero-cta" style="margin:0;">
        <a href="mailto:3po@3po3d.com?subject=Project%20enquiry" class="btn btn-accent">Start a Project</a>
        <a href="{{ '/creator/' | relative_url }}" class="btn btn-outline">CV &amp; Cover Letter →</a>
      </div>
    </div>
  </div>
</section>

<style>
  @media (max-width: 760px) { .about-cols { grid-template-columns: 1fr !important; gap: 2rem !important; } }
</style>
