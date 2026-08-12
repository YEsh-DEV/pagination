import React from 'react';
import { Search, X } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, matchCount }) => {
  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-input"
          placeholder="Search by first name, last name, full name, email, or country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search users by name, email, or country"
        />
        {searchQuery && (
          <button
            className="search-clear-btn"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search query"
            title="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
      {searchQuery && (
        <span className="search-match-badge">
          {matchCount} {matchCount === 1 ? 'user' : 'users'} matched
        </span>
      )}
    </div>
  );
};

export default SearchBar;
