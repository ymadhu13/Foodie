// src/pages/Restaurants.jsx
import restaurants from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

export default function Restaurants() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">🍔 All Restaurants</h2>
      <p className="text-muted">
        Browse through top restaurants near you and explore their menus.
      </p>

      <div className="row">
        {restaurants.map((res) => (
          <div key={res.id} className="col-md-3 col-sm-6 mb-4">
            <RestaurantCard restaurant={res} />
          </div>
        ))}
      </div>
    </div>
  );
}
