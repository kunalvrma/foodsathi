import React from 'react';
import './imageCard.css';
import image1 from './media/fooddoantion1.jpeg';
import image2 from './media/fooddonation2.jpg';
import image3 from './media/fooddonatio3.jpg';

const ImageCard = ({ openForm }) => {
    return (
        <section className="image-card-section">
            <h1 className="section-title">Explore Our Initiatives</h1>
            <div className="card-container">
                <div className="image-card" onClick={openForm}>
                    <img src={image1} alt="Initiative 1" className="card-image" />
                    <h3 className="card-title">Join as Volunteer</h3>
                </div>
                <div className="image-card" onClick={openForm}>
                    <img src={image2} alt="Initiative 2" className="card-image" />
                    <h3 className="card-title">Join as Donor</h3>
                </div>
                <div className="image-card" onClick={openForm}>
                    <img src={image3} alt="Initiative 3" className="card-image" />
                    <h3 className="card-title">NGO/ Community</h3>
                </div>
            </div>
        </section>
    );
};

export default ImageCard;
