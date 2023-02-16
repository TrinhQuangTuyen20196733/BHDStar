import classNames from "classnames/bind";
import styles from "./MovieSection.module.scss";
import images from "~/assets/images";
import MovieInfo from "~/components/MovieInfo/MovieInfo";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ScrollTo from "~/components/ScrollTo/ScrollTo";
import Menu from "./Menu";
import slides from "~/config/slides";
const cx = classNames.bind(styles);


function MovieSection() {
  const [movies, setMovies] = useState([]);
  useLayoutEffect(() => {
    async function getMovies() {
      const results = await fetch('http://localhost:8080/api/movies');
      const movie_json = await results.json();
      setMovies(movie_json);
    };
    getMovies();
  }, [])
  const scrollDownRef = useRef(null);
  const [movieIndex, setMovieIndex] = useState(2);
  useEffect(() => {
    setMovieIndex(0);
  }, []);
  const handleLeftMovie = () => {
    if (movieIndex > 0) {
      setMovieIndex(movieIndex - 1);
    } else {
      setMovieIndex(movies.length - 1);
    }
  };
  const handleRightMovie = () => {
    if (movieIndex < movies.length - 1) {
      setMovieIndex(movieIndex + 1);
    } else {
      setMovieIndex(0);
    }
  };

  const doubleMovies = [...movies, ...movies];
  return (
    <div className={cx("wrapper")} ref={scrollDownRef}>
      <div className={cx("section--product-view")}>
        <ScrollTo
          round
          className={cx("scroll-down")}
          DomElement={scrollDownRef.current}
        />
      </div>

      <div className={cx("container")}>
        <Menu />
        <div className={cx("movie-container")}>
          <div className={cx("left-arrow")} onClick={handleLeftMovie}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          {doubleMovies
            .slice(movieIndex, movieIndex + 6)
            .map((movie, index) => (
              <MovieInfo key={index} isTicketButton movie={movie} />
            ))}
          <div className={cx("right-arrow")} onClick={handleRightMovie}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSection;
