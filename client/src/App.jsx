import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import axios from "axios";
import AccountPage from "./pages/Account";

axios.defaults.baseURL = "http://localhost:2030/";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subPage?" element={<AccountPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
