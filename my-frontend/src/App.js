import React from 'react';
import './app.css';
import Dashboard from './Components/Dashboard/RestaurantDashboard/RestaurantDashboard';
import Profile from './Components/Dashboard/RestaurantDashboard/Profile';
import FoodSathies from './Components/FoodSathies/FoodSathies';
import Home from './Components/Home/Home';
import ImageCardSection from './Components/ImageCardSection/ImageCard';
import JourneyCount from './Components/JourneyCount/JourneyCount';
import Login from './Components/Login';
import About from './Components/support/About';
import Navbar from './Components/Navbar/Navbar';
import Learn from './Components/Learn/Learn';
import Register from './Components/Register';
import VideoSection from './Components/VideoSection/VideoSection';
import { UserProvider } from './UserContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChatBot from './Components/ChatBot/chatBot';
import Settings from './Components/Dashboard/RestaurantDashboard/Settings/Settings';
import DonationForm from './Components/DonationForm/DonationForm';
import DonationRequestForm from './Components/DonationRequestForm/DonationRequestForm';
import DonorTracking from './Components/DonationTracking/DonorTracking';
import RecieverTracking from './Components/DonationTracking/RecieverTracking';
import ContactUs from './Components/support/ContactUs';
import ProtectedRoute from './Components/ProtectedRoutes';
import PostDonation from './Components/Dashboard/RestaurantDashboard/PostDonation';

const App = () => {
  return (
    <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Home />
          <VideoSection />
          <ImageCardSection />
          <FoodSathies/>
          <JourneyCount /> 
          <ChatBot/>   </>} />
         
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/learn" element={<Learn /> } />
        <Route path="/restaurant-dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute> } />
        <Route path="/settings" element={<Settings />} />
        <Route path="/postDonation" element={<PostDonation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donationForm" element={<DonationForm/>} />
        <Route path="/donationRequestForm" element={<DonationRequestForm/>} />
        <Route path="/track-donation-donor" element={<DonorTracking />} />
        <Route path="/track-donation-receiver" element={<RecieverTracking />} />
        <Route path="/ContactUs" element={<ContactUs />} />
       {//<Route path="/about" element={<About/>} />
       } 


      </Routes>
     
    </Router>
    </UserProvider>
  );
};

export default App;
