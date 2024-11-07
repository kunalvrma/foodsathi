const axios = require('axios');

const chatWithBot = async (req, res) => {
  try {
    const { message } = req.body; // Extract the message from the request body

    // Send the message to the chatbot API
    const response = await axios.post(
      process.env.CHATBOT_API_URL, // The URL of the chatbot API
      { input: message }, // Request payload
      { headers: { Authorization: `Bearer ${process.env.CHATBOT_API_KEY}` } } // Authentication header
    );

    // Return the response from the chatbot API
    res.json(response.data);
  } catch (error) {
    console.error("Chatbot error:", error.message || error);

    // Improved error handling to include details from the error response (if available)
    const errorDetails = error.response?.data || error.message;

    res.status(500).json({
      error: "Chatbot error",
      details: errorDetails // Send detailed error information
    });
  }
};

module.exports = { chatWithBot };