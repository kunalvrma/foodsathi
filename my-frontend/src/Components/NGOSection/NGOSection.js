import React, { useEffect, useState } from 'react';
import './NGOSection.css'; // Add your styles here

const NGOSection = () => {
    // State to hold the list of NGOs
    const [ngos, setNgos] = useState([]);

    // Fetch the list of NGOs from your backend
    useEffect(() => {
        fetch('/api/ngos') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setNgos(data))
            .catch(error => console.error('Error fetching NGO data:', error));
    }, []);

    // Render the NGO cards
    return (
        <section className="ngo-section">
            <h2>Our NGOs</h2>
            <div className="ngo-list">
                {ngos.map((ngo) => (
                    <div key={ngo.id} className="ngo-card">
                        <img src={ngo.image} alt={ngo.name} className="ngo-image" />
                        <div className="ngo-details">
                            <h3>{ngo.name}</h3>
                            <p><strong>Place:</strong> {ngo.place}</p>
                            <p><strong>Type:</strong> {ngo.type}</p>
                            <p><strong>Work:</strong> {ngo.work}</p>
                            <p><strong>Ratings:</strong> {ngo.ratings} ⭐</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NGOSection;
