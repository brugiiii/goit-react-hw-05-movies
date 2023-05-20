import { useEffect, useState, lazy } from 'react';
import { Api } from '../../Api';

const MoviesList = lazy(() => import('../../components/MoviesList'));

const api = new Api();

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetch('trending').then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
