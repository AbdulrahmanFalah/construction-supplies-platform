import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import serachIcon from "..//../assets/search-icon.svg";
import cart from "..//../assets/cart.svg";
import arrow from "..//../assets/arrow.svg";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__user">
            <Link to="/login">
              <div className="login">
                <p>تسجيل الدخول</p>
              </div>
            </Link>
            <Link to="/register">
              <div className="register">
                <p>انشاء حساب</p>
                <img
                  className="register__arrow"
                  src={arrow}
                  alt="arrow icon"
                ></img>
              </div>
            </Link>
            <Link to="/cart">
              <img className="navbar__cart" src={cart} alt="cart icon"></img>
            </Link>
          </div>
          <div className="navbar__search navbar__search-web ">
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
            <Link to="/">
              <h1>Sekalla</h1>
            </Link>
          </div>
        </div>
        <div className="mobile-navbar">
          <div className="navbar__search navbar__search-mobile">
            <span>
              <img
                src={serachIcon}
                alt="search icon"
                className="search__icon"
              ></img>
            </span>
            <input
              type="text"
              className="navbar__search__input mobile-input"
              placeholder="البحث عن مواد"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
