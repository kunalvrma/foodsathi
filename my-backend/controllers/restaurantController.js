// controllers/restaurantController.js

// List available food items
exports.listAvailableFood = async (req, res) => {
    const { restaurantId } = req.params;

    try {
        const restaurant = await Restaurant.findById(restaurantId);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });

        res.json(restaurant.foodItemsAvailable);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a food donation
exports.createFoodDonation = async (req, res) => {
    const { restaurantId, ngoId, foodItems } = req.body;

    try {
        const restaurant = await Restaurant.findById(restaurantId);
        const ngo = await NGO.findById(ngoId);

        if (!restaurant || !ngo) {
            return res.status(404).json({ message: 'Restaurant or NGO not found' });
        }

        // Add food donation record
        const foodDonation = new FoodDonation({
            restaurant: restaurantId,
            ngo: ngoId,
            foodItems: foodItems,
        });

        await foodDonation.save();

        // Optionally, you can link the donation to the restaurant and NGO models
        restaurant.foodItemsAvailable = restaurant.foodItemsAvailable.filter(item =>
            !foodItems.some(donationItem => donationItem.name === item.name)
        );
        await restaurant.save();

        ngo.foodRequests.push(foodDonation._id);
        await ngo.save();

        res.status(201).json({ message: 'Food donation created successfully', donation: foodDonation });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};