import React, { useState } from 'react';
import './Settings.css';

const SettingsNgo = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleSave = () => {
    // Save settings API call
    console.log('Settings saved:', { email, phone, profileImage });
  };

  return (
    <div className="settings-section">
      <h2>Account Settings</h2>
      <form className="form-group" onSubmit={handleSave}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label className="image-preview">Profile Image</label>
        <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />

        <button className="save-button"type="submit">Save</button>
      </form>
    </div>
  );
};

export default SettingsNgo;