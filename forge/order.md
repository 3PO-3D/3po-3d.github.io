---
title: "FORGE — Order"
description: "Send a file and a few details. Upload is right here — your foot scan or model goes into a private folder, then I quote it."
permalink: /forge/order/
---

{% include forge-subnav.html %}

<section class="section">
  <div class="container" style="max-width:880px;">
    <div class="section-head">
      <p class="mono-label">04 — Order</p>
      <h2 id="order-title">Start an order.</h2>
      <p class="lead">Send your file and a few details. I quote it first — you only pay once the price and timeline are agreed. Fixed-price products (like the insoles) buy directly on the <a href="{{ '/forge/products/' | relative_url }}" class="inline-link">Products</a> page.</p>
    </div>

    <div class="cart-note">
      <strong>No cart yet — one job at a time.</strong> This form sends a single job. Need several? Send them
      one by one for now — each gets its own quote, upload and email. (Batching jobs into one hand-off is coming.)
    </div>

    <!-- Upload is the centrepiece -->
    <div class="upload-hero">
      <div class="upload-hero-text">
        <p class="mono-label">Step 1 — Send your file</p>
        <h3>Drop your model into a private folder.</h3>
        <p>Click below and you get your own secure upload folder — STL, STEP, OBJ, 3MF, or a foot scan. No account, no one else can see it.</p>
      </div>
      <!-- TODO: set data-dropbox-request to the Dropbox File Request link (see PREREQUISITES.md). Falls back to email. -->
      <a class="btn btn-accent upload-btn" data-dropbox-request="" href="mailto:3po@3po3d.com?subject=Need%20an%20upload%20link&body=What%20I%20want%20made%3A">Upload your file &rarr;</a>
    </div>

    <!-- Step 2 — details -->
    <form class="order-form" id="order-form" action="mailto:3po@3po3d.com" method="post" enctype="text/plain">
      <p class="mono-label" style="margin-bottom:1rem;">Step 2 — Tell me about the job</p>

      <label class="of-field">
        <span class="of-label">Service</span>
        <select name="service" id="of-service">
          <option value="fdm">FDM / FFF Printing — print my file</option>
          <option value="scan">3D Scanning — scan a real object</option>
          <option value="model">Modeling &amp; Touch-ups — model or fix a file</option>
          <option value="commission">Custom Commission — bespoke piece</option>
        </select>
      </label>

      <label class="of-field">
        <span class="of-label">Material <span class="of-hint">(if you know — otherwise I&rsquo;ll advise)</span></span>
        <select name="material">
          <option value="">No preference</option>
          <option>PLA</option><option>PETG</option><option>ABS / ASA</option><option>TPU (flexible)</option>
        </select>
      </label>

      <label class="of-check">
        <input type="checkbox" name="postprocess" value="yes">
        <span>Add post-processing — sanding, priming, paint, assembly <span class="of-hint">(priced separately)</span></span>
      </label>

      <div class="of-row">
        <label class="of-field"><span class="of-label">Deadline</span><input type="text" name="deadline" placeholder="e.g. 2 weeks, flexible"></label>
        <label class="of-field"><span class="of-label">Your email</span><input type="email" name="email" placeholder="you@example.com"></label>
      </div>

      <label class="of-field">
        <span class="of-label">Notes</span>
        <textarea name="notes" rows="4" placeholder="Quantity, colour, finish, the shoe it goes in, anything that helps me quote it right."></textarea>
      </label>

      <button type="submit" class="btn btn-accent">Send request &rarr;</button>
      <p class="of-foot">Attach nothing here — your files go in the private upload folder above. This just sends me the details to quote.</p>
    </form>

    <!-- What happens next -->
    <div class="next-steps">
      <p class="mono-label" style="margin-bottom:1rem;">What happens next</p>
      <div class="steps">
        <div class="step on"><div class="step-n">1</div><div><h3>Upload &amp; send</h3><p>Your file lands in your private folder; I get your details.</p></div></div>
        <div class="step"><div class="step-n">2</div><div><h3>I quote it</h3><p>Material, timeline and a fixed price back to you — usually same day.</p></div></div>
        <div class="step"><div class="step-n">3</div><div><h3>You approve &amp; pay</h3><p>A secure card invoice. Nothing prints until you say go.</p></div></div>
        <div class="step"><div class="step-n">4</div><div><h3>Print, finish, ship</h3><p>Into the queue — collected locally or packed and shipped.</p></div></div>
      </div>
    </div>
  </div>
</section>

{% include forge-crosssell.html context="order" %}

<script>
  (function () {
    // Prefill the service from ?service= and tailor the heading.
    var params = new URLSearchParams(window.location.search);
    var svc = params.get('service');
    var LABELS = { fdm: 'Order a print', scan: 'Book a 3D scan', model: 'Request modeling', commission: 'Commission a custom piece' };
    var sel = document.getElementById('of-service');
    if (svc && sel) {
      var opt = sel.querySelector('option[value="' + svc + '"]');
      if (opt) sel.value = svc;
      var title = document.getElementById('order-title');
      if (title && LABELS[svc]) title.textContent = LABELS[svc] + '.';
    }
    // Commerce hooks (placeholders until Dropbox/Stripe links are wired — see PREREQUISITES.md).
    document.querySelectorAll('[data-dropbox-request]').forEach(function (a) {
      var l = a.getAttribute('data-dropbox-request');
      if (l) { a.setAttribute('href', l); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  })();
</script>
