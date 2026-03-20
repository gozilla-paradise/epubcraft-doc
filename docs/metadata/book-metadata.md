---
sidebar_position: 1
---

# Book Metadata

Metadata describes your book's properties and is embedded in the EPUB file. E-readers and online stores use this information to display your book correctly.

## Editing Metadata

Open the metadata editor:
- Click the **Settings** icon (gear) in the sidebar
- Or press `Ctrl+M`

## Metadata Fields

| Field | Description | Default | Required |
|-------|-------------|---------|----------|
| **Title** | The book's display name | "Untitled Book" | Yes |
| **Author** | The book's creator | "Unknown Author" | Yes |
| **Publisher** | Publishing entity | "Self-Published" | No |
| **Language** | Language code (e.g., `en`, `th`, `ja`) | "en" | No |
| **Description** | Synopsis or summary | "A new book created with EpubCraft." | No |
| **Cover Image** | Visual cover (see [Cover Image](/docs/media/cover-image)) | None | No |

The **date** is automatically set to the current date when the book is created.

## How Metadata Maps to EPUB

Metadata is written to the EPUB's OPF (Open Packaging Format) file:

```xml
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:opf="http://www.idpf.org/2007/opf">
  <dc:title>Your Book Title</dc:title>
  <dc:creator opf:role="aut">Author Name</dc:creator>
  <dc:publisher>Publisher Name</dc:publisher>
  <dc:language>en</dc:language>
  <dc:description>Your book description</dc:description>
  <dc:date>2026-03-20</dc:date>
  <dc:identifier id="BookId">urn:uuid:generated-uuid</dc:identifier>
  <meta name="generator" content="EpubCraft" />
</metadata>
```

## Metadata in ZIP Export

When exporting as a project ZIP, metadata is saved in a `metadata.txt` file:

```
title: Your Book Title
creator: Author Name
publisher: Publisher Name
language: en
description: Your book description
```

This file is parsed when re-importing the ZIP to restore your metadata.

## Tips

- **Language codes**: Use standard IETF language tags. Common codes: `en` (English), `th` (Thai), `ja` (Japanese), `zh` (Chinese), `ko` (Korean)
- **Title**: Keep it concise — long titles may be truncated in e-reader displays
- **Description**: Write 1–3 sentences summarizing your book's content. This appears in e-reader library views and online stores
