import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Button } from "../..//components/index";
import { InfoLine } from "../../components/index";
import idCard from "../../assets/id-card.svg";

import userImg from "../../assets//user.jpg";
import "./profile.css";
function Profile() {
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
            icon={idCard}
          ></InfoLine>
          <InfoLine
            text=" 07788888888"
            title="رقم الهاتف"
            icon={idCard}
          ></InfoLine>
          <InfoLine
            text=" **************"
            title="كلمة المرور"
            icon={idCard}
          ></InfoLine>
          <InfoLine
            text=" example@gmail.com"
            title="البريد"
            icon={idCard}
          ></InfoLine>
          <br />
        </div>
        <div className="profile__avatar">
          <div className="profile__avatar__contanier">
            <img src={userImg} alt="user avatar" className="user-avatar" />
            <Button text="تغيير"></Button>
            <div className="space">
              <Button text="حذف"></Button>
            </div>
            <div>
              <Button text="نسجيل الخروج"></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
