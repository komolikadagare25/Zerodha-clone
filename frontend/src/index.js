import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup';
import About from './Landing_page/about/AboutPage';
import Products from './Landing_page/products/ProductsPage';
import Pricing from './Landing_page/pricing/PricingPage';
import Support from './Landing_page/support/SupportPage';
import NotFound from './Landing_page/NotFound';
import TopNav from './Landing_page/TopNav';
import Footer from './Landing_page/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <TopNav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);



