import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import VideoSection from './Components/VideoSection/VideoSection';
import ImageCardSection from './Components/ImageCardSection/ImageCard';
import JoinForm from './Components/Form/JoinForm';
import Login from './Components/Login';  
import Register from './Components/Register';
import JourneyCount from './Components/JourneyCount/JourneyCount';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><VideoSection /><ImageCardSection /></>} />
        <Route path="/form" element={<JoinForm />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>

    </Router>
  );
};

export default App;