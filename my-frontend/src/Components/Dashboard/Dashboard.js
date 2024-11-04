import React from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import About from './About';
import './dashboard.css';
import Contributions from './Contributions';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Profile />
        <About />
        <Contributions />
      </div>
    </div>
  );
};

export default Dashboard;
