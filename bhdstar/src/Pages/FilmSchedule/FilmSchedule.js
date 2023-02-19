import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

import EventSection from "~/layouts/components/EventSection";
import Film from "./Film";
import styles from "./FilmSchedule.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
function FilmSchedule() {
  const [film, setFilm] = useState({});
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const films = [
    {
      name: "MY FAIRY TROUBLEMAKER",
      image: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002594?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
      summary: "Một nàng tiên táo bạo tên là Violetta bị lạc vào thế giới loài người. Để quay trở lại thế giới cổ tích, cô đã gặp gỡ và hợp tác với một cô bé 12 tuổi tên Maxie và khám phá ra định mệnh thực sự của mình",
      age: "p",
      movieGenre: "2d"
    },

  ];
  const chooseFilm = (item) => {
    setFilm(item);
    console.log(film);
  }
  return (
    <div className={cx("film-schedule")}>
      <div className={cx("container")} style={{ overflow: "hidden", height: "100%" }}>
        <div className={cx("wrapper")}>
          <div className={cx("menu")}>
            <Link className={cx("active")} to="/lich-chieu-theo-phim">
              <span>Lịch chiếu theo phim</span>
            </Link>
            <span>|</span>
            <Link to="/lich-chieu">
              <span>Lịch chiếu theo rạp</span>
            </Link>
          </div>
          <div className={cx("film-schedule-carousel")}>
            <Carousel swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              arrows={false}
              infinite={true}
              autoPlay={true}
              keyBoardControl={true}
              dotListClass={cx("custom-dot-list-style")}
              className={cx("film-schedule-list")}
            >
              {
                films.map((item, index) => (
                  <div className={cx("film-schedule-item")} key={index}
                    onClick={() => chooseFilm(item)}>
                    <img src={item.image} />
                    <h3 style={{ textAlign: "center" }}>{item.name}</h3>
                  </div>
                ))
              }
            </Carousel>
            <div className={cx("line")}></div>
          </div>
          {Object.keys(film).length !== 0 && < Film film={film} />}
        </div>
      </div>
      <EventSection />
    </div>
  );
}


export default FilmSchedule;
