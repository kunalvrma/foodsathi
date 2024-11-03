import React from 'react';
import './videoSection.css'; // Make sure to import the CSS file
import videoSrc from './media/3505936067-preview.mp4'; // Import the video

const VideoSection = () => {
    return (
        <div className="video-container">
            <video src={videoSrc} autoPlay muted loop className="background-video" /> {/* Use the imported video variable */}
            <div className="overlay">
                <h2>"Sharing Surplus, Spreding Smiles..."</h2>
                <p>Join hands together with Food Sathi  to spread happiness everyday.</p>
                <a href="/form" className="video-button">Join as Volunteer</a>
            </div>
        </div>
    );
};

export default VideoSection;
