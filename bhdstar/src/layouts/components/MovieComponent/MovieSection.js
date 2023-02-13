import classNames from "classnames/bind";
import styles from "./MovieSection.module.scss";
import images from "~/assets/images";
import MovieInfo from "~/components/MovieInfo/MovieInfo";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ScrollTo from "~/components/ScrollTo/ScrollTo";
import Menu from "./Menu";
const cx = classNames.bind(styles);

const movies = [
  {
    src: images.Movie1,
    alt: "Movie Info",
    title: "ANT-MAN AND THE DEATH WASP : QUANTUMANIA",
  },
  {
    src: images.Movie2,
    alt: "Movie Info",
    title: "SOME DAY OR ONE DAY",
  },
  {
    src: images.Movie3,
    alt: "Movie Info",
    title: "TO THE ONLY ONE WHO LOVE YOU, ME",
  },
  {
    src: images.Movie4,
    alt: "Movie Info",
    title: "THE FABELMANS",
  },
  {
    src: images.Movie5,
    alt: "Movie Info",
    title: "SWORD ART ONLINE PROGRESSIVE - SCHERZO OF DEEP",
  },
  {
    src: images.Movie6,
    alt: "Movie Info",
    title: "DITTO",
  },
  {
    src: images.Movie7,
    alt: "Movie Info",
    title: "TO EVERY YOU I'VE LOVED BEFORE",
  },
  {
    src: images.Movie8,
    alt: "Movie Info",
    title: "TITANIC: 25TH ANIVERSARY",
  },
  {
    src: images.Movie9,
    alt: "Movie Info",
    title: "KNOCK AT THE CABIN",
  },
  {
    src: images.Movie10,
    alt: "Movie Info",
    title: "BABYLON",
  },
];

function MovieSection() {
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
