---
layout: default
title: "C.H.R.O.N.O.S. — Roadmap"
---

# Roadmap

## V1 — Core Plugin (Current)

The first release of CHRONOS focuses on the core non-destructive variation system inside Cinema 4D.

**What's in V1:**
- Full Generation management (create, switch, delete, inherit)
- Branch and Variable system with all core types
- CHRONOS Dashboard — dockable panel inside Cinema 4D
- Non-destructive write layer — zero scene corruption risk
- macOS + Windows support
- Single sidecar file persistence

---

## V1.1 — Import / Export

Share CHRONOS setups across scenes and teams. Export a Branch definition or full Generation set as a portable file. Import it into any scene.

---

## V2 — SQLite Persistence

Replace the sidecar JSON with a proper SQLite database for each project. Benefits:
- Faster reads on large scenes
- Full query history
- Easier debugging and inspection

---

## V3 — Standalone Flutter Dashboard

A standalone desktop app that connects to your Cinema 4D session over a local API. Work with your Generations from a separate window — on a second monitor, on a second machine, or without opening C4D.

Built with Flutter — native performance on macOS and Windows.

---

## V4 — Omniverse / USD Bridge

CHRONOS Generations export as USD variants. Every named Generation becomes a USD variant set — compatible with Omniverse, Houdini, Unreal, and the full USD pipeline.

Take your variation data beyond Cinema 4D.

---

## Philosophy

CHRONOS is built on a single principle: **your scene should never be held hostage by a variation workflow.**

No duplicate files. No manual state management. No destructive changes. CHRONOS is infrastructure — it stays out of your way until you need it, and when you need it, it's always there.

[Back to CHRONOS](./)
