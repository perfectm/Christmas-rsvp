// Configuration
const CONFIG = {
    // Replace this with your Google Apps Script Web App URL after deployment
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwXBCda0hn21q2sjDT0_QbRPm3FjIgo2WRTO7yqJ07UIB1Ag3nBaedor1agWONVLU9s/exec'
};

// DOM Elements
const form = document.getElementById('rsvp-form');
const responseMessage = document.getElementById('response-message');
const guestsGroup = document.getElementById('guests-group');
const attendingRadios = document.getElementsByName('attending');

// Show/hide guests dropdown based on attendance selection
attendingRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'Yes') {
            guestsGroup.style.display = 'block';
            document.getElementById('guests').required = true;
        } else {
            guestsGroup.style.display = 'none';
            document.getElementById('guests').required = false;
        }
    });
});

// Initialize - hide guests dropdown until "Yes" is selected
guestsGroup.style.display = 'none';

// Form submission handler
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Check if Google Script URL is configured
    if (CONFIG.GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        showMessage('Please configure the Google Apps Script URL in script.js', 'error');
        return;
    }

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        attending: document.querySelector('input[name="attending"]:checked').value,
        guests: document.getElementById('guests').value,
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // If not attending, set guests to 0
    if (formData.attending === 'No') {
        formData.guests = '0';
    }

    // Disable submit button and show loading state
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    try {
        // Send data to Google Apps Script
        const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Note: With 'no-cors' mode, we won't get a readable response
        // We'll assume success if no error is thrown
        showMessage('Thank you! Your RSVP has been submitted successfully.', 'success');
        form.reset();
        guestsGroup.style.display = 'none';

        // Optional: Redirect or show additional message
        setTimeout(() => {
            // You can add a redirect here if needed
            // window.location.href = 'thank-you.html';
        }, 2000);

    } catch (error) {
        console.error('Error:', error);
        showMessage('Sorry, there was an error submitting your RSVP. Please try again.', 'error');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit RSVP';
    }
});

// Show response message
function showMessage(message, type) {
    responseMessage.textContent = message;
    responseMessage.className = `response-message ${type}`;
    responseMessage.style.display = 'block';

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            responseMessage.style.display = 'none';
        }, 5000);
    }
}

// Optional: Add form validation feedback
const inputs = form.querySelectorAll('input[required], select[required]');
inputs.forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.classList.add('error');
    });

    input.addEventListener('input', function() {
        this.classList.remove('error');
    });
});
