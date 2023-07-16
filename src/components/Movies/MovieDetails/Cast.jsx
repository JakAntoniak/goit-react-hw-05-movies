import { useContext, useEffect, useState } from 'react';
import { MovieIdContext } from './MovieDetails';
import PropTypes from 'prop-types';
import css from './Style.module.css';

const Cast = () => {
  const movieId = useContext(MovieIdContext);
  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setCast(data.cast);
        console.log(data.cast);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [URL]);

  useEffect(() => {
    console.log('Reviews: ', cast);
  });

  return (
    <>
      {cast.map(actor => {
        const profileUrl = `https://image.tmdb.org/t/p/w185${actor.profile_path}`;
        return (
          <article key={actor.id} className={css.actor}>
            <img src={profileUrl} alt={`${actor.name} profile`} />
            <div className={css.details}>
              <p>Actor: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.array,
};

export default Cast;
