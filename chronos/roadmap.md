---
title: "CHRONOS — Roadmap"
description: "V1 feature status and the full planned arc — from import/export through AI-assisted authoring."
---

# Roadmap

CHRONOS is built to grow. V1 ships the core variation system. Every release after it expands the reach of that system — into new workflows, new platforms, and new scales.

<hr class="sep-accent">

## V1 — Core Plugin
<span class="badge live">Live</span>

Everything you need to manage scene variations inside Cinema 4D.

| Feature | Status |
|---|---|
| Generation create, switch, delete | ✅ |
| Generation rename | 🔵 V1.1 |
| Link — live parent–child inheritance | ✅ |
| Bake — sealed, frozen deliverables | ✅ |
| Blueprint — immutable root per Context | ✅ |
| Variable types: Number, Colour, Vector, Bool, String, Object reference | ✅ |
| Registry — variable registration and Branch grouping | ✅ |
| Custom topology — flat, chain, or any tree shape | ✅ |
| Non-destructive write layer | ✅ |
| CHRONOS Dashboard — dockable C4D panel | ✅ |
| macOS and Windows support | ✅ |

<div class="sep-labeled"><span class="sep-label-text">V1.1 and beyond — planned releases</span></div>

<div class="roadmap-list">

<div class="roadmap-item">
  <div class="version-badge">
    <span class="v-number">V1.1</span>
    <span class="v-label">Next</span>
  </div>
  <div class="roadmap-content">
    <h3>Import / Export Presets</h3>
    <p>Export any Branch definition or full Generation set as a portable preset file. Import it into any project — same structure, same values, ready to use. Studio-shared lighting rigs, standardised camera setups, reusable material states across a product line.</p>
  </div>
</div>

<div class="roadmap-item">
  <div class="version-badge">
    <span class="v-number">V2</span>
    <span class="v-label">Upcoming</span>
  </div>
  <div class="roadmap-content">
    <h3>High-Performance Storage</h3>
    <p>CHRONOS V2 replaces the per-project JSON sidecar with a structured SQLite database. Faster reads at studio scale, full per-value edit history, and the persistence backbone required for everything in V3 and beyond. Every Generation switch, every value change — tracked and queryable.</p>
  </div>
</div>

<div class="roadmap-item">
  <div class="version-badge">
    <span class="v-number">V3</span>
    <span class="v-label">Planned</span>
  </div>
  <div class="roadmap-content">
    <h3>Standalone Dashboard + OpenUSD Bridge</h3>
    <p>CHRONOS beyond Cinema 4D. Two major expansions:</p>
    <p><strong>Standalone Dashboard</strong> — a native desktop application (Flutter) that connects to your Cinema 4D session over a local WebSocket. Manage your entire Generation tree from a separate window, on a second monitor, or independently of C4D. Features a Miro-style visual tree editor with drag-to-reparent, full Generation rename and reorganisation, and a live preview panel. This becomes the primary home of CHRONOS.</p>
    <p><strong>OpenUSD Bridge</strong> — every CHRONOS Generation becomes a USD Variant. Export variation data as USD VariantSets, compatible with NVIDIA Omniverse, Houdini SOLARIS, Autodesk Maya 2024+, Unreal Engine 5, and Blender 4+. Your scene variations travel beyond Cinema 4D into any USD-native pipeline.</p>
  </div>
</div>

<div class="roadmap-item">
  <div class="version-badge">
    <span class="v-number">V4</span>
    <span class="v-label">Planned</span>
  </div>
  <div class="roadmap-content">
    <h3>Plugin Ecosystem</h3>
    <p>Hot-pluggable extensions for CHRONOS. Three built-in plugins ship with V4:</p>
    <p><strong>Macro Engine</strong> — define logic gates, conditions, and scripts that run on Generation switches. Automate multi-step scene operations, trigger render passes, apply conditional overrides based on Variable values.</p>
    <p><strong>Batch Renderer</strong> — render all Generations (or a selected subset) as a single headless job. Output naming driven by Generation names. Integrates with the Scene Doctor for pre-render validation.</p>
    <p><strong>Scene Doctor</strong> — a rule-based scene health system. Define validation rules (missing textures, unlocked objects, naming violations, missing Variables) and run them before any render or export. Auto-fix where possible.</p>
  </div>
</div>

<div class="roadmap-item">
  <div class="version-badge">
    <span class="v-number">V5</span>
    <span class="v-label">Planned</span>
  </div>
  <div class="roadmap-content">
    <h3>Studio Sync and Collaboration</h3>
    <p>CHRONOS as a multi-seat studio resource. Three layers:</p>
    <p><strong>GitHub Integration</strong> — GitOps-compatible export of the full Generation tree as deterministic JSON. Automatic validation via GitHub Actions — every push runs the Scene Doctor and Batch Renderer checks. Integrated with CHRONOS versioning so every commit maps to a named Generation state.</p>
    <p><strong>Solo Remote</strong> — work on your CHRONOS project from any machine, anywhere. Supabase relay keeps your local session in sync without exposing your machine to the internet.</p>
    <p><strong>Team Collaboration</strong> — multiple artists in the same Generation tree simultaneously. Real-time session sync via Supabase Broadcast. Presence awareness — see which Generation each team member is on. Conflict resolution built in.</p>
  </div>
</div>

<div class="roadmap-item">
  <div class="version-badge">
    <span class="v-number">V6</span>
    <span class="v-label">Planned</span>
  </div>
  <div class="roadmap-content">
    <h3>AI-Assisted Authoring</h3>
    <p>An AI engine that understands your Generation structure and works inside it.</p>
    <p><strong>Automatic scene creation</strong> — describe a variation in plain language, CHRONOS proposes the full Variable overrides and creates the Generation. You review a diff before anything touches your scene.</p>
    <p><strong>Macro setup</strong> — describe a scene automation in natural language, the AI generates the Macro Engine logic. Inspect, edit, approve.</p>
    <p><strong>Scene Doctor automation</strong> — the AI reads your Scene Doctor rules and your scene state, proposes fixes for every violation, applies them through the standard CHRONOS write layer. One approval, zero manual work.</p>
    <p>Every AI action routes through the standard CHRONOS write layer — no direct scene mutations, no surprises. You approve. CHRONOS executes.</p>
  </div>
</div>

</div>

<hr class="sep-major">

> CHRONOS is built on one idea: **your scene should never be held hostage by a variation workflow.**
> No duplicate files. No manual state management. No destructive changes. Always non-destructive. Always expanding.

<hr class="sep-thin">

<div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:2rem;">
  <a href="{{ '/chronos/workflow/' | relative_url }}" class="btn btn-outline">How It Works →</a>
  <a href="{{ '/chronos/get-it/' | relative_url }}" class="btn btn-accent">Get CHRONOS →</a>
</div>
