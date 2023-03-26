import { React, useState } from "react";
import "./login.css";
import { Button, LoginInput } from "../index";
import img from "../../assets/logpage.svg";
import phoneCall from "../../assets//phone-call.svg";
import passwordIcon from "../../assets/padlock.svg";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(phoneNumber, password);
    event.preventDefault();
    axios
      .post("https://sikkala.up.railway.app/api/auth", {
        phoneNumber: phoneNumber,
        password: password,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          Cookies.set("access_token", result.data.accessToken);
          Cookies.set("refresh_token", result.data.refreshToken);
          console.log(Cookies.get("access_token"));
          console.log(Cookies.get("refresh_token"));
          window.location.replace("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <div className="form__container">
        <h1 className="title">تسجيل الدخول</h1>
        <div className="form__container__input">
          <LoginInput
            type="text"
            text="رقم الهاتف"
            icon={phoneCall}
            onChange={handlePhoneNumberChange}
          />
          <LoginInput
            type="password"
            text="كلمة المرور"
            icon={passwordIcon}
            onChange={handlePasswordChange}
          />
        </div>
        <div onClick={handleSubmit}>
          <Button text="تسجيل الدخول" />
        </div>

        <p>
          ليس لديك حساب؟<a href="/register">سجل الآن</a>
        </p>
      </div>
      <img className="img--form" src={img} alt="img" />
    </div>
  );
}

export default Login;
