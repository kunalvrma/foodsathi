import React from 'react';
import { useUser } from '../../../UserContext'; // Import the useUser hook

const About = () => {
  const { user } = useUser(); // Get user data from context

  return (
    <div className="about">
      <h3>About Me</h3>
      <p>{user.about || 'No about information provided.'}</p>
    </div>
  );
};

export default About;

