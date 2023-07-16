import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import TrendingMoviesListItem from './TrendingMoviesList';

const HomePage = () => {
  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [URL]);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <TrendingMoviesListItem
            key={movie.id}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </ul>
    </div>
  );
};

HomePage.propTypes = {
  movies: PropTypes.array,
};

export default HomePage;
