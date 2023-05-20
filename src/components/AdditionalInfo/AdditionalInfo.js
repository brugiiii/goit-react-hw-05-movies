import { Link } from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <>
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />
    </>
  );
};

export default AdditionalInfo;
