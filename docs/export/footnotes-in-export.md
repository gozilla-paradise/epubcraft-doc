---
sidebar_position: 3
---

# Footnotes in Export

EpubCraft supports footnotes that are inserted as inline markers in the editor and transformed into proper numbered references during export.

## How Footnotes Work

### In the Editor

Footnotes are stored as spans with a `data-footnote` attribute:

```html
<p>This is some text with a footnote<span class="footnote" data-footnote="This is the footnote content.">[*]</span> in the middle.</p>
```

The `[*]` marker is visible in the editor and preview to indicate a footnote exists.

### In the Exported EPUB

During export, footnotes are transformed into numbered references:

**In-text reference:**
```html
<p>This is some text with a footnote<sup class="footnote-marker">
  <a id="fnref1" href="#fn1">[1]</a>
</sup> in the middle.</p>
```

**Footnote section (end of chapter):**
```html
<div class="footnotes" epub:type="footnotes">
  <hr />
  <ol>
    <li id="fn1">
      <p>This is the footnote content.
        <a href="#fnref1" class="footnote-backref">↩</a>
      </p>
    </li>
  </ol>
</div>
```

## Footnote Numbering

Footnotes are numbered sequentially within each chapter, starting at 1. Each chapter has its own footnote numbering — footnote 1 in Chapter 3 is independent of footnotes in other chapters.

## Navigation

The exported EPUB supports bidirectional footnote navigation:

- **Forward**: Clicking `[1]` in the text jumps to the footnote at the bottom
- **Back**: Clicking `↩` in the footnote jumps back to the reference point

This uses standard HTML anchor links (`#fn1` / `#fnref1`).

## Inserting Footnotes

1. Place your cursor where you want the footnote marker
2. Click the **Footnote** button in the formatting toolbar
3. Type the footnote content in the dialog
4. Click **Insert Footnote** or press `Ctrl+Enter`

## CSS Styling

The default CSS templates include footnote styles:

```css
.footnotes {
  margin-top: 2em;
  border-top: 1px solid #ccc;
  padding-top: 1em;
  font-size: 0.85em;
}

.footnote-marker {
  font-size: 0.75em;
  vertical-align: super;
}

.footnote-backref {
  text-decoration: none;
  margin-left: 0.5em;
}
```

You can customize these styles in the CSS editor.

## HTML5 Structure

The footnote output uses HTML5 semantic attributes:
- `epub:type="footnotes"` on the container div for EPUB accessibility
- Standard `<ol>` list for numbered footnotes
- Anchor IDs following the pattern `fn{N}` and `fnref{N}`

## E-Reader Compatibility

Footnote links work in all major e-readers:
- Kindle (via popup footnotes on some devices)
- Apple Books
- Kobo
- Google Play Books
- Calibre viewer

Some e-readers display footnotes as popup overlays rather than navigating to the bottom of the page.
