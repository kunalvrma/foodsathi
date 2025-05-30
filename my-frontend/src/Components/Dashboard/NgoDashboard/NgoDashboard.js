import React from 'react';
import Sidebar from './Sidebar';
//import ContributionsN from './ContributionsN';

import './dashboard.css';
//import PostRequest from './PostRequest';
import Profile from './Profile';
import AboutNP from './AboutNP';
//import { fetchProtectedData } from '../../../api';

const NgoDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Profile />
        <AboutNP />
        
        
      </div>
    </div>
  );
};

export default NgoDashboard;