import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Button({
  children,
  href,
  to,
  text = false,
  primary = false,
  primaryColor = false,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    text,
    primaryColor,
  });

  return (
    <Comp className={classes} {...props}>
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.bool,
  to: PropTypes.bool,
  text: PropTypes.bool,
  primary: PropTypes.bool,
  primaryColor: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
