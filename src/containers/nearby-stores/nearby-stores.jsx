import React from "react";
import { Link } from "react-router-dom";
import "./nearby-stores.css";
import { Stores, Button } from "../..///components///index.js";
function NearbyStores() {
  return (
    <>
      <h1 className="title">السكلات القريبة من موقعك</h1>
      <>
        <Stores />
        <div className="button--container">
          <Link to="/nearby-stores">
            <Button text="عرض الكل" />
          </Link>
        </div>
      </>
    </>
  );
}
export default NearbyStores;
