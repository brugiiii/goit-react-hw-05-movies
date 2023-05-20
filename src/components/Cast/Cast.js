import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../Api';

import { Img, CastList } from './Cast.styled';

const api = new Api();

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.movieId = movieId;
    api.fetch('credits').then(setCredits);
  }, [movieId]);

  return (
    <>
      <CastList>
        {credits.length !== 0 ? (
          credits.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <Img
                src={
                  profile_path
                    ? BASE_IMG_URL + profile_path
                    : DEFAULT_POSTER_URL
                }
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))
        ) : (
          <div>We dont have any cast for this movie.</div>
        )}
      </CastList>
    </>
  );
};

export default Cast;
