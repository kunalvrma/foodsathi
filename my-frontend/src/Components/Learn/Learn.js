import React, { useState } from 'react';
import './Learn.css';

const Learn = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it's already open
    } else {
      setActiveIndex(index); // Open the selected answer
    }
  };

  return (
    <div className="learn-container">
      <h1 className="learn-heading">Learn More About FoodSathi</h1>
      
      {/* Section 1 */}
      <section className="learn-section">
        <h2>What is FoodSathi?</h2>
        <p>
          FoodSathi is a platform dedicated to reducing food waste by connecting event organizers,
          restaurants, and hotels with NGOs and volunteers to redistribute surplus food to communities
          in need. By building a network of donors and receivers, FoodSathi plays a crucial role in
          fighting food insecurity and promoting sustainable food management.
        </p>
      </section>

      {/* Section 2 */}
      <section className="learn-section">
        <h2>Why Food Redistribution Matters</h2>
        <ul>
          <li><strong>Food Waste Crisis:</strong> Nearly a third of all food produced worldwide is wasted, while millions of people suffer from food insecurity.</li>
          <li><strong>Environmental Impact:</strong> Food waste contributes to greenhouse gas emissions. Reducing waste helps combat climate change.</li>
          <li><strong>Social Responsibility:</strong> Food redistribution bridges the gap between surplus and scarcity, ensuring no food goes to waste and fewer people go hungry.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="learn-section">
        <h2>How FoodSathi Works</h2>
        <ol>
          <li><strong>Step 1: Food Donation</strong> - Donors list available surplus food on FoodSathi.</li>
          <li><strong>Step 2: Matchmaking</strong> - FoodSathi’s system matches donations with registered NGOs and communities in need.</li>
          <li><strong>Step 3: Volunteer Support</strong> - Volunteers help transport food to receiving NGOs or community centers.</li>
          <li><strong>Step 4: Tracking & Impact</strong> - Each donation’s progress is tracked for transparency and efficiency.</li>
        </ol>
      </section>

      {/* Section 4 */}
      <section className="learn-section">
        <h2>The Impact of Your Support</h2>
        <ul>
          <li><strong>Meals Provided:</strong> Every donation contributes to providing meals for those in need.</li>
          <li><strong>Waste Reduced:</strong> By redistributing food, you help divert waste from landfills, reducing environmental impact.</li>
          <li><strong>Communities Strengthened:</strong> Your involvement helps build stronger, healthier communities.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="learn-section">
        <h2>How You Can Get Involved</h2>
        <ul>
          <li><strong>Become a Donor:</strong> Register to donate surplus food from events, restaurants, or personal gatherings.</li>
          <li><strong>Join as a Volunteer:</strong> Assist with the transport and distribution of food, directly impacting your community.</li>
          <li><strong>Register Your NGO/Community:</strong> NGOs and community centers can register to receive donations, expanding their reach and support.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="learn-section">
        <h2>Food Safety Guidelines for Donors</h2>
        <ul>
          <li><strong>Quality Assurance:</strong> Only donate safe, high-quality, and freshly prepared food.</li>
          <li><strong>Proper Storage:</strong> Store food in clean containers at appropriate temperatures.</li>
          <li><strong>Labeling:</strong> Include labels for allergies, ingredients, and any preparation or expiration dates.</li>
          <li><strong>Timely Distribution:</strong> Arrange for quick distribution to maintain freshness.</li>
        </ul>
      </section>

      {/* FAQs Section */}
      <section className="learn-section">
        <h2>FAQs</h2>
        <div className="faq-item">
          <p className="faq-question" onClick={() => toggleAnswer(0)}>
            <strong>Who can donate?</strong>
          </p>
          {activeIndex === 0 && (
            <p className="faq-answer">
              Any business, organization, or individual with surplus food can become a donor.
            </p>
          )}
        </div>

        <hr />

        <div className="faq-item">
          <p className="faq-question" onClick={() => toggleAnswer(1)}>
            <strong>Is volunteering safe?</strong>
          </p>
          {activeIndex === 1 && (
            <p className="faq-answer">
              Yes! Volunteers receive guidance on safe handling and distribution practices.
            </p>
          )}
        </div>

        <hr />

        <div className="faq-item">
          <p className="faq-question" onClick={() => toggleAnswer(2)}>
            <strong>How do I register?</strong>
          </p>
          {activeIndex === 2 && (
            <p className="faq-answer">
              Simply click the "Register" button at the top of the page to get started as a donor, volunteer, or NGO.
            </p>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="learn-section call-to-action">
        <h2>Join Us in Making a Difference!</h2>
        <p>
          If you're passionate about sustainability, community impact, and reducing food waste, FoodSathi
          is the place to start. Let’s work together to create a world where no food is wasted and
          everyone is fed.
        </p>
      </section>
    </div>
  );
};

export default Learn;
