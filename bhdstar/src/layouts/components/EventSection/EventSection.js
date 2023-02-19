import classNames from "classnames/bind";
import { useState } from "react";
import Carousel from "react-multi-carousel";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import styles from "./EventSection.module.scss";
const cx = classNames.bind(styles);

const EventSection = () => {
  const [promotion, setPromotion] = useState(true);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const imagePromotion = [
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/Hinh-Vani-Ngang.jpeg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/Visa-x-BHD-WEB.jpg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg"
  ];
  const imageEvent = [
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-ScanQR-710x320.jpg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-APP-710x320.jpg",
    "https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_710x320-2.jpg"
  ];
  const clickPromotion = () => {
    setPromotion(true);
  }
  const clickEvent = () => {
    setPromotion(false);
  }
  const listEventPromotion = promotion ? imagePromotion : imageEvent;
  return (
    <div className={cx("promotion-event")}>
      <div className={cx("container")} style={{ overflowX: "hidden", paddingBottom: "30px" }}>
        <div className={cx("promotion-event-title")}>
          <div className={promotion && cx("promotion-event-title--active")}
            onClick={clickPromotion}>Khuyến mãi
          </div>
          <div>|</div>
          <div className={!promotion && cx("promotion-event-title--active")}
            onClick={clickEvent}>Sự kiện
          </div>
        </div>
        <Carousel swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          arrows={false}
          keyBoardControl={true}
          dotListClass={cx("custom-dot-list-style")}
          className={cx("promotion-carousel")}
        >
          {
            listEventPromotion.map((item, index) => (
              <div key={index} className={cx("promotion-item")}>
                <img src={item} />
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default EventSection