// models/Restaurant.js

const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    foodItemsAvailable: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            expirationDate: { type: Date, required: true },
        },
    ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;