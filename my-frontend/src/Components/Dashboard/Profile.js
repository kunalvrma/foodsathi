import React from 'react';
import { useUser } from '../../UserContext'; // Import the useUser hook
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoMdLink } from "react-icons/io";

const Profile = () => {
  const { user } = useUser(); // Get user data from context

  return (
    <div className="profile">
      <img 
        src={user.profileImage || require('./media/41B3Q0XgFVL._AC_UF1000,1000_QL80_.jpg')} // Use require for dynamic import
        alt="Profile" 
      />
      <div>
        <h2>{user.username}</h2>
        <div>
          {user.tags.length > 0 ? (
            user.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))
          ) : (
            <p>No tags available.</p>
          )}
        </div>
        <div>
          {/* Conditionally render email if provided */}
          {user.email && (
            <p><MdOutlineAlternateEmail /> {user.email}</p>
          )}
          {/* Conditionally render phone number if provided */}
          {user.phone && (
            <p><CiPhone /> {user.phone}</p>
          )}
          {/* Conditionally render website if provided */}
          {user.website && (
            <p><IoMdLink /> <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
