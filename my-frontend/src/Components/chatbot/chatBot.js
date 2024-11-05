import React, { useState } from 'react';
import { sendMessageToChatbot } from '../services/api';

function ChatBot() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSendMessage = async () => {
        const chatbotResponse = await sendMessageToChatbot(message);
        setResponse(chatbotResponse || "Error communicating with chatbot");
        setMessage('');
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
            />
            <button onClick={handleSendMessage}>Send</button>
            <div>Response: {response}</div>
        </div>
    );
}

export default chatBot;
