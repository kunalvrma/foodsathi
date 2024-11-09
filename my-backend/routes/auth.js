// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Correcting how functions are imported and used
router.get('/profile', authMiddleware, authController.getProfile);
router.put('/profile', authMiddleware, authController.updateProfile);

// Register a new user (restaurant or NGO)
router.post('/register', authController.register);

// Login user (restaurant or NGO)
router.post('/login', authController.login);

module.exports = router;