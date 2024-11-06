// routes/ngo.js

const express = require('express');
const router = express.Router();
const ngoController = require('../controllers/ngoController');

// List food donations for an NGO
router.get('/:ngoId/foodDonations', ngoController.listFoodDonations);

// Request food from a restaurant
router.post('/requestFood', ngoController.requestFood);

module.exports = router;