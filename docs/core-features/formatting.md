---
sidebar_position: 4
---

# Formatting

EpubCraft provides toolbar buttons and keyboard shortcuts for formatting your chapter content without writing HTML manually.

## Text Formatting

Select text in the editor and click a formatting button or use a shortcut to wrap it in HTML tags:

### Inline Styles

| Format | HTML Output | Example |
|--------|-------------|---------|
| Bold | `<b>text</b>` | **text** |
| Italic | `<i>text</i>` | *text* |
| Underline | `<u>text</u>` | text |
| Strikethrough | `<s>text</s>` | ~~text~~ |

### Font Size

Select text, then choose a size from the font size dropdown. This wraps the selection in a `<span>` with an inline `font-size` style:

```html
<span style="font-size: 24px;">Large text</span>
```

Available sizes: 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px.

## Headings & Paragraphs

| Format | Shortcut | HTML Output |
|--------|----------|-------------|
| Heading 1 | `Ctrl+1` | `<h1>text</h1>` |
| Heading 2 | `Ctrl+2` | `<h2>text</h2>` |
| Heading 3 | `Ctrl+3` | `<h3>text</h3>` |
| Paragraph | `Ctrl+4` | `<p>text</p>` |

## Text Alignment

| Alignment | Shortcut | HTML Output |
|-----------|----------|-------------|
| Left | `Ctrl+5` | `<div style="text-align: left">text</div>` |
| Center | `Ctrl+6` | `<div style="text-align: center">text</div>` |
| Right | `Ctrl+7` | `<div style="text-align: right">text</div>` |
| Justify | `Ctrl+8` | `<div style="text-align: justify">text</div>` |

## Lists

### Bulleted List

Click the bulleted list button to wrap selected text in an unordered list. If multiple lines are selected, each line becomes a list item:

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

### Numbered List

Same behavior with an ordered list:

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

## Images

Click the **Image** button in the formatting toolbar to insert an image. You can upload an image file from your computer. The image is stored as base64 data and embedded directly in the chapter content:

```html
<img src="data:image/png;base64,..." alt="image" />
```

See [Images](/docs/media/images) for more details on image management.

## Footnotes

Click the **Footnote** button to open the footnote dialog. Enter your footnote text and click **Insert Footnote** (or press `Ctrl+Enter`). This inserts a footnote marker at the cursor position:

```html
<span class="footnote" data-footnote="Your footnote text here">[*]</span>
```

During export, these markers are automatically converted to numbered references with a footnote section at the bottom of each chapter. See [Footnotes in Export](/docs/export/footnotes-in-export) for details.

## Reset Formatting

Click the **Reset** button in the toolbar to strip all inline styles and classes from the current chapter's content. This also removes all uploaded fonts and resets the CSS to default. A confirmation dialog appears before the reset.
