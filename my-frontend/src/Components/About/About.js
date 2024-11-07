// src/pages/About.js
import React from 'react';
import './About.css'; // Make sure to create a corresponding CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          {/* Add an image related to your platform */}
          <img src="/path/to/your/image.jpg" alt="FoodSathi Platform" />
        </div>
        <div className="about-text">
          <h2>About FoodSathi</h2>
          <p>
            <strong>FoodSathi</strong> is a sustainable food redistribution platform designed to connect surplus food donors with people in need. Our mission is to reduce food waste and address hunger by facilitating the donation of excess food from event organizers, hotels, and individuals to NGOs, community kitchens, and those who can benefit from it.
          </p>
          <p>
            We are a digital bridge—empowering donors and recipients to easily connect, ensuring that food that might otherwise go to waste can be put to good use and shared with those who need it most.
          </p>
        </div>
      </div>

      <div className="about-content reverse-layout">
        <div className="about-text">
          <h3>Our Vision</h3>
          <p>
            We envision a world where surplus food is never wasted, and hunger is a thing of the past. By fostering a community-driven approach, <strong>FoodSathi</strong> aims to be a catalyst for change, enabling individuals and organizations to contribute to a more sustainable and equitable future.
          </p>
        </div>
        
      </div>

      <div className="about-content">
                <div className="about-text">
          <h3>How We Work</h3>
          <p>
            FoodSathi allows food donors—such as hotels, restaurants, and event organizers—to list surplus food on our platform. On the other side, community organizations and NGOs can access these listings, select available food, and redistribute it to those who need it. This creates a seamless process of food donation that helps reduce waste and hunger simultaneously.
          </p>
        </div>
      </div>

      <div className="about-content reverse-layout">
        <div className="about-text">
          <h3>Why Choose FoodSathi?</h3>
          <ul>
            <li><strong>Sustainability:</strong> Minimize food waste by redirecting excess food to where it's needed.</li>
            <li><strong>Ease of Use:</strong> Donors and recipients can easily connect and manage food donations.</li>
            <li><strong>Community Impact:</strong> Bringing communities together for a meaningful cause.</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/path/to/your/impact-image.jpg" alt="Impact" />
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Our Impact</h3>
          <p>
            Since its launch, FoodSathi has facilitated the donation of thousands of meals and kept tons of food out of landfills. Through our platform, numerous organizations have been able to provide nutritious meals to underserved communities, making a tangible difference in the fight against hunger and food waste.
          </p>
        </div>
        <div className="about-image">
          <img src="/path/to/your/impact-image.jpg" alt="Impact" />
        </div>
      </div>

      <div className="about-content reverse-layout">
        <div className="about-text">
          <h3>Join the Movement</h3>
          <p>
            Whether you're a donor, an NGO, or a volunteer, you can make a difference by being part of <strong>FoodSathi</strong>. Help us create a sustainable future where food is shared and wasted food is no longer a burden.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
