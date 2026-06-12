---
title: "FORGE — Services"
description: "FDM printing, 3D scanning, modeling and animation. Read what each service does, then start an order."
permalink: /forge/services/
---

{% include forge-subnav.html %}

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">01 — Services</p>
      <h2>Everything from the model to the finished surface.</h2>
      <p class="lead">A complete FDM pipeline. Come in at any stage — a sketch, an STL, a broken part, or a foot to scan — and pick up a finished object. Open a service to see how it works, then start an order.</p>
    </div>

    <div class="cart-note">
      <strong>No cart yet — one job at a time.</strong> Each service or product you order is handled as its
      own job, so if you stack several you&rsquo;ll get a separate email for each, every one with its own
      upload and details. Batching several jobs into a single hand-off is on the way.
    </div>

    <div class="shop" id="services-shop">

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">FDM / FFF Printing</span>
          <span class="shop-tag">Print my file · PLA · PETG · ABS / ASA · TPU</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>Send me a model and I print it clean and dimensionally accurate, with profiles tuned for strength, surface, or speed depending on what the part is for. <strong>Large format is built in</strong> — parts up to 500&times;500&times;500&nbsp;mm come off in one piece, no glued seams.</p>
          <p><strong>I pick the right machine for the job</strong> — the open Sovol SV08&nbsp;Max for big PLA/PETG/ABS work, the enclosed, TPU-tuned Creality K1&nbsp;Max for flexibles and smaller enclosed prints. You don&rsquo;t choose the printer; you choose the result.</p>
          <ul>
            <li><strong>Materials:</strong> PLA, PETG, ABS / ASA, TPU (flexible).</li>
            <li><strong>Post-processing (optional add-on):</strong> sanding, seam clean-up, priming, paint and assembly — the difference between a raw print and something you&rsquo;re happy to hand over. Tick it on the order; it&rsquo;s priced separately.</li>
          </ul>
          <a class="btn btn-accent" href="{{ '/forge/order/?service=fdm' | relative_url }}">Order a print &rarr;</a>
        </div>
      </div>

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">3D Scanning</span>
          <span class="shop-tag">Real object → clean, printable model</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>Turn a real object — or a body part — into a clean, watertight model you can print or build on. It&rsquo;s the starting point for custom-fit work (like the insoles) and for reverse-engineering a part you can&rsquo;t get a file for.</p>
          <ul>
            <li>Mesh clean-up and repair included — you get a usable model, not a raw scan.</li>
            <li>Pairs naturally with printing or modeling: scan &rarr; refine &rarr; print, all in one place.</li>
          </ul>
          <a class="btn btn-accent" href="{{ '/forge/order/?service=scan' | relative_url }}">Book a scan &rarr;</a>
        </div>
      </div>

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">Modeling &amp; Touch-ups</span>
          <span class="shop-tag">No file? Bad file? I&rsquo;ll make it printable</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>No file? I&rsquo;ll model it from a sketch, a photo, or a description. Bad file? I&rsquo;ll fix it — repairs, watertight meshes, print-prep and small design tweaks before it ever hits the plate.</p>
          <ul>
            <li>CAD modeling, mesh repair, and print-prep.</li>
            <li>Small design changes — fit tweaks, mounting points, tolerances.</li>
          </ul>
          <a class="btn btn-accent" href="{{ '/forge/order/?service=model' | relative_url }}">Request modeling &rarr;</a>
        </div>
      </div>

      <div class="shop-row">
        <button class="shop-head" type="button" aria-expanded="false">
          <span class="shop-title">Animation &amp; 3D Art</span>
          <span class="shop-tag">Product films &amp; motion graphics → Portfolio</span>
          <span class="shop-toggle" aria-hidden="true"></span>
        </button>
        <div class="shop-body">
          <p>Need the product moving, not just printed? Full motion-graphics and product animation — modelling, look-dev, lighting and rendering — run through my Portfolio studio rather than the print queue.</p>
          <ul>
            <li>Product animation, motion graphics, look-dev.</li>
            <li>Often paired with a printed piece: animate it, then print the hero prop.</li>
          </ul>
          <a class="btn btn-accent" href="{{ '/portfolio/' | relative_url }}">See the Portfolio &rarr;</a>
        </div>
      </div>

    </div>
  </div>
</section>

{% include forge-crosssell.html context="services" %}

<script>
  // Accordion: expand a service to read it before ordering. One row open is fine; toggle freely.
  (function () {
    var shop = document.getElementById('services-shop');
    if (!shop) return;
    shop.querySelectorAll('.shop-head').forEach(function (head) {
      head.addEventListener('click', function () {
        var row = head.closest('.shop-row');
        var open = row.classList.toggle('is-open');
        head.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
    // If arriving with a hash like #fdm, open nothing special — links land on /forge/order/ instead.
  })();
</script>
