import axios from 'axios';

export const sendMessageToChatbot = async (message) => {
  try {
    const response = await axios.post('/api/chatbot/chat', { message });
    return response.data;
  } catch (error) {
    console.error("Error in chatbot communication", error);
    throw error;
  }
};
