---
sidebar_position: 1
---

# Document Management

EpubCraft provides tools for creating new books, importing existing content, and managing your project files.

## Creating a New Book

Click the **New Book** button (FilePlus icon) in the sidebar to start a fresh project. This resets:

- All chapters (replaced with a single default chapter)
- Metadata (reset to "Untitled Book" by "Unknown Author")
- Global CSS (reset to default template)
- All uploaded fonts and images
- Cover image

A confirmation dialog appears before clearing your work.

## Importing Files

Click the **Import** button (FileUp icon) in the sidebar to load content from files. EpubCraft supports these formats:

### EPUB (.epub)

Imports a standard EPUB file, extracting:
- **Metadata** — Title, author, publisher, language, description from the OPF file
- **Chapters** — All XHTML content files in spine order
- **CSS** — Stylesheets merged into the global CSS editor
- **Fonts** — Embedded font files (TTF, OTF, WOFF, WOFF2)
- **Images** — All referenced images, converted to base64
- **Cover** — Detected from OPF metadata or cover-image property

Chapter titles are derived from the first `<h1>`, `<h2>`, `<h3>`, `<title>` tag, or first paragraph in each file.

### ZIP (.zip)

Imports an EpubCraft project backup. The ZIP structure:
- `metadata.txt` — Book metadata (key: value format)
- Chapter files (HTML or TXT, sorted numerically)
- `global.css` — Global stylesheet
- `cover.jpg` / `cover.png` — Cover image
- Font files

### Text (.txt)

Converts a plain text file into a book:
- Each paragraph becomes a `<p>` tag
- Blank lines separate paragraphs
- The filename becomes the chapter title

### Markdown (.md)

Converts Markdown to HTML:
- `**bold**` and `*bold*` → `<strong>`
- `__italic__` and `_italic_` → `<i>`
- Headings and paragraphs preserved
- The filename becomes the chapter title

## Project State

EpubCraft works entirely in memory — your project is not automatically saved to disk. Use **Export as ZIP** to save your work for later. You can re-import the ZIP to continue editing.
