import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({
  bgImg,
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
      <img className={styles.bg} src={bgImg} alt={title}></img>
      <div className={styles.show}>
        <img className={styles.img} src={coverImg} alt={title} />

        <div className={styles.textbox}>
          <h1 className={styles.title}>{title}</h1>
          <p>
            {`${year}년`}
            {` ${runtime}분`}
          </p>
          <div className={styles.content}>
            <p>{content}</p>
          </div>

          <h3>{rating}</h3>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <div className={styles.homBtn}>
          <Link to={"/"}>Home</Link>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  bgImg: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
