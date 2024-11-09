import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './dashboard.css';
import PostRequest from './PostRequest';
import AboutNgo from './AboutNgo';
//import { fetchProtectedData } from '../../../api';

const NgoDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <MainContent/>
        <PostRequest />
        <AboutNgo/>
        
      </div>
    </div>
  );
};

export default NgoDashboard;