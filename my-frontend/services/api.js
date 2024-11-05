import axios from 'axios';

export const sendMessageToChatbot = async (message) => {
    try {
        const response = await axios.post('/api/chatBot/chat', { message });
        return response.data;
    } catch (error) {
        console.error('ChatBot API error:', error);
        return null;
    }
};
