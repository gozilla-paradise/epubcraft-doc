---
sidebar_position: 3
---

# UI Overview

EpubCraft's interface is divided into four main areas: the sidebar, toolbar, editor, and preview panel.

## Layout

```
┌──────────┬────────────────────────────────────────┐
│          │            Toolbar                      │
│          ├──────────────────┬─────────────────────┤
│ Sidebar  │                  │                     │
│          │     Editor       │     Preview         │
│          │                  │                     │
│          │                  │                     │
└──────────┴──────────────────┴─────────────────────┘
```

## Sidebar (Left Panel)

The sidebar provides book-level navigation and management:

- **App title** — Shows "EpubCraft" with the version number
- **New Book** — Start a fresh project (clears everything)
- **Import** — Load EPUB, ZIP, TXT, or Markdown files
- **Chapter list** — All chapters in order, click to select
  - Drag the grip handle to reorder
  - Hover to reveal insert (+) and delete (trash) buttons
- **Add Chapter to End** — Append a new chapter
- **Prepend options** — Add empty chapter, cover page, or book info page at the start
- **Global CSS** — Switch editor to CSS mode
- **Font Manager** — Upload and manage custom fonts
- **Gemini API Key** — Configure AI integration
- **Metadata & Cover** — Open the metadata editor
- **Cover preview** — Shows the current cover image (if set)

On mobile, the sidebar slides in as a drawer and closes when you select a chapter.

## Toolbar (Top Bar)

The toolbar changes based on the current editing mode:

### HTML Mode
- **Chapter title** input field
- **View mode** buttons: Code, Split, Preview
- **Reset** — Clear formatting, fonts, and CSS
- **Format** — Auto-indent HTML
- **RegEx Replace** — Open find/replace with regex
- **Chapter Splitter** — Split chapters by pattern
- **AI Assist** — Generate content with Gemini AI
- **Export** — Open the export dialog

### CSS Mode
- **CSS Templates** dropdown — Apply built-in style templates
- **Preview chapter** selector — Choose which chapter to preview
- **View mode** buttons and Export

## Editor (Center Panel)

A syntax-highlighted code editor with:

- HTML or CSS syntax highlighting (Prism.js)
- Formatting toolbar (bold, italic, headings, lists, alignment, images, footnotes)
- Undo/Redo buttons
- Word wrap toggle
- Font size selector (12px–36px)
- AI text improvement button
- Line numbers

## Preview Panel (Right Panel)

A live-rendered preview of the current chapter:

- **Device mockup** frame (max-width 600px)
- Shows the chapter with all CSS styles applied
- Custom fonts rendered via injected `@font-face` rules
- Images resolved from embedded data
- Footnotes transformed to numbered references
- Click any element to jump to its source line in the editor
- Bidirectional scroll sync with the editor

## View Modes

Toggle between three layouts using the toolbar buttons:

| Mode | Description |
|------|-------------|
| **Code** | Editor only, full width |
| **Split** | Editor and preview side by side |
| **Preview** | Preview only, full width |

Split view is hidden on mobile devices — use Code or Preview mode instead.
