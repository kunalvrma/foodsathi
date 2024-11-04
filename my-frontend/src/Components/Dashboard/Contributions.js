import React, { useState } from 'react';

const Contributions = () => {
  // Sample contribution data
  const contributions = [
    { name: 'Event 1', date: '2024-01-15', details: 'Description of the contribution' },
    { name: 'Event 2', date: '2024-02-20', details: 'Description of the contribution' },
    { name: 'Event 3', date: '2024-03-10', details: 'Description of the contribution' },
    { name: 'Event 4', date: '2024-04-18', details: 'Description of the contribution' },
    // Add more events as needed
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleContributions = showAll ? contributions : contributions.slice(0, 3);

  return (
    <div className="contribution-list">
      <h3>Contributions</h3>
      <ul>
        {visibleContributions.map((contribution, index) => (
          <li key={index}>
            <p><strong>{contribution.name}</strong> - <em>{contribution.date}</em></p>
            <p>{contribution.details}</p>
          </li>
        ))}
      </ul>
      {contributions.length > 3 && (
        <button onClick={() => setShowAll(!showAll)} className="toggle-button">
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Contributions;
