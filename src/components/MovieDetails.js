// Importing necessary dependencies and styles
import React from "react";
import '../App.css'; // Adjust import path

// MovieDetails component responsible for rendering details of a selected movie
// Props:
// - movie: Object representing the movie whose details are to be displayed
const MovieDetails = ({ movie }) => {
    return (
        // Container for displaying movie details
        <div className="movie-details">
            {/* Checking if a movie object is provided */}
            {movie ? (
                // If a movie object exists, display its details
                <div>
                    {/* Movie title */}
                    <h2>{movie.title}</h2>
                    {/* Movie release date */}
                    <p>Release Date: {movie.releaseDate}</p>
                    {/* Movie overview */}
                    <p>Overview: {movie.overview}</p>
                </div>
            ) : (
                // If no movie object is provided, display a message
                <div>Select a movie to see details</div>
            )}
        </div>
    );
};

export default MovieDetails;