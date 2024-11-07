// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['ngo', 'restaurant'], required: true }, // Role-based access
    phoneNumber: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;