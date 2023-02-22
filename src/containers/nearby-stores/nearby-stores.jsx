import React from "react";
import "./nearby-stores.css";
import { Stores } from "../..///components///index.js";
import { Button } from "../..///components///index.js";
function NearbyStores() {
  return (
    <>
      <h1 className="title">السكلات القريبة من موقعك</h1>

      <Stores />

      <Button text="عرض الكل" img="" />
    </>
  );
}
export default NearbyStores;
