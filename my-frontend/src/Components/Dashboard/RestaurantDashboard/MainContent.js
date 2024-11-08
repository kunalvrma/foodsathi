import React from 'react';
import Profile from './Profile';
import Contributions from './Contributions';
import About from './About';

function MainContent() {
  return (
    <div className="main-content">
      <Profile />
      <Contributions />
      <About />
    </div>
  );
}

export default MainContent;
