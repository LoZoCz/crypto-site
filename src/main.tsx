import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import "./assets/scss/main.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login/Login.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" />
        <Route path="/dashboard" />
        <Route path="/cryptoList" />
        <Route path="/cryptoDetails/:id" />
        <Route path="/exchangeList" />
        <Route path="/exchangeDetails/:id" />
      </Routes>
    </Router>
  </React.StrictMode>,
);
