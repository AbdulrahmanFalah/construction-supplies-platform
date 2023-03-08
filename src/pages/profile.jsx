import React from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../components/index";
import { PersonalSettings } from "../components/index";
function Profile() {
  return (
    <>
      <Navbar></Navbar>
      <PersonalSettings></PersonalSettings>
    </>
  );
}
export default Profile;
