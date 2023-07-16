import PropTypes from 'prop-types';
const { Link } = require('react-router-dom');

const TrendingMoviesListItem = ({ title, id }) => {
  const link = '/movies/' + id;
  return (
    <li>
      <Link to={link}>{title}</Link>
    </li>
  );
};

TrendingMoviesListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};

export default TrendingMoviesListItem;
