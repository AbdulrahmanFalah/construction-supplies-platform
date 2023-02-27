import React from "react";
import "./category.css";
import Item from "../../components/item/item.jsx";
import { Button } from "../..///components///index.js";
function Category() {
  const categories = [
    "الكل",
    "اسمنت",
    "رمل",
    "حصو",
    "طابوق",
    "بلوك",
    "شيش",
    "كاشي",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("الكل");

  return (
    <>
      <h2 className="title">التصنيفات</h2>
      <div className="category--container">
        <ul className="category--list">
          {categories.map((category) => (
            <li
              key={category}
              className={`category--list__item ${
                selectedCategory === category && "selected"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="item--container">
          <Item category={selectedCategory} />
        </div>
      </div>
      <div className="button--container">
        <Button text="عرض الكل" />
      </div>
    </>
  );
}

export default Category;
