---
sidebar_position: 3
---

# AI Integration

EpubCraft integrates with Google's Gemini AI to generate chapter content and improve existing text. This feature requires a Gemini API key.

## Setup

### Getting an API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **Create API Key**
4. Copy the generated key (starts with `AIza...`)

### Configuring in EpubCraft

1. Click the **Key** icon in the sidebar
2. Paste your API key in the input field
3. Click **Save Key**

The key is stored in your browser's localStorage under the key `gemini_api_key`. It is never sent to any server other than Google's Gemini API.

## AI Content Generation

Generate new chapter content using a text prompt:

1. Click the **AI Assist** button in the toolbar
2. Type your prompt in the input field that appears (e.g., "Write a mystery scene in a dark library")
3. Press **Enter** or click the submit button

The AI streams content into the current chapter. It uses the last 1000 characters of existing content as context to maintain continuity.

### Generation Details

- **Model**: gemini-3-flash-preview
- **Mode**: Streaming (content appears progressively)
- **Output format**: HTML (paragraphs, headings, etc.)
- **Context**: Last 1000 characters of the current chapter

## AI Text Improvement

Improve or edit selected text with specific instructions:

1. **Select** the text you want to improve in the editor
2. Click the **AI Improve** button in the formatting toolbar
3. Enter your instruction (e.g., "Make this more dramatic", "Fix grammar", "Translate to Thai")
4. Press **Enter** or click submit

The AI replaces your selection with the improved version. It maintains any HTML tags present in the selection.

### Improvement Details

- **Model**: gemini-3-flash-preview
- **Mode**: Non-streaming (full replacement)
- **Behavior**: Professional editor — follows your instruction precisely
- **HTML-aware**: Preserves existing HTML structure when present

## Use Cases

### Content Generation
- "Write a romantic scene between the two main characters"
- "Create a detailed description of the castle"
- "Write dialogue between a detective and suspect"
- "Generate an introduction for a cookbook"

### Text Improvement
- "Fix grammar and spelling"
- "Make this paragraph more concise"
- "Add more sensory details"
- "Translate to formal Thai"
- "Change the tone to be more mysterious"
- "Rewrite in first person"

## Limitations

- Requires an internet connection
- API key must be valid and have sufficient quota
- Generated content should be reviewed for accuracy
- The AI uses a general-purpose model — specialized knowledge may be limited
- Rate limits depend on your Google AI Studio plan
