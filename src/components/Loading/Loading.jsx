import React from 'react';
import { Loader2 } from 'lucide-react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-state-container" role="status" aria-live="polite">
      <div className="spinner-wrapper">
        <Loader2 size={44} className="loading-spinner" />
      </div>
      <h2 className="loading-title">Loading Users...</h2>
      <p className="loading-subtitle">Fetching 100 random user profiles from API</p>

      {/* Skeleton card grid animation */}
      <div className="skeleton-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="skeleton-card">
            <div className="skeleton-avatar"></div>
            <div className="skeleton-line title"></div>
            <div className="skeleton-line text"></div>
            <div className="skeleton-line text short"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
