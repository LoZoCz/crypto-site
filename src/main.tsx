import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/main.scss";
import Home from "./pages/Home/Home.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import About from "./pages/About/About.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" />
        <Route path="/cryptoList" />
        <Route path="/cryptoDetails/:id" />
        <Route path="/exchangeList" />
        <Route path="/exchangeDetails/:id" />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
