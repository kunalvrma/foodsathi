import React from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <nav style={{ padding: '20px' }}>
<h2>FoodSathi Dashboard</h2>
<ul style={{ listStyleType: 'none', padding: 0 }}>
  <li> <Link to="/aboutNgo">About Us</Link></li>
  <li><Link to="/post-request">Post a Request</Link></li>
  <li><Link to="/track-donation-receiver">Track Donation</Link></li>
  <li><Link to="/ContributionsN">Contributions</Link></li>
  <li><Link to="/Leaderboard"> Leaderboard</Link></li>
  <li><Link to="/settingsNgo">Settings</Link></li>
</ul>
</nav>
  );
};

export default Sidebar;



