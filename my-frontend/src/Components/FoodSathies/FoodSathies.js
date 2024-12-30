import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FoodSathies.css';

// Import images
import ngoImage0 from './media/ngo0.jpg';
import ngoImage1 from './media/ngo1.jpg';

const FoodSathies = () => {
    const foodSathiData = [
        {
            id: 1,
            title: 'NGOs',
            description: 'Helping to distribute surplus food to those in need.',
            link: '/ngo',
            image: ngoImage0,
        },
        {
            id: 2,
            title: 'Hotels',
            description: 'Partnering to prevent food waste from events.',
            link: '/Details/hotels',
            image: ngoImage1,
        },
    ];

    const navigate = useNavigate();

    // Function to handle heading click
    const handleHeadingClick = () => {
        navigate('/food-sathies'); // Update to your desired route for all Food Sathies pages
    };

    return (
        <section className="food-sathi-container">
            <h2 className="foodSathi-heading" onClick={handleHeadingClick}>
                Food Sathies
            </h2>
            <div className="food-sathi-cards">
                {foodSathiData.map((sathi) => (
                    <Link to={sathi.link} key={sathi.id} className="food-sathi-card">
                        <div className="food-sathi-card-content">
                            <img
                                src={sathi.image}
                                alt={sathi.title}
                                className="food-sathi-card-image"
                            />
                            <div className="food-sathi-overlay">
                                <h3 className="food-sathi-title">{sathi.title}</h3>
                                <p className="food-sathi-description">{sathi.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FoodSathies;
