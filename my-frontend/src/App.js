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


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Home /><VideoSection /><ImageCardSection /><FoodSathies/><JourneyCount /></>} />
        <Route path="/form" element={<JoinForm />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;