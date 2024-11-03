// src/components/FoodSathies.js
import React from 'react';
import { FoodSathiesData } from './Data/FoodSathiesData';
import './FoodSathies.css';
import { useNavigate } from 'react-router-dom';
import image1 from './media/ngo1.jpg';
import image2 from './media/ngo2.jpg';
import image3 from './media/ngo3.jpeg';

function FoodSathies() {
  const navigate = useNavigate();

  const handleDetailsClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <section className="foodSathies-section">
      <h2 className="section-heading">Food Sathies</h2>
      <div className="card-container">
        {FoodSathiesData.map((item) => (
          <div key={item.id} className="food-card">
            <img src={image1} alt={item.name} className="card-image" />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{'⭐'.repeat(Math.round(item.rating))}</p>
              <button onClick={() => handleDetailsClick(item.id)}>More Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodSathies;
