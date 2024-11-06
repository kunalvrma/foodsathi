// models/FoodDonation.js

const mongoose = require('mongoose');

const foodDonationSchema = new mongoose.Schema({
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO', required: true },
    foodItems: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            donationDate: { type: Date, default: Date.now },
        },
    ],
    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
});

const FoodDonation = mongoose.model('FoodDonation', foodDonationSchema);
module.exports = FoodDonation;