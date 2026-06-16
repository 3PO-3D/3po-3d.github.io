---
title: "FORGE — Order"
description: "Open the service you need, fill the form in its dropdown, and send the request. You'll get your own private folder by email to drop your files, then I quote it."
permalink: /forge/order/
---

{% include forge-subnav.html %}

{% comment %} Shared bits reused inside each service's own form {% endcomment %}
{% capture hp %}<input type="hidden" name="_secret" value="forge3po"><div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>{% endcapture %}
{% capture shared %}<p class="of-step">Your details</p>
            <label class="of-field"><span class="of-label">Name</span><input type="text" name="name" placeholder="Your name"></label>
            <label class="of-field"><span class="of-label">Email</span><input type="email" name="email" placeholder="you@example.com" required></label>
            <label class="of-field"><span class="of-label">Deadline</span><input type="text" name="deadline" placeholder="e.g. 2 weeks, flexible"></label>
            <label class="of-field"><span class="of-label">Anything else</span><textarea name="notes" rows="3" placeholder="Quantity, finish, the shoe it goes in — anything that helps me quote it right."></textarea></label>
            <div class="folder-note"><strong>No upload needed here.</strong> When you send this, I email you back your own <strong>private, secure folder</strong> to drop your files in (STL, STEP, OBJ, 3MF, or a foot scan) — no one else can see it. Then I quote the job.</div>
            <button type="submit" class="btn btn-accent">Send request &rarr;</button>{% endcapture %}

<section class="section">
  <div class="container" style="max-width:760px;">
    <div class="section-head">
      <p class="mono-label">04 — Order</p>
      <h2>Start an order.</h2>
      <p class="lead">Open the service you need — the whole form drops down under it. I quote it first; you only pay once the price and timeline are agreed. Fixed-price products (the insoles) buy directly on the <a href="{{ '/forge/products/' | relative_url }}" class="inline-link">Products</a> page.</p>
    </div>

    <div class="cart-note">
      <strong>No cart yet — one job at a time.</strong> This sends a single job. Need several? Send them one by one for now — each gets its own quote and email. (Batching is coming.)
    </div>

    <div class="shop" id="svc-acc">

      <div class="shop-row" data-svc="fdm">
        <button type="button" class="shop-head"><span class="shop-title">FDM / FFF Printing</span><span class="shop-tag">Print my file · PLA · PETG · ABS / ASA · TPU</span><span class="shop-toggle" aria-hidden="true"></span></button>
        <div class="shop-body">
          <form class="order-form" data-webhook="" novalidate>
            {{ hp }}<input type="hidden" name="service" value="fdm">
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
            {{ shared }}
          </form>
        </div>
      </div>

      <div class="shop-row" data-svc="scan">
        <button type="button" class="shop-head"><span class="shop-title">3D Scanning</span><span class="shop-tag">Scan a real object into a clean model</span><span class="shop-toggle" aria-hidden="true"></span></button>
        <div class="shop-body">
          <form class="order-form" data-webhook="" novalidate>
            {{ hp }}<input type="hidden" name="service" value="scan">
            <label class="of-field"><span class="of-label">What should I scan?</span><input type="text" name="scan_what" placeholder="object / body part"></label>
            <label class="of-field"><span class="of-label">Approx size</span><input type="text" name="scan_size" placeholder="e.g. 20 × 10 cm"></label>
            <label class="of-field"><span class="of-label">Purpose</span>
              <select name="scan_purpose"><option value="print-ready">Print-ready model</option><option value="reverse-engineer">Reverse-engineer a part</option><option value="archive">Archive / reference</option></select>
            </label>
            <label class="of-field"><span class="of-label">Drop-off or mail-in?</span>
              <select name="scan_delivery"><option>Local drop-off</option><option>Mail it to you</option></select>
            </label>
            {{ shared }}
          </form>
        </div>
      </div>

      <div class="shop-row" data-svc="model">
        <button type="button" class="shop-head"><span class="shop-title">Modeling &amp; Touch-ups</span><span class="shop-tag">Model from scratch, or fix a file</span><span class="shop-toggle" aria-hidden="true"></span></button>
        <div class="shop-body">
          <form class="order-form" data-webhook="" novalidate>
            {{ hp }}<input type="hidden" name="service" value="model">
            <label class="of-field"><span class="of-label">Type</span>
              <select name="model_type"><option value="scratch">Model from scratch</option><option value="fix">Fix / repair a file</option><option value="modify">Modify an existing model</option></select>
            </label>
            <label class="of-field"><span class="of-label">Describe it</span><textarea name="model_desc" rows="3" placeholder="What you need modelled or fixed."></textarea></label>
            <label class="of-check"><input type="checkbox" name="also_print" value="yes"><span>Also print it after modeling <span class="of-hint">(I'll quote the print too)</span></span></label>
            {{ shared }}
          </form>
        </div>
      </div>

      <div class="shop-row" data-svc="commission">
        <button type="button" class="shop-head"><span class="shop-title">Custom Commission</span><span class="shop-tag">One-off bespoke piece</span><span class="shop-toggle" aria-hidden="true"></span></button>
        <div class="shop-body">
          <form class="order-form" data-webhook="" novalidate>
            {{ hp }}<input type="hidden" name="service" value="commission">
            <label class="of-field"><span class="of-label">Describe the piece</span><textarea name="commission_desc" rows="3" placeholder="Concept, size, use, references…"></textarea></label>
            <label class="of-field"><span class="of-label">Budget range</span>
              <select name="commission_budget"><option>Not sure yet</option><option>Under 25 000 Ft</option><option>25 000 – 75 000 Ft</option><option>75 000 Ft +</option></select>
            </label>
            {{ shared }}
          </form>
        </div>
      </div>

    </div>

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
    var acc = document.getElementById('svc-acc');
    var thanks = document.getElementById('order-thanks');
    var rows = Array.prototype.slice.call(document.querySelectorAll('#svc-acc .shop-row'));

    function openService(svc) {
      rows.forEach(function (row) {
        var on = row.getAttribute('data-svc') === svc;
        row.classList.toggle('is-open', on);
        row.querySelector('.shop-head').setAttribute('aria-expanded', on ? 'true' : 'false');
      });
    }
    rows.forEach(function (row) {
      row.querySelector('.shop-head').addEventListener('click', function () {
        openService(row.classList.contains('is-open') ? '' : row.getAttribute('data-svc'));
      });
    });
    var svc = new URLSearchParams(window.location.search).get('service');
    if (svc) openService(svc);

    // Material swatch picker (FDM)
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

    // Each service form submits independently → Make webhook (hidden iframe) or mailto fallback.
    document.querySelectorAll('.order-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (form.querySelector('[name=company]').value) return; // honeypot → bot
        var email = form.querySelector('[name=email]');
        if (!email.value) { email.focus(); return; }
        var wh = form.getAttribute('data-webhook');
        if (wh) {
          form.action = wh; form.method = 'POST'; form.target = 'order_sink'; form.submit();
        } else {
          var fd = new FormData(form), lines = [];
          fd.forEach(function (v, k) { if (v && k.charAt(0) !== '_' && k !== 'company') lines.push(k + ': ' + v); });
          var s = (form.querySelector('[name=service]') || {}).value || '';
          window.location.href = 'mailto:3po@3po3d.com?subject=' + encodeURIComponent('FORGE order — ' + s) + '&body=' + encodeURIComponent(lines.join('\n'));
        }
        acc.hidden = true;
        thanks.hidden = false;
        thanks.scrollIntoView({ behavior: 'smooth' });
      });
    });
  })();
</script>
