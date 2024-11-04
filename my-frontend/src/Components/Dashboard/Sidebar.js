import React from 'react';

const Sidebar = () => {
  return (
    <nav style={{ padding: '20px' }}>
      <h2>FoodSathi Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="#foodsathi">FoodSathi</a></li>
        <li><a href="#account">Account</a></li>
        <li><a href="#contribution">Contribution</a></li>
        <li><a href="#setting">Setting</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
