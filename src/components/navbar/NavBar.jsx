import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import searchIcon from "../../assets/search-icon.svg";
import cart from "../../assets/cart.svg";
import arrow from "../../assets/arrow.svg";
import axios from "axios";

function Navbar() {
  const [search, setSearch] = useState("");
  const handelCkick = () => {
    axios
      .get(`https://sikkala.onrender.com/api/search?query=${search}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__user">
            <Link to="/login">
              <div className="login">
                <p>تسجيل الدخول</p>
                <img
                  className="login__arrow"
                  src={arrow}
                  alt="login icon"
                ></img>
              </div>
            </Link>

            <Link to="/cart">
              <img className="navbar__cart" src={cart} alt="cart icon"></img>
            </Link>
          </div>
          <div className="navbar__search navbar__search-web ">
            <input
              type="text"
              className="navbar__search__input"
              placeholder="البحث عن مواد"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span>
              <img
                src={searchIcon}
                alt="search icon"
                className="search__icon"
                onClick={handelCkick}
              ></img>
            </span>
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
                src={searchIcon}
                alt="search icon"
                className="search__icon"
              ></img>
            </span>
            <input
              type="text"
              className="navbar__search__input mobile-input"
              placeholder="البحث عن مواد"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
