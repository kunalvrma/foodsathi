import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // This is correct
  };

  return (
    <div>
      <h1>Welcome to FoodSathi</h1>
      <p>Your platform for sustainable food redistribution.</p>
      <button className="login-button" onClick={handleLoginClick}>Login</button> {/* This is correct */}
    </div>
  );
};

export default Home;