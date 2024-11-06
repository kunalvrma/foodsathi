// controllers/ngoController.js

const NGO = require('../models/NGO');
const FoodDonation = require('../models/FoodDonation');

// List food donations for an NGO
exports.listFoodDonations = async (req, res) => {
    const { ngoId } = req.params;

    try {
        const ngo = await NGO.findById(ngoId).populate('foodRequests');
        if (!ngo) return res.status(404).json({ message: 'NGO not found' });

        res.json(ngo.foodRequests);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Request food from a restaurant
exports.requestFood = async (req, res) => {
    const { ngoId, restaurantId, foodItems } = req.body;

    try {
        const ngo = await NGO.findById(ngoId);
        const restaurant = await Restaurant.findById(restaurantId);

        if (!ngo || !restaurant) {
            return res.status(404).json({ message: 'NGO or Restaurant not found' });
        }

        const donation = new FoodDonation({
            ngo: ngoId,
            restaurant: restaurantId,
            foodItems: foodItems,
        });

        await donation.save();
        ngo.foodRequests.push(donation._id);
        await ngo.save();

        res.status(201).json({ message: 'Food donation request created successfully', donation });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};