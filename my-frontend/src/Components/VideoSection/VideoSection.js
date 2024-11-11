import React from 'react';
import './videoSection.css'; // Ensure the CSS file is properly linked

const VideoSection = () => {
    const videoSrc = 'https://sjc1.vultrobjects.com/kunalverma336915/vedio%20section/home_vedio.mp4'; // External video URL

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
