import React from 'react';
import profileImage from './media/41B3Q0XgFVL._AC_UF1000,1000_QL80_.jpg';
const Profile = () => {
  return (
    <div className="profile">
      <img 
        src={profileImage} 
        alt="Profile" 
      />
      <div>
        <h2>User Name</h2>
        <p></p>
    <div>
      <span class="tag">Volunteer</span>
      <span class="tag">Donor</span>
      <span class="tag">Sustainability</span>
    </div>
      </div>
    </div>
  );
};

export default Profile;
