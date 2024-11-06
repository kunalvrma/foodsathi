// routes/restaurant.js

const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Add food items available for donation
router.post('/addFoodItems', restaurantController.addFoodItems);

// List available food items
router.get('/:restaurantId/availableFood', restaurantController.listAvailableFood);

// Create a food donation
router.post('/createFoodDonation', restaurantController.createFoodDonation);

module.exports = router;