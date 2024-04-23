// Importing necessary dependencies
import React from "react";
import '../App.css'; // Adjust import path

// Functional component definition for GenreFilter
const GenreFilter = ({ genres, onSelectGenre }) => {
  // JSX rendering of GenreFilter component
  return (
    <div className="genre-filter">
      {/* Label for genre selection */}
      <label htmlFor="genre">Filter by Genre:</label>
      {/* Dropdown select for genre */}
      <select id="genre" onChange={(e) => onSelectGenre(e.target.value)}>
        {/* Default option for all genres */}
        <option value="">All Genres</option>
        {/* Mapping through genre options */}
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

// Exporting the GenreFilter component as default
export default GenreFilter;
