---
sidebar_position: 1
---

# Regex Find & Replace

EpubCraft includes a powerful regex-based find and replace tool for batch editing content across chapters.

## Opening the Tool

- Click the **RegEx Replace** button in the toolbar (available in HTML mode)
- Or press `Ctrl+H`

## Using Find & Replace

### Find Pattern

Enter a JavaScript regular expression in the **Find (RegEx)** field. The pattern is applied with the global flag (`g`), so all matches are replaced.

Examples:
- `<p>\s*</p>` — Find empty paragraphs
- `<b>(.*?)</b>` — Find bold text
- `\bword\b` — Find whole word "word"

### Replace Pattern

Enter the replacement string. You can reference captured groups:

- `$1` — First capture group
- `$2` — Second capture group
- `$&` — Entire match

### Examples

| Find | Replace | Effect |
|------|---------|--------|
| `<b>(.*?)</b>` | `<strong>$1</strong>` | Convert `<b>` to `<strong>` |
| `<p>\s*</p>` | *(empty)* | Remove empty paragraphs |
| `"(.*?)"` | `\u201C$1\u201D` | Convert straight quotes to curly |
| `\n{3,}` | `\n\n` | Collapse multiple blank lines |
| `<div[^>]*>(.*?)</div>` | `$1` | Unwrap div tags |

## Scope

Choose the scope of the replacement:

- **Current Chapter** — Only affects the active chapter
- **All Chapters** — Applies to every chapter in the book

## Saved Patterns

Click the **book** icon next to the find field to open the **Regex Manager**. Here you can:

- **Save** frequently used patterns with a name
- **Load** saved patterns into the find/replace fields
- **Edit** existing patterns
- **Delete** patterns you no longer need

Saved patterns are stored in your browser's localStorage and persist between sessions.

## Tips

- Test your regex on the **Current Chapter** first before applying to **All Chapters**
- Use `.*?` (non-greedy) instead of `.*` (greedy) to match the shortest possible string
- Remember that the find field expects regex, not plain text — escape special characters like `.`, `(`, `)`, `[`, `]` with a backslash
- The replace field supports `$1`, `$2`, etc. for capture group references
