import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";
import Loading from "../components/Loading";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.movies}>
          <MovieDetail
            key={details.id}
            bgImg={details.background_image_original}
            coverImg={details.medium_cover_image}
            title={details.title}
            year={details.year}
            runtime={details.runtime}
            content={details.description_full}
            rating={details.rating}
            genres={details.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
