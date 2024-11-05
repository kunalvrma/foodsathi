import React, { useState } from 'react'; // Import useState
import './JoinForm.css';
import { useUser } from '../../UserContext';

const JoinForm = ({ closeForm }) => {
    const { user, updateUser } = useUser(); // Get user data and update function from context
    const [tags, setTags] = useState(''); // State for tags

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const newTags = tags.split(',').map(tag => tag.trim()); // Convert tags to an array
        updateUser({ tags: [...new Set([...user.tags, ...newTags])] }); // Update user tags, avoiding duplicates
        alert("Successfully joined with new tags!");
        setTags(''); // Clear input after submission
        closeForm(); // Close the form after submission (optional)
    };

    return (
        <div className="form-modal">
            <div className="form-content">
                <button className="close-button" onClick={closeForm} aria-label="Close Form">&times;</button>
                <h2>Join Us as a Volunteer</h2>
                <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form submission */}
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="role">Select Role</label>
                    <select id="role" name="role" required defaultValue="volunteer">
                        <option value="foodDonor">Food Donor</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="ngo">NGO/Community</option>
                    </select>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4"></textarea>

                    {/* New Tags Input */}
                    <label htmlFor="tags">Tags (comma-separated)</label>
                    <input
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)} // Update tags state on change
                        placeholder="e.g. Volunteer, Donor"
                    />

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default JoinForm;
