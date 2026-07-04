import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./Landing_page/home/HomePage";
import Signup from "./Landing_page/signup/Signup";
import About from "./Landing_page/about/AboutPage";
import Products from "./Landing_page/products/ProductsPage";
import Pricing from "./Landing_page/pricing/PricingPage";
import Support from "./Landing_page/support/SupportPage";
import NotFound from "./Landing_page/NotFound";

import TopNav from "./Landing_page/TopNav";
import Footer from "./Landing_page/Footer";

// Dashboard
// import Dashboard from "./dashboard/src/components/Dashboard";
// import DashboardHome from "./dashboard/src/components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

function AppLayout() {
  const location = useLocation();

  // Hide TopNav & Footer on Dashboard pages
  // const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* {!hideLayout && <TopNav />} */}
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />

        {/* Dashboard */}
        {/* <Route path="/dashboard" element={<DashboardHome />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
      {/* {!hideLayout && <Footer />} */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </React.StrictMode>
);