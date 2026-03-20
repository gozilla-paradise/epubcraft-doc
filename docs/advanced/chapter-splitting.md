---
sidebar_position: 2
---

# Chapter Splitting

The Chapter Splitter divides a chapter (or all chapters) into multiple chapters based on a regex pattern. This is useful for breaking up long documents or restructuring imported content.

## Opening the Tool

Click the **Chapter Splitter** button in the toolbar (available in HTML mode only).

## How It Works

1. Enter a **regular expression** that matches the point where chapters should split
2. Choose the **scope**: Current Chapter or All Chapters
3. Optionally enable **Convert matched tag to `<h1>`**
4. Click **Split**

The content is split at each match of the regex pattern. Each split creates a new chapter.

## Regex Pattern

The default pattern is:

```
<p>(ตอนที่ .*?)</p>
```

This matches Thai chapter headings like `<p>ตอนที่ 1 บทนำ</p>`.

### Capture Groups

If your regex contains a capture group (parentheses), the captured text becomes the **chapter title**. For example:

| Pattern | Matches | Chapter Title |
|---------|---------|---------------|
| `<p>(ตอนที่ .*?)</p>` | `<p>ตอนที่ 1 บทนำ</p>` | "ตอนที่ 1 บทนำ" |
| `<h1>(.*?)</h1>` | `<h1>Chapter One</h1>` | "Chapter One" |
| `<p>(Chapter \d+)</p>` | `<p>Chapter 5</p>` | "Chapter 5" |

Without a capture group, chapters are auto-numbered.

### Convert to H1

When **Convert matched tag to `<h1>`** is checked, the matched element is replaced with an `<h1>` tag in the new chapter. This is useful when your split pattern matches `<p>` tags that should become headings.

## Scope

- **Current Chapter** — Splits only the active chapter
- **All Chapters** — Splits every chapter in the book

## Common Use Cases

### Splitting an Imported Text File

After importing a long `.txt` file as a single chapter:

```
<h1>(Chapter \d+.*?)</h1>
```

This splits at each `<h1>` heading.

### Splitting Thai Content

For Thai novels with `ตอนที่` (chapter) markers:

```
<p>(ตอนที่\s+\d+.*?)</p>
```

### Splitting at Page Breaks

If your content uses `<hr>` as section breaks:

```
<hr\s*/?>
```

## Saved Patterns

Click the **book** icon to open the Regex Manager and save frequently used split patterns. The manager stores patterns in localStorage.
