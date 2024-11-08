import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './dashboard.css';

const NgoDashboard = () => {
  return (
    <div className="ngo-dashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default NgoDashboard;