// controllers/authController.js
const User = require('../models/User'); // Ensure correct import of User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
    const { name, email, password,  role, phoneNumber } = req.body;

    try {
        // Input validation (Optional but recommended)
        if (!name || !email || !password || !phoneNumber || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        const existingPhoneNumber = await User.findOne({ phoneNumber });
        if (existingEmail|| existingPhoneNumber) {
            return res.status(400).json({ message: 'Email or phone number already in use' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username: name, // Assuming 'name' is being saved as 'username' in the model
            email,
            password: hashedPassword,
            phoneNumber,
            role,
        });

        // Save new user to the database
        await newUser.save();

        // Return success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare password with hashed password stored in database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        // Return token as response
        res.json({ token });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

module.exports = { register: registerUser, login: loginUser }; // Correct export