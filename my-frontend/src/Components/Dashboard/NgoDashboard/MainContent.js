import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutNgo from './AboutNgo';
import DonationHistory from './DonationHistory';
import PostRequest from './PostRequest';
import Settings from './Settings/Settings';

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="about" element={<AboutNgo />} />
        <Route path="donations" element={<DonationHistory />} />
        <Route path="post-request" element={<PostRequest />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default MainContent;