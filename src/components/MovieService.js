// Importing necessary dependencies
import axios from 'axios';

// Retrieving API key from environment variables
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

// Function to fetch popular movies from the API asynchronously
const fetchPopularMovies = async () => {
  try {
    // Making a GET request to the TMDB API to fetch popular movies
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

    // Returning the list of popular movies from the response data
    return response.data.results;
  } catch (error) {
    // Handling errors if the request fails
    console.error('Error fetching popular movies:', error);

    // Returning an empty array if there's an error
    return [];
  }
};

// Exporting the fetchPopularMovies function as default
export default fetchPopularMovies;