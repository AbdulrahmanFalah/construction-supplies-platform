import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  RegisterPage1,
  Profile,
  CatagoryPage,
  StoresPage,
  StorePage,
} from "./pages/index.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register1" element={<RegisterPage1 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/catagory" element={<CatagoryPage />} />
      <Route path="/nearby-stores" element={<StoresPage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
}

export default App;
