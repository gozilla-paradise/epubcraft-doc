---
sidebar_position: 2
---

# Cover Image

The cover image is the visual representation of your book. It appears in e-reader libraries, online stores, and can be rendered as the first page of your ebook.

## Setting a Cover Image

1. Open the **Metadata & Cover** editor (Settings icon in sidebar, or `Ctrl+M`)
2. Click the dashed upload area under "Cover Image"
3. Select an image file from your computer
4. The cover preview appears in the modal — click the **X** to remove it
5. Click **Save Changes**

The cover image also appears as a small preview at the bottom of the sidebar.

## Cover Image in EPUB

When exporting to EPUB, the cover image is:

- Converted to JPEG format (with white background fallback for transparent images)
- Saved as `OEBPS/Images/cover.jpg`
- Referenced in the OPF manifest with `properties="cover-image"`
- Referenced via `<meta name="cover" content="cover-image" />` in the OPF metadata

## Cover Page

You can automatically generate a cover page that displays your cover image:

1. Click the **Image** prepend button at the top of the sidebar chapter list
2. A new chapter is inserted at position 1 with centered cover image HTML

The generated cover page contains:

```html
<div style="text-align: center;">
  <img src="data:image/..." alt="Cover" style="max-width: 100%; height: auto;" />
</div>
```

## Book Info Page

Similarly, the **Info** prepend button generates a page with your book's metadata:

- Title (as a heading)
- Author
- Publisher
- Description/synopsis

This page is inserted at the start of the chapter list, after any cover page.

## Recommendations

- **Dimensions**: 1600 x 2560 pixels (or similar 1:1.6 ratio) for best compatibility
- **Format**: JPEG or PNG (PNG is converted to JPEG during export)
- **File size**: Under 2MB recommended
- **Content**: Include the book title and author name on the cover for readability in e-reader libraries
