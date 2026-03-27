# CHRONOS_Site — Claude Code Bootstrap

## What Is This Project?

CHRONOS_Site is the **3PO company website + CHRONOS product pages** — a Jekyll static site hosted on GitHub Pages at `https://3po-3d.github.io`. Content originates from the Obsidian vault's `09_PUBLISH/` folder and is converted to Jekyll-compatible markdown.

---

## ⚡ First Action — Every Session, No Exceptions

```
Step 1 — Git health check
  Bash: git status
  → If uncommitted changes: commit first.
  → Only proceed when working tree is clean.

Step 2 — Load vault chain (full routing)
  Read: D:\Dropbox\[3PO]_CodeVault\HELPERS\CLAUDE.md
  Read: D:\Dropbox\[3PO]_CodeVault\Projects\CHRONOS\CLAUDE.md
  Read: D:\Dropbox\[3PO]_CodeVault\Projects\CHRONOS\09_PUBLISH\CLAUDE.md
  → 09_PUBLISH/CLAUDE.md is the operational brain for this project.

Step 3 — Load publish stepmap
  Read: D:\Dropbox\[3PO]_CodeVault\Projects\CHRONOS\09_PUBLISH\publish_stepmap.json
  → Find step where status = "active"
  → Read context_handoff
  → Read all files in vault_refs

Step 4 — Announce
  "Rules loaded. Context restored. Active step: [id] — [title]."
```

---

## Paths

| Resource | Path |
|---|---|
| Vault root | `D:\Dropbox\[3PO]_CodeVault\` |
| Vault CHRONOS | `D:\Dropbox\[3PO]_CodeVault\Projects\CHRONOS\` |
| Vault 09_PUBLISH | `D:\Dropbox\[3PO]_CodeVault\Projects\CHRONOS\09_PUBLISH\` |
| Vault HELPERS | `D:\Dropbox\[3PO]_CodeVault\HELPERS\` |
| Site root | `D:\0._3D_Dev\1._PROJECTS\4._PLUGINS\CHRONOS_Site\` |
| CHRONOS_Project | `D:\0._3D_Dev\1._PROJECTS\4._PLUGINS\CHRONOS_Project\` |
| Publish stepmap | `...09_PUBLISH\publish_stepmap.json` |
| Brand guide | `...09_PUBLISH\brand_guide.md` |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Generator | Jekyll (GitHub Pages gem) |
| Hosting | GitHub Pages (`3po-3d.github.io`) |
| Styling | SCSS (custom, no theme) |
| Markdown | kramdown + GFM + Rouge |
| Fonts | DM Sans, Space Grotesk, IBM Plex Mono (Google Fonts) |
| Plugins | jekyll-feed, jekyll-sitemap |

---

## Git Rules

- **Branch:** `main` (GitHub Pages deploys from main)
- **No develop branch** — this is a static site, not a plugin
- **Commit format:** `<type>(<scope>): <description>`
  - Types: `content | style | feat | fix | chore | docs`
  - Examples: `content(chronos): fix inheritance terminology`, `style(theme): add oxidized terminal dark theme`
- **Push triggers deploy** — GitHub Pages rebuilds on push to main

---

## Agents Available

| Agent | File | When to Use |
|---|---|---|
| `orchestrator` | `agents/orchestrator.md` | Start of every session — audit + dispatch |
| `publisher` | `agents/publisher.md` | Content pipeline: vault → Jekyll. Create, update, flag pages. |
| `ui_validator` | `agents/ui_validator.md` | Build validation, brand audit, accessibility, links |

---

## Skills Available

| Skill | File | Purpose |
|---|---|---|
| `content_sync` | `skills/content_sync.md` | Detect drift between vault and site |
| `obsidian_to_jekyll` | `skills/obsidian_to_jekyll.md` | Convert Obsidian markdown to Jekyll |
| `brand_audit` | `skills/brand_audit.md` | Validate against brand_guide.md |
| `page_scaffold` | `skills/page_scaffold.md` | Create new Jekyll pages |
| `deploy_verify` | `skills/deploy_verify.md` | Post-push build + link validation |

---

## Work Cycle

```
orchestrator → reads vault + site + stepmap → audit report + dispatch
    │
    ├──► publisher → converts/creates/updates content pages
    │
    └──► ui_validator → builds Jekyll, checks brand, checks accessibility
```

---

## Cross-Project Awareness

The orchestrator reads the CHRONOS_Project stepmap (`02_ROADMAP/stepmap.json`) to detect when new features land that need site updates. It also reads `architecture.md` and `philosophy.md` as the source of truth for product terminology.

**Terminology enforcement:** Agents must use the correct C.H.R.O.N.O.S. vocabulary:
- **Context** = top-level scope = C4D Take
- **Blueprint** = auto-created immutable root Generation per Context — source of truth
- **Registry** = where Variables are registered and organised globally
- **Variable** = individual tracked parameter — registered in the Registry, overridden per-Generation
- **Generation** = named variation state — overrides registered Variables, inherits the rest
- **Branch** = subtree of Generations — rooted at a Blueprint or a Baked parent
- **Link** = LINKED_PARENT — dynamic inheritance (live, sparse)
- **Bake** = BAKED_PARENT — isolated snapshot (frozen, sealed)
- **Fork Point** = where a live Branch splits into a sealed (Baked) deliverable

---

## Site Structure

```
CHRONOS_Site/
├── _layouts/           ← default, home, chronos, chronos-home
├── _includes/          ← header, footer, chronos-nav
├── assets/
│   ├── css/style.scss  ← full brand system (5 themes planned)
│   ├── img/            ← logos (3PO + CHRONOS variants)
│   └── txt/            ← color gradient presets (reference)
├── chronos/            ← product pages (7 files)
├── index.md            ← 3PO company home
├── _config.yml         ← Jekyll config
├── Gemfile             ← Ruby dependencies
└── .claude/
    ├── CLAUDE.md       ← this file
    ├── settings.json   ← MCP permissions
    ├── agents/         ← orchestrator, publisher, ui_validator
    └── skills/         ← 5 publishing skills
```

---

## Brand Quick Reference

| Role | 3PO | CHRONOS |
|---|---|---|
| Background | Warm Cream `#F0EAE0` | same |
| Text | Deep Chocolate `#713A23` | same |
| Secondary | Dark Burgundy `#663333` | same |
| Accent | Retro Mint `#40E0C0` | Harvest Gold `#DDAA33` |
| Tone | Direct, no filler, benefit-first | same |

Full guide: `09_PUBLISH/brand_guide.md`

---

## Related

- `09_PUBLISH/CLAUDE.md` — Operational brain (publish workflow, agent roles, quality gates)
- `09_PUBLISH/publish_stepmap.json` — Doubly linked execution plan
- `HELPERS/CLAUDE.md` — Vault router and shared infrastructure
- `Projects/CHRONOS/CLAUDE.md` — Plugin project entry point
