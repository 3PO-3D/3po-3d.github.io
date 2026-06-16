---
title: "FORGE — Order"
description: "A guided 3-step order: pick a service, add details, send it. You'll get a private folder by email to drop your files, then I quote it."
permalink: /forge/order/
---

{% include forge-subnav.html %}

<link rel="stylesheet" href="{{ '/assets/work-order.css' | relative_url }}">

<section class="section" id="order">
  <div class="container" style="max-width:760px;">
    <div class="section-head">
      <p class="mono-label">04 — Order</p>
      <h2>Start an order.</h2>
      <p class="lead">Tell me what you need and I&rsquo;ll come back with materials, timeline and a price — it&rsquo;s one guided form. After you send it, I email you a private, secure folder to drop your files in. Fixed-price products (the insoles) buy on the <a href="{{ '/forge/products/' | relative_url }}" style="color:var(--accent);text-decoration:none;">Products</a> page.</p>
    </div>

    <form id="order-form" data-webhook="" novalidate>
      <input type="hidden" name="_secret" value="forge3po">
      <div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>
      <div class="of-wrap of-fixed of">
        <div class="of-formbody">
          <div class="of-progress">
            <span class="plabel">Step 1 of 3</span>
            <span class="pdot active"></span><span class="pdot"></span><span class="pdot"></span>
          </div>

          <div class="of-step is-open">
            <button class="of-step__head" type="button"><span class="of-step__n">1</span><span><span class="of-step__t">Service</span><span class="of-step__sub">What you need</span></span><span class="of-step__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button>
            <div class="of-step__body"><div class="of-step__body-inner"><div class="of-step__body-pad">
              <div class="of-field">
                <span class="of-legend">What do you need?</span>
                <div class="of-choices">
                  <label class="of-choice"><input type="radio" name="service" value="fdm"><span>FDM Print</span></label>
                  <label class="of-choice"><input type="radio" name="service" value="model"><span>Model &amp; Print</span></label>
                  <label class="of-choice"><input type="radio" name="service" value="scan"><span>Scan &amp; Print</span></label>
                  <label class="of-choice"><input type="radio" name="service" value="finishing"><span>Finishing</span></label>
                  <label class="of-choice"><input type="radio" name="service" value="insole"><span>Insole Fitting</span></label>
                </div>
              </div>
              <div class="of-stepnav"><span class="spacer"></span><button class="btn btn-accent" type="button" data-of-next>Next →</button></div>
            </div></div></div>
          </div>

          <div class="of-step">
            <button class="of-step__head" type="button"><span class="of-step__n">2</span><span><span class="of-step__t">Details</span><span class="of-step__sub">Material, size, quantity</span></span><span class="of-step__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button>
            <div class="of-step__body"><div class="of-step__body-inner"><div class="of-step__body-pad">
              <div class="of-field"><label>Project details</label><textarea name="details" placeholder="What is it, what it&#39;s for, any dimensions or deadlines…"></textarea></div>
              <div class="of-grid2">
                <div class="of-field"><label>Material</label><select name="material"><option>Recommend for me</option><option>PLA</option><option>PETG</option><option>ABS</option><option>ASA</option><option>TPU (flexible)</option></select></div>
                <div class="of-field"><label>Quantity</label><input type="number" name="quantity" min="1" value="1"></div>
              </div>
              <div class="of-field"><label>Approx. size (mm)</label><input type="text" name="size" placeholder="e.g. 220 × 140 × 90 — max 500³"></div>
              <label class="of-choice" style="margin-top:0.25rem;"><input type="checkbox" name="postprocess" value="yes"><span>Add post-processing — sanding, priming, paint (priced separately)</span></label>
              <div class="of-stepnav"><button class="btn btn-ghost" type="button" data-of-back>← Back</button><span class="spacer"></span><button class="btn btn-accent" type="button" data-of-next>Next →</button></div>
            </div></div></div>
          </div>

          <div class="of-step">
            <button class="of-step__head" type="button"><span class="of-step__n">3</span><span><span class="of-step__t">Files &amp; Contact</span><span class="of-step__sub">Send it over</span></span><span class="of-step__chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button>
            <div class="of-step__body"><div class="of-step__body-inner"><div class="of-step__body-pad">
              <div class="of-field"><label>Files</label><div class="of-dropfile">No upload needed here — after you send this, I email you a private, secure folder to drop your STL / STEP / 3MF / scan into. No one else can see it.</div></div>
              <div class="of-grid2">
                <div class="of-field"><label>Name</label><input type="text" name="name" placeholder="Your name"></div>
                <div class="of-field"><label>Email</label><input type="email" name="email" placeholder="you@email.com" required></div>
              </div>
              <div class="of-field"><label>Deadline <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional)</span></label><input type="text" name="deadline" placeholder="e.g. 2 weeks, flexible"></div>
              <div class="of-stepnav"><button class="btn btn-ghost" type="button" data-of-back>← Back</button><span class="spacer"></span><button class="btn btn-accent" type="button" data-of-submit>Send request</button></div>
            </div></div></div>
          </div>
        </div>

        <div class="of-done" hidden><div class="of-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4 10-10"/></svg></div><h3>Request received — check your email.</h3><p>You&rsquo;ll get your private, secure upload folder by email in a few minutes. Drop your files in, and once I&rsquo;ve seen them I send a fixed quote. Nothing prints until you approve.</p></div>
      </div>
    </form>
  </div>
</section>

{% include forge-crosssell.html context="order" %}

<iframe name="order_sink" hidden></iframe>
<script src="{{ '/assets/work-order.js' | relative_url }}"></script>
<script>
  // Deep-link: /forge/order/?service=fdm preselects that service in step 1.
  (function () {
    var p = new URLSearchParams(location.search).get('service');
    if (!p) return;
    var r = document.querySelector('#order-form input[name="service"][value="' + p + '"]');
    if (r) r.checked = true;
  })();
</script>
