import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-dark text-light mt-5">
      {/* App Download Section */}
      <div className="app-download-section py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="mb-4 mb-md-0 text-center text-md-start">
            <h2 className="fw-bold text-white">
              For better experience, download the Foodie app now 📲
            </h2>
            <p className="mb-3 text-light">
              Get delicious meals at your fingertips with faster delivery & exclusive offers.
            </p>
          </div>

          <div className="d-flex gap-3 justify-content-center">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={{ height: "60px" }}
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                style={{ height: "60px" }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="container text-center py-5">
        {/* Brand */}
        <h3 className="fw-bold mb-2">Foodie 🍴</h3>
        <p className="mb-4">Delicious meals, delivered fresh & fast.</p>

        {/* Navigation Links */}
        <div className="mb-4">
          <Link to="/" className="text-light text-decoration-none mx-3 footer-link">
            Home
          </Link>
          <Link to="/about" className="text-light text-decoration-none mx-3 footer-link">
            About
          </Link>
          <Link to="/contact" className="text-light text-decoration-none mx-3 footer-link">
            Contact
          </Link>
          <Link to="/privacy" className="text-light text-decoration-none mx-3 footer-link">
            Privacy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mb-4">
          <a href="#" className="text-light mx-3 fs-4 footer-social">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-light mx-3 fs-4 footer-social">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-light mx-3 fs-4 footer-social">
            <i className="bi bi-twitter"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0 small">
          © {new Date().getFullYear()} <span className="fw-bold">Foodie</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}