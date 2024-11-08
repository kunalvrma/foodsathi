import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/ngo/about">About Us</NavLink>
      <NavLink to="/ngo/donations">Donation History</NavLink>
      <NavLink to="/ngo/post-request">Post a Request</NavLink>
      <NavLink to="/ngo/settings">Settings</NavLink>
    </div>
  );
};

export default Sidebar;