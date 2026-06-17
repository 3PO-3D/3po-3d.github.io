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
      <strong>Products are fixed-price — buy and I ship.</strong> Each product checks out on its own through
      Stripe, and anything scan-based emails you a private upload link afterwards. Buying a few? Stripe lets
      you add same-type items at checkout; each scan-based item still gets its own upload folder.
    </div>

    <!-- Flagship: custom insoles — store-style layout -->
    <div class="product insole-flagship">

      <div class="ins-gallery" id="ins-gallery">
        <div class="ins-stage">
          <div class="ins-slide is-active" data-slide="0">
            <iframe src="https://player.vimeo.com/video/1201719548?background=1&muted=1&autopause=0&app_id=58479" loading="lazy" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" title="Custom Orthopedic Insole animation"></iframe>
          </div>
          {% assign ibase = '/assets/img/products/insoles/' %}
          {% assign istills = 'Blue_2_2.1.2.png,Red_2.2.1_2.2.3.png,Black_2.2.2_2.2.6.png' | split: ',' %}
          {% for s in istills %}<div class="ins-slide" data-slide="{{ forloop.index }}"><img src="{{ ibase | append: s | relative_url }}" loading="lazy" alt="Custom insole — {{ s | split: '_' | first }}"></div>{% endfor %}
          <button class="ins-arrow ins-prev" type="button" aria-label="Previous">&lsaquo;</button>
          <button class="ins-arrow ins-next" type="button" aria-label="Next">&rsaquo;</button>
        </div>
        <div class="ins-dots">
          <button class="ins-dot is-active" type="button" data-go="0" aria-label="Animation"></button>
          <button class="ins-dot" type="button" data-go="1" aria-label="Blue"></button>
          <button class="ins-dot" type="button" data-go="2" aria-label="Red"></button>
          <button class="ins-dot" type="button" data-go="3" aria-label="Black"></button>
        </div>
      </div>

      <div class="ins-desc">
        <span class="product-cat">Custom Fit — Flagship · made from your foot scan</span>
        <h3>Custom Insoles</h3>
        <p>3D-printed to fit your foot from a scan you upload after checkout. Pick the support level and colour at checkout, add a note if you like — I print the matched pair and ship it.</p>
        <details class="ins-more">
          <summary>Read the full breakdown</summary>
          <div class="ins-more-body">
            <h4>What they are</h4>
            <p>Fully custom, scan-based insoles — the geometry is shaped to <em>your</em> foot, not a generic template. Infill density is <strong>mapped to load</strong> so each insole is firm where it carries weight and softer where it doesn&rsquo;t, with <strong>integrated air channels</strong> for breathability. Made only for you.</p>

            <h4>Type &amp; colour</h4>
            <p><strong>🔵 Blue — orthopedic.</strong> Firm, elastic TPU for structural correction: flat feet, misalignment, post-surgery and ligament rehab. Higher arch support and precise, scan-mapped load redistribution; the rebound helps rebuild foot and toe strength.</p>
            <p><strong>🔴 Red — comfort.</strong> The same firm, elastic TPU tuned for everyday relief — heel pain, toe pressure, general discomfort. Soft and rubbery underfoot with a fast rebound that assists push-off; great for sport and high step counts.</p>
            <p><strong>⚫ Black — foaming TPU.</strong> Available as <strong>either</strong> orthopedic <strong>or</strong> comfort. The print is tuned to foam the filament itself, so it compresses in a progressive, spongy way instead of springing back like rubber — the same load performance with a softer, more cushioned feel.</p>
            <p class="ins-pick">So: order <strong>Orthopedic &rarr; Blue or Black</strong>, or <strong>Comfort &rarr; Red or Black</strong>. You choose type and colour at checkout.</p>

            <h4>Material &amp; lifespan</h4>
            <p>Two feels: a <strong>firm, elastic TPU</strong> (Blue / Red) and a <strong>soft, foaming TPU</strong> (Black). Both are <strong>washable and cleanable</strong>, and last roughly <strong>1.5&ndash;2 years</strong> of daily use.</p>

            <h4>How ordering works</h4>
            <p>At checkout you pick the type and colour and can <strong>add a note</strong>. After you pay, I email you a <strong>private Dropbox link</strong> to upload your foot scan. <strong>Just reply to that email with anything you want tuned</strong> — more support under the arch, heel or toes; softer or firmer zones for how your weight sits. Almost anything is possible: that&rsquo;s the whole point of making them one pair at a time, for one person.</p>

            <h4>Sizing &mdash; what I need</h4>
            <p>Your <strong>EU shoe size</strong>, plus two quick measurements (stand on a sheet of paper and mark them):</p>
            <ul class="ins-measure-list">
              <li><strong>Length</strong> — heel to the tip of the big toe.</li>
              <li><strong>Width</strong> — across the widest point: the first joint of the big toe to the first joint of the little toe (the outer edge).</li>
            </ul>
            <svg class="foot-guide" viewBox="0 0 220 350" role="img" aria-label="Measuring guide: length from heel to big toe, width across the toe joints">
              <path class="foot" d="M110,330 C140,330 150,306 150,280 C152,246 150,218 154,190 C158,158 160,140 160,128 C160,100 138,86 110,86 C82,86 60,100 60,128 C60,158 66,184 68,213 C70,240 68,266 70,286 C72,308 80,330 110,330 Z"/>
              <path class="dim" d="M34,86 L34,330 M28,94 L34,86 L40,94 M28,322 L34,330 L40,322"/>
              <text class="dlbl" transform="rotate(-90 16 208)" x="16" y="208" text-anchor="middle">Length</text>
              <path class="dim" d="M58,120 L162,120 M66,114 L58,120 L66,126 M154,114 L162,120 L154,126"/>
              <text class="dlbl" x="110" y="72" text-anchor="middle">Width</text>
            </svg>

            <h4>If they don&rsquo;t fit</h4>
            <p>Not a refund, but a fix: if the insoles don&rsquo;t fit or something&rsquo;s off, I&rsquo;ll <strong>reprint them once at 50% of the original price</strong> (orthopedic or comfort) — a one-time offer for the same order. Just reply to your order email and we&rsquo;ll sort it out.</p>
          </div>
        </details>

        <div class="insole-buy-row">
          <div class="insole-variant">
            <div class="iv-info"><span class="iv-name">Orthopedic</span><span class="iv-desc">Structural support — arch, weight &amp; gait. Colour: Blue or Black.</span></div>
            <div class="iv-foot"><span class="price">35 000 Ft <span class="iv-ship">+ shipping</span></span>
              <a class="btn btn-accent product-buy" data-stripe-link="https://buy.stripe.com/8x2cN5dGraxX0xC1pg2go01" href="mailto:3po@3po3d.com?subject=Orthopedic%20insole%20order&body=Colour%20(Blue%2FBlack)%3A%0AEU%20shoe%20size%3A%0AFoot%20length%20(mm)%3A%0AFoot%20width%20(mm)%3A">Buy</a></div>
          </div>
          <div class="insole-variant">
            <div class="iv-info"><span class="iv-name">Comfort</span><span class="iv-desc">Soft all-day cushioning, shoe-friendly. Colour: Red or Black.</span></div>
            <div class="iv-foot"><span class="price">30 000 Ft <span class="iv-ship">+ shipping</span></span>
              <a class="btn btn-accent product-buy" data-stripe-link="https://buy.stripe.com/9B628rcCn21r804aZQ2go00" href="mailto:3po@3po3d.com?subject=Comfort%20insole%20order&body=Colour%20(Red%2FBlack)%3A%0AEU%20shoe%20size%3A%0AFoot%20length%20(mm)%3A%0AFoot%20width%20(mm)%3A">Buy</a></div>
          </div>
        </div>
        <div class="upload-note"><strong>After checkout:</strong> you get a private, secure folder by email to upload your foot scan and confirm your colour. No one else can see your files. <a href="{{ '/forge/services/#process' | relative_url }}">How the workshop works &rarr;</a></div>
      </div>
    </div>
  </div>
</section>

<style>
  /* ── Insole flagship — store-style stacked layout ── */
  .insole-flagship { display: block; max-width: 860px; margin: 0 auto; padding: 0; background: transparent; border: none; }
  .ins-gallery { max-width: 760px; margin: 0 auto; }
  .ins-stage { position: relative; aspect-ratio: 16/9; border: var(--bw) solid var(--text); border-radius: var(--radius); overflow: hidden; background: var(--surface-2); }
  .ins-slide { position: absolute; inset: 0; opacity: 0; visibility: hidden; transition: opacity .4s ease; }
  .ins-slide.is-active { opacity: 1; visibility: visible; }
  .ins-slide iframe, .ins-slide img { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
  .ins-slide img { object-fit: contain; background: var(--surface-2); }
  .ins-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 3; width: 44px; height: 44px; border-radius: 50%; border: var(--bw) solid var(--text); background: rgba(var(--bg-rgb), 0.7); backdrop-filter: blur(4px); color: var(--text); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; line-height: 1; transition: background .15s, color .15s, border-color .15s; }
  .ins-arrow:hover { background: var(--accent); color: #fff; border-color: var(--accent); }
  .ins-prev { left: 0.75rem; } .ins-next { right: 0.75rem; }
  .ins-dots { display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem; }
  .ins-dot { width: 9px; height: 9px; border-radius: 50%; border: var(--bw) solid var(--text); background: transparent; cursor: pointer; padding: 0; transition: background .15s; }
  .ins-dot.is-active { background: var(--accent); border-color: var(--accent); }

  .ins-desc { max-width: 640px; margin: 2.25rem auto 0; text-align: center; }
  .ins-desc .product-cat { font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); }
  .ins-desc h3 { font-size: 1.6rem; margin: 0.5rem 0 0.7rem; }
  .ins-desc > p { color: var(--muted); }
  .ins-more { margin: 1rem 0 0; text-align: left; border-top: var(--bw) solid var(--hairline); }
  .ins-more summary { cursor: pointer; list-style: none; font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); padding: 0.9rem 0; display: flex; align-items: center; gap: 0.5rem; }
  .ins-more summary::-webkit-details-marker { display: none; }
  .ins-more summary::after { content: '+'; margin-left: auto; font-size: 1.1rem; }
  .ins-more[open] summary::after { content: '\2212'; }
  .ins-more-body p { color: var(--muted); margin: 0 0 0.9rem; line-height: 1.7; }
  .ins-more-body strong { color: var(--text); }
  .ins-more-body h4 { font-family: var(--font-head); font-weight: 600; font-size: 1rem; color: var(--text); margin: 1.4rem 0 0.5rem; }
  .ins-more-body h4:first-child { margin-top: 0; }
  .ins-pick { background: var(--accent-soft); border-left: 3px solid var(--accent); border-radius: 0 var(--radius) var(--radius) 0; padding: 0.7rem 0.9rem; }
  .ins-measure-list { color: var(--muted); line-height: 1.7; margin: 0 0 0.9rem 1.1rem; }
  .ins-measure-list strong { color: var(--text); }
  .foot-guide { display: block; width: 100%; max-width: 240px; margin: 1rem auto 0.4rem; color: var(--text); }
  .foot-guide .foot { fill: var(--surface-2); stroke: currentColor; stroke-width: 2; }
  .foot-guide .dim { stroke: var(--accent); stroke-width: 1.6; fill: none; stroke-linecap: round; stroke-linejoin: round; }
  .foot-guide .dlbl { fill: var(--muted); font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; }

  .insole-buy-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1.5rem; text-align: left; }
  .insole-variant { border: var(--bw) solid var(--hairline); border-radius: var(--radius); padding: 0.9rem 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
  .insole-variant .iv-name { display: block; font-family: var(--font-head); font-weight: 600; font-size: 1.05rem; color: var(--text); }
  .insole-variant .iv-desc { display: block; font-size: 0.8rem; color: var(--muted); line-height: 1.45; margin-top: 0.15rem; }
  .insole-variant .iv-foot { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; margin-top: auto; }
  .insole-variant .iv-foot .price { font-family: var(--font-head); font-weight: 700; font-size: 1.15rem; color: var(--text); }
  .insole-variant .iv-ship { font-family: var(--font-mono); font-weight: 400; font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .insole-variant .product-buy { padding: 0.55rem 1.15rem; }

  .upload-note { margin-top: 1.25rem; text-align: left; padding: 0.9rem 1.1rem; background: var(--accent-soft); border-left: 3px solid var(--accent); border-radius: 0 var(--radius) var(--radius) 0; font-size: 0.88rem; color: var(--muted); line-height: 1.6; }
  .upload-note strong { color: var(--text); }
  .upload-note a { color: var(--accent); text-decoration: none; font-family: var(--font-mono); font-size: 0.78rem; }
  @media (max-width: 600px) { .insole-buy-row { grid-template-columns: 1fr; } }
</style>

<script>
  // Commerce hooks (placeholders until Stripe links are wired — see PREREQUISITES.md).
  (function () {
    document.querySelectorAll('[data-stripe-link]').forEach(function (a) {
      var l = a.getAttribute('data-stripe-link');
      if (l) { a.setAttribute('href', l); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  })();

  // Insole gallery — step between the looping video and the 3 clean stills.
  (function () {
    var g = document.getElementById('ins-gallery'); if (!g) return;
    var slides = g.querySelectorAll('.ins-slide');
    var dots = g.querySelectorAll('.ins-dot');
    var i = 0, n = slides.length;
    function go(k) {
      i = (k + n) % n;
      slides.forEach(function (s, x) { s.classList.toggle('is-active', x === i); });
      dots.forEach(function (d, x) { d.classList.toggle('is-active', x === i); });
    }
    g.querySelector('.ins-prev').addEventListener('click', function () { go(i - 1); });
    g.querySelector('.ins-next').addEventListener('click', function () { go(i + 1); });
    dots.forEach(function (d) { d.addEventListener('click', function () { go(parseInt(d.getAttribute('data-go'), 10)); }); });
  })();
</script>
