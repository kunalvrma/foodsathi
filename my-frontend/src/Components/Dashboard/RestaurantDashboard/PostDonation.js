import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostDonation.css';

const PostDonation = () => {
  const [donations, setDonations] = useState([]);
const navigate = useNavigate();

  const handlePostDonation = (e) => {
    e.preventDefault();
    const foodType = e.target.foodType.value;
    const quantity = e.target.quantity.value;
    const date = e.target.date.value;
    const time = e.target.time.value;

    const newDonation = {
      id: Date.now(),
      foodType,
      quantity,
      date,
      time,
      ngo: 'Pending Match', // Default, can be replaced with match logic
    };

    setDonations([newDonation, ...donations]);

    // Optionally reset form
    e.target.reset();
  };

  useEffect(() => {
    // Preload one sample donation (optional)
    setDonations([
      {
        id: 1,
        foodType: 'Vegetarian',
        quantity: 50,
        date: '2025-05-25',
        time: '13:00',
        ngo: 'XYZ NGO',
      },
    ]);
  }, []);

  return (
    <div className="restaurant-dashboard">
       
      <h2 className="dashboard-heading">Post Donation</h2>
      

      <div className="donation-container">
        {/* Left Section */}
        <div className="donation-form-section">
          <form onSubmit={handlePostDonation} className="donation-form">
            <input type="text" name="foodType" placeholder="Food Type" required />
            <input type="number" name="quantity" placeholder="Quantity (meals)" required />
            <input type="date" name="date" required />
            <input type="time" name="time" required />
            <button type="submit" className="submit-btn">Post Donation</button>
          </form>

          <div className="donation-history">
            <h3>Donation History</h3>
            <ul>
              {donations.map((donation) => (
                <li key={donation.id}>
                  <strong>{donation.foodType}</strong> - {donation.quantity} meals on {donation.date} at {donation.time} → {donation.ngo}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="donation-image">
          <img src="/images/login.webp" alt="Donation Visual" />
        </div>
      </div>
    </div>
  );
};

export default PostDonation;
