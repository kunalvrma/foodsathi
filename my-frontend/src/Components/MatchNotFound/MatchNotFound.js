import React from 'react';
import './MatchNotFound.css'; // Add this CSS file for styling

const MatchNotFound = () => {
  return (
    <div className="match-not-found-container">
      <div className="match-not-found-icon">😕</div>
      <h2>No Match Found</h2>
      <p>We couldn't find a matching request nearby at this moment.</p>
      <p>Try adjusting your donation details or check back later.</p>
      <button className="retry-button" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
};

export default MatchNotFound;
