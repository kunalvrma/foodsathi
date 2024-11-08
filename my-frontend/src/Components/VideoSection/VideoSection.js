import React from 'react';
import videoSrc from './media/home_vedio.mp4'; // Import the video
import './videoSection.css'; // Make sure to import the CSS file

const VideoSection = () => {
    return (
        <div className="video-container">
            <video src={videoSrc} autoPlay muted loop className="background-video" /> {/* Use the imported video variable */}
            <div className="overlay">
                <h2>"Sharing Surplus, Spreding Smiles..."</h2>
                <p>Join hands together with Food Sathi  to spread happiness everyday.</p>
            </div>
        </div>
    );
};

export default VideoSection;
