const express = require('express');
const router = express.Router();
const axios = require('axios');

const CHATBOT_API_URL = "food_sathi_bot";
const API_KEY = "5GT5NKYJKX54JZTCFBMQS6TGF7HBSAZPW72A";

router.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const response = await axios.post(
            CHATBOT_API_URL,
            { input: message },
            { headers: { 'Authorization': `Bearer ${API_KEY}` } }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'ChatBot request failed' });
    }
});

module.exports = router;
