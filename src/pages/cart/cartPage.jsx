import React from "react";
import "./cartPage.css";
import { Item, Navbar, Button } from "../../components";
function CartPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="cart">
        <div className="cart__header">
          <h1 className="cart__header__title">سلة المشتريات</h1>
        </div>
        <div className="cart__body">
          <Item></Item>
        </div>
        <div className="cart__footer">
          <div className="cart__footer__text">
            <h3>المبلغ الكلي</h3>
            <h3>640,000 دينار</h3>
          </div>
          <div className="btn__cont">
            <Button text="شراء "></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
