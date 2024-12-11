# FoodSathi Web App

FoodSathi is a web application aimed at reducing food waste and promoting food donation. This application connects donors, volunteers, and organizations to work collaboratively toward a food-secure community.


## Features

-> User-friendly Interface: Navigate through easy-to-use features.
-> Food Donation: Register as a donor to contribute food surplus.
-> Volunteer Participation: Join as a volunteer to facilitate food distribution.
-> Community Connection: Collaborate with NGOs and local partners to reduce food waste.


## Prerequisites

Ensure you have the following installed:

Node.js (>= 14.x recommended)
npm (Node Package Manager)
React (for frontend development)


## Directory Structure

```
.
├── my-frontend/

│   ├── public/

│   ├── src/

│   ├── package.json

│   ├── README.md

├── my-backend/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── server.js

│   ├── package.json

│   ├── README.md
```


## Frontend Setup

*Steps:*

Navigate to the my-frontend directory: 
```
cd my-frontend
```

Install dependencies:
```
npm install
```

Install necessary packages:
```
npm i react-router-dom
npm i react-scripts
npm i framer-motion
npm i axios
```

Build the project:
```
npm run build
```

Start the React app:
```
npm start
```

Set the API base URL:
```
env
REACT_APP_API_URL=http://localhost:5000
```


## Backend Setup

*Steps:*

Navigate to the my-backend directory:
```
cd my-backend
```

Install dependencies:
```
npm install
```

Set up necessary packages:
```
npm i mongoose
npm i express
npm i dotenv
npm i bcryptjs
npm i jsonwebtoken
```

Configure .env file with your MongoDB connection string:
```
MONGO_URI=mongodb://localhost:27017/yourDatabase
JWT_SECRET=yourSecretKey
```

Start the backend server:
```
node server.js
```


## Technologies Used

*Frontend:*

React.js: Component-based UI development.
Framer Motion: For animations and transitions.
Axios: HTTP requests to the backend.

*Backend:*

Node.js: Runtime environment.
Express.js: Web framework for building REST APIs.
MongoDB: NoSQL database for data storage.
Mongoose: ODM for MongoDB.

*API Endpoints*
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login
Food Donation Routes
Method	Endpoint	Description
POST	/api/food/donate	Submit a food donation request
GET	/api/food/donations	View available food donations

*Environment Variables*
Create a .env file in the backend directory with the following fields:
makefile
PORT=5000
MONGO_URI=mongodb://localhost:27017/yourDatabase
JWT_SECRET=yourSecretKey

For the frontend, update the REACT_APP_API_URL:
arduino

REACT_APP_API_URL=http://localhost:5000


## Deployment

*Frontend:*

Build the React app:
npm run build

Deploy the build folder to your hosting service (e.g., Vercel, Netlify).

*Backend:*

Use a service like Heroku, Render, or AWS to deploy your backend.
Update the MONGO_URI and other environment variables accordingly.


## Contribution

Contributions are welcome! Follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Open a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for more information.


### Contact
For inquiries or collaboration:

Email: kunalverma3369@gmail.com,, aryandixit7629@gmail.com

Website: 139.84.177.2

GitHub: (https://github.com/AryanDixit04)(https://aryandixit04.github.io/myPortfolio-main/) ,,, https://github.com/kunalvrma/foodsathi
