import React, { useEffect, useState } from 'react';
import './DonationRequestForm.css';
import LoadingDialog from '../LoadingDialog/LoadingDialog';
import MatchFoundDialog from '../MatchFoundDialog/MatchFoundDialog';

function DonationRequestForm() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    purpose: '',
    phone: '',
    email: '',
    amount: '',
  });

  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [isMatchFound, setIsMatchFound] = useState(false); // State for match found dialog
  const [donorName] = useState(formData.name); // Assume donor name is from formData
  const receiverName=""; // Replace with actual receiver name

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
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setError('User denied the request for Geolocation.');
          break;
        case error.POSITION_UNAVAILABLE:
          setError('Location information is unavailable.');
          break;
        case error.TIMEOUT:
          setError('The request to get user location timed out.');
          break;
        case error.UNKNOWN_ERROR:
          setError('An unknown error occurred.');
          break;
        default:
          setError('An unexpected error occurred while fetching the location.');
          break;
      }
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when the button is clicked
    

    // Simulate an API call or some processing
    setTimeout(() => {
      setIsLoading(false); // Reset loading after the processing is done
      setIsMatchFound(true);
      console.log("Form submitted:", formData);
      console.log("Current Location:", location);
      // Handle the form submission or further processing here
    }, 3000); // Simulating a 3-second loading time
  };
  const closeModal = () => {
    setIsMatchFound(false); // Hide the dialog
  };

  return (
    <div className="donation-request-section">
      {isLoading && <LoadingDialog />} {/* Show loading dialog when isLoading is true */}
      {isMatchFound && (
        <MatchFoundDialog 
          donorName={donorName} 
          receiverName={receiverName} 
          onClose={closeModal} 
        />
      )}
      <form className="donation-request-form" onSubmit={handleSubmit}>
        <h2>Request Food Donation</h2>
        {error && <p className="error">{error}</p>}

        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Place Where Donation is Needed:
          <input type="text" name="place" value={formData.place} onChange={handleChange} required />
        </label>
        <label>
          Purpose:
          <input type="text" name="purpose" value={formData.purpose} onChange={handleChange} required />
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
          Amount of Food Needed:
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </label>

        {location.lat && location.lng ? (
          <p>Your current location: Latitude: {location.lat}, Longitude: {location.lng}</p>
        ) : (
          <p>Fetching location...</p>
        )}

        <button type="submit">Find Match</button>
      </form>
    </div>
  );
}

export default DonationRequestForm;
