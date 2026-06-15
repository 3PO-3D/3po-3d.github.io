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
      <p class="lead">Pick what you need, send your file, and add a few details. I quote it first — you only pay once the price and timeline are agreed. Fixed-price products (the insoles) buy directly on the <a href="{{ '/forge/products/' | relative_url }}" class="inline-link">Products</a> page.</p>
    </div>

    <div class="cart-note">
      <strong>No cart yet — one job at a time.</strong> This form sends a single job. Need several? Send them one by
      one for now — each gets its own quote, upload and email. (Batching jobs into one hand-off is coming.)
    </div>

    <form id="order-form" data-webhook="" novalidate>
      <input type="hidden" name="_secret" value="forge3po">
      <input type="hidden" name="service" id="of-service-val" value="fdm">
      <!-- honeypot: bots fill it; humans never see it -->
      <div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>

      <!-- Step 1 — what do you need -->
      <p class="mono-label of-step">Step 1 — What do you need?</p>
      <div class="svc-pick" id="svc-pick">
        <button type="button" class="svc-card is-active" data-svc="fdm"><span class="svc-name">FDM Printing</span><span class="svc-sub">Print my file</span></button>
        <button type="button" class="svc-card" data-svc="scan"><span class="svc-name">3D Scanning</span><span class="svc-sub">Scan an object</span></button>
        <button type="button" class="svc-card" data-svc="model"><span class="svc-name">Modeling</span><span class="svc-sub">Model or fix a file</span></button>
        <button type="button" class="svc-card" data-svc="commission"><span class="svc-name">Commission</span><span class="svc-sub">Bespoke piece</span></button>
      </div>

      <!-- Step 2 — service-specific fields -->
      <p class="mono-label of-step">Step 2 — Details</p>

      <!-- FDM -->
      <div class="svc-group" data-svc="fdm">
        <div class="of-field">
          <span class="of-label">Material</span>
          <div class="matpick" id="matpick">
            <button type="button" class="matpick-btn" id="matpick-btn"><span class="matpick-cur">Choose a material</span><span class="matpick-caret">▾</span></button>
            <input type="hidden" name="material" id="matpick-val">
            <div class="matpick-panel" id="matpick-panel" hidden>
              {% for m in site.data.materials %}
              <button type="button" class="matpick-opt" data-val="{{ m.name }}"{% if m.availability == 'Made to order' %} data-made="1"{% endif %}>
                <span class="swatch"{% if m.image %} style="background-image:url('{{ m.image | relative_url }}')"{% else %} style="background:{{ m.hex | default: '#999' }}"{% endif %}></span>
                <span class="matpick-name">{{ m.name }}</span>
                {% if m.availability == 'Made to order' %}<span class="mat-badge">Made to order · +{{ m.lead_days | default: 7 }}d</span>{% elsif m.availability == 'Low' %}<span class="mat-badge low">Low stock</span>{% endif %}
              </button>
              {% endfor %}
            </div>
          </div>
          <span class="of-hint">Don't see it? Paste a filament link below and I'll print with that.</span>
        </div>
        <div class="of-field"><span class="of-label">…or bring your own material (link)</span><input type="url" name="byo_material" placeholder="https://… filament you want me to use"></div>
        <div class="of-row">
          <label class="of-field"><span class="of-label">Quantity</span><input type="number" name="quantity" min="1" value="1"></label>
          <label class="of-field"><span class="of-label">Colour note</span><input type="text" name="colour_note" placeholder="if it matters"></label>
        </div>
        <label class="of-check"><input type="checkbox" name="postprocess" value="yes"><span>Add post-processing — sanding, priming, paint, assembly <span class="of-hint">(priced separately)</span></span></label>
      </div>

      <!-- Scanning -->
      <div class="svc-group" data-svc="scan" hidden>
        <label class="of-field"><span class="of-label">What should I scan?</span><input type="text" name="scan_what" placeholder="object / body part"></label>
        <div class="of-row">
          <label class="of-field"><span class="of-label">Approx size</span><input type="text" name="scan_size" placeholder="e.g. 20 × 10 cm"></label>
          <label class="of-field"><span class="of-label">Purpose</span>
            <select name="scan_purpose"><option value="print-ready">Print-ready model</option><option value="reverse-engineer">Reverse-engineer a part</option><option value="archive">Archive / reference</option></select>
          </label>
        </div>
        <label class="of-field"><span class="of-label">Drop-off or mail-in?</span>
          <select name="scan_delivery"><option>Local drop-off</option><option>Mail it to you</option></select>
        </label>
      </div>

      <!-- Modeling -->
      <div class="svc-group" data-svc="model" hidden>
        <label class="of-field"><span class="of-label">Type</span>
          <select name="model_type"><option value="scratch">Model from scratch</option><option value="fix">Fix / repair a file</option><option value="modify">Modify an existing model</option></select>
        </label>
        <label class="of-field"><span class="of-label">Describe it</span><textarea name="model_desc" rows="3" placeholder="What you need modelled or fixed."></textarea></label>
        <label class="of-check"><input type="checkbox" name="also_print" value="yes"><span>Also print it after modeling <span class="of-hint">(I'll quote the print too)</span></span></label>
      </div>

      <!-- Commission -->
      <div class="svc-group" data-svc="commission" hidden>
        <label class="of-field"><span class="of-label">Describe the piece</span><textarea name="commission_desc" rows="3" placeholder="Concept, size, use, references…"></textarea></label>
        <label class="of-field"><span class="of-label">Budget range</span>
          <select name="commission_budget"><option>Not sure yet</option><option>Under 25 000 Ft</option><option>25 000 – 75 000 Ft</option><option>75 000 Ft +</option></select>
        </label>
      </div>

      <!-- Upload panel — shown for services that need a file -->
      <div class="upload-hero" id="upload-hero" data-svc="fdm model commission">
        <div class="upload-hero-text">
          <p class="mono-label">Send your file</p>
          <h3 id="upload-title">Drop your model into a private folder.</h3>
          <p>You get your own secure upload folder — STL, STEP, OBJ, 3MF, or a foot scan. No account; no one else can see it.</p>
        </div>
        <!-- TODO: set data-dropbox-request to the Dropbox File Request link (PREREQUISITES). Falls back to email. -->
        <a class="btn btn-accent upload-btn" data-dropbox-request="" href="mailto:3po@3po3d.com?subject=Need%20an%20upload%20link&body=What%20I%20want%20made%3A">Upload your file &rarr;</a>
      </div>

      <!-- Step 3 — contact -->
      <p class="mono-label of-step">Step 3 — Your details</p>
      <div class="of-row">
        <label class="of-field"><span class="of-label">Name</span><input type="text" name="name" placeholder="Your name"></label>
        <label class="of-field"><span class="of-label">Email</span><input type="email" name="email" placeholder="you@example.com" required></label>
      </div>
      <label class="of-field"><span class="of-label">Deadline</span><input type="text" name="deadline" placeholder="e.g. 2 weeks, flexible"></label>
      <label class="of-field"><span class="of-label">Anything else</span><textarea name="notes" rows="3" placeholder="Quantity, finish, the shoe it goes in — anything that helps me quote it right."></textarea></label>

      <button type="submit" class="btn btn-accent">Send request &rarr;</button>
      <p class="of-foot">Files go in the private upload folder above — this just sends me the details to quote.</p>
    </form>

    <div class="order-thanks" id="order-thanks" hidden>
      <p class="mono-label">Sent ✓</p>
      <h3>Got it — check your email.</h3>
      <p>You'll get your private upload link and, once I've seen the file, a fixed quote. Nothing prints until you approve.</p>
    </div>

    <div class="next-steps">
      <p class="mono-label" style="margin-bottom:1rem;">What happens next</p>
      <div class="steps">
        <div class="step on"><div class="step-n">1</div><div><h3>Upload &amp; send</h3><p>Your file lands in your private folder; I get your details.</p></div></div>
        <div class="step"><div class="step-n">2</div><div><h3>I quote it</h3><p>Material, timeline and a fixed price — usually same day.</p></div></div>
        <div class="step"><div class="step-n">3</div><div><h3>You approve &amp; pay</h3><p>A secure card invoice. Nothing prints until you say go.</p></div></div>
        <div class="step"><div class="step-n">4</div><div><h3>Print, finish, ship</h3><p>Into the queue — collected locally or packed and shipped.</p></div></div>
      </div>
    </div>
  </div>
</section>

{% include forge-crosssell.html context="order" %}

<iframe name="order_sink" hidden></iframe>

<script>
  (function () {
    var form = document.getElementById('order-form');
    if (!form) return;
    var svcVal = document.getElementById('of-service-val');
    var title  = document.getElementById('order-title');
    var upload = document.getElementById('upload-hero');
    var LABELS = { fdm: 'Order a print', scan: 'Book a 3D scan', model: 'Request modeling', commission: 'Commission a custom piece' };

    function setService(svc) {
      if (!LABELS[svc]) svc = 'fdm';
      svcVal.value = svc;
      document.querySelectorAll('.svc-card').forEach(function (c) { c.classList.toggle('is-active', c.getAttribute('data-svc') === svc); });
      document.querySelectorAll('.svc-group').forEach(function (g) { g.hidden = g.getAttribute('data-svc') !== svc; });
      upload.hidden = upload.getAttribute('data-svc').indexOf(svc) === -1;
      if (title && LABELS[svc]) title.textContent = LABELS[svc] + '.';
    }
    document.querySelectorAll('.svc-card').forEach(function (c) {
      c.addEventListener('click', function () { setService(c.getAttribute('data-svc')); });
    });

    // Prefill from ?service=
    var svc = new URLSearchParams(window.location.search).get('service');
    setService(svc || 'fdm');

    // Material swatch picker
    var btn = document.getElementById('matpick-btn');
    var panel = document.getElementById('matpick-panel');
    var val = document.getElementById('matpick-val');
    var cur = document.querySelector('#matpick .matpick-cur');
    if (btn) {
      btn.addEventListener('click', function () { panel.hidden = !panel.hidden; });
      panel.querySelectorAll('.matpick-opt').forEach(function (opt) {
        opt.addEventListener('click', function () {
          val.value = opt.getAttribute('data-val');
          cur.textContent = opt.getAttribute('data-val') + (opt.getAttribute('data-made') ? ' · made to order (+7d)' : '');
          panel.hidden = true;
        });
      });
      document.addEventListener('click', function (e) { if (!e.target.closest('#matpick')) panel.hidden = true; });
    }

    // Submit — POST to the Make webhook (hidden iframe, no CORS) when set; else mailto fallback.
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('[name=company]').value) return; // honeypot → bot, drop silently
      if (!form.querySelector('[name=email]').value) { form.querySelector('[name=email]').focus(); return; }
      var wh = form.getAttribute('data-webhook');
      if (wh) {
        form.action = wh; form.method = 'POST'; form.target = 'order_sink'; form.submit();
      } else {
        var fd = new FormData(form), lines = [];
        fd.forEach(function (v, k) { if (v && k.charAt(0) !== '_' && k !== 'company') lines.push(k + ': ' + v); });
        window.location.href = 'mailto:3po@3po3d.com?subject=' + encodeURIComponent('FORGE order — ' + svcVal.value) + '&body=' + encodeURIComponent(lines.join('\n'));
      }
      form.hidden = true;
      document.getElementById('order-thanks').hidden = false;
      document.getElementById('order-thanks').scrollIntoView({ behavior: 'smooth' });
    });

    // Commerce hooks (placeholders until Dropbox/Stripe links are wired — see PREREQUISITES.md).
    document.querySelectorAll('[data-dropbox-request]').forEach(function (a) {
      var l = a.getAttribute('data-dropbox-request');
      if (l) { a.setAttribute('href', l); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  })();
</script>
