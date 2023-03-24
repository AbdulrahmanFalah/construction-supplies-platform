import React, { useEffect, useState } from "react";
import "./stores.css";
import { Link } from "react-router-dom";
import phoneCallIcon from "../../assets/phone-call.svg";
import locationIcon from "../../assets/location-icon.svg";
import storeImg from "../../assets/store-img.png";
import axios from "axios";

function Stores() {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sikkala.onrender.com/api/store")
      .then((result) => {
        console.log(result);
        setStoreData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(storeData);

  const storeElements = storeData.map((store) => {
    return (
      <Link to={`/storeProfile/${store["_id"]}`} key={store.id}>
        <div className="store">
          <div className="store__info">
            <div className="store__info__text">
              <h1>{store.name}</h1>
              <p>
                <img
                  src={locationIcon}
                  alt="location icon"
                  className="store__info__location--icon"
                />
                {store.district}
              </p>
            </div>
            <div className="store__info__text">
              <p>
                <img
                  src={phoneCallIcon}
                  alt="phone call icon"
                  className="store__info__phoneCall--icon"
                />
                {store.phoneNumber}
              </p>
            </div>
          </div>
          <img src={storeImg} alt="store" className="store__img" />
        </div>
      </Link>
    );
  });

  return <div className="store--grid">{storeElements}</div>;
}

export default Stores;
