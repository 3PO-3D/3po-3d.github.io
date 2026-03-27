---
name: obsidian_to_jekyll
description: >
  Convert Obsidian markdown to Jekyll-compatible markdown. Strips wikilinks,
  converts callout blocks, resolves vault-relative image paths, and replaces
  Obsidian frontmatter with Jekyll frontmatter.
used_by: publisher
---

# Skill: obsidian_to_jekyll

## Purpose
Transform Obsidian vault markdown into Jekyll-ready markdown that builds cleanly with kramdown + GFM.

## Transformations

### 1. Wikilinks → Markdown links or plain text
```
[[page_name]]              → page_name (plain text, or link if target exists)
[[page_name|Display Text]] → Display Text
[[#heading]]               → [heading](#heading)
```

### 2. Callout blocks → HTML or blockquote
```markdown
> [!info] Title
> Content here

→ becomes:

> **Title** — Content here
```

Or for styled callouts:
```html
<div class="callout callout-info">
  <strong>Title</strong>
  <p>Content here</p>
</div>
```

### 3. Frontmatter replacement
Strip Obsidian frontmatter (title, tags, last_updated) and replace with Jekyll:
```yaml
---
layout: chronos
title: "Page Title"
permalink: /chronos/page-slug/
nav_order: N
---
```

### 4. Image paths
```
![[image.png]]                    → ![image](/assets/img/image.png)
![alt](vault/path/image.png)     → ![alt](/assets/img/image.png)
```

### 5. Dataview/Templater blocks → Remove
```
```dataview
...
```​
→ remove entirely (these only work in Obsidian)

```templater
...
```​
→ remove entirely
```

### 6. Tags
```
#tag/name → remove (Obsidian-specific)
```

### 7. Kanban blocks → Remove or convert
```kanban blocks are Obsidian plugin-specific. Remove them or convert to a simple list/table.

## Procedure

1. Read the vault source file
2. Apply transformations 1-7 in order
3. Add Jekyll frontmatter
4. Verify the result is valid kramdown + GFM markdown
5. Write to the site target path

## Notes
- Preserve all heading hierarchy (h1-h6)
- Preserve all code blocks (``` ... ```)
- Preserve all tables
- Preserve all HTML that's already in the source
- Do NOT add Obsidian-specific styling
- The result must build cleanly with `bundle exec jekyll build`
