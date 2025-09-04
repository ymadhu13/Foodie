// src/components/RestaurantCard.jsx
import { Link } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="card restaurant-card shadow-sm h-100">
      {/* Restaurant Image */}
      <img
        src={restaurant.image}
        className="card-img-top"
        alt={restaurant.name}
      />

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title fw-bold">{restaurant.name}</h5>

        {/* Rating & Delivery Time */}
        <p className="card-text text-muted">
          ⭐ {restaurant.rating} · {restaurant.deliveryTime || "30-45 min"}
        </p>

        {/* Cost for Two */}
        <p className="card-text">{restaurant.costForTwo || "₹200 for two"}</p>

        {/* View Menu Button */}
        <Link
          to={`/restaurant/${restaurant.id}`}
          className="btn btn-outline-danger w-100 mt-2"
        >
          View Menu →
        </Link>
      </div>
    </div>
  );
}
