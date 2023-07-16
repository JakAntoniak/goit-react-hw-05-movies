import { createContext, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Style.module.css';

export const MovieIdContext = createContext(null);

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [URL]);

  return (
    <MovieIdContext.Provider value={movieId}>
      <main className={css.main}>
        {movie.poster_path ? (
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt="Movie poster"
          ></img>
        ) : (
          <p>Image not available</p>
        )}
        <div className={css.info}>
          <h1>{movie.title}</h1>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres?.map(genre => (
              <span key={genre.name}>{genre.name} </span>
            ))}
          </p>
        </div>
        <div className={css.additionalInfo}>
          <p>additional information</p>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
        <div className={css.outlet}>
          <Outlet />
        </div>
      </main>
    </MovieIdContext.Provider>
  );
};

MovieIdContext.propTypes = {
  movie: PropTypes.array,
};

export default MovieDetails;
