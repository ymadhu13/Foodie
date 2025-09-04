// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import LocationPicker from "./LocationPicker"; // import location picker

export default function Navbar() {
  const [cartCount] = useState(2);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow-sm sticky-top">
        <div className="container">
          {/* ✅ Brand Logo */}
          <Link to="/" className="navbar-brand fw-bold fs-3 text-dark">
            🍴 Foodie
          </Link>

          {/* ✅ Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Left Side Links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active fw-semibold">
                  🏠 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link fw-semibold">
                  ℹ️ About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-semibold">
                  📞 Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/offers" className="nav-link fw-semibold">
                  🔥 Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/restaurants" className="nav-link fw-semibold">
                  🍔 Restaurants
                </Link>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="d-flex align-items-center">
              {/* Location Search Toggle */}
              <button 
                className="btn btn-outline-dark me-3" 
                onClick={() => setShowLocation(!showLocation)}
              >
                📍 Location
              </button>

              {/* Cart */}
              <Link
                to="/checkout"
                className="btn btn-dark position-relative me-3"
              >
                🛒 Cart
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Sign In */}
              <Link to="/login" className="btn btn-danger px-4">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Show map when clicked */}
      {showLocation && (
        <div className="container my-3">
          <LocationPicker />
        </div>
      )}
    </>
  );
}
