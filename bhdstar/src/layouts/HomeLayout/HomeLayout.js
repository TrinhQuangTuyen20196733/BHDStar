import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";
import styles from "./HomeLayout.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import IntroSection from "~/layouts/components/IntroSection";
import MovieSection from "../components/MovieComponent/MovieSection";
import MemberSection from "../components/MemberSection/MemberSection";
import EventSection from "../components/EventSection";
const cx = classNames.bind(styles);
function HomeLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <IntroSection />
      <MovieSection />
      <MemberSection />
      <EventSection />
      <Footer />
    </div>
  );
}
HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
