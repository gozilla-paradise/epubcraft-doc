---
sidebar_position: 1
---

# Images

EpubCraft supports embedding images directly in your chapters and EPUB output.

## Inserting Images

### From the Editor Toolbar

1. Place your cursor where you want the image
2. Click the **Image** button in the formatting toolbar
3. Select an image file from your computer

The image is converted to base64 and inserted as a data URI:

```html
<img src="data:image/png;base64,iVBOR..." alt="image" />
```

### Supported Image Formats

| Format | Extension | MIME Type |
|--------|-----------|-----------|
| JPEG | `.jpg`, `.jpeg` | image/jpeg |
| PNG | `.png` | image/png |
| GIF | `.gif` | image/gif |
| SVG | `.svg` | image/svg+xml |
| WebP | `.webp` | image/webp |

## Image Storage

Images are stored as base64-encoded data URIs directly in the chapter HTML content. This means:

- Images are self-contained — no external file references
- Images persist when chapters are reordered or duplicated
- Images are included when exporting to EPUB or ZIP

## Images in EPUB Export

During EPUB export, images embedded in chapter content are:

1. Extracted from base64 data URIs
2. Saved as individual files in `OEBPS/Images/`
3. Referenced in the OPF manifest with correct MIME types
4. Chapter `<img>` `src` attributes are rewritten to relative paths

Duplicate images (same data) are detected and only included once.

## Image Best Practices

- **Size**: Keep images under 1MB each. Large images increase EPUB file size and may cause performance issues on e-readers.
- **Resolution**: 72–150 DPI is sufficient for most e-readers. Higher resolutions add file size without visible benefit.
- **Format**: JPEG for photographs, PNG for graphics with transparency or sharp edges.
- **Width**: Set `max-width: 100%` in CSS to prevent images from overflowing the page:

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Images from Imported EPUBs

When importing an EPUB file, all images are extracted and converted to base64 data URIs. Image paths in the HTML (`../Images/filename.jpg`) are automatically replaced with the embedded data.
