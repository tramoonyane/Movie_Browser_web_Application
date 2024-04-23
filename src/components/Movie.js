import React from "react";
import '../App.css'; // Adjust import path

const Movie = ({ movie, onAddToWatchlist }) => {
  return (
    <div className="movie">
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      <button onClick={() => onAddToWatchlist(movie.id)}>Add to Watchlist</button>
    </div>
  );
};

export default Movie;