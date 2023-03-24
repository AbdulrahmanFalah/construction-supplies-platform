import React, { useState, useMemo } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserState } from "./hooks/index.js";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  RegisterPage1,
  Profile,
  CatagoryPage,
  StoresPage,
  StorePage,
  CartPage,
  StoreDashbord,
} from "./pages/index.js";

function App() {
  const [user, setUser] = useState(false);
  const userState = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserState.Provider value={userState}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register1" element={<RegisterPage1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catagory" element={<CatagoryPage />} />
        <Route path="/nearby-stores" element={<StoresPage />} />
        <Route path="/storeProfile/:id" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/store-dashbord" element={<StoreDashbord />} />
      </Routes>
    </UserState.Provider>
  );
}

export default App;
