import classNames from "classnames/bind";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Film.module.scss";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);


const Film = ({ film }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 15
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 13
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 10
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 7
    },
  };
  const days = [
    {
      weekday: "Thứ 7",
      day: "18/2"
    },
    {
      weekday: "Chủ nhật",
      day: "18/2"
    },
    {
      weekday: "Thứ 2",
      day: "18/2"
    },
    {
      weekday: "Thứ 3",
      day: "18/2"
    },
    {
      weekday: "Thứ 4",
      day: "18/2"
    },
    {
      weekday: "Thứ 5",
      day: "18/2"
    },
    {
      weekday: "Thứ 6",
      day: "18/2"
    },
    {
      weekday: "Thứ 7",
      day: "18/2"
    },
    {
      weekday: "Chủ nhật",
      day: "18/2"
    },
    {
      weekday: "Thứ 2",
      day: "18/2"
    },
    {
      weekday: "Thứ 3",
      day: "18/2"
    },
    {
      weekday: "Thứ 4",
      day: "18/2"
    },
    {
      weekday: "Thứ 5",
      day: "18/2"
    },
    {
      weekday: "Thứ 6",
      day: "18/2"
    },
    {
      weekday: "Thứ 7",
      day: "18/2"
    },
    {
      weekday: "Chủ nhật",
      day: "18/2"
    },
    {
      weekday: "Thứ 2",
      day: "18/2"
    },
    {
      weekday: "Thứ 3",
      day: "18/2"
    }
  ]
  const cinema = [
    {
      name: "BDH star 3.2",
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
      map: "https://www.google.com/maps/search/Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM?transaction_id=",
      showtimes: ["10:25", "12:55", "17:40"]
    },
    {
      name: "BDH star 3.2",
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
      map: "https://www.google.com/maps/search/Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM?transaction_id=",
      showtimes: ["10:25", "12:55", "17:40"]
    },
    {
      name: "BDH star 3.2",
      address: "Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM",
      map: "https://www.google.com/maps/search/Lầu 5, Siêu Thị Vincom 3/2, 3C Đường 3/2, Quận 10, TPHCM?transaction_id=",
      showtimes: ["10:25", "12:55", "17:40"]
    },
  ]
  return (
    <>
      <div className={cx("film")}>
        <div className={cx("film-info")}>
          <img src={film?.image} alt="poster phim" />
          <div className={cx("film-information")}>
            <h3>
              {film?.name}&nbsp;&nbsp;&nbsp;
              <div className={cx("film-age--green")}>
                <div>{film?.age}</div>
              </div>
            </h3>
            <span>{film?.movieGenre}</span>
            <p>{film?.summary}</p>
          </div>
        </div>
      </div>
      <div className={cx("scheduler")}>
        <div className={cx("week", "container")}>
          <Carousel responsive={responsive}
            slidesToSlide={3}>
            {days.map((item, index) => (
              <div key={index} className={cx("day")}>
                <p>{item.weekday}</p>
                <span>{item.day}</span>
              </div>
            ))}

          </Carousel>
          <div className={cx("cinema-showtimes-list")}>
            {cinema.map((item, index) => (
              <div key={index} className={cx("cinema-showtimes-item", "row", "g-0")}>
                <div className={cx("col-md-3", "cinema")}>
                  <div className={cx("cinema-info")}>
                    <h5>{item.name}</h5>
                    <p>{item.address}</p>
                  </div>
                  <Link to={item.map}>
                    <FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;Xem vị trí
                  </Link>
                </div>
                <div className={cx("col-md-9", "film-type")}>
                  <div>
                    <div className={cx("type")}>
                      <span>2d</span>
                      <span>dub</span>
                    </div>
                    <span className={cx("film-age--red")}>p</span>
                  </div>
                  <div className={cx("times")}>
                    {item.showtimes.map((time, index) => (
                      <Link to="" style={{ color: "white" }}>
                        <span key={index} className={cx("time")}>
                          {time}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}





export default Film