import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";

export default function RestaurantPage({ addToCart }) {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) return <p className="p-6">Restaurant not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{restaurant.name}</h1>
      <p>⭐ {restaurant.rating} · {restaurant.deliveryTime} · {restaurant.costForTwo}</p>

      <div className="mt-4 space-y-4">
        {restaurant.menu.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <span>{item.name} - ₹{item.price}</span>
            <button
              onClick={() => addToCart(item)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
