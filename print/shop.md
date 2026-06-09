---
layout: default
title: "Shop — 3PO Print"
description: "Finished 3D-printed products from 3PO Print. Fixed-price goods, plus the made-to-fit orthopedic insole."
---

{% include print-nav.html %}

<section class="print-section-head">
  <div class="container">
    <p class="section-label">3PO Print · Shop</p>
    <h1>Finished products.</h1>
    <p class="lead">Fixed-price prints, ready to order. Most ship as-is. The made-to-fit items ask for a scan after checkout — you'll get a private folder by email to upload it.</p>
  </div>
</section>

<section class="shop-wrap">
  <div class="container">
    <div class="shop-grid">

      <!-- ─── INSOLE — real product, Mechanism B (pay → upload scan) ─── -->
      <article class="product-card product-card--feature">
        <div class="product-media product-media--placeholder" aria-hidden="true">
          <span>Insole photo<br>pending</span>
        </div>
        <div class="product-body">
          <p class="product-label">Made to fit · requires scan</p>
          <h3>Orthopedic insole</h3>
          <p>A parametric orthopedic insole, tuned per person — foot shape, arch type, body weight. Soft where comfort matters, firm where support does. Thin enough to fit inside most shoes. Built from the same system as the CAST project.</p>
          <p class="product-price">€<span class="price-amt">—</span></p>

          <!-- TODO P1-02: replace href with the Stripe Payment Link for the insole -->
          <a class="btn btn-accent product-buy"
             href="mailto:3po@3po3d.com?subject=Order%3A%20Orthopedic%20insole&body=I%27d%20like%20to%20order%20the%20custom%20insole.%20Please%20send%20payment%20%2B%20scan%20instructions."
             data-stripe-link="">Order the insole</a>

          <div class="upload-note">
            <strong>After payment:</strong> you'll get an email with your own private, secure folder to upload your foot scan. No one else can see your files. I print it to fit and ship it.
          </div>
        </div>
      </article>

      <!-- ─── TEMPLATE product card — DUPLICATE per real product, fill in, add Stripe link ─── -->
      <article class="product-card">
        <div class="product-media product-media--placeholder" aria-hidden="true">
          <span>Product photo<br>pending</span>
        </div>
        <div class="product-body">
          <p class="product-label">Example · template</p>
          <h3>Product name</h3>
          <p>One or two lines on what it is and why it's worth having. Benefit first. This card is a template — duplicate it for each finished product you list.</p>
          <p class="product-price">€<span class="price-amt">—</span></p>

          <!-- TODO P1-02: replace href with this product's Stripe Payment Link -->
          <a class="btn btn-accent product-buy"
             href="mailto:3po@3po3d.com?subject=Order%20enquiry"
             data-stripe-link="">Buy</a>
        </div>
      </article>

      <article class="product-card">
        <div class="product-media product-media--placeholder" aria-hidden="true">
          <span>Product photo<br>pending</span>
        </div>
        <div class="product-body">
          <p class="product-label">Example · template</p>
          <h3>Product name</h3>
          <p>Another finished product. No upload needed for standard items — buy, pay, it ships.</p>
          <p class="product-price">€<span class="price-amt">—</span></p>
          <!-- TODO P1-02: replace href with this product's Stripe Payment Link -->
          <a class="btn btn-accent product-buy"
             href="mailto:3po@3po3d.com?subject=Order%20enquiry"
             data-stripe-link="">Buy</a>
        </div>
      </article>

    </div>

    <p class="shop-foot-note">
      Card checkout runs through Stripe with an emailed receipt — going live once setup is complete.
      Until then, the buttons open an email order. Looking for a one-off custom part instead?
      <a href="{{ '/print/services/' | relative_url }}">Request a quote →</a>
    </p>
  </div>
</section>

<script>
  // When a Stripe Payment Link is set on a product (data-stripe-link), use it for the buy button.
  // Until then the href fallback (email order) stays in place.
  (function () {
    document.querySelectorAll('.product-buy[data-stripe-link]').forEach(function (a) {
      var link = a.getAttribute('data-stripe-link');
      if (link) { a.setAttribute('href', link); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  })();
</script>
