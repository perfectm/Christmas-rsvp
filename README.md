# Christmas Eve Open House RSVP Form

A beautiful, responsive RSVP form styled to match your Christmas invitation card. Submissions are automatically saved to Google Sheets.

## Features

- 🎨 Custom styling matching the invitation card color palette
- 📱 Fully responsive design for mobile and desktop
- 📊 Automatic submission to Google Sheets
- ✨ Clean, user-friendly interface
- 🎄 Festive botanical Christmas theme

## Color Palette

The form uses colors extracted from the invitation card:
- **Sage Green**: `#8B9A7A` (botanical leaves)
- **Terracotta Red**: `#C8604F` (main text and accents)
- **Warm Beige**: `#F5F1E8` (background)
- **Warm Brown**: `#8B6B47` (borders and accents)
- **Off-White**: `#FDFBF7` (card backgrounds)

## Setup Instructions

### Step 1: Set Up Google Sheets Integration

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it something like "Christmas Party RSVPs"

2. **Open Apps Script**
   - In your Google Sheet, click **Extensions > Apps Script**
   - Delete any default code in the editor

3. **Add the Script**
   - Open the file `google-apps-script.js` from this project
   - Copy all the code
   - Paste it into the Apps Script editor
   - Click the save icon (💾)

4. **Deploy as Web App**
   - Click **Deploy > New deployment**
   - Click the gear icon ⚙️ next to "Select type"
   - Select **Web app**
   - Configure the deployment:
     - Description: "RSVP Form Handler" (or any name)
     - Execute as: **Me**
     - Who has access: **Anyone**
   - Click **Deploy**
   - **Important**: Copy the Web App URL (you'll need this in Step 2)
   - Click **Done**

5. **Grant Permissions**
   - You may need to authorize the script
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced** (if you see a warning)
   - Click **Go to [Your Project Name] (unsafe)**
   - Click **Allow**

### Step 2: Configure the RSVP Form

1. Open `script.js` in a text editor
2. Find this line:
   ```javascript
   GOOGLE_SCRIPT_URL: 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web App URL you copied in Step 1
4. Save the file

### Step 3: Test Locally

1. Open `index.html` in your web browser
2. Fill out and submit the form
3. Check your Google Sheet to verify the data appears

## Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Initial Setup

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com)
   - Click **New repository**
   - Name it (e.g., "christmas-rsvp")
   - Make it **Public**
   - Click **Create repository**

2. **Push Your Code**
   ```bash
   # Initialize git (if not already done)
   git init

   # Add all files
   git add index.html styles.css script.js README.md

   # Commit
   git commit -m "Initial commit: Christmas RSVP form"

   # Add remote (replace USERNAME and REPO with yours)
   git remote add origin https://github.com/USERNAME/REPO.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings**
   - Scroll down to **Pages** (in the left sidebar)
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be published at: `https://USERNAME.github.io/REPO/`

4. **Access Your Form**
   - Wait 1-2 minutes for deployment
   - Visit your site URL
   - Share this URL with your guests!

### Option 2: Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Click **Add new site > Deploy manually**
4. Drag and drop these files: `index.html`, `styles.css`, `script.js`
5. Your site will be live instantly!
6. You can customize the domain in Site settings

### Option 3: Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up or log in
3. Click **New Project**
4. Import your GitHub repository (or upload files)
5. Click **Deploy**
6. Your site will be live!

### Option 4: Simple Web Host

Upload `index.html`, `styles.css`, and `script.js` to any web hosting service that supports static HTML files.

## File Structure

```
rsvp/
├── index.html              # Main HTML form
├── styles.css              # CSS styling (matches invitation colors)
├── script.js               # Form submission logic
├── google-apps-script.js   # Google Sheets integration script
├── invite.jpg              # Reference invitation card image
└── README.md               # This file
```

## Form Fields

- **Name** (Required): Guest's full name
- **Attending** (Required): Yes/No radio buttons
- **Number of Guests** (Required if attending): Dropdown selection
- **Email** (Optional): For follow-up communication
- **Message** (Optional): Dietary restrictions or special requests

## Customization

### Update Event Details

Edit `index.html` lines 12-16 to change event information:
```html
<h1>Eat, Drink & Be Merry</h1>
<h2>Christmas Eve Open House</h2>
<p class="event-details">Wednesday, December 24</p>
<p class="event-details">Arrive any time from 6pm - 10pm</p>
```

### Modify Colors

Edit `styles.css` root variables (lines 2-8):
```css
:root {
    --sage-green: #8B9A7A;
    --terracotta: #C8604F;
    --warm-beige: #F5F1E8;
    /* ... etc ... */
}
```

### Add More Guest Count Options

Edit `index.html` in the guests select dropdown (around line 43):
```html
<option value="7">7 Guests</option>
<option value="8">8 Guests</option>
```

## Troubleshooting

### Form Submissions Not Appearing in Google Sheets

1. Check that you've deployed the Apps Script as a Web App
2. Verify the Web App URL is correctly set in `script.js`
3. Make sure "Who has access" is set to "Anyone" in deployment settings
4. Check the browser console for errors (F12 > Console)

### Google Script Authorization Issues

1. The first time you deploy, you'll need to authorize the script
2. Follow the "Grant Permissions" steps in Setup Instructions
3. If you see security warnings, click "Advanced" and proceed

### Form Not Loading

1. Make sure all three files (`index.html`, `styles.css`, `script.js`) are in the same directory
2. Check browser console for errors
3. Verify file names match exactly (case-sensitive)

## Viewing RSVP Responses

1. Open your Google Sheet
2. Responses will appear with:
   - Timestamp
   - Name
   - Number of Guests
   - Attending (Yes/No)
   - Email
   - Message

## Security Notes

- The Google Apps Script is deployed as "Anyone can access"
- This is safe because it only allows POST requests to add data
- No sensitive information should be collected without proper security
- Consider adding CAPTCHA for public forms if spam becomes an issue

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Free to use and modify for personal events.

## Support

For issues or questions about:
- **Google Sheets integration**: Check Apps Script logs in your Google Sheet
- **Form functionality**: Open browser console (F12) for error messages
- **Deployment**: Refer to hosting provider documentation

---

Made with ❤️ for your Christmas celebration
