import React, { useState } from "react";
import "./loginInput.css";
import { Button, LoginInput } from "../index";
import img from "../../assets/logpage.svg";
import phoneCall from "../../assets//phone-call.svg";
import password from "../../assets/padlock.svg";
import axios from "axios";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    console.log(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://sikkala.onrender.com/api/auth", {
        phoneNumber: phoneNumber,
        password: password,
      })
      .then((response) => {
        // handle successful login
      })
      .catch((error) => {
        // handle login error
      });
  };

  return (
    <div className="form">
      <div className="form__container">
        <h1 className="title">تسجيل الدخول</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__container__input">
            <LoginInput
              type1="text"
              text1="رقم الهاتف"
              icon1={phoneCall}
              onChange1={handlePhoneNumberChange}
              type2="password"
              text2="كلمة المرور"
              icon2={password}
              onChange2={handlePasswordChange}
            />
          </div>
          <Button type="submit" text="تسجيل الدخول" />
        </form>
        <p>
          ليس لديك حساب؟
          <a href="/register">سجل الآن </a>
        </p>
      </div>
      <img className="img--form" src={img} alt="img" />
    </div>
  );
}

export default Login;
