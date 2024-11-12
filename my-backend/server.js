// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path'); // Step 1: Import 'path'
const authRoutes = require('./routes/auth');
const ngoRoutes = require('./routes/ngo');
const restaurantRoutes = require('./routes/restaurant');
const chatbotRoutes = require('./routes/chatbot/chatBot'); //chatbot

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // To parse JSON bodies
app.use(cors({
    origin: 'http://localhost:3000',  // your React frontend's URL
    methods: ['GET', 'POST'],
    credentials: true,
  }));

// Serve static files from the React app (Step 2)
app.use(express.static(path.join(__dirname, 'build')));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the FoodSathi API!');
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/ngo', ngoRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Fallback route to serve the frontend's index.html (Step 3)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});