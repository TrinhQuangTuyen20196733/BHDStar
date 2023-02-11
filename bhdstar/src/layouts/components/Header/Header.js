import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Button from "~/components/Button/Button";
import styles from "./Header.module.scss";
import Menu from "~/components/Menu";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import ActionItem from "~/components/ActionItem";
import Tippy from "@tippyjs/react/headless";
import PoperWrapper from "~/components/PoperWrapper";
import { Link } from "react-router-dom";
import config from "~/config";
import { useState } from "react";
const cx = classNames.bind(styles);
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAction, setShowAction] = useState(true);
  const handleClickMenu = () => {
    setShowMenu(!showMenu);

    console.log("Da click menu");
  };
  const handleAction = () => {
    setShowAction(!showAction);
  };

  return (
    <div className={cx("wrapper")}>
      <Tippy
        interactive
        trigger="click"
        placement="bottom"
        render={(attrs) => (
          <PoperWrapper className={cx("menu-list")}>
            <Link to={config.routes.FilmSchedule} className={cx("menu-link")}>
              lịch chiếu
            </Link>
            <Link to={config.routes.TheaterSystem} className={cx("menu-link")}>
              hệ thống rạp
            </Link>
            <Link to={config.routes.Event} className={cx("menu-link")}>
              khuyến mãi | sự kiện
            </Link>
            <Link to={config.routes.Advertise} className={cx("menu-link")}>
              dịch vụ quảng cáo
            </Link>
            <Link to={config.routes.FilmSchedule} className={cx("menu-link")}>
              tuyển dụng
            </Link>
            <Link to={config.routes.Information} className={cx("menu-link")}>
              về chúng tôi
            </Link>
          </PoperWrapper>
        )}
      >
        {!showMenu ? (
          <Menu title="MENU" onClick={handleClickMenu}>
            <FontAwesomeIcon icon={faBars} />
          </Menu>
        ) : (
          <Menu title="CLOSE" onClick={handleClickMenu}>
            <FontAwesomeIcon icon={faX} />
          </Menu>
        )}
      </Tippy>

      <Button className={cx("ticket")} primaryColor text>
        MUA VÉ
      </Button>
      <img alt="" src={images.logo} className={cx("logo")} />
      <div className={cx("action")}>
        {showAction ? (
          <>
            <ActionItem
              src={images.iconInstagram}
              alt="IconInstagram"
              href="https://www.instagram.com/bhdstar.cineplex/"
            />
            <ActionItem
              src={images.iconTiktok}
              alt="IconTiktok"
              href="https://www.tiktok.com/@bhdstar.cineplex"
            />

            <ActionItem
              src={images.iconYoutube}
              alt="IconYoutube"
              href="https://www.youtube.com/user/BHDStar"
            />
            <ActionItem
              src={images.iconFacebook}
              alt="IconFacebook"
              href="https://www.facebook.com/BHDStar"
            />
            <Tippy
              trigger="click"
              interactive
              placement="bottom-start"
              render={(attrs) => (
                <PoperWrapper className={cx("login-info")}>
                  <input placeholder="Email" className={cx("login-input")} />
                  <input placeholder="Password" className={cx("login-input")} />
                  <div className={cx("login-action")}>
                    <Link to={config.routes.Account}>
                      <Button
                        primaryColor
                        text
                        loginButton
                        className={cx("btn-login")}
                        onClick={handleAction}
                      >
                        ĐĂNG NHẬP
                      </Button>
                    </Link>

                    <p className={cx("password")}>Quên mật khẩu</p>
                  </div>
                  <Button text primaryColor className={cx("membership")}>
                    Đăng kí thành viên
                  </Button>
                </PoperWrapper>
              )}
            >
              <Button text primaryColor className={cx("btn-login")}>
                ĐĂNG NHẬP
              </Button>
            </Tippy>
          </>
        ) : (
          <div className={cx("log-out")}>
            <span className={cx("user-name")}>TUYẾN | </span>
            <Link
              style={{ textDecoration: "none", color: "none" }}
              to={config.routes.Home}
              className={cx("btn-logout")}
              onClick={handleAction}
            >
              THOÁT
            </Link>
          </div>
        )}
      </div>
      <img alt="" src={images.lineHeader1} className={cx("line-header1")} />
    </div>
  );
}

export default Header;
