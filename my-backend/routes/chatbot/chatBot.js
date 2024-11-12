const express = require('express');
const router = express.Router();
const { handleMessage } = require('../../controllers/chatBotController');

router.post('/message', handleMessage);

module.exports = router;