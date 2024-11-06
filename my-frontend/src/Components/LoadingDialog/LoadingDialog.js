// src/Components/LoadingDialog.js
import React from 'react';
import { MdHandshake} from "react-icons/md";
import './LoadingDialog.css'

import './LoadingDialog.css'; // Create a CSS file for styling

const LoadingDialog = () => {
  return (
    <div className="loading-dialog">
      <MdHandshake className="loading-logo" />
      <p>Searching for Food Sathi, please wait...</p>
    </div>
  );
};

export default LoadingDialog;
