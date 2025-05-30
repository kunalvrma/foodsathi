import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './hotels.css'; // Your styles here

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('/api/hotels');
                setHotels(response.data);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };
        fetchHotels();
    }, []);

    return (
        <section className="hotel-section">
            <h2 className="section-title">Hotels</h2>
            <div className="hotel-card-container">
                {hotels.map((hotel) => (
                    <div key={hotel.id} className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} 
                        className="hotel-image" />
                        <div className="hotel-details">
                            <h3>{hotel.name}</h3>
                            <p>Location: {hotel.location}</p>
                            <p>Donations: {hotel.donations}</p>
                            <a href={hotel.website} target="_blank" 
                            rel="noopener noreferrer" 
                            className="website-link">Visit Website</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hotels;
