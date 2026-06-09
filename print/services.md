---
layout: default
title: "Custom printing service — 3PO Print"
description: "Send a 3D model, get a quote, and have it printed. FDM and SLA, modeling and touch-ups, per-job materials and finishes."
---

{% include print-nav.html %}

<section class="print-section-head">
  <div class="container">
    <p class="section-label">3PO Print · Services</p>
    <h1>Send a model.<br>Get it made.</h1>
    <p class="lead">Custom jobs are priced per file — the model, the material, the finish, the tolerances. Tell me what you need below. I review it, send a quote, and once you approve and pay, you upload the file to your own private folder and it gets printed.</p>
  </div>
</section>

<hr class="sep-major">

<section>
  <div class="container">
    <p class="section-label">What I offer</p>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">PRINT</div>
        <h3>FDM &amp; SLA printing</h3>
        <p>From a print-ready model to a finished part. Functional FDM or high-detail resin, your call or my recommendation.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">FIX</div>
        <h3>Touch-ups &amp; prep</h3>
        <p>Non-manifold mesh, wrong scale, won't slice cleanly? I repair and prep files so they print right the first time.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">CAD</div>
        <h3>Modeling from scratch</h3>
        <p>No file yet? Describe the part or send a sketch and I'll model it to spec before printing.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">FINISH</div>
        <h3>Finishing</h3>
        <p>Sanding, priming, and assembly for parts that need to look or fit a certain way.</p>
      </div>
    </div>
  </div>
</section>

<hr class="sep-major">

<section>
  <div class="container">
    <p class="section-label">Materials</p>
    <!-- TODO: confirm the exact filament/resin list Bence offers (see PREREQUISITES §5) -->
    <p class="lead materials-lead">A working set — tell me if you need something specific and I'll source it.</p>
    <div class="filament-list">
      <span class="badge future">PLA</span>
      <span class="badge future">PETG</span>
      <span class="badge future">ABS</span>
      <span class="badge future">ASA</span>
      <span class="badge future">TPU (flexible)</span>
      <span class="badge future">Standard resin</span>
      <span class="badge future">Tough resin</span>
    </div>
  </div>
</section>

<hr class="sep-major">

<section>
  <div class="container">
    <p class="section-label">How to order a custom job</p>
    <div class="install-steps">
      <div class="step"><div class="step-num"></div><div>
        <h3>Tell me about the job</h3>
        <p>Fill in the form below — what it is, material, quantity, deadline. Attach a reference if you have one.</p>
      </div></div>
      <div class="step"><div class="step-num"></div><div>
        <h3>Get a quote</h3>
        <p>I review the details and email you a price and timeline, with a secure Stripe payment link.</p>
      </div></div>
      <div class="step"><div class="step-num"></div><div>
        <h3>Approve, pay &amp; upload</h3>
        <p>Pay the link, then upload your model to the private folder I send you. Only you and I can see it.</p>
      </div></div>
      <div class="step"><div class="step-num"></div><div>
        <h3>Print &amp; ship</h3>
        <p>I print, check, and ship — keeping you posted by email.</p>
      </div></div>
    </div>
  </div>
</section>

<hr class="sep-major">

<section class="intake-section">
  <div class="container">
    <p class="section-label">Request a quote</p>

    <!-- TODO P1-04: replace this slot with the Tally/Formspree embed.
         The form should capture: name, email, job type, material, quantity, deadline, notes,
         and (optionally) a file/reference. On submit, the Make scenario creates a Notion lead
         task + a private Dropbox folder, and emails the customer. -->
    <div class="intake-slot" id="intake-slot">
      <p class="intake-slot__title">Quote form goes here</p>
      <p class="intake-slot__note">
        The intake form (name, email, job type, material, quantity, deadline, notes) will be embedded here
        once it's connected. Until then, start your quote by email — include as much detail as you can.
      </p>
      <a class="btn btn-accent"
         href="mailto:3po@3po3d.com?subject=Custom%20print%20quote&body=What%20it%20is%3A%0AMaterial%3A%0AQuantity%3A%0ADeadline%3A%0ANotes%3A%0A%0A(You%20can%20attach%20your%20model%20or%20a%20reference.)">Start a quote by email</a>
    </div>

    <div class="upload-block">
      <p class="upload-block__label">Already have a model to send?</p>
      <p class="upload-block__text">If we've agreed on a job, drop your file in the secure upload folder. Big files are fine.</p>
      <!-- TODO P1-03: replace href with the Dropbox File Request link (PREREQUISITES §2A) -->
      <a class="btn btn-outline upload-block__btn"
         href="mailto:3po@3po3d.com?subject=Need%20upload%20link"
         data-dropbox-request="">Get an upload link</a>
    </div>
  </div>
</section>

<script>
  (function () {
    var u = document.querySelector('.upload-block__btn[data-dropbox-request]');
    if (u) { var l = u.getAttribute('data-dropbox-request'); if (l) { u.setAttribute('href', l); u.setAttribute('target', '_blank'); u.setAttribute('rel', 'noopener'); } }
  })();
</script>
