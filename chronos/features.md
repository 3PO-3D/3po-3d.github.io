---
layout: default
title: "C.H.R.O.N.O.S. — Features"
---

# Features

## Non-Destructive Variations

Every change you make in a Generation is **local to that Generation**. The base scene state is never touched. Switch Generations — everything snaps to its correct state instantly.

No undo history pollution. No scene duplication. No risk of losing your base setup.

---

## Generations

A **Generation** is a named variation context. Think of it as a named preset that knows about every parameter you've told it to care about.

- Create as many Generations as you need
- Name them anything: `Hero_Shot`, `Turntable`, `Ecom_White`, `Preview`
- Switch between them in real time inside Cinema 4D
- Each Generation remembers its own state independently

---

## Inheritance

Generations can inherit from a **parent Generation**. A child Generation starts with all of its parent's values and only overrides what it needs to.

Change the parent — the child updates automatically, unless it has explicitly overridden that value.

This means a "Product Line" Generation can drive 12 colour variant children. Change the base lighting once — all 12 update.

---

## Variables

Any parameter in your scene can be registered as a **Variable** — a named, typed value that CHRONOS tracks across Generations.

Supported types include:
- Numbers (integers, floats)
- Colours
- Vectors
- Text strings
- Booleans (on/off)
- Object references

---

## Branches

A **Branch** is a structural grouping of Variables. Branches map to objects or systems in your scene — a light rig, a material set, a camera.

Branches are the unit of organisation. Variables live inside Branches.

---

## Non-Destructive by Design

CHRONOS never modifies your scene objects directly during a Generation switch. All state is managed through a controlled write layer that:

1. Reads the active Generation's values
2. Applies them to scene objects in a single controlled pass
3. Never triggers feedback loops or race conditions

Your scene stays clean. CHRONOS stays in control.

---

## Single File

Everything — all Generations, all Variables, all Branch definitions — is stored in a single sidecar data structure alongside your `.c4d` file. One scene. One file. Complete history.

---

## V1 Scope

| Feature | V1 Status |
|---|---|
| Generation create / switch / delete | Done |
| Variable types: Number, Colour, Vector, Bool, String | Done |
| Parent-child Generation inheritance | Done |
| Branch grouping and nesting | Done |
| Dashboard UI inside Cinema 4D | Done |
| Non-destructive write layer | Done |
| macOS + Windows support | Done |
| Import / Export | Coming in V1.1 |
| SQLite persistence | Phase 2 |
| Standalone Flutter dashboard | Phase 3 |

[Back to CHRONOS](./)
