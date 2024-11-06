// routes/auth.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user (restaurant or NGO)
router.post('/register', authController.register);

// Login user (restaurant or NGO)
router.post('/login', authController.login);

//chat bot

router.post('/someRoute', someController);
module.exports = router;