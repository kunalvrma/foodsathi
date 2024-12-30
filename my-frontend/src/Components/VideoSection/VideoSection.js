import React from 'react';
import './videoSection.css'; // Ensure the CSS file is properly linked

// Correctly importing the video file
import videoSrc from './media/3505936067-preview.mp4';

const VideoSection = () => {
    return (
        <div className="video-container">
            {/* Video element */}
            <video src={videoSrc} autoPlay muted loop className="background-video" />
            <div className="overlay">
                <h2>"Sharing Surplus, Spreading Smiles..."</h2>
                <p>Join hands together with Food Sathi to spread happiness every day.</p>
            </div>
        </div>
    );
};

export default VideoSection;
