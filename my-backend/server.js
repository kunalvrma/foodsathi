// server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const ngoRoutes = require('./routes/ngo');
const restaurantRoutes = require('./routes/restaurant');

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // To parse JSON bodies
app.use(cors()); // To handle CORS

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/ngo', ngoRoutes);
app.use('/api/restaurant', restaurantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});