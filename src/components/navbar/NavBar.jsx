import React from "react";
import "./NavBar.css";
import serachIcon from "..//../assets/search-icon.svg";
import cart from "..//../assets/cart.svg";
import arrow from "..//../assets/arrow.svg";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__user">
          <div className="login">
            <p>تسجيل الدخول</p>
          </div>
          <div className="register">
            <p>انشاء حساب</p>
            <img className="register__arrow" src={arrow}></img>
          </div>
          <img className="navbar__cart" src={cart}></img>
        </div>
        <div className="navbar__search">
          {/* <img className="navbar__cart" src={cart}></img> */}
          <span>
            <img
              src={serachIcon}
              alt="search icon"
              className="search__icon"
            ></img>
          </span>
          <input
            type="text"
            className="navbar__search__input"
            placeholder="البحث عن مواد"
          />
        </div>

        <div className="navbar__logo">
          {/* <img src={logo} alt="Sekalla Logo" /> */}
          <h1>Sekalla</h1>
        </div>
      </div>
    </>
  );
}
export default Navbar;
