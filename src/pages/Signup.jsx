// src/pages/Signup.jsx
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #FF914D, #FF5757)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "450px",
          borderRadius: "20px",
          backgroundColor: "#fffdf7",
        }}
      >
        {/* Brand Logo */}
        <div className="text-center mb-3">
          <h1 className="fw-bold text-danger">🍴 Foodie</h1>
          <p className="text-muted">Join the family & taste happiness! 🍕🍔</p>
        </div>

        {/* Signup Form */}
        <form>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control rounded-pill px-3"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-pill px-3"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill px-3"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Submit */}
          <button
            className="btn btn-danger w-100 rounded-pill fw-semibold"
            style={{ fontSize: "1.1rem" }}
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <hr className="my-4" />

        {/* Login Redirect */}
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none fw-bold text-primary">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
