import React from 'react';
import './app.css';
import JoinForm from './Components/Form/JoinForm';
import Home from './Components/Home/Home';
import ImageCardSection from './Components/ImageCardSection/ImageCard';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register';
import VideoSection from './Components/VideoSection/VideoSection';
import JourneyCount from './Components/JourneyCount/JourneyCount';
import FoodSathies from './Components/FoodSathies/FoodSathies';
import Profile from './Components/Dashboard/Profile';

import { UserProvider } from './UserContext';
import Dashboard from './Components/Dashboard/Dashboard';
//import Sidebar from './Components/Dashboard/Sidebar';
import Settings from './Components/Dashboard/Settings/Settings';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  
  return (
    <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Home /><VideoSection /><ImageCardSection /><JourneyCount /><FoodSathies/></>} />
        <Route path="/form" element={<JoinForm />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" component={Profile} />
      </Routes>
     
    </Router>
    </UserProvider>
  );
};

export default App;