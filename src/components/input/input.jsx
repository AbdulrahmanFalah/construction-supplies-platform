import React from "react";
import "./input.css";
function Input(proops) {
  return (
    <div className="input">
      <form>
        <div class="group">
          <input type={proops.type} required />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>
            <span>
              <img className="icon" src={proops.icon} alt="" />
            </span>
            {proops.text}{" "}
          </label>
        </div>
      </form>
    </div>
  );
}

export default Input;
