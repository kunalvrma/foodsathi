import React from 'react';
import './JoinForm.css';

const JoinForm = ({ closeForm }) => {
    return (
        <div className="form-modal">
            <div className="form-content">
                <button className="close-button" onClick={closeForm}>&times;</button>
                <h2>Join Us as a Volunteer</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="role">Select Role</label>
                    <select id="role" name="role" required>
                        <option value="foodDonor">Food Donor</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="ngo">NGO/Community</option>
                    </select>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4"></textarea>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default JoinForm;
