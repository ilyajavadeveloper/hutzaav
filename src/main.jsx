// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Product from "./components/Product"; // ← вот это строка у тебя отсутствует или сломана
import "./i18n"; // добавить ДО App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
