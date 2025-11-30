# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Christmas Eve Open House RSVP form - a static web application that collects guest responses and stores them in Google Sheets. The project consists of vanilla HTML/CSS/JavaScript for the frontend and Google Apps Script for the backend data persistence.

## Architecture

**Three-tier static architecture:**

1. **Frontend (index.html, styles.css, script.js)**
   - Single-page form with conditional field display
   - Validates and submits data via fetch API to Google Apps Script
   - Uses `no-cors` mode for cross-origin requests to Google's servers

2. **Backend (google-apps-script.js)**
   - Deployed as Google Apps Script Web App
   - Handles POST requests with form data
   - Auto-creates spreadsheet headers on first submission
   - Returns JSON responses (though not readable in no-cors mode)

3. **Data Storage**
   - Google Sheets spreadsheet (external, not in repo)
   - Columns: Timestamp, Name, Number of Guests, Attending, Email, Message

## Key Configuration

**Google Apps Script URL**: Located in `script.js` at line 4:
```javascript
GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/...'
```

This URL must be updated after deploying google-apps-script.js as a Web App in Google Apps Script editor.

## Form Logic

**Conditional field display**: The "Number of Guests" dropdown (script.js:14-24) is:
- Hidden by default
- Shows only when "Yes, I'll be there!" is selected
- Set to required=true when visible
- Automatically set to '0' if user selects "No" (script.js:49-51)

**Validation**: Uses native HTML5 validation with custom error state classes (script.js:106-116).

## Deployment

This is a static site (no build process). Deploy by uploading these files to any static host:
- index.html
- styles.css
- script.js
- invite.jpg (invitation card image)

**Google Apps Script deployment** (required for form submissions):
1. Create a Google Sheet
2. Extensions > Apps Script
3. Paste code from google-apps-script.js
4. Deploy > New deployment > Web app
5. Set "Execute as: Me" and "Who has access: Anyone"
6. Copy Web App URL and update script.js CONFIG.GOOGLE_SCRIPT_URL

## Testing

**Local testing**: Open index.html directly in browser. Form will work if GOOGLE_SCRIPT_URL is configured.

**Google Apps Script testing**: Use test-script.js function in Apps Script editor:
```javascript
// Run testSubmission() function in Apps Script editor to verify sheet integration
```

## Styling

**Color palette** defined in styles.css:1-10 as CSS custom properties:
- Sage green (#8B9A7A) - botanical theme
- Terracotta (#C8604F) - primary accent
- Warm beige (#F5F1E8) - background
- Off-white (#FDFBF7) - card backgrounds

All colors are extracted from the invitation card design for visual consistency.

## No Build Tools

This project intentionally has no build process, package.json, or dependencies. All code is vanilla HTML/CSS/JavaScript for maximum simplicity and portability.
