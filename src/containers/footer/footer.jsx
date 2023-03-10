import React from "react";
import "./footer.css";
import { emailWhite, phoneCallWhite } from "../../assets/index";

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__logo">سكلة</h1>
      <div className="footer__info">
        <div className="footer__info__contant">
          <h1>تواصل معنا</h1>
          <div className="footer__info__contant--email">
            <img src={emailWhite} alt="" className="icon" />
            <p>ايميل </p>
            <p className="eng-font">support@sekalla.com</p>
          </div>
          <div className="footer__info__contant--email">
            <img src={phoneCallWhite} alt="" className="icon" />
            <p>رقم الهاتف </p>
            <p className="eng-font">07788888888</p>
          </div>
        </div>
        <div className="footer__info__social">
          <h1> تابع اخر اخبارنا</h1>
          <div className="footer__info__social--icons">
            <span className="social-icon facebook"></span>
            <span className="social-icon twitter"></span>
            <span className="social-icon instagram"></span>
            <span className="social-icon whatsapp"></span>
          </div>
        </div>
      </div>
      <div className="footer__rights">جميع الحقوق محفوظة, سكلة 2023©</div>
    </footer>
  );
}

export default Footer;
