import React, { useState, useEffect } from 'react';

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donation history from API
    const fetchDonations = async () => {
      const response = await fetch('/api/donations');
      const data = await response.json();
      setDonations(data);
    };

    fetchDonations();
  }, []);

  return (
    <div className="donation-history">
      <h2>Donation History</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.type} - {donation.quantity} - {donation.donorName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationHistory;