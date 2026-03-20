---
sidebar_position: 4
---

# Thai & Asian Text Support

EpubCraft has special support for Thai and other Asian languages that don't use spaces between words. This is important for proper line breaking on e-readers.

## The Line Breaking Problem

Thai, Lao, Khmer, and some other Asian scripts don't use spaces between words. Standard e-readers can't determine where to break lines, leading to:

- Text overflowing the page margin
- Awkward breaks in the middle of words
- Poor readability

## Zero-Width Space Optimization

EpubCraft solves this by inserting **zero-width spaces** (Unicode `U+200B`) at word boundaries. This invisible character tells e-readers where lines can safely break without affecting the visible text.

### How to Enable

1. Click **Export** (or press `Ctrl+S`)
2. Select **Standard EPUB** format
3. Check **Optimize Line Breaking**
4. Click **Export Now**

The optimization is processed via an external tokenization service before the EPUB is generated.

### How It Works

1. Each chapter's text content is sent to a tokenizer service
2. The service identifies word boundaries using language-specific rules
3. Zero-width spaces are inserted at each boundary
4. The modified content is used for the EPUB output

The original content in the editor is **not modified** — the optimization only applies to the exported file.

## Thai-Optimized CSS Templates

Two of EpubCraft's built-in CSS templates are designed for Thai content:

### Noto Sans Thai (Default)
- Uses the Noto Sans Thai font (auto-downloaded)
- Underline for emphasis instead of italic (Thai convention)
- Appropriate line height (1.8) for Thai characters

### Sarabun
- Uses the Sarabun font (auto-downloaded)
- A4-optimized layout
- 10mm paragraph indentation
- Underline emphasis

## Font Recommendations for Thai

For best Thai text rendering, use fonts designed for Thai script:

- **Noto Sans Thai** — Google's universal font, included as a template
- **Sarabun** — Clean, modern Thai font, included as a template
- **TH Sarabun New** — Popular Thai font for print
- **Prompt** — Modern Thai font with multiple weights

Upload any `.ttf` or `.otf` Thai font via the Font Manager and reference it in your CSS.

## Tips

- Always enable **Optimize Line Breaking** when exporting Thai content
- Use `line-height: 1.8` or higher for Thai text readability
- Thai text often looks better with `text-indent` rather than inter-paragraph spacing
- The `<em>` tag is conventionally rendered as underline (not italic) in Thai — the default templates handle this automatically
