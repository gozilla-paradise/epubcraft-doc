---
sidebar_position: 2
---

# Supported Formats

A complete reference of file formats supported by EpubCraft for import, export, fonts, and images.

## Import Formats

| Format | Extension | Description |
|--------|-----------|-------------|
| EPUB | `.epub` | Standard ebook format. Extracts chapters, metadata, CSS, fonts, images, and cover. |
| ZIP | `.zip` | EpubCraft project backup. Restores full project state. |
| Text | `.txt` | Plain text file. Converted to HTML with `<p>` tags. |
| Markdown | `.md` | Markdown file. Basic conversion to HTML (bold, italic, headings). |

## Export Formats

| Format | Extension | Description |
|--------|-----------|-------------|
| EPUB 2.0 | `.epub` | Standard ebook format compatible with all major e-readers. |
| Project ZIP | `.zip` | Backup format containing chapters (HTML or TXT), CSS, metadata, fonts, and cover. |

## Font Formats

| Format | Extension | MIME Type |
|--------|-----------|-----------|
| TrueType | `.ttf` | font/ttf |
| OpenType | `.otf` | font/otf |
| WOFF | `.woff` | font/woff |
| WOFF2 | `.woff2` | font/woff2 |

All font formats can be uploaded via the Font Manager and are embedded in EPUB exports.

## Image Formats

| Format | Extension | MIME Type |
|--------|-----------|-----------|
| JPEG | `.jpg`, `.jpeg` | image/jpeg |
| PNG | `.png` | image/png |
| GIF | `.gif` | image/gif |
| SVG | `.svg` | image/svg+xml |
| WebP | `.webp` | image/webp |

Images are stored as base64 data URIs in chapter content and extracted as individual files during EPUB export.

## Cover Image

The cover image is converted to **JPEG** during EPUB export, regardless of the original format. Transparent areas are filled with a white background.

## EPUB Internal Formats

The EPUB 2.0 output uses these internal formats:

| File | Format | Description |
|------|--------|-------------|
| Chapters | XHTML 1.1 | Chapter content converted from HTML |
| Stylesheet | CSS | Global CSS with @font-face rules |
| Package | OPF 2.0 | Manifest, metadata, and spine |
| Navigation | NCX | Table of contents |
| Container | XML | META-INF/container.xml |
