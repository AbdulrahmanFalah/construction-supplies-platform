import React from "react";
import "./StoreDashbord.css";
import { Navbar, DashbordCategory } from "../../components/index";
import { Footer } from "../..//containers/index";
// import { Category } from "../..//containers/index";
import adrressIcon from "../../assets/location-icon.svg";
import phoneCall from "../../assets//phone-call.svg";
import storeImg from "../../assets/store-img.svg";
function StoreDashbord() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="storeDashbord">
        <div className="profile__store__info">
          <div className="store__info__container">
            <h1>سكلة 14 رمضان للمواد الانشائية</h1>
            <p>
              <img className="icon" src={adrressIcon} alt="" />
              الموقع:المنصور
            </p>
            <p>
              <img className="icon" src={phoneCall} alt="" />
              رقم الهاتف:07788888888
            </p>
          </div>
          <img className="profile__store__img" src={storeImg} alt="" />
        </div>
      </div>
      <DashbordCategory></DashbordCategory>
      <Footer></Footer>
    </div>
  );
}

export default StoreDashbord;
