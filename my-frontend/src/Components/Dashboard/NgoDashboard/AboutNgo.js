import React from 'react';

const AboutNgo = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    maxWidth: '900px',
    margin: '2rem auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '3px solid #27ae60',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1rem',
    borderBottom: '2px solid #27ae60',
    paddingBottom: '0.5rem',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1.2rem',
  };

  const statStyle = {
    backgroundColor: '#eafaf1',
    padding: '1rem',
    borderRadius: '8px',
    marginTop: '1rem',
  };

  // Responsive tweaks (media query simulation)
  const mediaQuery = window.innerWidth < 768;
  if (!mediaQuery) {
    containerStyle.flexDirection = 'row';
    containerStyle.alignItems = 'flex-start';
    containerStyle.gap = '2rem';
    headerStyle.flex = '1';
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img
          src="/images/login.webp" // Replace with your actual image path
          alt="NGO Logo"
          style={imageStyle}
        />
        <h2 style={headingStyle}>About Our NGO</h2>
        <p style={paragraphStyle}>
          We connect restaurants, hotels, and volunteers with communities in need, reducing food
          waste and spreading hope.
        </p>
      </div>

      <div style={{ flex: '2' }}>
        <h3 style={headingStyle}>Our Mission</h3>
        <p style={paragraphStyle}>
          To ensure that no edible food goes to waste and every underprivileged person receives a
          warm, nutritious meal.
        </p>

        <h3 style={headingStyle}>Our Vision</h3>
        <p style={paragraphStyle}>
          A hunger-free society where surplus food is efficiently shared and valued.
        </p>

        <div style={statStyle}>
          <p style={paragraphStyle}><strong>Meals Donated:</strong> 15,000+</p>
          <p style={paragraphStyle}><strong>NGO Partners:</strong> 30+</p>
          <p style={paragraphStyle}><strong>Volunteers Joined:</strong> 500+</p>
        </div>

        <h3 style={headingStyle}>Get Involved</h3>
        <p style={paragraphStyle}>
          Join us as a volunteer, partner restaurant, or donor to make a difference. Visit our
          'Join Us' section to learn how you can help.
        </p>
      </div>
    </div>
  );
};

export default AboutNgo;
