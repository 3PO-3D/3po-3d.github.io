---
layout: default
nav_key: forge
site_accent: forge
wordmark: "FORGE"
subnav: true
footer_tagline: "FORGE · FDM Printing Workshop"
title: "FORGE — 3PO 3D Printing"
description: "Large-format FDM 3D printing, finishing and 3D scanning. Functional parts, prototypes, commissions and custom orthopedic insoles."
permalink: /forge/
---

{% include forge-subnav.html %}

<section class="hero hero-grid-bg">
  <div class="container">
    <img class="hero-mark" src="{{ '/assets/img/logos/Print_logo/forge_head.svg' | relative_url }}" alt="FORGE">
    <p class="eyebrow-accent">A 3PO Workshop — FDM / FFF Printing</p>
    <h1>From file to <span class="accent-text">finished part.</span></h1>
    <p class="lead">Large-format FDM printing, finishing, and 3D scanning out of one workshop. Bring a model — or a problem — and leave with a part in your hands. Up to half a metre cubed, printed on a Sovol SV08&nbsp;Max.</p>
    <div class="hero-cta">
      <a href="{{ '/forge/order/' | relative_url }}" class="btn btn-accent">Request a Quote</a>
      <a href="{{ '/forge/services/' | relative_url }}" class="btn btn-outline">Browse Services</a>
    </div>
    <div class="hero-meta">
      <div class="stat"><div class="n">500³</div><div class="l">mm build volume</div></div>
      <div class="stat"><div class="n">FDM</div><div class="l">filament process</div></div>
      <div class="stat"><div class="n">Scan&nbsp;→&nbsp;Part</div><div class="l">full pipeline</div></div>
      <div class="stat"><div class="n">1&ndash;5&nbsp;day</div><div class="l">typical turnaround</div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">Where to start</p>
      <h2>Pick the door you need.</h2>
      <p class="lead">Everything FORGE does is split into four clear places — no scrolling past what you didn&rsquo;t come for.</p>
    </div>
    <div class="tile-grid cols-2">
      <a class="tile accent-top" href="{{ '/forge/services/' | relative_url }}" style="text-decoration:none;color:inherit;">
        <p class="tile-num">01</p>
        <h3>Services</h3>
        <p>Print my file, scan a real object, model from scratch, or animate it. Read what each one does, then start an order.</p>
        <div class="tile-tags"><span class="chip chip-accent">Browse services &rarr;</span></div>
      </a>
      <a class="tile accent-top" href="{{ '/forge/products/' | relative_url }}" style="text-decoration:none;color:inherit;">
        <p class="tile-num">02</p>
        <h3>Products</h3>
        <p>Ready-to-order pieces — including the flagship custom-fit orthopedic and comfort insoles, printed from your foot scan.</p>
        <div class="tile-tags"><span class="chip chip-accent">See products &rarr;</span></div>
      </a>
      <a class="tile accent-top" href="{{ '/forge/process/' | relative_url }}" style="text-decoration:none;color:inherit;">
        <p class="tile-num">03</p>
        <h3>Process</h3>
        <p>How a job moves through the workshop — scan or model, slice and quote, print, finish, hand-off — plus the machine spec.</p>
        <div class="tile-tags"><span class="chip">How it works &rarr;</span></div>
      </a>
      <a class="tile accent-top" href="{{ '/forge/order/' | relative_url }}" style="text-decoration:none;color:inherit;">
        <p class="tile-num">04</p>
        <h3>Order</h3>
        <p>Send a file and a few details. I quote it, you approve, and it goes into the queue. Upload is right here — no account needed.</p>
        <div class="tile-tags"><span class="chip chip-accent">Start an order &rarr;</span></div>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="order-band">
      <div>
        <p class="ob-label">Featured — Custom Insoles</p>
        <h3>3D-printed insoles, made from your foot scan.</h3>
        <p>Orthopedic or comfort, in flexible TPU. Pay, upload your scan, and the pair is printed to fit and shipped.</p>
      </div>
      <div class="hero-cta" style="margin:0;">
        <a href="{{ '/forge/products/' | relative_url }}" class="btn btn-accent">See the Insoles</a>
      </div>
    </div>
  </div>
</section>

{% include forge-crosssell.html context="overview" %}
