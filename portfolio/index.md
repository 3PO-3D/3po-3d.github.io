---
layout: default
nav_key: portfolio
site_accent: portfolio
wordmark: "PORTFOLIO"
subnav: true
footer_tagline: "Portfolio · 3D Art & Animation"
title: "PORTFOLIO — 3PO 3D Art"
description: "Motion graphics and product animation by a 3D generalist. Selected work, stills and look-dev."
permalink: /portfolio/
---

<link rel="stylesheet" href="{{ '/assets/work-order.css' | relative_url }}">

<nav class="sub-nav" id="sub-nav">
  <div class="container">
    <a href="#top" class="active">Overview</a>
    <a href="#work">Work</a>
    <a href="#about">About</a>
  </div>
</nav>

<section class="hero hero-arcs">
  <div class="container">
    <img class="hero-mark" src="{{ '/assets/img/logos/Portfolio/portfolio_head.svg' | relative_url }}" alt="Portfolio" style="height:64px;margin-bottom:1.6rem;">
    <p class="eyebrow-accent">3D Generalist — Motion &amp; Product Animation</p>
    <h1>Product stories, <span class="accent-text">in&nbsp;motion.</span></h1>
    <p class="lead">I&rsquo;m a 3D generalist working in advertising — modelling, look-dev, lighting and animation for product films and motion graphics. This is where the work lives.</p>
    <div class="hero-cta">
      <a href="#work" class="btn btn-accent">Browse Work</a>
      <a href="#contact" class="btn btn-outline">Get in touch</a>
    </div>
  </div>
</section>

<section class="section" id="work">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">Selected Work</p>
      <h2>Recent pieces.</h2>
      <p class="lead">Each piece runs as a live banner. Click one to open the full, playable film, the write-up, and the <strong>View on Behance</strong> link — the only link that leaves the site.</p>
    </div>

    <div class="pf-projects pl-banner" id="work-projects">
      {% for p in site.data.portfolio %}{% assign base = '/assets/img/portfolio/' | append: p.key | append: '/' %}
      <article class="pf-proj pf-banner" id="{{ p.key }}">
        <div class="pf-proj__row pf-banner__row" role="button" tabindex="0" aria-expanded="false" aria-label="Expand {{ p.title }}">
          <div class="pf-banner__bg" data-carousel data-interval="5000">
            {% for s in p.stills %}<img class="pf-banner__img{% if forloop.first %} is-active{% endif %}" src="{{ base | append: s | relative_url }}" loading="lazy" alt="" aria-hidden="true">{% endfor %}
          </div>
          <div class="pf-banner__veil"></div>
          <div class="pf-banner__meta">
            <span class="pf-banner__num">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
            <h3 class="pf-banner__title">{{ p.title }}</h3>
            <span class="pf-banner__cat">{{ p.category }}</span>
          </div>
          <span class="pf-proj__chev pf-banner__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span>
        </div>
        <div class="pf-proj__panel"><div class="pf-proj__panel-inner"><div class="pf-proj__panel-pad pf-banner__pad">
          <div class="pf-proj__desc">
            <p>{{ p.blurb }}</p>
            {% if p.variants %}{% for v in p.variants %}<p><strong>{{ v.name }}</strong> — {{ v.desc }}</p>{% endfor %}{% endif %}
          </div>
          {% if p.vimeo %}<div class="pf-proj__video pf-banner__video"{% if p.vaspect %} style="aspect-ratio:{{ p.vaspect }}"{% endif %}>
            <iframe data-vsrc="https://player.vimeo.com/video/{{ p.vimeo }}?dnt=1&app_id=58479" loading="lazy" frameborder="0" allow="fullscreen; picture-in-picture; clipboard-write" referrerpolicy="strict-origin-when-cross-origin" title="{{ p.title }}"></iframe>
          </div>{% endif %}
          <a class="pf-behance" href="{{ p.behance_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/icons/behance.svg' | relative_url }}" alt="">View on Behance <span class="ext">&#8599;</span></a>
        </div></div></div>
      </article>
      {% endfor %}
    </div>

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

<section class="section" id="about">
  <div class="container">
    <div style="display:grid; grid-template-columns: 0.8fr 1.2fr; gap:3.5rem; align-items:start;" class="about-cols">
      <a href="{{ '/creator/' | relative_url }}" class="creator-portrait-link pf-about-portrait" aria-label="Meet the maker">
        <img src="{{ '/assets/img/logos/Creator/Creator_svg.svg' | relative_url }}" alt="3PO — the maker" class="creator-portrait" loading="lazy">
      </a>
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
      </div>
    </div>
  </div>
</section>

<script src="{{ '/assets/work-order.js' | relative_url }}"></script>

<style>
  /* About portrait reuses the Home "maker" pulse link, scaled up to ~text height */
  .pf-about-portrait { align-self: center; justify-self: center; }
  .pf-about-portrait .creator-portrait { height: clamp(220px, 26vw, 300px); }
  @media (max-width: 760px) { .about-cols { grid-template-columns: 1fr !important; gap: 2rem !important; } .pf-about-portrait { justify-self: start; } .pf-about-portrait .creator-portrait { height: 200px; } }
  /* land in-page anchors (Work / About) just under the docked header + sub-nav, not mid-section */
  section[id] { scroll-margin-top: 130px; }
</style>
