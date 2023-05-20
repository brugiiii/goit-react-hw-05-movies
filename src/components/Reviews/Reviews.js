import { useEffect } from 'react';
import { Api } from '../../Api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const api = new Api();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.movieId = movieId;
    api.fetch('reviews').then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(({ author, content, id }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <div>We dont have any reviews for this movie.</div>
      )}
    </ul>
  );
};

export default Reviews;
