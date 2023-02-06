import PropTypes from "prop-types";

function MovieDetail({
  coverImg,
  title,
  year,
  runtime,
  content,
  rating,
  genres,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <p>
        {`${year}년`}
        {` ${runtime}분`}
      </p>
      <p>{content}</p>
      <h3>{rating}</h3>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
