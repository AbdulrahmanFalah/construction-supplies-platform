import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./category.css";
import Item from "../../components/item/item.jsx";
import { Button } from "../..///components///index.js";
function Category() {
  const [showNum, setShowNum] = useState(6);
  const handleShowAll = () => {
    setShowNum(showNum === 6 ? 100 : 6);
    {
      console.log(showNum);
    }
  };
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
  const [selectedCategory, setSelectedCategory] = useState("الكل");

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
          <Item category={selectedCategory} num={showNum} />
        </div>
      </div>
      <div className="button--container">
        <Link to="/catagory">
          <Button onClick={handleShowAll} text="عرض الكل" />
        </Link>

        {console.log(showNum)}
      </div>
    </>
  );
}

export default Category;
