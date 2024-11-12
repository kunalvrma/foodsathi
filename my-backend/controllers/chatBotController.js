const { listInstances } = require('../config/vultrService'); // Vultr API methods if needed

// Custom responses
const customResponses = {
  "hi": "Hello! How can I assist you today?",
  "hello": "Hi there! How can I help you?",
  "what is foodsathi": "FoodSathi is a platform that connects surplus food donors with people in need, reducing food waste and addressing hunger.",
  "how does foodsathi work": "FoodSathi allows donors to list surplus food on our platform, which NGOs and community organizations can access and redistribute to those in need.",
  "what is the vision of foodsathi": "Our vision is to create a world where no surplus food is wasted, and hunger is a thing of the past.",
  "why should i choose foodsathi": "FoodSathi stands out for its sustainability, ease of use, and community impact—helping reduce food waste and fight hunger!",
  "how does foodsathi make an impact": "Since launch, FoodSathi has facilitated thousands of meal donations, providing food for underserved communities and keeping food out of landfills.",
  "who can join foodsathi": "Anyone can join—whether you’re a food donor, an NGO, or a volunteer, you can help make a difference in creating a sustainable future.",
  "how can i donate food": "Simply list your surplus food on FoodSathi, and local NGOs and community organizations can arrange to pick it up for redistribution.",
  "how can i receive food donations": "If you’re an NGO or community kitchen, you can browse and select food donations available in your area through our platform.",
  "what organizations does foodsathi work with": "We collaborate with community kitchens, NGOs, and other organizations dedicated to fighting hunger and reducing food waste."
};

exports.handleMessage = async (req, res) => {
    const { message } = req.body;
    const lowerCaseMessage = message.toLowerCase();  // Normalize message to lowercase for easy matching

    // Check for custom responses
    let botReply;
    if (customResponses[lowerCaseMessage]) {
        botReply = customResponses[lowerCaseMessage];  // Use custom response if a match is found
    } else {
        // Default response or handle using Vultr API
        botReply = `You said: ${message}`;

        // Example Vultr API interaction, optional
        try {
            const instances = await listInstances();
            botReply += ` | Here’s instance info: ${JSON.stringify(instances)}`;
        } catch (error) {
            botReply = "Sorry, I couldn't retrieve the information.";
        }
    }

    res.json({ reply: botReply });
};