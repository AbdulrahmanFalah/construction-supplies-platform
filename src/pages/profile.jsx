import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../components/index";
import { InfoLine } from "../components/index";
function Profile() {
  return (
    <>
      <Navbar></Navbar>
      <InfoLine title="الاسم الكامل" value="عبدالرحمن فلاح"></InfoLine>
    </>
  );
}
export default Profile;
