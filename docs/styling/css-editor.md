---
sidebar_position: 1
---

# CSS Editor

EpubCraft includes a global CSS editor that controls the styling for all chapters in your book. The styles you write here are applied to every chapter during preview and export.

## Accessing the CSS Editor

Click **Global CSS** in the sidebar to switch the editor to CSS mode. The editor area changes to display your global stylesheet with CSS syntax highlighting.

## Writing CSS

Write standard CSS to style your book content. The CSS is applied inside each chapter's XHTML document, so you can target any HTML elements:

```css
body {
  font-family: 'Georgia', serif;
  line-height: 1.8;
  margin: 1cm;
  color: #333;
}

h1 {
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 1em;
}

p {
  text-indent: 2em;
  text-align: justify;
}

img {
  max-width: 100%;
  height: auto;
}
```

## Live Preview

Changes to the CSS are reflected in the preview panel immediately. In CSS mode, the toolbar shows a **Preview chapter** dropdown — select any chapter to see how your styles look with different content.

## Custom Fonts in CSS

If you've uploaded fonts via the Font Manager, reference them by their generated font-family name:

```css
body {
  font-family: 'MyCustomFont', serif;
}
```

The font-family name is derived from the font's filename (with spaces removed). You can see the exact name in the Font Manager panel. Font `@font-face` declarations are automatically generated during export — you only need to reference the family name in your CSS.

## Default CSS

EpubCraft ships with a default stylesheet (Noto Sans Thai template) that includes:

- Noto Sans Thai font configuration
- A4-like page margins (1cm top/bottom, 0.8cm left/right)
- Centered headings with 2em font size
- Paragraph indentation (10mm)
- Footnote styling (smaller text, border separator)
- Bold weight (700) and underline emphasis

## Tips

- Use relative units (`em`, `rem`, `%`) for font sizes to respect e-reader settings
- Set `max-width: 100%` on images to prevent overflow
- Use `text-align: justify` for a professional book appearance
- Define `page-break-before: always` on `h1` to start chapters on new pages in supported readers
