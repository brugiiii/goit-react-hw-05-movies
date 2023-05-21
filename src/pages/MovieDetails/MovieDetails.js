import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import AdditionalInfo from '../../components/AdditionalInfo';
import MovieInfo from '../../components/MovieInfo';
import { Api } from '../../Api';

import {
  MovieDetailsEl,
  Img,
  StyledLink,
  MainInfo,
} from './MovieDetails.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POSTER_URL =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';

const api = new Api();

const MovieDetails = () => {
  const [movie, setMovie] = useState({
    poster_path: '',
    title: '',
    release_date: '',
    overview: '',
    vote_average: 0,
    genres: [],
  });
  const [showLoader, setShowLoader] = useState(true);

  const { movieId } = useParams();

  const { current } = useRef(useLocation());
  const backLinkHref = current.state?.from ?? `/movies`;

  useEffect(() => {
    setShowLoader(true);

    api.movieId = movieId;
    api.fetch('details').then(res => setMovie(res)).finally(() => setShowLoader(false));
  }, [movieId]);

  const { poster_path, title, release_date, overview, genres, vote_average } =
    movie;

  const imgUrl = poster_path ? BASE_IMG_URL + poster_path : DEFAULT_POSTER_URL;
  const year = release_date.slice(0, 4);
  const parsedGenres = genres.map(genre => genre.name).join(', ');
  const score = String(vote_average).slice(0, 3).replace('.', '');

  return (
    <>
      <MovieDetailsEl>
        <StyledLink to={backLinkHref}>Go back</StyledLink>

        {showLoader ? (
          <ThreeDots
            color="#e75480"
            wrapperStyle={{ justifyContent: 'start' }}
          />
        ) : (
          <>
            <MainInfo>
              <Img src={imgUrl} alt={title} />

              <MovieInfo
                year={year}
                title={title}
                overview={overview}
                genres={parsedGenres}
                score={score}
              />
            </MainInfo>

            <AdditionalInfo />

            <Suspense
              fallback={
                <ThreeDots
                  color="#e75480"
                  wrapperStyle={{ justifyContent: 'start' }}
                />
              }
            >
              <Outlet />
            </Suspense>
          </>
        )}
      </MovieDetailsEl>
    </>
  );
};

export default MovieDetails;
