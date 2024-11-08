import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleSave = () => {
    // Save settings API call
    console.log('Settings saved:', { email, phone, profileImage });
  };

  return (
    <div className="settings">
      <h2>Account Settings</h2>
      <form onSubmit={handleSave}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Profile Image</label>
        <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Settings;