import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Button from "~/components/Button/Button";
import styles from "./Header.module.scss";
import Menu from "~/components/Menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ActionItem from "~/components/ActionItem";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <Menu title="MENU">
        <FontAwesomeIcon icon={faBars} />
      </Menu>

      <Button className={cx("ticket")} primaryColor text>
        MUA VÉ
      </Button>
      <img alt="" src={images.logo} className={cx("logo")} />
      <div className={cx("action")}>
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
        <Button text primaryColor className={cx("btn-login")}>
          ĐĂNG NHẬP
        </Button>
      </div>

      <img alt="" src={images.lineHeader1} className={cx("line-header1")} />
    </div>
  );
}

export default Header;
