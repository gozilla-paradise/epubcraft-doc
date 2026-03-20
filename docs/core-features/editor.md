---
sidebar_position: 3
---

# Editor

The EpubCraft editor is a syntax-highlighted code editor for writing HTML chapter content and CSS styles.

## Editor Modes

### HTML Mode

The default mode for editing chapter content. Write standard HTML that will be included in the EPUB output:

```html
<h1>Chapter Title</h1>
<p>Your paragraph text goes here.</p>
<p>Another paragraph with <strong>bold</strong> and <i>italic</i> text.</p>
```

### CSS Mode

Switch to CSS mode by clicking **Global CSS** in the sidebar. The CSS editor applies styles globally to all chapters:

```css
body {
  font-family: 'Noto Sans Thai', sans-serif;
  line-height: 1.8;
  margin: 1cm 0.8cm;
}

h1 {
  text-align: center;
  font-size: 2em;
}
```

## Syntax Highlighting

The editor uses Prism.js for real-time syntax highlighting:
- **HTML mode** — Tags, attributes, and values are color-coded
- **CSS mode** — Selectors, properties, and values are highlighted

The editor uses a monospace font stack: Menlo, Monaco, Consolas, Liberation Mono, Courier New.

## Formatting Toolbar

Above the editor, a toolbar provides quick formatting buttons:

| Button | Action | Shortcut |
|--------|--------|----------|
| **B** | Wrap selection in `<b>` tags | — |
| *I* | Wrap selection in `<i>` tags | `Ctrl+I` |
| U | Wrap selection in `<u>` tags | `Ctrl+U` |
| ~~S~~ | Wrap selection in `<s>` tags | — |
| H1 | Wrap selection in `<h1>` tags | `Ctrl+1` |
| H2 | Wrap selection in `<h2>` tags | `Ctrl+2` |
| H3 | Wrap selection in `<h3>` tags | `Ctrl+3` |
| P | Wrap selection in `<p>` tags | `Ctrl+4` |
| Font size | Wrap in `<span style="font-size:...">` | — |
| Bullet list | Create `<ul>` with `<li>` items | — |
| Number list | Create `<ol>` with `<li>` items | — |
| Align left | Wrap in `<div style="text-align:left">` | `Ctrl+5` |
| Align center | Wrap in `<div style="text-align:center">` | `Ctrl+6` |
| Align right | Wrap in `<div style="text-align:right">` | `Ctrl+7` |
| Justify | Wrap in `<div style="text-align:justify">` | `Ctrl+8` |
| Image | Insert image (upload or URL) | — |
| Footnote | Open footnote insertion dialog | — |
| AI Improve | Improve selected text with AI | — |

## Undo / Redo

The editor maintains a history stack with 700ms debounced snapshots. Use the **Undo** and **Redo** buttons in the toolbar to navigate history.

## Word Wrap

Toggle word wrap on/off with the word wrap button. When disabled, long lines scroll horizontally.

## Font Size

Choose the editor's display font size from the dropdown: 12px, 14px (default), 16px, 18px, 20px, 24px, 30px, or 36px. This only affects the editor display, not the EPUB output.

## Auto-Format

Click the **Format** button in the main toolbar to auto-indent and clean up HTML. This normalizes tag indentation for readability.
