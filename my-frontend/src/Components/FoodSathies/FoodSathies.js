import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FoodSathies.css';

const FoodSathies = () => {
    const foodSathiData = [
        {
            id: 1,
            title: 'NGOs',
            description: 'Helping to distribute surplus food to those in need.',
            link: '/ngo',
            image: require('./media/ngo1.jpg')
        },
        {
            id: 2,
            title: 'Hotels',
            description: 'Partnering to prevent food waste from events.',
            link: '/Details/hotels',
            image: require('./media/ngo0.jpg')
        },
        {
            id: 3,
            title: 'Volunteers',
            description: 'Joining hands to assist in sustainable food distribution.',
            link: '/Details/volunteers',
            image: require('./media/ngo5.jpg')
        }
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
                {foodSathiData.map((card) => (
                    <Link key={card.id} to={card.link} className="food-sathi-card">
                        <div className="card-content">
                            <img src={card.image} alt={card.title} className="card-image" />
                            <div className="card-overlay">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FoodSathies;
