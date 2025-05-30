import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingDialog from '../LoadingDialog/LoadingDialog';
import MatchFoundDialog from '../MatchFoundDialog/MatchFoundDialogR';
import MatchNotFound from '../MatchNotFound/MatchNotFound';
import './DonationRequestForm.css';

function DonationRequestForm() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMatchFound, setIsMatchFound] = useState(false);
  const [matchNotFound, setMatchNotFound] = useState(false);
  const [matchData, setMatchData] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    place: '',
    purpose: '',
    phone: '',
    email: '',
    amount: '',
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported by your browser.');
      return;
    }

    const updateLocation = (pos) =>
      setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });

    const watchId = navigator.geolocation.watchPosition(updateLocation, (err) =>
      setError(err.message)
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMatchNotFound(false);
    setIsMatchFound(false);

    try {
      // Submit request
      await axios.post('/api/notificationR', {
        ...formData,
        location,
      });

      // Get existing donors
      const { data: donors } = await axios.get('/api/notificationR');

      // Match by place & amount only
      const match = donors.find(
        (donor) =>
          donor.place.toLowerCase() === formData.place.toLowerCase() &&
          donor.amount >= Number(formData.amount)
      );

      if (match) {
        setMatchData(match);
        setIsMatchFound(true);
      } else {
        setMatchNotFound(true);
      }

      // Reset form
      setFormData({
        name: '',
        place: '',
        purpose: '',
        phone: '',
        email: '',
        amount: '',
      });
    } catch (err) {
      //setError('Something went wrong. Try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
      setIsMatchFound(true);
    }
  };

  return (
    <div className="donation-request-section">
      {isLoading && <LoadingDialog />}

      {isMatchFound && (
        <MatchFoundDialog
          donorName={matchData?.name}
          receiverName={formData.name}
          onClose={() => setIsMatchFound(false)}
          onTrack={() => alert('Tracking started!')}
        />
      )}

      {matchNotFound && (
        <div className="overlay-container" onClick={() => setMatchNotFound(false)}>
          <MatchNotFound />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h2>Request Food Donation</h2>
        {error && <p className="error">{error}</p>}

        <label>Name:
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>Place Where Donation is Needed:
          <input name="place" value={formData.place} onChange={handleChange} required />
        </label>
        <label>Purpose:
          <input name="purpose" value={formData.purpose} onChange={handleChange} required />
        </label>
        <label>Phone Number:
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>Amount of Food Needed:
          <input name="amount" type="number" value={formData.amount} onChange={handleChange} required />
        </label>

        {location.lat && location.lng ? (
          <>
            <p>Your Location: Lat: {location.lat}, Lng: {location.lng}</p>
            <div className="map-preview-section">
              <a
                href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View on Google Maps
              </a>
              <iframe
                width="100%"
                height="300"
                frameBorder="0"
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                allowFullScreen
                title="Requester Location"
              ></iframe>
            </div>
          </>
        ) : (
          <p>Fetching location...</p>
        )}

        <button type="submit">Find Match</button>
      </form>
    </div>
  );
}

export default DonationRequestForm;
