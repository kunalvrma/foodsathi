// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const ngoRoutes = require('./routes/ngo');
const restaurantRoutes = require('./routes/restaurant');
const chatbotRoute = require('./routes/chatbot/chatBot');//chatbot

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // To parse JSON bodies
app.use(cors()); // To handle CORS

//define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the FoodSathi API!');
});
// Use routes
app.use('/api/auth', authRoutes);  // This is correct
app.use('/api/ngo', ngoRoutes);  // Assuming you have these routes set up correctly
app.use('/api/restaurant', restaurantRoutes);  // Assuming you have these routes set up correctly

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//chatbot
app.use('/api/chatbot', chatbotRoute);

