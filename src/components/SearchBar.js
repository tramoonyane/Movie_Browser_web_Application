// Importing necessary dependencies and styles
import React from "react";
import '../App.css'; // Adjust import path

// SearchBar component responsible for rendering a search input
// Props:
// - onSearch: Function to handle search input changes
const SearchBar = ({ onSearch }) => {
    return (
        <div className="search-bar">
            <input
             type="text" name="search_movie"
             placeholder="Search for a movie..."
             onChange={(e) => onSearch(e.target.value)}
          />
        </div>
    );
};

export default SearchBar;