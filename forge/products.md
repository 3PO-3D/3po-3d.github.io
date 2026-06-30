---
title: "FORGE — Products"
description: "Ready-to-order printed pieces, including custom-fit orthopedic and comfort insoles printed from your foot scan."
permalink: /forge/products/
---

{% include forge-subnav.html %}

<link rel="stylesheet" href="{{ '/assets/work-order.css' | relative_url }}">

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
            <iframe src="https://framerate.tv/embed/633e8764-2a5f-4581-a7d5-e24a4369dd6d?background=1" loading="lazy" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" title="Custom Orthopedic Insole animation"></iframe>
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
            <p><a href="#" class="kiri-guide-open" style="color:var(--accent);font-family:var(--font-mono);font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">How to scan your foot &rarr;</a></p>

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

        <form id="insole-order" class="of" novalidate style="margin-top:1.5rem;text-align:left;">
          <div class="of-grid2">
            <div class="of-field">
              <span class="of-legend">Type</span>
              <div class="of-choices">
                <label class="of-choice"><input type="radio" name="ins_type" value="Orthopedic" checked><span>Orthopedic</span></label>
                <label class="of-choice"><input type="radio" name="ins_type" value="Comfort"><span>Comfort</span></label>
              </div>
            </div>
            <div class="of-field">
              <span class="of-legend">Colour</span>
              <div class="of-choices" id="ins-colours"></div>
            </div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-qty">Quantity (pairs)</label><input type="number" id="ins-qty" name="ins_qty" min="1" value="1"></div>
            <div class="of-field"><label for="ins-shoe">EU shoe size</label><input type="text" id="ins-shoe" name="shoe_size" placeholder="e.g. 42"></div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-len">Foot length (cm)</label><input type="number" id="ins-len" name="foot_length" step="0.1" placeholder="heel → longest toe"></div>
            <div class="of-field"><label for="ins-wid">Foot width (cm)</label><input type="number" id="ins-wid" name="foot_width" step="0.1" placeholder="widest point"></div>
          </div>
          <p class="of-note" style="margin:-0.4rem 0 1rem;">Stand on a sheet of paper to measure. Not sure how? <a href="#scan-guide" class="kiri-guide-open" style="color:var(--accent);text-decoration:none;">See the scan &amp; sizing guide →</a></p>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-name">Name</label><input type="text" id="ins-name" name="name" autocomplete="name"></div>
            <div class="of-field"><label for="ins-email">Email</label><input type="email" id="ins-email" name="email" autocomplete="email" required></div>
          </div>
          <div class="of-field"><label for="ins-phone">Phone <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional)</span></label><input type="tel" id="ins-phone" name="phone" autocomplete="tel"></div>
          <div class="of-field" style="margin-bottom:0.4rem;"><span class="of-legend">Shipping address</span></div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-country">Country</label><input type="text" id="ins-country" name="ship_country" autocomplete="country-name"></div>
            <div class="of-field"><label for="ins-postcode">Postcode</label><input type="text" id="ins-postcode" name="ship_postcode" autocomplete="postal-code"></div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-city">City</label><input type="text" id="ins-city" name="ship_city" autocomplete="address-level2"></div>
            <div class="of-field"><label for="ins-street">Street</label><input type="text" id="ins-street" name="ship_street" autocomplete="address-line1"></div>
          </div>
          <div class="of-grid2">
            <div class="of-field"><label for="ins-number">House / door no.</label><input type="text" id="ins-number" name="ship_number"></div>
            <div class="of-field"><label for="ins-unit">Apartment, floor <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional)</span></label><input type="text" id="ins-unit" name="ship_unit" autocomplete="address-line2"></div>
          </div>
          <div class="of-field"><label for="ins-notes">Notes <span style="text-transform:none;letter-spacing:0;opacity:.7;">(optional)</span></label><textarea id="ins-notes" name="notes" placeholder="Anything I should know — fit preferences, foot issues, urgency, questions…"></textarea></div>
          <div class="insole-total"><span>Total</span> <strong id="ins-price">35 000 Ft · ≈ 99 €</strong> <span class="iv-ship">+ shipping (quoted)</span></div>
          <div class="of-submit"><button class="btn btn-accent" type="button" id="ins-submit">Place order</button><span class="of-note">No payment yet — I confirm exact shipping, then send your invoice in the email thread. You can upload your scan meanwhile.</span></div>
          <div class="of-done" id="ins-done" hidden><div class="of-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4 10-10"/></svg></div><h3>Order received — check your email.</h3><p>I&rsquo;ll confirm exact shipping and send your invoice in the same email thread. Meanwhile you can upload your foot scan (link + <a href="#scan-guide" class="kiri-guide-open" style="color:var(--accent);">scan guide</a> are in the email). Work starts once the invoice is paid.</p><div style="margin-top:1.25rem;"><button class="btn btn-outline" type="button" id="ins-again">Place another order</button></div></div>
          <p class="of-note" id="ins-err" hidden style="color:#b3261e;margin-top:0.8rem;"></p>
        </form>
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

<!-- ─── Kiri Engine scan guide modal ─── -->
<div id="kiri-guide-overlay" class="kgm-overlay" hidden>
  <div class="kgm-box" role="dialog" aria-modal="true" aria-label="How to scan your foot">
    <button class="kgm-close" aria-label="Close">&times;</button>
    <div class="kgm-content">
      <p class="mono-label" style="margin-bottom:0.5rem;">Insole scan guide</p>
      <h2 style="font-size:1.6rem;margin:0 0 0.5rem;">How to scan your foot</h2>
      <p style="color:var(--muted);line-height:1.65;margin-bottom:2rem;">Your insoles are shaped from a 3D scan of your foot. Scan it with <strong>Kiri Engine</strong> — free on your phone. Takes about 10 minutes.</p>

      <div class="kgm-apps">
        <a href="https://apps.apple.com/us/app/kiri-engine-3d-scanner-lidar/id1577127142" target="_blank" rel="noopener">App Store &rarr;</a>
        <a href="https://play.google.com/store/search?q=kiri+engine&c=apps" target="_blank" rel="noopener">Google Play &rarr;</a>
        <a href="https://www.kiriengine.app/webapp" target="_blank" rel="noopener">Web App &rarr;</a>
      </div>

      <!-- Step 1 -->
      <div class="kgm-step">
        <div class="kgm-n">1</div>
        <div class="kgm-body">
          <h3>Set up</h3>
          <p>Place a sheet of <strong>A4 paper flat on the floor</strong> and stand your bare foot on it. Keep your foot still and relaxed.</p>
          <ul><li>Bare foot, flat and natural</li><li>Plain floor, decent light — no direct sunlight</li></ul>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="kgm-step">
        <div class="kgm-n">2</div>
        <div class="kgm-body">
          <h3>Open Kiri Engine and start a scan</h3>
          <ol><li>Tap <strong>+</strong> at the bottom of the home screen</li><li>Choose <strong>Photo Scan</strong></li><li>Tap <strong>Take Photos / Video</strong></li></ol>
          <div class="kgm-img1">
            <img src="{{ '/assets/img/guides/kiri_instructions/1..jpg' | relative_url }}" loading="lazy" alt="Kiri Engine home screen: Photo Scan, Take Photos / Video, Upload from Local">
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="kgm-step">
        <div class="kgm-n">3</div>
        <div class="kgm-body">
          <h3>Scan your foot</h3>
          <p>The most important data is the <strong>arch and heel shape</strong> — get the camera as low as possible. Best technique: <strong>place your phone on the floor</strong> and slowly circle around your foot. This gives the clearest view of the arch.</p>
          <ul>
            <li>Aim for <strong>60–80 photos</strong>, or use <strong>video mode</strong> (often more accurate — both free)</li>
            <li>Move slowly and steadily — blurry frames break the mesh</li>
            <li>Keep your foot <strong>completely still</strong> during the scan</li>
            <li>Avoid deep shadows; a lamp on the opposite side helps</li>
          </ul>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="kgm-step">
        <div class="kgm-n">4</div>
        <div class="kgm-body">
          <h3>Set up &amp; upload</h3>
          <p>When you finish shooting, the app opens the <strong>Edit</strong> screen. Set these options before uploading:</p>
          <ul>
            <li><strong>Name</strong> — enter any name so you can find the scan later</li>
            <li><strong>Polygon Count</strong> — select <strong>High</strong></li>
            <li><strong>Texture Resolution</strong> — select <strong>4K</strong></li>
            <li><strong>File Format</strong> — select <strong>STL</strong></li>
          </ul>
          <p>Then tap <strong>Upload</strong>. Wait for the progress bar to complete and the <em>Upload Successful</em> confirmation to appear.</p>
          <div class="kgm-img2">
            <img src="{{ '/assets/img/guides/kiri_instructions/3.jpg' | relative_url }}" loading="lazy" alt="Edit screen: Name field and Upload button">
            <img src="{{ '/assets/img/guides/kiri_instructions/2.jpg' | relative_url }}" loading="lazy" alt="Edit screen: High polygon, 4K texture, STL format selected">
          </div>
          <div class="kgm-img2" style="margin-top:0.5rem;">
            <img src="{{ '/assets/img/guides/kiri_instructions/4.jpg' | relative_url }}" loading="lazy" alt="Uploading 100% progress screen">
            <img src="{{ '/assets/img/guides/kiri_instructions/5.jpg' | relative_url }}" loading="lazy" alt="Upload Successful confirmation">
          </div>
        </div>
      </div>

      <!-- Step 5 -->
      <div class="kgm-step">
        <div class="kgm-n">5</div>
        <div class="kgm-body">
          <h3>Get the download link &amp; send it</h3>
          <p>After upload you&rsquo;ll see a <strong>Processing</strong> notification — this takes a few minutes. Once the 3D model is ready, open it and tap <strong>Export</strong>. On the Export sheet, tap <strong>&ldquo;Can&rsquo;t receive emails?&rdquo;</strong> at the bottom.</p>
          <div class="kgm-img2">
            <img src="{{ '/assets/img/guides/kiri_instructions/6.jpg' | relative_url }}" loading="lazy" alt="Processing notification with foot scan thumbnails">
            <img src="{{ '/assets/img/guides/kiri_instructions/7.jpg' | relative_url }}" loading="lazy" alt="Completed 3D foot model with Export button">
          </div>
          <div class="kgm-img1" style="max-width:100%;margin-top:0.5rem;">
            <img src="{{ '/assets/img/guides/kiri_instructions/9.jpg' | relative_url }}" loading="lazy" alt="Option A: copy the kiriengine.app share download link — Option B: download via web app">
          </div>
          <p style="margin-top:1rem;">You&rsquo;ll see two options. Pick whichever is easier:</p>
          <ul>
            <li><strong>Option A — send the link:</strong> copy the <code>kiriengine.app/share/d&hellip;</code> download link and <strong>paste it in a reply to your order email</strong>. I&rsquo;ll download the model from there.</li>
            <li><strong>Option B — send the file:</strong> log in to <a href="https://www.kiriengine.app/webapp" target="_blank" rel="noopener" style="color:var(--accent);">kiriengine.app/webapp</a> on a computer, download the STL file, then <strong>upload it to the private Dropbox folder</strong> in your order email.</li>
          </ul>
          <div class="kgm-note"><strong>Reply or Dropbox only</strong> — any other method won&rsquo;t be connected to your order. Also include your <strong>EU shoe size</strong> if you haven&rsquo;t already.</div>
        </div>
      </div>

      <hr style="border:none;border-top:var(--bw) solid var(--hairline);margin:2rem 0;">
      <p style="color:var(--muted);font-size:0.88rem;line-height:1.7;"><strong style="color:var(--text);">That&rsquo;s it.</strong> I&rsquo;ll confirm receipt within 1 business day and let you know when your insoles are in the print queue.</p>
    </div>
  </div>
</div>

<style>
  .kgm-overlay { position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,.65);display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:2rem 1rem 4rem; }
  .kgm-box { position:relative;background:var(--bg);border:var(--bw) solid var(--text);border-radius:var(--radius);max-width:640px;width:100%;padding:2.5rem 2rem 2rem; }
  .kgm-close { position:absolute;top:1rem;right:1rem;width:2rem;height:2rem;border:var(--bw) solid var(--text);border-radius:50%;background:transparent;color:var(--text);font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center; }
  .kgm-close:hover { background:var(--accent);color:#fff;border-color:var(--accent); }
  .kgm-apps { display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.75rem; }
  .kgm-apps a { font-family:var(--font-mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);border:var(--bw) solid var(--accent);border-radius:var(--radius);padding:.35rem .7rem;text-decoration:none;transition:background .15s,color .15s; }
  .kgm-apps a:hover { background:var(--accent);color:#fff; }
  .kgm-step { display:grid;grid-template-columns:2.25rem 1fr;gap:0 1rem;margin-bottom:2rem;align-items:start; }
  .kgm-n { width:2.25rem;height:2.25rem;border-radius:50%;background:var(--accent);color:#fff;font-family:var(--font-head);font-weight:700;font-size:.9rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:.1rem; }
  .kgm-body h3 { font-size:1rem;margin:0 0 .45rem;line-height:1.3; }
  .kgm-body p,.kgm-body li { color:var(--muted);line-height:1.65;font-size:.92rem; }
  .kgm-body ul,.kgm-body ol { margin:.3rem 0 .6rem 1.1rem; }
  .kgm-body strong { color:var(--text); }
  .kgm-img1 { grid-column:1;margin-top:.75rem;border-radius:var(--radius);overflow:hidden;border:var(--bw) solid var(--hairline);max-width:240px; }
  .kgm-img1 img { display:block;width:100%;height:auto; }
  .kgm-img2 { display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-top:.75rem; }
  .kgm-img2 img { display:block;width:100%;height:auto;border-radius:var(--radius);border:var(--bw) solid var(--hairline); }
  .kgm-note { background:var(--accent-soft);border-left:3px solid var(--accent);border-radius:0 var(--radius) var(--radius) 0;padding:.7rem .9rem;color:var(--muted);font-size:.86rem;line-height:1.6;margin-top:.75rem; }
  .kgm-note strong { color:var(--text); }
  @media (max-width:500px) { .kgm-img2 { grid-template-columns:1fr; } .kgm-box { padding:2rem 1rem 1.5rem; } }
  /* insole order form total */
  #insole-order { max-width:560px; margin-left:auto; margin-right:auto; }
  .insole-total { display:flex; align-items:baseline; gap:0.5rem; margin:1.25rem 0 0.25rem; font-family:var(--font-mono); }
  .insole-total span:first-child { font-size:0.7rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); }
  .insole-total strong { font-family:var(--font-head); font-weight:700; font-size:1.4rem; color:var(--text); }
</style>

<script>
  // Commerce hooks — Stripe links
  (function () {
    document.querySelectorAll('[data-stripe-link]').forEach(function (a) {
      var l = a.getAttribute('data-stripe-link');
      if (l) { a.setAttribute('href', l); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  })();

  // Kiri Engine scan guide modal — deep-linkable via /forge/products/#scan-guide
  (function () {
    var overlay = document.getElementById('kiri-guide-overlay');
    if (!overlay) return;
    function openModal() { overlay.removeAttribute('hidden'); document.body.style.overflow = 'hidden'; if (location.hash !== '#scan-guide') history.replaceState(null, '', '#scan-guide'); }
    function closeModal() { overlay.setAttribute('hidden', ''); document.body.style.overflow = ''; if (location.hash === '#scan-guide') history.replaceState(null, '', location.pathname + location.search); }
    document.querySelectorAll('.kiri-guide-open').forEach(function (el) {
      el.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
    });
    overlay.querySelector('.kgm-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    if (location.hash === '#scan-guide') openModal();   // open straight from an email link
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

  // Insole order form → posts a products[] array to the FORGE products webhook.
  (function () {
    var WEBHOOK = 'https://hook.eu1.make.com/u91iw4wqrdqdnjydmg2ttsi56y15c1a9'; // unified Intake webhook (routes by form_type)
    var form = document.getElementById('insole-order'); if (!form) return;
    var PRICES = { Orthopedic: 35000, Comfort: 30000 };
    var COLOURS = { Orthopedic: ['Blue', 'Black'], Comfort: ['Red', 'Black'] };
    // Customer-facing colour → real inventory SKU (what Make looks up by name).
    var MATERIAL = {
      'Orthopedic|Blue': 'Fiberlogy FiberFlex 30D Blue',
      'Orthopedic|Black': 'Recreus Filaflex Foamy Black',
      'Comfort|Red': 'Recreus Filaflex Red',
      'Comfort|Black': 'Recreus Filaflex Foamy Black'
    };
    var colWrap = document.getElementById('ins-colours');
    var priceEl = document.getElementById('ins-price');
    var errEl = document.getElementById('ins-err');
    var EUR_RATE = 354.13; // HUF per EUR — refresh periodically
    function fmt(n) { return n.toLocaleString('hu-HU') + ' Ft · ≈ ' + Math.ceil(n / EUR_RATE) + ' €'; }
    function curType() { var c = form.querySelector('input[name=ins_type]:checked'); return c ? c.value : 'Orthopedic'; }
    function renderColours() {
      var t = curType(); colWrap.innerHTML = '';
      COLOURS[t].forEach(function (col, i) {
        colWrap.insertAdjacentHTML('beforeend', '<label class="of-choice"><input type="radio" name="ins_colour" value="' + col + '"' + (i === 0 ? ' checked' : '') + '><span>' + col + '</span></label>');
      });
      priceEl.textContent = fmt(PRICES[t]);
    }
    form.querySelectorAll('input[name=ins_type]').forEach(function (r) { r.addEventListener('change', renderColours); });
    renderColours();

    document.getElementById('ins-submit').addEventListener('click', function () {
      var btn = this; errEl.hidden = true;
      var email = form.querySelector('[name=email]');
      if (!email.value) { errEl.textContent = 'Please add your email so I can send the invoice.'; errEl.hidden = false; email.focus(); return; }
      var type = curType();
      var colour = (form.querySelector('input[name=ins_colour]:checked') || {}).value || '';
      var data = new URLSearchParams();
      var pfval = function(n) { var el = form.querySelector('[name=' + n + ']'); return el ? el.value : ''; };
      data.append('form_type', 'product');
      data.append('_secret', 'forge3po');
      data.append('deadline', '');
      ['name', 'email', 'phone', 'ship_country', 'ship_postcode', 'ship_city', 'ship_street', 'ship_number', 'ship_unit'].forEach(function (n) { data.append(n, pfval(n)); });
      var qty = parseInt((form.querySelector('[name=ins_qty]') || {}).value, 10) || 1;
      var matName = MATERIAL[type + '|' + colour] || '';
      data.append('material_name', matName);
      data.append('ins_type', type);
      data.append('ins_colour', colour);
      data.append('ins_qty', String(qty));
      data.append('cart', 'Insole · ' + type + ' · ' + colour + ' × ' + qty + (matName ? ' (' + matName + ')' : ''));
      btn.disabled = true; btn.textContent = 'Sending…';
      fetch(WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: data.toString() })
        .then(function (r) { if (!r.ok) throw new Error('the server returned ' + r.status); return r; })
        .then(function () {
          document.getElementById('ins-done').hidden = false;
          Array.prototype.forEach.call(form.querySelectorAll('.of-grid2, .of-field, .of-submit, .insole-total'), function (e) { e.style.display = 'none'; });
        })
        .catch(function (e) {
          errEl.textContent = "Couldn't send — " + e.message + ". Please try again, or email 3po@3po3d.com.";
          errEl.hidden = false; btn.disabled = false; btn.textContent = 'Place order';
        });
    });
    var again = document.getElementById('ins-again');
    if (again) again.addEventListener('click', function () { location.reload(); });
  })();
</script>
