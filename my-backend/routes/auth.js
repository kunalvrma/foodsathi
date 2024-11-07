// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user (restaurant or NGO)
router.post('/register', authController.register); // Ensure this maps to the correct function

// Login user (restaurant or NGO)
router.post('/login', authController.login); // Ensure this maps to the correct function


module.exports = router;