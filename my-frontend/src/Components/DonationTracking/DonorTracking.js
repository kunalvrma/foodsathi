// src/Components/DonorTracking.js
import React, { useState, useEffect } from 'react';
import { MdReplay, MdCheckCircle, MdLocationOn } from "react-icons/md";
import './Tracking.css';

const DonorTracking = () => {
  const [progress, setProgress] = useState(0);
  const [timeLimitExpired, setTimeLimitExpired] = useState(false);

  const steps = [
    { label: "Match Accepted", icon: <MdCheckCircle /> },
    { label: "Waiting for Pickup Volunteer", icon: <MdLocationOn /> },
    { label: "Provided Food", icon: <MdCheckCircle /> },
  ];

  useEffect(() => {
    if (progress === 1) {
      const timer = setTimeout(() => {
        setTimeLimitExpired(true);
      }, 60000); // 1-minute limit
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const advanceProgress = () => {
    setProgress(prev => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const retryMatch = () => {
    setProgress(0);
    setTimeLimitExpired(false);
    console.log("Retrying match...");
  };

  return (
    <div className="donor-tracking">
      <h2>Donor Tracking</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className={`timeline-step ${index <= progress ? 'active' : ''}`}>
            <div className="timeline-icon">{step.icon}</div>
            <div className="timeline-label">{step.label}</div>
          </div>
        ))}
        <div className="sathi-symbol" style={{ top: `${progress * 33}%` }}>🌱</div>
      </div>
      <div className="actions">
        {progress === 1 && timeLimitExpired && (
          <button onClick={retryMatch} className="retry-button">
            <MdReplay /> Retry Match
          </button>
        )}
        <button onClick={advanceProgress} className="advance-button">
          Next Stage
        </button>
      </div>
    </div>
  );
};

export default DonorTracking;
