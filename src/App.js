import React from "react";
import "./App.css";
import { Navbar, Info } from "./components/index.js";
import { NearbyStores, Category, Footer } from "./containers/index.js";
function App() {
  return (
    <>
      <Navbar />
      <Info />
      <NearbyStores />
      <Category />
      <Footer />
    </>
  );
}

export default App;
