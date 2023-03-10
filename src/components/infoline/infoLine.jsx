import React from "react";
// import { Link } from "react-router-dom";

import "./infoLine.css";
function InfoLine(proops) {
  return (
    <>
      <>
        <div className="info-line">
          <div className="info-line__key">
            <img src={proops.icon} alt="" className="profile-icons" />
            <p>{proops.title}</p>
          </div>
          <div className="info-line__value">
            <p>{proops.text}</p>
          </div>
        </div>
      </>
    </>
  );
}
export default InfoLine;
