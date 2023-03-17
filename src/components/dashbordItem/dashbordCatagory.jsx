import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Model, DashbordItem } from "../../components/index.js";

function DashbordCategory() {
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
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <h2 className="title"></h2>
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
        <div
          className="item--container"
          onClick={() => {
            setShowModel(true);
          }}
        >
          <DashbordItem selectedCategory={selectedCategory} />
        </div>
      </div>
      <div className="button--container">
        <Link to="/catagory">
          <Button text="عرض الكل" />
        </Link>
      </div>

      {showModel && <Model closeModel={setShowModel} />}
    </>
  );
}

export default DashbordCategory;
