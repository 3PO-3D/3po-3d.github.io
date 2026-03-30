---
title: "Get CHRONOS"
description: "Download CHRONOS for Cinema 4D. Requirements, installation, and licensing."
---

# Get CHRONOS

<div class="download-block">
  <p class="download-label">Download</p>
  <h2>CHRONOS V1</h2>
  <p>Cinema 4D 2024+ &nbsp;·&nbsp; macOS &amp; Windows &nbsp;·&nbsp; 30-day free trial included</p>
  <a href="https://3po3d.gumroad.com/l/chronos" class="btn btn-accent" target="_blank" rel="noopener">Download on Gumroad →</a>
</div>

---

## Requirements

<table class="req-table">
  <tr><th>Software</th><th>Version</th></tr>
  <tr><td>Cinema 4D</td><td>2024 or later</td></tr>
  <tr><td>macOS</td><td>12 Monterey or later</td></tr>
  <tr><td>Windows</td><td>10 or later (64-bit)</td></tr>
  <tr><td>Python</td><td>Included with Cinema 4D — nothing extra to install</td></tr>
</table>

---

## Installation

<div class="install-steps">
  <div class="step">
    <div class="step-num"></div>
    <div>
      <h3>Download</h3>
      <p>Download <code>CHRONOS_v1.zip</code> from Gumroad using the button above.</p>
    </div>
  </div>
  <div class="step">
    <div class="step-num"></div>
    <div>
      <h3>Copy to Plugins Folder</h3>
      <p>Unzip and copy the <code>CHRONOS</code> folder into your Cinema 4D plugins directory.</p>
      <p><code>macOS:</code> <code>~/Library/Preferences/Maxon/Cinema 4D/plugins/</code></p>
      <p><code>Windows:</code> <code>%AppData%\Maxon\Cinema 4D\plugins\</code></p>
    </div>
  </div>
  <div class="step">
    <div class="step-num"></div>
    <div>
      <h3>Open in Cinema 4D</h3>
      <p>Restart Cinema 4D. Open CHRONOS from <strong>Plugins → CHRONOS → Open Dashboard</strong>. That's it. No Python setup. No additional dependencies.</p>
    </div>
  </div>
</div>

---

## Trial and Licensing

**30-day free trial** — full functionality, no license key required. The trial starts on first launch. No account, no credit card.

After the trial: enter your Gumroad license key once. CHRONOS validates on first activation, then works fully **offline** from that point on. Single-seat license.

---

## Compatibility

| Cinema 4D Version | Status |
|---|---|
| 2025 | ✅ Tested |
| 2024 | ✅ Supported |
| 2023 and earlier | ✗ Not supported |

---

## First Launch

1. Open Cinema 4D and load any scene (or start a new one)
2. Go to **Plugins → CHRONOS → Open Dashboard**
3. Click **Activate** to connect to your scene
4. Your first Generation is created automatically
5. Start adding Branches and Variables

A pre-configured starter `.c4d` file is included in the download — a simple three-light setup managed by CHRONOS, a good starting point for understanding how the system connects.

---

## First Steps — Workflow in 4 Steps

### Step 1 — Activate

Open the dashboard from **Plugins → CHRONOS → Open Dashboard**. Click **Activate**. CHRONOS connects to your active `.c4d` file, reads the active Take as the Main Context, and auto-generates the Blueprint. You are live.

---

### Step 2 — Register Variables

Open the Registry panel. Create a Branch — name it after the scene system you want to track (`Key_Light`, `Materials`, `Camera`). Add Variables to it: give each one a name and a type. Variables are registered globally — every Generation you create can see and override them.

---

### Step 3 — Create Generations

Create a Generation from the Blueprint. Choose **Link** to inherit live from the Blueprint, or **Bake** to capture a frozen snapshot. Give it a name at creation. Set the values you want different — override only what changes. Everything else is inherited automatically.

---

### Step 4 — Switch and Iterate

Click any Generation in the dashboard. CHRONOS resolves the full value chain and applies it to the scene in one clean pass. Change a value on a parent Generation — every Linked child that hasn’t overridden it reflects the change automatically.

<a href="{{ '/chronos/workflow/' | relative_url }}" class="btn btn-outline">Full How It Works →</a>

---

## Support

Questions or issues? Use the Gumroad product page messaging — response within 24 hours on business days.

---

<div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:2rem;">
  <a href="{{ '/chronos/workflow/' | relative_url }}" class="btn btn-outline">How It Works →</a>
  <a href="{{ '/chronos/roadmap/' | relative_url }}" class="btn btn-outline">Roadmap →</a>
</div>
