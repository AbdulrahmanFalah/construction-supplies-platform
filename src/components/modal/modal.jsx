import React from "react";
import "./modal.css";
// import { Button } from "../index";
// import img from "../../assets//cement.webp";
// import xMark from "../../assets//x-mark.svg";
// import storeImg from "../../assets//store-img.svg";
// import plus from "../../assets//plus.png";
// import minus from "../../assets///minus-sign.png";

function Modal() {
  var modal = document.getElementById("myModal");
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  return (
    <>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
