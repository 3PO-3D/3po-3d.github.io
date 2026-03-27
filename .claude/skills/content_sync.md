---
name: content_sync
description: >
  Detect content drift between vault 09_PUBLISH source files and deployed
  CHRONOS_Site pages. Compares structure, frontmatter, and content sections.
  Produces a diff report showing what changed, what's missing, and what's stale.
used_by: orchestrator
---

# Skill: content_sync

## Purpose
Compare vault source of truth (09_PUBLISH/*.md) against deployed site pages and produce a structured drift report.

## Inputs
- Vault path: `D:\Dropbox\[3PO]_CodeVault\Projects\CHRONOS\09_PUBLISH\`
- Site path: `D:\0._3D_Dev\1._PROJECTS\4._PLUGINS\CHRONOS_Site\`

## Content Mapping

| Vault File | Site File |
|---|---|
| `3po_index.md` | `index.md` |
| `index.md` | `chronos/index.md` |
| `features.md` | `chronos/features.md` |
| `workflow.md` | `chronos/workflow.md` |
| `branching.md` | `chronos/branching.md` |
| `roadmap_public.md` | `chronos/roadmap.md` |
| `get_it.md` | `chronos/get-it.md` |
| `screenshots.md` | `chronos/screenshots.md` |
| `brand_guide.md` | *(reference only — not published)* |

## Procedure

1. For each vault file, read both vault and site versions
2. Strip frontmatter from both (they use different schemas)
3. Compare section headings — flag missing or reordered sections
4. Compare key content paragraphs — flag significant differences
5. Check for vault files with no site counterpart (new content to publish)
6. Check for site files with no vault counterpart (orphaned pages)

## Output Format

```
CONTENT SYNC REPORT
═══════════════════

[page_name]
  Status: IN_SYNC | DRIFTED | MISSING_ON_SITE | ORPHANED
  Sections changed: [list]
  Key differences: [summary]

SUMMARY
  In sync: N pages
  Drifted: N pages
  Missing on site: N pages
  Orphaned: N pages
```

## Post-Deploy Sync Update

After a successful deploy (commit pushed, GitHub Pages build green), update `_sync_state` in `publish_stepmap.json`:

1. Get the current git HEAD hash → write to `_sync_state.last_deploy_commit`
2. Get the current timestamp → write to `_sync_state.last_sync_at`
3. For each file in `_sync_state.vault_files`:
   - Stat the file to get its current modification time
   - Write the ISO timestamp to `_sync_state.vault_files[path]`
4. Save the updated `publish_stepmap.json`

This ensures the next session's orchestrator boot will accurately detect which vault files changed since the last deploy.

## Notes
- Obsidian wikilinks in vault will not match Jekyll markdown links on site — this is expected, not drift
- Callout blocks (`> [!info]`) in vault vs HTML on site — expected conversion, not drift
- Focus on **content meaning**, not formatting differences
