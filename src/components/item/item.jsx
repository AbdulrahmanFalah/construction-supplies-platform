import React from "react";
import "./item.css";
import item from "../../store-data/item-data.json";
import itemimg from "../../assets/cement.webp";
function Item(proops) {
  let itemCards = item.slice(0, proops.num).map((item) => {
    return (
      <>
        <div className="item__card">
          <img src={itemimg} alt="item" className="item__card__img" />
          <div className="item__card__info">
            <h1 className="item__card__info__title">{item.itemName}</h1>
            <p className="item__card__info__store">{item.storeName}</p>
            <p className="item__card__info__price">{item.itemPrice} دينار</p>
          </div>
        </div>
      </>
    );
  });
  return <div className="item--grid">{itemCards}</div>;
}
export default Item;
