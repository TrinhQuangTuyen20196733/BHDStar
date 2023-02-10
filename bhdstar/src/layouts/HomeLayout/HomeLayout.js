import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import styles from "./HomeLayout.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function HomeLayout({ children }) {
  console.log(children);
  return (
    <div className={cx("wrapper")}>
      <Header />
      {/* <div className={cx("content")}>{children}</div> */}
      {/* <Footer /> */}
    </div>
  );
}
HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
