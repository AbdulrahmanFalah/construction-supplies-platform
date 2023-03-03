import React from "react";
import "./login.css";
import { Button, Input } from "../index";
import img from "../../assets/logpage.svg";
import phoneCall from "../../assets//phone-call.svg";
import password from "../../assets/padlock.svg";

function Login() {
  return (
    <div className="form">
      <div className="form__container">
        <h1 className="title">تسجيل الدخول</h1>
        <div className="form__container__input">
          <Input type="text" text="رقم الهاتف" icon={phoneCall}></Input>
          <Input type="password" text="كلمة المرور" icon={password}></Input>
        </div>
        <Button text="تسجيل الدخول"></Button>
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
