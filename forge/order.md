---
title: "FORGE — Order"
description: "Pick a service, add a few details, send the request. You'll get your own private folder by email to drop your files, then I quote it."
permalink: /forge/order/
---

{% include forge-subnav.html %}

<section class="section">
  <div class="container" style="max-width:760px;">
    <div class="section-head">
      <p class="mono-label">04 — Order</p>
      <h2 id="order-title">Start an order.</h2>
      <p class="lead">Open the service you need, add a few details, and send the request. I quote it first — you only pay once the price and timeline are agreed. Fixed-price products (the insoles) buy directly on the <a href="{{ '/forge/products/' | relative_url }}" class="inline-link">Products</a> page.</p>
    </div>

    <div class="cart-note">
      <strong>No cart yet — one job at a time.</strong> This sends a single job. Need several? Send them one by one for now — each gets its own quote and email. (Batching is coming.)
    </div>

    <form id="order-form" data-webhook="" novalidate>
      <input type="hidden" name="_secret" value="forge3po">
      <input type="hidden" name="service" id="of-service-val" value="">
      <div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>

      <p class="of-step">Step 1 — What do you need?</p>
      <div class="shop" id="svc-acc">

        <div class="shop-row" data-svc="fdm">
          <button type="button" class="shop-head"><span class="shop-title">FDM / FFF Printing</span><span class="shop-tag">Print my file · PLA · PETG · ABS / ASA · TPU</span><span class="shop-toggle" aria-hidden="true"></span></button>
          <div class="shop-body">
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
            <label class="of-field"><span class="of-label">…or bring your own material (link)</span><input type="url" name="byo_material" placeholder="https://… filament you want me to use"></label>
            <label class="of-field"><span class="of-label">Quantity</span><input type="number" name="quantity" min="1" value="1"></label>
            <label class="of-field"><span class="of-label">Colour note</span><input type="text" name="colour_note" placeholder="if it matters"></label>
            <label class="of-check"><input type="checkbox" name="postprocess" value="yes"><span>Add post-processing — sanding, priming, paint, assembly <span class="of-hint">(priced separately)</span></span></label>
          </div>
        </div>

        <div class="shop-row" data-svc="scan">
          <button type="button" class="shop-head"><span class="shop-title">3D Scanning</span><span class="shop-tag">Scan a real object into a clean model</span><span class="shop-toggle" aria-hidden="true"></span></button>
          <div class="shop-body">
            <label class="of-field"><span class="of-label">What should I scan?</span><input type="text" name="scan_what" placeholder="object / body part"></label>
            <label class="of-field"><span class="of-label">Approx size</span><input type="text" name="scan_size" placeholder="e.g. 20 × 10 cm"></label>
            <label class="of-field"><span class="of-label">Purpose</span>
              <select name="scan_purpose"><option value="print-ready">Print-ready model</option><option value="reverse-engineer">Reverse-engineer a part</option><option value="archive">Archive / reference</option></select>
            </label>
            <label class="of-field"><span class="of-label">Drop-off or mail-in?</span>
              <select name="scan_delivery"><option>Local drop-off</option><option>Mail it to you</option></select>
            </label>
          </div>
        </div>

        <div class="shop-row" data-svc="model">
          <button type="button" class="shop-head"><span class="shop-title">Modeling &amp; Touch-ups</span><span class="shop-tag">Model from scratch, or fix a file</span><span class="shop-toggle" aria-hidden="true"></span></button>
          <div class="shop-body">
            <label class="of-field"><span class="of-label">Type</span>
              <select name="model_type"><option value="scratch">Model from scratch</option><option value="fix">Fix / repair a file</option><option value="modify">Modify an existing model</option></select>
            </label>
            <label class="of-field"><span class="of-label">Describe it</span><textarea name="model_desc" rows="3" placeholder="What you need modelled or fixed."></textarea></label>
            <label class="of-check"><input type="checkbox" name="also_print" value="yes"><span>Also print it after modeling <span class="of-hint">(I'll quote the print too)</span></span></label>
          </div>
        </div>

        <div class="shop-row" data-svc="commission">
          <button type="button" class="shop-head"><span class="shop-title">Custom Commission</span><span class="shop-tag">One-off bespoke piece</span><span class="shop-toggle" aria-hidden="true"></span></button>
          <div class="shop-body">
            <label class="of-field"><span class="of-label">Describe the piece</span><textarea name="commission_desc" rows="3" placeholder="Concept, size, use, references…"></textarea></label>
            <label class="of-field"><span class="of-label">Budget range</span>
              <select name="commission_budget"><option>Not sure yet</option><option>Under 25 000 Ft</option><option>25 000 – 75 000 Ft</option><option>75 000 Ft +</option></select>
            </label>
          </div>
        </div>

      </div>

      <div class="of-shared" id="of-shared" hidden>
        <p class="of-step">Step 2 — Your details</p>
        <label class="of-field"><span class="of-label">Name</span><input type="text" name="name" placeholder="Your name"></label>
        <label class="of-field"><span class="of-label">Email</span><input type="email" name="email" placeholder="you@example.com" required></label>
        <label class="of-field"><span class="of-label">Deadline</span><input type="text" name="deadline" placeholder="e.g. 2 weeks, flexible"></label>
        <label class="of-field"><span class="of-label">Anything else</span><textarea name="notes" rows="3" placeholder="Quantity, finish, the shoe it goes in — anything that helps me quote it right."></textarea></label>

        <div class="folder-note"><strong>No upload needed here.</strong> When you send this, I email you back your own <strong>private, secure folder</strong> to drop your files in (STL, STEP, OBJ, 3MF, or a foot scan) — no one else can see it. Then I quote the job.</div>

        <button type="submit" class="btn btn-accent">Send request &rarr;</button>
      </div>
    </form>

    <div class="order-thanks" id="order-thanks" hidden>
      <p class="mono-label">Sent ✓</p>
      <h3>Got it — check your email.</h3>
      <p>You'll get your private upload folder by email in a few minutes. Drop your files in, and once I've seen them I send a fixed quote. Nothing prints until you approve.</p>
    </div>

    <div class="next-steps">
      <p class="mono-label" style="margin-bottom:1rem;">What happens next</p>
      <div class="steps">
        <div class="step on"><div class="step-n">1</div><div><h3>Send the request</h3><p>I email you a private folder for your files + get your details.</p></div></div>
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
    var shared = document.getElementById('of-shared');
    var title  = document.getElementById('order-title');
    var rows   = Array.prototype.slice.call(document.querySelectorAll('#svc-acc .shop-row'));
    var LABELS = { fdm: 'Order a print', scan: 'Book a 3D scan', model: 'Request modeling', commission: 'Commission a custom piece' };

    // Enable only the open service's inputs (so we don't submit other services' fields).
    function syncInputs(openSvc) {
      rows.forEach(function (row) {
        var on = row.getAttribute('data-svc') === openSvc;
        row.querySelectorAll('input, select, textarea').forEach(function (el) { el.disabled = !on; });
      });
    }
    function openService(svc) {
      var matched = false;
      rows.forEach(function (row) {
        var on = row.getAttribute('data-svc') === svc;
        row.classList.toggle('is-open', on);
        row.querySelector('.shop-head').setAttribute('aria-expanded', on ? 'true' : 'false');
        if (on) matched = true;
      });
      if (matched) {
        svcVal.value = svc;
        shared.hidden = false;
        if (title && LABELS[svc]) title.textContent = LABELS[svc] + '.';
      } else {
        svcVal.value = '';
        shared.hidden = true;
        if (title) title.textContent = 'Start an order.';
      }
      syncInputs(matched ? svc : '');
    }
    rows.forEach(function (row) {
      row.querySelector('.shop-head').addEventListener('click', function () {
        openService(row.classList.contains('is-open') ? '' : row.getAttribute('data-svc'));
      });
    });

    // Open from ?service= (else everything closed).
    var svc = new URLSearchParams(window.location.search).get('service');
    syncInputs('');
    if (svc && LABELS[svc]) openService(svc);

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
      if (!svcVal.value) return;
      var email = form.querySelector('[name=email]');
      if (!email.value) { email.focus(); return; }
      var wh = form.getAttribute('data-webhook');
      if (wh) {
        form.action = wh; form.method = 'POST'; form.target = 'order_sink'; form.submit();
      } else {
        var fd = new FormData(form), lines = [];
        fd.forEach(function (v, k) { if (v && k.charAt(0) !== '_' && k !== 'company') lines.push(k + ': ' + v); });
        window.location.href = 'mailto:3po@3po3d.com?subject=' + encodeURIComponent('FORGE order — ' + svcVal.value) + '&body=' + encodeURIComponent(lines.join('\n'));
      }
      form.hidden = true;
      var thanks = document.getElementById('order-thanks');
      thanks.hidden = false;
      thanks.scrollIntoView({ behavior: 'smooth' });
    });
  })();
</script>
