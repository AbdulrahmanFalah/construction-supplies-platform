import React from "react";
import { Navbar, StoreProfile } from "../components/index";
import { Footer } from "../containers/index";
function StorePage() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <StoreProfile></StoreProfile>
      </div>
      <Footer> </Footer>
    </>
  );
}
export default StorePage;
