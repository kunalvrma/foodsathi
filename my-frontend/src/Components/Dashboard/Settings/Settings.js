import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../UserContext'; // Import the useUser hook
import './Settings.css';
import defaultImage from './41B3Q0XgFVL._AC_UF1000,1000_QL80_.jpg';

const Settings = () => {
  const { user, setUser } = useUser(); // Use the User context
  const [profileImage, setProfileImage] = useState(user.profileImage);
  const [about, setAbout] = useState(user.about);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);

  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview the uploaded image
    }
  };

  const handleDefaultImage = () => {
    setProfileImage(defaultImage); // Set to default image
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !about) {
      alert("Email and About fields are required.");
      return;
    }

    // Update user context with new data
    setUser({
      ...user,
      profileImage,
      about,
      email,
      phone,
      website,
    });

    alert("Settings saved successfully!");
    navigate('/dashboard');
  };

  return (
    <div className="settings-section">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image</label>
          <input type="file" id="profileImage" onChange={handleImageUpload} />
          {profileImage && <img src={profileImage} alt="Profile Preview" className="image-preview" />}
          {/* Button to set default image */}
          <button type="button" onClick={handleDefaultImage} className="default-image-button">Set Default Image</button>
        </div>

        {/* About Section */}
        <div className="form-group">
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Write something about yourself..."
          />
        </div>

        {/* Email ID */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Website Link */}
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter your website link"
          />
        </div>

        <button type="submit" className="save-button">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
