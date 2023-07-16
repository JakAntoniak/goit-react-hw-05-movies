import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const API_KEY = '7bfaca5914dfe808eee9ce7ecac1ff40';
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>
            <Link to={`/movies/${result.id}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  searchQuery: PropTypes.string,
  searchResults: PropTypes.array,
};

export default Movies;
