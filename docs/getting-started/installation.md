---
sidebar_position: 1
---

# Installation

EpubCraft is a web application — no installation required. Open it in your browser and start creating ebooks immediately.

## Access EpubCraft

Visit one of these URLs:

- **Primary:** [epubcraft.vercel.app](https://epubcraft.vercel.app)
- **Mirror:** [epubcraft.pages.dev](https://epubcraft.pages.dev)

## System Requirements

### Browser Support

EpubCraft works in any modern browser with JavaScript enabled:

- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

### Desktop App (Tauri)

EpubCraft is also available as a desktop application built with Tauri. The desktop version offers the same features as the web app with native file system access.

**Supported platforms:**
- Windows 10/11
- macOS
- Linux

## First Launch

When you first open EpubCraft, the app automatically:

1. Creates a new book with default metadata ("Untitled Book" by "Unknown Author")
2. Adds a starter chapter with placeholder content
3. Applies the default Noto Sans Thai CSS template
4. Opens in split view (editor + preview side by side)

A pulsing blue indicator on the **Metadata & Cover** button in the sidebar reminds you to set your book's metadata. This indicator disappears after your first interaction.

## Optional: Gemini AI Setup

To use AI-powered features (content generation and text improvement), you need a Google Gemini API key:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Generate an API key (starts with `AIza...`)
3. In EpubCraft, click the **Key** icon in the sidebar
4. Paste your API key and click **Save Key**

The key is stored locally in your browser's localStorage and is never sent to any server other than Google's Gemini API.
