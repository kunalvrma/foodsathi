import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './Components/Navbar/Navbar';
import ProtectedRoute from './Components/ProtectedRoutes';
import { UserProvider } from './UserContext';

// Lazy-loaded components
const HomePage = React.lazy(() => import('./Components/Home/Home'));
const Dashboard = React.lazy(() => import('./Components/Dashboard/RestaurantDashboard/RestaurantDashboard'));
const Settings = React.lazy(() => import('./Components/Dashboard/RestaurantDashboard/Settings/Settings'));
const Profile = React.lazy(() => import('./Components/Dashboard/RestaurantDashboard/Profile'));
const PostDonation = React.lazy(() => import('./Components/Dashboard/RestaurantDashboard/PostDonation'));
const DonationForm = React.lazy(() => import('./Components/DonationForm/DonationForm'));
const DonationRequestForm = React.lazy(() => import('./Components/DonationRequestForm/DonationRequestForm'));
const DonorTracking = React.lazy(() => import('./Components/DonationTracking/DonorTracking'));
const ReceiverTracking = React.lazy(() => import('./Components/DonationTracking/RecieverTracking'));
const ContactUs = React.lazy(() => import('./Components/support/ContactUs'));
const Login = React.lazy(() => import('./Components/Login'));
const Register = React.lazy(() => import('./Components/Register'));
const Learn = React.lazy(() => import('./Components/Learn/Learn'));
const About = React.lazy(() => import('./Components/support/About'));
const Gallery = React.lazy(() => import('./Components/Gallery/Gallery'));
const FoodSathies = React.lazy(() => import('./Components/FoodSathies/FoodSathies'));
const VideoSection = React.lazy(() => import('./Components/VideoSection/VideoSection'));
const ImageCardSection = React.lazy(() => import('./Components/ImageCardSection/ImageCard'));
const JourneyCount = React.lazy(() => import('./Components/JourneyCount/JourneyCount'));
const ChatBot = React.lazy(() => import('./Components/ChatBot/chatBot'));
const NotFound = () => <h1>404 - Page Not Found</h1>; // Simple 404 Page

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/" 
              element={
                <>
                  <HomePage />
                  <VideoSection />
                  <ImageCardSection />
                  <FoodSathies />
                  <JourneyCount />
                  <ChatBot />
                  <DonationRequestForm/>
                  
                </>
              } 
            />
            <Route path="/AboutUs" element={ <About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/Request Donation" element={<DonationRequestForm/>} />
            <Route path="/Donation Form" element={<DonationForm/>} />
            {/* Protected Routes */}
            <Route 
              path="/restaurant-dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/post-donation" element={<ProtectedRoute><PostDonation /></ProtectedRoute>} />
            <Route path="/donation-form" element={<ProtectedRoute><DonationForm /></ProtectedRoute>} />
            <Route path="/donation-request-form" element={<ProtectedRoute><DonationRequestForm /></ProtectedRoute>} />
            <Route path="/track-donation-donor" element={<ProtectedRoute><DonorTracking /></ProtectedRoute>} />
            <Route path="/track-donation-receiver" element={<ProtectedRoute><ReceiverTracking /></ProtectedRoute>} />

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </Router>
    </UserProvider>
  );
};

export default App;
