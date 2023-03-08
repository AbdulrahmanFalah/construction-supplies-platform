import React from "react";
import "./StoreDashbord.css";
import { Navbar, StoreProfile } from "../../components/index";
import { Category } from "../..//containers/index";
function StoreDashbord() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="storeDashbord">
        <StoreProfile></StoreProfile>
        <Category></Category>
      </div>
    </div>
  );
}

export default StoreDashbord;
