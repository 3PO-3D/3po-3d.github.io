---
title: "FORGE — Process"
description: "How a job moves through the workshop — scan or model, slice and quote, print, finish, hand-off — plus the machine spec, turnaround, shipping and liability."
permalink: /forge/process/
---

{% include forge-subnav.html %}

<section class="section">
  <div class="container">
    <div class="section-head">
      <p class="mono-label">03 — Process</p>
      <h2>How a job moves through the workshop.</h2>
      <p class="lead">Five stages, fully in-house. You can jump in at any of them — and you always see a fixed price before anything prints.</p>
    </div>

    <div style="display:grid; grid-template-columns: 1.15fr 0.85fr; gap:3.5rem; align-items:start;" class="process-cols">
      <div class="steps">
        <div class="step on"><div class="step-n">1</div><div><h3>Scan or Model</h3><p>Start from your file, or I scan a real object / model it from scratch. Everything is repaired and made watertight before slicing.</p></div></div>
        <div class="step"><div class="step-n">2</div><div><h3>Slice &amp; Quote</h3><p>Material, infill, orientation and supports are dialled in. You get a fixed price and timeline before anything prints.</p></div></div>
        <div class="step"><div class="step-n">3</div><div><h3>Print</h3><p>Run on the right machine for the part — large-format for big work, the enclosed TPU-tuned machine for flexibles. Big parts come off in one piece.</p></div></div>
        <div class="step"><div class="step-n">4</div><div><h3>Finish</h3><p>Optional post-processing: support removal, sanding, priming and paint, plus assembly for multi-part pieces.</p></div></div>
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
          <div class="spec-card"><span class="k">Extras</span><span class="v">Scanning · Finishing · CAD</span></div>
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

{% include forge-crosssell.html context="process" %}

<style>
  @media (max-width: 760px) { .process-cols { grid-template-columns: 1fr !important; gap: 2rem !important; } }
</style>
