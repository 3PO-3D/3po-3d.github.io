---
name: deploy_verify
description: >
  Post-push validation. Runs Jekyll build locally, checks for build errors and
  warnings, validates internal links resolve, checks image references exist,
  and can check GitHub Pages build status via gh CLI.
used_by: ui_validator
---

# Skill: deploy_verify

## Purpose
Verify the site builds correctly and all references resolve before or after pushing to GitHub Pages.

## Pre-Push Checks

### 1. Jekyll build
```bash
cd D:\0._3D_Dev\1._PROJECTS\4._PLUGINS\CHRONOS_Site
bundle exec jekyll build
```
- Exit code 0 = success
- Check stderr for warnings
- Verify `_site/` directory is populated

### 2. Internal link check
For every `.md` file in the site:
- Extract all `[text](url)` markdown links where url starts with `/`
- Extract all `href="/"` HTML links
- Verify each target exists as a file or permalink in the site
- Flag broken internal links

### 3. Image reference check
For every `.md` and `.html` file:
- Extract all `![alt](path)` and `<img src="path">` references
- Verify each image file exists in `assets/img/`
- Flag missing images

### 4. Frontmatter validation
For every `.md` content file:
- Verify `layout` field exists and matches a file in `_layouts/`
- Verify `title` field exists
- Verify `permalink` field exists (except index.md)
- CHRONOS pages: verify `nav_order` exists

## Post-Push Checks

### 5. GitHub Pages build status
```bash
gh api repos/3PO-3D/3po-3d.github.io/pages/builds --jq '.[0] | {status, created_at, error}'
```
- Check status = "built"
- If "errored" — read error message

### 6. Live URL check (if gh pages is deployed)
```bash
curl -s -o /dev/null -w "%{http_code}" https://3po-3d.github.io/
curl -s -o /dev/null -w "%{http_code}" https://3po-3d.github.io/chronos/
```
- 200 = success
- 404 = page not deploying

## Output Format

```
DEPLOY VERIFICATION
═══════════════════
Build:         [PASS | FAIL]
Internal links: [N checked, N broken]
Images:        [N checked, N missing]
Frontmatter:   [N checked, N invalid]
GitHub Pages:  [PASS | FAIL | SKIPPED]

Issues:
  [severity] [file:line] — [description]
```

## Notes
- Run pre-push checks BEFORE committing
- Run post-push checks AFTER GitHub Pages build completes (~1-2 min)
- If build fails locally, do NOT push
