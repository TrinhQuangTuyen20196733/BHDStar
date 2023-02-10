import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
function Menu({ children, title }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-icon")}>{children}</div>
      <span className={cx("title")}>{title}</span>
    </div>
  );
}

export default Menu;
