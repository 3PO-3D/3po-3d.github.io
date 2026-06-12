---
title: "FORGE — Products"
description: "Ready-to-order printed pieces, including custom-fit orthopedic and comfort insoles printed from your foot scan."
permalink: /forge/products/
---

{% include forge-subnav.html %}

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">02 — Products</p>
      <h2>Things worth printing, ready to order.</h2>
      <p class="lead">A growing catalogue of functional and custom pieces, each made to order on the workshop machines.</p>
    </div>

    <div class="cart-note">
      <strong>No cart yet — order one item at a time.</strong> Each product checks out on its own, and
      anything scan-based emails you a private upload link afterwards. Stacking several? Expect one email
      per item, each with its own steps.
    </div>

    <!-- Flagship: custom insoles -->
    <div class="product insole-flagship" style="grid-column: span 3;">
      <div class="insole-cols" style="display:grid; grid-template-columns: 0.8fr 1.2fr;">
        <div class="media ratio-4-3" data-label="Scan → insole" style="border-right:var(--bw) solid var(--text);border-bottom:none;"><div class="media-grid-tex"></div><svg class="ph-glyph" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M8 3c2 0 3 1 3 3 0 2 1 3 2 4s2 2 2 4-1 4-4 5-6 0-7-3 0-5 1-7 1-3 1-5 1-3 2-3z"/><circle cx="16" cy="6" r="1"/><circle cx="18" cy="9" r="1"/></svg></div>
        <div class="product-body" style="padding:2rem 2.2rem;">
          <span class="product-cat">Custom Fit — Flagship · made from your foot scan</span>
          <h3 style="font-size:1.5rem;">Custom Insoles</h3>
          <p style="max-width:54ch;">3D-printed to fit your foot from a scan you upload after checkout. Pick the support level and colour; I print the pair and ship it. Scan-based geometry, variable infill mapped to load, and integrated air channels for breathability.</p>
          <p class="insole-explainer"><strong>Blue &amp; Red</strong> are firm, elastic TPU — best for active walking and sport rebound. <strong>Black</strong> is a soft-touch foaming TPU — best for all-day standing comfort, with less spring-back.</p>
          <div class="insole-buy-row">
            <div class="insole-variant">
              <div class="iv-info"><span class="iv-name">Orthopedic</span><span class="iv-desc">Structural support — arch, weight &amp; gait. Colour: Blue or Black.</span></div>
              <div class="iv-foot"><span class="price">40 000 Ft</span>
                <a class="btn btn-accent product-buy" data-stripe-link="https://buy.stripe.com/8x2cN5dGraxX0xC1pg2go01" href="mailto:3po@3po3d.com?subject=Orthopedic%20insole%20order&body=Colour%20(Blue%2FBlack)%3A%0AShoe%20size%3A">Buy</a></div>
            </div>
            <div class="insole-variant">
              <div class="iv-info"><span class="iv-name">Comfort</span><span class="iv-desc">Soft all-day cushioning, shoe-friendly. Colour: Red or Black.</span></div>
              <div class="iv-foot"><span class="price">25 000 Ft</span>
                <a class="btn btn-accent product-buy" data-stripe-link="https://buy.stripe.com/9B628rcCn21r804aZQ2go00" href="mailto:3po@3po3d.com?subject=Comfort%20insole%20order&body=Colour%20(Red%2FBlack)%3A%0AShoe%20size%3A">Buy</a></div>
            </div>
          </div>
          <div class="upload-note" style="margin-top:1.1rem;"><strong>After checkout:</strong> you get a private, secure folder by email to upload your foot scan and confirm your colour. No one else can see your files. <a href="{{ '/forge/order/' | relative_url }}">How upload works &rarr;</a></div>
        </div>
      </div>
    </div>

    <!-- Quote-based products -->
    <div class="section-head" style="margin-top:3rem;">
      <p class="mono-label">Made to order — by quote</p>
      <h2 style="font-size:1.5rem;">Functional &amp; bespoke pieces.</h2>
      <p class="lead">No fixed price — send the details and I&rsquo;ll come back with materials, timeline and a price.</p>
    </div>
    <div class="product-grid">
      <a class="product" href="{{ '/forge/order/?service=fdm' | relative_url }}">
        <div class="media ratio-4-3" data-label="Functional"><div class="media-grid-tex"></div><svg class="ph-glyph" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="7" width="16" height="11" rx="1"/><path d="M4 11h16M9 7V5h6v2"/></svg></div>
        <div class="product-body">
          <span class="product-cat">Functional</span>
          <h3>Parts &amp; Enclosures</h3>
          <p>Brackets, housings, jigs, fixtures and replacement parts — printed in the right material for the job.</p>
          <div class="product-foot"><span class="price">From quote</span><span class="arrow">Order &rarr;</span></div>
        </div>
      </a>
      <a class="product" href="{{ '/forge/order/?service=fdm' | relative_url }}">
        <div class="media ratio-4-3" data-label="Makers"><div class="media-grid-tex"></div><svg class="ph-glyph" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M12 3v18M4 7l8 4 8-4"/></svg></div>
        <div class="product-body">
          <span class="product-cat">Makers</span>
          <h3>Prototypes</h3>
          <p>Fast iteration for product designers and inventors. Hold the idea, test the fit, refine, repeat.</p>
          <div class="product-foot"><span class="price">From quote</span><span class="arrow">Order &rarr;</span></div>
        </div>
      </a>
      <a class="product" href="{{ '/forge/order/?service=commission' | relative_url }}">
        <div class="media ratio-4-3" data-label="Bespoke"><div class="media-grid-tex"></div><svg class="ph-glyph" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v3M5.5 5.5 7.6 7.6M3 12h3M18 12h3M16.4 7.6l2.1-2.1"/><path d="M8 14a4 4 0 1 1 8 0c0 2-1.5 3-1.5 5h-5C9.5 17 8 16 8 14z"/></svg></div>
        <div class="product-body">
          <span class="product-cat">Bespoke</span>
          <h3>Custom Commissions</h3>
          <p>One-off pieces, props, gifts and art objects. Bring the concept; I&rsquo;ll handle model, print and finish.</p>
          <div class="product-foot"><span class="price">From quote</span><span class="arrow">Order &rarr;</span></div>
        </div>
      </a>
    </div>
  </div>
</section>

{% include forge-crosssell.html context="products" %}

<style>
  .insole-explainer { font-size: 0.9rem; color: var(--muted); margin: 0.4rem 0 0.2rem; }
  .insole-explainer strong { color: var(--text); }
  .upload-note { padding: 0.9rem 1.1rem; background: var(--accent-soft); border-left: 3px solid var(--accent); border-radius: 0 var(--radius) var(--radius) 0; font-size: 0.88rem; color: var(--muted); line-height: 1.6; }
  .upload-note strong { color: var(--text); }
  .upload-note a { color: var(--accent); text-decoration: none; font-family: var(--font-mono); font-size: 0.78rem; }
  .insole-buy-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1.25rem; }
  .insole-variant { border: var(--bw) solid var(--hairline); border-radius: var(--radius); padding: 0.9rem 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
  .insole-variant .iv-name { display: block; font-family: var(--font-head); font-weight: 600; font-size: 1.05rem; color: var(--text); }
  .insole-variant .iv-desc { display: block; font-size: 0.8rem; color: var(--muted); line-height: 1.45; margin-top: 0.15rem; }
  .insole-variant .iv-foot { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: auto; }
  .insole-variant .iv-foot .price { font-family: var(--font-head); font-weight: 700; font-size: 1.15rem; color: var(--text); }
  .insole-variant .product-buy { padding: 0.55rem 1.15rem; }
  @media (max-width: 600px) { .insole-cols { grid-template-columns: 1fr !important; } .insole-buy-row { grid-template-columns: 1fr; } }
</style>

<script>
  // Commerce hooks (placeholders until Stripe/Dropbox links are wired — see PREREQUISITES.md).
  (function () {
    document.querySelectorAll('[data-stripe-link]').forEach(function (a) {
      var l = a.getAttribute('data-stripe-link');
      if (l) { a.setAttribute('href', l); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
    document.querySelectorAll('[data-dropbox-request]').forEach(function (a) {
      var l = a.getAttribute('data-dropbox-request');
      if (l) { a.setAttribute('href', l); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  })();
</script>
