import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import './Error.css';

const Error = ({ message, onRetry }) => {
  return (
    <div className="error-state-card" role="alert">
      <div className="error-icon-wrapper">
        <AlertTriangle size={40} className="error-icon" />
      </div>
      <h2 className="error-title">Unable to Load Users</h2>
      <p className="error-message">{message || 'Something went wrong while connecting to the Random User API.'}</p>
      <p className="error-hint">Please check your network connection and try again.</p>
      <button className="retry-btn" onClick={onRetry}>
        <RotateCcw size={16} /> Retry Fetching Users
      </button>
    </div>
  );
};

export default Error;
