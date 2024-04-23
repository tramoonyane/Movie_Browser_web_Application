import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import GenreFilter from './components/GenreFilter'; // Add this line
import Movie from './components/Movie'; // Add this line

function App() {
  const [movies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]); // Add this line

  // Function to handle movie selection
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  // Function to add/remove movie from watchlist
  const toggleWatchlist = (movieId) => {
    const index = watchlist.findIndex((id) => id === movieId);
    if (index === -1) {
      setWatchlist([...watchlist, movieId]);
    } else {
      setWatchlist(watchlist.filter((id) => id !== movieId));
    }
  };

  // Function to fetch movies(to be implemented later)
  const fetchMovies = (query) => {
    // Logic to fetch movies
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Movie Browser</h1>
      {/* SearchBar component */}
      <SearchBar onSearch={fetchMovies} />
      {/* GenreFilter component */}
      <GenreFilter genres={[]} onSelectGenre={() => {}} /> {/* Add genres and onSelectGenre props */}
      {/* MovieList component */}
      <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      {/* MovieDetails component */}
      <MovieDetails movie={selectedMovie} />
      {/* Movie component */}
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onAddToWatchlist={toggleWatchlist} />
      ))}
    </div>
  );
}

export default App;
