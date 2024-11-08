// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';  // Base URL for your backend

export const sendMessageToBot = async (message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chatbot/chat`, { message });
    return response.data;
  } catch (error) {
    console.error('Error communicating with the chatbot:', error);
    throw error;
  }
};

export const fetchProtectedData = async (endpoint) => {
  try {
    const token = localStorage.getItem('token');  // Assuming the token is stored in local storage
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error;
  }
};