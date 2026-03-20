---
sidebar_position: 2
---

# ZIP Export

The project ZIP format is EpubCraft's backup format. It saves your entire project in a portable archive that can be re-imported later.

## Exporting

1. Press `Ctrl+S` or click the **Export** button
2. Select **Project ZIP**
3. Choose the chapter format:
   - **HTML** — Preserves full HTML content
   - **Plain Text (.txt)** — Strips HTML, exports plain text
4. Click **Export Now**

## ZIP Structure

```
project.zip
├── metadata.txt           (book metadata)
├── global.css             (global stylesheet)
├── cover.jpg              (cover image, if set)
├── 001_Chapter_Title.html (or .txt)
├── 002_Chapter_Title.html
├── ...
├── font1.ttf              (uploaded fonts)
└── font2.otf
```

### metadata.txt

Contains your book's metadata in a simple key-value format:

```
title: My Book Title
creator: Author Name
publisher: Self-Published
language: en
description: A brief description of the book.
```

### Chapter Files

Chapters are numbered sequentially (`001_`, `002_`, etc.) with the chapter title as the filename. The format depends on your selection:

- **HTML**: Full HTML content as written in the editor
- **Plain Text**: HTML tags stripped, with paragraphs separated by blank lines and list items converted to bullet points (•)

### Global CSS

The `global.css` file contains your global stylesheet exactly as it appears in the CSS editor.

### Fonts

All uploaded font files are included at the root of the ZIP archive.

## Re-Importing

To restore a project from a ZIP backup:

1. Click the **Import** button in the sidebar
2. Select your `.zip` file
3. EpubCraft restores:
   - All metadata from `metadata.txt`
   - Chapters in order (sorted numerically by filename)
   - Global CSS from `global.css`
   - Cover image
   - Font files

## Use Cases

- **Backup**: Save your work before making major changes
- **Transfer**: Move a project between devices or browsers
- **Collaboration**: Share a project with someone else
- **Version control**: Keep snapshots of your project at different stages
