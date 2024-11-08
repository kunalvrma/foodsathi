// src/Components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import About from './About';
import Contributions from './Contributions';
import { fetchProtectedData } from '../../api';  // Import the fetch function
import './dashboard.css';

const Dashboard = () => {
  const [contributions, setContributions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProtectedData = async () => {
      try {
        const data = await fetchProtectedData('contributions');  // Specify endpoint
        setContributions(data);
      } catch (err) {
        setError('Failed to load contributions');
      }
    };

    loadProtectedData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Profile />
        <About />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Contributions contributions={contributions} /> {/* Pass fetched data to the component */}
      </div>
    </div>
  );
};

export default Dashboard;