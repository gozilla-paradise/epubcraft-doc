---
sidebar_position: 2
---

# Prepend Pages

EpubCraft can automatically generate special pages and insert them at the beginning of your book. These are useful for creating professional-looking front matter.

## Available Prepend Pages

The prepend buttons are located at the top of the chapter list in the sidebar:

### Empty Chapter

Inserts a blank chapter at position 1 with default content:

```html
<h1>Chapter 1</h1>
<p>Start writing your book here...</p>
```

Useful for adding a dedication page, foreword, or other front matter that you'll write manually.

### Cover Page

Generates an HTML page displaying your cover image. **Requires** a cover image to be set in the metadata editor.

The generated HTML:

```html
<div style="text-align: center;">
  <img src="data:image/..." alt="Cover"
       style="max-width: 100%; height: auto;" />
</div>
```

This creates a full-width, centered cover image as the first page of your book.

### Book Info Page

Generates an information page using your book's metadata:

- **Title** displayed as a centered heading
- **Author** name
- **Publisher** (if set)
- **Description** / synopsis

This is commonly used as a title page or half-title page in published books.

## Usage Tips

- Add the **Cover Page** first, then the **Book Info Page** — this creates a standard front matter sequence (cover → title page → content)
- The generated pages are regular chapters — you can edit them freely after creation
- Prepend pages use the same CSS styles as all other chapters
- You can delete prepend pages like any other chapter if they're not needed
