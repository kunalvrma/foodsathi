const User = require('../models/User'); // Ensure correct import of User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
    const { name, email, password, role, phoneNumber } = req.body;

    try {
        if (!name || !email || !password || !phoneNumber || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingEmail = await User.findOne({ email });
        const existingPhoneNumber = await User.findOne({ phoneNumber });
        if (existingEmail || existingPhoneNumber) {
            return res.status(400).json({ message: 'Email or phone number already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: name, 
            email,
            password: hashedPassword,
            phoneNumber,
            role,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.json({ token, user: { username: user.username, role: user.role, email: user.email } });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

// Get Profile
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId); // Assuming req.user contains userId
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ username: user.username, email: user.email, role: user.role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

// Update Profile
const updateProfile = async (req, res) => {
    const { name, email, phoneNumber, role } = req.body;

    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (name) user.username = name;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (role) user.role = role;

        await user.save();
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

module.exports = { register: registerUser, login: loginUser, getProfile, updateProfile };