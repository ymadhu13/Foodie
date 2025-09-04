// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Restaurants from "./pages/Restaurants";
import Cuisines from "./pages/Cuisines";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <Router>
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Routes */}
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/restaurant/:id"
            element={<RestaurantPage addToCart={addToCart} />}
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/offers" element={<Offers />} />

          {/* Extra pages */}
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/cuisines" element={<Cuisines />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>

      {/* Footer */}
      <FooterSection />
    </Router>
  );
}
