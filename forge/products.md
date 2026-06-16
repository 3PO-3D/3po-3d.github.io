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
        <p>3D-printed to fit your foot from a scan you upload after checkout. Pick the support level and colour; I print the pair and ship it.</p>
        <details class="ins-more">
          <summary>Read the full breakdown</summary>
          <div class="ins-more-body">
            <p>Each pair is built on <strong>scan-based geometry</strong> — the model is shaped to your foot, not a generic template. Infill density is <strong>mapped to load</strong> so the insole is firm where it carries weight and softer where it doesn&rsquo;t, and <strong>integrated air channels</strong> keep it breathable through a full day.</p>
            <p><strong>Blue &amp; Red</strong> are firm, elastic TPU — best for active walking and sport rebound. <strong>Black</strong> is a soft-touch foaming TPU — best for all-day standing comfort, with less spring-back.</p>
            <p>Printed as a matched pair and finished to wearable standard before it ships.</p>
          </div>
        </details>

        <div class="insole-buy-row">
          <div class="insole-variant">
            <div class="iv-info"><span class="iv-name">Orthopedic</span><span class="iv-desc">Structural support — arch, weight &amp; gait. Colour: Blue or Black.</span></div>
            <div class="iv-foot"><span class="price">35 000 Ft <span class="iv-ship">+ shipping</span></span>
              <a class="btn btn-accent product-buy" data-stripe-link="https://buy.stripe.com/8x2cN5dGraxX0xC1pg2go01" href="mailto:3po@3po3d.com?subject=Orthopedic%20insole%20order&body=Colour%20(Blue%2FBlack)%3A%0AShoe%20size%3A">Buy</a></div>
          </div>
          <div class="insole-variant">
            <div class="iv-info"><span class="iv-name">Comfort</span><span class="iv-desc">Soft all-day cushioning, shoe-friendly. Colour: Red or Black.</span></div>
            <div class="iv-foot"><span class="price">30 000 Ft <span class="iv-ship">+ shipping</span></span>
              <a class="btn btn-accent product-buy" data-stripe-link="https://buy.stripe.com/9B628rcCn21r804aZQ2go00" href="mailto:3po@3po3d.com?subject=Comfort%20insole%20order&body=Colour%20(Red%2FBlack)%3A%0AShoe%20size%3A">Buy</a></div>
          </div>
        </div>
        <div class="upload-note"><strong>After checkout:</strong> you get a private, secure folder by email to upload your foot scan and confirm your colour. No one else can see your files. <a href="{{ '/forge/services/#process' | relative_url }}">How the workshop works &rarr;</a></div>
      </div>
    </div>
  </div>
</section>

<!-- Elsewhere at 3PO — three navigation cards (each its own brand) -->
<section class="section" style="border-top: var(--bw) solid var(--hairline);">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">Elsewhere at 3PO</p>
      <h2 style="font-size:1.5rem;">More from the workshop &amp; studio.</h2>
      <p class="lead">Not after a product? Here&rsquo;s where the rest of 3PO lives.</p>
    </div>
    <div class="nav-cards">
      <a class="nav-card is-forge" data-site="forge" href="{{ '/forge/services/' | relative_url }}">
        <div class="nav-card__media"><div class="nav-card__bg"></div><img class="nav-card__logo" src="{{ '/assets/img/logos/Print_logo/forge_head.svg' | relative_url }}" alt="FORGE"></div>
        <div class="nav-card__body"><h3>Services</h3><p>Print a file, scan a real object, or model it from scratch — quoted first, then made.</p><span class="nav-card__arrow">Browse services &rarr;</span></div>
      </a>
      <a class="nav-card is-chronos" data-site="chronos" href="{{ '/chronos/' | relative_url }}">
        <div class="nav-card__media"><div class="nav-card__bg"></div><img class="nav-card__logo" src="{{ '/assets/img/logos/Chronos/chronos_head_whitefill.svg' | relative_url }}" alt="CHRONOS"></div>
        <div class="nav-card__body"><h3>CHRONOS</h3><p>My Cinema 4D plugin for non-destructive scene-variation management. One file, every version.</p><span class="nav-card__arrow">Explore CHRONOS &rarr;</span></div>
      </a>
      <a class="nav-card is-portfolio" data-site="portfolio" href="{{ '/portfolio/' | relative_url }}">
        <div class="nav-card__media"><div class="nav-card__bg"></div><img class="nav-card__logo" src="{{ '/assets/img/logos/Portfolio/portfolio_head.svg' | relative_url }}" alt="Portfolio"></div>
        <div class="nav-card__body"><h3>Portfolio</h3><p>Product films and motion graphics — the moving, rendered side of the same hands.</p><span class="nav-card__arrow">View the work &rarr;</span></div>
      </a>
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

  /* ── Elsewhere-at-3PO navigation cards ── */
  .nav-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  @media (max-width: 760px) { .nav-cards { grid-template-columns: 1fr; } }
  .nav-card { position: relative; display: flex; flex-direction: column; border: var(--bw) solid var(--text); border-radius: var(--radius); overflow: hidden; background: var(--surface); text-decoration: none; color: inherit; transition: transform .15s, border-color .15s; }
  .nav-card:hover { transform: translateY(-3px); border-color: var(--accent); }
  .nav-card__media { position: relative; aspect-ratio: 16/10; border-bottom: var(--bw) solid var(--text); overflow: hidden; background: var(--surface-2); }
  .nav-card__bg { position: absolute; inset: 0; }
  .nav-card__logo { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 56px; width: auto; z-index: 2; }
  .nav-card__body { padding: 1.2rem 1.3rem 1.4rem; }
  .nav-card__body h3 { font-size: 1.15rem; font-weight: 600; margin: 0 0 0.35rem; }
  .nav-card__body p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; margin: 0 0 0.85rem; }
  .nav-card__arrow { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
  /* hero backdrop patterns reused, masked to the card centre (accent via data-site) */
  .nav-card.is-forge .nav-card__bg { background-image: linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px); background-size: 40px 40px; -webkit-mask-image: radial-gradient(circle at 50% 45%, #000, transparent 80%); mask-image: radial-gradient(circle at 50% 45%, #000, transparent 80%); }
  .nav-card.is-chronos { --accent: #DDAA33; --accent-rgb: 221, 170, 51; --accent-dark: #C49A2A; } /* CHRONOS = default gold (no data-site rule exists) */
  .nav-card.is-chronos .nav-card__bg { background-image: radial-gradient(rgba(var(--accent-rgb),.6) 2.4px, transparent 3px), radial-gradient(var(--hairline) 1.6px, transparent 2.1px); background-size: 60px 60px, 22px 22px; -webkit-mask-image: radial-gradient(ellipse at 50% 45%, #000, transparent 82%); mask-image: radial-gradient(ellipse at 50% 45%, #000, transparent 82%); }
  .nav-card.is-portfolio .nav-card__bg { background-image: repeating-radial-gradient(circle at 50% 42%, transparent 0 24px, var(--hairline) 24px 25px), repeating-radial-gradient(circle at 50% 42%, transparent 0 96px, rgba(var(--accent-rgb),.3) 96px 98px); -webkit-mask-image: radial-gradient(circle at 50% 42%, #000, transparent 94%); mask-image: radial-gradient(circle at 50% 42%, #000, transparent 94%); }
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
