---
title: "How to Scan Your Foot — Kiri Engine Guide"
description: "Step-by-step guide for scanning your foot with the free Kiri Engine app to get your custom 3PO insoles."
permalink: /forge/insole-guide/
sitemap: false
---

<style>
  .guide { max-width: 680px; margin: 0 auto; padding: 3rem 1.5rem 5rem; }
  .guide h1 { font-size: 2rem; margin-bottom: 0.4rem; }
  .guide .lead { color: var(--muted); font-size: 1.05rem; line-height: 1.65; margin-bottom: 2rem; }
  .guide-apps { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
  .guide-apps a { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); border: var(--bw) solid var(--accent); border-radius: var(--radius); padding: 0.35rem 0.7rem; text-decoration: none; transition: background .15s, color .15s; }
  .guide-apps a:hover { background: var(--accent); color: #fff; }
  .guide-step { display: grid; grid-template-columns: 2.25rem 1fr; gap: 0 1rem; margin-bottom: 2.25rem; align-items: start; }
  .guide-n { width: 2.25rem; height: 2.25rem; border-radius: 50%; background: var(--accent); color: #fff; font-family: var(--font-head); font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem; }
  .guide-body h3 { font-size: 1rem; margin: 0 0 0.45rem; line-height: 1.3; }
  .guide-body p, .guide-body li { color: var(--muted); line-height: 1.65; font-size: 0.92rem; }
  .guide-body ul, .guide-body ol { margin: 0.3rem 0 0.6rem 1.1rem; }
  .guide-body strong { color: var(--text); }
  .guide-img1 { margin-top: 0.75rem; border-radius: var(--radius); overflow: hidden; border: var(--bw) solid var(--hairline); max-width: 240px; }
  .guide-img1 img { display: block; width: 100%; height: auto; }
  .guide-img2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-top: 0.75rem; }
  .guide-img2 img { display: block; width: 100%; height: auto; border-radius: var(--radius); border: var(--bw) solid var(--hairline); }
  .guide-note { background: var(--accent-soft); border-left: 3px solid var(--accent); border-radius: 0 var(--radius) var(--radius) 0; padding: 0.7rem 0.9rem; color: var(--muted); font-size: 0.86rem; line-height: 1.6; margin-top: 0.75rem; }
  .guide-note strong { color: var(--text); }
  .guide-divider { border: none; border-top: var(--bw) solid var(--hairline); margin: 2.5rem 0; }
  @media (max-width: 500px) { .guide-img2 { grid-template-columns: 1fr; } }
</style>

<div class="guide">

  <p class="mono-label">Insole scan guide</p>
  <h1>How to scan your foot</h1>
  <p class="lead">Your insoles are shaped from a 3D scan of your foot. Scan it with <strong>Kiri Engine</strong> — free on your phone. Takes about 10 minutes.</p>

  <div class="guide-apps">
    <a href="https://apps.apple.com/us/app/kiri-engine-3d-scanner-lidar/id1577127142" target="_blank" rel="noopener">App Store &rarr;</a>
    <a href="https://play.google.com/store/search?q=kiri+engine&c=apps" target="_blank" rel="noopener">Google Play &rarr;</a>
    <a href="https://www.kiriengine.app/webapp" target="_blank" rel="noopener">Web App &rarr;</a>
  </div>

  <!-- Step 1 -->
  <div class="guide-step">
    <div class="guide-n">1</div>
    <div class="guide-body">
      <h3>Set up</h3>
      <p>Place a sheet of <strong>A4 paper flat on the floor</strong> and stand your bare foot on it. Keep your foot still and relaxed.</p>
      <ul>
        <li>Bare foot, flat and natural</li>
        <li>Plain floor, decent light — no direct sunlight</li>
      </ul>
    </div>
  </div>

  <!-- Step 2 -->
  <div class="guide-step">
    <div class="guide-n">2</div>
    <div class="guide-body">
      <h3>Open Kiri Engine and start a scan</h3>
      <ol>
        <li>Tap <strong>+</strong> at the bottom of the home screen</li>
        <li>Choose <strong>Photo Scan</strong></li>
        <li>Tap <strong>Take Photos / Video</strong></li>
      </ol>
      <div class="guide-img1">
        <img src="{{ '/assets/img/guides/kiri_instructions/1..jpg' | relative_url }}" loading="lazy" alt="Kiri Engine home screen: Photo Scan, Take Photos / Video, Upload from Local">
      </div>
    </div>
  </div>

  <!-- Step 3 -->
  <div class="guide-step">
    <div class="guide-n">3</div>
    <div class="guide-body">
      <h3>Scan your foot</h3>
      <p>The most important data is the <strong>arch and heel shape</strong> — get the camera as low as possible. Best technique: <strong>place your phone on the floor</strong> and slowly circle around your foot at ground level.</p>
      <ul>
        <li>Aim for <strong>60–80 photos</strong>, or use <strong>video mode</strong> — both are free and video is often more accurate</li>
        <li>Move slowly and steadily — blurry frames break the mesh</li>
        <li>Keep your foot <strong>completely still</strong> during the scan</li>
        <li>Avoid deep shadows; a lamp on the opposite side helps</li>
      </ul>
    </div>
  </div>

  <!-- Step 4 -->
  <div class="guide-step">
    <div class="guide-n">4</div>
    <div class="guide-body">
      <h3>Set up &amp; upload</h3>
      <p>When you finish shooting, the app opens the <strong>Edit</strong> screen. Set these options before uploading:</p>
      <ul>
        <li><strong>Name</strong> — enter any name so you can find the scan later</li>
        <li><strong>Polygon Count</strong> — select <strong>High</strong></li>
        <li><strong>Texture Resolution</strong> — select <strong>4K</strong></li>
        <li><strong>File Format</strong> — select <strong>STL</strong></li>
      </ul>
      <p>Then tap <strong>Upload</strong>. Wait for the progress bar and the <em>Upload Successful</em> confirmation.</p>
      <div class="guide-img2">
        <img src="{{ '/assets/img/guides/kiri_instructions/3.jpg' | relative_url }}" loading="lazy" alt="Edit screen: Name field and Upload button circled">
        <img src="{{ '/assets/img/guides/kiri_instructions/2.jpg' | relative_url }}" loading="lazy" alt="Edit screen: High polygon, 4K texture, STL format circled">
      </div>
      <div class="guide-img2" style="margin-top:0.4rem;">
        <img src="{{ '/assets/img/guides/kiri_instructions/4.jpg' | relative_url }}" loading="lazy" alt="Uploading 100% progress screen">
        <img src="{{ '/assets/img/guides/kiri_instructions/5.jpg' | relative_url }}" loading="lazy" alt="Upload Successful confirmation">
      </div>
    </div>
  </div>

  <!-- Step 5 -->
  <div class="guide-step">
    <div class="guide-n">5</div>
    <div class="guide-body">
      <h3>Get the download link &amp; send it</h3>
      <p>After upload you&rsquo;ll see a <strong>Processing</strong> notification — this takes a few minutes. Once the 3D model is ready, open it and tap <strong>Export</strong>.</p>
      <p>On the Export screen, tap <strong>&ldquo;Can&rsquo;t receive emails?&rdquo;</strong> at the bottom. Under <strong>Option A</strong>, copy the download link (<code>kiriengine.app/share/d&hellip;</code>).</p>
      <div class="guide-img2">
        <img src="{{ '/assets/img/guides/kiri_instructions/6.jpg' | relative_url }}" loading="lazy" alt="Processing notification with foot scan thumbnails">
        <img src="{{ '/assets/img/guides/kiri_instructions/7.jpg' | relative_url }}" loading="lazy" alt="Completed 3D foot model with Export button circled">
      </div>
      <div class="guide-img2" style="margin-top:0.4rem;">
        <img src="{{ '/assets/img/guides/kiri_instructions/8.jpg' | relative_url }}" loading="lazy" alt="Export screen — tap Can't receive emails at the bottom">
        <img src="{{ '/assets/img/guides/kiri_instructions/9.jpg' | relative_url }}" loading="lazy" alt="Option A: copy the kiriengine.app share download link">
      </div>
      <p style="margin-top:0.9rem;">Send the link to me in <strong>one of two ways only</strong> — any other method won&rsquo;t be connected to your order:</p>
      <ul>
        <li><strong>Reply to your order email</strong> — paste the <code>kiriengine.app/share/&hellip;</code> link in the reply</li>
        <li><strong>Upload directly to Dropbox</strong> — use the private upload link in your order email</li>
      </ul>
      <div class="guide-note"><strong>Also include your EU shoe size</strong> if you haven&rsquo;t already — it speeds things up.</div>
    </div>
  </div>

  <hr class="guide-divider">
  <p style="color:var(--muted);font-size:0.88rem;line-height:1.7;"><strong style="color:var(--text);">That&rsquo;s it.</strong> I&rsquo;ll confirm receipt within 1 business day and let you know when your insoles are in the print queue.</p>

</div>
