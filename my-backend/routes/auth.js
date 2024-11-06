// routes/auth.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user (restaurant or NGO)
router.post('/register', authController.register);

// Login user (restaurant or NGO)
router.post('/login', authController.login);

module.exports = router;