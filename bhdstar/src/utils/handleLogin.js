import store from "~/components/Redux/store";
import { addAuthentication } from "~/components/Redux/action";
const handleLogin = (emailLogin, passwordLogin) => {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Tài khoản hoặc mật khẩu của bạn không đúng, vui lòng nhập lại!"
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let rolesAuthentication = [];
      data.account.roles.map((role) => {
        return rolesAuthentication.push(role.code);
      });

      const authentication = {
        email: data.account.email,
        password: data.account.password,
        roles: rolesAuthentication,
        lastName: data.account.user.lastName,
      };
      store.dispatch(addAuthentication(authentication));
      localStorage.setItem("jwtToken", data.accessToken);
    })
    .catch((error) => {
      alert(error.message);
    });
};
export default handleLogin;
