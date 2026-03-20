---
sidebar_position: 3
---

# Font Management

EpubCraft lets you upload custom fonts and embed them in your EPUB files. This ensures your book displays correctly regardless of the reader's installed fonts.

## Font Manager

Open the Font Manager by clicking the **Type** icon in the sidebar.

### Uploading Fonts

Click the upload area (dashed border) or drag-and-drop font files. Supported formats:

| Format | Extension | MIME Type |
|--------|-----------|-----------|
| TrueType | `.ttf` | font/ttf |
| OpenType | `.otf` | font/otf |
| Web Open Font Format | `.woff` | font/woff |
| Web Open Font Format 2 | `.woff2` | font/woff2 |

Fonts are converted to base64 and stored in memory. Each font is assigned a unique ID.

### Font-Family Name

The font-family name is automatically derived from the filename with spaces removed. For example:

- `NotoSansThai-Regular.ttf` → font-family: `NotoSansThai-Regular`
- `My Custom Font.otf` → font-family: `MyCustomFont`

The Font Manager displays the CSS font-family rule for each uploaded font so you can copy it into your CSS.

### Deleting Fonts

Click the **trash** icon next to any font to remove it. This removes the font from memory — any CSS rules referencing it will no longer work in the preview.

## Using Fonts in CSS

Reference uploaded fonts in your global CSS by their font-family name:

```css
body {
  font-family: 'NotoSansThai-Regular', sans-serif;
}

h1, h2, h3 {
  font-family: 'MyHeadingFont', serif;
}
```

You do not need to write `@font-face` declarations — EpubCraft generates these automatically during export.

## Font Embedding in EPUB

When exporting to EPUB, all uploaded fonts are:

1. Included in the `OEBPS/Fonts/` directory
2. Referenced in the OPF manifest
3. Paired with auto-generated `@font-face` declarations in the CSS

This ensures the fonts travel with the EPUB file and display correctly on any e-reader that supports embedded fonts.

## Template Fonts

CSS templates that require specific fonts (like Noto Sans Thai or Sarabun) automatically download and add the fonts to your library when applied. These fonts behave the same as manually uploaded fonts.
