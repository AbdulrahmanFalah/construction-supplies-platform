import React from "react";
import { Navbar, Stores } from "../components/index";
import { Footer } from "../containers/index";
function StoresPage() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className="title">السكلات القريبة من موقعك</h1>
        <Stores></Stores>
      </div>
      <Footer></Footer>
    </>
  );
}
export default StoresPage;
