const apiKey = process.env.API_KEY || ''; // Fetch the API key from the environment variable
const endpoint = 'https://api.cognitive.microsofttranslator.com';

async function translateMessage() {
    const userMessage = document.getElementById('user-message').value.trim();
    if (userMessage) {
        const targetLanguage = document.getElementById('to-language').value;
        displayMessage('user', userMessage);
        const translatedText = await translateText(userMessage, targetLanguage);
        displayMessage('Translation', translatedText);
        document.getElementById('user-message').value = '';
    }
}

async function translateText(text, targetLanguage) {
    const url = `${endpoint}/translate?api-version=3.0&to=${targetLanguage}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey,
        },
        body: JSON.stringify([{ text }]),
    });

    const data = await response.json();
    return data[0].translations[0].text;
}

function displayMessage(sender, message) {
    const translateMessages = document.getElementById('translate-messages');
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
    const senderElement = document.createElement('div');
    senderElement.className = 'message-sender';
    senderElement.textContent = `${sender.charAt(0).toUpperCase() + sender.slice(1)}:`;
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
    messageElement.textContent = message;
    messageContainer.appendChild(senderElement);
    messageContainer.appendChild(messageElement);
    translateMessages.appendChild(messageContainer);
    translateMessages.scrollTop = translateMessages.scrollHeight;
}
