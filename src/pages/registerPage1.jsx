import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/index.js";
import { Button, Input } from "..//components/index.js";
import nameIcon from "../assets/id-card.svg";
import phonIcon from "../assets/phone-call.svg";
import password from "../assets/padlock.svg";
import img from "../assets/logpage.svg";
function Register() {
  return (
    <>
      <Navbar></Navbar>
      <div className="form">
        <div className="form__contanier">
          <h1 className="title">انشاء حساب </h1>
          <div className="form__container__input">
            <Input type="text" icon={nameIcon} text=" الايميل" />
            <Input type="text" icon={phonIcon} text="  العنوان" />
            <Input type="password" icon={password} text=" الجنس " />
          </div>
          <Link to="/">
            <Button text=" انشاء الحساب"></Button>
          </Link>

          <p>
            لديك حساب بالفعل؟
            <a href="/login">سجل الدخول </a>
          </p>
        </div>

        <img className="img--form" src={img} alt="img" />
      </div>
    </>
  );
}
export default Register;
