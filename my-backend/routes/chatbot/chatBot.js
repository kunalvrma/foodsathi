const express = require('express');
const { chatWithBot } = require('../controllers/chatBotController');
const router = express.Router();

// Define a POST route to handle chatbot communication
router.post('/chat', chatWithBot);

module.exports = router;
