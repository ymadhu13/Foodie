// src/pages/Login.jsx
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #FFDE59, #FF914D)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "420px",
          borderRadius: "20px",
          backgroundColor: "#fffdf7",
        }}
      >
        {/* Brand Logo */}
        <div className="text-center mb-3">
          <h1 className="fw-bold text-danger">🍴 Foodie</h1>
          <p className="text-muted">Welcome back, food lover! 😋</p>
        </div>

        {/* Login Form */}
        <form>
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
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-3 text-end">
            <a href="#" className="text-decoration-none text-danger small">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            className="btn btn-danger w-100 rounded-pill fw-semibold"
            style={{ fontSize: "1.1rem" }}
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <hr className="my-4" />

        {/* Signup Redirect */}
        <p className="text-center">
          New to <span className="fw-bold text-danger">Foodie</span>?{" "}
          <Link to="/signup" className="text-decoration-none fw-bold text-primary">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
