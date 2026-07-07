import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import Home from "./components/Home";

// Read token from URL
const params = new URLSearchParams(window.location.search);
const token = params.get("token");

console.log("Token from URL:", token);

if (token) {
  localStorage.setItem("token", token);
  console.log("Saved in dashboard:", localStorage.getItem("token"));

  window.history.replaceState({}, document.title, "/");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);