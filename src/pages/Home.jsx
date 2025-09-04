// src/pages/Home.jsx
import { useRef } from "react";<q></q>
import restaurants from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

import pizzaImg from "../assets/images/pizza.jpg";
import biryaniImg from "../assets/images/biryani.jpg";
import burgerImg from "../assets/images/burger.jpg";
import icecreamImg from "../assets/images/icecream.jpg";
import noodlesImg from "../assets/images/noodles.jpg";
import paneerImg from "../assets/images/paneer.jpg";
import offer1 from "../assets/offers/offer1.jpg";
import offer2 from "../assets/offers/offer2.jpg";
import offer3 from "../assets/offers/offer3.jpg";


export default function Home() {
  const restaurantsRef = useRef(null);

  const scrollToRestaurants = () => {
    restaurantsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const foods = [
    { name: "Cheese Burst Pizza", img: pizzaImg },
    { name: "Chicken Biryani", img: biryaniImg },
    { name: "Veg Burger", img: burgerImg },
    { name: "Chocolate Ice Cream", img: icecreamImg },
    { name: "Noodles", img: noodlesImg },
    { name: "Paneer Butter Masala", img: paneerImg },
  ];

  const cuisines = [
    "Pizza",
    "Biryani",
    "Burgers",
    "Ice Cream",
    "Mandi",
    "Shawarma"
  ];

  return (
    <div>
      {/* ✅ Hero Banner */}
      <div className="hero">
        <div className="hero-overlay text-center py-5">
          <h1 className="fw-bold">Craving? Order Now 🍴</h1>
          <p>Delicious meals delivered at lightning speed</p>

          {/* Search Bar */}
          <div className="mt-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for restaurants or dishes..."
            />
          </div>

          {/* Scroll to Restaurants Button */}
          <button
            className="btn btn-warning mt-4 fw-semibold px-4"
            onClick={scrollToRestaurants}
          >
            See Restaurants ↓
          </button>
        </div>
      </div>
      {/* ✅ Offers Carousel (using local assets) */}
<div className="container my-5">
  <h2 className="fw-bold mb-4">🔥 Special Offers</h2>
  <div
    id="offersCarousel"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner rounded shadow">
      <div className="carousel-item active">
        <img
          src={offer1}
          className="d-block w-100 carousel-img"
          alt="Offer 1"
        />
      </div>
      <div className="carousel-item">
        <img
          src={offer2}
          className="d-block w-100 carousel-img"
          alt="Offer 2"
        />
      </div>
      <div className="carousel-item">
        <img
          src={offer3}
          className="d-block w-100 carousel-img"
          alt="Offer 3"
        />
      </div>
    </div>

    {/* Carousel Controls */}
    <button
      className="carousel-control-prev custom-control"
      type="button"
      data-bs-target="#offersCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button
      className="carousel-control-next custom-control"
      type="button"
      data-bs-target="#offersCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</div>


      {/* ✅ Most Eaten Foods */}
      <div className="container my-5">
        <h2 className="fw-bold mb-4">🍽️ Most Eaten Foods</h2>
        <div className="row g-3">
          {foods.map((food) => (
            <div key={food.name} className="col-md-2 col-sm-4 col-6">
              <div className="food-card d-block text-center p-3 rounded shadow-sm bg-light h-100">
                <img
                  src={food.img}
                  alt={food.name}
                  className="img-fluid rounded mb-2"
                />
                <h6 className="fw-semibold">{food.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>




      {/* ✅ Top Restaurants */}
      <div
        id="restaurants-section"
        ref={restaurantsRef}
        className="container my-5"
      >
        <h2 className="fw-bold mb-4">🍔 Top Restaurants Near You</h2>
        <div className="row">
          {restaurants.map((res) => (
            <div key={res.id} className="col-md-3 col-sm-6 mb-4">
              <RestaurantCard restaurant={res} />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Popular Cuisines */}
      <div className="container my-5">
        <h2 className="fw-bold mb-4">🍴 Popular Cuisines</h2>
        <div className="row g-3">
          {cuisines.map((cuisine) => (
            <div key={cuisine} className="col-md-2 col-sm-4 col-6">
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="cuisine-card d-block w-100 text-center p-4 rounded shadow-sm fw-semibold btn btn-light"
              >
                {cuisine}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
