import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './app.css';
import ChatBot from './Components/ChatBot/chatBot';
import AboutNgo from './Components/Dashboard/NgoDashboard/AboutNgo';
import DonationHistory from './Components/Dashboard/NgoDashboard/DonationHistory';
import NgoDashboard from './Components/Dashboard/NgoDashboard/NgoDashboard';
import PostRequest from './Components/Dashboard/NgoDashboard/PostRequest';
import SettingsNgo from './Components/Dashboard/NgoDashboard/Settings/Settings';
import PostDonation from './Components/Dashboard/RestaurantDashboard/PostDonation';
import Profile from './Components/Dashboard/RestaurantDashboard/Profile';
import RestaurantDashboard from './Components/Dashboard/RestaurantDashboard/RestaurantDashboard';
import Settings from './Components/Dashboard/RestaurantDashboard/Settings/Settings';
import DonationForm from './Components/DonationForm/DonationForm';
import DonationRequestForm from './Components/DonationRequestForm/DonationRequestForm';
import DonorTracking from './Components/DonationTracking/DonorTracking';
import RecieverTracking from './Components/DonationTracking/RecieverTracking';
import FoodSathies from './Components/FoodSathies/FoodSathies';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ImageCardSection from './Components/ImageCardSection/ImageCard';
import JourneyCount from './Components/JourneyCount/JourneyCount';
import Learn from './Components/Learn/Learn';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';
import ProtectedRoute from './Components/ProtectedRoutes';
import Register from './Components/Register';
import About from './Components/support/About';
import ContactUs from './Components/support/ContactUs';
import VideoSection from './Components/VideoSection/VideoSection';
import { UserProvider } from './UserContext';
import { AuthProvider } from './context/AuthContext'; // ✅ Update this path to your actual file



const App = () => {
  return (
    <AuthProvider>
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
          
          <ChatBot/> 
          <Footer/>  </>} />
         
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/learn" element={<Learn /> } />
        <Route path="#" element={<About />} />
        <Route path="/restaurant-dashboard" element={
          <ProtectedRoute allowedRole="restaurant">
            <RestaurantDashboard />
          </ProtectedRoute> } />
          
        <Route path="/ngo-dashboard/*" element={
          <ProtectedRoute allowedRole="ngo">
            <NgoDashboard/>
          </ProtectedRoute> } />

        <Route path="/settings" element={<Settings />} />
        <Route path="/postDonation" element={<PostDonation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donationForm" element={<DonationForm/>} />
        <Route path="/donationRequestForm" element={<DonationRequestForm/>} />
        <Route path="/track-donation-donor" element={<DonorTracking />} />
        <Route path="/track-donation-receiver" element={<RecieverTracking />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/aboutNgo" element={<AboutNgo />} />
        <Route path="/donations" element={<DonationHistory/>}/>
        <Route path="/post-request" element={<PostRequest />} />
        <Route path="/settingsNgo" element={<SettingsNgo />} />


        
       {//<Route path="/about" element={<About/>} />
       } 


      </Routes>
     
    </Router>
    </UserProvider>
    </AuthProvider>
  );
};

export default App;
