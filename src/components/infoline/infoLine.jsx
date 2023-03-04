import React from "react";
// import { Link } from "react-router-dom";

function InfoLine(proops) {
  return (
    <>
      <div className="info-line">
        <div className="info-line__key">{proops.title}</div>
        <input
          className="info-line__value"
          type="text"
          placeholder={proops.value}
        ></input>
      </div>
    </>
  );
}
export default InfoLine;
