import classNames from "classnames/bind";
import styles from "./MovieInfo.module.scss";
import Image from "../Image";
import Button from "../Button/Button";
const cx = classNames.bind(styles);
function MovieInfo({ movie }) {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("image")}
        width="200px"
        height="300px"
        src={movie.src}
        alt={movie.alt}
        customFallBack={movie.customFallBack}
      />
      <div className={cx("movie-title-wrapper")}>
        <span className={cx("movie-title")}>{movie.title}</span>
      </div>
      <Button text primaryColor isTicketButton className={cx("ticket-button")}>
        MUA VÉ
      </Button>
    </div>
  );
}

export default MovieInfo;