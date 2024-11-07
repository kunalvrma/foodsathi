import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chatbot/chat';  // Adjust if your backend URL is different

export const sendMessageToBot = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data;  // Return the response from the backend
  } catch (error) {
    console.error('Error communicating with the chatbot:', error);
    throw error;  // Propagate the error to handle it in the calling component
  }
};