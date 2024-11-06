import { sendMessageToChatbot } from '.\services/api';
import React, { useState } from 'react';
import "./chatBot.css";



function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    const newMessage = { user: 'You', text: input };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      const botResponse = await sendMessageToChatbot(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'Bot', text: botResponse.reply },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'Bot', text: "I'm having trouble responding." },
      ]);
    }
  };

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default chatBot;
