---
sidebar_position: 2
---

# CSS Templates

EpubCraft includes three built-in CSS templates to quickly style your book. Templates can be applied from the toolbar when in CSS mode.

## Applying a Template

1. Click **Global CSS** in the sidebar to enter CSS mode
2. Click the **CSS Templates** dropdown in the toolbar
3. Select a template

The template CSS replaces your current global CSS. If the template requires specific fonts, they are automatically downloaded and added to your font library.

:::caution
Applying a template overwrites your existing CSS. Copy your current CSS before applying if you want to preserve it.
:::

## Available Templates

### Noto Sans Thai (Default)

The default template, optimized for Thai and English content.

**Font:** Noto Sans Thai Regular (auto-downloaded)

**Key styles:**
- A4-like page sizing with 1cm/0.8cm margins
- Centered headings (h1–h3) at 2em, weight 700
- 10mm paragraph indent with justified text
- Line height: 1.8
- Footnote styling with top border separator
- Superscript footnote references
- Bold (700 weight) and underline emphasis (instead of italic)

### Serif

A classic book layout with traditional serif fonts.

**Fonts:** Times New Roman / Georgia (system fonts — no download needed), Helvetica for headings

**Key styles:**
- Maximum content width: 65ch
- Centered layout
- Justified text
- System font stack (no custom font download)
- Clean, minimal design

### Sarabun

Optimized for Thai content with the Sarabun font.

**Font:** Sarabun (auto-downloaded)

**Key styles:**
- A4 page formatting with specific margins
- Centered headings at 2rem
- 10mm paragraph indentation
- Underline for emphasis (`<em>` tags rendered as underline, not italic)
- Strong weight: 700

## Customizing Templates

After applying a template, you can freely edit the CSS. Common customizations:

- Change `font-family` to your uploaded fonts
- Adjust `margin` and `padding` values
- Modify `font-size` and `line-height`
- Add custom classes for special sections
- Change text alignment or indentation

## Font Downloads

Templates that require custom fonts (Noto Sans Thai, Sarabun) automatically download and install the fonts when applied. The fonts appear in the Font Manager and are embedded in the EPUB during export.
