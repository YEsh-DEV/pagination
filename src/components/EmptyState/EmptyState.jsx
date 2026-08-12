import React from 'react';
import { UserX, RotateCcw } from 'lucide-react';
import './EmptyState.css';

const EmptyState = ({ searchQuery, onReset }) => {
  return (
    <div className="empty-state-card" role="status">
      <div className="empty-icon-wrapper">
        <UserX size={44} className="empty-icon" />
      </div>
      <h3 className="empty-title">No users found</h3>
      <p className="empty-description">
        We couldn't find any users matching <strong className="query-highlight">"{searchQuery}"</strong>. 
        Try checking for typos or searching by country or email.
      </p>
      <button className="reset-btn" onClick={onReset}>
        <RotateCcw size={16} /> Reset Search Query
      </button>
    </div>
  );
};

export default EmptyState;
