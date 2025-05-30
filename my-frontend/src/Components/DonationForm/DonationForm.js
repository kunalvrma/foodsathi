import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DonationForm.css';
import LoadingDialog from '../LoadingDialog/LoadingDialog';
import MatchFoundDialog from '../MatchFoundDialog/MatchFoundDialog';
import MatchNotFound from '../MatchNotFound/MatchNotFound';

function DonationForm() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    phone: '',
    email: '',
    amount: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [matchNotFound, setMatchNotFound] = useState(false);
  const [isMatchFound, setIsMatchFound] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    const successCallback = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const errorCallback = (error) => {
      const errorMessages = {
        1: 'User denied the request for Geolocation.',
        2: 'Location information is unavailable.',
        3: 'The request to get user location timed out.',
        0: 'An unknown error occurred.',
      };
      setError(errorMessages[error.code] || 'An unexpected error occurred.');
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    // Simulate delay
    await new Promise((res) => setTimeout(res, 3000));

    await axios.post('/api/notification', {
      ...formData,
      type: 'ngo',
      location,
    });

    const matchFound = false; // Replace with real logic
    if (matchFound) {
      setIsMatchFound(true);
    } else {
      setMatchNotFound(true);
    }

    console.log("NGO Submission Data:", formData);
    console.log("NGO Location:", location);

    setFormData({
      name: '',
      place: '',
      phone: '',
      email: '',
      amount: '',
      description: '',
    });
  } catch (err) {
    console.error("Submission error:", err);
    setError("Failed to submit. Please try again.");
  } finally {
    setIsLoading(false);
  }
};



  const handleTrack = () => {
    alert("Tracking started!");
  };

  const closeModal = () => {
    setIsMatchFound(false);
    setMatchNotFound(false);
  };

  return (
    <div className="donation-section">
      {isLoading && <LoadingDialog />}
      {isMatchFound && (
        <MatchFoundDialog
          donorName={formData.name}
          receiverName="NGO"
          onClose={closeModal}
          onTrack={handleTrack}
        />
      )}
      {matchNotFound && (
        <div className="overlay">
          <MatchNotFound onClose={closeModal} />
        </div>
      )}

      <form className="donation-form" onSubmit={handleSubmit}>
        <h2>Donation Form</h2>
        {error && <p className="error">{error}</p>}

        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="place" value={formData.place} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Quantity donated:
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </label>
        <label>
          Description of Donation with expiry:
          <textarea name="description" rows="4" value={formData.description} onChange={handleChange} required />
        </label>

        {location.lat && location.lng ? (
          <p>Your current location: Latitude: {location.lat}, Longitude: {location.lng}</p>
        ) : (
          <p>Fetching location...</p>
        )}

        <button type="submit">Request Match</button>
      </form>
    </div>
  );
}

export default DonationForm;
