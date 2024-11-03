// src/pages/FoodSathieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { FoodSathiesData } from './Data/FoodSathiesData';

function FoodSathieDetails() {
  const { id } = useParams();
  const item = FoodSathiesData.find((item) => item.id === parseInt(id));

  if (!item) return <p>Details not found</p>;

  return (
    <div className="details-page">
      <h2>{item.name}</h2>
      <p>Rating: {item.rating} ⭐</p>
      <p>Address: {item.address}</p>
      <p>Work: {item.work}</p>
      <p>Date of Registration: {item.registrationDate}</p>
    </div>
  );
}

export default FoodSathieDetails;
