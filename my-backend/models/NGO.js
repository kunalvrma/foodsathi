// models/NGO.js

const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    foodRequests: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'FoodDonation', 
            required: false 
        }
    ]
});

const NGO = mongoose.model('NGO', ngoSchema);
module.exports = NGO;