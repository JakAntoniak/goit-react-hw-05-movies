import { useContext, useEffect, useState } from 'react';
import { MovieIdContext } from './MovieDetails.jsx';
import PropTypes from 'prop-types';

const Reviews = () => {
  const movieId = useContext(MovieIdContext);
  const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [URL]);

  useEffect(() => {
    // console.log('Reviews: ', reviews[0].author);
  });

  return (
    <>
      {reviews.length !== 0
        ? reviews.map(review => {
            return (
              <article key={review.id}>
                <h2>Author: {review.author}</h2>
                {/* <p>{parse(review.content)}</p> */}
                <p>{review.content}</p>
              </article>
            );
          })
        : 'There are no reviews'}
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
