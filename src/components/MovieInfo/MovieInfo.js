import { MovieInfoEl } from './MovieInfo.styled';

const MovieInfo = ({ year, title, overview, genres }) => {
  return (
    <MovieInfoEl>
      <h2>
        {title} ({year})
      </h2>
      <p>User Score: %</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </MovieInfoEl>
  );
};

export default MovieInfo;
