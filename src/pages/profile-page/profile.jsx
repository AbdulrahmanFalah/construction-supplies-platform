import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Button } from "../..//components/index";
import { InfoLine } from "../../components/index";
import idCard from "../../assets/id-card.svg";
import {
  phoneCallIcon,
  passwordIcon,
  emalIcon,
  loctation,
} from "../../assets/index";
import userImg from "../../assets//user.jpg";
import "./profile.css";
import axios from "axios";
import Cookies from "js-cookie";

function Profile() {
  const logout = () => {
    axios
      .get("https://sikkala.onrender.com/api/logout", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")} `,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <h1 className="profile--title">الملف الشخصي</h1>
      <div className="profile">
        <div className="profile__info">
          <InfoLine text="random user " title="الاسم" icon={idCard}></InfoLine>
          <InfoLine
            text="المنصور شارع 14 رمضان"
            title="العنوان"
            icon={loctation}
          ></InfoLine>
          <InfoLine
            text=" 07788888888"
            title="رقم الهاتف"
            icon={phoneCallIcon}
          ></InfoLine>
          <InfoLine
            text=" **************"
            title="كلمة المرور"
            icon={passwordIcon}
          ></InfoLine>
          <InfoLine
            text=" example@gmail.com"
            title="البريد"
            icon={emalIcon}
          ></InfoLine>
          <br />
          <div className="logout" onClick={logout}>
            <Button text="نسجيل الخروج"></Button>
          </div>
        </div>
        <div className="profile__avatar">
          <div className="profile__avatar__contanier">
            <img src={userImg} alt="user avatar" className="user-avatar" />
            <Button text="تغيير"></Button>
            <div className="space">
              <Button text="حذف"></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
