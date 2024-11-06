import React from 'react';
import './app.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Dashboard/Profile';
import FoodSathies from './Components/FoodSathies/FoodSathies';
import JoinForm from './Components/Form/JoinForm';
import Home from './Components/Home/Home';
import ImageCardSection from './Components/ImageCardSection/ImageCard';
import JourneyCount from './Components/JourneyCount/JourneyCount';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register';
import VideoSection from './Components/VideoSection/VideoSection';
import { UserProvider } from './UserContext';
//import Sidebar from './Components/Dashboard/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Settings from './Components/Dashboard/Settings/Settings';

import DonationForm from './Components/DonationForm/DonationForm';
import DonationRequestForm from './Components/DonationRequestForm/DonationRequestForm';

const App = () => {
  
  return (
    <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Home /><VideoSection /><ImageCardSection /><FoodSathies/><JourneyCount /> <chatBot/>   </>} />
        <Route path="/form" element={<JoinForm />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donationForm" element={<DonationForm/>} />
        <Route path="/donationRequestForm" element={<DonationRequestForm/>} />
      </Routes>
     
    </Router>
    </UserProvider>
  );
};

export default App;