import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostDonation.css';

const PostDonation = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePostDonation = (donation) => {
    // Handle the donation posting logic here
    console.log('Posting donation:', donation);
  };

  useEffect(() => {
    // Fetch past donations and related data
    // Here you'd fetch data from your API
    setDonations([{ id: 1, foodType: 'Vegetarian', quantity: 50, ngo: 'XYZ NGO' }]);
  }, []);

  return (
    <div className="restaurant-dashboard">
      <h2>Welcome to your Restaurant Dashboard</h2>
      <button onClick={() => navigate('/settings')}>Update Profile</button>

      <div>
        <h3>Post Food Donation</h3>
        <form onSubmit={handlePostDonation}>
          <input type="text" placeholder="Food Type" required />
          <input type="number" placeholder="Quantity" required />
          <button type="submit">Post Donation</button>
        </form>
      </div>

      <div>
        <h3>Donation History</h3>
        <ul>
          {donations.map((donation) => (
            <li key={donation.id}>
              {donation.foodType} - {donation.quantity} meals donated to {donation.ngo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostDonation;