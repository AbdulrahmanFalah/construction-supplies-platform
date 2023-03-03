import React from "react";
import "./nearby-stores.css";
import { Stores, Button } from "../..///components///index.js";
function NearbyStores() {
  return (
    <>
      <h1 className="title">السكلات القريبة من موقعك</h1>
      <>
        <Stores />
        <div className="button--container">
          <Button text="عرض الكل" />
        </div>
      </>
    </>
  );
}
export default NearbyStores;
