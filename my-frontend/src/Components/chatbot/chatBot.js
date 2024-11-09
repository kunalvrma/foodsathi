import { sendMessageToBot } from '../../api';
import React, { useState } from 'react';
import './chatBot.css';
import chatbot from '../../Components/ChatBot/media/chatbot.gif';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle sending messages
  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const newMessage = { user: 'You', text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput(''); // Reset input field

    try {
      const botResponse = await sendMessageToBot(input);  // Get bot response
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
    <div className="chatbot-wrapper">
      {!isOpen && (
        <img
          src={chatbot} // Ensure this is the correct path
          alt="Open Chat"
          className="chat-icon"
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <div className="chatbot">
          <button className="close-chatbot" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <div className="messages">
            {messages.map((msg, index) => (
              <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!input.trim()} // Disable button if input is empty
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
