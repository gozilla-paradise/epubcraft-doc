---
sidebar_position: 3
---

# Troubleshooting

Common issues and solutions when using EpubCraft.

## Import Issues

### EPUB import shows empty chapters
The EPUB may use a non-standard structure. EpubCraft reads the OPF spine to determine chapter order. If chapters appear empty:
- The EPUB may use DRM protection (not supported)
- Content files may use non-standard naming or paths
- Try re-exporting the EPUB from another tool first

### ZIP import doesn't restore fonts
Ensure font files are at the root level of the ZIP archive, not in subdirectories. Supported formats: `.ttf`, `.otf`, `.woff`, `.woff2`.

### Markdown conversion is incomplete
EpubCraft supports basic Markdown: `**bold**`, `*bold*`, `__italic__`, `_italic_`, and headings. Advanced Markdown (tables, code blocks, nested lists) is not fully converted. For complex Markdown, convert to HTML externally first.

## Export Issues

### EPUB validation errors
If your EPUB doesn't validate:
- Check for unclosed HTML tags in your chapters
- Ensure all images have valid base64 data
- Remove any JavaScript or non-EPUB-compatible content
- Use the **Format** button to auto-fix HTML indentation

### Large EPUB file size
- Optimize images before uploading (reduce resolution to 72–150 DPI)
- Use JPEG for photos instead of PNG
- Remove unused fonts from the Font Manager
- Avoid very large base64 images in chapter content

### Thai text not breaking correctly
Enable **Optimize Line Breaking** in the export dialog. This adds zero-width spaces at word boundaries. Requires an internet connection for the tokenization service.

## Editor Issues

### Syntax highlighting not updating
The editor uses debounced rendering (700ms). If highlighting seems stuck:
- Click outside the editor and back in
- Try toggling word wrap
- Refresh the page (save your work first via ZIP export)

### Preview not showing changes
- Ensure you're in **Split** or **Preview** view mode
- Check that the correct chapter is selected for preview (in CSS mode)
- Verify your CSS doesn't have syntax errors that prevent rendering

### Undo not working as expected
The editor captures history snapshots every 700ms. Rapid edits within that window are grouped as a single undo step. Use the Undo button in the editor toolbar (not browser undo) for best results.

## Font Issues

### Custom font not rendering in preview
- Verify the font was uploaded successfully (check Font Manager)
- Ensure your CSS references the correct font-family name (spaces removed from filename)
- Check the browser console for font loading errors

### Font not appearing in EPUB
All uploaded fonts are automatically embedded. If a font isn't working in the exported EPUB:
- Some e-readers don't support all font formats — try TTF or OTF
- Ensure the `@font-face` font-family name in CSS matches the uploaded font

## AI Issues

### "API_KEY_MISSING" error
Set up your Gemini API key:
1. Click the **Key** icon in the sidebar
2. Enter a valid API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
3. Click **Save Key**

### AI generation produces no output
- Check your internet connection
- Verify your API key is valid and has quota remaining
- Try a shorter, more specific prompt
- The model may have rate limits — wait a moment and try again

## General Issues

### App feels slow with many chapters
EpubCraft processes chapters in memory. With very large books (100+ chapters or many large images), performance may degrade. Consider:
- Splitting very large projects into multiple books
- Optimizing image sizes
- Closing other browser tabs to free memory

### Data loss after browser refresh
EpubCraft works entirely in memory and does not auto-save. Always export your project as a ZIP backup before closing the browser tab. There is no way to recover unsaved work after a page refresh.

### Mobile layout issues
Some features (split view, drag-and-drop) are limited on mobile:
- Use Code or Preview mode (split view is hidden on mobile)
- Chapter reordering via drag may be less precise on touch screens
- The sidebar opens as a slide-in drawer — tap outside to close
