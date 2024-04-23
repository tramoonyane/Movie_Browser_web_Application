// Importing necessary dependencies
import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from './MovieService'; // Importing the fetchPopularMovies function from MovieService
import MovieList from './MovieList'; // Importing the MovieList component

// Functional component definition for ParentComponent
const ParentComponent = () => {
  // State hook to manage the list of movies
  const [movies, setMovies] = useState([]);

  // useEffect hook to fetch popular movies when the component mounts
  useEffect(() => {
    // Asynchronous function to fetch popular movies
    const fetchMovies = async () => {
      // Fetching popular movies using the fetchPopularMovies function from MovieService
      const popularMovies = await fetchPopularMovies();

      // Updating the state with the fetched popular movies
      setMovies(popularMovies);
    };

    // Calling the fetchMovies function when the component mounts
    fetchMovies();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  // JSX rendering of ParentComponent
  return (
    <div>
      <h1>Popular Movies</h1>
      {/* Rendering the MovieList component with the fetched movies */}
      <MovieList movies={movies} />
    </div>
  );
};

// Exporting the ParentComponent as default
export default ParentComponent;
