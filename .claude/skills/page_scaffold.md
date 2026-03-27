---
name: page_scaffold
description: >
  Create a new Jekyll page from scratch with correct frontmatter, layout,
  permalink, and navigation entry. Supports both 3PO company pages and
  CHRONOS product pages.
used_by: publisher
---

# Skill: page_scaffold

## Purpose
Generate a new Jekyll page with the correct structure, add it to navigation, and confirm it builds.

## Page Types

### CHRONOS product page
```yaml
---
layout: chronos
title: "Page Title"
permalink: /chronos/page-slug/
nav_order: N
---
```
- Goes in `chronos/` directory
- Uses `chronos` layout (includes chronos-nav sub-navigation)
- Must be added to `_includes/chronos-nav.html`

### CHRONOS landing page
```yaml
---
layout: chronos-home
title: "CHRONOS"
permalink: /chronos/
---
```
- Only one: `chronos/index.md`
- Uses `chronos-home` layout (hero section + raw content)

### 3PO company page
```yaml
---
layout: default
title: "Page Title"
permalink: /page-slug/
---
```
- Goes in root directory
- Uses `default` layout
- May need to be added to `_includes/header.html` site-nav

## Procedure

1. **Determine page type** — CHRONOS product, CHRONOS landing, or 3PO company
2. **Choose layout** — chronos, chronos-home, home, or default
3. **Generate frontmatter** with title, layout, permalink
4. **Determine nav_order** — read existing chronos-nav.html to find next available position
5. **Create the file** in the correct directory
6. **Update navigation**:
   - CHRONOS page → add `<a>` to `_includes/chronos-nav.html`
   - 3PO page → add `<a>` to `_includes/header.html` site-nav
7. **Verify build** — `bundle exec jekyll build` must pass

## Navigation Templates

### chronos-nav entry
```html
<a href="{{ '/chronos/page-slug/' | relative_url }}"{% if page.url == '/chronos/page-slug/' %} class="active"{% endif %}>Page Title</a>
```

### header site-nav entry
```html
<a href="{{ '/page-slug/' | relative_url }}"{% if page.url == '/page-slug/' %} class="active"{% endif %}>Page Title</a>
```

## Content Structure

New CHRONOS product pages should follow this structure:
```markdown
---
layout: chronos
title: "Feature Name"
permalink: /chronos/feature-name/
nav_order: N
---

## Section heading

Introductory paragraph explaining the concept.

### Subsection

Details with examples.

{:.feature-grid}
...feature cards if applicable...
```

## Notes
- Always run `bundle exec jekyll build` after creating a page
- Check that the new page appears in navigation
- Verify permalink resolves correctly
