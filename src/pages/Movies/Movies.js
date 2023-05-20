import { useState, useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Input, Form, Button } from './Movies.styled';

import { Api } from '../../Api';

const MoviesList = lazy(() => import('../../components/MoviesList'));

const api = new Api();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => localStorage.getItem('query') ?? '');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }

    api.query = searchParams.get('query');
    api.fetch('byQuery').then(data => {
      if (data.length === 0) {
        return NotificationManager.error(
          'Enter valid query',
          'Error query',
          3000
        );
      }
      setMovies(data);
    });
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      return NotificationManager.error('Enter something', 'Error query', 3000);
    }

    setSearchParams({ query });
    localStorage.setItem('query', query);
  };

  const handleChange = e => setQuery(e.target.value);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={query} />
        <Button type="submit">Search</Button>
      </Form>

      {movies.length !== 0 && <MoviesList movies={movies} />}

      <NotificationContainer />
    </>
  );
};

export default Movies;
