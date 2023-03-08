import React from "react";
import "./item.css";
import itemData from "../../store-data/item-data.json";
import itemImg from "../../assets/cement.webp";
import plus from "../../assets//plus.png";
import minus from "../../assets///minus-sign.png";
function Item({ selectedCategory }) {
  let filteredItems = itemData.filter(
    (item) => item.catagory === selectedCategory || selectedCategory === "الكل"
  );
  let itemCards = filteredItems.map((item) => {
    return (
      <div className="item__card" key={item.id}>
        <img src={itemImg} alt="item" className="item__card__img" />
        <div className="item__card__info">
          <h1 className="item__card__info__title">{item.itemName}</h1>
          <p className="item__card__info__store">{item.storeName}</p>
          {/* <p className="item__card__info__store--location">{store.loaction}</p> */}
          <div className="item--count">
            <span className="count--title">الكمية</span>

            <div className="flex">
              <img src={plus} alt="" className="size" />
              <span>5</span>
              <img src={minus} alt="" className="size" />
            </div>
          </div>

          <p className="item__card__info__price">{item.itemPrice} دينار </p>
        </div>
      </div>
    );
  });

  return <div className="item--grid">{itemCards}</div>;
}

export default Item;
