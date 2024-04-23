// Importing necessary dependencies and styles
import React from "react";
import '../App.css'; // Adjust import path

// MovieList component responsible for rendering a list of movies
// Props:
// - movies: Array of movie objects to be displayed
// - onSelectMovie: Function to handle when a movie is selected
const MovieList = ({ movies, onSelectMovie }) => {
    return (
        // Container for the list of movies
        <div className="movie-list">
            {/* Mapping through each movie and rendering its details */}
            {movies.map((movie) => (
                // Movie item container with click event listener to handle selection
                <div key={movie.id} onClick={() => onSelectMovie(movie)}>
                    {/* Movie title */}
                    <h3>{movie.title}</h3>
                    {/* Movie release date */}
                    <p>{movie.releaseDate}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
