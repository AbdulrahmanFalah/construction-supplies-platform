import { React, useState, useEffect } from "react";
import "./storeProfile.css";
import adrressIcon from "../../assets/location-icon.svg";
import phoneCall from "../../assets//phone-call.svg";
import storeImg from "../../assets/store-img.svg";
import { Category } from "../../containers";
import axios from "axios";
import { useParams } from "react-router-dom";

function StoreProfile() {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    axios
      .get(`https://sikkala.onrender.com/api/store/${id}`)
      .then((result) => {
        console.log(result);
        setStore(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!store) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="profile__store">
        <div className="profile__store__info">
          <div className="store__info__container">
            <h1>{store.name}</h1>
            <p>
              <img className="icon" src={adrressIcon} alt="" />
              الموقع:{store.district}
            </p>
            <p>
              <img className="icon" src={phoneCall} alt="" />
              رقم الهاتف:{store.phoneNumber}
            </p>
          </div>
          <img className="profile__store__img" src={storeImg} alt="" />
        </div>
      </div>
      <Category></Category>
    </>
  );
}
export default StoreProfile;
