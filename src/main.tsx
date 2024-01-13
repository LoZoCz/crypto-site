import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import "./assets/scss/main.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
