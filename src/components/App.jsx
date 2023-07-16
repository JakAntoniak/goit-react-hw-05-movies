import { NoMatch } from './NoMatch.jsx';
import Header from './Header.jsx';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./Movies/HomePage/Home.jsx'));
const Movies = lazy(() => import('./Movies/MoviesApp/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('./Movies/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('./Movies/MovieDetails/Cast.jsx'));
const Reviews = lazy(() => import('./Movies/MovieDetails/Reviews.jsx'));

const renderPaths = (paths, Element) =>
  paths.map(path => <Route key={path} path={path} element={Element} />);

export const App = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {renderPaths(['/', '/goit-react-hw-05-movies'], <HomePage />)}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </div>
  );
};
