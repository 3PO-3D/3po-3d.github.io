---
title: "FORGE — Services"
description: "FDM printing, 3D scanning and modeling — stack what your job needs, see how the workshop works, and request a quote on one page."
permalink: /forge/services/
---

{% include forge-subnav.html %}

<link rel="stylesheet" href="{{ '/assets/work-order.css' | relative_url }}">

<style>
  /* ── Material & colour picker ── */
  .mat-types { display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.6rem; }
  .mat-type { font-family:var(--font-mono); font-size:0.7rem; letter-spacing:0.08em; text-transform:uppercase; padding:0.45rem 0.8rem; border:var(--bw) solid var(--hairline); border-radius:var(--radius); background:var(--bg); color:var(--muted); cursor:pointer; transition:background .15s,border-color .15s,color .15s; }
  .mat-type:hover { border-color:var(--accent); color:var(--text); }
  .mat-type.is-active { background:var(--accent); border-color:var(--accent); color:#fff; }
  .mat-picker { border:var(--bw) solid var(--hairline); border-radius:var(--radius); padding:0.7rem; margin-bottom:0.5rem; }
  .mat-search { width:100%; margin-bottom:0.7rem; font-family:var(--font-body); font-size:0.9rem; padding:0.5rem 0.7rem; border:var(--bw) solid var(--hairline); border-radius:var(--radius); background:var(--bg); color:var(--text); }
  .mat-search:focus { outline:none; border-color:var(--accent); }
  .mat-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(84px,1fr)); gap:0.5rem; max-height:320px; overflow-y:auto; }
  .mat-swatch { position:relative; display:flex; flex-direction:column; align-items:center; gap:0.25rem; padding:0.35rem; border:var(--bw) solid var(--hairline); border-radius:var(--radius); background:transparent; cursor:pointer; transition:border-color .15s,transform .1s; }
  .mat-swatch:hover { border-color:var(--accent); transform:translateY(-1px); }
  .mat-swatch.is-active { border-color:var(--accent); box-shadow:0 0 0 2px var(--accent); }
  /* in-stock = highlighted (white card + green dot); out-of-stock stays plain */
  .mat-swatch.in-stock { background:#fff; border-color:var(--text); }
  .mat-swatch.in-stock::after { content:''; position:absolute; top:5px; right:5px; width:7px; height:7px; border-radius:50%; background:#3aaa5e; box-shadow:0 0 0 2px #fff; }
  .mat-swatch img { width:100%; aspect-ratio:1; object-fit:cover; border-radius:calc(var(--radius) - 2px); background:var(--surface-2); }
  .mat-swatch__c { font-size:0.62rem; line-height:1.2; color:var(--muted); text-align:center; }
  .mat-selected { display:flex; align-items:center; gap:0.6rem; font-size:0.88rem; color:var(--text); }
  .mat-selected strong { color:var(--accent); }
  .mat-clear { font-family:var(--font-mono); font-size:0.65rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--accent); background:none; border:none; cursor:pointer; text-decoration:underline; padding:0; }
</style>

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">01 — Services</p>
      <h2>Everything from the model to the finished surface.</h2>
      <p class="lead">A complete FDM pipeline. Come in at any stage — a sketch, an STL, a broken part, or a foot to scan — and pick up a finished object. Read what each service does, then stack the ones your job needs into a single quote request below.</p>
    </div>

    <div class="cart-note">
      <strong>One quote, stacked services.</strong> A single job can combine several services — scan it,
      model it, print it — and you&rsquo;ll get <strong>one quote</strong> covering the lot. Separate jobs
      still go in as separate requests. There&rsquo;s no upfront price on services: I quote it first, you
      approve, then it prints.
    </div>

    <!-- CTA card straight after the intro -->
    <div class="order-band" style="margin:1.5rem 0 2.5rem;">
      <div>
        <p class="ob-label">Ready when you are</p>
        <h3>Know what you need? Jump to the quote.</h3>
        <p>Pick your services, add a few details, and send it. I reply with materials, timeline and a fixed price.</p>
      </div>
      <div class="hero-cta" style="margin:0;">
        <a href="#order" class="btn btn-accent" data-start-order>Start a quote →</a>
      </div>
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
            <li><strong>Finishing is built into the order.</strong> Every print is cleaned up to an acceptable standard by default. Want more — heavy sanding, priming, paint, multi-part assembly? Tick <em>Add finishing</em> when you order and describe it; it&rsquo;s custom-priced on top.</li>
          </ul>
          <button class="btn btn-accent" type="button" data-start-order data-svc="fdm">Order a print &rarr;</button>
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
            <li>Pairs naturally with printing or modeling: scan &rarr; refine &rarr; print, all in one place. <strong>Add a scan and I&rsquo;ll include modeling automatically</strong> — a raw scan always needs cleanup before it prints.</li>
          </ul>
          <button class="btn btn-accent" type="button" data-start-order data-svc="scan">Book a scan &rarr;</button>
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
          <button class="btn btn-accent" type="button" data-start-order data-svc="model">Request modeling &rarr;</button>
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
            <li>Often paired with a printed piece: animate it, then print the hero prop. Tick it below to bundle it into a workshop quote, or browse the reel first.</li>
          </ul>
          <a class="btn btn-outline" href="{{ '/portfolio/' | relative_url }}">See the Portfolio &rarr;</a>
          <button class="btn btn-accent" type="button" data-start-order data-svc="animation">Add animation &rarr;</button>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ─── Process (merged from the old Process page) ─── -->
<section class="section" id="process" style="border-top: var(--bw) solid var(--hairline);">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">How it works</p>
      <h2>How a job moves through the workshop.</h2>
      <p class="lead">Five stages, fully in-house. You can jump in at any of them — and you always see a fixed price before anything prints.</p>
    </div>

    <div style="display:grid; grid-template-columns: 1.15fr 0.85fr; gap:3.5rem; align-items:start;" class="process-cols">
      <div class="steps">
        <div class="step on"><div class="step-n">1</div><div><h3>Scan or Model</h3><p>Start from your file, or I scan a real object / model it from scratch. Everything is repaired and made watertight before slicing.</p></div></div>
        <div class="step"><div class="step-n">2</div><div><h3>Slice &amp; Quote</h3><p>Material, infill, orientation and supports are dialled in. You get a fixed price and timeline before anything prints.</p></div></div>
        <div class="step"><div class="step-n">3</div><div><h3>Print</h3><p>Run on the right machine for the part — large-format for big work, the enclosed TPU-tuned machine for flexibles. Big parts come off in one piece.</p></div></div>
        <div class="step"><div class="step-n">4</div><div><h3>Finish</h3><p>Every print is cleaned up by default; optional extra finishing covers heavy sanding, priming, paint and multi-part assembly.</p></div></div>
        <div class="step"><div class="step-n">5</div><div><h3>Hand-Off</h3><p>Collected locally, or packed and shipped. Source files returned on request.</p></div></div>
      </div>

      <aside>
        <p class="mono-label" style="margin-bottom:1rem;">Workshop Spec</p>
        <div class="spec-stack">
          <div class="spec-card"><span class="k">Large format</span><span class="v">Sovol SV08 Max — 500 × 500 × 500 mm, open</span></div>
          <div class="spec-card"><span class="k">Flexible / enclosed</span><span class="v">Creality K1 Max — 300 × 300 × 300 mm, TPU-tuned</span></div>
          <div class="spec-card"><span class="k">Process</span><span class="v">FDM / FFF (filament)</span></div>
          <div class="spec-card"><span class="k">Materials</span><span class="v">PLA, PETG, ABS, ASA, TPU</span></div>
          <div class="spec-card"><span class="k">Machine choice</span><span class="v">Automatic — picked by size &amp; material</span></div>
        </div>
        <p class="mono-label" style="margin:1.75rem 0 1rem;">Good to know</p>
        <div class="spec-stack">
          <div class="spec-card"><span class="k">Turnaround</span><span class="v">Typically 1–5 days after the quote is approved</span></div>
          <div class="spec-card"><span class="k">Shipping</span><span class="v">Local pickup, or packed &amp; shipped (charged separately)</span></div>
          <div class="spec-card"><span class="k">Custom work</span><span class="v">Bespoke / scan-based items: adjustment reprints, not refunds</span></div>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- ─── Order form (merged from the old Order page) ─── -->
<section class="section" id="order" style="border-top: var(--bw) solid var(--hairline);">
  <div class="container" style="max-width:760px;">
    <div class="section-head">
      <p class="mono-label">02 — Request a quote</p>
      <h2>Build your job.</h2>
      <p class="lead">Tick every service the job needs — they stack into one quote. Add the details, and I&rsquo;ll come back with materials, timeline and a fixed price. After you send it, I email you a private, secure folder to drop your files in. Fixed-price products (the insoles) buy on the <a href="{{ '/forge/products/' | relative_url }}" style="color:var(--accent);text-decoration:none;">Products</a> page.</p>
    </div>

    <form id="order-form" data-webhook="https://hook.eu1.make.com/u91iw4wqrdqdnjydmg2ttsi56y15c1a9" novalidate>
      <input type="hidden" name="_secret" value="forge3po">
      <input type="hidden" name="services" value="">
      <div class="hp" aria-hidden="true"><label for="of_hp_field">Leave this field empty</label><input type="text" id="of_hp_field" name="of_hp_field" tabindex="-1" autocomplete="off"></div>
      <div class="of-wrap of">
        <div class="of-formbody">

          <!-- 1 · Services (stackable) -->
          <div class="of-block">
            <div class="of-field">
              <span class="of-legend">What do you need? <span style="text-transform:none;letter-spacing:0;opacity:.7;">— tick all that apply</span></span>
              <div class="of-choices">
                <label class="of-choice"><input type="checkbox" name="service" value="fdm"><span>FDM Printing</span></label>
                <label class="of-choice"><input type="checkbox" name="service" value="scan"><span>3D Scanning</span></label>
                <label class="of-choice"><input type="checkbox" name="service" value="model"><span>Modeling &amp; Touch-ups</span></label>
                <label class="of-choice"><input type="checkbox" name="service" value="animation"><span>Animation &amp; 3D Art</span></label>
              </div>
              <p class="of-note" id="gate-hint" hidden style="margin-top:0.6rem;">Added <strong>Modeling &amp; Touch-ups</strong> — a raw scan always needs cleanup before it prints. Untick it if you only want the raw scan data.</p>
            </div>
          </div>

          <!-- 2 · Per-service details (revealed as you tick) -->
          <div class="of-svc" data-svc-block="fdm" hidden>
            <p class="of-block__t"><span class="of-step__n">P</span>Printing details</p>
            <div class="of-field">
              <label>Material &amp; colour <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional — I&rsquo;ll recommend the best one if you skip)</span></label>
              <input type="hidden" name="fdm_material" id="fdm_material" value="Recommend for me">
              <input type="hidden" name="material_name" id="material_name" value="">
              <input type="hidden" name="material_color" id="material_color" value="">
              <div class="mat-types">
                <button type="button" class="mat-type is-active" data-mtype="Recommend for me">Recommend for me</button>
                <button type="button" class="mat-type" data-mtype="PLA" data-group="PLA">PLA</button>
                <button type="button" class="mat-type" data-mtype="PETG" data-group="PETG">PETG</button>
                <button type="button" class="mat-type" data-mtype="ABS" data-group="ABS">ABS / ASA</button>
                <button type="button" class="mat-type" data-mtype="TPU" data-group="TPU">TPU</button>
              </div>
              <div class="mat-picker" id="mat-picker" hidden>
                <input type="text" class="mat-search" id="mat-search" placeholder="Filter colours…" autocomplete="off">
                <div class="mat-grid" id="mat-grid">
                  {% for m in site.data.forge_materials %}<button type="button" class="mat-swatch{% if m.in_stock %} in-stock{% endif %}" data-group="{{ m.group }}" data-type="{{ m.type }}" data-name="{{ m.name | escape }}" data-colour="{{ m.colour | escape }}" data-instock="{% if m.in_stock %}1{% else %}0{% endif %}" title="{{ m.name | escape }}"><img src="{{ m.img | relative_url }}" loading="lazy" alt="{{ m.name | escape }}"><span class="mat-swatch__c">{{ m.colour | escape }}</span></button>{% endfor %}
                </div>
              </div>
              <div class="mat-selected" id="mat-selected" hidden><span>Selected: <strong id="mat-selected-name"></strong></span><button type="button" class="mat-clear" id="mat-clear">change</button></div>
              <p class="of-note" id="mat-leadnote" hidden style="margin-top:0.6rem;">Heads-up: a specific colour is <strong>made to order</strong> — if it&rsquo;s not already on the shelf I order it in, which adds about <strong>1.5 weeks</strong> on top of the usual turnaround. Choose <em>Recommend for me</em> for the fastest result.</p>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label>Quantity</label><input type="number" name="fdm_quantity" min="1" value="1"></div>
              <div class="of-field"><label>Approx. size (mm)</label><input type="text" name="fdm_size" placeholder="e.g. 220 × 140 × 90 — max 500³"></div>
            </div>
            <label class="of-choice" style="margin-top:0.25rem;"><input type="checkbox" name="fdm_finishing" value="yes" id="fdm-finish"><span>Add finishing — heavy sanding, priming, paint, assembly (custom-priced)</span></label>
            <div class="of-field" id="fdm-finish-notes" hidden style="margin-top:0.9rem;"><label>What finishing do you need?</label><textarea name="fdm_finishing_notes" placeholder="e.g. smooth + prime + matte-black paint; assemble the two halves…"></textarea></div>
          </div>

          <div class="of-svc" data-svc-block="scan" hidden>
            <p class="of-block__t"><span class="of-step__n">S</span>Scanning details</p>
            <div class="of-field"><label>What needs scanning?</label><textarea name="scan_what" placeholder="The object or body part, rough dimensions, and what you'll do with the model…"></textarea></div>
          </div>

          <div class="of-svc" data-svc-block="model" hidden>
            <p class="of-block__t"><span class="of-step__n">M</span>Modeling details</p>
            <div class="of-field"><label>Describe the model or fix</label><textarea name="model_what" placeholder="Model from a sketch/photo, repair a bad mesh, tweak fit/tolerances…"></textarea></div>
          </div>

          <div class="of-svc" data-svc-block="animation" hidden>
            <p class="of-block__t"><span class="of-step__n">A</span>Animation details</p>
            <div class="of-field"><label>What should move?</label><textarea name="animation_what" placeholder="Product, style, length, where it'll be used. Animation runs through the Portfolio studio."></textarea></div>
          </div>

          <!-- 3 · Brief + contact -->
          <div class="of-block" style="border-top: var(--bw) solid var(--hairline); padding-top:1.4rem; margin-top:0.5rem;">
            <div class="of-field"><label>Anything else? <span style="text-transform:none;letter-spacing:0;opacity:.7;">(the brief)</span></label><textarea name="brief" placeholder="What is it, what it's for, deadlines, references…"></textarea></div>
            <p class="of-note" style="margin:-0.4rem 0 1.1rem;">After you send this, I email you a private, secure folder to drop your STL / STEP / 3MF / scan into — no upload needed here.</p>
            <div class="of-grid2">
              <div class="of-field"><label for="of-name">Name</label><input type="text" id="of-name" name="name" placeholder="Your name" autocomplete="name"></div>
              <div class="of-field"><label for="of-email">Email</label><input type="email" id="of-email" name="email" placeholder="you@email.com" autocomplete="email" required></div>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label for="of-phone">Phone <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional)</span></label><input type="tel" id="of-phone" name="phone" placeholder="Phone number" autocomplete="tel"></div>
              <div class="of-field"><label for="deadline-picker">Deadline <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional — 7 days out min)</span></label><input type="date" name="deadline" id="deadline-picker" autocomplete="off"></div>
            </div>
            <div class="of-field" style="margin-bottom:0.5rem;"><span class="of-legend">Shipping address <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional — for posted orders)</span></span></div>
            <div class="of-grid2">
              <div class="of-field"><label for="ship-country">Country</label><input type="text" id="ship-country" name="ship_country" autocomplete="country-name"></div>
              <div class="of-field"><label for="ship-postcode">Postcode</label><input type="text" id="ship-postcode" name="ship_postcode" autocomplete="postal-code"></div>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label for="ship-city">City</label><input type="text" id="ship-city" name="ship_city" autocomplete="address-level2"></div>
              <div class="of-field"><label for="ship-street">Street</label><input type="text" id="ship-street" name="ship_street" autocomplete="address-line1"></div>
            </div>
            <div class="of-grid2">
              <div class="of-field"><label for="ship-number">House / door no.</label><input type="text" id="ship-number" name="ship_number"></div>
              <div class="of-field"><label for="ship-unit">Apartment, floor, building <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional)</span></label><input type="text" id="ship-unit" name="ship_unit" autocomplete="address-line2"></div>
            </div>
            <div class="of-submit"><button class="btn btn-accent" type="button" data-of-submit>Send request</button><span class="of-note">No payment now — services are quoted first.</span></div>
            <div class="of-error" hidden style="margin-top:0.9rem;padding:0.85rem 1rem;background:#fdecea;border-left:3px solid #d64545;border-radius:0 var(--radius) var(--radius) 0;color:#8a2a2a;font-size:0.9rem;line-height:1.5;"><strong>Couldn&rsquo;t send.</strong> <span class="of-error-msg">Something went wrong. Please try again.</span></div>
          </div>
        </div>

        <div class="of-done" hidden><div class="of-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4 10-10"/></svg></div><h3>Request received — check your email.</h3><p>You&rsquo;ll get your private, secure upload folder by email in a few minutes. Drop your files in, and once I&rsquo;ve seen them I send a fixed quote. Nothing prints until you approve.</p><button type="button" class="btn btn-outline" data-of-again style="margin-top:1.1rem;">Submit another request</button></div>
      </div>
    </form>
  </div>
</section>

<iframe name="order_sink" hidden></iframe>
<script src="{{ '/assets/work-order.js' | relative_url }}"></script>
<script>
  (function () {
    // ── Accordion: expand a service to read it before ordering ──
    var shop = document.getElementById('services-shop');
    if (shop) {
      shop.querySelectorAll('.shop-head').forEach(function (head) {
        head.addEventListener('click', function () {
          var row = head.closest('.shop-row');
          var open = row.classList.toggle('is-open');
          head.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      });
    }

    var form = document.getElementById('order-form');
    if (!form) return;
    var hint = document.getElementById('gate-hint');

    function block(svc) { return form.querySelector('[data-svc-block="' + svc + '"]'); }
    function box(svc) { return form.querySelector('input[name="service"][value="' + svc + '"]'); }

    // Reveal a service's detail block when its checkbox is on.
    function syncBlocks() {
      ['fdm', 'scan', 'model', 'animation'].forEach(function (s) {
        var b = block(s), c = box(s);
        if (b && c) b.hidden = !c.checked;
      });
    }

    // Logic gate: a scan always needs modeling cleanup → auto-add Modeling (removable).
    function applyGate(changed) {
      var scan = box('scan'), model = box('model');
      if (changed === 'scan' && scan && scan.checked && model && !model.checked) {
        model.checked = true;
        if (hint) hint.hidden = false;
      }
      if (changed === 'model' && model && !model.checked && hint) hint.hidden = true;
      if (changed === 'scan' && scan && !scan.checked && hint) hint.hidden = true;
    }

    form.querySelectorAll('input[name="service"]').forEach(function (c) {
      c.addEventListener('change', function () { applyGate(c.value); syncBlocks(); });
    });

    // FDM finishing notes reveal
    var fin = document.getElementById('fdm-finish'), finNotes = document.getElementById('fdm-finish-notes');
    if (fin && finNotes) fin.addEventListener('change', function () { finNotes.hidden = !fin.checked; });

    // Select a service + scroll to the form (accordion buttons + the CTA card).
    function startOrder(svc) {
      if (svc) { var c = box(svc); if (c && !c.checked) { c.checked = true; applyGate(svc); } }
      syncBlocks();
      var order = document.getElementById('order');
      if (order) order.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.querySelectorAll('[data-start-order]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        startOrder(btn.getAttribute('data-svc'));
      });
    });

    // Deadline date picker — grey out today + next 6 days (earliest = today + 7).
    var dp = document.getElementById('deadline-picker');
    if (dp) {
      var minD = new Date();
      minD.setDate(minD.getDate() + 7);
      dp.min = minD.toISOString().split('T')[0];
    }

    // Deep-link: /forge/services/?service=fdm (or #order) preselects + scrolls.
    var qs = new URLSearchParams(location.search).get('service');
    if (qs && box(qs)) { box(qs).checked = true; applyGate(qs); syncBlocks(); }
    else syncBlocks();
    if (qs || location.hash === '#order') {
      setTimeout(function () { var o = document.getElementById('order'); if (o) o.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
    }
  })();

  // ── Material & colour picker ──
  (function () {
    var picker = document.getElementById('mat-picker');
    if (!picker) return;
    var grid = document.getElementById('mat-grid');
    var search = document.getElementById('mat-search');
    var selBox = document.getElementById('mat-selected');
    var selName = document.getElementById('mat-selected-name');
    var leadnote = document.getElementById('mat-leadnote');
    var clearBtn = document.getElementById('mat-clear');
    var fType = document.getElementById('fdm_material');
    var fName = document.getElementById('material_name');
    var fColour = document.getElementById('material_color');
    var typeBtns = Array.prototype.slice.call(document.querySelectorAll('.mat-type'));
    var swatches = Array.prototype.slice.call(grid.querySelectorAll('.mat-swatch'));
    var activeGroup = null;

    function applySearch() {
      var q = (search.value || '').toLowerCase();
      swatches.forEach(function (s) {
        if (s.getAttribute('data-group') !== activeGroup) { s.style.display = 'none'; return; }
        s.style.display = s.getAttribute('data-name').toLowerCase().indexOf(q) > -1 ? '' : 'none';
      });
    }
    function showGroup(group) { activeGroup = group; applySearch(); }
    function clearSelection() {
      swatches.forEach(function (s) { s.classList.remove('is-active'); });
      fName.value = ''; fColour.value = '';
      selBox.hidden = true; leadnote.hidden = true;
    }

    typeBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        typeBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        fType.value = btn.getAttribute('data-mtype');
        clearSelection();
        var group = btn.getAttribute('data-group');
        if (group) { picker.hidden = false; search.value = ''; showGroup(group); }
        else { picker.hidden = true; }   // "Recommend for me"
      });
    });

    swatches.forEach(function (s) {
      s.addEventListener('click', function () {
        swatches.forEach(function (x) { x.classList.remove('is-active'); });
        s.classList.add('is-active');
        var nm = s.getAttribute('data-name');
        fType.value = s.getAttribute('data-type');
        fName.value = nm;
        fColour.value = s.getAttribute('data-colour');
        selName.textContent = nm;
        selBox.hidden = false;
        // lead-time note only when the chosen colour is NOT in stock
        if (s.getAttribute('data-instock') === '1') {
          leadnote.hidden = true;
        } else {
          leadnote.innerHTML = '<strong>' + nm + '</strong> is made to order — if it&rsquo;s not already on the shelf I order it in, which adds about <strong>1.5 weeks</strong> on top of the usual turnaround. Choose <em>Recommend for me</em> for the fastest result.';
          leadnote.hidden = false;
        }
        picker.hidden = true;
      });
    });

    if (search) search.addEventListener('input', applySearch);
    if (clearBtn) clearBtn.addEventListener('click', function () { picker.hidden = false; selBox.hidden = true; });
  })();
</script>
