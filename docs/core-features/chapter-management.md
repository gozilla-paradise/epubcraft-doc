---
sidebar_position: 2
---

# Chapter Management

Chapters are the building blocks of your ebook. EpubCraft provides flexible tools for organizing them.

## Adding Chapters

There are several ways to add chapters:

- **Add Chapter to End** — Click the button below the chapter list in the sidebar
- **Insert below** — Hover over any chapter and click the **+** icon to insert a new chapter after it
- **Prepend** — Use the prepend buttons at the top of the chapter list:
  - **Empty Chapter** — Blank chapter at position 1
  - **Cover Page** — Auto-generated cover page from your cover image
  - **Book Info** — Auto-generated synopsis/info page from metadata

New chapters are created with default content:

```html
<h1>Chapter 1</h1>
<p>Start writing your book here...</p>
```

## Renaming Chapters

Click the chapter title input field in the toolbar (visible in HTML mode) to rename the current chapter. The title is displayed in the sidebar and used as the chapter heading in the exported EPUB's table of contents.

## Reordering Chapters

Drag chapters in the sidebar using the **grip handle** (vertical dots icon on the left). Drop them at the desired position. Chapter order determines the reading order in the exported EPUB.

## Deleting Chapters

Hover over a chapter in the sidebar and click the **trash** icon. A confirmation dialog appears before deletion. You cannot delete the last remaining chapter — at least one chapter must always exist.

## Duplicating Content

While there is no dedicated duplicate button, you can:
1. Select all content in the editor (`Ctrl+A`)
2. Copy it (`Ctrl+C`)
3. Add a new chapter
4. Paste the content (`Ctrl+V`)

## Splitting Chapters

Use the **Chapter Splitter** tool to divide a chapter (or all chapters) at specific patterns. See [Chapter Splitting](/docs/advanced/chapter-splitting) for details.

## Prepend Pages

EpubCraft can auto-generate special pages:

### Cover Page
Generates an HTML page displaying your cover image centered and full-width. Requires a cover image to be set in metadata.

### Book Info Page
Generates an information page containing:
- Book title
- Author name
- Publisher
- Description/synopsis

Both prepend pages are inserted at the beginning of the chapter list.
