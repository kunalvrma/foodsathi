import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import VideoSection from './Components/VideoSection/VideoSection';
import ImageCardSection from './Components/ImageCardSection/ImageCard';
import JourneyCount from './Components/JourneyCount/JourneyCount';
import JoinForm from './Components/Form/JoinForm';
import Login from './Components/Login';  

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><VideoSection /><ImageCardSection /></>} /> {/* ImageCardSection for Home */}
        <Route path="/form" element={<JoinForm />} /> {/* JoinForm for form page */}
        <Route path="/login" element={<Login />} /> {/* Add route for Login */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <JourneyCount />
      <Routes>
        <Route path="/" element={<FoodSathies />} />
        <Route path="/details/:id" element={<FoodSathieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;