import React from "react";
import "./NavBar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          {/* <img src={logo} alt="Sekalla Logo" /> */}
          <h1>Sekalla</h1>
        </div>
        <div className="navbar__search"></div>
        <input
          type="text"
          className="navbar__search__input"
          placeholder="البحث عن مواد"
        />
        <span>{/* <img src={serachIcon}></img> */}</span>
        {/* <img src={cart}></img> */}
        <div className="navbar__user"></div>
        <div className="login">
          <p>تسجيل الدخول</p>
        </div>
        <div className="register">
          <p>انشاء حساب</p>
        </div>
      </div>
    </>
  );
}
export default Navbar;
