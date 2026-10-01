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

<section class="hero">
  <!-- Hero stage: CSS panel wall + Framerate cloud video (cropped to its square), edges feathered into the wall -->
  <div class="hero-stage" aria-hidden="true">
    <div class="hero-stage__in">
      <div class="hero-wall"></div>
      <div class="hero-video">
        <iframe
          src="https://framerate.tv/embed/224fa1e3-e25c-462c-98ae-d5d6142e6a89?background=1"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          loading="lazy"
          tabindex="-1"
          title="Cloud animation"
        ></iframe>
      </div>
    </div>
  </div>
  <div class="container">
    <img class="hero-mark" src="{{ '/assets/img/logos/Portfolio/portfolio_head.svg' | relative_url }}" alt="Portfolio" style="height:64px;margin-bottom:1.6rem;">
    <p class="eyebrow-accent">3D Generalist — Motion &amp; Product Animation</p>
    <h1>Product stories, <span class="accent-text">in&nbsp;motion.</span></h1>
    <p class="lead">I&rsquo;m a 3D generalist working in advertising — modelling, look-dev, lighting and animation for product films and motion graphics. This is where the work lives.</p>
    <div class="hero-cta">
      <a href="#work" class="btn btn-accent">Browse Work</a>
      <a href="#" class="btn btn-outline" data-open-project>Get in touch</a>
    </div>
  </div>
</section>

<section class="section" id="work">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">Selected Work</p>
      <h2>Recent pieces.</h2>
      <p class="lead">Every piece plays right here. Open the arrow beside a film for the write-up and links.</p>
    </div>

    {% assign fr_common = 'play_btn=0&amp;time_range=0&amp;time_disp=0&amp;airplay_btn=0&amp;pip_btn=0&amp;no_thumbs=1&amp;initial_play_btn=0&amp;accent_color=%23f0eae0&amp;primary_color=%2344b39d&amp;track_color=%23f0eae0&amp;control_bar_border_radius=25&amp;control_bar_padding=20&amp;theme=minimal' %}
    <div class="pf-clips" id="work-projects">
      {% for p in site.data.portfolio %}{% if p.autoplay == false %}{% assign fr_ap = '' %}{% else %}{% assign fr_ap = 'autoplay=1&amp;muted=1&amp;loop=1&amp;' %}{% endif %}{% assign fr_asp = p.vaspect | default: '16 / 9' %}
      <article class="pf-clip{% if fr_asp == '1 / 1' %} pf-clip--sq{% endif %}{% if p.crop_to %} pf-clip--crop-{{ p.crop_to }}{% endif %}" id="{{ p.key }}">
        <button class="pf-clip__chev" type="button" aria-expanded="false" aria-controls="{{ p.key }}-panel" aria-label="Show details: {{ p.title }}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>
        <div class="pf-clip__main">
          <div class="pf-clip__video" style="aspect-ratio:{{ fr_asp }}">
            <iframe src="https://framerate.tv/embed/{{ p.framerate }}?{{ fr_ap }}{{ fr_common }}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="{{ p.title }}"></iframe>
          </div>
          <button class="pf-clip__head" type="button" aria-expanded="false" aria-controls="{{ p.key }}-panel">
            <span class="pf-clip__num">{{ forloop.index | prepend: '0' | slice: -2, 2 }}</span>
            <span class="pf-clip__title">{{ p.title }}</span>
            <span class="pf-clip__cat">{{ p.category }}</span>
          </button>
          <div class="pf-clip__panel" id="{{ p.key }}-panel"><div class="pf-clip__panel-inner"><div class="pf-clip__panel-pad">
            {% if p.blurb != blank %}<div class="pf-proj__desc"><p>{{ p.blurb }}</p></div>{% endif %}
            {% if p.variants %}<div class="pf-proj__desc">{% for v in p.variants %}<p><strong>{{ v.name }}</strong> — {{ v.desc }}</p>{% endfor %}</div>{% endif %}
            <div class="pf-clip__links">
              {% if p.behance_url %}<a class="pf-behance" href="{{ p.behance_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/icons/behance.svg' | relative_url }}" alt="">View on Behance <span class="ext">&#8599;</span></a>{% endif %}
              {% if p.framerate_watch %}<a class="pf-behance" href="{{ p.framerate_watch }}" target="_blank" rel="noopener">Watch on Framerate <span class="ext">&#8599;</span></a>{% endif %}
            </div>
          </div></div></div>
        </div>
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
        <a href="#" class="btn btn-accent" data-open-project>Start a Project</a>
      </div>
    </div>
  </div>
</section>

{% include project-modal.html %}

<script src="{{ '/assets/work-order.js' | relative_url }}"></script>

<style>
  /* About portrait reuses the Home "maker" pulse link, scaled up to ~text height */
  .pf-about-portrait { align-self: center; justify-self: center; }
  .pf-about-portrait .creator-portrait { height: clamp(220px, 26vw, 300px); }
  @media (max-width: 760px) { .about-cols { grid-template-columns: 1fr !important; gap: 2rem !important; } .pf-about-portrait { justify-self: start; } .pf-about-portrait .creator-portrait { height: 200px; } }
  /* land in-page anchors (Work / About) just under the docked header + sub-nav, not mid-section */
  section[id] { scroll-margin-top: 130px; }
</style>
