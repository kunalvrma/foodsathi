
// src/Components/DonationRequestForm/MatchFoundDialog.js
import React from 'react';
import './MatchFoundDialog.css'; // You can style this as needed
import { MdHandshake} from "react-icons/md";

function MatchFoundDialog({ donorName, receiverName, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Match Found! 😊</h2>
        
        <p>Food Donor: {donorName}</p>
        <MdHandshake className="sathiLogo" />
        <p>Food Receiver: {receiverName}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default MatchFoundDialog;
