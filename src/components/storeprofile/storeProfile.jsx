import React from "react";
import "./storeProfile.css";
import adrressIcon from "../../assets/location-icon.svg";
import phoneCall from "../../assets//phone-call.svg";
import storeImg from "../../assets/store-img.svg";
import { Link } from "react-router-dom";
import { Category } from "../../containers";
function storeProfile() {
  return (
    <>
      <div className="store__info">
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
        <img className="store__img" src={storeImg} alt="" />
      </div>
      <Category></Category>
    </>
  );
}
export default storeProfile;
