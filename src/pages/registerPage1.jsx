import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/index.js";
import { Button, Input } from "..//components/index.js";
import axios from "axios";
import "./register.css";
import nameIcon from "../assets/id-card.svg";
import phonIcon from "../assets/phone-call.svg";
import img from "../assets/logpage.svg";
function Register1() {
  // const handleSubmit = (event) => {
  //   console.log(phoneNumber, password);
  //   event.preventDefault();
  //   axios
  //     .post("https://sikkala.up.railway.app/api/auth", {
  //       phoneNumber: phoneNumber,
  //       password: password,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       if (result.status === 200) {
  //         localStorage.setItem("token", result.data.token);
  //         window.location.href = "/profile";
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <>
      <Navbar></Navbar>
      <div className="form">
        <div className="form__contanier">
          <h1 className="title">انشاء حساب </h1>
          <div className="form__container__input">
            <Input type="text" icon={nameIcon} text=" الايميل" />
            <Input type="text" icon={phonIcon} text="  العنوان" />
          </div>
          {/* <Link to="/profile"> */}
          <Button text=" انشاء الحساب"></Button>
          {/* </Link> */}

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
export default Register1;
