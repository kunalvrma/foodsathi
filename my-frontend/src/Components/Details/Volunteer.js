import React, { useEffect, useState } from 'react';
import './volunteer.css';

// Capitalize the component name
const Volunteer = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('/api/volunteers') // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setVolunteers(data))
            .catch(error => console.error('Error fetching volunteer data:', error));
    }, []);

    return (
        <section className="volunteer-section">
            <h2>Our Volunteers</h2>
            <div className="volunteer-list">
                {volunteers.map((volunteer) => (
                    <div key={volunteer.id} className="volunteer-card">
                        <img src={volunteer.photo} alt={volunteer.name} className="volunteer-photo" />
                        <div className="volunteer-details">
                            <h3>{volunteer.name}</h3>
                            <p><strong>Place:</strong> {volunteer.place}</p>
                            <p><strong>Contributions:</strong> {volunteer.contributionCount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Volunteer;
