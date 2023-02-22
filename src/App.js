import React from "react";
import "./App.css";
import { Navbar, Info } from ".//components/index.js";
import { NearbyStores } from "./containers/index";
function App() {
  return (
    <>
      <Navbar />
      <Info />
      <NearbyStores />
    </>
  );
}

export default App;
