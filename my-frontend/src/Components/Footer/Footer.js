// src/components/Footer.js
import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo and Brief Description */}
        <div className="footer-logo">
          <h2>FoodSathi</h2>
          <p>
            Connecting food donors and NGOs to reduce food waste and help communities. Together, we can make a difference.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/learn">Learn</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/donate">Donate Food</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@foodsathi.org</p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Address: 1234 FoodSathi St., Sustainability City</p>
        </div>
        
        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FoodSathi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

