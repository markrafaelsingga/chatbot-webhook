// docs/proxy.js
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwAx1SvZTW6JZZYUohpSVVqWfINjxE0E_eXuYz28-K4zTZI0uzcv7sXWfChVYFZ71DDdA/exec';

async function handleFAQRequest(question) {
    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question })
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        return { 
            success: false, 
            error: error.message,
            answer: "Service temporarily unavailable"
        };
    }
}

// Make function available globally
window.FAQProxy = { handleFAQRequest };
