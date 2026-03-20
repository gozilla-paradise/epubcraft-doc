---
sidebar_position: 5
---

# Preview

The preview panel shows a live-rendered version of your chapter content with all styles applied, displayed in a device mockup frame.

## How It Works

The preview renders your chapter content inside a sandboxed iframe with:

- Your **global CSS** applied as a stylesheet
- **Custom fonts** injected as `@font-face` rules with base64-encoded data URIs
- **Images** resolved from embedded base64 data
- **Footnotes** transformed from `[*]` markers to numbered references

The preview updates automatically as you type in the editor.

## Device Mockup

The preview is displayed within a device frame:
- Maximum width: **600px**
- Minimum height: **800px**
- Drop shadow for a realistic device appearance

This gives you an approximate view of how your content will look on a tablet or e-reader.

## Bidirectional Scroll Sync

The editor and preview panels are synchronized:

- **Editor → Preview**: As you scroll the editor, the preview follows to show the corresponding content
- **Preview → Editor**: Click any element in the preview to jump to its source line in the editor

The sync uses `data-source-line` attributes injected into the HTML to map rendered elements back to editor line numbers.

## Click-to-Source

Click on any text or element in the preview panel to:

1. Jump the editor cursor to the corresponding source line
2. Highlight the target line with a yellow flash animation (0.5s, repeats 3 times)
3. Scroll the editor to center the target line

This makes it easy to find and edit specific content you see in the preview.

:::note
Clicking on footnote links in the preview navigates the footnote instead of jumping to source. This is by design to let you test footnote navigation.
:::

## CSS Mode Preview

When editing CSS (Global CSS mode), the preview shows the selected chapter with your CSS changes applied in real-time. Use the **Preview chapter** dropdown in the toolbar to switch which chapter is displayed.

## View Modes

| Mode | Description |
|------|-------------|
| **Code** | Editor only — preview is hidden |
| **Split** | Editor and preview shown side by side |
| **Preview** | Preview only — editor is hidden |

Split view is the recommended mode for content editing. On mobile devices, split view is unavailable — switch between Code and Preview modes instead.
