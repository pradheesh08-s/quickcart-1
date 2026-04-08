import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => onSearchChange('')} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
