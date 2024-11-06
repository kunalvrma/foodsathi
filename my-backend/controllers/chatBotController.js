const axios = require('axios');

const chatWithBot = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await axios.post(
      process.env.CHATBOT_API_URL,
      { input: message },
      { headers: { Authorization: `Bearer ${process.env.CHATBOT_API_KEY}` } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Chatbot error" });
  }
};

module.exports = { chatWithBot };
