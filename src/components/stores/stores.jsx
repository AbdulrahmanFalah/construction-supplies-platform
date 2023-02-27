import React from "react";
import "./stores.css";
import phoneCallIcon from "../../assets/phone-call.svg";
import locationIcon from "../../assets/location-icon.svg";
import storeData from "../../store-data/store-data.json";
import storeImg from "../../assets/store-img.png";
function Stores() {
  const storeElements = storeData.map((store) => {
    return (
      <div className="store" key={store.id}>
        <div className="store__info">
          <div className="store__info__text">
            <h1>{store.storeName}</h1>
            <p>
              <img
                src={locationIcon}
                alt="location icon"
                className="store__info__location--icon"
              />
              {store.storeLocation}
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
    );
  });

  return <div className="store--grid">{storeElements}</div>;
}

export default Stores;
