import React, { useState, useEffect } from 'react';
import { MdReplay, MdCheckCircle, MdLocationOn } from "react-icons/md";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
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
      }, 60000);
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

  const donationHistory = [
    { date: "2025-05-25", time: "14:00", ngo: "HelpingHands", restaurant: "SpiceHub", status: "Completed" },
    { date: "2025-05-20", time: "13:00", ngo: "FoodRelief", restaurant: "TasteBuds", status: "Completed" },
    { date: "2025-05-15", time: "12:00", ngo: "GreenServe", restaurant: "FlavourSpot", status: "Pending" },
  ];

  const analyticsData = {
    labels: ["18-25", "26-35", "36-45", "46+"],
    datasets: [
      {
        label: "Age Groups Helped",
        data: [50, 40, 30, 20],
        backgroundColor: "#34d399",
      },
      {
        label: "Donations over Time",
        data: [10, 15, 20, 30],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  return (
    <div className="donor-tracking-container">
      <div className="tracking-content">
        <h1 className="text-3xl font-bold mb-2 text-center text-[#003366]">Track Donation</h1>

        {/* Current Status */}
        <div className="section-box">
          <h2>Current Donation Status</h2>
          {progress >= 0 ? (
            <p>
              Matched with <strong>HelpingHands NGO</strong> from <strong>SpiceHub</strong> Restaurant on <strong>2025-05-25</strong> at <strong>14:00</strong>
            </p>
          ) : (
            <p>No current active donations.</p>
          )}
        </div>

        {/* Timeline */}
        <div className="section-box">
          <h2>Live Tracking</h2>
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

        {/* Donation History */}
        <div className="section-box">
          <h2>Donation History</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>NGO</th>
                <th>Restaurant</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {donationHistory.map((donation, index) => (
                <tr key={index}>
                  <td>{donation.date}</td>
                  <td>{donation.time}</td>
                  <td>{donation.ngo}</td>
                  <td>{donation.restaurant}</td>
                  <td className={donation.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}>
                    {donation.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Analytics */}
        <div className="section-box">
          <h2>Analytics</h2>
          <div className="analytics-chart">
            <Bar
              data={analyticsData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: 'top' },
                  title: { display: true, text: 'Impact Overview' }
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorTracking;
