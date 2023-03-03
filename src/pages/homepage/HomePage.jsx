import React from "react";
import { Navbar, Info } from "../..//components/index.js";
import { NearbyStores, Category, Footer } from "../..//containers/index.js";
function HomePage() {
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
export default HomePage;
