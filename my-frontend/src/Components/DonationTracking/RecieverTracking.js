// src/Components/ReceiverTracking.js
import React, { useState } from 'react';
import { MdPhone, MdCheckCircle, MdLocationOn } from "react-icons/md";
import './Tracking.css';

const RecieverTracking = () => {
  const [progress, setProgress] = useState(0);

  const steps = [
    { label: "Match Found", icon: <MdCheckCircle /> },
    { label: "Donation on Route", icon: <MdLocationOn /> },
    { label: "Received Donation", icon: <MdCheckCircle /> },
  ];

  const advanceProgress = () => {
    setProgress(prev => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="receiver-tracking">
      <h2>Receiver Tracking</h2>
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
        {progress === 1 && (
          <p>Destination: XYZ Community Center</p>
        )}
        {progress === 2 ? (
          <button className="call-button">
            <MdPhone /> Call Donor
          </button>
        ) : (
          <button onClick={advanceProgress} className="advance-button">
            Update Status
          </button>
        )}
      </div>
    </div>
  );
};

export default RecieverTracking;
