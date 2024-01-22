import React, { useState } from 'react';
import '../App.css';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGY0MWMyOTA5N2YwOWI2NzlhM2NkYTAxODhhNmMxOCIsInN1YiI6IjY1NzliZjUzN2VjZDI4MDEwMWQyY2UxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eYCBFqjQzYpiZlPmvvPD97AGScj8dCILqODkNEZL5xg";
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  };

  const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const handleButtonClick = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
    const data = await fetchData(url, options);
    setMovies(data.results);
  };

  const handleMovieClick = async (movieId) => {
    const similarUrl = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;
    const data = await fetchData(similarUrl, options);
    setMovies(data.results);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search movies"
      />
      <button onClick={handleButtonClick}>Search</button>
      <p>1. Enter the name of any movie in the search input field.</p>
      <p>2. Click the "Search" button.</p>
      <p>3. The application will display a list of movies related to the one you searched for.</p>
      <p>4. If you click on a movie title from the list, the app will provide recommendations of other movies related to the one you clicked.</p>
      {movies.map((movie) => (
        <h2
          key={movie.id}
          className="movieName"
          onClick={() => handleMovieClick(movie.id)}
        >
          {movie.title}
        </h2>
      ))}
    </div>
  );
};

export default Movie;