---
layout: default
title: "C.H.R.O.N.O.S. — How It Works"
---

# How It Works

## The Workflow in 4 Steps

### 1. Open the CHRONOS Dashboard

The CHRONOS dashboard lives inside Cinema 4D as a dockable panel. Open it from the Plugins menu. It connects automatically to your active scene.

### 2. Define Your Branches and Variables

A **Branch** is a named grouping — typically mapped to an object or system in your scene (a light rig, a hero object, a material set).

Inside each Branch, you register **Variables** — the specific parameters you want CHRONOS to track. Give each one a name and a type.

> Example: Branch `Key_Light` with Variable `Intensity` (float), Variable `Colour` (colour), Variable `Enabled` (bool)

### 3. Create Generations

A **Generation** is a named variation context. Create as many as you need.

In each Generation, set the values for your Variables. Each Generation remembers its own values independently. Switch Generations — CHRONOS applies all values to the scene in one clean pass.

> Example Generations: `Hero_Lighting`, `Turntable_White`, `Dark_Mood`, `Ecom_Flat`

### 4. Switch and Iterate

Click any Generation in the dashboard to activate it. CHRONOS applies its values instantly. No undo required to go back — just click the other Generation.

Use inheritance to build variation trees: a `Base_Setup` parent drives shared values, while child Generations only define what's different.

---

## Key Concepts

| Concept | What It Is |
|---|---|
| **Generation** | A named variation context — one possible state of your scene |
| **Branch** | A named grouping of Variables, typically one per scene system |
| **Variable** | A single tracked parameter with a name, type, and per-Generation value |
| **Inheritance** | A Generation can inherit from a parent, overriding only what it needs |
| **Context** | The active Take in C4D — CHRONOS reads from and writes to the active context |

[Back to CHRONOS](./)
