import React, { useEffect, useRef } from "react";
import "./Model.css";
import { Button } from "../index";
import img from "../../assets//cement.webp";
import xMark from "../../assets//x-mark.svg";
import storeImg from "../../assets//store-img.svg";
import plus from "../../assets//plus.png";
import minus from "../../assets///minus-sign.png";

const Model = ({ closeModel }) => {
  const modalRef = useRef(null);

  // close the modal if clicking outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModel(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="blur" id="MyModal">
      <div ref={modalRef} className="model">
        <img
          className=" exit"
          src={xMark}
          alt=""
          onClick={() => {
            closeModel(false);
          }}
        />
        <div className="model__contant">
          <div className="model__header">
            <h1>اسمنت اعتيادي</h1>
            <div className="store--info">
              <img src={storeImg} alt="" className="model__store--img" />
              <h3>سكلة 14 رمضان</h3>
            </div>
          </div>
          <div className="model__body">
            <div className="model__item--count">
              <span>الكمية</span>

              <div className="flex">
                <img src={plus} alt="" className="icon up" />
                <span>5</span>
                <img src={minus} alt="" className="icon up" />
              </div>
            </div>
            <div className="model__item--price">
              السعر <h1 className="price">500</h1> دينار
            </div>

            <p></p>
            <p></p>
          </div>
          <div className="model__footer">
            <Button text="اضافة  للسلة"></Button>
            <span></span>
            <Button text=" الشراء الان "></Button>
          </div>
        </div>
        <div>
          <img className="model--img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Model;
