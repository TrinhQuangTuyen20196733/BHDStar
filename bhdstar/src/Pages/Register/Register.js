import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import Input from "~/components/Input";
import EventSection from "~/layouts/components/EventSection";
import Button from "~/components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);
function Register() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  // const [role, setRole] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const validPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const handleLogin = () => {
    if (!validEmail.test(emailLogin) || !validPassword.test(passwordLogin)) {
      alert(
        "Email hoặc mật khẩu không chính xác!!! Lưu ý mật khẩu phải có ít nhất 8 kí tự,  1 chữ cái  và 1 số"
      );
      return;
    }

    const loginInfo = {
      email: emailLogin,
      password: passwordLogin,
    };
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // if (data.code && data.description) {
        //   alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        // } else {
        //   let accountJson = JSON.stringify(data);
        //   localStorage.setItem("currentAccount", accountJson);
        // }
        console.log(data);
      });
  };

  const handleSignUp = () => {
    if (!validEmail.test(emailSignUp) || !validPassword.test(passwordSignUp)) {
      alert(
        "Email hoặc mật khẩu không chính xác!!! Lưu ý mật khẩu phải có ít nhất 8 kí tự,  1 chữ cái  và 1 số"
      );
      return;
    } else if (passwordSignUp !== passwordConfirm) {
      alert("Mật khẩu không khớp. Vui lòng nhập lại");
      return;
    } else if (!validPhoneNumber.test(phoneNumber)) {
      alert("Số điện thoại không đúng, vui lòng nhập lại!");
      return;
    } else if (
      !firstName.trim() ||
      !lastName.trim() ||
      !birthDay ||
      !address.trim()
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      console.log(birthDay);
      return;
    } else if (!checked) {
      alert("Vui lòng đồng ý các điều khoản");
      return;
    }
    const signUpInfo = {
      lastName,
      firstName,
      phoneNumber,
      address,
      birthDay,
      account: {
        email: emailSignUp,
        password: passwordSignUp,
      },
    };
    fetch("http://localhost:8080/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpInfo),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("title")}>
          <h3 className={cx("product-title")}>THÀNH VIÊN</h3>
          <span className={cx("separator-character")}>|</span>
          <h3 className={cx("product-title")}>FAQ</h3>
          <span className={cx("separator-character")}>|</span>
          <h3 className={cx("product-title")}>QUY ĐỊNH</h3>
        </div>
        <div className={cx("container")}>
          <div className={cx("login")}>
            <h4>ĐĂNG NHẬP</h4>
            <div className={cx("login-info")}>
              <Input
                label="Email (*)"
                type="email"
                value={emailLogin}
                onChange={(e) => {
                  setEmailLogin(e.target.value);
                }}
              />
              <Input
                label="Mật khẩu (*)"
                type="password"
                value={passwordLogin}
                onChange={(e) => {
                  setPasswordLogin(e.target.value);
                }}
              />
              {/* <div className={cx("select-role")}>
                <label className={cx("role-header")}>Vai trò</label>
                <select
                  className={cx("btn-select")}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value="user" selected={role === "user"}>
                    Người dùng
                  </option>
                  <option value="admin" selected={role === "admin"}>
                    Quản trị viên
                  </option>
                  <option value="manager" selected={role === "manager"}>
                    Quản lý
                  </option>
                </select>
              </div> */}

              <div className={cx("login-action")}>
                <Button
                  text
                  primaryColor
                  className={cx("btn-login")}
                  onClick={handleLogin}
                >
                  ĐĂNG NHẬP
                </Button>
                <Link to="/quen-mat-khau" className={cx("password-forgot")}>
                  Quên mật khẩu
                </Link>
              </div>
            </div>
          </div>
          <div className={cx("sign-up")}>
            <h4>ĐĂNG KÍ MỚI</h4>
            <div className={cx("sign-up-info")}>
              <Input
                label="Họ (*)"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <Input
                label="Tên (*)"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <Input
                label="Email (*)"
                type="email"
                value={emailSignUp}
                onChange={(e) => {
                  setEmailSignUp(e.target.value);
                }}
              />
              <Input
                label="Mật khẩu (*)"
                type="password"
                value={passwordSignUp}
                onChange={(e) => {
                  setPasswordSignUp(e.target.value);
                }}
              />
              <Input
                label="Nhập lại mật khẩu (*)"
                type="password"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
              <Input
                label="Số điện thoại (*)"
                type="tell"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <Input
                label="Ngày sinh (*)"
                type="date"
                value={birthDay}
                onChange={(e) => {
                  setBirthDay(e.target.value);
                }}
              />
              <Input
                label="Địa chỉ liên hệ (*)"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <label className={cx("policy-check")}>
                <input
                  type="checkbox"
                  name="dieu-khoan"
                  className={cx("policy-checkbox")}
                  onChange={(e) => setChecked(e.target.checked)}
                  checked={checked}
                />
                <span>Tôi đã đọc, hiểu và đồng ý với các điều khoản</span>
              </label>
              <Button
                text
                primaryColor
                className={cx("btn-login")}
                onClick={handleSignUp}
              >
                ĐĂNG KÝ
              </Button>
            </div>
          </div>
        </div>
      </div>
      <EventSection />
    </>
  );
}

export default Register;
