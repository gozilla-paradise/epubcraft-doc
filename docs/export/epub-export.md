---
sidebar_position: 1
---

# EPUB Export

EpubCraft exports your book as a standard EPUB 2.0 file, compatible with virtually all e-readers and distribution platforms.

## Exporting

1. Press `Ctrl+S` or click the **Export** button in the toolbar
2. Select **Standard EPUB**
3. Optionally enable **Optimize Line Breaking** for Thai/Asian text
4. Click **Export Now**

The EPUB file downloads automatically.

## EPUB Structure

The generated EPUB follows the EPUB 2.0 (OPF 2.0) specification:

```
book.epub
├── mimetype                          (application/epub+zip)
├── META-INF/
│   └── container.xml                 (points to content.opf)
└── OEBPS/
    ├── content.opf                   (package document)
    ├── toc.ncx                       (navigation/table of contents)
    ├── Styles/
    │   └── style.css                 (global CSS + @font-face rules)
    ├── Fonts/
    │   ├── font1.ttf                 (embedded fonts)
    │   └── font2.otf
    ├── Images/
    │   ├── cover.jpg                 (cover image)
    │   └── image1.png                (chapter images)
    └── Text/
        ├── chapter_x00001.xhtml      (chapter 1)
        ├── chapter_x00002.xhtml      (chapter 2)
        └── ...
```

## What's Included

### Chapters
Each chapter is converted to valid XHTML 1.1. Chapter filenames follow the pattern `chapter_x00001.xhtml` for proper ordering.

### CSS
Your global CSS is included in `Styles/style.css`. If you have custom fonts, `@font-face` declarations are automatically prepended.

### Fonts
All uploaded fonts are embedded in the `Fonts/` directory and referenced in the OPF manifest.

### Images
Images from chapter content are extracted from base64 data URIs, saved as individual files in `Images/`, and referenced with relative paths. Duplicate images are deduplicated.

### Cover
If a cover image is set, it's converted to JPEG and included as `Images/cover.jpg`. It's referenced in the OPF metadata.

### Footnotes
Footnote markers (`[*]`) are converted to numbered references with a footnote section at the end of each chapter. See [Footnotes in Export](/docs/export/footnotes-in-export).

## OPF Metadata

The `content.opf` file contains:

- Dublin Core metadata (title, author, publisher, language, description, date)
- Unique book identifier (UUID)
- Generator tag: "EpubCraft"
- Manifest listing all files with MIME types
- Spine defining chapter reading order
- Cover image reference

## Table of Contents (NCX)

The `toc.ncx` file provides navigation:

- Each chapter appears as a navigation point
- Chapter titles are used as labels
- Play order matches the chapter sequence

## Processing

During export, the following processing occurs:

1. HTML content is converted to valid XHTML 1.1
2. Images are extracted and saved as files
3. Cross-chapter links are resolved (href mapping)
4. Footnotes are transformed to numbered references
5. Font `@font-face` rules are generated
6. If enabled, zero-width spaces are inserted for Thai/Asian text
7. A SHA-256 hash is calculated for validation

Chapters are processed in batches of 100 for performance.
