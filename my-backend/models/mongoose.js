const mongoose = require("mongoose");

// Connect to MongoDB with a specified database name
mongoose.connect("mongodb://localhost:27017/RegisteredData", { // Replace 'myDatabase' with your actual database name
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Failed to connect", error);
  });

// Define the user schema
const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Optional: Enforce unique email addresses
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const RegisteredData = mongoose.model("RegisteredData", LoginSchema);

module.exports = RegisteredData;
