import React, { useState } from "react";
import { Navbar } from "../components/index.js";
import { Button, LoginInput } from "..//components/index.js";
import "./register.css";
import nameIcon from "../assets/id-card.svg";
import phonIcon from "../assets/phone-call.svg";
import passwordIcon from "../assets/padlock.svg";
import addressIcon from "../assets/location-icon.svg";
import img from "../assets/logpage.svg";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showNextFields, setShowNextFields] = useState(false);

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleNext = () => {
    setShowNextFields(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://sikkala.up.railway.app/api/register", {
        name: name,
        email: email,
        phoneNumber: phone,
        password: password,
        latitude: 38943094,
        longitude: 3894039,
        city: "baghdad",
        district: address,
        roles: { Master: 1000, Admin: 2000, User: 3000 },
      })
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          localStorage.setItem("token", result.data.token);
          window.location.href = "/profile";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="form">
        <div className="form__contanier">
          <h1 className="title">انشاء حساب </h1>
          <div className="form__container__input">
            {!showNextFields && (
              <LoginInput
                type="text"
                icon={nameIcon}
                text="الاسم الكامل"
                onChange={handleName}
              />
            )}
            {!showNextFields && (
              <LoginInput
                type="text"
                icon={phonIcon}
                text=" رقم الهاتف"
                onChange={handlePhone}
              />
            )}
            {!showNextFields && (
              <LoginInput
                type="password"
                icon={passwordIcon}
                text="كلمة المرور "
                onChange={handlePassword}
              />
            )}

            {showNextFields && (
              <LoginInput
                type="text"
                icon={nameIcon}
                text="البريد الإلكتروني"
                onChange={handleEmail}
              />
            )}
            {showNextFields && (
              <LoginInput
                type="text"
                icon={addressIcon}
                text="العنوان"
                onChange={handleAddress}
              />
            )}
          </div>

          {!showNextFields && (
            <div onClick={handleNext}>
              <Button text="التالي"></Button>
            </div>
          )}
          {showNextFields && (
            <div onClick={handleSubmit}>
              <Button text="التسجيل"></Button>
            </div>
          )}

          <p>
            لديك حساب بالفعل؟
            <a href="/login" style={{ color: "#de8922" }}>
              سجل الدخول{" "}
            </a>
          </p>
        </div>

        <img className="img--form" src={img} alt="img" />
      </div>
    </>
  );
}

export default Register;
