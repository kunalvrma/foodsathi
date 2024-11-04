import React from 'react';
import CountUp from 'react-countup';
import './JourneyCount.css';

const JourneyCount = () => {
  return (
    <div className="journey-count">
      <h2 className="section-heading">Our Journey Count</h2>
      <div className="count-container">
        <div className="count-item">
          <CountUp start={0} end={168000000} duration={3} separator="," />
          <span className="count-label">Meals Provided</span>
        </div>
        <div className="count-item">
          <CountUp start={0} end={201000000} duration={3} separator="," />
          <span className="count-label">LBS of Food Kept from Landfill</span>
        </div>
        <div className="count-item">
          <CountUp start={0} end={541641} duration={3} separator="," />
          <span className="count-label">Tons of CO2eq Avoided</span>
        </div>
        <div className="count-item">
          <CountUp start={0} end={20000} duration={3} separator="," />
          <span className="count-label">Volunteer Food Rescuers</span>
        </div>
        <div className="count-item">
          <CountUp start={0} end={15000} duration={3} separator="," />
          <span className="count-label">NGO/Communities Joined</span>
        </div>
      </div>
    </div>
  );
};

export default JourneyCount;
